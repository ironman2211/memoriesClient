import axios from "axios";


const url='https://memories-rq1t.onrender.com/post';

export const fetchposts =()=>axios.get(url);
export const createPost =(postData)=>axios.post(url,postData);