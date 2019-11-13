import React from "react";

const Book = ({ title, author, pages, freeBookmark }) => {
  return (
    <section className="card">
      <h2 className="title">{title}</h2>
      <p className="content">by: {author} </p>
      <p className="content"> Pages: {pages} pages </p>
      <p className="content">
        {" "}
        Free Bookmark Today: {freeBookmark ? "yes!" : "no!"}{" "}
      </p>
    </section>
  );
};

export default Book;
