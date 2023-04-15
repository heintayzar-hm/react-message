import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NewGreeting from './pages/NewGreeting/NewGreeting';
import Detail from './pages/Detail/Detail';
import UpdateGreeting from './pages/NewGreeting/UpdateGreeting';
import RandomDetail from './pages/Detail/RandomDetail';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-greeting" element={<NewGreeting />} />
      <Route path="/random-detail" element={<RandomDetail />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/update-greeting/:id" element={<UpdateGreeting />} />
    </Routes>

  </div>
);

export default App;
