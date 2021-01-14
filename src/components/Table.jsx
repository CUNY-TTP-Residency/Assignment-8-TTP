import { Component } from "react";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import '../App.css';

export default class Table extends Component{
    constructor(props){
        super(props);
        this.state = ({
            rows: 1,
            color: "",
            colored: false,
            cellCount: 1
        })

        this.addColumn = this.addColumn.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.createTable = this.createTable.bind(this);
        this.color = this.color.bind(this);
        this.colorOptions = this.colorOptions.bind(this);
        this.fillAll = this.fillAll.bind(this);
        this.fillUncolored = this.fillUncolored.bind(this);
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseDown = this.mouseDown.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
    }

    render(){
        return(
            <>
            <div id = "buttons">
            <button onClick={this.addColumn}> Add Column </button>
            <button onClick={this.removeColumn}> Remove Column </button>
            <button onClick={this.addRow}> Add Row </button>
            <button onClick={this.removeRow}> Remove Row </button>
            <button onClick={this.fillAll}> Fill All </button>
            <button onClick={this.fillUncolored}> Fill Uncolored </button>
            <button onClick={this.clearAll}> Clear All </button>
            <select onChange = {this.colorOptions}>
                <option value = "white"> White </option>
                <option value = "red"> Red </option>
                <option value = "green"> Green </option>
                <option value = "blue"> Blue </option>
            </select>
            </div>
            <table className="table"> {this.createTable()} </table>
            </>
        );
    }

    createTable(){
        let table = []
        for(let i = 0; i < this.state.rows; i++){
            let row = []
            for(let j = 0; j < this.state.cellCount; j++)
                row.push(<TableCell 
                    mouseUp = {this.mouseUp}
                    mouseDown = {this.mouseDown}
                    mouseEnter = {this.mouseEnter}
                    onClick = {this.color}
                />)
            table.push(<TableRow cells={row}/>)
        }
        return table;
    }
    //Creates Handlers to adjust the state based on button clicks and selection menu

    //Adds a Column to the table
    addColumn(){
        this.setState({ cellCount: this.state.cellCount+1 })}
    
    //Removes the added Column
    removeColumn(){if(this.state.cellCount > 1){
         this.setState({ cellCount: this.state.cellCount-1 })}}
    
    //Adds a row to the table
    addRow(){ this.setState({ rows: this.state.rows+1 })}
    
    //Removes the row that has been added to the table
    removeRow(){if(this.state.rows > 1){
         this.setState({ rows: this.state.rows-1 })}}
    
    //This handles the color that has been selected from the drop down menu, and assigns the value to the state
    colorOptions(event){ event.preventDefault();
        this.setState({color : event.target.value})}

    //takes the value of color that is in the state, and assigns it to the background color of the cell
    color(event){ event.preventDefault();
        event.target.style.backgroundColor = this.state.color}
    
    //If the mouse is not being pressed while over a cell it will not return the colored boolean property back to false
    mouseUp(event){event.preventDefault();
        this.setState({colored : false})}

    //If the mouse is being pressed while in a cell, it will assign true to the colored boolean property
    mouseDown(event){event.preventDefault();
        this.setState({colored : true})}
    //This works with the mouseDown method to change the color of the cells, combining the motion of the mouse with it being clicked to change the cell's color
    mouseEnter(event){event.preventDefault();
        if(this.state.colored == true){event.target.style.backgroundColor = this.state.color}}
    
    //Fills all the cells with the selected color
    fillAll(event){
        event.preventDefault();
        let cells = document.getElementsByTagName("td");
        for(var i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = this.state.color;
        }
    }

    //Fills all the cells that has not been assigned a color
    fillUncolored(event){
        event.preventDefault();
        let cells = document.getElementsByTagName("td");
        for(var i = 0; i < cells.length; i++){
            if(cells[i].style.backgroundColor == ""){
            cells[i].style.backgroundColor = this.state.color;
            }
        }
    }

    //Clears all color from every cell
    clearAll(event){
        event.preventDefault();
        let cells = document.getElementsByTagName("td");
        for(var i = 0; i < cells.length; i++){
            cells[i].style.backgroundColor = "";
        }
    }
}