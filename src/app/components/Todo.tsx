"use client";
import { useTodoStore } from "../states/store";


function Todo() {

    const inputValue = useTodoStore((state) => state.inputValue);
    const todoState = useTodoStore((state) => state.todoState);
    const newTodoState = useTodoStore((state) => state.newTodoState);
    const addTodo = useTodoStore((state) => state.addTodo);

    const deleteBtn = useTodoStore((state) => state.deleteBtn);

    return (
        <div>
            <input type="text" className='pl-2 ml-5 rounded outline-none'
                name='name'
                value={newTodoState}
                onChange={(e) => inputValue(e.target.value)}
            />
            <button className='ml-5 border-2 p-2 mt-10 rounded w-22 bg-blue-200 outline-none'
                onClick={addTodo}
            >Add</button>

            {todoState.map((item: string, id: number) => (
                <div key={id}>
                    <h1>{item}</h1>
                    <button className="mt-3 mb-3 border-2 p-2 rounded"
                        onClick={() => deleteBtn(id)}
                    >Delete</button>
                </div>
            ))
            }

        </div >
    )
}

export default Todo;