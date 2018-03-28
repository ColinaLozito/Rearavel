import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends React.Component{

	constructor(){
		super();

		this.state = {
			name:'',
			email:'',
			password:''
		}
	}

	handleNameChange(e){ 
	    this.setState({name: e.target.value});
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handlePasswordChange(e){
		this.setState({password: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state)

		axios.post('/api/users', this.state).then(response => {
			console.log(response);
			
		}).catch(error => {
			console.log(error);
			
		});
	}

	render(){
		return (
			<div>
				<h2>Add New User</h2>
				<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="name">Name:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="name" placeholder="Enter a name" name="name" value={this.state.name} onChange={this.handleNameChange.bind(this)} />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="email">Email</label>
						<dir className="col-sm-10">
							<input type="email" className="form-control" id="email" placeholder="Enter an Email" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
						</dir>
					</div>
					<div className="form-group">	
						<label className="control-label col-sm-2" htmlFor="pwd">Password</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" id="pwd" placeholder="Enter a password" name="password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-default">Save</button>
							<a href={'/users'} className="btn btn-default">Users List</a>
						</div>
					</div>

					<div className="form-group">
						<h3>This is a frendly message</h3>
						<p>Hi <strong>{this.state.name}.</strong> Your email is <strong>{this.state.email}.</strong> Have a nice day! </p>
					</div>
				</form>
			</div>
        )
	}
}
if (document.getElementById('create')) {
	ReactDOM.render(<Create/>, document.getElementById('create') )
}