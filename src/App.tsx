import React from "react";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { ShowingNow } from "./pages";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ShowingNow />} />
      </Routes>
    </Layout>
  );
}

export default App;
