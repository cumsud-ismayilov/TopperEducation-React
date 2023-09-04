import React from "react";
import routes from "./router";
import "./style/global.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.length > 0 &&
            routes.map((element) => (
              <Route
                key={element.id}
                index
                path={element.path}
                element={element.element}
              />
            ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
