import React from 'react';
import './UploadAbaya.css'

const abayaForUpload = {
    handCodedId: "abaya",
    name: "Kaftan Abaya",
    priceSet: 1220,
    stock: "Available",
    ratings: 5,
    img: "https://i.ibb.co/Dt1nXHh/IMG-1076.jpg",
    deliveryInDhaka: 80,
    deliveryOutDhaka: 110,
    typeOfProduct: "ABAYA",
    shortDesc: "Double Jorjet and Inner part American Crap.",
    Long: 45,
    body: "Free Size",
    colorGurrenty: "কালার গ্যারান্টি সচারচর আমরা দিয়ে থাকে তবে এ গ্যারান্টি তখনই কার্যকর হবে যখন আপনি প্রোডাক্টটি তার গুনাগুন অনুযায়ী প্রোপার ইউজ করবেন।",
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
}

const UploadAbaya = () => {
    return (
        <div className="shipping">
            <div className="form-container">
                <form>
                    <div>
                        <p className='form-title-upload'>Upload Abaya</p>
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya name" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Price" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Image" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Type of product" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Details" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Long" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
                    </div>

                    <div>
                        <div className="input-field">
                            <input type="text" placeholder="Abaya Size" />
                        </div>
                        {/* {errors.nameError && (
                            <p className="error-message">{errors.nameError}</p>
                        )} */}
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