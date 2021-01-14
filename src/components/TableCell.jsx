import { Component } from "react";
import '../App.css';

export default class TableCell extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <td className="cell"/>
        );
    }
}