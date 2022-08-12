import React from 'react';
import { Package } from '../../../modals/Package';

interface Props {
    singlePackage: Package
}

const PackageRow: React.FC<Props> = ({ singlePackage }) => {
    const { _id, title, details, originalPrice, discountPrice } = singlePackage;
    return (
        <tr>
            <td>{title}</td>
            <td>{details}</td>
            <td>{originalPrice}</td>
            <td>{discountPrice}</td>
            <td><button className='delete-btn'>Delete</button></td>
        </tr>
    );
};

export default PackageRow;