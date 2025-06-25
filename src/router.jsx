// Import necessary components and functions from react-router-dom.
import { createBrowserRouter } from "react-router-dom";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactList />,
  },
  {
    path: "/add",
    element: <AddContact />,
  },
  // Aquí más adelante pondremos "/edit/:id"
]);
