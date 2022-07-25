import ItemCount from './ItemCount';
import './ItemListContainer.css'

const ItemListContainer = (props) => {
    console.log(props)

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} items al carrito`)
    }

    return(
    <div>
        <h1 className="saludoCatalogo">{props.greeting}</h1>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
    )
}

export default ItemListContainer;