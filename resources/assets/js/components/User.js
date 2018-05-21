import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';

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
			console.log($this.state.data);
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


class UserRow extends React.Component {

	deleteUser(user, object){
		console.log(user)
		
		var $this = object
		axios.delete('api/users/'+user.id).then( response => {

			const newState = $this.state.data.slice();
			newState.splice(newState.indexOf(user),1)
			$this.setState({
				data: newState
			})

		}).catch(error => {
			console.log(error)
		})

	}


	render () {
		return (
			<tr key={this.props.i}>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.dni_type}</td>
                <td>{this.props.user.dni}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.email}</td>
                <td>
                    <a href={"users/"+this.props.user.id+"/edit"} className="btn btn-primary">EDIT</a>
                    ||
                    <a className="btn btn-danger" onClick={this.deleteUser.bind(this, this.props.user, this.props.object)}>DELETE</a>
                </td>
            </tr>
		)
	}
}


if (document.getElementById('app')) {
	ReactDOM.render(<User/>, document.getElementById('app') )
}