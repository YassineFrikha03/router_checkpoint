import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Rating from "../Rating/Rating";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Book = ({
  title,
  author,
  genre,
  publicationYear,
  coverImageURL,
  rating,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      style={{
        width: "20rem",
        margin: "15px",
        padding: "15px",
        textAlign: "center",
      }}
    >
      <Card.Img
        variant="top"
        src={coverImageURL}
        alt={title}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>
          <strong> {title} </strong>
        </Card.Title>
        <Card.Text>
          <strong>Author : </strong> {author}
        </Card.Text>
        <Card.Text>
          <strong>Gender : </strong> {genre}
        </Card.Text>
        <Card.Text>
          <strong>Published in : </strong> {publicationYear}
        </Card.Text>
        <Rating rating={rating} />
        <Button variant="primary" onClick={() => navigate (`/books/${title}`)}>
          Show Book 
          </Button>
      </Card.Body>
    </Card>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  genre: PropTypes.string,
  publicationYear: PropTypes.number,
  coverImageURL: PropTypes.string,
  rating: PropTypes.number,
};

Book.defaultProps = {
  title: "Unknown Title",
  author: "Unknown Author",
  genre: "Unknown Gender",
  publicationYear: 0,
  coverImageURL: "https://via.placeholder.com/150",
  rating: 3,
};

export default Book;
