import React from 'react';

const ListItem = props => (
	<div className="item">
		<h2>{props.title}</h2>
		<p>{props.subtitle}</p>
	</div>
);

export default ListItem;
