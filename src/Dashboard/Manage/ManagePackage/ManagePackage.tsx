// import React, { useEffect } from 'react';
// import AddPackage from './AddPackage';
// import PackageRow from './PackageRow';
// import '../../../App.css';
// import './ManagePackage.css';
import { useNavigate } from 'react-router-dom';
// import { request } from '../../../utils/axios-utils';

// const ManagePackage = () => {
//     const navigate = useNavigate();
    
//     return (
//         <div className='manage-package'>
//             {/* <AddPackage /> */}
//             <p className='btn-container'><button
//                 onClick={() => navigate('/dashboard/addPackage')}
//                 className='add-btn'>+ Add Package</button></p>
//             <div className='table-container'>
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Details</th>
//                             <th>Parameters</th>
//                             <th>Original Price</th>
//                             <th>Discount Price</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             packages && packages.map(singlePackage => <PackageRow singlePackage={singlePackage} />)
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default ManagePackage;

// import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";


const ManagePackage = () => {
    const navigate = useNavigate()

    const packages = [
        { _id: 1, title: 'packages 1', details: 'details details details details details details details details details details details details details details', parameters: 90, originalPrice: 100, discountPrice: 50 },
        { _id: 2, title: 'packages 2', details: 'details details details details details details details details details details details details details details', parameters: 90, originalPrice: 100, discountPrice: 50 },
        { _id: 3, title: 'packages 3', details: 'details details details details details details details details details details details details details details', parameters: 90, originalPrice: 100, discountPrice: 50 },
        { _id: 4, title: 'packages 4', details: 'details details details details details details details details details details details details details details', parameters: 90, originalPrice: 100, discountPrice: 50 },
        { _id: 5, title: 'packages 5', details: 'details details details details details details details details details details details details details details', parameters: 90, originalPrice: 100, discountPrice: 50 },
    ];

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await userRequest("/orders");
//         setData(res.data);
//       } catch {}
//     };
    // getData();
//   }, [data]);

  return (
    <>
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Paramter</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Original Price</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {packages.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="tableCell">{item.title}</TableCell>
              <TableCell className="tableCell">{item.details}</TableCell>
              <TableCell className="tableCell">{item.parameters}</TableCell>
              <TableCell className="tableCell">{item.originalPrice}</TableCell>
              <TableCell className="tableCell">{item.discountPrice}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" sx={{my:5}} onClick={() => navigate('/dashboard/addPackage')}>Add Package</Button>
    </> 
  )
};

export default ManagePackage;