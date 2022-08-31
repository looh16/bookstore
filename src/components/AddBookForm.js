import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import swal from 'sweetalert';
import { Col, Form, Button } from 'react-bootstrap';
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
    <div className={formStyles.bookForm}>
      <div>
        <p className={formStyles.addNew}>
          ADD NEW BOOK
        </p>
      </div>

      <div>
        <Form onSubmit={handleSubmit}>

          <Form.Group as={Col} xs={3} controlId="bookAuthorField" className={formStyles.input}>
            <Form.Control
              type="text"
              value={author}
              name="bookAuthor"
              placeholder="Book Author"
              required
              onChange={onAuthorChanged}
            />
          </Form.Group>

          <Form.Group as={Col} xs={3} controlId="bookTitleField" className={formStyles.input}>
            <Form.Control
              type="text"
              value={title}
              name="bookTitle"
              placeholder="Book Title"
              required
              onChange={onTitleChanged}
            />
          </Form.Group>

          <Form.Group as={Col} xs={4} controlId="categorySelect" className={formStyles.input}>
            <Form.Control as="select" name="categories" value={categoryId} onChange={onCategoryChanged}>

              {categoriesOptions}
            </Form.Control>
          </Form.Group>

          <Button
            className={formStyles.btnAdd}
            type="submit"
            disabled={!canSave}
          >
            Add Book
          </Button>
        </Form>
      </div>
    </div>

  );
};

export default AddBookForm;
