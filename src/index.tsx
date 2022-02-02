import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './services/request';
import { SearchResults } from './components';

ReactDOM.render(
	<ApolloProvider client={client}>
		<SearchResults searchTerm={'React'} />
	</ApolloProvider>,
	document.getElementById('root')
);
