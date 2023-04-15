import "./App.css";
import { Router, ScrollToTop } from "./utils";
import { BrowserRouter } from "react-router-dom";

export const App = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Router />
    </BrowserRouter>
);

export default App;