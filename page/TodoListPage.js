import { getTodo } from "../src/api/todo.js";
import TodoList from "../src/components/TodoList.js";

export default function TodoListPage({$target,initialState}) {
    console.log("TodoListPage",$target, initialState)
    this.state = initialState
    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }

    const $page = document.createElement('div')
    $page.innerText = "TodoListPage"

    const getTodoList = async () => {
        const todos = await getTodo()
        this.setState(todos)
        console.log('getTodoList in TodolistPage', this.state)
    }
    getTodoList()


    const $list = document.createElement('ul');
    
    this.render = () => {
        $list.innerHTML = `
        <h2>TodoList</h2>
        `
        new TodoList({$target: $list, initialState :this.state})       
        $target.appendChild($list)

    }

}