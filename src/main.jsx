import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";



const root = createRoot(document.getElementById("root")).render(<App />);
