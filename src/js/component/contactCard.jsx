import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencil, faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import { useContext } from 'react';

export const ContactCard = ({ contact }) => {

	const { store, actions } = useContext(Context)


	return (
		<div>
			<div className="d-flex align-items-start border">

				<div className="py-3 px-5">
					<img src="https://cdn.pixabay.com/photo/2018/03/21/16/46/capybara-3247363_1280.jpg" className="" alt="..." />
				</div>

				<div className=" mt-4 me-auto">
					<p>{contact.name}</p>
					<p><FontAwesomeIcon icon={faLocationDot} /> {contact.address}</p>
					<p><FontAwesomeIcon icon={faPhone} /> {contact.phone}</p>
					<p><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</p>
				</div>

				<div className="mt-4 mx-5">
					<Link to={`/edit-contact/${contact.id}`}>
						<button type="button" className="btn"><FontAwesomeIcon icon={faPencil} /></button>
					</Link>
					<button type="button" className="btn" data-bs-toggle="modal" data-bs-target={`#modal-${contact.id}`} ><FontAwesomeIcon icon={faTrash} /></button>
					{/* MODAL */}

					<div className="modal fade" id={`modal-${contact.id}`} tabIndex="-1" aria-labelledby={`#modal-${contact.id}`} aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Delete Contact</h5>
									<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
								</div>
								<div className="modal-body">
									Are you sure?
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
									{/* ELIMINATE CONTACT FETCH */}
									<button type="button" className="btn btn-danger" data-bs-dismiss="modal"
										onClick={() => {
											actions.deleteContact(contact.id)
										}}
									>Delete</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
