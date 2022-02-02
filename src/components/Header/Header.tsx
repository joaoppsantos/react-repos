import { FaStar, FaCodeBranch } from 'react-icons/fa';
import './Header.css';

export const Header = () => (
	<>
		<th>Name</th>
		<th><FaStar className="fa-star"/> Stars</th>
		<th><FaCodeBranch /> Forks</th>
	</>
);