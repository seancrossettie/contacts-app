import { Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ContactCard } from './components/ContactCard';
import { ContactInfo } from './components/ContactInfo';
import getContacts from './helpers/contactData';

function App() {
  const [contacts, setContacts] = useState([]);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getContacts().then(setContacts);
  }, []);

  return (
    <Flex flexDir={"row"} justifyContent={"center"}>
      <Flex flexDir={"column"} width={"50%"} marginTop={"10rem"} align={"center"}>
        <Text fontSize={"4xl"}>Contacts</Text>
          {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                setInfo={setInfo}
              />
          ))}
      </Flex>
      <Flex flexDir={"column"} width={"50%"} marginTop={"10rem"}  align={"center"}>
        {info !== null 
          ? <ContactInfo
              info={info}
              setInfo={setInfo}
              contacts={contacts}
              setContacts={setContacts}
            />
          : ""
        }
      </Flex>
    </Flex>
  );
}

export default App;