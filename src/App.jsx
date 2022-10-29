// import { Routes, Route, Outlet } from "react-router-dom";
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Team from './pages/Team';
// import Profile from './pages/Profile';
// import NoMatch from './pages/NoMatch';
// import Footer from './components/Footer';

import Nav from './components/Navbar' ;


const App = () => {
  return (
    <div> 
         <Nav/>
         </div>

    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="team" element={<Team />} />
    //     <Route path="profile" element={<Profile />} />
    //     <Route path="*" element={<NoMatch />} />
    //   </Route>
    // </Routes>
  );
};

// const Layout = () => {
//   return (
//     <div className="App">
//      <Nav/>
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };
export default App;
