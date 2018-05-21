import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component{

    constructor(){
        super();

        this.state = {
            data: {
                token: ''
            }
        }
    }

    componentWillMount(){
        let token = this.props.id
        let data = Object.assign({}, this.state.data);    //creating copy of object
        data.token = token;                        //updating value
        this.setState({data});
    }

    handleEmailChange(e){
        let data = Object.assign({}, this.state.data);    //creating copy of object
        data.email = e.target.value;                        //updating value
        this.setState({data});
    }

    handlePasswordChange(e){
        let data = Object.assign({}, this.state.data);    //creating copy of object
        data.password = e.target.value;                        //updating value
        this.setState({data});
    }



    handleSubmit(e){
        e.preventDefault();
        axios.post('../public/login', this.state.data).then(response => {
            if (response.data == 1) {
                window.location.replace('../public/app')
            }        
        }).catch(error => {
            console.log(error); 
        });
    }

    render(){
        return (
                        
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h1 className="panel-title">Login</h1>
                            </div>
                            <div className="panel-body">
                                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="hidden" name="_token" value={this.state.data.token} />
                                    <div className="form-group">
                                        <label htmlFor="email" ></label>
                                        <input className="form-control" type="email" name="email" placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="password"></label>
                                        <input className="form-control" type="password" name="password" name="password" onChange={this.handlePasswordChange.bind(this)} placeholder="password" />
                                    </div>
                                    
                                    <button className="btn btn-primary btn-block">Login</button>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}
if (document.getElementById('login')) {
    var id = $("#login").data("id");
    ReactDOM.render(<Login id={id}/>, document.getElementById('login') )
}





