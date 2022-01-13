import { Button, ButtonGroup, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from 'react';
import { ContactModal } from "./ContactModal";

export const ContactInfo = ({ info, setInfo, contacts, setContacts }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex flexDir={"column"}>
            <Text fontSize={"4xl"} marginBottom={"1rem"}>{info.name}</Text>
            <Text fontSize={"lg"} marginBottom={"1rem"}>Phone: {info.phone}</Text>
            <Text fontSize={"lg"} marginBottom={"1rem"}>Email: {info.email}</Text>
            <Text fontSize={"lg"} marginBottom={"1rem"}>Notes: {info.notes}</Text>
            <ButtonGroup isAttached>
                <Button onClick={onOpen}>Update</Button>
                <Button onClick={() => setInfo(null)}>Close</Button>
            </ButtonGroup>
            <ContactModal 
                isOpen={isOpen}
                onClose={onClose}
                info={info}
                setInfo={setInfo}
                contacts={contacts}
                setContacts={setContacts}
            />
        </Flex>
    );
};
