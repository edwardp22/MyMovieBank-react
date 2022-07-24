import React from "react";

import { Routes, Route } from "react-router-dom";

import { ShowingNow } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowingNow />} />
      </Routes>
    </div>
  );
}

export default App;
