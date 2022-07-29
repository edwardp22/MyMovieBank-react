import {
  ShowingNow,
  CommingSoon,
  Top10,
  Popular,
  Favorites,
  About,
  Contact,
  Register,
} from "./pages";

export const menu = [
  { route: "/", text: "Showing Now", element: <ShowingNow /> },
  { route: "/comming", text: "Coming soon", element: <CommingSoon /> },
  { route: "/top", text: "Top 10", element: <Top10 /> },
  { route: "/popular", text: "Most Popular", element: <Popular /> },
  { route: "/favorites", text: "Favorites", element: <Favorites /> },
  { route: "/about", text: "About Us", element: <About /> },
  { route: "/contact", text: "Contact Us", element: <Contact /> },
  {
    route: "/register",
    text: "Register Now",
    className: "registrationButton",
    element: <Register />,
  },
];
