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

const Inscription = Loadable({
  loader: () => import('./views/Pages/Etudiants/Add/AddNewEtudiant'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./views/Users/Add/AddNewUser'),
  loading: Loading,
});

const AddUserSimple = Loadable({
  loader: () => import('./views/Users/Add/AddUserSimple'),
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

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', name: 'Home', component: DefaultLayout, exact: true },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users/listes', name: 'Listes Utilisateurs', component: Users },
  { path: '/scolarite/inscription', name: 'Inscription', component: Inscription },
  { path: '/users/user', name: 'Nouveau Utilisateur', component: User },
  { path: '/etudiants', name: 'Listes Etudiants', component: Etudiants },
  { path: '/etudiant/:id', name: 'Etudiant', component: EtudiantEdit },
];

export default routes;
