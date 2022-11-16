import { render, h } from 'preact';


function test(){
    console.log("this should be in dist")
}


test();

export default function Button({text}:{text:string}){
    return <button>{text}</button>
}