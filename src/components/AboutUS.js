import { Outlet } from "react-router-dom";
// import Profile from "./Profile";

const AboutUS = () => {
  return (
    <div>
      <h1>I am about the app</h1>
      {/* <Profile /> */}
      <Outlet />
    </div>
  );
};

export default AboutUS;
