import axios from "axios";

const API_URL = "http://localhost:5009/api/admin";

async function runParserVehicle() {
  try {
    const response = await axios.post(`${API_URL}/runparserVehicle`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    throw error;
  }
}

export { runParserVehicle };
