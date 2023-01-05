import React, { useState } from 'react';

const Imgbb = () => {
    const [imageFile, setImageFile] = useState("")
    const handleImage = (e) => {
        setImageFile(e.target.files[0])
    };


    // const handleImage = (e) => {
    //     setImageFile(e.target.files[0]);
    //     let photoLinkToDatabase;

    //     const formData = new FormData();
    //     formData.append('image', imageFile);
    //     fetch('https://api.imgbb.com/1/upload?key=e1d2f79536b9ce2ec4dee06be35ccb21', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(result => {
    //             if (result.success) {
    //                 photoLinkToDatabase = result.data.url;
    //                 console.log(photoLinkToDatabase)
    //             }
    //         });
    // };


    const handleForm = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);

        fetch('https://api.imgbb.com/1/upload?key=e1d2f79536b9ce2ec4dee06be35ccb21', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            });
    }
    return (
        <form onSubmit={handleForm}>
            <div>
                <input onChange={handleImage} accept="image/png, image/jpeg" type="file" id="file" />
                <label htmlFor="file">Choose a Photo</label>
            </div>

            <input type="submit" value='submit' />
        </form>
    );
};

export default Imgbb;