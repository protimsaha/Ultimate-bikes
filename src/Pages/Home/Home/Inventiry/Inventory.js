import React from 'react';
import useBrands from '../../../Shared/useBrands/useBrands';
import Brand from '../../Brand/Brand';
import PageTitle from '../../../Shared/PageTitle/PageTitle';


const Inventory = () => {
    const [brands] = useBrands()

    return (
        <div className='container row mx-auto mb-5'>
            <PageTitle title='Inventory'></PageTitle>

            {
                brands.map(brand => <Brand key={brand._id} brand={brand}></Brand>)
            }
        </div>
    );
};

export default Inventory;