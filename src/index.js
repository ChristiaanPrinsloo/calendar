import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calendar from 'react-calendar';
import { render } from "react-dom"
import 'react-calendar/dist/Calendar.css'


const ReactCalendar = () => {
   const[date, setDate] = useState(new Date())

   const onChange = (date) => {
    setDate(date)
   }

   return <Calendar onChange={onChange} value={date} />
}

render(<ReactCalendar />, document.querySelector("#root"));


