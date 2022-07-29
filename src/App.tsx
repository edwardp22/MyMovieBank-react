import React, { createContext } from "react";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { menu } from "./menu";

export const mainContext = createContext<any>({});

function App() {
  return (
    <mainContext.Provider value={{ menu }}>
      <Layout>
        <Routes>
          {menu.map((link) => (
            <Route path={link.route} element={link.element} />
          ))}
        </Routes>
      </Layout>
    </mainContext.Provider>
  );
}

export default App;
