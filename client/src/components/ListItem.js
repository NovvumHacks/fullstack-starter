import React from 'react';

const ListItem = props => (
	<div className="item">
		<h2>{props.title}</h2>
		<p>{props.subtitle}</p>
		<pre>
			<code>{props.code}</code>
		</pre>
	</div>
);

export default ListItem;
