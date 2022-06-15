import axios from 'axios';

export const addToDictionary = async (word, mean) => {
    const { data } = await axios.get("http://localhost:8080/addToNote", {
        params: {
            q: word,
            p: mean
        },
    })
    console.log(data);
}

export const deleteNote = async (word) => {
    const { data } = await axios.get("http://localhost:8080/deleteNote", {
        params: {
            q: word,
        },
    })
    console.log(data);
}

export const test = async () => {

    const API_KEY = "7b82392ee18c86e443bf9e74f0cc7c77";

    const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
    console.log(data);
}
