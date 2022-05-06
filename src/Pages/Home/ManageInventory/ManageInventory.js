import React from 'react';
import { toast } from 'react-toastify';
import ReviewCard from '../../ReviewCard/ReviewCard';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import '../../Shared/useBrands/useBrands'
import useBrands from '../../Shared/useBrands/useBrands';

const ManageInventory = () => {
    const [brands, setBrands] = useBrands()

    const handleDelete = id => {
        const confirm = window.confirm('Are you sure to delete?')
        if (confirm) {
            fetch(`http://localhost:5000/bikes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const rest = brands.filter(brand => brand._id !== id)
                    toast('Item Deleted!')
                    setBrands(rest)
                });
        }

    }

    return (
        <div>
            <PageTitle title='Manage Inventory'></PageTitle>
            <h2 className='m-text text-center my-4'>You can manage your inventory</h2>
            {
                brands.map(reviewCard => <ReviewCard key={reviewCard._id} handleDelete={handleDelete} reviewCard={reviewCard}></ReviewCard>)
            }
        </div>
    );
};
export default ManageInventory;
