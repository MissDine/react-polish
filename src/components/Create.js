import "../index.css"
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("Enid")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()
    const HandleSubmit = (e)=>{
        e.preventDefault();
        const blog = {title, body,author}
        setIsPending(true)
        // console.log(blog);
        fetch("http://localhost:9000/blogs", {
            method: "POST",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new blog added");
            setIsPending(false)
            
        })
        history.go(-1)
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={HandleSubmit}>
                <label>Blog Title</label>
                <input
                    type = "text"
                    required
                    value ={title}
                    onChange= {(e)=>setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                required
                value= {body}
                onChange = {(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                value={author}
                onChange = {(e)=>setAuthor(e.target.value)}>
                    <option value="Enid">Enid</option>
                    <option value="Dine">Dine</option>
                    <option value="Tichi">Tichi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
            
        </div>
    );
}

export default Create;