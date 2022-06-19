import axios from 'axios';

export const addToDictionary = async (word, mean) => {
    const { data } = await axios.get("http://61.255.221.125:9999/addToNote", {
        params: {
            q: word,
            p: mean
        },
    })
    console.log(data);
}

export const deleteNote = async (id) => {
    const { data } = await axios.post("http://61.255.221.125:9999/deleteFromNote", id)
    console.log(data);
}
