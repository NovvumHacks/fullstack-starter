import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
	uri: process.env.REACT_APP_GRAPHQL | 'https://marvel-graphql.now.sh/'
});

export default client;
