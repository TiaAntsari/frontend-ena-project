import React, { Component } from 'react';
import { DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';

import logo from '../../assets/img/brand/logoEna.png'
import sygnet from '../../assets/img/brand/enalg.png'
import avatar from '../../assets/img/avatars/myRabbit.jpg'
import AuthenticationService from '../../services/AuthenticationService';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
         full={{ src: logo, width: 170, height: 50, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/">Accueil</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/utilisateurs">Utilisateurs</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#/parametre">Parametre</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <strong>
            <Clock format={'HH:mm:ss'} ticking={true}  />  {/* timezone={'US/Pacific'} */}
          </strong>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown>
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto', height: '400px' }}>
              <DropdownItem href="#/profil"><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem href="#/profil/password"><i className="fa fa-lock"></i> Changer Mot de Passe</DropdownItem>
              <DropdownItem href="#/login" onClick={AuthenticationService.logout}  ><i className="fa fa-sign-out fa-lg mt-2"></i> Deconnexion</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
