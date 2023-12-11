import React, { useContext, useEffect, useState } from "react"
import './form.css'
import {  useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { globalState } from "../Context/Context"

export const Form=()=>{

    let [name,setname]=useState()
    let [path,setpath]=useState()
    let [about,setabout]=useState()
    let [id,setid]=useState()
    const {state,dispatch}=useContext(globalState)
    let a=useNavigate()
    

    const goto=()=>{
        a(`/card`)
    }


    const handle=(e)=>{
        if(e.target.name==='name'){
            setname(e.target.value)

        }

       else if(e.target.name==='path'){
            setpath(e.target.value)

        }

       else if(e.target.name==='id'){
            setid(e.target.value)

        }

        else if(e.target.name==='about'){
            setabout(e.target.value)

        }
    }

    let [params]=useSearchParams()    // console.log(params.id)

    useEffect(()=>{
        console.log(params.get('id'))
        if(params.get('id')!==null){
            console.log('hello')
            let x=state.arr.find((e)=>{
                return e.id===params.get('id')

            })
            setname(x.name)
            setabout(x.about)
            setid(x.id)
            setpath(x.path)


        }
    },[])


    let submit=(e)=>{
        e.preventDefault()

       let tem={name,id,about,path}
       

        if(params.get('id')!==null){
            let x=state.arr.map((e)=>{
                return e.id===params.get('id')?tem:e

            })

            dispatch({type:"updatearr",payload:x})
        }

        else{
            dispatch({type:"updatearr",payload:[...state.arr,tem]})
        }

        setname('')
        setabout('')
        setid('')
        setpath('')


    }

       return <div>
        <form onSubmit={submit}>
            <div>
                <label>name</label>
                <input type="text" name="name" value={name} onChange={handle}></input>
            </div>

            <div>
                <label>Id:</label>
                <input type="text" name="id" value={id} onChange={handle}></input>
            </div>

            <div>
                <label>About</label>
                <input type="text" name="about" value={about} onChange={handle}></input>
            </div>

            <div>
                <label>Path</label>
                <input type="text" name="path" value={path} onChange={handle}></input>
            </div>
            <button>Submit</button>
        </form>
        <div onClick={goto}>goto</div>
        </div>

}
          

