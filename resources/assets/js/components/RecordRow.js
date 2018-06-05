import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class RecordRow extends React.Component {

	render () {
		return (
			<tr key={this.props.i}>
                <td>{this.props.record.id}</td>
                <td>{this.props.record.user_email}</td>
                <td>{this.props.record.uppercase_str}</td>
                <td>{this.props.record.created_at.date}</td>
	            </tr>
		)
	}
}