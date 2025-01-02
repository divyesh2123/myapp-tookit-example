import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { fetchTodos } from './slice/todoslice';
import { requesttodo } from './slice/todolistnew';

export default function ToDoList() {
    const data= useSelector(y=>y.newtodolist);
    const dip= useDispatch();

    useEffect(()=>{

        dip(requesttodo())
    },[]);


    console.log(data);
  return (
    <div></div>
  )
}
