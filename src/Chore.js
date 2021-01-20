import React from "react";
import { withRouter } from "react-router-dom";
import ChoresContext from "./context";
import Error from "./Error";
import api from "./api";
import "./Chore.css";

class Chore extends React.Component {
  state = { completed: this.props.chore.completed };

  static defaultProps = { chore: {} };

  static contextType = ChoresContext;

  deleteChore = (id) => {
    const chores = this.context.chores.filter((chore) => chore.chore_id !== id);
    this.context.updateChores(chores);
    api.deleteChore(id);
  };

  toggleComplete(checked) {
    const id = Number(this.props.chore.chore_id);
    const values = { completed: checked };
    const chores = this.context.chores.map((chore) => {
      if (chore.chore_id === id) Object.assign(chore, values);
      return chore;
    });
    this.context.updateChores(chores);
    api.editChore(id, values).catch((error) => <Error message={error} />);
  }

  render = () => {
    return (
      <div className='chore'>
        <input
          onFocus={(evt) => {
            evt.target.style.color = "red";
          }}
          onChange={(e) => {
            this.setState({ completed: e.target.checked });
            this.toggleComplete(e.target.checked);
          }}
          type='checkbox'
          name='completed'
          checked={this.props.chore.completed}
        />
        <label className={this.props.chore.completed ? "checked" : null}>
          {this.props.chore.name}
        </label>
        <button
          onClick={() =>
            this.props.history.push(`/edit/${this.props.chore.chore_id}`)
          }
          className='item-button'
        >
          Edit
        </button>
        <button
          className='item-button'
          onClick={() => this.deleteChore(this.props.chore.chore_id)}
        >
          Delete
        </button>
      </div>
    );
  };
}

export default withRouter(Chore);
