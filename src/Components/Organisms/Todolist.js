import React, { useState } from 'react';
import './CRUD.css';
import Button from '../Atom/Button';

export default function Crud() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [pending, setPending] = useState(0);

  
  const style1 = {
    height: "25px",
    width: "80px",
    marginLeft: "15px",
    backgroundColor: "blue",
    color: "black",
    cursor: "pointer"
  }

  const style2 = {
    height: "25px",
    width: "80px",
    marginLeft: "50px",
    backgroundColor: "blue",
    color: "white",
    cursor: "pointer",
    border: "1px solid white"
  }

  const style3 = {
    height: "25px",
    width: "30px",
    marginLeft: "15px",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"

  }

  function showData() {
    if (task !== '') {
      setList(prevList => [...prevList, { task: task, completed: false }]);
      setTask('');
      setPending(prevPending => prevPending + 1); // Increment pending count
    } else {
      alert('Please Add a Task');
    }
  }

  function taskCompleted(id) {
    setList(prevList =>
      prevList.map((item, index) => {
        if (index === id && !item.completed) {
          setPending(prevPending => prevPending - 1); // Decrement pending count
          return { ...item, completed: true };
        }
        return item;
      })
    );
  }

  function taskDeleted(id) {
    setList(prevList => {
      const deletedItem = prevList[id];
      if (!deletedItem.completed) {
        setPending(prevPending => prevPending - 1); // Decrement pending count
      }
      return prevList.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <div className="to-do-app">
        <div className="taskBox">
          <p style={{ color: "white" , fontSize :"30px" }} >Pending Task: {pending}</p> {/* Display pending count */}

          <div className="task-bar" >
            <div>
              {list.map((item, index) => (

                <li className={`tasks ${item.completed ? 'completed' : ''}`} key={index} style={{ color: "white", marginLeft: "25px", border: "1px solid white" }} >
                  {item.task}
                  <div className="update-delete">
                    <Button task="Completed" performTask={() => taskCompleted(index)} id={index} styling={style2} />
                    <Button task="X" performTask={() => taskDeleted(index)} id={index} styling={style3} />
                  </div>
                </li>
              ))}
            </div>
          </div>
          <div className="adding-task">
            <input
              placeholder="Enter Your task"
              onChange={e => setTask(e.target.value)}
              className="task-input"
              value={task}
            />
            <Button task="Add" performTask={showData} styling={style1} />
          </div>
        </div>
      </div>
    </div>
  );
}