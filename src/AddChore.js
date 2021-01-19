import React from 'react';
import { withRouter } from 'react-router-dom';
import ChoresContext from './context';
import Error from './Error';
import api from './api';
import './AddChore.css';

class AddChore extends React.Component {
    state = { chore: '' }

    static defaultProps = { chores: [] }

    static contextType = ChoresContext;

    onSubmitForm = (e) => {
        e.preventDefault();
        const chores = this.context.chores
        const chore = { 
            name: e.target.name.value
        };
        api.createChore(chore)
          .then(chore => {
            chores.push(chore);
            this.context.updateChores(chores);
            this.props.history.push('/chores');
          })
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
                  placeholder={'Add Chore'}
                  value={this.state.chore}
              />
              
              <button type='submit'>Add</button>
              
          </form>
        );
    };

    componentDidMount() {
      const id = Number(this.props.match.params.choreID);
      const chore = this.props.chores.find(chore => chore.chore_id === id);
      const name = (chore) ? chore.name : '';
      this.setState({ chore: name })
    }
};

export default withRouter(AddChore);