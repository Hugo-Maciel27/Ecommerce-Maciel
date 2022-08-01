import { useEffect, useState } from "react"
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { data } from '../mocks/fakeApi';

const ItemListContainer = (props) => {
    console.log(props)

    const [listaProductos, setListaProductos]= useState([])
    const[mensaje, setMensaje] = useState(false)
    const [loading, setLoading] = useState(true)
    // const {greeting}= props
    // console.log(props)
    // console.log('me renderice soy el itemlist')
  
   
  
    
    
  
    console.log('me monte')
  
    useEffect(()=>{
      console.log('soy el useEffect')
      data
      .then((res)=> setListaProductos(res))
      .catch(()=> setMensaje('hubo un error, intente mas tarde'))
      .finally(()=> setLoading(false))
    }, [])

    return(
    <div>
        <h1 className="saludoCatalogo">{props.greeting}</h1>
        {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos}/>}
         {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
    </div>
    )
}

export default ItemListContainer;