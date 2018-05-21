import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Listing extends React.Component{

	constructor(){
		super();

		this.state = {
			data: []
			
		}
	}

	componentWillMount(){
		this.fetchRecords()
	}

	fetchRecords(){
		let $this = this

		axios.get('recordList').then(response => {
			console.log(response)
			$this.setState({
				data: response.data
			})

		}).catch(error => {
			console.log(error)
		})
		
	}

	render(){
		return (
            <div>
                <h2>Record Listing</h2>
                <a href={'file'}><h3>Back</h3></a>
                
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>USER EMAIL</th>
                            <th>RECORD</th>
                            <th>CREATED AT</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                    	this.state.data.map(
                    		(record, i) => (
								<RecordRow key={i} i={i} record={record} object={this}/>                    			
                    		)
                    	)
                    }
                    </tbody>
                </table>
          
            </div>
        );
	}
}


class RecordRow extends React.Component {

	render () {
		return (
			<tr key={this.props.i}>
                <td>{this.props.record.id}</td>
                <td>{this.props.record.user_email}</td>
                <td>{this.props.record.uppercase_str}</td>
                <td>{this.props.record.created_at.date}</td>
	            </tr>
		)
	}
}

if (document.getElementById('listing')) {
	ReactDOM.render(<Listing/>, document.getElementById('listing') )
}