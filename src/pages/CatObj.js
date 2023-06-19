// Файл CatObj.js
import React, { useState } from "react";
import { InputGroup, Form, Button, Modal } from "react-bootstrap";
import companyAPI from "../http/companyAPI";
import CompanyStore from "../store/CompanyStore";
import CompanyCard from "../components/CompanyCard";

const SearchForm = ({ companyStore }) => {
  const [name, setName] = useState("");
  const [government_registration_number, setGovernmentRegistrationNumber] = useState("");
  const [tax_id, setTax_id] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await companyAPI.searchCompanies(name, tax_id, government_registration_number);
      setSearchResults(result);
      setName("");
      setGovernmentRegistrationNumber("");
      setTax_id("");
      console.log(result);

      if (result.length === 0) {
        setShowError(true);
      } else {
        setShowError(false);
        companyStore.setCompanies(result);
      }
    } catch (error) {
      console.log("Ошибка при поиске компаний:", error);
    }
  };

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Название компании</InputGroup.Text>
          <Form.Control
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>ИНН Компании</InputGroup.Text>
          <Form.Control
            type="text"
            id="tax_id"
            value={tax_id}
            onChange={(e) => setTax_id(e.target.value)}
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text>ОГРН</InputGroup.Text>
          <Form.Control
            type="text"
            id="government_registration_number"
            value={government_registration_number}
            onChange={(e) => setGovernmentRegistrationNumber(e.target.value)}
          />
        </InputGroup>
        <Button type="submit">Поиск</Button>{" "}
      </form>

      {/* Отображаем результаты поиска */}
      <div>
        {searchResults.map((company) => (
          <CompanyCard key={company.companies_id} company={company} />
        ))}
      </div>

      {/* Модальное окно ошибки */}
      <Modal show={showError} onHide={() => setShowError(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Компания не найдена.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowError(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const App = () => {
  const companyStore = new CompanyStore();

  return (
    <div>
      <SearchForm companyStore={companyStore} />{" "}
    </div>
  );
};

export default App;
