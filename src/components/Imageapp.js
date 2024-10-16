//https://api.unsplash.com/photos/users/ashbot/likes?page=1&query=${searchValue}&client_id=${API_KEY}
import React, { useState } from 'react'


const Imageapp = () => {

    const [search,setSearch]=useState();
const [data,setData]=useState([]);
//let API_KEY="clA5w_VJ2S10Yqhr1pP3Mtja0C7nxY5l8-FZEA6OqTY"

    const handleSearch=(event) =>{
    setSearch(event.target.value)
}
const getData =() => {
myFun(search);
}

const myFun=async(searchVal) =>{
    const get=await fetch(`https://api.unsplash.com/search/photos?page=1&query=${searchVal}&client_id=clA5w_VJ2S10Yqhr1pP3Mtja0C7nxY5l8-FZEA6OqTY`)
const jsonData =await get.json()

    setData(jsonData.results)

}

//console.log(data);

    return (
        <>
        <div className='container'>
            <h1>Image Search App</h1>
            <div className='inputs'>
                <input type='text' placeholder='Search Image..' onChange={handleSearch}/>
                <button onClick={getData}>Search</button>
            </div>
            <div className='images'>
                {
                 data.map((curVal,index)=>{
                    console.log(curVal)
                    return(
                        <img src={curVal.urls.full}/>
                    )
                 })   
                }
            </div>
        </div>
        </>
    );
}

export default Imageapp;