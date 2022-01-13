import { Input, InputGroup, Text } from '@chakra-ui/react';
import React from 'react'

export const ContactForm = ({ info, setInfo }) => {

    const handleUpdate = (e) => {
        setInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <InputGroup display={"flex"} flexDir={"column"}>
            <Text marginTop={"2px"} mb={"8px"}>Name</Text>
            <Input
                onChange={handleUpdate} 
                name="name" 
                defaultValue={info.name}
                marginBottom={"2rem"} 
                placeholder="Name" 
                variant="outline" 
            />
            <Text marginTop={"2px"} mb={"8px"}>Phone</Text>
            <Input
                onChange={handleUpdate} 
                name="phone" 
                defaultValue={info.phone}
                marginBottom={"2rem"} 
                placeholder="Phone" 
                variant="outline" 
            />
             <Text marginTop={"2px"} mb={"8px"}>Email</Text>
            <Input
                onChange={handleUpdate} 
                name="email" 
                defaultValue={info.email}
                marginBottom={"2rem"} 
                placeholder="Email" 
                variant="outline" 
            />
            <Text marginTop={"2px"} mb={"8px"}>Notes</Text>
            <Input
                onChange={handleUpdate} 
                name="itemName" 
                defaultValue={info.notes}
                marginBottom={"2rem"} 
                placeholder="Notes" 
                variant="outline" 
            />
        </InputGroup>
    );
};
