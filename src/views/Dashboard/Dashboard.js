import React, { Component } from 'react';
import { Accueil } from '../Pages/Accueil/Accueil';
import { Login } from '../Pages/Login/Login';
class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Accueil />
      </div>
    );
  }
}

export default Dashboard;
