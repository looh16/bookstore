/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../redux/categories/categories';

// Use Redux in React components.
const BooksCategory = ({ categoryId }) => {
  const categories = useSelector(selectAllCategories);

  const category = categories.find((category) => category.id === categoryId);

  return <span>{category ? category.name : 'Unknown author'}</span>;
};

export default BooksCategory;
