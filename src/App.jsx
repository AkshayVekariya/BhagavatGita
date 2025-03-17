import { BrowserRouter, Route, Routes } from "react-router";
import Style from "./App.module.css";
import Layout from "./comman/Layout/Layout";
import Home from "./pages/Home/Home";
import Chapter from "./componet/chapter/Chapter";
import Verse from "./componet/GetParticularVerse/Verse";
import Quotes from "./pages/Quotes/Quotes";
import Aboutus from "./pages/AboutUs/Aboutus";
import Donet from "./pages/donet/Donet"
import { createContext, useState } from "react";
import Acknowledgements from "./pages/Acknowledgements/Acknowledgements";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Contact from "./pages/contactUs/Contact";

export const languageContext = createContext()
function App() {

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lan") || "English";
  })



  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <div className={Style.Mainsection}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home language={language} />}/>
              <Route path="Chapter/:number" element={<Chapter language={language} />}/>
              <Route path="Chapter/:number/Verse/:verseNumber" language={language} element={<Verse />}/>
              <Route path="/quotes" element={<Quotes />} language={language} />
              <Route path="/Aboutus" element={<Aboutus />} language={language} />
              <Route path="/Donet" element={<Donet />} language={language} />
              <Route path="/Acknowledgements" element={<Acknowledgements />} language={language} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/Term" element={<Terms />} />
              <Route path="/Contact" element={<Contact/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </languageContext.Provider>
  );
}

export default App;
