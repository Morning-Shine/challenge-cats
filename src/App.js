import AppBar from "./components/AppBar";
import AppRouter from "./components/AppRouter";
import { useSelector } from 'react-redux';
import ViewCat from "./components/ViewCat";
import './App.css';


function App() {
  const { url, isHide } = useSelector(state => state.viewCat);

  return (
    <div className="App">
      <AppBar />
      <AppRouter />
      {url
        ? <ViewCat isHide={isHide} url={url} />
        : null
      }
    </div>
  );
}

export default App;
