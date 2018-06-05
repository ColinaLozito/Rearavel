import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserForm from './UserForm';

export default class Edit extends React.Component{

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
			id: '',
			dni_types: [
				'CC',
				'CE',
				'NIT',
				'PASSPORT'
			]
		}
	}

	componentWillMount(){
		this.fetchData()
	}

	fetchData(){
		let id = this.props.id
		axios.get('../../api/users/'+id).then(response => {
			var user = response.data
			this.setState({
				dni_type: user.dni_type,
				dni: user.dni,
				name: user.name,
				email: user.email,
				id: id
			})
		}).catch(error =>{
			console.log(error);
		})
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
				<h2>Update User</h2>
				<div>
					<UserForm 

					handleDniTypeChange={this.handleDniTypeChange.bind(this)}
					handleDniChange={this.handleDniChange.bind(this)}
					handleNameChange={this.handleNameChange.bind(this)}
					handleEmailChange={this.handleEmailChange.bind(this)}
					handlePasswordChange={this.handlePasswordChange.bind(this)}
					handleMessage={this.handleMessage.bind(this)}

					{...this.state} />
				</div>
				<a href={'../../users'} className="btn btn-default">Users List</a>
				
			</div>
        )
	}
}
if (document.getElementById('edit')) {
	var id = $("#edit").data("id");
	ReactDOM.render(<Edit id={id}/>, document.getElementById('edit') )
}