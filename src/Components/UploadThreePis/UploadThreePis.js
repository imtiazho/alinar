import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const UploadThreePis = () => {
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState("");
    const [uploadProductInfo, setUploadProductInfo] = useState({
        name: "",
        shareStePrice: "",
        image: "",
        productType: "",
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

    const handleProductMeterial = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, productMaterial: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, productMaterialError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, productMaterialError: 'Material' });
            setUploadProductInfo({ ...uploadProductInfo, productMaterial: "" });
        }
    }


    const handlePantMaterial = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, pantMaterial: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, pantMaterialError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, pantMaterialError: 'Pant' });
            setUploadProductInfo({ ...uploadProductInfo, pantMaterial: "" });
        }
    }

    const handleDupattaMaterial = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, dupattaMaterial: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, dupattaMaterialError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, dupattaMaterialError: 'dupatta' });
            setUploadProductInfo({ ...uploadProductInfo, dupattaMaterial: "" });
        }
    }

    const handleCategories = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, category: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, categoryError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, categoryError: 'category' });
            setUploadProductInfo({ ...uploadProductInfo, category: "" });
        }
    }

    const handleBrand = (e) => {
        if (e.target.value) {
            setUploadProductInfo({ ...uploadProductInfo, brand: e.target.value });
            setUploadProductErrors({ ...uploadProductErrors, brandError: '' });
        }
        else {
            setUploadProductErrors({ ...uploadProductErrors, brand: 'Brand' });
            setUploadProductInfo({ ...uploadProductInfo, category: "" });
        }
    }

    const handleThreepisUploadForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);
        if (uploadProductInfo.name ||
            uploadProductInfo.shareStePrice ||
            uploadProductInfo.image ||
            uploadProductInfo.productType ||
            uploadProductInfo.productMaterial ||
            uploadProductInfo.pantMaterial ||
            uploadProductInfo.dupattaMaterial ||
            uploadProductInfo.category ||
            uploadProductInfo.brand) {

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
                            },
                            body: JSON.stringify({
                                handCodedId: "threePis",
                                name: uploadProductInfo.name,
                                priceSet: uploadProductInfo.shareStePrice,
                                stock: "Available",
                                ratings: 5,
                                img: data.data.url,
                                deliveryInDhaka: 80,
                                deliveryOutDhaka: 110,
                                typeOfProduct: uploadProductInfo.productType,
                                productMaterial: uploadProductInfo.productMaterial,
                                pantMaterial: uploadProductInfo.pantMaterial,
                                dupattaMaterial: uploadProductInfo.dupattaMaterial,
                                brand: uploadProductInfo.brand,
                                category: uploadProductInfo.category,
                                colorGurrenty: "কালার গ্যারান্টি সচারচর আমরা দিয়ে থাকে তবে এ গ্যারান্টি তখনই কার্যকর হবে যখন আপনি প্রোডাক্টটি তার গুনাগুন অনুযায়ী প্রোপার ইউজ করবেন।",
                                quantity: 0,
                                delivered: 0,
                                shortDesc: null,
                                Long: null,
                                body: null,
                                priceJustSharee: null,
                                shareeLong: null,
                                panjabiSize: null,
                                note: null
                            })
                        })
                            .then(res => res.json())
                            .then(result => {
                                if (result.acknowledged) {
                                    toast.success("Uploaded Three Pis succesfully");
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
                imageError: "Error",
                productTypeError: "Error",
                productMaterialError: "Error",
                pantMaterialError: "Error",
                dupattaMaterialError: "Error",
                categoryError: "Error",
                brandError: "Error"
            })
        }
    }

    return (
        <div className="shipping">
            <div className="form-container">
                <form onSubmit={handleThreepisUploadForm}>
                    <div>
                        <p className='form-title-upload'>Upload Three Pis</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Name" onBlur={handleName} />
                        </div>
                        {uploadProductErrors.nameError && (
                            <p className="error-message">{uploadProductErrors.nameError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleSetPrice} type="text" placeholder="Price" />
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
                            <input onBlur={handleProductType} type="text" placeholder="Type of Product" />
                        </div>
                        {uploadProductErrors.productTypeError && (
                            <p className="error-message">{uploadProductErrors.productTypeError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleProductMeterial} type="text" placeholder="Product Meterial" />
                        </div>
                        {uploadProductErrors.productMaterialError && (
                            <p className="error-message">{uploadProductErrors.productMaterialError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handlePantMaterial} type="text" placeholder="Pant Meterial" />
                        </div>
                        {uploadProductErrors.pantMaterialError && (
                            <p className="error-message">{uploadProductErrors.pantMaterialError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleDupattaMaterial} type="text" placeholder="Dupatta Meterial" />
                        </div>
                        {uploadProductErrors.dupattaMaterialError && (
                            <p className="error-message">{uploadProductErrors.dupattaMaterialError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleCategories} type="text" placeholder="Categories" />
                        </div>
                        {uploadProductErrors.categoryError && (
                            <p className="error-message">{uploadProductErrors.categoryError}</p>
                        )}
                    </div>

                    <div>
                        <div className="input-field">
                            <input onBlur={handleBrand} type="text" placeholder="Brand" />
                        </div>
                        {uploadProductErrors.brandError && (
                            <p className="error-message">{uploadProductErrors.brandError}</p>
                        )}
                    </div>

                    <div className="input-field">
                        <input type="submit" value="SAVE & CONTINUE" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadThreePis;