import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
            setTodos(response.data)
        }).catch(error => { console.log(error) })
    }, [])
    console.log(todos);
    return (
        <div className='wrapper'>
            <div className="grid grid-cols-2 px-2 md:px-0 lg:grid-cols-4 gap-5 ">
                {todos.map((data) => (
                    <div div key={data.id} className='todo' >
                        <div>
                            <p>UserId: {data.userId}</p>
                            <h2>{data.title}</h2>
                        </div>
                        <input type="checkbox" checked={data.completed} />
                    </div>

                ))}
            </div>

        </div >
    );
};

export default Todos;