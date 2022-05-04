import React from 'react';
import ReviewCard from '../../ReviewCard/ReviewCard';
import '../../Shared/useBrands/useBrands'
import useBrands from '../../Shared/useBrands/useBrands';

const ManageInventory = () => {
    const [brands, setBrands] = useBrands()

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete?')
        if (confirm) {
            const url = `http://localhost:5000/bikes/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const rest = brands.filter(brand => brand._id !== id)
                    setBrands(rest)
                })
        }

    }

    return (
        <div>
            <h2 className='m-text text-center my-4'>You can manage your inventory</h2>
            {
                brands.map(reviewCard => <ReviewCard key={reviewCard._id} handleDelete={handleDelete} reviewCard={reviewCard}></ReviewCard>)
            }
        </div>
    );
};
export default ManageInventory;
