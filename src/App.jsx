import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Team from "./Pages/Team";
import Profile from "./Pages/Profile";
import NoMatch from "./Pages/NoMatch";

function App() {
  return (
    <Routes>
    <Route path="/"  element={<Layout />}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="team" element={<Team/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="*" element={<NoMatch/>}/>

    </Route>
    </Routes>
    
  );
}
function Layout(){
  return(
<div>

<Outlet/>
</div>

  )
}
export default App;
