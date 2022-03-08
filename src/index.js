import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./component/App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Invoice from './routes/invoice';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={ 
          <main>
            <h1>This is dashboard.</h1>
          </main>
         }/>
        <Route path="invoices" element={<Invoices />} >
          <Route index element={ 
            <main>
              <p>Select an Invoice</p>
            </main>
          }/>
          <Route path=":invoiceId" element={<Invoice/>} />
        </Route>
        <Route path="expenses" element={<Expenses />} />
        <Route path="*" element={
          <main>
            <p>There is nothing here.</p>
          </main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.querySelector("#root")
);
