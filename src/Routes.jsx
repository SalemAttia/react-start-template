import React from "react";
import { Redirect } from "react-router-dom";
// Layout Types
import { Layout } from "./layouts";

import { Home, NotFoundPage } from "./views";

const lang = localStorage.getItem("lang") === "en" ? "/en/" : "/ar/";

export default [
  {
    path: "/",
    exact: true,
    layout: Layout,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={lang} />
    // TODO FIX-eslint Issue
  },
  {
    path: "/en/",
    layout: Layout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: Home
  },
  {
    path:"/ar/",
    layout: Layout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: Home
  },
  {
    path: "*",
    layout: Layout,
    params: {
      requiresAuth:false
    },
    exact: true,
    component: NotFoundPage
  },
];
