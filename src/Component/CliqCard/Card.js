import React from "react";
import './Cliqcard.scss'

import { globalState } from '../Context/Context.js'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";
 
const Card = () => {


    let { state, dispatch } = useContext(globalState)
    let a=useNavigate()
    

    const go=(id)=>{
        a(`/?id=${id}`)
    }

    return<section>
        <div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                {
                    state.arr.map((e,i)=>{

                    return  <div key={i} style={{width:"30%",}}>
                        <div style={{width:"50%"}}>
                            <img src={e.path} alt="loading" style={{width:"100%"}}/>
                        </div>
                         <h2>{e.name} </h2>
                         <p>{e.about}</p>
                        <button onClick={()=>go(e.id)}>Edit</button>
                    </div>
                })
                }
            </div>
        </div>
    </section>
}

export default Card