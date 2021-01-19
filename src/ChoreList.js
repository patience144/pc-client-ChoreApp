import React from 'react';
import Chore from './Chore';
import './ChoreList.css';

class ChoreList extends React.Component {
    static defaultProps = { chores: [] }

    render() {
        return (
            <div className="chore-list">
                <h3 className='h3item'>Chores</h3>
                    <table>
                      <tbody>
                        {
                            this.props.chores.map(chore => {
                                return (
                                    <tr>
                                        <td>
                                            <Chore key={chore.chore_id} chore={chore} />
                                        </td>
                                    </tr>
                                );
                            })
                        }
                      </tbody>
                    </table>
            </div>
        )
    }
}

export default ChoreList;