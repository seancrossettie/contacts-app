import { Button, ButtonGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react'
import { ContactForm } from './ContactForm';

export const ContactModal = ({ isOpen, onClose, info, setInfo, contacts, setContacts }) => {

    const updateContact = () => {
        const newContactArr = [...contacts];
        newContactArr[contacts.findIndex(i => i.id === info.id)] = info;
        setContacts(newContactArr);
        onClose();
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
                        />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonGroup isAttached>
                            <Button onClick={updateContact}>Update</Button>
                            <Button onClick={onClose}>Close</Button>
                        </ButtonGroup>
                    </ModalFooter>
                </ModalContent>
            </ModalContent>
        </Modal>
    );
};
