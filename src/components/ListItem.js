import React from 'react';
import delIcon from './img/removed.png';
import checkedIcon from './img/checked.png';
import uncheckedIcon from './img/unchecked.png';

export default class ListItem extends React.Component {
    textarea = document.getElementById("text");
    changeBtn = document.getElementById("change");
   
    render() {
        return (
            <li className="todo-item">
                <div className="item-content">
                    <div className="toggle-completed">
                        <img 
                            className='icon' src={this.props.complete ? checkedIcon : uncheckedIcon} 
                            onClick={this.props.toggle} />
                    </div>
                    <div className="item-text">
                        <textarea
                            name='task'
                            defaultValue={this.props.value}
                            onBlur={this.props.edit}
                            onKeyPress={this.props.enter}
                            id="text"
                            title="Click to edit item"
                            className={this.props.complete ? "completed" : "notCompleted"}
                            onChange={this.props.input}
                        >
                        </textarea>    
                    </div>
                </div>
                <img onClick={this.props.delete} src={delIcon} className="icon" title="Delete Item" />
            </li>
        )
    }
}