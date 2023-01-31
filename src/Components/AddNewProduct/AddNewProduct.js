import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import CustomLink from '../CustomLink/CustomLink';

const AddNewProduct = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user);
    return (
        <div>
            <div className="items-short-nav">
                {admin && <CustomLink to="">Sharee</CustomLink>}
                {admin && <CustomLink to="uploadthreepis">Three Pis</CustomLink>}
                {admin && <CustomLink to="uploadabaya">Abaya</CustomLink>}
                {/* {admin && <CustomLink to="bestSelling">Best Selling</CustomLink>} */}
            </div>
            <div className="listing-on-rent">
                <Outlet />
            </div>
        </div>
    );
};

export default AddNewProduct;