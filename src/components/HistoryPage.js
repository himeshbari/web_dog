import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './History.css';

const History = () => {
  const [history, setHistory] = useState([]);

  //history fetch from local stor
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('dogHistory')) || [];
    setHistory(savedHistory);
  }, []);

  // remove image 
  const handleDeleteImage = (index) => {
    const updatedHistory = [...history];
    updatedHistory.splice(index, 1);
    setHistory(updatedHistory);


    localStorage.setItem('dogHistory', JSON.stringify(updatedHistory));
  };

  return (
    <Container className="history-container">
      <h1>History Page</h1>
      {history.length > 0 ? (
        <Row className="image-grid">
          {history.map((imageUrl, index) => (
            <Col key={index} xs={6} md={3} lg={3} xl={3}>
              <div className="image-container">
                <img src={imageUrl} alt={`Dog ${index + 1}`} className="dog-image" />
                <Button variant="danger" onClick={() => handleDeleteImage(index)} >
                  Delete
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No history available.</p>
      )}
    </Container>
  );
};

export default History;
