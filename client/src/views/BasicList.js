import React from 'react';
import { Query } from 'react-apollo';
import ListItem from '../components/ListItem';
import gql from 'graphql-tag';

const MY_QUERY = gql`
	{
		products(where: { listed: true }) {
			id
			user {
				id
				name
			}
			price
			category
		}
	}
`;

const BasicList = props => (
	<div className="section">
		<Query query={MY_QUERY}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...';
				if (error) return `Error! ${error.message}`;
				console.log(data);
				return (
					<div className="list">
						{data.products.map(c => (
							<ListItem
								key={c.id}
								title={c.user.name}
								subtitle={`$${c.price}`}
								code={`id: ${c.id}
									category: ${c.category}
								`}
							/>
						))}
					</div>
				);
			}}
		</Query>
	</div>
);

export default BasicList;
