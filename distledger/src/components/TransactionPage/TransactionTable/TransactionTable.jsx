import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


function createData(date, time, status, amount, id, receiver) {
  return { date, time, status, amount, id, receiver };
}

const rows = [
  createData("11/20/2022", "12:20 PM", "Delivered", "$550.87", "56AW9", "Costco"),
  createData("10/10/2022", "11:00 PM", "Pending", "$459.60", "A9WR5", "HEB"),
  createData("09/07/2022", "03:30 AM", "In-Warehouse", "$209.13", "90LAP", "Whole Foods"),
  createData("06/15/2022", "07:20 AM", "Delivered", "$89.90", "CR538", "Pizza Press"),
  createData("04/12/2022", "02:20 PM", "Delivered", "$1047.56", "KD980", "Zara"), 
];

export default function TransactionTable() {
  const[status, setStatus] = React.useState('');

  const changeStatus = (event) => {
    setStatus(event.target.value)
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
         {/* First Row of Table = Column Names */}
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Receiver</TableCell>
          </TableRow>
          {/* Second Row of Table = Implement Buttons to Enter Data */}
          <TableRow>
            <TableCell align="center">Date Button</TableCell>
            <TableCell align="center">Time Button</TableCell>
            {/* Status of Delivery Dropdown */}
            <TableCell align="center">
            <Box sx={{ minWidth: 50 }}>
              <FormControl fullWidth>
                <InputLabel id="status-label">Enter Status</InputLabel>
              <Select label="Status" value={status} onChange={changeStatus}>
                <MenuItem value={1}>Delivered</MenuItem>
                <MenuItem value={2}>In-Transit</MenuItem>
                <MenuItem value={3}>In-Warehouse</MenuItem>
              </Select>
              </FormControl>
            </Box>
            </TableCell>
            {/* Generated ID */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.receiver}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}