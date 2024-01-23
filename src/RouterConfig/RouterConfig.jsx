import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";

export default function RouterConfig () {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}