import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import SideBar from "./components/SideBar";

//Pages
import HomePage from './components/HomePage';
import AssetsPage from './components/AssetsPage';
import AccessoriesPage from './components/AccessoriesPage';
import ConsumablesPage from './components/ConsumablesPage';


function App() {
  const appName = 'Trackr'
  return (
        <Router>

          {/* Menu Content */}
          <Header appName={appName}/>
          <SideBar />

          <Routes>
            {/* Core Pages */}
            <Route path='/' element={<HomePage />} />
            <Route path='/assets' element={<AssetsPage />} />
            <Route path='/accessories' element={<AccessoriesPage />} />
            <Route path='/consumables' element={<ConsumablesPage />} />
          </Routes>         
        </Router>      
  );
}

export default App;
