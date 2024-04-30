// import { useState } from "react"

import { Link, Outlet } from "react-router-dom"
function App() {
  // const [whatNext, setWhatNext] = useState(0);
  

  return (
   <>
   <div className="bg-zinc-700 h-screen text-white flex justify-center items-center flex-col">
    <h1 className="text-3xl">React - Router - Dom</h1>
    <h2 className="text-2xl">Tailwind CSS</h2>

    <nav style={{height: "40px", width: "300px", border: "2px solid white"}}>
      <ul style={{height: "40px", display: "flex", gap: "10px", justifyContent: "space-between", padding: "0px 10px", alignItems: "center"}}>
        {/* <li onClick={()=> setWhatNext(0)}>Home</li>
        <li onClick={()=> setWhatNext(1)}>About</li>
        <li onClick={()=> setWhatNext(2)}>Blog</li> */}
        <li><Link to="home">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="blog">Blog</Link></li>

      </ul>
    </nav>

    <div className="h-[20rem] w-[30rem] bg-slate-400 mt-5 flex flex-col justify-center items-center">
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Blog /> */}
      {/* {whatNext == 0 ? <Home/> : whatNext == 1 ? <About /> : whatNext == 2 ? <Blog/> : "NOT FOUND"} */}
      <Outlet/>
    </div>
   </div>
   </>
  )
}

export default App
