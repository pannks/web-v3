import { Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
