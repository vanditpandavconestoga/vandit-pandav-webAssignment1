import React, { useState } from "react";
import { Form, Button, Card, ListGroup } from "react-bootstrap";

// This component is for user comments

function Comments() {
  const [userComments, setUserComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState(0);

  // This function is use for set new comments
  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  // This function is use for add ratings
  const handleRatingChange = (e) => {
    setNewRating(Number(e.target.value));
  };

  // This function is use for set the user input value
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      comment: newComment,
      rating: newRating,
    };

    setUserComments((prevComments) => [...prevComments, commentData]);
    setNewComment("");
    setNewRating(0);
  };

  return (
    <div>
      <h2 className="mb-4">Product Comments</h2>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Your Comments</Card.Title>
          {userComments.length === 0 ? (
            <p className="text-muted">
              You haven't submitted any comments yet.
            </p>
          ) : (
            <ListGroup variant="flush">
              {userComments.map((comment, index) => (
                <ListGroup.Item key={index}>
                  <p>{comment.comment}</p>
                  <p>Rating: {comment.rating}</p>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Other Comments</Card.Title>
          <p className="text-muted">This is good product</p>
          <p className="text-muted">This is small size</p>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Submit a Comment</Card.Title>
          <Form onSubmit={handleCommentSubmit}>
            <Form.Group controlId="commentTextarea">
              <Form.Label>Comment:</Form.Label>
              <Form.Control
                as="textarea"
                value={newComment}
                onChange={handleCommentChange}
              />
            </Form.Group>
            <Form.Group controlId="ratingInput">
              <Form.Label>Rating:</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="5"
                value={newRating}
                onChange={handleRatingChange}
              />
            </Form.Group>
            <Button className="mt-3" type="submit" variant="primary">
              Submit Comment
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Comments;
