import React from 'react';

const UserItem = ({ item }) => {
	return (
		<div className='card'>
			<div className='card-inner'>
				<div className='card-front'>
					<img src={item.avatar} alt='User Image' />
				</div>
				<div className='card-back'>
					<h1>{item.name}</h1>
					<ul>
						<li>
							<strong>Name:</strong> {item.first_name}
						</li>
						<li>
							<strong>Lasr Name:</strong> {item.last_name}
						</li>
						<li>
							<strong>Email:</strong> {item.email}
						</li>
						<li>
							<strong>ID:</strong> {item.id}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default UserItem;
