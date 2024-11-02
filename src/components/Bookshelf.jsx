import { useState } from "react";

const Bookshelf = ({ props }) => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);
    setNewBook({ title: "", author: "" });
  };

  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <form onSubmit={handleUserSubmit}>
            <label htmlFor="title">Book:</label>
            <input
              id="title"
              type="text"
              name="title"
              onChange={handleInputChange}
              value={newBook.title}
            />
            <label htmlFor="author">Author: </label>
            <input
              id="author"
              type="text"
              name="author"
              onChange={handleInputChange}
              value={newBook.author}
            />
            <button type="submit">submit</button>
          </form>
        </div>
        <div className="bookCardsDiv">
          {books.map((book, index) => (
            <div key={index}>
              <h4>{book.title}</h4>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookshelf;
