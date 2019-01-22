import React from "react";
import { Query } from "react-apollo";
import ListItem from "../components/ListItem";
import gql from "graphql-tag";
const cuid = require("cuid");

const MY_QUERY = gql`
  query BasicApolloDemo {
    characters{
      id
      name
      description
      urls{
        type
        url
      }
    }
  }
`;

const BasicList = props => (
  <div className="section">
    <Query query={MY_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <div className="list">
            {data.characters.map(c => (
              <ListItem
                key={c.id}
                title={c.name}
                subtitle={c.description}
                links={c.urls.map(x => ({
                  ...x,
                  id: cuid(),
                  text:
                    x.type !== "wiki"
                      ? `${x.type.toUpperCase()}S`
                      : x.type.toUpperCase()
                }))}
              />
            ))}
          </div>
        );
      }}
    </Query>
  </div>
);

export default BasicList;
