import axios from 'axios'
import React ,{ useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'

function SingleBlog() {
    const {id} = useParams()
    const [singlepage , setSinglepage] = useState('')

    useEffect(()=>{
      async function fetchData(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' +id)
        console.log(response.data)
        setSinglepage(response.data)
      }
      fetchData()
    },[])
  
  return (
    <div>
      <h3>{singlepage.id}</h3>
        <h3>{singlepage.title}</h3>
        <p>{singlepage.body}</p>

    </div>
  )
}

export default SingleBlog