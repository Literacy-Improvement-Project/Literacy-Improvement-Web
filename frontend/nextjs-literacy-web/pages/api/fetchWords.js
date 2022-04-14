
import axios from "axios";

export const fetchWords = async () => {
    const access_key = '8C003D093A7908069B600A0692DBFD11';
    const q = '배';
    let text = '나는 여전히 배가 고프다. 그치만 집에도  가고싶다. 어제는 가족여행을 다녀왔다.';

    // if (txt != null) {
    //     text = txt;
    // }
    const requestJson = {
        'key': access_key,
        'q': '배',
        'req_type': 'json',
    };



    const { data } = await axios.get(
        `https://opendict.korean.go.kr/api/search?key=${access_key}&q=${q}&req_type=json`
    ).then((response) => {
        console.log(response)
        return response;
    }).catch((error) => console.log(error))

    return data;
}