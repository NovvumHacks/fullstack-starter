import React from 'react';
import { Query } from 'react-apollo';
import ListItem from '../components/ListItem';
import gql from 'graphql-tag';

const MY_QUERY = gql`
	query ReactFullStackDemo {
		products(where: { listed: true }) {
			id
			user {
				id
				name
			}
			photos {
				id
				url
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

				return (
					<div className="list">
						{data.products.map(c => (
							<ListItem key={c.id} title={c.user.name} subtitle={c.category} />
						))}
					</div>
				);
			}}
		</Query>
	</div>
);

export default BasicList;
