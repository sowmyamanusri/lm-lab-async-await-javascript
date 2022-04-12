import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (jsonTypicode) => {
  let message = "Catch the error";
  try {
    const response = await fetch(jsonTypicode);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

fetchData(jsonTypicode);