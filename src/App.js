import React from 'react'
import './App.css';
import {Navbar ,Nav ,Container , Carousel , Card , Button , Form} from 'react-bootstrap'
import mypicture from './2.jpg' 

function App() {
  return (
    <div className="App">
        <Navbar bg="primary" variant="dark">
          <Container>
          <Navbar.Brand href="#home">ARENA GYM</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Container>
        </Navbar> 
        <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="https://d1rioy1v9s51jr.cloudfront.net/pics/16769/900x540/hotel-luxe-31_226.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    className="d-block w-100"
                    src="./1.png"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={mypicture}
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                  
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <div className="intro">
              <h1>ARENA GYM </h1>
              <p>Activité physique exercée dans le sens du jeu et de l'effort, 
                et dont la pratique suppose un entraînement méthodique et le respect de règles. 
                Activité physique visant à améliorer sa condition physique. ... 
                Ensemble des exercices physiques se présentant sous forme de jeux individuels ou collectifs, 
                donnant généralement lieu à compétition, pratiqués en observant certaines règles précises. </p>
              </div> 

              <div className='actv'>
              <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://media.istockphoto.com/photos/happy-athletic-people-jogging-on-treadmills-in-a-health-club-picture-id1089939832?k=20&m=1089939832&s=612x612&w=0&h=IbLjpVfO5HjD4LHJijlpa1Qw9-3Pws_IsdCnBxdDrA0=" />
                  <Card.Body>
                    <Card.Title> Fitness </Card.Title>
                    <Card.Text>
                    Contrairement à la musculation, le fitness est un sport doux dont le but est de renforcer l'ensemble du corps avec un stress physique réduit. 
                    Le cardio tient une place primordiale dans le fitness. Lors des différentes activités, vous renforcez chaque fois un peu plus votre coeur et votre circulation sanguine.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="http://nebula.wsimg.com/cf6673f3fc36447fd1975c3b888b9bfd?AccessKeyId=91834013F2E93F7A3CCB&disposition=0&alloworigin=1" />
                    <Card.Body>
                      <Card.Title> Dance Fitness</Card.Title>
                      <Card.Text>
                      La danse est une forme d'art vivant. C'est un mode d'expression éphémère constitué de séquences de mouvements de corps dans l'espace souvent accompagnés par de la musique.
                        Les mouvements sont à dessein, intentionnellement rythmiques et façonnés culturellement
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="https://medias.toutelanutrition.com/blog/2020/07/banner-entrainement.jpg" />
                      <Card.Body>
                        <Card.Title>Natation</Card.Title>
                        <Card.Text>
                        La natation permet de travailler l'ensemble des muscles efficacement et sans douleur.
                          En effet, le corps humain flotte à 80% dans l'eau, ainsi les mouvements sont plus faciles à exécuter et la résistance créée par l'eau permet de travailler le muscle en profondeur.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                    </div>

                    <Form className='fr'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                          <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>

                      <div className='footer'>
                        <p>  © 2021 ARENA GYM </p>
                      </div>
  
    </div>
  );
}

export default App;
