import * as React from 'react';

import TextField from '@mui/material/TextField';
import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
  );
}
