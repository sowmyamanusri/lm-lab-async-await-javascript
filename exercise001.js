const somePromise = () => {
  return new Promise((resolve, reject) => {
    const randomInt = Math.floor(Math.random() * 10);
    if (randomInt % 2 === 0) {
      setTimeout(() => resolve('done'), 2000);
    } else {
      setTimeout(() => reject('error'), 2000)
    }
  })
}



const getPromiseResponse = async () => {
  try {
    const response = await somePromise();
    console.log(`Yay! Promise resolved with response:${response}`);
  } catch (error) {
    console.error(`Boo. Promise rejected with response: ${error}`);
  }
}
getPromiseResponse();