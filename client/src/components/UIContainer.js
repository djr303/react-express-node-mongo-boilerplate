import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import New from "./New";
import List from './List'
import Edit from './Edit'

const UIContainer = () => (
  <Fragment>
    <header>
      <Nav />
    </header>
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="new" element={<New />} />
          <Route path="edit/:recordId" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </main>
  </Fragment>
);

export default UIContainer;
