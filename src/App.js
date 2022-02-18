import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import MainMenu from './components/MainMenu/MainMenu';
import Help from "./components/Help/Help";

function App() {
  return (
    <div>
      <Header />
      <MainMenu />
      <Tasks />
      <Help />
    </div>
  );
}

export default App;
