import React from 'react';

const GetUsers = ({ fetchUser }) => {
	return (
		<div className='center'>
			<button onClick={fetchUser} className='btn'>
				Get Users
			</button>
		</div>
	);
};

export default GetUsers;
