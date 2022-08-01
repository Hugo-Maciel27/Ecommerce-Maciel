import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
    const[mensaje, setMensaje] = useState(false)
    const { img, name, description, price, stock, hashtags}=producto
  
    const onAdd = (cantidad) => {
      setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} alt={producto.name} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          {producto.description}
        </Card.Text>
        <Card.price>{producto.price}</Card.price>
        <Card.stock> stock: {producto.stock}</Card.stock>
        {mensaje && <p>{mensaje}</p>}
      <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Item