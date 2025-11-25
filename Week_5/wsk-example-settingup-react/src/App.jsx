

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './views/Home';
import Profile from './views/Profile';
import Upload from './views/Upload';
import Single from './views/Single';
import Login from './views/Login.jsx';
//import Register from './views/Register.jsx';

const App = () => {
  return (
     <BrowserRouter basename={import.meta.env.BASE_URL}>
       <Routes>
         <Route element={<Layout />}>
           <Route path="/" element={<Home />} />
           <Route path="/profile" element={<Profile />} />
           <Route path="/upload" element={<Upload />} />
           <Route path="/single" element={<Single />} />
           <Route path="/login" element={<Login/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
   );
    
};

export default App;