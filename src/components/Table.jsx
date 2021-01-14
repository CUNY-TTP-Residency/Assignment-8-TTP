import { Component } from "react";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import '../App.css';

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state = ({
            rows: 1,
            cellCount: 1
        })

        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.createTable = this.createTable.bind(this);
    }

    render(){
        return(
            <>
            <button onClick={this.addColumn}> Add Column </button>
            <button onClick={this.removeColumn}> Remove Column </button>
            <button onClick={this.addRow}> Add Row </button>
            <button onClick={this.removeRow}> Remove Row </button>
            <select>
                <option> White </option>
                <option> Red </option>
                <option> Green </option>
                <option> Blue </option>
            </select>
            <table className="table"> {this.createTable()} </table>
            </>
        );
    }

    createTable(){
        let table = []
        for(let i = 0; i < this.state.rows; i++){
            let row = []
            for(let j = 0; j < this.state.cellCount; j++)
                row.push(<TableCell />)
            table.push(<TableRow cells={row}/>)
        }
        return table;
    }

    addColumn(){ this.setState({ cellCount: this.state.cellCount+1 })}
    removeColumn(){ this.setState({ cellCount: this.state.cellCount-1 })}

    addRow(){ this.setState({ rows: this.state.rows+1 })}
    removeRow(){ this.setState({ rows: this.state.rows-1 })}
}