import './App.css';
import React, { Component } from 'react'; 
import { Table } from 'semantic-ui-react'

class Tableexample extends Component{  
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        var 
         targetUrl = 'https://cors-anywhere.herokuapp.com/https://facebook.github.io/react-native/movies.json'
        fetch( targetUrl).then((Response) => Response.json()).
                then((findresponse) =>
                {
                    console.log(findresponse.movies)
                    this.setState({
                        data: findresponse.movies
                    })
                })
    }
    render()
    {
        
            return(
                <Table celled> 
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>name</Table.HeaderCell>
                    <Table.HeaderCell>year</Table.HeaderCell>
                    </Table.Row>
    </Table.Header>
    <Table.Body>
      
                {
                        this.state.data.map((dynamicData) =>
                        <Table.Row><Table.Cell>{dynamicData.title}</Table.Cell>
                    <Table.Cell>{dynamicData.releaseYear}</Table.Cell></Table.Row>
                                       ) }
                                       </Table.Body>
                                       </Table>
        
        
                    )
        }    
    }

    export default Tableexample;