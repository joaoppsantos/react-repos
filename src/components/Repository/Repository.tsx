import './Repository.css';

export interface RepositoryProps {
    forks: number;
    stars: number;
    url: string;
    name: string;
}

export const Repository = ({ forks, stars, url, name } : RepositoryProps) => {
	return (
		<>
			<th><a href={ url }>{ name }</a></th>
			<th>{ stars }</th>
			<th>{ forks }</th>
		</>
	);
}