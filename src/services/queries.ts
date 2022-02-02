import { gql } from '@apollo/client';

export const SEARCH = gql`
    query repositories($queryString: String!, $cursor: String) {
        search(first: 15, query: $queryString, type: REPOSITORY, after: $cursor) {
            pageInfo {
                endCursor
            }
            edges {
                node {
                    ... on Repository {
                        name
                        forkCount
                        stargazerCount
                        url
                    }
                }
            }
        }
    }
`;
