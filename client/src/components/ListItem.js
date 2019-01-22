import React from "react";

const ListItem = props => (
  <div className="item">
    <h2>{props.title}</h2>
    <p>{props.subtitle}</p>
    <div className="links">
      {props.links &&
        props.links.map(l => (
          <a href={l.url} target="_blank" key={l.id} className="link">
            <strong>{l.text}</strong>
          </a>
        ))}
    </div>
  </div>
);

export default ListItem;
