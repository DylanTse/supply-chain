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
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


function createData(date, time, status, id, amount, receiver) {
  return { date, time, status, id, amount, receiver };
}

function generateRandom() {
  const min = 10000
  const rand = min + Math.random() * (Math.random(1, 10))
};

const rows = [
  createData("11/20/2022", "12:20 PM", "Delivered", "56AW9", "$550.87", "Costco"),
  createData("10/10/2022", "11:00 PM", "Pending", "A9WR5", "$459.60", "HEB"),
  createData("09/07/2022", "03:30 AM", "In-Warehouse", "90LAP", "$209.13", "Whole Foods"),
  createData("06/15/2022", "07:20 AM", "Delivered", "CR538", "$89.90", "Pizza Press"),
  createData("04/12/2022", "02:20 PM", "Delivered", "KD980", "$1047.56", "Zara"), 
];

export default function TransactionTable() {
  const[status, setStatus] = React.useState('');

  const changeStatus = (event) => {
    setStatus(event.target.value)
  };

  const[receiver, setReceiver] = React.useState('');

  const changeReceiver = (event) => {
    setReceiver(event.target.value)
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
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Receiver</TableCell>
          </TableRow>
          </TableHead>

          {/* Second Row of Table = Implement Buttons to Enter Data */}
          <TableRow>
            <TableCell align="center">Date Button</TableCell>
            <TableCell align="center">Time Button</TableCell>
            {/* Status of Delivery Dropdown */}
            <TableCell align="center">
            <Box sx={{ minWidth: 50 }}>
              <FormControl sx={{ m: 1, minWidth: 150 }} size="small" variant="standard">
                <InputLabel id="status-label">Status</InputLabel>
              <Select label="Status" value={status} onChange={changeStatus}>
                <MenuItem value={1}>Delivered</MenuItem>
                <MenuItem value={2}>In-Transit</MenuItem>
                <MenuItem value={3}>In-Warehouse</MenuItem>
              </Select>
              </FormControl>
            </Box>
            </TableCell>
            {/* Generated ID */}
            <TableCell align="center">. . .</TableCell>
            {/* Amount */}
            <TableCell align="center">
            <TextField 
              sx={{
                width: { sm: 20, md: 100 },
              }}
              id="standard" 
              variant="outlined" 
              size="small" 
                />
            {/* Receiver */}    
            </TableCell>
            <TableCell align="center">
            <Box sx={{ minWidth: 50 }}>
              <FormControl sx={{ m: 1, minWidth: 150 }} size="small" variant="standard">
                <InputLabel id="receiver-label">Receiver</InputLabel>
              <Select label="Status" value={receiver} onChange={changeReceiver}>
                <MenuItem value={1}>Costco</MenuItem>
                <MenuItem value={2}>Aritzia</MenuItem>
                <MenuItem value={3}>Randalls</MenuItem>
                <MenuItem value={4}>Add New Purchaser</MenuItem>
              </Select>
              </FormControl>
            </Box>
            </TableCell>
          </TableRow>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.date}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.time}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.receiver}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}