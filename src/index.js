import React from "react";
import ReactDOM from "react-dom";

import Book from "./Book";

import "./styles.css";

let bookList = [
  { title: "Harry Potter", author: "J K Rowling", pages: 463 },
  { title: "The Hunger Games", author: "Suzanne Collins", pages: 127 },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    pages: 223
  },
  { title: "The Year of Magical Thinking", author: "Joan Didion", pages: 475 }
];

class Library extends React.Component {
  state = {
    open: false,
    freeBookmark: true
  };

  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  };

  render() {
    const { books } = this.props;
    return (
      <>
        <div className="button-center">
          <h1 className="main-title">
            The library is {this.state.open ? "open" : "closed"}{" "}
          </h1>
          <button className="button" onClick={this.toggleOpenClosed}>
            change state
          </button>
        </div>
        <div className="body">
          {books.map((book, i) => (
            <Book
              key={i}
              title={book.title}
              author={book.author}
              pages={book.pages}
              freeBookmark={this.state.freeBookmark}
            />
          ))}
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Library books={bookList} />, rootElement);
