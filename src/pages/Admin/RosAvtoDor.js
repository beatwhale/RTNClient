import '../../styles/admin.css';
import { Button } from 'react-bootstrap';
import React, { useState, useEffect} from "react";
import { checkDatabaseConnection } from "../../http/checkBaseConnectionAPI";
import DatabaseTable from "../../components/BaseAvtoDor";

const RosAvtoDor = () => {
  const [databaseStatus, setDatabaseStatus] = useState("");

  useEffect(() => {
    const checkConnectionStatus = async () => {
      try {
        const isConnected = await checkDatabaseConnection();
        setDatabaseStatus(isConnected ? "В сети" : "Нет подключения");
      } catch (error) {
        console.error("Ошибка при проверке подключения к базе данных:", error);
        setDatabaseStatus("Ошибка");
      }
    };
    checkConnectionStatus();

      return () => {
      setDatabaseStatus("");
    };
  }, []);
    return (
      <div className="bodyRAD">
      <div className="card">
      <div className="card-header">
        <h3>Информация об реестрах "РосАвтоДор"</h3>
      </div>
      <div className="card-body">
        <div className="card-field">
          <label>Статус:</label>
          {/* <label>{databaseStatus}</label> */}
          <label>В сети</label>
        </div>
        <div className="card-field">
          <label>Дата обновления:</label>
          <label > 19.06.2023</label>
        </div>
        <div className="card-field">
          <label>Ответственный:</label>
          <label>Токмачева Ольга Николаевна</label>
        </div>
        <div className="card-field">
          <label>Телефон:</label>
          <label>+ 7 (499) 550-34-36 доб. 1041</label>
        </div>
        <div className="card-field">
          <label>Почта:</label>
          <label>o.tokmacheva@roszeldor.ru</label>
        </div>
      </div>
      <div className="card-footer">
        {/* <Button variant="primary" style={{margin:10}}>Обновить структуру БД</Button> */}
      </div>
    </div>
    <DatabaseTable/>
    </div>
  );
};
  export default RosAvtoDor;
  