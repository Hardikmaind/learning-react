/* eslint-disable no-unused-vars */

// this {useState} is a Hook. this useState hook helps us in making the hook
import React,{useState} from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {

    const handleUpClick = ()=>{
        // console.log('upper case was clicked '+ text);  it is not necessary to include this. it is just for our understanding and debugging
        // this change the present state of "text" which in default was "enter the text here2" when you click the button it will change from "enter the text here2" to "you have clicked on  handle up click"
        let newText = text.toUpperCase();
        setText(newText)
    }
    // when whe handle on chnage funtion is triggerd  the object event is created.
    const handleOnChange=(event)=>{
        // console.log('on Change'); it is not necessary to include this. it is just for our understanding and debugging
        // this changes the present state of the our "text" to another. and 
        setText(event.target.value)
        console.log(" ")
    }

    // here we are using the destruting the array const[text,setText]
    // here the default value of text  is "enter the text here2" which is the initial state of the text,its next text will be changed through setText.
    // text and setText are the state variables.state variable are the variables,which react will automatically watch
    const[text,setText]=useState('Enter the text here2')
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                                                    {/* onchange event will fire this below funtion.it is necessary to include this event cause if we not include it we will not be able to change the state of the state variavle "state" once it is changed . also it becomes necessary to update the state variable 'text' in  value="text" jaise hi koi type kare */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
                                                    {/* onlick event will fire this below funtions */}
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
        </div>
    )
}