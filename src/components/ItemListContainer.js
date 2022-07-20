import './ItemListContainer.css'
const ItemListContainer = (props) => {
    console.log(props)
    return(
    <div>
        <h1 className="saludoCatalogo">{props.greeting}HOLA, AUN NO TENEMOS LISTAS LAS PIZZAS :( </h1>
    </div>
    )
}

export default ItemListContainer;