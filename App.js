import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from './components/New';
import Hello from './components/Hello';
import Internships from './components/Internships';
import Projects from './components/Projects';
import Resumes from './components/Resumes';
import Jobs from './components/Jobs';
import Resources from './components/Resources';
import Employers from './components/Employers';
import About from './components/About';
import Example1 from './use_context/Example1';
import Callback from './components/Callback';
import Useref from './components/Useref';


function App() {
  return (
    

    <>
  <Example1/>
  <Callback/>
  <Useref/>
  


    <BrowserRouter>
      <Routes>
        <Route path="/hooks4" element={<New />}/>
        <Route path = "/hello" element={<Hello />}/>
        <Route path = "/internships" element={<Internships />}/>
        <Route path= "/projects" element={<Projects />}/>
        <Route path="/Resumes" element={<Resumes />}/>
        <Route path="/Jobs" element={<Jobs />}/>
        <Route path="/Resources" element={<Resources />}/>
        <Route path="/Employers" element={<Employers />}/>
        <Route path ="/About" element={<About />}/>
        
    
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


