export const login = async (data) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
