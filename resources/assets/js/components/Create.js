import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserForm from './UserForm';

export default class Create extends React.Component{

	constructor(){
		super();

		this.state = {
			dni_type:'',
			dni:'',
			name:'',
			email:'',
			password:'',
			message:'',
			style: '',
			id: null,
			dni_types: [
				'CC',
				'CE',
				'NIT',
				'PASSPORT'
			]
		}
	}

	handleDniTypeChange(e){	this.setState({dni_type: e.target.value}) }

	handleDniChange(e){ this.setState({dni: e.target.value}) }

	handleNameChange(e){ this.setState({name: e.target.value}) }

	handleEmailChange(e){ this.setState({email: e.target.value}) }

	handlePasswordChange(e){ this.setState({password: e.target.value}) }

	handleMessage(e){
		this.setState({
			message: e.message,
			style: e.style
		})
	}

	
	render(){
		return (
			<div>
				<h2>Add New User</h2>
				<div>
					<UserForm 

					handleDniTypeChange={this.handleDniTypeChange.bind(this)}
					handleDniChange={this.handleDniChange.bind(this)}
					handleNameChange={this.handleNameChange.bind(this)}
					handleEmailChange={this.handleEmailChange.bind(this)}
					handlePasswordChange={this.handlePasswordChange.bind(this)}

					{...this.state} />
				</div>
				
			</div>
        )
	}
}

if (document.getElementById('create')) {
	ReactDOM.render(<Create/>, document.getElementById('create') )
}