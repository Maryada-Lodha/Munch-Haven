import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';

import { useDispatchCart } from '../context/cart_context';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: theme.spacing(2),
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




export default function CartTable({ data }) {
  let dispatch = useDispatchCart()

  const grandTotal = data.reduce((total, food) => total + food.price, 0);

  return (
    <TableContainer component={Paper} style={{ maxWidth: 1200, marginTop: 50, marginLeft: "auto", marginRight: "auto" }}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Food Item</StyledTableCell>
            <StyledTableCell align="left">Size</StyledTableCell>
            <StyledTableCell align="left">Quantity&nbsp;</StyledTableCell>
            <StyledTableCell align="left">Price&nbsp;</StyledTableCell>
            <StyledTableCell align="left">&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((food, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {food.name}
              </StyledTableCell>
              <StyledTableCell align="left">{food.size}</StyledTableCell>
              <StyledTableCell align="left">{food.qty}</StyledTableCell>
              <StyledTableCell align="left">{food.price}</StyledTableCell>
              <StyledTableCell align="left" onClick={() => { dispatch({ type: "Remove_from_Cart", index: index}) }}><DeleteIcon /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 2, backgroundColor: 'white' }}>
        <Box sx={{ fontSize: 18, fontWeight: 'bold' }}>
          Grand Total: ₹{grandTotal.toFixed(2)}
        </Box>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Box>
    </TableContainer>
  );
}
