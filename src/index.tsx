import React, { useState, ChangeEventHandler, ChangeEvent } from 'react';
import ReactDOM from 'react-dom/client';

interface IParamProps {
  id: number;
  name: string;
  value?: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
}
// interface IParam {
//   id: number;
//   name: string;
// }

function Param({id, name, value = '', onValueChange}: IParamProps) {
  return (
    <tr className="param">
      <td>{name}</td>
      <td><input type="text" value={value} onChange={onValueChange}/></td>
    </tr>
  )
}


function App() {
  const [model, setModel] = useState({
    paramValues: [
      {
        paramId: 1,
        value: 'повседневное'
      },
      {
        paramId: 2,
        value: 'макси'
      }
    ]
  });
  const [params, setParams] = useState([
      {
        id: 1,
        name: 'Назначение'
      },
      {
        id: 2,
        name: 'Длина'
      }
  ]);

  const onModelChange = (id: number, event: ChangeEvent<HTMLInputElement>) => {
    const newArray = model.paramValues.map((item) => {
      if (item.paramId === id) {
        return {
          paramId: id,
          value: event.target.value
        }
      }
      return item;
    });
    setModel({paramValues: newArray});
  };

  const onAddInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length === 0) {
      console.log(2222);
      
    } else if (event.target.value.length === 1) {
    setParams([...params, {id: params[params.length - 1].id + 1, name: event.target.value}]);
    } else {
      const newArray = params.map((item) => {
        if (item.id === params[params.length - 1].id) {
          return {
            id: params[params.length - 1].id,
            name: event.target.value
          }
        }
        return item;
      });
      console.log(newArray);
      
      setParams(newArray)
    }
  }

  return (
    <>
      <div className="app">
        <h3>Добавить параметр</h3>
        <input type="text" onChange={onAddInputChange} />
        <h3>Параметры</h3>
        <table>
          <tbody>
            {params.map((item) => {
              const value = model.paramValues.find((modelItem) => modelItem.paramId === item.id)?.value;
              return <Param 
                key={item.id} 
                id={item.id} 
                name={item.name} 
                value={value} 
                onValueChange={(event) => onModelChange(item.id, event)}
              />;
            })}
          </tbody>
        </table>
      </div>
      <style>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }
        .app {
          padding: 10px;
        }
      `}</style>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

