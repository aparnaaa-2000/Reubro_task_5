import React from 'react'

export default function Main() {
    const userInfo = ({name:'Alona',age :'15', location :'London'}) ;
    console.log(userInfo);
    
  return (
    
    <div className='container' style={{backgroundColor:'navy',color:'white',alignItems:'center',textAlign:'center'}}>
        <h1 >User Info</h1>
        <h2 style={{color:'purple'}}>name:{userInfo.name}</h2>
        <p style={{color:'green'}}>age:{userInfo.age}</p>
        <p style={{color:'grey',fontSize:'20px'}}>location:{userInfo.location}</p>
       
        
    </div>
  )
}
