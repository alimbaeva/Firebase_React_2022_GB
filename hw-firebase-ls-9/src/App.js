import { Route, Routes } from "react-router-dom";
import Layoute from "./components/Layoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layoute />} >
          <Route index element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
