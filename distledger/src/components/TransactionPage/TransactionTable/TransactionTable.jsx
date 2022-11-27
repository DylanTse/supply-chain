import React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import { TableHead, TableRow, TableCell, TableBody, TextField, InputLabel } from '@mui/material';
import { Select, MenuItem, FormControl, Button, SearchBar, Stack } from '@mui/material';
import data from './mock-data.json';
import "./TransactionTable.scss";


export default function Tabletest() {
    const[transaction, setTransaction] = useState(data);
    const[addFormData, setaddFormData] = useState({
        date: '',
        time: '',
        status: '',
        id: '',
        amount: '',
        receiver: '',
        note: '',

    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;

        setaddFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            date: addFormData.date,
            time: addFormData.time,
            status: addFormData.status,
            id: addFormData.id,
            amount: addFormData.amount,
            receiver: addFormData.receiver,
            note: addFormData.note
        };

        const newTransactions = [...transaction, newTransaction];
        setTransaction(newTransactions);
        
        {/* Makes the Form Inputs Empty after Each Submit ? Doesnt work for select dropdown */}
        event.target.reset();
    };

    const handleStatusChange = (event) => {
        event.preventDefault();
        setaddFormData({...addFormData, status: event.target.value})
    };

    const handleReceiverChange = (event) => {
        event.preventDefault();
        setaddFormData({...addFormData, receiver: event.target.value})
    };


  return (
    <div>
    <div className="inputForm">
    <form onSubmit={handleAddFormSubmit}>
        <input
        type="date"
        onChange={handleAddFormChange}
        name="date"
        required="required"
        />
        <input
        type="time"
        onChange={handleAddFormChange}
        name="time"
        required="required"
        />
        <FormControl sx={{ minWidth: 150, ml: 12 }} size="small" variant="outlined">
            <InputLabel>Status</InputLabel>
            <Select
            label="Status"
            size="small"
            required="required"
            name="status"
            onChange={handleStatusChange}
            defaultValue=''
            >
            <MenuItem value={'Delivered'}>Delivered</MenuItem>
            <MenuItem value={'In-Transit'}>In-Transit</MenuItem>
            <MenuItem value={'In-Warehouse'}>In-Warehouse</MenuItem>
            </Select>
        </FormControl>
        <TextField
        sx={{
          width: { sm: 20, md: 100 },
          ml: 11
        }}
        variant="outlined"
        size="small"
        label="ID"
        disabled='True'
        name="id"
        onChange={handleAddFormChange}
        />
        <TextField
        sx={{
            width: { sm: 20, md: 100 },
            ml: 9
          }}
        variant="outlined"
        size="small"
        label="Amount"
        required="required"
        name="amount"
        onChange={handleAddFormChange}
        />
        <FormControl sx={{ minWidth: 150, ml: 5 }} size="small" variant="outlined">
            <InputLabel>Receiver</InputLabel>
            <Select
            label="Receiver"
            size="small"
            requred="required"
            name="status"
            onChange={handleReceiverChange}
            defaultValue=''
            >
            <MenuItem value={'Costco'}>Costco</MenuItem>
            <MenuItem value={'HEB'}>HEB</MenuItem>
            <MenuItem value={'Zara'}>Zara</MenuItem>
            <MenuItem value={'Add New Purchaser'}>Add New Purchaser</MenuItem>
            </Select>
        </FormControl>
        <TextField
        sx={{
          width: { sm: 20, md: 100 },
          ml: 11
        }}
        variant="outlined"
        size="small"
        name="note"
        onChange={handleAddFormChange}
        />
    <Button type="submit" variant="outlined" sx={{ml: 2}}>Enter</Button>
    </form>
    </div>

    <Table>
        <TableHead>
            <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Amount</TableCell>
                <TableCell align="center">Receiver</TableCell>
                <TableCell align="left">Notes</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {transaction.map((information) => (
                <TableRow>
                    <TableCell align="center">{information.date}</TableCell>
                    <TableCell align="center">{information.time}</TableCell>
                    <TableCell align="center">{information.status}</TableCell>
                    <TableCell align="center">{information.id}</TableCell>
                    <TableCell align="center">{information.amount}</TableCell>
                    <TableCell align="center">{information.receiver}</TableCell>
                    <TableCell align="left">{information.note}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>

    </div>

  )
}
