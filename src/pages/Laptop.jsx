import { useEffect, useState } from 'react';
import Card from '../components/Card'
const API='https://dummyjson.com/products/category/laptops'

const Laptop = () => {
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
    <>
    <h3 className='text-center py-3'>Todos los Laptops {datos.length}</h3>
 
    <div className="container">
     <div className="row">
 
         {datos && datos.map((item)=>(
        
                <Card key={item.id} item={item} />
                
 
             ))} 
                
         
         
 
 
     </div>
 
 
 
    </div>
 
     </>
  )
}

export default Laptop