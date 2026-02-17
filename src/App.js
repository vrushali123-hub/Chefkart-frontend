/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotificationBanner from "./Components/Header/Head";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Header/Navbar";
import ChefDirectory from "./Components/ChefSearch";
import ChefDetails from "./Components/ChefDetailsPage";
import Register from "./Components/ChefRegistration/Register";
import ChefFormFormik from "./Components/ChefRegistration/Register";
import Home from "./Components/Home/Home";
import { BiBowlHot } from "react-icons/bi";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



// Lazy Loading Components
const Hom = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const ChefConnection = lazy(() => import("./Components/ChefConection/ChefConnection"));
const Month = lazy(() => import("./Components/CookForAmonth/Month"));
const OneTime = lazy(() => import("./Components/OneTimeCook/OneTime"));
const Chef = lazy(() => import("./Components/Chefforparty/Chef"));
const Testi = lazy(() => import("./Components/Testimonial/Testi"));
const Career = lazy(() => import("./Components/Career/Career"));
const Blog = lazy(() => import("./Components/Blog/Blog"));
const Investor = lazy(() => import("./Components/Investor/Invest"));

const App = () => {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "about", element: <About /> },
    { path: "blog", element: <Blog /> },
    { path: "contact", element: <Contact /> },
    { path: "join-chefkart", element: <ChefConnection /> },
    { path: "cook-for-month", element: <Month /> },
    { path: "one-time-cook", element: <OneTime /> },
    { path: "chef-for-party", element: <Chef /> },
    { path: "testimonial", element: <Testi /> },
    { path: "career", element: <Career /> },
    { path: "investor-relation", element: <Investor />}, 
    {  path:"chef-search", element:<ChefDirectory/>},
    { path:"chef/:id", element:<ChefDetails/>},
    {path:'/register',element:<ChefFormFormik/>}
    
  
  ];

  return (
    <div>
      <NotificationBanner />
      <Navbar />
      {/* Suspense Component to Handle Loading */}
      <Suspense fallback={<div className="text-center text-xl p-10">Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;







