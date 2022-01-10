import React, { Component } from 'react';
import './styles.css';
import CVRenderPersonInfo from './Components/CVrender';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      surname: '',
      personInfo: {
        name: '',
        surname: '',
      },
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.acceptInfo = this.acceptInfo.bind(this);
  }

  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleChangeSurname = (e) => {
    this.setState({
      surname: e.target.value,
    });
  };

  acceptInfo = (e) => {
    e.preventDefault();
    this.setState({
      personInfo: {
        name: this.state.name,
        surname: this.state.surname,
      },
      name: '',
      surname: '',
    });
  };

  render() {
    return (
      <div className='mainWindow'>
        <div id='cvInput'>
          <form onSubmit={this.acceptInfo}>
            {' '}
            <label>
              Name:
              <input
                type='text'
                value={this.state.name}
                onChange={this.handleChangeName}
              />{' '}
            </label>
            <label>
              Surname:
              <input
                type='text'
                value={this.state.surname}
                onChange={this.handleChangeSurname}
              />{' '}
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>

        <div id='cvWindow'>
          <CVRenderPersonInfo
            name={this.state.personInfo.name}
            surname={this.state.personInfo.surname}
          />
        </div>
      </div>
    );
  }
}

export default App;
