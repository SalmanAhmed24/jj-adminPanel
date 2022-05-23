import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import apiRoute from '../../utils/config';
import Swal from 'sweetalert2';
function EventTable({ events, getData }) {
	const deleteEvent = (id) => {
		Swal.fire({
			title: 'Delete Event',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Delete'
		}).then((result) => {
			if (result.isConfirmed) {
				axios
					.delete(`${apiRoute.url}/api/deleteEvents?id=${id}`)
					.then((res) => {
						getData();
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	};
	return (
		<div className="tableWrap">
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell>Speaker</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Start Time</TableCell>
							<TableCell>End Time</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell>Desktop Image</TableCell>
							<TableCell>Mobile Image</TableCell>
							<TableCell>Actions</TableCell>
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
									<TableCell>{row.startTime}</TableCell>
									<TableCell>{row.endTime}</TableCell>
									<TableCell>{row.address}</TableCell>
									<TableCell>{row.phone}</TableCell>
									<TableCell>
										<img className="bannerImage" src={`data:image/png;base64,${row.file.data}`} />
									</TableCell>
									<TableCell>
										{row.mobileImg ? (
											<img
												className="bannerImage"
												src={`data:image/png;base64,${row.mobileImg.data}`}
											/>
										) : (
											'--'
										)}
									</TableCell>
									<TableCell>
										<p className="delete" onClick={() => deleteEvent(row._id)}>
											Delete
										</p>
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
