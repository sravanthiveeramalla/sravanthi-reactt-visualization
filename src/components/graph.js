import React from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import '../App.css';
import  Metrics from '../Metrics.js';



const client = new ApolloClient({
	uri:"https://react.eogresources.com/graphql"
});
export class Graph extends React.Component {
constructor(props) {
super(props);
this.state = {
    options: [{name: 'flareTemp', id: 1},{name: 'injValveOpen', id: 2},{name: 'oilTemp', id: 3},{name: 'casingPressure', id: 4},{name: 'tubingPressure', id: 5},{name: 'waterTemp', id: 7}],
    selectedValue: 1,
    selectedList:''
};
this.onSelect = this.onSelect.bind(this);
this.onRemove = this.onRemove.bind(this);
}
onSelect(selectList, selectedItem) {
	this.setState({
		selectedList: selectList
	})
}

onRemove(selectedList, removedItem) {
	this.setState({
		selectedList: selectedList
	})
}
render() {
	return(
		<div className="container">
			<ApolloProvider client={client}>
			<h2>My First Apollo</h2>
			<div className="mainblock">
				<div className="multiselectdiv">
					<Multiselect className="multiselect"
					options={this.state.options} // Options to display in the dropdown
					onSelect={this.onSelect} // Function will trigger on select event
					onRemove={this.onRemove} // Function will trigger on remove event
					displayValue="name" // Property name to display in the dropdown options
					/>
				</div>
				<div className="blocklist">
					{this.state.selectedList && (this.state.selectedList).map((i,value) =>(
					<div className="block">
						<div className="rightblock">
						<p>{i.name}</p>
						<p className="font50">109.00</p>
						</div>
					</div>
					))}
				</div>
			</div>
			</ApolloProvider>
		</div>
)
}
}