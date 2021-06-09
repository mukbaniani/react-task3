import axios from 'axios';

const getFakerCompanies = async (quantity) => {
  try {
    const response = await axios.get(
      `https://fakerapi.it/api/v1/companies?_quantity=5`,
    );
    return response.data.data;
  } catch (error) {
    console.trace(error);
    return [];
  }
};

export default getFakerCompanies;
