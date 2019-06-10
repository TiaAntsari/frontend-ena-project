import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import EtudiantDataServices from '../../../../api/etudiants/EtudiantDataServices';
// component liste des etudiants

class EtudiantsLists extends Component {

    constructor(props) {
      console.log('constructor')
      super(props)
      this.state = {
        etudiants: [],
        message: null
      }
    }

    componentWillUnmount() {
      console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate')
      console.log(nextProps)
      console.log(nextState)
      return true
    }

    componentDidMount() {
      console.log('componentDidMount')
      // let username = AuthenticationService.getLoggedInUserName()
      EtudiantDataServices.getAllEtudiants()
        .then(
          response => {
            console.log("*** Avant stat **** "+response);
            this.setState({
              etudiants: response.data
            });
          }
        )
        .catch((error) => {
          alert(error);
        })
      console.log(this.state)
    } 




    render() {
console.log('render')
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong><i className="icon-info pr-1"></i>Listes des Etudiants:</strong>
                               
                            </CardHeader>
                            <CardBody>
                                
                                <Table responsive striped hover>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Nom</th>
                                                <th>Prenom</th>
                                                <th>Date de Naissance</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { 
                                                this.state.etudiants.map(
                                                  etudiant =>
                                                        <tr key={etudiant.idEtudiant}>
                                                            <td>{etudiant.idEtudiant}</td>
                                                            <td>{etudiant.nom}</td>
                                                            <td>{etudiant.prenom}</td>
                                                            <td>{etudiant.dateNaissance}</td>
                                                            <td>
                                                                <Button block color="primary" className="mb-3 mb-xl-0">Detail</Button>
                                                            </td>
                                                            <td>
                                                                <Button color="danger" className="px-4">Supprimer</Button>
                                                            </td>
                                                        </tr>
                                                )
                                            }
                                    </tbody>
                                    
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default EtudiantsLists
