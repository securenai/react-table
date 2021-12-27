import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{ field: 'name', headerName: 'NAME', width: 180 },
	{ field: 'gender', headerName: 'GENDER', width: 110 },
	{ field: 'hair_color', headerName: 'HAIR COLOR', width: 140 },
	{ field: 'eye_color', headerName: 'EYE COLOR', width: 140 }
];

export interface BodyProps {
	data: {
		name: string;
		gender: string;
		hair_color: string;
		eye_color: string;
	}[];
}

const DataTable: React.FC<BodyProps> = ({ data }) => {
	return (
		<div style={{ height: 650, width: '100%' }}>
			<DataGrid rows={data} columns={columns} pageSize={10} />
		</div>
	);
};

export default DataTable;
