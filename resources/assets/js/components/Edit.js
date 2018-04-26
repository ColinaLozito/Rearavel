import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Edit extends React.Component{

	constructor(){
		super();

		this.state = {
			dni_type:'',
			dni:'',
			name:'',
			email:'',
			password:''
		}
	}

	componentWillMount(){

		let id = this.props.id

		axios.get('../../api/users/'+id).then(response => {
			var user = response.data

			console.log(response.data);
		
			this.setState({
				dni_type: user.dni_type,
				dni: user.dni,
				name: user.name,
				email: user.email
			})
			

		}).catch(error =>{
			console.log(error);
		})

	}

	handleDniTypeChange(e){
		this.setState({dni_type: e.target.value});
	}

	handleDniChange(e){
		this.setState({dni: e.target.value});
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

		axios.put('../../api/users/'+this.props.id, this.state).then(response => {
			console.log(response);
			this.setState({message:response.data.msj})			
		}).catch(error => {
			console.log(error);
			this.setState({message:'General error', style:'warning-message'})	
		});
	}

	render(){
		return (
			<div>
				<h2>Edit User</h2>
				<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="dni_type">DNI:</label>
						<div className="col-sm-10">
							<select className="form-control" value={this.state.dni_type} onChange={this.handleDniTypeChange.bind(this)}>
								<option>Select...</option>             			
								<option value='CC'>CC</option>             			
								<option value='CE'>CE</option>             			
								<option value='NIT'>NIT</option>             			
								<option value='PASSPORT'>PASSPORT</option>             			
							
							</select>
						</div>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="dni" placeholder="Enter a dni" name="dni" value={this.state.dni} onChange={this.handleDniChange.bind(this)} />
						</div>
					</div>
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
						<h3 className={this.state.style}>{this.state.message}</h3>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-default">Update</button>
							<a href={'../'} className="btn btn-default">Users List</a>
						</div>
					</div>
				</form>
			</div>
        )
	}
}
if (document.getElementById('edit')) {
	var id = $("#edit").data("id");
	ReactDOM.render(<Edit id={id}/>, document.getElementById('edit') )
}