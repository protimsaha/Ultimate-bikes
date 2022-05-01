import React, { useEffect, useState } from 'react';
import Brand from '../../Brand/Brand';

const Inventory = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])
    return (

        <div className='container row mx-auto'>
            {
                brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Inventory;