import React, { useState } from "react";
import { Table, Button, Spinner, Toast } from "react-bootstrap";
import { runParserCategory } from "../http/parserCO_API";
import { runParserElectricVehicle } from "../http/parserET_API";
import { runParserNotCategory } from "../http/parserNC_API";
import { runParserVehicle } from "../http/parserVO_API";

const DatabaseTable = () => {
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);
  const [isLoadingElectricVehicle, setIsLoadingElectricVehicle] = useState(false);
  const [isLoadingNotCategory, setIsLoadingNotCategory] = useState(false);
  const [isLoadingVehicle, setIsLoadingVehicle] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleRunParserCategory = async () => {
    try {
      setShowToast(true);
      setToastMessage("Анализ и изменение новых данных");
      setIsLoadingCategory(true);
      const result = await runParserCategory();
      console.log("Парсер категорированных объектов успешно запущен", result);
    } catch (error) {
      console.error("Ошибка при запуске парсера", error);
    } finally {
      setIsLoadingCategory(false);
      setShowToast(true);
      setToastMessage("Категорированные объекты ТС - обновлены.");
    }
  };

  const handleRunParserElectricVehicle = async () => {
    try {
      setShowToast(true);
      setToastMessage("Анализ и изменение новых данных");
      setIsLoadingElectricVehicle(true);
      const result = await runParserElectricVehicle();
      console.log("Парсер электрического транспорта успешно запущен", result);
    } catch (error) {
      console.error("Ошибка при запуске парсера", error);
    } finally {
      setIsLoadingElectricVehicle(false);
      setToastMessage("Электрический транспорт - обновлен.");
    }
  };

  const handleRunParserNotCategory = async () => {
    try {
      setShowToast(true);
      setToastMessage("Анализ и изменение новых данных");
      setIsLoadingNotCategory(true);
      const result = await runParserNotCategory();
      console.log("Парсер не категорированных объектов успешно запущен", result);
    } catch (error) {
      console.error("Ошибка при запуске парсера", error);
    } finally {
      setIsLoadingNotCategory(false);
      setToastMessage("Не категориваронные объекты - обновлены.");
    }
  };

  const handleRunParserVehicle = async () => {
    try {
      setShowToast(true);
      setToastMessage("Анализ и изменение новых данных");
      setIsLoadingVehicle(true);
      const result = await runParserVehicle();
      console.log("Парсер наземного транспорта успешно запущен", result);
    } catch (error) {
      console.error("Ошибка при запуске парсера", error);
    } finally {
      setIsLoadingVehicle(false);
      setToastMessage("Наземный транспорт - обновлен.");
    }
  };

  const handleToastClose = () => {
    setShowToast(false);
  };

  return (
    <div>
      <Table striped bordered hover style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Реестр</th>
            <th>Таблица в БД</th>
            <th>Статус</th>
            <th>Обновить данные</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>РосАвтоДор</td>
            <td>Категорированные объекты ТС</td>
            <td>Определена (categorized_objects_transport)</td>
            <td>
              {isLoadingCategory ? (
                <Button disabled>
                  <Spinner animation="border" size="sm" role="status" /> Выполняется...
                </Button>
              ) : (
                <Button onClick={handleRunParserCategory}>Обновить</Button>
              )}
            </td>
          </tr>
          <tr>
            <td>РосАвтоДор</td>
            <td>Не категорированные объекты ТС</td>
            <td>Определена (not_categorized_objects_transport)</td>
            <td>
              {isLoadingNotCategory ? (
                <Button disabled>
                  <Spinner animation="border" size="sm" role="status" /> Выполняется...
                </Button>
              ) : (
                <Button onClick={handleRunParserNotCategory}>Обновить</Button>
              )}
            </td>
          </tr>
          <tr>
            <td>РосАвтоДор</td>
            <td>Электрический транспорт</td>
            <td>Определена (electric_vehicles)</td>
            <td>
              {isLoadingElectricVehicle ? (
                <Button disabled>
                  <Spinner animation="border" size="sm" role="status" /> Выполняется...
                </Button>
              ) : (
                <Button onClick={handleRunParserElectricVehicle}>Обновить</Button>
              )}
            </td>
          </tr>
          <tr>
            <td>РосАвтоДор</td>
            <td>Компании</td>
            <td>Определена (companies)</td>
            <td>
              <Button disabled>Обновить (none)</Button>
            </td>
          </tr>
          <tr>
            <td>РосАвтоДор</td>
            <td>Наземный транпорт</td>
            <td>Определена (vehicles)</td>
            <td>
              {isLoadingVehicle ? (
                <Button disabled>
                  <Spinner animation="border" size="sm" role="status" /> Выполняется...
                </Button>
              ) : (
                <Button onClick={handleRunParserVehicle}>Обновить</Button>
              )}
            </td>
          </tr>
        </tbody>
      </Table>

      <Toast
      show={showToast}
      onClose={handleToastClose}
      delay={4000}
      autohide
      className="bg-dark text-white"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
      <Toast.Header>
        <img
          src={require("../images/notif.png").default}
          className="rounded me-2"
          alt="nf"
        />
        <strong className="mr-auto">Уведомление</strong>
      </Toast.Header>
      <Toast.Body>{`${toastMessage}`}</Toast.Body>
      </Toast>

    </div>
  );
};

export default DatabaseTable;
