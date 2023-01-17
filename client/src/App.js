import "./App.css";
import { routes } from "./routes";
import Navbar from "./components/Navbar";
import { useRoutes } from "react-router-dom";

function App() {
  const element = useRoutes(routes);
  return (
    <div className="bg-slate-100 App">
      <Navbar />
      {element}
    </div>
  );
}

export default App;
