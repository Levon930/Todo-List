import React from "react";
import AddP from "./AddP";
import "./Input.css";
class MyComponent extends React.Component {
  state = {
    value: "",

    todos: [
      {
        //id: 1,
        value: "React",
        check: false,
        edit: false,
      },
    ],
  };
  onChange = (event, i) => {
    const value = event.target.value;

    this.setState({ value });
  };

  creatList = (event) => {
    this.setState((prevState) => {
      if (prevState.value === "") return prevState;
      const lasttodo = prevState.todos[prevState.todos.length - 1];
      const itemToAdd = {
        value: prevState.value,
        check: false,
        edit: false,
        //id: lasttodo.id + 1,
      };
      return {
        value: "",
        todos: [...prevState.todos, itemToAdd],
      };
    });
  };
  editTodo = ({ target: { value } }, i) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        todos: prevState.todos.map((todo, index) => {
          if (i === index) {
            return {
              ...todo,
              value,
            };
          }
          return todo;
        }),
      };
    });
  };
  deleteList = (event, i) => {
    this.setState((prevState) => {
      const lasttodo = prevState.todos[prevState.todos.length - 1];
      return {
        value: prevState.value,
        todos: prevState.todos.filter((item, index) => index !== i),
        //id: lasttodo.id - 1,
      };
    });
  };
  toggle = (i) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        todos: prevState.todos.map((todo, index) => {
          if (i === index) {
            return {
              ...todo,
              editable: !todo.editable,
            };
          }
          return todo;
        }),
      };
    });
  };
  render() {
    return (
      <div>
        <div className="input">
          <input value={this.state.value} onChange={this.onChange} />

          <button onClick={this.creatList}>Add</button>
          <ul>
            {this.state.todos.length &&
              this.state.todos.map((item, i) => {
                return (
                  <li>
                    <input
                      type="checkbox"
                      name="#"
                      id="ch"
                      onChange={(event) => this.editTodo(event, i)}
                    />
                    <span>{item.value}</span>
                    <button onClick={() => this.toggle(i)}>
                      {todo.editable ? "Save" : "Edit todo"}
                    </button>
                    <button onClick={(event) => this.deleteList(event, i)}>
                      x
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyComponent;
