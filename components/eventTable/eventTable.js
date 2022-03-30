import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function EventTable({ events }) {
	return (
		<div className="tableWrap">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Speaker</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Time</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Image</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{events &&
							events.map((row) => (
								<TableRow key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
									<TableCell component="th" scope="row">
										{row.title}
									</TableCell>
									<TableCell>{row.speaker}</TableCell>
									<TableCell>{row.date}</TableCell>
									<TableCell>{row.time}</TableCell>
									<TableCell>{row.address}</TableCell>
									<TableCell>{row.phone}</TableCell>
									<TableCell>
										<img className="bannerImage" src={`data:image/png;base64,${row.file.data}`} />
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default EventTable;
