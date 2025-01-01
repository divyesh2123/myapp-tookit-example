import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { fetchTodos } from './slice/todoslice';

export default function ToDoList() {
    const data= useSelector(y=>y.todolist);
    const dip= useDispatch();

    useEffect(()=>{

        dip(fetchTodos())
    },[]);


    console.log(data);
  return (
    <div>{data}</div>
  )
}
