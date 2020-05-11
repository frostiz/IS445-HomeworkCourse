import React, { useEffect, useState } from "react";

import firebase from "../firebase";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
	name: Yup.string().required(),
	email: Yup.string().required(),
	phone: Yup.string().required(),
});

function Create({ user = { name: "", email: "", phone: "" } }) {
	const onCreate = (values) => {
		const db = firebase.firestore();
		db.collection("users").add(values);
	};

	return (
		<div>
			<Formik
				validationSchema={schema}
				initialValues={user}
				validateOnChange={true}
				validateOnBlur={false}
				onSubmit={onCreate}
			>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					touched,
					isValid,
					errors,
					setFieldTouched,
				}) => (
					<Form noValidate onSubmit={handleSubmit}>
						<Form.Row>
							<Form.Group as={Col} md="4" controlId="validationFormikName">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									placeholder={"Name"}
									value={values.name}
									onChange={(e) => setFieldTouched("name") && handleChange(e)}
									isInvalid={touched.name && !!errors.name}
									isValid={touched.name && !errors.name}
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								<Form.Control.Feedback type="invalid">
									{errors.name}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4" controlId="validationFormikEmail">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="text"
									name="email"
									placeholder="Email"
									value={values.email}
									onChange={(e) => setFieldTouched("email") && handleChange(e)}
									isInvalid={touched.name && !!errors.email}
									isValid={touched.email && !errors.email}
								/>

								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								<Form.Control.Feedback type="invalid">
									{errors.email}
								</Form.Control.Feedback>
							</Form.Group>
							<Form.Group as={Col} md="4" controlId="validationFormikPhone">
								<Form.Label>Phone</Form.Label>
								<InputGroup>
									<InputGroup.Prepend>
										<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
									</InputGroup.Prepend>
									<Form.Control
										type="text"
										placeholder="Phone"
										aria-describedby="inputGroupPrepend"
										name="phone"
										value={values.phone}
										onChange={(e) =>
											setFieldTouched("phone") && handleChange(e)
										}
										isInvalid={touched.name && !!errors.phone}
										isValid={touched.phone && !errors.phone}
									/>
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									<Form.Control.Feedback type="invalid">
										{errors.phone}
									</Form.Control.Feedback>
								</InputGroup>
							</Form.Group>
						</Form.Row>
						<Button type="submit">Submit form</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
}

export default Create;
