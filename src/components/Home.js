import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"My life", body: "lorem...", author: "Enid",id:1},
        {title:"My body", body: "lorem...", author: "Dine",id:2},
        {title:"My family", body: "lorem...", author: "Tichi",id:31}
    ])
    const [isPending, setPending] = useState(true)
    const [error, setError] =useState("null")
    const handleDelete = (id)=>{
        const newBlogs = blogs.filter(blog =>blog.id !== id);
        setBlogs(newBlogs)
    }
    // let fname = "Enid";
    // const [fname, setFname] = useState("Israel");
    // const [age, setAge] = useState(8)
    // const handleClick = (e) =>{
    //     // fname = "Norbert";
    //     setFname("Norbert");
    //     setAge(16)
    //     console.log("Hello Norbert", e);
    // }
    // const handleClickAgain = (name, e) =>{
    //     console.log("Hello"+name, e);
    // }
    useEffect(() =>{
        console.log("Hey there");
        console.log(blogs);
    })
    // UseEffect to fetch some data
    useEffect(()=>{
        const abortCont = new AbortController();
        // setTimeout(()=>{
            fetch("http://localhost:9000/blogs", {signal: abortCont.signal})
        .then(response => {
            if(!response.ok){
                throw Error("Could not fetch the data")
            }
            return response.json();
        })
        .then(data =>{
            console.log(data);
            setBlogs(data)
            setPending(false)
        })
        .catch(err=>{
            if(err.name === "AbortError"){
                console.log("Fetch aborted");
            }else{
                console.log(err.message);
            setError(err.message)
            }
            
    })
        // },1000)
        return () => abortCont.abort();
    }, [])
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div pend>loading</div>}
            <BlogList blogs = {blogs} title = {"All blogs"} handleDelete= {handleDelete}/>
            <BlogList blogs = {blogs.filter((blog)=> blog.author ==="Enid" )} title = {"Enid's blogs"}/>
            {/* <h2>Homepage</h2> */}
            {/* <p>{"Good morning " + fname}</p>
            <p>{fname} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick = {(e) => handleClickAgain(" Israel",e)}>Click me again</button> */}
        </div>
    );
}

export default Home;