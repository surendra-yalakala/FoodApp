import { useContext } from "react";
import UserContext from "../utils/context/UserContext";

const Contact = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="p-4">
      <h1 className="py-4 font-bold text-lg">Contact </h1>
      <h2 className="font-sans text-sm">Contact Name - {user?.name}</h2>
      <h3 className="font-sans text-sm">Contact Email - {user?.email}</h3>
    </div>
  );
};

export default Contact;
