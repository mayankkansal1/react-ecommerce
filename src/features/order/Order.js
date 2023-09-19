import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  createOrderAsync
} from './orderSlice';

export default function Order() {
  const dispatch = useDispatch();


  return (
    <div>
      <div>

      </div>
    </div>
  );
}
