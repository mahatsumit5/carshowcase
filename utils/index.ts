export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "248de94f44mshef0e6efb0ba66fbp1abdafjsn2422e43de92f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}
