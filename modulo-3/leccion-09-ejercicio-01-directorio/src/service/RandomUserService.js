const URL = "https://randomuser.me/api/?results=50";

const fetchRandomUser = () => fetch(URL).then(response => response.json());

export default fetchRandomUser;