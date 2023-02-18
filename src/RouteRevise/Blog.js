import axios from 'axios'
import React ,{ useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  const [blog , setblog] = useState([])

  useEffect(()=>{
    async function FetchData(){
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
      console.log(response.data)
      setblog(response.data)
    }
    FetchData()
  },[])


  return (
    <div>
      <h3>Blog</h3>
    {
      blog.map((data)=>{
        return (
          <div key={data.id}>
            <h3>{data.id}</h3>
            <Link to={`${data.id}`} >{data.title}</Link>
            <p>{data.body}</p>
          </div>
        )
      })
    }
    </div>
  )
}

export default Blog