import React, { useState, useEffect } from 'react';
import AddForm from '../components/addForm/addForm';
import EventTable from '../components/eventTable/eventTable';
import axios from 'axios';
import apiRoute from '../utils/config';

function Events() {
	const [ eventData, setEventData ] = useState('');
	const [ loaderFlag, setLoaderFlag ] = useState(false);
	const [ showAddForm, setShowAddForm ] = useState(false);
	useEffect(() => {
		setLoaderFlag(true);
		axios
			.get(`${apiRoute.url}/api/allEvents`)
			.then((res) => {
				setEventData(res.data);
				setLoaderFlag(false);
			})
			.catch((err) => {
				setLoaderFlag(false);
				setEventData([]);
			});
	}, []);
	const getData = () => {
		setLoaderFlag(true);
		axios
			.get(`${apiRoute.url}/api/allEvents`)
			.then((res) => {
				setEventData(res.data);
				setLoaderFlag(false);
			})
			.catch((err) => {
				setLoaderFlag(false);
				setEventData([]);
			});
	};
	console.log('this is event data', eventData);
	return (
		<div className="eventWrap">
			<div className="addEventBtn">
				<button onClick={() => setShowAddForm(!showAddForm)}>Add Event</button>
			</div>
			{showAddForm ? <AddForm getData={() => getData()} /> : null}
			{loaderFlag ? <p>Loading...</p> : <EventTable getData={() => getData()} events={eventData} />}
		</div>
	);
}

export default Events;
