import React from 'react'
import { useTodoStore } from '../states/store';


function Todo() {



    return (
        <div>
            <input type="text" className='pl-2 ml-5 rounded outline-none' />
            <button className='ml-5 border-2 p-2 mt-10 rounded w-22 bg-blue-200 outline-none'>Add</button>
        </div>
    )
}

export default Todo;