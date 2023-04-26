import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styles from "../Github/Github.module.css"
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

function Github() {
  const [repositorios, setRepositorios] = useState([]);
  const [numCards, setNumCards] = useState(4);
  const [showAllCards, setShowAllCards] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/DeboraSantanaa/repos')
      .then(response => response.json())
      .then(data => setRepositorios(data));
  }, []);

  const handleShowMore = () => {
    setShowAllCards(true);
  }

  const handleShowLess = () => {
    setShowAllCards(false);
    setNumCards(4);
  }

  const filteredRepos = showAllCards ? repositorios : repositorios.slice(0, numCards);

  return (
    <Container fluid id='project' className={styles.github_container}>
      <Row>
        <Col lg="6" md="6" className={styles.content_Github}>
          <div className={styles.content_Github}>

            <h2>Projetos</h2>

            <div className={styles.Github_projetos}>
              {filteredRepos.map(repository => {
                return (
                  <div key={repository.id} className={styles.github_card}>
                    <h3>{repository.name}</h3>
                    <p>{repository.description}</p>
                    <a href={repository.html_url} target='_blank' rel='noreferrer'>Saiba Mais</a>
                  </div>
                )
              })}
            </div>

            {numCards < repositorios.length && !showAllCards && (
              <div className={styles.show_more_button} onClick={handleShowMore}>
                <span> <RiAddCircleLine /> </span>
              </div>
            )}

            {showAllCards && (
              <div className={styles.show_more_button} onClick={handleShowLess}>
                <span><RiIndeterminateCircleLine /></span>

              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Github;
