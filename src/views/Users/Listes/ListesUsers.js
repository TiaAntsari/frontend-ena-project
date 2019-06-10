import * as React from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";
import AuthenticationService from '../../../services/AuthenticationService';
import { TOKEN_NAME } from '../../../api/Constants/nameConstants';
import UserDataServices from '../../../api/users/UserDataServices';
// component liste des users

class ListesUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listeUsers: [],
            loading: false
        };
    }

    /* componentDidMount() {
        this.setState({ isLoading: true });
        let jwtToken = AuthenticationService.loadToken(TOKEN_NAME)
        console.log("**************" + jwtToken)
        fetch("http://localhost:8080/users", {headers: {'Authorization': jwtToken}})
            .then(Response => Response.json())
            .then(data => this.setState({ listeUsers: data, loading: false }));
    } */

    componentDidMount() {
        this.setState({ isLoading: true });
        let jwtToken = AuthenticationService.loadToken(TOKEN_NAME)
        console.log("**** user**********" + jwtToken)
        UserDataServices.getAllUsers()
        .then(Response => this.setState({ listeUsers: Response.data, isloading: false }));
    }


    render() {
        const { listeUsers, loading } = this.state;

        if (loading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                <strong><i className="icon-info pr-1"></i>Listes des users:</strong>
                            </CardHeader>
                            <CardBody>
                                
                                <Table responsive striped hover>
                                        <thead>
                                            <tr>
                                                <th scope="col">Id</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Role</th>
                                                <th scope="col">Activé</th>
                                                <th scope="col">status</th>
                                            </tr>
                                        </thead>
                                        
                                        <tbody>
                                            {listeUsers.map(user => (
                                        <tr key={user.idUser}>
                                            <td>{user.idUser}</td>
                                            <td>{user.username}</td>
                                            <td>tab role ici</td>
                                            <td>{user.activated}</td>
                                            <td>
                                                <Button color="success" className="px-4">Detail</Button>
                                            </td>
                                            <td>
                                                <Button color="danger" className="px-4">Supprimer</Button>
                                            </td>
                                        </tr>
                                        ))}
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

export default ListesUsers;