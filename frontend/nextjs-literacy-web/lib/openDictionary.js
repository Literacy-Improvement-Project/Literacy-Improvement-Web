import axios from 'axios';

export const addToOpen = async (body) => {
    const { data } = await axios.get("http://61.255.221.125:9999/addToOpen", {
        params: {
            morpheme: body.morpheme,
            word: body.word,
            mean: body.mean,
            category: body.category
        }
    })
    console.log(data);
}



// export const deleteNote = async (word) => {
//     const { data } = await axios.get("http://localhost:8080/deleteNote")
//     console.log(data);
// }

