import React from "react";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import { Multiselect } from 'multiselect-react-dropdown';

const Metrics = () => (
	 	<Query query={gql`
			{
				getMetrics
			}
		`}
		>	
		
	{({loading,error,data}) =>{
		if(loading) return  <p>Loading..</p>;
		if(error) return <p>Error</p>
			console.log(data.getMetrics)
		return (<Multiselect className="multiselect"
			options={data.getMetrics} // Options to display in the dropdown
			displayValue="name" // Property name to display in the dropdown options
			/>);
	}}
	</Query>
);

export default Metrics;
