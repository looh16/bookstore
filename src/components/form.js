import React from 'react';
// import Select from 'react-select';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyles from '../css/Form.module.css';

const BookForm = () => (
  <div className={formStyles.book}>
    <p>
      ADD NEW BOOK
    </p>
    <Form>
      <Form.Group className="mb-3" controlId="bookTitle">
        <Row>
          <Col lg={3} md={6} sm={12} xs={12}>
            <Form.Control type="email" placeholder="Book Title" />
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <Form.Control as="select" custom>
              <option value="action">Action</option>
              <option value="programming">Programming Language</option>
            </Form.Control>
          </Col>

          <Col lg={3} md={6} sm={12} xs={12}>
            <Button type="submit">Add Book</Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  </div>

);

export default BookForm;
