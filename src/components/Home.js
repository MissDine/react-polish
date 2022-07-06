import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:"My life", body: "lorem...", author: "Enid",id:1},
        {title:"My body", body: "lorem...", author: "Dine",id:2},
        {title:"My family", body: "lorem...", author: "Tichi",id:31}
    ])
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
    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* <p>{"Good morning " + fname}</p>
            <p>{fname} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick = {(e) => handleClickAgain(" Israel",e)}>Click me again</button> */}
        </div>
    );
}

export default Home;