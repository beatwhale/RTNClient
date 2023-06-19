import axios from "axios";

const API_URL = "http://localhost:5009/api/company";

const companyAPI = {
  searchCompanies: async (name, tax_id, government_registration_number) => {
    try {
      const response = await axios.post(`${API_URL}/searchCompanies`, {
        name,
        tax_id,
        government_registration_number
      });
      return response.data;
    } catch (error) {
      console.log("Ошибка при поиске компаний:", error);
      throw error;
    }
  },

  getObjCards: async (companyId, identifiers) => {
    try {
      const response = await axios.post(`${API_URL}/getObjCards`, {
        company_id: companyId,
        identifiers,
      });
      return response.data;
    } catch (error) {
      console.log("Ошибка при получении карточек объектов:", error);
      throw error;
    }
  },
};

export default companyAPI;
