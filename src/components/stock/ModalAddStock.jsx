import Modal  from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import {getReason} from '../api/apiFuntions';
import { sendStock } from '../api/apiFuntions';
import { getStockById } from '../api/apiFuntions';
import React,{ useState} from 'react';


const ModalAddStock = (id) => {

  // const [newStock, setNewStock] = useState({})
  // useEffect(() => async() => {
  //   const response = await fetch(`cantidad de stock en ${newStock.talle} talle`)
  //   const data = await response.json()
  //   setNewStock(prevStock => ({...prevStock, cantidad: data}))
  // }, [newStock.talle]) 

      //--------------------MODAL---------------------
          const [show, setShow] = useState(false);
          const handleClose = () => setShow(false);
          const handleShow = () => {setShow(true);
            getStockById(id.id)
            .then(data => setStock(data));
          
            getReason()
            .then(data => setReasons(data));
            console.log(reasons);
          }
      //-----------------StatesforGet-----------------
      const [stock, setStock] =useState([]);
      const [reasons, setReasons] = useState([]);
      //------------------StatesForm------------------
      const [idSize, setIdSize] = useState([]);
      const[quantity, setQuantity] = useState('');
      const[idReason, setIdReason] = useState('');
      const[description,setDescription]=useState('');
      const date = new Date ();
      //-------------------HandelChanges-------------------
      
      const changeSize = (e) => {
        setIdSize(e.target.value);
      }
      const changeQuantity = (e) => {
        setQuantity(e.target.value);
      }
      const changeReason = (e) => {
        setIdReason(e.target.value);
      }
      const changeDescription = (e) => {
        setDescription(e.target.value);
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        let Stocks = {
          idEmployee: 1,
          idStock: Number(idSize),
          idReason: Number(idReason),
          date: Date(date),
          quantity: Number(quantity),
          description: String(description)
          
        }
        console.log(Stocks);
        sendStock(Stocks);
        handleClose();
      }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
        Agregar Stock
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Stock</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="size">Talle</label>
                <select className="form-control" id="size" required value={idSize}  onChange={changeSize}>
                  <option value="">Seleccione un talle</option>
                  {stock?.map((stock) => (
                    <option key={stock.IdStock} value={stock.IdStock} >
                      {stock.size}  Cantidad: {stock.quantity}
                    </option>
                  ))} 
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Cantidad</label>
                <input
                  type="number"
                  min={0}                  className="form-control"
                  id="quantity"
                  placeholder="Cantidad"
                  onChange={changeQuantity}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reason">Motivo</label>
                <select className="form-control" id="reason" onChange={changeReason}>
                  <option value="">Seleccione un motivo</option>
                  {reasons.map((reasonss) => (
                    <option key={reasonss.IdReason} value={reasonss.IdReason}>
                    {reasonss.Reason}
                    </option>
                  ))} 
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Descripcion</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  placeholder="Descripcion"
                  onChange={changeDescription}
                />
              </div>

            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Agregar
              </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );


}
export default ModalAddStock;

