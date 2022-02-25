import React, { useState } from 'react';
import InsertForm from './components/InsertForm';
import ListView from './components/ListView';

function App() {
  const [todoList, setTodoList] = useState([]);

  const onComplete = (index) => {
    return () => {
      const newTodoList = [...todoList];
      newTodoList[index]['isCompleted'] = true;
      setTodoList(newTodoList);
    };
  };

  const onRemove = (index) => {
    return () => {
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    };
  };

  const handleInsert = (value) => {
    setTodoList((current) => {
      const newList = [...current];
      newList.push({
        key: new Date().getTime(),
        value,
        isCompleted: false,
      });
      return newList;
    });
  };

  return (
    <div className='App'>
      <ListView
        todoList={todoList}
        onComplete={onComplete}
        onRemove={onRemove}
      />
      <InsertForm onInsert={handleInsert} />
    </div>
  );
}

export default App;



const ListView = ({todoList, onComplete, onRemove}) => {
  return (
    <div>
      <ol>
        {todoList.map((item,index) => {
          return (
            <li key={item.key} className={item.isCompleted ? "complete" : ""}>
              <span>{item.value}</span>
              <button type="button" onClick={onComplete(index)}>완료</button>
              <button type="button" onClick={onRemove(index)}>삭제</button>
            </li>
          );
        })}
      </ol>
    </div>
  )

}

export default ListView;