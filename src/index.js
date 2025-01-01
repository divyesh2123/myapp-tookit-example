import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './store/store';
import Counter from './Counter';
import ToDoList from './ToDoList';
import { ErrorBoundary } from 'react-error-boundary';
const root = ReactDOM.createRoot(document.getElementById('root'));




export default function FallBack() {
  return (
    <div>Error</div>
  )
}


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<FallBack/>}>

      <ToDoList />

      </ErrorBoundary>

    
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
