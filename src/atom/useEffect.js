import React,{useRef, Fragment} from "react";

export default function ChangeImage(){

    const myref = useRef(null)

    function handleClick(){
        myref.current.src = 'https://www.shutterstock.com/image-photo/mountain-landscape-panoramic-view-blue-260nw-768293590.jpg';
    }

    return(
        <Fragment>
            <img ref={myref} src='https://i.pinimg.com/736x/1d/c1/8e/1dc18eaa505b51497df43d3269c6de31.jpg' style={{height : "200px", width : "200px"}}/> <br /><br />
            <button onClick={handleClick}>ChangeImage</button>
        </Fragment>
    )
}