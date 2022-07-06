import { useState } from "react";
const Home = () => {
    // let fname = "Enid";
    const [fname, setFname] = useState("Israel");
    const handleClick = (e) =>{
        // fname = "Norbert";
        setFname("Norbert");
        
        console.log("Hello Norbert", e);
    }
    const handleClickAgain = (name, e) =>{
        console.log("Hello"+name, e);
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{"Good morning " + fname}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick = {(e) => handleClickAgain(" Israel",e)}>Click me again</button>
        </div>
    );
}

export default Home;