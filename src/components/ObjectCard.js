import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col, Container, Badge } from "react-bootstrap";

const API_URL = "http://localhost:5009/api/company";
const CardObject = ({ objectData, companyId, identifiers }) => {
  const [objectCards, setObjectCards] = useState([]);

  useEffect(() => {
    const fetchObjectCards = async () => {
      try {
        const response = await axios.post(`${API_URL}/getObjCards`, {
          companyId,
          identifiers,
        });
        setObjectCards(response.data);
      } catch (error) {
        console.log('Ошибка при получении карточек объектов:', error);
      }
    };

    fetchObjectCards();
  }, [companyId, identifiers]);
  return (
    <Card border="primary" style={{ margin: 20 }}>
    <Card.Body>
      <Card.Header><strong> <h4>• Объект "{objectData.name}"</h4> </strong></Card.Header>
      <Card.Text>
        <Container style={{margin:20}}>
          <Row>
            <Col md={4}>
              <strong className="mb-1">Реестровый номер:</strong> <h4> <Badge bg="secondary">{objectData.registry_number}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Дата внесения в реестр:</strong>  <h4> <Badge bg="secondary">{objectData.date_entry}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Вид объекта:</strong> <h4> <Badge bg="secondary">{objectData.kind_object}</Badge></h4>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <strong className="mb-1">Тип объекта:</strong>  <h4> <Badge bg="secondary">{objectData.type_object}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Адрес:</strong> <h4> <Badge bg="secondary">{objectData.address}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Субъект РФ:</strong> <h4> <Badge bg="secondary">{objectData.subject_rf}</Badge></h4>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <strong className="mb-1">Населенный пункт:</strong> <h4> <Badge bg="secondary">{objectData.settlement}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Индекс:</strong> <h4> <Badge bg="secondary">{objectData.index}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Basis Inclusion:</strong> <h4> <Badge bg="secondary">{objectData.basis_inclusion}</Badge></h4>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <strong className="mb-1">Date Categorization:</strong> <h4> <Badge bg="secondary">{objectData.date_categorization}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Категория:</strong>  <h4> <Badge bg="secondary">{objectData.category}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Basis Changes:</strong> <h4> <Badge bg="secondary">{objectData.basis_changes}</Badge></h4>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <strong className="mb-1">Date Changes:</strong><h4> <Badge bg="secondary">{objectData.date_changes}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Дата изменения категории:</strong> <h4> <Badge bg="secondary">{objectData.date_changes_category}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Измененная категория:</strong> <h4> <Badge bg="secondary">{objectData.category_changes}</Badge></h4>
            </Col>
          </Row>
          <Row>
            <Col md={4}>
              <strong className="mb-1">Basis Removal:</strong> <h4> <Badge bg="secondary">{objectData.basis_removal}</Badge></h4>
            </Col>
            <Col md={4}>
              <strong className="mb-1">Date Removal:</strong><h4> <Badge bg="secondary">{objectData.date_removal}</Badge></h4>
            </Col>
          </Row>
        </Container>
      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default CardObject;
