import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Bed from "./pages/Bed";
import Error from "./pages/Error";
import Realty from "./pages/Realty";
import Tourism from "./pages/Tourism";
import Landscaping from "./pages/Landscaping";

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Helmet>
                  <title>
                    Adriel Homes - Real Estates, Bed & Breakfast, Tour & Travel,
                    Landscaping - All in one place
                  </title>
                  <meta
                    name="description"
                    content="Discover Adriel Homes, your one-stop destination for real estate, bed and breakfast, tour and travel, and landscaping services. We offer comprehensive solutions and personalized customer care, ensuring satisfaction and quality in every service. Explore our offerings and contact us today!"
                  />
                  <meta
                    name="keywords"
                    content="Adriel Homes, real estate, bed and breakfast, tour and travel, landscaping, property listings, personalized customer care, comprehensive solutions, quality services, landscaping, in rwanda, in kigali, in nigeria, tours and travel, tourism"
                  />
                </Helmet>

                <Layout />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="real-estate" element={<Realty />} />
            <Route path="bed-and-breakfast" element={<Bed />} />
            <Route path="tourism" element={<Tourism />} />
            <Route path="landscaping" element={<Landscaping />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
