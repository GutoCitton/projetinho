import { 
    BrowserRouter,
    Routes,
    Route
   } from 'react-router-dom';
  
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


   function Routers() {
     return (
       <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/contato' element={<Contact />} />
        </Routes>
       </BrowserRouter>
     )
   }
  
   export default Routers;