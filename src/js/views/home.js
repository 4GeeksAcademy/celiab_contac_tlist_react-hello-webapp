import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactCard.jsx";

export const Home = () => {
	const { store, action } = useContext(Context)
	

	return (
		<div className="">

			<div className="d-flex justify-content-end py-3 px-5">
				<Link to="/create-new-contact">
					<button className="btn btn-success">Create New Contact</button>
				</Link>
			</div>

			<div className="px-5 pb-5">
			{store.contacts.map((contact, index)=> {
			console.log(store.contacts)
			return(
					<ContactCard key={index}
					contact={contact}
					/>
				
 				)} )}
 		    </div>
		</div>
		

	)
};
