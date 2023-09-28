import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import React,{useEffect, useState} from 'react';
import { getSize, sendNewProducts } from '../api/apiFuntions';
import { getCategory, getSubCategory } from '../api/apiFuntions'; 
import { ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

const ModalAddProducts = () => {
    //--------------------MODAL---------------------
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); 
    //-------------------StatesForGet-------------------
    const [categories, setCategories]= useState([]);
    const [subCategories, setSubCategories]= useState([]);
    const [sizes, setSizes] =useState([]);

    //-------------------StatesForm-------------------
    const [size, setSize] = useState([]);
    const [image, setImage] = useState([]);
    const [title, setTitle] = useState('');
    const [idCategory, setIdCategory] = useState('');
    const [idSubCategory, setIdSubCategory] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [material, setMaterial] = useState('');
    const [enabled, setEnabled] = useState(false);

    //-------------------UseEffects-------------------
    
    useEffect(()=>{
        getSize()
        .then(data => setSizes(data))

    },[]);

    useEffect(() => {
        getCategory()
        .then(data => setCategories(data));
    }, []);
    
    useEffect(()=>{
        getSubCategory()
        .then(data => setSubCategories(data))
    },[]);

    //-------------------HandelChanges-------------------

    const changeImage = (e) => {
        setImage(e.target.value);
    }
    const changeTitle = (e) => {
        setTitle(e.target.value);
    }
    const changeCategory = (e) => {
        setIdCategory(e.target.value);
    }
    const changeSubCategory = (e) => {
        setIdSubCategory(e.target.value);
    }
    const changePrice = (e) => {
        setPrice(e.target.value);
    }
    const changeDescription = (e) => {
        setDescription(e.target.value);
    }
    const changeMaterial = (e) => {
        setMaterial(e.target.value);
    }
    const changeEnabled = (e) => {
        setEnabled(e.target.value);
    }
    const changeSize = (e) => {
        setSize(e.target.value.length);
    }
    
    //-------------------Submit-------------------

    const onSubmit = (e) => {
        e.preventDefault();
        let products = {
            product : {
                idCategory: Number(idCategory),
                idSubCategory : Number(idSubCategory),
                title: String(title), 
                price : Number(price),
                description: String(description),
                enabled: Boolean(enabled),
                material: String(material)
            },
            size:[{size: Number(size)}],
            img:[{image: String(image)}]
    }
    sendNewProducts(products.product, products.img, products.sizes);
    handleClose();
    }


    return (
        <>
    <div>
        <Button variant="primary" onClick={handleShow} >Agregar Producto</Button>
        
        <Modal id="1" show={show} onHide={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <ModalHeader>
                <ModalTitle>Agregar Producto</ModalTitle>
            </ModalHeader>
            <ModalBody>
            <div className="addProduct" id='addProduct'>
                <form onSubmit={onSubmit}>
            <input type="hidden" name="_token" value=""/>
            <div className="form-group">
                <label className="control-label">Imagenes separadas por un "|"</label>
                <div>
                    <input id="image"type="text" className="form-control u-full-width" name="image" placeholder='Introducir url aqui 'value={image} required onChange={changeImage}/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label">Titulo</label>
                <div>
                    <input id="title"type="text" className="form-control u-full-width" name="title" placeholder='Titulo'required value={title} onChange={changeTitle}/>
                </div>
            </div>
            <div className="form-group"> 
                <label id="category" className="control-label">Categoria</label>
                <div>
                    <select id='category' name='category' required value={idCategory} onChange={changeCategory}>
                    <option value=""> Seleccione la categoria</option>  
                    {categories?.map((category)=>(
                        <option value={category.IdCategory}>
                        <ul key={category.IdCategory}>{category.Category}</ul> 
                        </option>        
                        
                    ))} </select>      
                </div>
            </div>
            <div className="form-group">
                <label id="sub-category"className="control-label">Genero</label>
                <div>
                    <select id="subCategory" name='subCategory' required  value={idSubCategory} onChange={changeSubCategory}>
                        <option value=""> Seleccione el genero</option>
                    {subCategories?.map((subCategory)=>(
                    <option value={subCategory.IdSubCategory}>
                        <ul key={subCategory.IdSubCategory} className=''>
                        <li>{subCategory.SubCategory}</li>
                        </ul></option>
                    ))}</select> 
                </div>
            </div> 
            <div className="form-group">
                <label id="talle" className="control-label">Talles</label>
                <div> <form value={size} onChange={changeSize}> 
                <ul>
                    {
                    sizes?.map((size)=>(
                        
                        <li key={size.IdSize} >
                        <input type="checkbox"  value={size.IdSize}/>{size.size} 
                        </li>    
                    ))
                    }
                    </ul>
                    </form>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label">Precio</label>
                <div>
                    <input id="price"type="number" className="form-control u-full-width" name="price" placeholder='Price'required value ={price} onChange={changePrice}/>
                </div>
            </div>
            <div className="form-group">
                <label className="control-label">Material</label>
                <div>
                    <input id="material"type="text" className="form-control u-full-width" name="material" placeholder='Material' value ={material} onChange={changeMaterial}/>
                </div>
            </div>
            
            <div className="form-group">
                <label className="control-label">Descripcion</label>
                <div>
                    <textarea id="description" className="form-control u-full-width" name="description" placeholder='Descripcion del articulo' value ={description} onChange={changeDescription} required/>
                </div>
            </div>
            <div className="form-group">
                <div>
                    <div className="checkbox">
                        <label>
                            <input id="enabled"type="checkbox" name="enabled" value ={enabled} onChange={changeEnabled}/> Disponible
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div>

                    
                </div>
            </div>
        </form>
    </div>


            </ModalBody>
            <ModalFooter>
                <Button variant="primary" type="submit" className="btn btn-success" name='addProduct' onClick={onSubmit}> Añadir Producto</Button>
                <Button variant="primary" onClick={handleClose}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    </div>
    
        </>
    ) 
}
export default ModalAddProducts;