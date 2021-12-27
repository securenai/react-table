import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import request from '../apis/request';
import './App.css';

export interface BodyProps {}

const Body: React.FC<BodyProps> = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchMyAPI() {
			let response = await request(
				'GET',
				'https://ghibliapi.herokuapp.com/people'
			);
			if (response.status === 200) {
				setData(response.data);
			}
		}
		fetchMyAPI();
	}, []);

	return (
		<div className="data-table-container">
			<DataTable data={data} />
		</div>
	);
};

export default Body;
