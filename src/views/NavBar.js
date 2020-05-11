import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/nav';
import Button from 'react-bootstrap/Button';

function NavBar(props) {
	const { location } = props;

	return (
		<Navbar collapseOnSelect expand="md" bg="primary" variant="dark" className="main-nav" sticky="top">
			<Navbar.Brand href="/">Contact management</Navbar.Brand>
			<Nav className="mx-auto" activeKey={location.pathname}>
				<Button variant="outline-light" href="/" className="mr-2">Index</Button>
				<Button variant="outline-light" href="/create">Create</Button>
			</Nav>
		</Navbar>
	);
}

export default NavBar;
