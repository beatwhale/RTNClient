import axios from "axios";

const API_URL = "http://localhost:5009/api/database";

async function checkDatabaseConnection() {
  try {
    const response = await axios.get(`${API_URL}/connection`);
    return response.data.connected;
  } catch (error) {
    console.error("Ошибка при проверке подключения к базе данных:", error);
    throw error;
  }
}

export { checkDatabaseConnection };
