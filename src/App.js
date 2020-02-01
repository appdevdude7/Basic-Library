import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Book from "./Book";

import "./styles.css";
import AddBook from "./AddBook";
import Library from "./Library";

/* let bookList = [
  { title: "Harry Potter", author: "J K Rowling", pages: 463 },
  { title: "The Hunger Games", author: "Suzanne Collins", pages: 127 },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    pages: 223
  },
  { title: "The Year of Magical Thinking", author: "Joan Didion", pages: 475 }
];
 */
function App() {
  return (
    <Router>
      <>
        <ul>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addbook">
              Add Book
            </a>
          </li>
        </ul>
        <Library />
        <Switch>
          <Route path="/addbook">
            <AddBook />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
