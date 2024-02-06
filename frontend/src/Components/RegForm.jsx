import { useState, useEffect } from "react";

export default function RegForm() {





  return (
    <div className="todoList">
      <h1>My Todo List</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Comment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((task, index) => (
              <tr key={index}>
                {task._id !== edit ? (
                  <>
                    <td>{task.title}</td>
                    <td>{task.comment}</td>
                    <td>
                      <button
                        id={task._id}
                        onClick={() => handleDelete(task._id)}
                      >
                        Remove
                      </button>
                      <button
                        id={task._id}
                        onClick={() =>
                          handleEdit(task._id, task.title, task.comment)
                        }
                      >
                        Edit
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <input
                        id="inputTitle"
                        type="text"
                        defaultValue={editTitle}
                        onChange={handleTitleChange}
                      ></input>
                    </td>
                    <td>
                      <input
                        id="inputComment"
                        type="text"
                        defaultValue={editComment}
                        onChange={handleCommentChange}
                      ></input>
                    </td>
                    <td>
                      <button
                        id={task._id}
                        onClick={() => handleSave(task._id)}
                      >
                        Save
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => setShowTodos(false)}>Hide Todos</button>
    </div>
  );
}