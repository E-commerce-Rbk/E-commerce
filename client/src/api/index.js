import axios from 'axios'

const product ='http://localhost:5000/product';

export const getProducts=()=>axios.get(product);
// export const createPost=(newPost)=>axios.post(url,newPost)
// export const updatePost=(id,updatePost)=>axios.patch(`${url}/${id}`,updatePost)
// export const deletePost=(id)=>axios.delete(`${url}/${id}`)