import React,{useState} from 'react'
import StarRating from './StarRating'
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({setCartValue,data})


{
    const [rating, setRating] = useState(0);

const handleRatingChange = (newRating) => {
  setRating(newRating);
};
    let [toggle,setToggle] = useState(true)
    return<> <div class="col mb-5">
    <div class="card h-100">
      
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
      
        <div class="card-body p-4">
            <div class="text-center">
      
                <h5 class="fw-bolder">{data.name}</h5>
               {data.price}
              
 
            </div>
        </div>
       
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
            {
                toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                  setCartValue(prev=>prev+1)
                  setToggle(!toggle)
                }}>
                  Add to cart
                </button>
                :
                <button ClassName="btn btn-outline-dark mt-auto" onClick={()=>{
                  setCartValue(prev=>prev-1)
                  setToggle(value=>!value)
                }}>
                  Remove
                </button>
                
                                  }
              
              </div>
              <div class="text-center">
      <div><StarRating totalStars={5} initialRating={rating} onRatingChange={handleRatingChange} /></div>
      <p>Selected rating: {rating}</p>
      </div>
        </div>
    </div>
</div></>
  }
  
  
  
  
export default Card