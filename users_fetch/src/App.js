import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import UserGrid from './components/users/UserGrid';
import './App.css';
import GetUsers from './components/users/GetUsers';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchUser = () => {
		console.log('Getting Users');
		const fetchItems = async () => {
			setIsLoading(true);
			const result = await axios(`https://reqres.in/api/users?page=1`);

			console.log(result.data.data);

			setItems(result.data.data);
			setIsLoading(false);
		};

		fetchItems();
	};
	return (
		<div className='container'>
			<Header />
			<GetUsers fetchUser={fetchUser} />
			<UserGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
