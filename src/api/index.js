import axios from "axios";


const url='http://localhost:5000/post';

export const fetchposts =()=>axios.get(url);
export const createPost =(postData)=>axios.post(url,postData);