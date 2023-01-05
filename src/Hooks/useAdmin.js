import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState("")
    useEffect(() => {
        const email = user?.email;
        fetch(`http://localhost:5000/admin/${email}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user])

    return [admin, setAdmin];
};

export default useAdmin;