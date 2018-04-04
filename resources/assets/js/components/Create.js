import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Create extends React.Component{

	constructor(){
		super();

		this.state = {
			data: {
				name:'',
				email:'',
				password:'',
			},
			message:'',
			frendlyP1: 'none',
			frendlyP2: 'none'
		}
	}

	handleNameChange(e){ 
		let data = Object.assign({}, this.state.data);    //creating copy of object
		data.name = e.target.value;                        //updating value
		this.setState({data});

		if (e == '') {
			this.setState({frendlyP1: 'none'})
		}else{
			this.setState({frendlyP1: 'block'})
		}
	}

	handleEmailChange(e){
		let data = Object.assign({}, this.state.data);    //creating copy of object
		data.email = e.target.value;                        //updating value
		this.setState({data});

		if (e == '') {
			this.setState({frendlyP2: 'none'})
		}else{
			this.setState({frendlyP2: 'block'})
		}
	}

	handlePasswordChange(e){
		let data = Object.assign({}, this.state.data);    //creating copy of object
		data.password = e.target.value;                        //updating value
		this.setState({data});
	}

	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.data)

		
		axios.post('/api/users', this.state.data).then(response => {
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
						<label className="control-label col-sm-2" htmlFor="name">Name:</label>
						<div className="col-sm-10">
							<input type="text" className="form-control" id="name" placeholder="Enter a name" name="name" value={this.state.data.name} onChange={this.handleNameChange.bind(this)} />
						</div>
					</div>
					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="email">Email</label>
						<dir className="col-sm-10">
							<input type="email" className="form-control" id="email" placeholder="Enter an Email" name="email" value={this.state.data.email} onChange={this.handleEmailChange.bind(this)}/>
						</dir>
					</div>
					<div className="form-group">	
						<label className="control-label col-sm-2" htmlFor="pwd">Password</label>
						<div className="col-sm-10">
							<input type="password" className="form-control" id="pwd" placeholder="Enter a password" name="password" value={this.state.data.password} onChange={this.handlePasswordChange.bind(this)}/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button type="submit" className="btn btn-default">Save</button>
							<a href={'/users'} className="btn btn-default">Users List</a>
						</div>
					</div>
					<div className="form-group">
						<h3 className={this.state.style}>{this.state.message}</h3>
					</div>
					<div className="form-group">
						<h3>This is a frendly message</h3>
						<p style={{display: this.state.frendlyP1}}>Hi <strong>{this.state.data.name}. </strong>This is a bind data example</p>
						<p style={{display: this.state.frendlyP2}}>And your email is <strong>{this.state.data.email}.</strong></p>
						<p>Have a nice day! </p>
					</div>
				</form>
			</div>
        )
	}
}

if (document.getElementById('create')) {
	ReactDOM.render(<Create/>, document.getElementById('create') )
}