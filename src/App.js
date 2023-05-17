import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [shows, setshows] = useState(false)
  const [person, setperson] = useState( {
    fullname: "Azza Ratel",
    Bio : "We only live once",
    img: "https://1.bp.blogspot.com/-dRoidh3JDPM/XTBZjKhLkEI/AAAAAAAACDM/TEOjp96USiICwTZ0fgUN1QQ-h68d1NxSgCLcBGAs/s1600/les-fleurs.jpg",
    profession : "Deve Full Stack",
  } )
  return (
  
    <div className="body">
      {/* <Profil/> */}
  {shows? <div className='container'>
    <h1 > {person.fullname} </h1>
    <h1> {person.Bio} </h1>
   <img src={person.img}/>
    <h1 > {person.profession} </h1>
    
  </div>: null }
  <button className='btn' onClick={ ()=>setshows (!shows) }  > click here </button>
  </div>
 
  );
}

export default App;
