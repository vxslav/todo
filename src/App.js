import React from "react";
import "./App.css";
import ListItem from './components/ListItem';
import Controls from './components/Controls';
import Progress from './components/Progress';
class Task {
    constructor(id,task) {
        this.id = id;
        this.task = task;
        this.complete = false;
        this.edit = this.task;
    }
}
export default class App extends React.Component {
   
    state = {
        allTodos : JSON.parse(localStorage.getItem("todos")) || [],
        currentTodo : ""
    }
    generateId(n) {
        let symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ1234567890!@#$%^&*-_+=[](){}";
        let id = "";
        for(let i = 0; i < n; i++) {
            id += symbols[Math.floor(Math.random()*symbols.length)];
        }
        return id;
    }
    componentDidUpdate() {
        localStorage.setItem("todos", JSON.stringify(this.state.allTodos))
    }
    enter = (e) => {
        if(e.charCode === 13) {
            this.addTodo();
        }
    }
    editEnter = (e, id) => {
        if(e.charCode === 13) {
            e.preventDefault();
            this.editTodo(id);
            e.target.blur();
        }
    }
    addTodo = () => {
        if(this.state.currentTodo != "") {
            let id = this.generateId(21);
            let newTodo = new Task(id, this.state.currentTodo)
            this.setState({
                allTodos : [...this.state.allTodos, newTodo],
                currentTodo : ""
            });
        }
    }
    removeTodo = (id) => {
        let mapped = this.state.allTodos.filter(e => e.id !== id);
        this.setState({
            allTodos : mapped
        })
    }
    editTodo = (id) => {
             let item = this.state.allTodos.find(e => e.id == id);
             item.task = item.edit;
             this.setState({
                 allTodos : this.state.allTodos
             })
    }
    toggleComplete = (id) => {
        let item = this.state.allTodos.find(e => e.id == id);
        item.complete = !item.complete;
        this.setState({
            allTodos: this.state.allTodos
        })
    }
    handleInput = (ev) => {
        this.setState({
            currentTodo : ev.target.value
        })
    }
    handleEdit = (id,ev) => {
        let item = this.state.allTodos.find(e => e.id == id);
        item.edit = ev.target.value.trim();
    }
    deleteCompleted = () => {
        let mapped = this.state.allTodos.filter(e => !e.complete)
        this.setState({
            allTodos: mapped
        })
    }
    render() {
        return(
            <> 
                <Progress 
                    all={this.state.allTodos.length} 
                    completed={this.state.allTodos.filter(e => e.complete).length} 
                    rest={this.state.allTodos.filter(e => !e.complete).length}/>
                <Controls 
                    add={this.addTodo}
                    enter={this.enter}
                    input={this.handleInput}
                    delete={this.deleteCompleted}
                    value={this.state.currentTodo}
                />
                <ul className="list">
                    {this.state.allTodos.map((item,i) => (
                        <ListItem 
                            key={item.id}
                            toggle={()=>this.toggleComplete(item.id)}
                            complete={item.complete}
                            value={item.task}
                            input={(ev) => this.handleEdit(item.id, ev)}
                            edit={() => this.editTodo(item.id)}
                            enter={(e) => this.editEnter(e,item.id)}
                            delete={() => this.removeTodo(item.id)}
                        />
                    ))}
                </ul>
            </>
        );
    }


}
