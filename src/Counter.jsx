import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './slice/couterslice';

export default function Counter() {

    const counter= useSelector(y=>y.counter.counter);

    const usedis = useDispatch();

    const add = ()=>{

        usedis(inc());
    }

    const dec1= ()=>{
        usedis(dec());
    }



  return (
    <div>{counter}
        <button onClick={add}>+</button>
        <button onClick={dec1}>-</button>
    </div>
  )
}
