import axios from 'axios';

const getContacts = () => new Promise((resolve, reject) => {
  axios.get('https://address-book-api-demo.herokuapp.com/api/contacts')
    .then((response) => resolve(response.data)).catch(reject);
});

export default getContacts;
