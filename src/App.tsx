import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Card, { CardVariant } from './components/Card';
import { ITodo, IUser } from './types/types';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import EventsExample from './components/EventsExample';

function App() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);
    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (e) {
            alert(e);
        }
    }
    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            alert(e);
        }
    }
    return (
        <>
            <div>
                <EventsExample />
                <Card
                    onClick={(num) => console.log('click', num)}
                    variant={CardVariant.outlined}
                    width='200px'
                    height='200px'
                >
                    <button>Кнопка</button>
                </Card>
                <List items={users} renderItems={(user: IUser) => <UserItem user={user} key={user.id} />} />
                <List items={todos} renderItems={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
            </div>
        </>
    );
}

export default App;
