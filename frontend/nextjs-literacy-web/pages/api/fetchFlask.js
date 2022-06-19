
import axios from "axios";

export const fetchFlask = async () => {

    const { data } = await axios.get(
        `http://localhost:5000/test_api`
    ).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => console.log(error))

    return data;
}