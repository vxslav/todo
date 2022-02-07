import React from "react";
export default class Progress extends React.Component {
    render() {
        return(
            <table className="progress-info">
                <tbody>
                    <tr><th>Completed:</th><td>{this.props.completed}/{this.props.all}</td></tr>
                    <tr className={this.props.rest > 0 ? "red" : "white"}><th>Tasks left:</th><td>{this.props.rest}</td></tr>
                </tbody>
            </table>
        )
    }
}