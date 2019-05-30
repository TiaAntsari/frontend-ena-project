import React, { Component } from 'react';
import { Accueil } from '../Pages/Accueil/Accueil';
import { Etudiant } from '../Pages/Etudiants/Etudiant';
import { Login } from '../Pages/Login/Login';
class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Accueil />
        <Etudiant />
        <Login />
      </div>
    );
  }
}

export default Dashboard;
