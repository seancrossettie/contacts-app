import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import getContacts from './helpers/contactData';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  return (
    <div className='App'>
      <Button onClick={() => console.warn(contacts)}>Test</Button>
    </div>
  );
}

export default App;