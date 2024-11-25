import {HashRouter, Route, Routes, Navigate} from 'react-router-dom';
import Geekbook from './Geekbook';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home"/>} />
        <Route path="/Home/*" element={<Geekbook />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
