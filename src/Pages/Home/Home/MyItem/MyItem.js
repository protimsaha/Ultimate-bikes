import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Auth/Firebase.init';

const MyItem = () => {
    const [user] = useAuthState(auth)
    const email = user?.email;
    console.log(email)
    const [items, setItems] = useState([])
    useEffect(() => {
        const getItem = async () => {
            const url = `http://localhost:5000/items?email=${email}`
            const { data } = await axios.get(url)
            setItems(data)
        }
        getItem()

    }, [user, email])
    return (
        <div>
            <h2>Your import items</h2>
            {items.length}
        </div>
    );
};

export default MyItem;