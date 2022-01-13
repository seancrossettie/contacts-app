import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex } from '@chakra-ui/react';
import React from 'react'

export const ContactCard = ({ contact, setInfo }) => {
    return (
        <Flex>
            <Button
                rightIcon={<ArrowForwardIcon />} 
                width={"15rem"}
                size={"lg"}
                margin={"1rem"}
                onClick={() => setInfo(contact)}
            >
                {contact.name}
            </Button>
        </Flex>
    );
};
