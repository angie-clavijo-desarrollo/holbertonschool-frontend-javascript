const response = getResponseFromAPI();
console.log(response instanceof Promise);

export default function getResponseFromAPI() {
  return new Promise(() => {});
}
