/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = 0
        // your code here
        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action,
            deleteItem: action
        })

    }
    checkItem = (name) => {
        // your code here
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }
    addItem = (name) => {
        // your code here
        this.list.push(new Item(name))


    }
    editItem = (itemName, newLocation)  => {
        // your code here
        let item = this.list.find(i => i.name === itemName)
        item.location= newLocation

    }
    deleteItem = (name) => {
        // your code here
        let itemIndex = this.list.findIndex(i => i.name === name)
        this.list.splice(itemIndex,1)
    }
}

