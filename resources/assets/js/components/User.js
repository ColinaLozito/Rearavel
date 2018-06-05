import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import UserRow from './UserRow'

export default class User extends Component {

	constructor(){
		super();
		this.state = {
			data: [],
			url: 'api/users',
			pagination: []
		}
	}

	componentWillMount(){
		this.fetchUsers()
	}

	fetchUsers(){
		let $this = this

		axios.get(this.state.url).then(response => {
			$this.setState({
				data: $this.state.data.length > 0 ? $this.state.data.concat(response.data.data) : response.data.data,
				url: response.data.next_page_url
			})

		$this.makePagination(response.data)

		}).catch(error => {
			console.log(error)
		})
		
	}

	loadMore(){
		this.setState({
			url: this.state.pagination.next_page_url
		})

		this.fetchUsers()
	}

	makePagination(data){
		let pagination = {
			current_page: data.current_page,
			last_page: data.last_page,
			next_page: data.next_page_url,
			prev_page: data.prev_page_url
		}

		this.setState({
			pagination: pagination
		})
	}

	

	render(){
		return (
            <div className="users-list">
                <h2>User Listing</h2>
                <a href="users/create" className="btn btn-primary add-user">Add new user</a>
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DNI TYPE</th>
                            <th>DNI</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    	this.state.data.map(
                    		(user, i) => (
								<UserRow key={i} i={i} user={user} object={this}/>                    			
                    		)
                    	)
                    }
                    </tbody>
                </table>
                <button className="btn btn-dafault" onClick={this.loadMore.bind(this)}>Load More</button>
            </div>
        );
	}
}


if (document.getElementById('app')) {
	ReactDOM.render(<User/>, document.getElementById('app') )
}