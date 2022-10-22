import TodoListPage from "../page/TodoListPage.js";
import Header from "./components/Header.js";
import SearchInput from "./components/SearchInput.js";
import TodoList from "./components/TodoList.js";

export default function App({ $target }) {
    $target.innerHTML ='';
    new Header({$target}).render()
    new SearchInput({$target}).render()
    new TodoListPage({$target}).render()
    
}