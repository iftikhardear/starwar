import React, { Component } from "react";


class StarWar extends  Component
{
    constructor(props)
    {
        super(props);
        this.state={
            StarWarCharacters:[],
            OriginalResult:[],
            key:'name'
        }
        this.handleSort = this.handleSort.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:1337/api/People')
        .then(response=> response.json())
        .then((data) => { this.setState({StarWarCharacters: this.getArrayData(data)}) });
    }

    createRow(i){
        return{        
            name: i.name,
            height: i.height,
            species: i.species
        };
    }
    
    //Get the object, create a row and then push into an array
    getArrayData(data){
        var dataArray=[]; 
        data.people.forEach(element => {
            var res = this.createRow(element);
            dataArray.push(res);
        });
        return dataArray;
    }

    // Update the state for clicked header
    handleSort(e){
         this.setState({key:e.target.id});
         sessionStorage.setItem("sortBy", e.target.id);
    }

    //Handel the sort keys
    sort(key){
        if(key ==='name' && this.state.StarWarCharacters != null)
        {
         this.state.StarWarCharacters.sort((a, b) => a.name.localeCompare(b.name));        
        }
        else if(key ==='height' && this.state.StarWarCharacters != null){
         this.state.StarWarCharacters.sort((a, b) => a.height - b.height);        
        }
        else if(key ==='species' && this.state.StarWarCharacters != null){
         this.state.StarWarCharacters.sort((a, b) => a.species.localeCompare(b.species));        
        }
    }

    //Code to render the starwar characters
    renderCharacters(){
        this.sort(this.state.key);
        return this.state.StarWarCharacters != null && this.state.StarWarCharacters.map(sc=>
        {
            return(
                    <tr className="border-bottom">
                        <td>{sc.name}</td>
                        <td>{sc.height}</td>
                        <td>{sc.species}</td>
                    </tr>     
            );          
        })
    }

    //Update the result based on the keyword
    handleSearch(e){
        if(this.state.OriginalResult === null || this.state.OriginalResult.length === 0){
            this.setState({OriginalResult: this.state.StarWarCharacters});
        }

        if(this.state.OriginalResult.length > 0 && e.target.value !==""){
            var tempArray = [];
            this.state.OriginalResult.forEach((element)=> {
                if(element.name.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())){
                    tempArray.push(element);
                }
            });
            this.StarWarCharacters=[];              
            this.setState({StarWarCharacters: tempArray});
         }
         else{             
            this.setState({StarWarCharacters: this.state.OriginalResult});
         }
    }

    render(){
        return(
            <div className="content">  
                <div className="search"><input id="searchbox" type="test" placeholder="search" onChange={this.handleSearch}></input></div>  
                  <table className="table">
                    <thead>
                        <tr>
                            <th id='name' onClick={this.handleSort}>Name</th>
                            <th id='height' onClick={this.handleSort}>Height</th>
                            <th id='species' onClick={this.handleSort}>Species</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderCharacters() }
                    </tbody>
                </table>
            </div>         
        );
    }
}


export default StarWar;