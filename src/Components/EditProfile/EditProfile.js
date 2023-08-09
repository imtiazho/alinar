import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './EditProfile.css';

const EditProfile = () => {
    const [imageFile, setImageFile] = useState("");
    const [user, loading, userError] = useAuthState(auth);
    const navigate = useNavigate();

    const handleImage = (e) => {
        setImageFile(e.target.files[0])
    };

    const handleAddPhoto = e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', imageFile);

        fetch('https://api.imgbb.com/1/upload?key=e1d2f79536b9ce2ec4dee06be35ccb21', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    fetch(`http://server.alinarbd.com/user/${user.email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({ userImage: data.data.url })
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                        })
                }
            });
    }

    return (
        <div className='edit-profile-inner'>
            <div className="left-side">
                <form onSubmit={handleAddPhoto}>
                    <div className="profile">
                        <h3>Add Photo</h3>

                        <div className="profile-area">
                            <input onChange={handleImage} id='add-photo-btn' type="file" />
                            <label htmlFor='add-photo-btn'>+ Add Photo</label>
                        </div>
                    </div>

                    <button className='btn-2'>Save</button>
                </form>
            </div>
        </div >
    );
};

export default EditProfile;