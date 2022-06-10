import axios from "axios";

export const postAddtoDictionary = async (tmp1, tmp2) => {
    const access_key = '9c46ad05-ca7a-4326-8a93-64501b67e95b';
    const analysisCode = "wsd_poly";
    let item = {
        word: "바보",
        definition: "어쩌구저쩌구"
    };

    if (tmp1 != null) {
        item.word = tmp1;
        item.definition = tmp2;
    }

    console.log(item);


    const { data } = await axios
        .get("http://localhost:8080/addToNote", {
            params: {
                q: item.word,
                p: item.definition
            },
        }).then((response) => {
            return response;
        }).catch((error) => console.log(error))

    return data;
}