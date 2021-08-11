import React from "react";
import "./App.css";
import Contact from "./pages/Contact";
import Events from "./pages/Events/Events";
import Workshops from "./pages/Workshops/Workshops";
import ScoshDetails from "./pages/ScoshDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import BlogPage from "./pages/BlogPage/BlogPage";

const App = () => {
    return (
        <div>
            {/* <Contact /> */}
            {/* <ScoshDetails /> */}
            {/* <Events /> */}
            {/* <Workshops /> */}
            <BlogPage />
        </div>
    );
};

export default App;
