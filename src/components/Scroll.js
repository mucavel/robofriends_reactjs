import React from "react";

const Scroll = (props) =>{
    return(
        <div style={{overflowY:'scroll', border: '1px solid #000', height: '70vh' }}>
            {props.children}
        </div>
    );
}
export default Scroll;