import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { DefaultLayout, Layout } from "./layouts";

import { Home, NotFoundPage, Login } from "./views";

const lang = localStorage.getItem("lang") === "en" ? "/en/" : "/ar/";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={lang} />
    // TODO FIX-eslint Issue
  },
  {
    path: "/en/",
    layout: DefaultLayout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: Home
  },
  {
    path:"/ar/",
    layout: DefaultLayout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: Home
  },
  {
    path: "/:lang/login",
    layout: Layout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: Login
  },
  {
    path: "*",
    layout: DefaultLayout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: NotFoundPage
  },
];
