import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
    return {
        headers: {
            ...headers,
            authorization: 'Bearer <REPLACE_WITH_BEARER_TOKEN>',
        }
    }
});

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});