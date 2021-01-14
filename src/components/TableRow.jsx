import { Component } from "react";
import '../App.css';

export default class TableRow extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr className="row"> {this.props.cells} </tr>
        );
    }
}