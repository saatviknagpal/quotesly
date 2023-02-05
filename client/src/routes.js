import Login from "./components/Login";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import React from "react";
import CreateQuote from "./components/CreateQuote";
import Home from "./components/Home";
import OtherUserProfile from "./components/OtherUserProfile";
import EditQuote from "./components/EditQuote";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/create", element: <CreateQuote /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/:id", element: <OtherUserProfile /> },
  { path: "/edit/:id", element: <EditQuote /> },
];
