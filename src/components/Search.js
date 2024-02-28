import React, { useState } from 'react';

import Employees from './Employees';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
   
    const filteredData = Employees.filter((item) =>
        item.Name.toLowerCase().includes(searchTerm.toLowerCase));
    
    
    
        
    
    const handleSearch = (e) => { 
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Search;
