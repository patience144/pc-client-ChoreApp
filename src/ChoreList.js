import React from "react";
import Chore from "./Chore";

class ChoreList extends React.Component {
  static defaultProps = { chores: [] };

  render() {
    return (
      <div className="chore-list">
        <h3 className="h3item">Chores</h3>
        <ul>
          {this.props.chores.map((chore) => {
            return <li><Chore key={chore.chore_id} chore={chore} /></li>
          })}
        </ul>
      </div>
    );
  };
};

export default ChoreList;
