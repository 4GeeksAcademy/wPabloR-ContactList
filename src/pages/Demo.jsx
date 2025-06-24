import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  

export const Demo = () => {
 
  const { store, dispatch } = useGlobalReducer()

  

  return (
    <div className="container"> 
      <h1>Add a new contact</h1>
      <form action="">
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Full Name" name="name" id="name"/>
        </div>

         <div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter email" name="email" id="email"/>
        </div>

         <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" placeholder="Enter phone" name="phone" id="phone"/>
        </div>

         <div>
          <label htmlFor="adress">Adress</label>
          <input type="text" placeholder="Enter adress" name="adress" id="adress"/>
        </div>

        <button className="btn btn-primary">Save</button>
      </form>

      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
