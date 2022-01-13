import { Input, InputGroup, Text } from '@chakra-ui/react';
import React from 'react';


export const ContactForm = ({ info, setInfo, emailError, validateEmail }) => {

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
            <Text marginTop={"2px"} mb={"6px"}>Email</Text>
            {emailError ? <Text color={"red.500"} fontSize={"xs"} mb={"2px"}>Please enter a valid email address.</Text> : ""}
            <Input
                onChange={(e) => {
                    handleUpdate(e);
                    validateEmail(e);
                }}
                isInvalid={emailError}
                defaultValue={info.email} 
                name="email" 
                marginBottom={"2rem"} 
                placeholder="Email" 
                variant="outline" 
            />
            
            <Text marginTop={"2px"} mb={"8px"}>Notes</Text>
            <Input
                onChange={handleUpdate} 
                name="notes" 
                defaultValue={info.notes}
                marginBottom={"2rem"} 
                placeholder="Notes" 
                variant="outline" 
            />
        </InputGroup>
    );
};
