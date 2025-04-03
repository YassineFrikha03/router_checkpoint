import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import books from '../../books';
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import Rating from "../Rating/Rating";

const BookDetails = () => {
    const {title}=useParams();
    const Book = books.find((el)=>el.title === title);
    const navigate = useNavigate();
    return (
        <div>

        <Card key={Book.title} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Book.coverImageURL} />
        <Card.Body>
            <Card.Title>AUTHOR: {Book.author}</Card.Title>
            <Card.Title>GENRE: {Book.genre}</Card.Title>
            <Card.Title>PUBLICATION YEAR: {Book.publicationYear}</Card.Title>
            <Rating rating={Book.rating} />
            <Button variant="primary" onClick={() => navigate('/books')}>
                GO BACK
            </Button>
        </Card.Body>
        </Card>


            
        </div>
  )
}

export default BookDetails
