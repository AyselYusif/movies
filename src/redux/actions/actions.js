export const getMovies = async (searchLine) => {
    const apiKey = "2a52a2b1";
    const res = await axios.get(baseUrl + `?s=${searchLine}&apikey=${apiKey}`);
    const data = res.data.Search;
    if (!data) {
      throw console.log("Error");
    }
    return data;
  };