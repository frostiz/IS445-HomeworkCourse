import React, { useEffect, useState } from "react";

import firebase from "../firebase";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Home(props) {
	const [users, setUsers] = useState([]);

	const fetchData = async () => {
		const db = firebase.firestore();
		const data = await db.collection("users").get();
		setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
	};

	useEffect(() => {
		fetchData();
	}, []);

	const onDelete = (values) => {
		if (window.confirm("Are you sure ?")) {
			const db = firebase.firestore();
			db.collection("users").doc(values.id).delete();
			fetchData();
		}
	};

	const { history } = props;

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
								<Button
									variant="outline-primary"
									className="mr-2"
									onClick={() => history.push("/details", { user })}
								>
									Details
								</Button>
								<Button
									variant="outline-warning"
									className="mr-2"
									onClick={() => history.push("/create", { user })}
								>
									Edit
								</Button>
								<Button
									variant="outline-danger"
									className=""
									onClick={() => onDelete(user)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Button variant="success" href="/create">
				Create
			</Button>
		</div>
	);
}

export default Home;
