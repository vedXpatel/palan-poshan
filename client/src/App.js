import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import FMCHDashboard from "./Components/FMCHDashboard/FMCH";
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Form from "./Components/Form/Form"
import Appointments from "./Components/Appointments/Appointments"
import Pmom from "./Components/MotherForms/Pmom.js";
import Dmom from "./Components/MotherForms/Dmom.js";
import Articles from "./Components/Articles/Articles";
import Prepreg from "./Components/Resources/Prepreg";
import Postpreg from "./Components/Resources/Postpreg";

function  App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fmch" element={<FMCHDashboard />} />
          <Route path="/dashboard/Pmom" element={<Pmom />} />
          <Route path="/dashboard/Dmom" element={<Dmom />} />
          <Route path="/form" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/prepreg" element={<Prepreg />} />
          <Route path="/postpreg" element={<Postpreg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
