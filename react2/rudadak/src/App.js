import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.js';
import Find from './pages/Find.js';
import Search from './pages/Search.js';
import Sound from './pages/Sound.js';
import Categories from './components/Categories.js';


const App = () => {
  return(
    <Routes>
      <Route element={<Categories />}>
        <Route path="/" element={<Home />} />
        <Route path="/find" element={<Find />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Sound" element={<Sound />} />
      </Route>
    </Routes>
  );
};

export default App;
