import "./App.css";
import { Route, Routes } from "react-router-dom";


import Home from "./components/Home";
import PostJob from "./components/Jobs/PostJob";
import EditJob from "./components/Jobs/EditJob";
import JobDetails from "./components/Jobs/JobDetails";
import About from "./components/About";
import ApplicationConfirm from "./components/Jobs/ApplicationConfirm";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
        <Route path="/add-new-job" element={<PostJob />} />
        <Route path="/edit-job/:id" element={<EditJob />} />
        <Route path="/apply" element={<ApplicationConfirm />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
