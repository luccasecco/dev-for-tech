import { useState } from 'react'

export function Todo() {
  const [tasks, setTask] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleInputChange(e) {
    setNewTask(e.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    if (newTask.trim()) {
      setTask([...tasks, newTask])
      setNewTask('')
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="Type a new task here"
          type="text"
          value={newTask}
        />
        <button type="submit">Add new task</button>
      </form>

      <table>
        <thead>
          <tr>
            <th> Task </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
