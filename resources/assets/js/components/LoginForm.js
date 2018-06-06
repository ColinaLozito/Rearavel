import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {

    render(){
        return(
            <div>
                <form className="form-horizontal" onSubmit={this.props.handleSubmit.bind(this)}>
                    <input type="hidden" name="_token" value={this.props.data.token} />
                    <div className="form-group">
                        <label htmlFor="email" ></label>
                        <input className="form-control" type="email" name="email" placeholder="Email" onChange={this.props.handleEmailChange.bind(this)} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password"></label>
                        <input className="form-control" type="password" name="password" name="password" onChange={this.props.handlePasswordChange.bind(this)} placeholder="password" />
                    </div>
                    
                    <button className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        )
    }

}