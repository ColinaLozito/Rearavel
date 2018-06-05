import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component{

    constructor(){
        super();

        this.state = {
            data: {
                token: ''
            },
            message: '',
            style:''
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
        console.log(this.state.data)
        axios.post('../public/login', this.state.data).then(response => {
            if (response.data == 1) {
                window.location.replace('../public/app')
            }else{
                this.setState({
                    message:'Wrong user credentials',
                    style:'warning-message'
                })
            }        
        }).catch(error => {
            console.log(error)
            this.setState({
                message:'General Error',
                style:'warning-message'
            })
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

                                <LoginForm 
                                handleEmailChange={this.handleEmailChange.bind(this)}
                                handlePasswordChange={this.handlePasswordChange.bind(this)}
                                handleSubmit={this.handleSubmit.bind(this)}
                                {...this.state}/>


                            </div>
                            <div className="panel-body">
                                <div className={this.state.style}>
                                    <h4>{this.state.message}</h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

class LoginForm extends React.Component {

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

if (document.getElementById('login')) {
    var id = $("#login").data("id");
    ReactDOM.render(<Login id={id}/>, document.getElementById('login') )
}





