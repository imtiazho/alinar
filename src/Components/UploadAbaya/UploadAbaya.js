import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './UploadAbaya.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const UploadAbaya = () => {
    const [user, loading, UserError] = useAuthState(auth);
    const [serverStatus, setServerStatus] = useState(200);
    const handleSignOut = () => {
        signOut(auth);
        navigate("/login");
        // toast.success("Something is wrong login again!");
    };
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState("");
    const [uploadProductInfo, setUploadProductInfo] = useState({
        name: "",
        shareStePrice: "",
        image: "",
        productType: "",
        shortDesc: "",
        Long: "",
        size: "",
        productMaterial: "",
        pantMaterial: "",
        dupattaMaterial: "",
        category: "",
        brand: "",
    });

    const [uploadProductErrors, setUploadProductErrors] = useState({
        nameError: "",
        shareStePriceError: "",
        imageError: "",
        productTypeError: "",
        shortDescError: "",
        LongError: "",
        sizeError: "",
        productMaterialError: "",
        pantMaterialError: "",
        dupattaMaterialError: "",
        categoryError: "",
        brandError: "",
    });

    const handleName = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, name: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, nameError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, nameError: 'Name is required' });
            setUploadProductInfo({ ...uploadProductInfo, name: "" });
        }
    }

    const handleSetPrice = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, shareStePrice: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, shareStePriceError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, shareStePriceError: 'set price' });
            setUploadProductInfo({ ...uploadProductInfo, shareStePrice: "" });
        }
    }

    const handleImage = (e) => {
        setImageFile(e.target.files[0]);
    }

    const handleProductType = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, productType: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, productTypeError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, productTypeError: 'Type' });
            setUploadProductInfo({ ...uploadProductInfo, productType: "" });
        }
    }

    const handleDetails = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, shortDesc: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, shortDescError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, shortDescError: 'short decs' });
            setUploadProductInfo({ ...uploadProductInfo, shortDesc: "" });
        }
    }

    const handleAbayaLong = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, Long: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, LongError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, LongError: 'long' });
            setUploadProductInfo({ ...uploadProductInfo, Long: "" });
        }
    }

    const handleAbayaSize = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, size: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, sizeError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, sizeError: 'size' });
            setUploadProductInfo({ ...uploadProductInfo, size: "" });
        }
    }

    const handleUploadAbayaForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', imageFile);
        if (uploadProductInfo.name || uploadProductInfo.size || uploadProductInfo.shareStePrice || imageFile || uploadProductInfo.productType || uploadProductInfo.shortDesc || uploadProductInfo.Long || uploadProductInfo.size) {
            fetch('https://api.imgbb.com/1/upload?key=e1d2f79536b9ce2ec4dee06be35ccb21', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        fetch("http://server.alinarbd.com/allProducts", {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify({
                                handCodedId: "abaya",
                                name: uploadProductInfo.name,
                                priceSet: uploadProductInfo.shareStePrice,
                                stock: "Available",
                                ratings: 5,
                                img: data.data.url,
                                deliveryInDhaka: 80,
                                deliveryOutDhaka: 110,
                                typeOfProduct: uploadProductInfo.productType,
                                shortDesc: uploadProductInfo.shortDesc,
                                Long: uploadProductInfo.Long,
                                body: uploadProductInfo.size,
                                colorGurrenty: "কালার গ্যারান্টি সচারচর আমরা দিয়ে থাকে তবে এ গ্যারান্টি তখনই কার্যকর হবে যখন আপনি প্রোডাক্টটি তার গুনাগুন অনুযায়ী প্রোপার ইউজ করবেন।",
                                delivered: 0,
                                quantity: 0,
                                priceJustSharee: null,
                                pantMaterial: null,
                                brand: null,
                                dupattaMaterial: null,
                                category: null,
                                productMaterial: null,
                                shareeLong: null,
                                panjabiSize: null,
                                note: null
                            })
                        })
                            .then(res => {
                                setServerStatus(res.status);
                                if (res.status === 401 || res.status === 403) {
                                    handleSignOut();
                                }
                                return res.json()
                            })
                            .then(result => {
                                if (result.acknowledged) {
                                    toast.success("Uploaded baya succesfully");
                                    navigate("/shop")
                                }
                            })
                    }
                });
        }
        else {
            setUploadProductErrors({
                nameError: 'Name is required',
                shareStePriceError: 'set price',
                imageError: "Error",
                productTypeError: 'Type',
                shortDescError: 'short decs',
                LongError: 'long',
                sizeError: 'size'
            });
        }

    }

    return (
        <div className="shipping">
            <div className="form-container">
                <form onSubmit={handleUploadAbayaForm}>
                    <div>
                        <p className='form-title-upload'>Upload Abaya</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleName} type="text" placeholder="Abaya name" />
                        </div>
                        {uploadProductErrors.nameError && (
                            <p className="error-message">{uploadProductErrors.nameError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleSetPrice} type="text" placeholder="Abaya Price" />
                        </div>
                        {uploadProductErrors.shareStePriceError && (
                            <p className="error-message">{uploadProductErrors.shareStePriceError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onChange={handleImage} type="file" id='upload-photo' />
                            <label id='upload-photo-label' htmlFor='upload-photo'>+ Add a Photo</label>
                        </div>
                        {uploadProductErrors.imageError && (
                            <p className="error-message">{uploadProductErrors.imageError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleProductType} type="text" placeholder="Type of product" />
                        </div>
                        {uploadProductErrors.productTypeError && (
                            <p className="error-message">{uploadProductErrors.productTypeError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleDetails} type="text" placeholder="Abaya Details" />
                        </div>
                        {uploadProductErrors.shortDescError && (
                            <p className="error-message">{uploadProductErrors.shortDescError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleAbayaLong} type="text" placeholder="Abaya Long" />
                        </div>
                        {uploadProductErrors.LongError && (
                            <p className="error-message">{uploadProductErrors.LongError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleAbayaSize} type="text" placeholder="Abaya Size" />
                        </div>
                        {uploadProductErrors.sizeError && (
                            <p className="error-message">{uploadProductErrors.sizeError}</p>
                        )}
                    </div>



                    <div className="input-field">
                        <input type="submit" value="SAVE & UPLOAD" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadAbaya;