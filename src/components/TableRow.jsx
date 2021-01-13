import { Component } from "react";
import './App.css';

class TableRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row"> {this.props.cells} </div>
        );
    }
}