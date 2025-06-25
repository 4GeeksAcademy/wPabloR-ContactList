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
        dispatch({type:'ADD_CONTACT',  payload: data});
        setInput({
          name: "",
          email: "",
          phone: "",
          address: ""
        });
        navigate("/")
      })
      .catch(error => console.error("Error al guardar el contacto",error))
  };

  return (
    <div className="container">
      <h1>Add a new contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Full Name" name="name" id="name" value={input.name} onChange={userInput} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter email" name="email" id="email" value={input.email} onChange={userInput} />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="Enter phone" name="phone" id="phone" value={input.phone} onChange={userInput} />
        </div>

        <div>
          <label htmlFor="address">Adress</label>
          <input type="text" placeholder="Enter adress" name="address" id="address" value={input.address} onChange={userInput} />
        </div>

        <button className="btn btn-primary">Save</button>
        <button className="btn btn-danger" type="button" onClick={()=> navigate("/")}>Back</button>
      </form>

    </div>
  );
};

export default AddContact