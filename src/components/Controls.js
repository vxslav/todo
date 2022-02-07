import React from "react";

export default class Controls extends React.Component {
    render() {
        return (
            <div className="controls">
                <div className="add-item-controls">
                    <input onInput={this.props.input} onKeyPress={this.props.enter} type="text" className="add-item-input" value={this.props.value} />
                    <button onClick={this.props.add} className="control-btn green">Add Todo</button>
                </div>
                <button onClick={this.props.delete} className="control-btn purple">Clear completed tasks</button>
            </div>
        )
    }
}
