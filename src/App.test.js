import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import {updateTimes} from './Components/Main'
import {initializeTimes} from './Components/Main'



test('Initializetime works properly', ()=>{


  const expectedValues = ["18:00","19:00","20:00","21:00","22:00"];
  
  const result= initializeTimes();

  expect(result).toEqual(expectedValues);
})

test('updatetimes works properly', ()=>{

  const mockState = ["18:00", "19:00", "20:00", "21:00", "22:00"];

  let date= new Date();

  const result = updateTimes(mockState, date);
  let length = result.length();

  expect(length).toBeGreaterThan(0);

})

