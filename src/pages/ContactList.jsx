import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

const ContactList = () => {

	const { store, dispatch } = useGlobalReducer()


	const deleteContact = (id) => {
		fetch(`https://playground.4geeks.com/contact/agendas/mycontacts/contacts/${id}`, {
			method: 'DELETE'
		})
			.then(resp => {
				if (!resp.ok) throw new Error("No se pudo eliminar el contacto")
				dispatch({ type: 'DELETE_CONTACT', payload: id });
			})
			.catch(error => console.error("Error al eliminar el contacto", error))
	}

	return (
		<div className="text-center mt-5">
			<Link to="/add">
				<button className="btn btn-primary">Add New Contact</button>
			</Link>
			{store.contacts.map(contact => (
				<div className="container" key={contact.id}>
					<div className="row">
						<div className="col-md-3">
							<img src="https://picsum.photos/100" className="rounded-5" alt="" />
						</div>
						<div className="col-md-5">
							<h3>{contact.name}</h3>
							<p>{contact.address}</p>
							<p>{contact.phone}</p>
							<p>{contact.email}</p>
						</div>
						<div className="col-md-3">
							<button onClick={() => deleteContact(contact.id)}>🗑️</button>
							<button>✏️</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}; 

export default ContactList