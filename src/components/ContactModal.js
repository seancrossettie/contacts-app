import { Button, ButtonGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React, { useState } from 'react';
import validator from 'validator';
import { ContactForm } from './ContactForm';

export const ContactModal = ({ isOpen, onClose, info, setInfo, contacts, setContacts }) => {

    const updateContact = () => {
        const newContactArr = [...contacts];
        newContactArr[contacts.findIndex(i => i.id === info.id)] = info;
        setContacts(newContactArr);
        onClose();
    };

    
    const [emailError, setEmailError] = useState(false);
    const validateEmail = (e) => {
        const email = e.target.value;
        if (validator.isEmail(email)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalContent>
                    <ModalHeader>Update Contact</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ContactForm 
                            info={info}
                            setInfo={setInfo}
                            emailError={emailError}
                            validateEmail={validateEmail}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup isAttached>
                            <Button isDisabled={emailError} onClick={updateContact}>Update</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </ModalContent>
        </Modal>
    );
};
