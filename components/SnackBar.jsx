import React from "react";
import {  Modal, ModalBody } from "shards-react";

export default function SnackBar(props) {

    const { isOpen, toggle } = props;

    return (
        <div>
            <Modal size="xs" open={isOpen} toggle={toggle}>
                <ModalBody style={{fontSize: '20px'}} >Url copied to Clipboard!!</ModalBody>
            </Modal>
        </div>
    );
}