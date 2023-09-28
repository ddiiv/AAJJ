import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import React,{useEffect, useState} from 'react';
import { getProductsById } from '../api/apiFuntions';
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

const ProductDetail = (id) => {

    //--------------------MODAL---------------------
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [product, setProduct] = useState(''); 
    const handleShow = () => {setShow(true); 
        getProductsById(id.id)
        .then(data => setProduct(data));
    
    }
    const enabledShow=(e)=>{
        if(e === true){
            
            e="Si";
        }
        else if(e === false)
        {
            e="No";
        }
        return e;
    }
    //-------------------StatesForGet-------------------
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ver Detalle
            </Button>
            <Modal show={show} onHide={handleClose}>
                <ModalHeader>
                    <Modal.Title><h2>{product.Title}</h2></Modal.Title>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <p>Categoria: {product.Category}</p>
                        <p>SubCategoria: {product.SubCategory}</p>
                        <p>Material: {product.Material}</p>
                        <p>Precio: {product.Price}</p>
                        <p>Descripcion: {product.Description}</p>
                        <p>Activo: {enabledShow(product.Enabled)}</p>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </ModalFooter>

            </Modal>
            </>
       )    
}

export default ProductDetail;
