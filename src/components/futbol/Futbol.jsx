import { useEffect, useState } from "react";
import { getProducts } from "../api/apiFuntions";
import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';
import './FutbolCatalog.css';
const FutbolCatalog = () => {
  const [futbolList, setFutbolList] = useState([])

  useEffect(() => {
    getProducts()
      .then(data => setFutbolList(data));
    console.log(futbolList)
  }, [])


  return (
    <div className="products">
      {futbolList.map((productFutbol) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/955192746175815683/F4_3kEt4_400x400.jpg" />
          <Card.Body>
            <Card.Title>{productFutbol.Title}</Card.Title>
            <Card.Text>
             {productFutbol.Description}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  )

}

export default FutbolCatalog;