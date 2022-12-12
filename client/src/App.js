import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './assets/css/index.css'
import { Dashboard, Register,Error,Landing } from "./pages";

function App() {
  return (
    <div className="">
      {/* <Landing/> */}
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
