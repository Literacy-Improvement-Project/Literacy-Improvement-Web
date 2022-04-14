import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchDailyword } from "../../../pages/api/fetchDailyword";

export default function AfterSearchWordMeaning({ account }) {




    return (
        <div>
            {/* {
                sentences.map((item) => (
                    <div className="word" key={item.id}>
                        {
                            item.morp.map((word) => (
                                <div key={word.id}>
                                    <h2>{word.lemma}</h2>
                                    <h2>{word.type}</h2>
                                </div>
                            ))}
                    </div>
                ))
            } */}
        </div>
    );
}
