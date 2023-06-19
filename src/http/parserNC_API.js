import axios from "axios";

const API_URL = "http://localhost:5009/api/admin";

async function runParserNotCategory() {
  try {
    const response = await axios.post(`${API_URL}/runparserNotCategory`);
    return response.data;
  } catch (error) {
    console.error("Ошибка при выполнении запроса:", error);
    throw error;
  }
}

export { runParserNotCategory };
