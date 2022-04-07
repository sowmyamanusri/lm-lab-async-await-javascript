import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {
  let message = "Catch the error";
  try {
    const response = await fetch(apiEndPoint);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);