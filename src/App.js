import './App.css';
import AppRoutes from './Components/AppRoutes';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
