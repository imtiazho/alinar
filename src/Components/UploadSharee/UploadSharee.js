import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './UploadSharee.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';

const UploadSharee = () => {
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
        onlyShare: "",
        image: "",
        productType: "",
        productMaterial: "",
        shareeLong: ""
    });

    const [uploadProductErrors, setUploadProductErrors] = useState({
        nameError: "",
        shareStePriceError: "",
        onlyShareError: "",
        imageError: "",
        productTypeError: "",
        productMaterialError: "",
        shareeLongError: ""
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
            setUploadProductErrors({ ...uploadProductErrors, shareStePriceError: 'Share Set Price is required' });
            setUploadProductInfo({ ...uploadProductInfo, shareStePrice: "" });
        }
    }

    const handleOnlyShareePrice = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, onlyShare: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, onlyShareError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, onlyShareError: 'Share Set Price is required' });
            setUploadProductInfo({ ...uploadProductInfo, onlyShare: "" });
        }
    }

    const handleImage = (e) => {
        setImageFile(e.target.files[0])
    }

    const handleProductType = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, productType: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, productTypeError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, productTypeError: 'Share Set Price is required' });
            setUploadProductInfo({ ...uploadProductInfo, productType: "" });
        }
    }

    const handleProductMeterial = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, productMaterial: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, productMaterialError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, productMaterialError: 'Share Set Price is required' });
            setUploadProductInfo({ ...uploadProductInfo, productMaterial: "" });
        }
    }

    const handleShareeLong = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, shareeLong: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, shareeLongError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, shareeLongError: 'Share Set Price is required' });
            setUploadProductInfo({ ...uploadProductInfo, shareeLong: "" });
        }
    }

    const handleShareeUploadForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);
        if (uploadProductInfo.name || uploadProductInfo.shareStePrice || uploadProductInfo.onlyShare || uploadProductInfo.image || uploadProductInfo.productType || uploadProductInfo.productMaterial || uploadProductInfo.shareeLong) {
            fetch('https://api.imgbb.com/1/upload?key=e1d2f79536b9ce2ec4dee06be35ccb21', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        fetch("http://localhost:5000/allProducts", {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `${user?.email} ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify({
                                handCodedId: "sharee",
                                name: uploadProductInfo.name,
                                priceSet: uploadProductInfo.shareStePrice,
                                priceJustSharee: uploadProductInfo.onlyShare,
                                stock: "Available",
                                ratings: 5,
                                img: data.data.url,
                                deliveryInDhaka: 80,
                                deliveryOutDhaka: 110,
                                typeOfProduct: uploadProductInfo.productType,
                                productMaterial: uploadProductInfo.productMaterial,
                                shareeLong: uploadProductInfo.shareeLong,
                                panjabiSize: "সকল সাইজ এভেইলেবল",
                                colorGurrenty: "কালার গ্যারান্টি সচারচর আমরা দিয়ে থাকে তবে এ গ্যারান্টি তখনই কার্যকর হবে যখন আপনি প্রোডাক্টটি তার গুনাগুন অনুযায়ী প্রোপার ইউজ করবেন।",
                                note: "পাঞ্জাবি আলাদা সেল হবে না",
                                quantity: 0,
                                delivered: 0,
                                shortDesc: null,
                                body: null,
                                Long: null,
                                pantMaterial: null,
                                brand: null,
                                dupattaMaterial: null,
                                category: null,
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
                                    toast.success("Uploaded Sharee succesfully");
                                    navigate("/shop")
                                }
                            })
                    }
                });
        }
        else {
            setUploadProductErrors({
                nameError: "Error",
                shareStePriceError: "Error",
                onlyShareError: "Error",
                imageError: "Error",
                productTypeError: "Error",
                productMaterialError: "Error",
                shareeLongError: "Error",
            })
        }

    }
    return (
        <div className="shipping">
            <div className="form-container">
                <form onSubmit={handleShareeUploadForm}>
                    <div>
                        <p className='form-title-upload'>Upload Sharee</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleName} type="text" placeholder="Sharee Name" />
                        </div>
                        {uploadProductErrors.nameError && (
                            <p className="error-message">{uploadProductErrors.nameError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleSetPrice} type="text" placeholder="Sharee Set Price" />
                        </div>
                        {uploadProductErrors.shareStePriceError && (
                            <p className="error-message">{uploadProductErrors.shareStePriceError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleOnlyShareePrice} type="text" placeholder="Only Sharee Price" />
                        </div>
                        {uploadProductErrors.onlyShareError && (
                            <p className="error-message">{uploadProductErrors.onlyShareError}</p>
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
                            <input onBlur={handleProductType} type="text" placeholder="Type of Product" />
                        </div>
                        {uploadProductErrors.productTypeError && (
                            <p className="error-message">{uploadProductErrors.productTypeError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleProductMeterial} type="text" placeholder="Product Material" />
                        </div>
                        {uploadProductErrors.productMaterialError && (
                            <p className="error-message">{uploadProductErrors.productMaterialError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleShareeLong} type="text" placeholder="Share Long" />
                        </div>
                        {uploadProductErrors.shareeLongError && (
                            <p className="error-message">{uploadProductErrors.shareeLongError}</p>
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

export default UploadSharee;