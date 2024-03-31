import React from 'react';
import MUITable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './table.scss'

const DataTables = () => {
  // Static order data
  const order = {
    id: "1234",
    products: [
      {
        title: "Product 1",
        imageUrl: "product1.jpg",
        quantity: 2,
        total: 100,
      },
      {
        title: "Product 2",
        imageUrl: "product2.jpg",
        quantity: 1,
        total: 50,
      },
    ],
  };

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />

          <div className="tableContainer" style={{marginTop:'30px', width:'80%', display:'flex', alignItems:'center', justifyContent:'center', marginLeft:'145px'}}>
            <TableContainer component={Paper} className="table">
              <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead style={{background:'#B783EB'}}>
                  <TableRow style={{background:'#D8BCFF'}}>
                    <TableCell className="tableCell">Product Title</TableCell>
                    <TableCell className="tableCell">Image</TableCell>
                    <TableCell className="tableCell">Quantity</TableCell>
                    <TableCell className="tableCell" style={{ display: 'flex' }}>Total</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {order.products.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="tableCell">{item.title}</TableCell>
                      <TableCell className="tableCell">
                        <img src={`https://static-01.daraz.pk/p/82f8db3690c76b2d433046b37ed9ba4e.jpg_300x0q75.webp`} width={'100px'} alt={item.title} />
                      </TableCell>
                      <TableCell className="tableCell">{item.quantity}</TableCell>
                      <TableCell className="tableCell">{item.total} PKR</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </MUITable>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTables;
