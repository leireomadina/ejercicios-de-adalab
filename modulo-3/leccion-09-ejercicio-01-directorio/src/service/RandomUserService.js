const ENDPOINT = "https://randomuser.me/api/?results=50";

const fetchRandomUser = () => fetch(ENDPOINT).then((response) => response.json());

export default fetchRandomUser;
