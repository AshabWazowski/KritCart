import axios from "axios";

export async function getData(endpoint) {
  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilteredProduts(endpoint) {
  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const addWishlistData = async (endpoint, id) => {
  try {
    const response = await axios(endpoint, {
      body: { id: id },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeWishlistData = async (endpoint, id) => {
  try {
    const response = await axios(endpoint, {
      body: { id: id },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
