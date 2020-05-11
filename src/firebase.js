import firebase from "firebase";

const config = {
	apiKey: "AIzaSyCbeEOI70eQ7fTn03_fcc0dzSOzJMpb80A",
	authDomain: "is445-homeworkcourse.firebaseapp.com",
	databaseURL: "https://is445-homeworkcourse.firebaseio.com",
	projectId: "is445-homeworkcourse",
	storageBucket: "is445-homeworkcourse.appspot.com",
	messagingSenderId: "26237188445",
	appId: "1:26237188445:web:8e2860fcb714e2d3a790b4",
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase;
