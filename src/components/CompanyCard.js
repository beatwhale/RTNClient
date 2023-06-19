import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import CardObject from "../components/ObjectCard";
import companyAPI from "../http/companyAPI";

const CompanyCard = ({ company }) => {
  const [objectCards, setObjectCards] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleSearchObjects = async () => {
    try {
      const { company_id, identifiers } = company;
      const response = await companyAPI.getObjCards(company_id, identifiers);
      setObjectCards((prevObjectCards) => ({
        ...prevObjectCards,
        [company_id]: response,
      }));
      setShowResults(true); // Показать результаты после получения
      setIsButtonDisabled(true); // Деактивировать кнопку "Посмотреть объекты организации"
    } catch (error) {
      console.log('Ошибка при поиске объектов:', error);
    }
  };

  const handleHideResults = () => {
    setShowResults(false);
    setIsButtonDisabled(false); // Активировать кнопку "Посмотреть объекты организации"
  };

  const companyObjectCards = objectCards[company.company_id] || [];

  return (
    <Card border="primary" style={{ margin: 10}}>
      <Card.Body>
        <Card.Header>{company.name}</Card.Header>
        <Card.Text style={{margin:20}}>
          <strong>ID:</strong> {company.company_id} <br />
          <strong>ИП или ЮЛ:</strong> {company.type} <br />
          <strong>Объект:</strong> {company.subject} <br />
          <strong>Адрес:</strong> {company.address} <br />
          <strong>ИНН:</strong> {company.index} <br />
          <strong>ОГРН:</strong> {company.ogrn} <br />
          <strong>Дата создания организации:</strong> {company.create_org_date} <br />
        </Card.Text>   
        
        <Button
          variant="primary"
          onClick={handleSearchObjects}
          style={{ margin: 10, width: "20em" }}
          disabled={isButtonDisabled} // Использовать состояние для доступности кнопки
        >
          Посмотреть объекты организации
        </Button>

        {showResults && (
          <Button
            variant="primary"
            style={{ margin: 5, width: "12em", background: "#198754" }}
            onClick={handleHideResults}
          >
            Скрыть результаты
          </Button>
        )}
      </Card.Body>

      {/* Отображение карточек объектов */}
      {showResults && (
        <>
          {companyObjectCards.map((objectData) => (
            <CardObject
              key={objectData.registry_number}
              objectData={objectData}
              companyId={company.company_id}
              identifiers={company.identifiers}
            />
          ))}
        </>
      )}

    </Card>
  );
};

export default CompanyCard;
