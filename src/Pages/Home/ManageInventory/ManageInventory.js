import React from 'react';
import ReviewCard from '../../ReviewCard/ReviewCard';
import '../../Shared/useBrands/useBrands'
import useBrands from '../../Shared/useBrands/useBrands';

const ManageInventory = () => {
    const [brands] = useBrands()

    return (
        <div>
            <h2 className='m-text text-center my-4'>You can manage your inventory</h2>
            {
                brands.map(reviewCard => <ReviewCard key={reviewCard._id} reviewCard={reviewCard}></ReviewCard>)
            }
        </div>
    );
};
export default ManageInventory;
