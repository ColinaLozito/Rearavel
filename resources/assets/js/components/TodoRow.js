import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class TodoRow extends React.Component {

	deleteTodo(todo, object){
		var $this = object
		const newState = $this.state.data.slice();

		let newTotal = parseFloat($this.state.total) - parseFloat(todo.price)
		let newMaxspend = parseFloat($this.state.initalmaxspend) - parseFloat(newTotal)
		
		newState.splice(newState.indexOf(todo),1)
		$this.setState({
			data: newState,
			total: newTotal,
			maxspend: newMaxspend
		})
	}


	render () {
		return (
			<tr key={this.props.i}>
                <td>{this.props.todo.item}</td>
                <td className="text-right">{this.props.todo.price}</td>
                <td>
                    <a className="btn btn-danger float-right" onClick={this.deleteTodo.bind(this, this.props.todo, this.props.object)}>DELETE</a>
                </td>
            </tr>
		)
	}
}