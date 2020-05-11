import React, { useEffect, useState } from "react";

import firebase from "../firebase";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Home() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const db = firebase.firestore();
			const data = await db.collection("users").get();
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		fetchData();
	}, []);

	return (
		<div>
			<Table striped bordered hover className="contact-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone</th>
						<th>Controls</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<tr key={user.id}>
							<td>{index}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.phone}</td>
							<td style={{ width: "min-content" }}>
								<Button variant="outline-success" className="mr-2">Edit</Button>
								<Button variant="outline-danger">Delete</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Button variant="success" href="/create">Create</Button>
		</div>
	);
}

export default Home;
