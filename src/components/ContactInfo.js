import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import React from 'react';

export const ContactInfo = ({ contact, setInfo }) => {
    return (
        <Flex flexDir={"column"}>
            <Text fontSize={"4xl"} marginBottom={"1rem"}>{contact.name}</Text>
            <Text fontSize={"lg"} marginBottom={"1rem"}>phone: {contact.phone}</Text>
            <Text fontSize={"lg"} marginBottom={"1rem"}>email: {contact.email}</Text>
            <Text fontSize={"lg"} marginBottom={"1rem"}>notes: {contact.notes}</Text>
            <ButtonGroup isAttached>
                <Button>Update</Button>
                <Button onClick={() => setInfo(null)}>Close</Button>
            </ButtonGroup>
        </Flex>
    );
};
