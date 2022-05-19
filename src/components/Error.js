import React from "react";

class Error extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }

    componentDidCatch(){
        this.setState({hasError : true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Ummm, houve um erro!</h1>
        }else{
           return this.props.children
        }
    }

}
export default Error;