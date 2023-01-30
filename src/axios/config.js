import axios from "axios";

export const axiosApi = axios.create({
  baseURL: "https://quiz-api-bak5.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// post
export const axiosPost = async (url, data) => {
  let response = {};
  try {
    const result = await axiosApi.post(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
  }
  return response;
};

// get

export const axiosGet = async (url) => {
  let response = {};

  try {
    const result = await axiosApi.get(url);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response.status == 400) {
      response.status = false;
      response.message = e.response.data.message;
    } else if (e.response.status == 500) {
      response.status = false;
      response.message = "Internal server error";
    } else {
      response.status = false;
      response.message = "something went wrong";
    }
  }
  return response;
};

// patch

export const axiosPatch = async (url, data) => {
  let response = {};
  try {
    const result = await axiosApi.patch(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
  }
  return response;
};

// put

export const axiosPut = async (url, data) => {
  let response = {};
  try {
    const result = await axiosApi.put(url, data);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
  }
  return response;
};

export const axiosDelete = async (url, id) => {
  let response = {};
  try {
    const result = await axiosApi.delete(url, id);
    response.status = true;
    response.data = result.data;
  } catch (e) {
    if (e.response) {
      if (e.response.status == 400) {
        response.status = false;
        response.message = e.response.data.message;
      } else if (e.response.status == 500) {
        response.status = false;
        response.message = "Internal server error";
      } else {
        response.status = false;
        response.message = "something went wrong";
      }
    }
  }
  return response;
};
