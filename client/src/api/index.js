import axios from 'axios'

const product ='http://localhost:5000/product';
const user='http://localhost:5000/user'

export const getProducts=()=>axios.get(product);
export const signup=(newUser)=>axios.post(`${user}/signup`,newUser)
export const login=(user)=>axios.post(`${user}/login`,user)


// export const createPost=(newPost)=>axios.post(url,newPost)
// export const updatePost=(id,updatePost)=>axios.patch(`${url}/${id}`,updatePost)
// export const deletePost=(id)=>axios.delete(`${url}/${id}`)