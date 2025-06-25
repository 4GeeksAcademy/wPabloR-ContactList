import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddContact = () => {

  const navigate = useNavigate()
  const { store, dispatch } = useGlobalReducer()

  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  })

  const userInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://playground.4geeks.com/contact/agendas/mycontacts/contacts", {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: 'ADD_CONTACT', payload: data });
        setInput({
          name: "",
          email: "",
          phone: "",
          address: ""
        });
        navigate("/")
      })
      .catch(error => console.error("Error al guardar el contacto", error))
  };

  return (
    <div className="container py-4">
      <h1 className="ms-2 fw-bold">Add a new contact</h1>
      <form action="" onSubmit={handleSubmit} className="border rounded-3 p-3 mt-4 shadow-sm bg-light">
        <div className="mb-2">
          <label className="form-label" htmlFor="name">Full Name</label>
          <input className="form-control" type="text" placeholder="Full Name" name="name" id="name" value={input.name} onChange={userInput} />
        </div>

        <div className="mb-2">
          <label className="form-label" htmlFor="email">Email</label>
          <input className="form-control" type="text" placeholder="Enter email" name="email" id="email" value={input.email} onChange={userInput} />
        </div>

        <div className="mb-2">
          <label className="form-label" htmlFor="phone">Phone</label>
          <input className="form-control" type="text" placeholder="Enter phone" name="phone" id="phone" value={input.phone} onChange={userInput} />
        </div>

        <div className="mb-0">
          <label className="form-label" htmlFor="address">Adress</label>
          <input className="form-control" type="text" placeholder="Enter address" name="address" id="address" value={input.address} onChange={userInput} />
        </div>

        <div className="mt-4">
          <button className="btn btn-primary me-4" style={{ width: "200px" }}>Save</button>
          <button className="btn btn-danger" style={{ width: "200px" }} onClick={() => navigate("/")}>Back</button>

        </div>
      </form>

    </div>
  );
};

export default AddContact