import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function RecomCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { name, designation, company, message } = props;

    return (
        <>
            <div className="col-12 col-md-4">
                <a onClick={handleShow}>
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <h4 className="card-text py-2">
                                {message.length > 25 ? message.slice(0, 25) + "..." : message}
                            </h4>
                            <p className="card-text text-secondary mb-0"> {name} </p>
                            <p className="card-text text-secondary mb-2">
                                {designation} at {company}
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <Modal show={show} onHide={handleClose}>

                <Modal.Body>
                    <center style={{ padding: "15px", marginTop: "30px" }}> <h3> {message} </h3></center>
                    <center> {name} </center>
                    <center style={{ paddingBottom: "20px" }}> {designation} at {company} </center>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default RecomCard;