import { useEffect, useState } from "react";

const API='https://dummyjson.com/products'

const Tienda = () => {
const [datos, setDatos] = useState([])



    const getDatos = async () =>{
        try {
          const response = await fetch(API);
          const data = await response.json();
          console.log(data)

          setDatos(data.products);
          setContador(100);
        } catch (error) {
          console.error(error)
        }
      };

      useEffect(()=>{
        getDatos();
      },[]);

   
  return (
    <>
   <h3 className='text-center py-3'>Todos los productos {datos.length}</h3>

   <div className="container">
    <div className="row">

        {datos && datos.map((item)=>(
        <>
                <div className="col-md-4 col-lg-3 mb-4">
                
                <div className="card">
                    <div className="card-header p-0">
                    <img src={item.thumbnail} alt="" className="img-fluid" />
                    </div>
                        <div className="card-body text-center">
                
                             <p>{item.title}</p>
                             <p className="color-text">{item.price}$</p>
                         </div>
                         <div className="card-footer text-center">

                            <a href="#" className="btn btn-success me-1" >Mostrar</a>
                            <a href="#" className="btn btn-danger" >Comprar </a>

                         </div>
               
                </div>
                </div>
                </>

            ))} 
               
        
        


    </div>



   </div>

    </>
  )
}

export default Tienda