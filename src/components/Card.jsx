

const Card = ({item}) => {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
                
                <div className="card h-100">
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

  )
}

export default Card