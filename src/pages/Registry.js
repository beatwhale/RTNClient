import React from "react";
import { Container, Form, Col, Card } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import "../styles/effects.css";
import { useNavigate } from "react-router-dom";
import { CATEGORIZED_ROUTE } from "../utils/consts";

const Registry = observer(() => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(CATEGORIZED_ROUTE);
  };

  return (
    
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Form style={{ margin: 30 }}>
        <Col>
          <Card
            onClick={handleCardClick}
            className="my-3 rounded"
            style={{ width: "400px", height: "250px", marginBottom: 30 }}
          >
            <Card.Body className="card-body-hover">
              {" "}
              Реестр "РосАвтоДор"{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </Col>{" "}
        <Col>
          <Card
            className="my-3 rounded"
            style={{ width: "400px", height: "250px" }}
          >
            <Card.Body className="card-body-hover" style={{}}>
              {" "}
              Реестр "РосЖилДоР 2"{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </Col>{" "}
      </Form>{" "}
      <Form>
        <Col>
          <Card
            className="my-3 rounded"
            style={{ width: "400px", height: "250px", marginBottom: 30 }}
          >
            <Card.Body className="card-body-hover">
              {" "}
              Реестр "Авиация"{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </Col>{" "}
        <Col>
          <Card
            className="my-3 rounded"
            style={{ width: "400px", height: "250px" }}
          >
            <Card.Body className="card-body-hover">
              {" "}
              Реестр "Морские пути"{" "}
            </Card.Body>{" "}
          </Card>{" "}
        </Col>{" "}
      </Form>{" "}
    </Container>
  );
});

export default Registry;
