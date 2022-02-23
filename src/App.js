import './App.css';
import Main from './components/Main';
import { MenuProvider } from './context/MenuContext';


function App() {
  return (
    <>
      <MenuProvider>
        <Main />
      </MenuProvider>
    </>
  );
}

export default App;
