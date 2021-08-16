import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom"
import Contact from "./pages/Contact";
import Events from "./pages/Events/Events";
import Workshops from "./pages/Workshops/Workshops";
import ScoshDetails from "./pages/ScoshDetails";

import "bootstrap/dist/css/bootstrap.min.css";
import BlogPage from "./pages/BlogPage/BlogPage";
import Navbar from "./components/navbar";

const App = () => {
    return (
            <BrowserRouter>
            <Navbar />
                <Route path="/contactpage" exact={true}>
                    <Contact />
                </Route>
                <Route path="/" exact={true}>
                    <ScoshDetails />
                </Route>
                <Route  path="/events" exact={true}>
                    <Events />
                </Route>
                <Route  path="/workshops" exact={true}>
                    <Workshops />
                </Route>
                <Route  path="/blogs" exact={true}>
                    <BlogPage />
                </Route>
            </BrowserRouter>
    );
};

export default App;
