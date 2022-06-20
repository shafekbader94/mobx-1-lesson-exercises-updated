import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    //your code here
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    //your code here
    const itemName = this.props.item.name
    const newLocation = prompt("Whats the new location you want?")
    this.props.store.editItem(itemName, newLocation)

  }
  deleteItem = () => {
    //your code here
    const itemName = this.props.item.name
    this.props.store.deleteItem(itemName)
  }
  render() {
    let item = this.props.item
    return (
      <div className = {item.completed ? "crossed": null}>
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
        
            <input type="checkbox"
             onClick = {this.checkItem} 
                value={item.name}/> 
                {item.name} {" "}
                {item.location} 

                <button onClick={this.editItem}>Edit</button>
                <button onClick={this.deleteItem}>Delete</button>
      </div>
      )
  }
}

export default observer(Item)