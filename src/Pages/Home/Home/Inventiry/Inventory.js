import React, { useEffect, useState } from 'react';
import Brand from '../../Brand/Brand';

const Inventory = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (

        <div className='container row mx-auto mb-5'>
            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Inventory;