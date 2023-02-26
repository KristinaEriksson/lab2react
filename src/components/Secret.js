import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const secretCode = "1337";


export const EasterEggComponent = () => {
    const [showmodal, setShowModal] = useState(false);
    let code = "";
    const handleClose = () => setShowModal(false);

    document.addEventListener('keydown', (key) => {
        code += key.key
        if(secretCode === code) {
            setShowModal(true)
            code = "";
        }
        else{
            setTimeout(() => {
                code = "";
            },3000);
        }
    })

    return(
        <div>
            <Modal style={{width: '5ovw'}} show={showmodal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vMDgekSlkD0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}