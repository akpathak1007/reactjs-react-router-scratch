import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>
        <Link to="/" className="link">Bookkeeper</Link>
      </h1>
      <nav className="text-dark m-3">
        <Link to="invoices">Invoices</Link> |
        <Link to="expenses"> Expenses</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default App;
