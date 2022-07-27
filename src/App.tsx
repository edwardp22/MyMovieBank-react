import React from "react";

import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { ShowingNow } from "./pages";

export const menu = [
  { route: "/", text: "Showing Now", element: <ShowingNow /> },
  { route: "/comming", text: "Coming soon" },
  { route: "/top", text: "Top 10" },
  { route: "/popular", text: "Most Popular" },
  { route: "/favorites", text: "Favorites" },
  { route: "/about", text: "About Us" },
  { route: "/contact", text: "Contact Us" },
  { route: "/register", text: "Register Now" },
];

function App() {
  return (
    <Layout>
      <Routes>
        {menu.map((link) => (
          <Route path={link.route} element={link.element} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
