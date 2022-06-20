import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'


 let potatoes = new Item("Potatoes")
 let groceryList = new ShoppingList()
 groceryList.list.push(potatoes)

// Use the prop "store" for your store
ReactDOM.render(<App store={groceryList}/>, document.getElementById('root'));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
