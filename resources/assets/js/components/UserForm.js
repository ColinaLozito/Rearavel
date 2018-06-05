import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserForm extends React.Component{

	handleSubmit(e){
		e.preventDefault();
		let data = [];
		let formValues = this.refs; 

		data.push({dni_type: formValues.dni_types.value, 
				   dni: formValues.dni.value,
				   name: formValues.name.value,
				   email: formValues.email.value,
				   password: formValues.password.value
				})

		if (this.props.id === null) {
			axios.post('../api/users', data[0]).then(response => {
				this.props.handleMessage({message:'User Created sucessfully', style:'success-message'})
			}).catch(error => {
				this.props.handleMessage({message:'An error was happened', style:'warning-message'})
			});
		}else{
			axios.put('../../api/users/'+this.props.id, data[0]).then(response => {
				this.props.handleMessage({message:'User Updated sucessfully', style:'success-message'})
			}).catch(error => {
				this.props.handleMessage({message:'An error was happened', style:'warning-message'})
			});
		}

	}

	render(){
		return(

			<div className="col-md-4">
				<div className="form-group">
					<h3 className={this.props.style}>{this.props.message}</h3>
				</div>
				<form className="form-horizontal" ref="UserFormRef" onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="dni_types">DNI:</label>

						<div className="col-sm-10">
							<select className="form-control" value={this.props.dni_type} onChange={this.props.handleDniTypeChange.bind(this)} id="dni_types" name="dni_types" ref="dni_types"  required >
								<option>Select...</option>             			
								{this.props.dni_types.map((dni_t, i) => (
					        		<option value={dni_t} key={i}>{dni_t}</option>
					        	))}	
							</select>
						</div>

						<div className="col-sm-10">
							<input type="text" className="form-control" value={this.props.dni} onChange={this.props.handleDniChange.bind(this)} id="dni" placeholder="Enter a dni" name="dni" ref="dni" required />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="name">Name:</label>
						<div className="col-sm-10">	
							<input type="text" className="form-control" id="name" value={this.props.name} onChange={this.props.handleNameChange.bind(this)} placeholder="Enter a name" name="name" ref="name" required />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="email">Email</label>
						<dir className="col-sm-10">
							<input type="email" className="form-control" value={this.props.email} id="email" onChange={this.props.handleEmailChange.bind(this)} placeholder="Enter an Email" name="email" ref="email" required/>
						</dir>
					</div>
					<div className="form-group">	
						<label className="control-label col-sm-2" htmlFor="password">Password</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" id="password" onChange={this.props.handlePasswordChange.bind(this)} placeholder="Enter a password" name="password" ref="password" required />
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-default">Send</button>
						</div>
					</div>
					
				</form>
			</div>
		)
	}
}