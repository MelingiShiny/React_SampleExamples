import React,{useState,useEffect} from 'react'
import axios from 'axios'

function UseEffect_FetchData() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idButton, setIdButton] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPost(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[idButton])

    const handleClick= ()=>{
        setIdButton(id)
    }


  return (
    <div>
        <input type="text" value={id}  onChange={e=>setId(e.target.value)}></input>
        <button  type="button" onClick={handleClick}>submit</button>
        {/* <ul>
            {
                posts.map(post=>(<li key={post.id}>{post.title}</li>))
            }
        </ul> */}
        <div>{post.title}</div>
    </div>
  )
}

export default UseEffect_FetchData