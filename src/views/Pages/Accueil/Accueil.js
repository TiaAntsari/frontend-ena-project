import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui-pro/dist/js/coreui-utilities'
import { userInfo } from 'os';
import { isDate } from 'util';

// import Widget03 from '../../views/Widgets/Widget03'
const Widget03 = lazy(() => import('../../Widgets/Widget03'));
const Loading = () => <div>Loading...</div>

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Debut************************************
//      Agerer via Backend
// ************************************
const user = {
    admin: 'Admin',
    scolarite: 'Scolarité',
    prof: 'Enseignant'
}

const numberAdmin = 2
const numberSco = 4
const numberProf = 25
const anneeScolaire = '2018/2019'

const userLink = `#/users/listes`
  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
      status === 'Pending' ? 'warning' :
      status === 'Banned' ? 'danger' :
      'primary'
  }


  const nombreEtudiant = {
      premierAnnee: random(10, 25),
      deuxiemeAnnee: random(7, 15),
      troisiemeAnnee: random(4, 15),
      quatriemeAnnee: random(6, 10),
      cinquemeAnnee: random(4, 10)
  }
const r2 = random(2, 7);
 const nombreFiliere = {
   premierAnnee: 1,
   deuxiemeAnnee: 1,
   troisiemeAnnee: r2,
   quatriemeAnnee: r2,
   cinquemeAnnee: r2
 }

// Fin************************************
//      Agerer via Backend
// ************************************

//get Month
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const d = new Date()
const moisActuel =d.getDay() + " " + monthNames[d.getMonth()]  

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Niveau de Connexion Admin',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Niveau de Connexion Scolarité',
      backgroundColor: 'rgba(255, 255, 255,.1)',
      borderColor: 'rgba(255,255,255,.3)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Niveau de Connexion Enseignant',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: '1ère année' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: '2ème année' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: '3ème année' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: '4ème année' },
  { data: [35, 23, 15, 22, 37, 23, 17], label: '5ème année' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(54, 95));
  data2.push(random(82, 99));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'Cycle Préparatoire',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'Cycle Ingénieur',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'Valeur Objective',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(100 / 5),
          max: 100,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

export class Accueil extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  render() {
const num = 0
const nameConnected = user.admin;
    return (
      <div className="animated fadeIn">
    {/*   <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <h1 className="animated fadeIn">Bienvenu {nameConnected} !!</h1>
                    </CardHeader>
                </Card>
            </Col>
        </Row> */}
      {/* ###########################################################  */}
      
      {/* ######### A TRAITER ########
    Si "Role": "ADMIN" => 
    DropdownMenu "Activé"
    Sinon  "Désactivé"

    */}
      
      <h2>Les utilisateurs de l'application</h2>
      <hr />
        <Row>      
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Detail</DropdownItem>
                        <DropdownItem>Ajouter</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{numberAdmin}</div>
                <div><strong>{user.admin}</strong></div>
              </CardBody>
              <div className="chart-wrapper mt-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Detail</DropdownItem>
                        <DropdownItem>Ajouter</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{numberSco}</div>
                <div><strong>{user.scolarite}</strong></div>
              </CardBody>
              <div className="chart-wrapper mt-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-success">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Detail</DropdownItem>
                        <DropdownItem>Ajouter</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">{numberProf}</div>
                <div><strong>{user.prof}</strong></div>
              </CardBody>
              <div className="chart-wrapper mt-3" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          
        </Row>
        
      {/* ###########################################################  */}
      <br />
<h2>Les niveaux Existants</h2>
<hr />
        
        <Row>
            <Col xs="5" sm="3" lg="3">
            <Suspense fallback={Loading()}>
            <div className="brand-card">
              <div className="brand-card-header bg-linkedin">
                <i className="fa fa-sun-o  fa-spin fa-lg mt-2" /><i><strong>1ème Année</strong></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(0)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">{nombreFiliere.premierAnnee}</div>
                  <div className="text-uppercase text-muted small">Filière</div>
                </div>
                <div>
                  <div className="text-value">{nombreEtudiant.premierAnnee}</div>
                  <div className="text-uppercase text-muted small">Etudiants</div>
                </div>
              </div>
            </div>
            </Suspense>
          </Col>
          
          <Col xs="5" sm="3" lg="3">
          <Suspense fallback={Loading()}>
            <div className="brand-card">
              <div className="brand-card-header bg-xing">
                <i className="fa fa-sun-o  fa-spin fa-lg mt-2" /><i><strong>2ème Année</strong></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(1)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">{nombreFiliere.deuxiemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Filière</div>
                </div>
                <div>
                  <div className="text-value">{nombreEtudiant.deuxiemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Etudiants</div>
                </div>
              </div>
            </div>
            </Suspense>
          </Col>

        <Col xs="5" sm="3" lg="3">
        <Suspense fallback={Loading()}>
            <div className="brand-card">
              <div className="brand-card-header bg-twitter">
                <i className="fa fa-star-o  fa-spin fa-lg mt-2" /><i><strong>3ème Année</strong></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(2)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">{nombreFiliere.troisiemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Filière</div>
                </div>
                <div>
                  <div className="text-value">{nombreEtudiant.troisiemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Etudiants</div>
                </div>
              </div>
            </div>
            </Suspense>
          </Col>

          <Col xs="5" sm="3" lg="3">
          <Suspense fallback={Loading()}>
            <div className="brand-card">
              <div className="brand-card-header bg-openid">
                <i className="fa fa-star-o  fa-spin fa-lg mt-2" /><i><strong>4ème Année</strong></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(3)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">{nombreFiliere.quatriemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Filière</div>
                </div>
                <div>
                  <div className="text-value">{nombreEtudiant.quatriemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Etudiants</div>
                </div>
              </div>
            </div>
            </Suspense>
          </Col>

          <Col xs="5" sm="3" lg="3">
            <div className="brand-card">
              <div className="brand-card-header bg-google-plus">
                <i className="fa fa-star-o  fa-spin fa-lg mt-2" /><i><strong>5ème Année</strong></i>
                <div className="chart-wrapper">
                  <Line data={makeSocialBoxData(4)} options={socialChartOpts} height={90} />
                </div>
              </div>
              <div className="brand-card-body">
                <div>
                  <div className="text-value">{nombreFiliere.cinquemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Filière</div>
                </div>
                <div>
                  <div className="text-value">{nombreEtudiant.cinquemeAnnee}</div>
                  <div className="text-uppercase text-muted small">Etudiants</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
 {/* ###########################################################  */}

 {/* ######### A TRAITER ########
    Si "Role": "ADMIN" => 
        icon-download "Activé"
    Sinon  "Désactivé"

    */}
 <br />
      <h2>Niveau Globale Etudiants</h2>
      <hr />
        <Row>
          <Col>
            <Card>
              <CardBody>
                <Row>
                  <Col sm="5">
                    <CardTitle className="mb-0">Annee Scolaire <b>{anneeScolaire}</b></CardTitle>
                    <div className="small text-muted">{moisActuel}</div>
                  </Col>
                  <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-3" aria-label="First group">
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                        <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                      </ButtonGroup>
                    </ButtonToolbar>
                  </Col>
                </Row>
                <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                  <Line data={mainChart} options={mainChartOpts} height={300} />
                </div>
              </CardBody>
              <CardFooter>
                <Row className="text-center">
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Niveau 1</div>
                    <strong>Cycle Ingénieur (92%)</strong>
                    <Progress className="progress-xs mt-2" color="success" value="92" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
                    <div className="text-muted">Niveau 2</div>
                    <strong>Cycle Préparatoire (67%)</strong>
                    <Progress className="progress-xs mt-2" color="info" value="67" />
                  </Col>
                  <Col sm={12} md className="mb-sm-2 mb-0">
                    <div className="text-muted">Objectif Minimal</div>
                    <strong>Valeur Objective (60%)</strong>
                    <Progress className="progress-xs mt-2" color="danger" value="60" />
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        </Row>
 {/* ###########################################################  */}
      

 {/* ###########################################################  */}
<br />
<h2>Connexion Utililisateur</h2>
      <hr />
        <Row>
          <Col>
            <Card>
              <CardHeader>
                Utilisateur Connecté
              </CardHeader>
              <CardBody className="p-8">
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    <th className="text-center"><i className="icon-people"></i></th>
                    <th>Utilisateur</th>
                    <th className="text-center">Role</th>
                    <th>Status</th>
                    <th>Activité</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Tambiniaina Ravo Odilon</div>
                      <div className="small text-muted">
                        <span>Ancien</span> | Enregister: Oct 7, 2019
                      </div>
                    </td>
                    <td className="text-center">
                      {user.admin}
                    </td>
                    <td>
                      <Badge href={userLink} color="success">Actif</Badge>
                    </td>
                    <td>
                      <div className="small text-muted">Connecté</div>
                      <strong>Il y a 10 sec</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/giphy.gif'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Zackaria Aghaghra</div>
                      <div className="small text-muted">

                        <span>Nouveau</span> | Registered: Jun 1, 2019
                      </div>
                    </td>
                    <td className="text-center">
                      {user.prof}
                    </td>
                    <td>
                      <Badge href={userLink} color="success">Actif</Badge>
                    </td>
                    <td>
                      <div className="small text-muted">Connecté</div>
                      <strong>Il y a 20 sec</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/poisson.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Marc Christian</div>
                      <div className="small text-muted">
                        <span>Nouveau</span> | Enregister: Jun 6, 2019
                      </div>
                    </td>
                    <td className="text-center">
                      {user.scolarite}
                    </td>
                    <td>
                      <Badge href={userLink} color="warning">Inactif</Badge>
                    </td>
                    <td>
                      <div className="small text-muted">Connecté</div>
                      <strong>Il y a 2 heures</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/little-drop-branding.gif'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>Amine Mohamed</div>
                      <div className="small text-muted">
                        <span>Ancien</span> | Enregister: Dec 7, 2018
                      </div>
                    </td>
                    <td className="text-center">
                      {user.prof}
                    </td>
                    <td>
                      <Badge href={userLink} color="danger">Bloqué</Badge>
                    </td>
                    <td>
                      <div className="small text-muted">Connecté</div>
                      <strong>Il y a 1 mois</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'assets/img/avatars/large.png'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                        <span className="avatar-status badge-warning"></span>
                      </div>
                    </td>
                    <td>
                      <div>Nadia Guerouaz</div>
                      <div className="small text-muted">
                        <span>Ancien</span> | Enregistré: Jan 1, 2019
                      </div>
                    </td>
                    <td className="text-center">
                      {user.prof}e
                    </td>
                    <td>
                      <Badge href={userLink} color="warning">Inactif</Badge>
                    </td>
                    <td>
                      <div className="small text-muted">Connecté</div>
                      <strong>Il y a 2 mois</strong>
                    </td>
                  </tr>
                  
                  </tbody>
                </Table>
                {/* ################################### */}
              <br />
                <Row>
                  <Col xs="12" md="6" xl="12">
                    <Row>
                      <Col sm="3">
                        <div className="callout callout-danger">
                          <small className="text-muted">{user.admin}</small>
                          <br />
                          <strong className="h4">17.76 h</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(0, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="callout callout-warning">
                          <small className="text-muted">{user.scolarite}</small>
                          <br />
                          <strong className="h4">24.32 h</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(1, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                      <Col sm="3">
                        <div className="callout callout-success">
                          <small className="text-muted">{user.prof}</small>
                          <br />
                          <strong className="h4">36 h</strong>
                          <div className="chart-wrapper">
                            <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <hr className="mt-0" />
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                          Lundi
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="84" />
                        <Progress className="progress-xs" color="warning" value="71" />
                        <Progress className="progress-xs" color="success" value="61" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Mardi
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="34" />
                        <Progress className="progress-xs" color="warning" value="51" />
                        <Progress className="progress-xs" color="success" value="70" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Mercredi
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="27" />
                        <Progress className="progress-xs" color="warning" value="70" />
                        <Progress className="progress-xs" color="success" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Jeudi
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="20" />
                        <Progress className="progress-xs" color="warning" value="51" />
                        <Progress className="progress-xs" color="success" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Vendredi
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="34" />
                        <Progress className="progress-xs" color="warning" value="44" />
                        <Progress className="progress-xs" color="success" value="78" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Samedi
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="20" />
                        <Progress className="progress-xs" color="warning" value="17" />
                        <Progress className="progress-xs" color="success" value="65" />
                      </div>
                    </div>
                    <div className="progress-group mb-4">
                      <div className="progress-group-prepend">
                        <span className="progress-group-text">
                        Dimanche
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="danger" value="3" />
                        <Progress className="progress-xs" color="warning" value="0" />
                        <Progress className="progress-xs" color="success" value="20" />
                      </div>
                    </div>
                    <div className="legend text-center">
                      <small>
                        <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                        {user.admin}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <sup className="px-1"><Badge pill color="warning">&nbsp;</Badge></sup>
                        {user.scolarite}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <sup className="px-1"><Badge pill color="success">&nbsp;</Badge></sup>
                        {user.prof}
                      </small>
                    </div>
                  </Col> 
                </Row>
                <br />
                
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

