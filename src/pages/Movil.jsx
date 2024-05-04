import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/category/smartphones'

const Movil = () => {

    const [datos, setDatos] = useState([])

    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          console.log(data)

          setDatos(data.products);

        } catch (error) {
          console.error(error)
        }
      };

      useEffect(()=>{
        getDatos();
      },[]);

  return (
    <h1 className="text-center py-3">Movil {datos.length}</h1>
  )
}

export default Movil