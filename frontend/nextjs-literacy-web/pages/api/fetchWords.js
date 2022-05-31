
import axios from "axios";

export const fetchWords = async (txt) => {
    const access_key = '8C003D093A7908069B600A0692DBFD11';
    let q = '읽씹';

    if (txt != null) {
        q = txt;
    }
    const { data } = await axios.get(
        `https://opendict.korean.go.kr/api/search?key=${access_key}&q=${q}&req_type=json`
    ).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => console.log(error))

    return data;
}