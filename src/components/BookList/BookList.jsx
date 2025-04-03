import Book from "../Book/Book";
import books from "../../books";

const BookList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default BookList;