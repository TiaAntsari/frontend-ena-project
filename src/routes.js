import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/Users/Listes/ListesUsers'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/Add/AddNewUser'),
  loading: Loading,
});

// Etudiants
const Inscription = Loadable({
  loader: () => import('./views/Pages/Etudiants/Add/AddNewEtudiant'),
  loading: Loading,
});
const Reinscription = Loadable({
  loader: () => import('./views/Pages/Etudiants/Add/Reinscription'),
  loading: Loading,
});
const Etudiants = Loadable({
  loader: () => import('./views/Pages/Etudiants/Listes/ListesEtudiants'),
  loading: Loading,
});
const EtudiantEdit = Loadable({
  loader: () => import('./views/Pages/Etudiants/Edit/EtudiantEdit'),
  loading: Loading,
});

// Enseignants
const Enseignant = Loadable({
  loader: () => import('./views/Pages/Enseignant/Add/AddNewEnseignant'),
  loading: Loading,
});
const Enseignants = Loadable({
  loader: () => import('./views/Pages/Enseignant/Listes/ListesEnseignants'),
  loading: Loading,
});

const EnseignantEdit = Loadable({
  loader: () => import('./views/Pages/Enseignant/Edit/EnseignantEdit'),
  loading: Loading,
});


// Autres
const AddUserSimple = Loadable({
  loader: () => import('./views/Users/Add/AddUserSimple'),
  loading: Loading,
});
const EtudiantsLists = Loadable({
  loader: () => import('./views/Pages/Etudiants/Listes/EtudiantsLists'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  // Users
  { path: '/utilisateur', name: 'Nouveau Utilisateur', component: User },
  { path: '/rh/utilisateurs', name: 'Listes Utilisateurs', component: Users },

  // Etudiant
  { path: '/etudiant/inscription', name: 'Inscription', component: Inscription },
  { path: '/etudiant/reinscription', name: 'Inscription', component: Reinscription },
  { path: '/etudiants', name: 'Listes Etudiants', component: Etudiants },
  { path: '/etudiant/edit/:id', name: 'Etudiant', component: EtudiantEdit },

  // Enseignant
  { path: '/Enseignant/inscription', name: 'Inscription', component: Enseignant },
  { path: '/rh/enseignants', name: 'Listes Enseignants', component: Enseignants },
  { path: '/Enseignant/edit/:id', name: 'Enseignant', component: EnseignantEdit },

  // Autres
  { path: '/niveau/deuxieme', name: 'Listes Etudiants', component: EtudiantsLists },
   // { path: '/etudiant/:id', name: 'Etudiant', component: EtudiantEdit },


];

export default routes;
