
import React, { Fragment, useState } from 'react';

import { Button, Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    let history = useNavigate();

    
    

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);

    }

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }).indexOf(id);

        Employees.splice(index, 1);

        history('/');

    }
    const [searchTerm, setSearchTerm] = useState("");
   
    
    const filteredData = Employees.filter((item) =>
    item.Name.toLowerCase().includes(searchTerm.toLowerCase));
    
    
        
    
    const handleSearch = (e) => { 
        setSearchTerm(e.target.value);
    };
    

        return (


            <Fragment>
            

                <div style={{ margin: "7rem" }}>
                
                    <input type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={handleSearch}
                        >
                    </input>
              </div>
 <div style={{ margin: "5rem" }}>

                    <Table striped bordered hover size="sm">

                        <thead>

                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Age
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>

                        </thead>

                        <tbody>     
                            {
                                Employees && Employees.length > 0
                                    ?
                                    Employees.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    {item.Name}
                                                </td>
                                                <td>
                                                    {item.Age}
                                                </td>
                                                <td>
                                                    <Link to={'/edit'}>
                                                        <Button onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                                    </Link>
                                                    &nbsp; &nbsp;
                                                    <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                                </td>
                                            </tr>
                                            
                           

                                        )
                                    }) 
                                    :
                                    "No data available"
                                    }
                            


                        </tbody>
                    </Table>
                    <br></br>
                    <Link className='d-grid gap-2' to="/create">
                        <Button size="lg">Create</Button>

                    </Link>




                </div>


            </Fragment>
        )

    }

export default Home;