const setUpURL = (endPoint, params) => {
  const url = new URL(process.env.REACT_APP_NOT_API_URL.concat(endPoint));
  const searchParams = new URLSearchParams(params);

  url.search = url.search.concat(searchParams.toString());

  return url;
};

export { setUpURL };
