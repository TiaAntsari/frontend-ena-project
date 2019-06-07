import * as React from 'react';
import { Row, Col, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';
// component liste des etudiants

class EnseignantEdit extends React.Component {
 render() {
        return (
            <div>
                <h1>Page Edit Profs</h1>
            </div>
        );
    }
}
export default withRouter(EnseignantEdit);

/*


    emptyItem = {
        nom: '',
        prenom: '',
        dateNaissance: '',
        filiere: ''
      };

constructor(props) {
        super(props);

        this.state = {
            item: this.emptyItem,
            
            expLeft: false,
              expRight: false,
              
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
toggle(name) {
  this.setState({
    [name]: !this.state[name],
    progress: 0.5
  })
}

async componentDidMount() {
    if (this.props.match.params.id !== 'new') {
        const etudiant = await (await fetch(`http://localhost:8080/ena/etudiant/${this.props.match.params.id}`)).json();
        this.setState({item: etudiant});
    }
}

handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = {...this.state.item};
    item[name] = value;
    this.setState({item});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {item} = this.state;

    await fetch('http://localhost:8080/ena/etudiant', {
      method: (item.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
    });
    this.props.history.push('/etudiants');
  }
  
  render() {
    const {item} = this.state;
    const title = <h2>{item.idEtudiant ? 'Edit Etudiant' : 'Ajout Etudiant'}</h2>;

    return <div>
      <Container>
        {title}
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name">Nom</Label>
            <Input type="text" name="nom" id="nom" value={item.nom || ''}
                   onChange={this.handleChange} autoComplete="nom"/>
          </FormGroup>
          <FormGroup>
            <Label for="address">Prenom</Label>
            <Input type="text" name="prenom" id="prenom" value={item.prenom || ''}
                   onChange={this.handleChange} autoComplete="prenom"/>
          </FormGroup>
          <FormGroup>
            <Label for="dateNaissance">dateNaissance</Label>
            <Input type="date" name="dateNaissance" id="dateNaissance" value={item.dateNaissance || ''}
                   onChange={this.handleChange} autoComplete="dateNaissance"/>
          </FormGroup>
         
          <FormGroup>
            < Row className = "text-center" >
            <Col md="1" className="py-4">
                <LaddaButton
                  type="submit"
                  className="btn btn-success btn-ladda"
                  onClick={() => this.toggle('expRight')}
                  data-color="green"
                  data-style={EXPAND_RIGHT}
                >
                  Submit
                </LaddaButton>
              </Col>{' '}
              <Col md="1" className="py-4">
            <LaddaButton color="warning" 
                         tag={Link} to="/etudiants" 
                         className="btn btn-warning btn-ladda"
                         data-color="warning"
            >Cancel</LaddaButton>
            </Col>
            </Row>
          </FormGroup>
        </Form>
      </Container>
    </div>
  }

*/