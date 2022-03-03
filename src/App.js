import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import MainMenu from './components/MainMenu/MainMenu';
import Help from "./components/Help/Help";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
