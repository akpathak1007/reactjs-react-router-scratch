import React from "react";
import { Link, Outlet, NavLink, useSearchParams } from "react-router-dom";

import { getInvoice } from "../data";

const Invoices = () => {
  const invoices = getInvoice();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="d-flex">
      <nav
        className="p-2 border-end"
      >
        <input type="text" value={searchParams.get('filter') || ""} onChange={
          e => {
            const filter = e.target.value;
            filter ? setSearchParams({ filter }) : setSearchParams({});
          }
        } />
        {invoices.filter(invoice => {
          const filter = searchParams.get('filter');
          if (!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        }).map((invoice) => {
          return (
            <NavLink
              className="d-block"
              style={({ isActive }) => ({
                color: isActive ? 'green' : ''
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </NavLink>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;
