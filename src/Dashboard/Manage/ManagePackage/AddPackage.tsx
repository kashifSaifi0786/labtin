import React from 'react';
import './AddPackage.css';

const AddPackage = () => {
    const handleAddPackage = (e: React.FormEvent) => {
        e.preventDefault();
    }
    return (
        <div className='add_package'>
            <h1 className='heading'>Add New Package</h1>
            <form onSubmit={handleAddPackage}>
                <input type="text" name="title" placeholder='Package Title' />
                <textarea name="detail" placeholder='Package Details' />
                <input type="number" name="originalPrice" placeholder='Original Price' />
                <input type="number" name="parameters" placeholder='Parameters' />
                <input type="number" name="discountPrice" placeholder='Discount Price' />
                <button type="submit" className='add_package_btn'>Add Package</button>
            </form>
        </div>
    );
};

export default AddPackage;