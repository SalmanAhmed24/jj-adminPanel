import moment from 'moment';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddForm({ getData }) {
	const d = new Date();
	const currentDate = moment(new Date()).format('YYYY-MM-DD');
	const currentTime = `${d.getHours()}:${d.getMinutes()}`;
	const [ title, setTitle ] = useState('');
	const [ speaker, setSpeaker ] = useState('');
	const [ date, setDate ] = useState(currentDate);
	const [ time, setTime ] = useState(`${currentTime}`);
	const [ phone, setPhone ] = useState();
	const [ address, setAddress ] = useState('');
	const [ file, setFile ] = useState();

	const titleHandler = (e) => setTitle(e.target.value);
	const speakerHandler = (e) => setSpeaker(e.target.value);
	const dateHandler = (e) => setDate(e.target.value);
	const timeHandler = (e) => setTime(e.target.value);
	const phoneHandler = (e) => setPhone(e.target.value);
	const addressHandler = (e) => setAddress(e.target.value);
	const fileHandler = (e) => {
		console.log(e.target.files[0]);
		const file = e.target.files[0];
		setFile(file);
	};
	const resetData = () => {
		setTitle('');
		setSpeaker('');
		setAddress('');
		setFile();
		setPhone('');
		setDate(currentDate);
		setTime(`${currentTime}`);
	};
	const submitHandler = () => {
		const formData = new FormData();
		formData.append('title', title);
		formData.append('speaker', speaker);
		formData.append('date', date);
		formData.append('time', time);
		formData.append('phone', phone);
		formData.append('address', address);
		formData.append('file', file);
		axios
			.post('http://localhost:3002/api/addEvents', formData)
			.then((res) => {
				Swal.fire({
					title: 'Success',
					icon: 'success',
					text: 'Event added successfully'
				}).then((result) => {
					if (result.isConfirmed) {
						getData();
					}
				});
			})
			.catch((err) => console.log(err));
		resetData();
	};
	return (
		<div className="formWrap">
			<div className="inputWrap">
				<input type={'text'} className="singleInp" placeholder="Enter Title" onChange={titleHandler} />
			</div>
			<div className="inputWrap">
				<input type={'text'} className="singleInp" placeholder="Enter Speaker Name" onChange={speakerHandler} />
			</div>
			<div className="inputWrap">
				<input
					type={'date'}
					value={date}
					className="singleInp"
					placeholder="Enter Date"
					onChange={dateHandler}
				/>
			</div>
			<div className="inputWrap">
				<input
					type={'time'}
					value={time}
					className="singleInp"
					placeholder="Enter Time"
					onChange={timeHandler}
				/>
			</div>
			<div className="inputWrap">
				<input type={'number'} className="singleInp" placeholder="Enter Phone" onChange={phoneHandler} />
			</div>
			<div className="inputWrap">
				<input type={'text'} className="singleInp" placeholder="Enter Address" onChange={addressHandler} />
			</div>
			<div className="inputWrap">
				<input type={'file'} className="singleInp" placeholder="Upload File" onChange={fileHandler} />
			</div>
			<div className="inputWrap btnwrap">
				<button onClick={submitHandler}>Add</button>
			</div>
		</div>
	);
}
export default AddForm;
