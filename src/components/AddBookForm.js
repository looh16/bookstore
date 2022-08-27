import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import {
  Row, Col, Form, Button,
} from 'react-bootstrap';
import { addBook } from '../redux/books/books';
import { selectAllCategories } from '../redux/categories/categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import formStyles from '../css/Form.module.css';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const categories = useSelector(selectAllCategories);

  const onAuthorChanged = (e) => setAuthor(e.target.value);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onCategoryChanged = (e) => setCategoryId(e.target.value);

  const canSave = [title, author].every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSave) {
      const categoryObj = categories.find((obj) => obj.id === Number(categoryId));
      const category = categoryObj.name;
      /* eslint-disable camelcase */
      const item_id = nanoid();
      dispatch(addBook(item_id, title, author, category));
      swal('Done!', `${title} successfully added`, 'success');
      setAuthor('');
      setTitle('');
    }
  };

  const categoriesOptions = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  ));

  return (
    <div className={formStyles.book}>
      <p>
        ADD NEW BOOK
      </p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="bookTitle">
          <Row>
            <Col lg={5} md={6} sm={12} xs={12}>
              <Form.Control type="text" placeholder="Book Author" value={author} onChange={onAuthorChanged} />
            </Col>

            <Col lg={5} md={6} sm={12} xs={12}>
              <Form.Control type="text" placeholder="Book Title" value={title} onChange={onTitleChanged} />
            </Col>

            <Col lg={4} md={6} sm={12} xs={12}>
              <Form.Control as="select" custom value={categoryId} onChange={onCategoryChanged}>
                {categoriesOptions}
              </Form.Control>
            </Col>

            <Col lg={3} md={6} sm={12} xs={12}>
              <Button
                type="submit"
                disabled={!canSave}
              >
                Add Book
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </div>

  );
};

export default AddBookForm;
