import axios from 'axios';

export default axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lpVKZXY2FH5bWRldNRLD/books',
  headers: {
    'Content-type': 'application/json',
  },
});
