import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RiderSignupForm from './components/RiderSignupForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rider-signup" element={ <RiderSignupForm />} />
            </Routes>
        </Router>
    );
}

export default App;
