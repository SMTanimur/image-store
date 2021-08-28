import React,{useReducer,useEffect} from 'react'
import ImagesCard from './ImagesCard'
import axios from 'axios'

const initialState ={
  loading:true,
  error:"",
  posts:[]
}
const reducer =(state,action)=>{
   switch(action.type){
     case "SUCCESS":
       return{
         loading:false,
         posts:action.result,
         error:''
       };
       case "ERROR":
         return{
           loading:false,
           posts:[],
           error:'there was a problems'
         };
         default:
           return state;
     
   }
}


function Product() {
 const[{posts},dispatch]= useReducer(reducer,initialState)

 const fetchProduct =async () =>{
   try {
     
     const {data} = await axios.get('https://fakestoreapi.com/products')
     dispatch({
       type: 'SUCCESS',
        result:data
     })
   } catch (err) {
     
     dispatch({
       type: 'ERROR',
     })
   }
  
}
   useEffect(() =>{
     fetchProduct()
    
   },[])

   
  return (
    
    <div className="bg-blue-300 relative">
    <div className="container mx-auto grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-cols-dense gap-5 ">
       {posts.map((post,index) => (<ImagesCard key={post.id}  {...{post}}
       />))}
    </div>
    </div>
  )
}

export default Product
