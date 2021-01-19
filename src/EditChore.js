import React from 'react';
import { withRouter } from 'react-router-dom';
import ChoresContext from './context';
import Error from './Error';
import api from './api';
import './EditChore.css';

class EditChore extends React.Component {
    state = { chore: '' }

    static defaultProps = { chores: [] }

    static contextType = ChoresContext;

    onSubmitForm = (e) => {
        e.preventDefault();
        let chores = this.context.chores;
        const id = Number(this.props.match.params.choreID);
        const values = { name: e.target.name.value }
        chores = chores.map(chore => 
          (chore.chore_id === id)
            ? Object.assign(chore, values)
            : chore
        )
        this.context.updateChores(chores);
        this.props.history.push('/chores');
        api.editChore(id, values)
          .catch(error => <Error message={error} />)
    }

    render() {
      // const id = Number(this.props.match.params.choreID);
      // const foundChore = this.props.chores.find(chore => chore.chore_id === id);
        return (
          <form className='chore-details' onSubmit={this.onSubmitForm}> 
              <input
                  id='name'
                  type='text'
                  name='chore' 
                  onChange={e => this.setState({chore: e.target.value})}
                  value={this.state.chore}
              />
              
              <button type='submit'>Save</button>
              
          </form>
        );
    };

    componentDidMount() {
      const id = Number(this.props.match.params.choreID);
      const chore = this.props.chores.find(chore => chore.chore_id === id);
      const name = (chore) ? chore.name : null;
      this.setState({ chore: name })
    }
};

export default withRouter(EditChore);