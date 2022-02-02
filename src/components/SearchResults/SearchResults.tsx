import { SEARCH } from '../../services/queries';
import { useQuery } from '@apollo/client';
import { Repository, Header } from '../';
import './Search.css';

interface SearchResult {
    search: {
        edges: [
            {
                node: {
                    forkCount: number,
                    name: string,
                    stargazerCount: number,
                    url: string,
                },
            },
        ],
        pageInfo: {
            endCursor: string
        },
    };
}

interface SearchResultsProps {
    searchTerm: string;
}

export const SearchResults = ({ searchTerm }: SearchResultsProps) => {
    const { loading, error, data, fetchMore } = useQuery(SEARCH, { variables: { queryString: searchTerm } });

    if (loading) {
        return (
            <p>
                Loading React Repositories
            </p>
        );
    }
    else if (error) {
        return (
            <p>
                Error loading Repositories
            </p>
        );
    } 

    const { edges, pageInfo: { endCursor } } = data.search;

    const moreReactRepos = () => {
        return fetchMore({
            variables: {
                queryString: searchTerm,
                cursor: endCursor
            },
            query: SEARCH,
            // @ts-ignore
            updateQuery: (previous: SearchResult, { fetchMoreResult }: SearchResult) => {
                if (fetchMoreResult?.search?.edges) {
                    fetchMoreResult.search.edges = [
                        ...(previous.search?.edges || []),
                        ...fetchMoreResult.search?.edges,
                    ];
                }

                return fetchMoreResult;
            }
        })
    };

    return (
        <>
            <table>
                <tr className="header-container">
                    <Header />
                </tr>
                {
                    edges?.map((edge: any) => {
                        const { stargazerCount, forkCount, name, url, id } = edge.node;

                        return (
                            <tr key={ id }>
                                <Repository
                                    stars={ stargazerCount }
                                    forks={ forkCount }
                                    name={ name }
                                    url={ url }
                                />
                            </tr>
                        )
                    })
                }
                <div className="more-repos-button">
                    <button onClick={ moreReactRepos }>
                        More React Repositories
                    </button>
                </div>
            </table>
        </>
    );
};