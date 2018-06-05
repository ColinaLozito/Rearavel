import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TodoRow from './TodoRow'


export default class Todo extends Component{

	constructor(){
		super()
		this.state = {
			term:[],
			data:[],
			initalmaxspend:0,
			maxspend:0,
			total:0,
			balanceColor:'black'
		}
	}

	handleSubmit(e){
		e.preventDefault();
		this.setState({
	    	data: [...this.state.data, this.state.term]
	    },this.sumAllPrices);
		
		document.getElementById("todoForm").reset();
	}

	sumAllPrices(){
		var sumPrices = [];
		this.state.data.map(
			(item, i) => (	
				sumPrices.push(item.price)
			)
		)
		sumPrices = sumPrices.reduce((a, b) => a + b, 0);
		let newMaxspend = parseFloat(this.state.initalmaxspend) - parseFloat(sumPrices)

		this.setState({
			total:sumPrices,
			maxspend:newMaxspend

		})

		if (this.state.maxspend <= 0) {
			this.setState({
				balanceColor: 'red'
			})
		}else{
			this.setState({
				balanceColor: 'green'
			})
		}

		
	}

	substractPrice(){

	}

	handleTodoChange(e){
		let term = Object.assign({}, this.state.term);    //creating copy of object
		term.item = e.target.value;                        //updating value
		this.setState({term});
	}	

	handleTodoPriceChange(e){
		let term = Object.assign({}, this.state.term);    //creating copy of object
		term.price = parseFloat(e.target.value);                        //updating value
		this.setState({term});
	}

	handleMaxSpendChange(e){
		this.setState({ 
			maxspend: e.target.value,
			initalmaxspend: e.target.value
		})
	}


		render(){
			return (
				<div className="todo-app-container">
					<h2>To buy Listing Calculator</h2>
		            <form className="form-horizontal" id='todoForm' onSubmit={this.handleSubmit.bind(this)}>
		                <div className="form-group col-sm-12">
		                	<div className="col-sm-3">
								<input type="text" className="form-control" id="maxspend" placeholder="Enter max spend" name="maxspend"  onChange={this.handleMaxSpendChange.bind(this)} />
							</div>
							<div className="col-sm-6 float-left">
								<input type="text" className="form-control" id="addTodo" placeholder="Add product!!" name="addTodo" required onChange={this.handleTodoChange.bind(this)} />
							</div>
							<div className="col-sm-3 float-left">
								<input type="text" className="form-control" id="todoPrice" placeholder="Add price!!" name="todoPrice" required onChange={this.handleTodoPriceChange.bind(this)} />
							</div>
							<div className="col-sm-3 float-left">
								<button type="submit" className="btn btn-default">Add Item</button>
							</div>
						</div>
		            </form>

		            <table className="table table-bordered">
	                    <thead>
	                        <tr>
	                            <th>Item or product</th>
	                            <th>Price</th>
	                            <th>Action</th>
	                        </tr>
	                    </thead>
			            <tbody>
	                    {
	                    	this.state.data.map(
	                    		(todo, i) => (
									<TodoRow key={i} i={i} todo={todo} object={this}/>                    			
	                    		)
	                    	)
	                    }
	                    <tr>
	                    	<td className="text-right"><strong>TOTAL AMOUNT</strong></td>
	                    	<td className="text-right"><strong>{this.state.total}</strong></td>
	                    	<td></td>
	                    </tr>
	                    <tr>
	                    	<td className="text-right"><strong>Remaining Balance</strong></td>
	                    	<td className="text-right" style={{'color':this.state.balanceColor}}><strong>{this.state.maxspend}</strong></td>
	                    	<td></td>
	                    </tr>
	                    </tbody>
	                    
	                </table>

				</div>
	        );
		}

}



if (document.getElementById('todo')) {
	ReactDOM.render(<Todo/>, document.getElementById('todo') )
}