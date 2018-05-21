import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FileForm extends React.Component{

	constructor(){
		super();

		this.state = {
			data: {
				user_id: '',
				file:''				
			},
		}
	}

	componentWillMount(){
		let id = this.props.id
		console.log('user id ' + id);
	}	
	/*
	handleFileChange(e){
		let userid = this.props.id;
		let data = Object.assign({}, this.state.data);    //creating copy of object
		data.user_id = userid; 
		data.file = e.target.value;                    //updating value
		this.setState({data});
	}*/

	handleFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length)
            return;
      this.createFile(files[0]);
    }

    createFile(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        let userid = this.props.id;
		let data = Object.assign({}, this.state.data);    //creating copy of object
		data.user_id = userid; 
		data.file = e.target.value;                    //updating value
		this.setState({data});
      };
      reader.readAsDataURL(file);
    }

	handleSubmit(e){
		e.preventDefault();	
		console.log(this.state.data);	
	}

	render(){
		return (
			<div className="file-container">
				<h2>ADD TXT FILE</h2>
				<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>

					<div className="form-group">
						<label className="control-label col-sm-2" htmlFor="name">Txt File:</label>
						<div className="col-sm-10">
							<input type="file" className="form-control file-inpu" id="file" placeholder="Select a file" name="file" onChange={this.handleFileChange.bind(this)}/>
						</div>
					</div>
				<button className="btn " type="submit">Upload</button>
				</form>
			</div>
        )
	}
}

if (document.getElementById('fileForm')) {
	ReactDOM.render(<FileForm/>, document.getElementById('fileForm') )
}