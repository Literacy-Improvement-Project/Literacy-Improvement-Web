
export const categorize = (data) => {
    // let data = [
    //     {
    //         "id": 18,
    //         "word": "가위",

    //         "userId": "ca@naver.com",

    //         "category": "가위바위보"
    //     },
    //     {
    //         "id": 19,
    //         "word": "바위",

    //         "userId": "cd@naver.com",

    //         "category": "가위바위보"
    //     },
    //     {
    //         "id": 20,
    //         "word": "보",
    //         "userId": "cd@naver.com",

    //         "category": "가위바위보"
    //     },
    //     {
    //         "id": 21,
    //         "word": "가위",

    //         "userId": "cd@naver.com",

    //         "category": "도구"
    //     },
    //     {
    //         "id": 22,
    //         "word": "칼",
    //         "userId": "ab@naver.com",
    //         "category": "도구"
    //     },
    //     {
    //         "id": 23,
    //         "word": "가위",
    //         "userId": "ab@naver.com",
    //         "category": "가위바위보"
    //     },
    //     {
    //         "id": 24,
    //         "word": "바위",
    //         "userId": "ghkdtjsgud98@naver.com",
    //         "category": "자연"
    //     },
    //     {
    //         "id": 25,
    //         "word": "바위",
    //         "userId": "ab@naver.com",
    //         "category": "가위바위보"
    //     },]
    let last = [];
    let realLast = [];
    let tmpUserId = "";
    let count = 0;
    let tmpCategory = "";
    let tmpUserId2 = "";

    // userId , category 순서로 정렬
    let result = data.sort((a, b) => a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1);
    result = data.sort((a, b) => a.userId.toLowerCase() < b.userId.toLowerCase() ? -1 : 1);



    // userId 별로 먼저 묶기
    for (let i = 0; i < result.length; i++) {

        if (i == 0) {
            tmpUserId = result[i].userId
            last.push([{ ...result[i] }])
        }

        else if (result[i].userId === tmpUserId) {
            last[count].push({ ...result[i] });
        }
        else {
            tmpUserId = result[i].userId
            last.push([{ ...result[i] }]);
            count++;
        }
    }

    // category별로 불류
    count = 0;
    last.map((item, index) => {
        for (let i = 0; i < item.length; i++) {
            if (i == 0) {
                tmpCategory = item[i].category;
                realLast.push({ category: tmpCategory, words: [item[i].word] });
                if (index > 0) {
                    count++;
                }
                else {
                    realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                }
                tmpUserId2 = item[i].userId;
            }
            else if (item[i].category === tmpCategory) {
                realLast[count].words.push(item[i].word);
                if (item[i].useId != tmpUserId2)
                    realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                tmpUserId2 = item[i].userId;
            }
            else {
                tmpCategory = item[i].category;
                realLast.push({ category: tmpCategory, words: [item[i].word] });
                realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                count++;
                if (item[i].useId != tmpUserId2)
                    realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                tmpUserId2 = item[i].userId;
            }

        }
    })

    return realLast;
}
export const myCategorize = (data) => {
    let last = [];
    let realLast = [];
    let tmpUserId = "";
    let count = 0;
    let tmpCategory = "";
    let tmpUserId2 = "";

    //userId, category 순서로 정렬
    let result = data.sort((a, b) => a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1);



    // userId 별로 먼저 묶기
    for (let i = 0; i < result.length; i++) {

        if (i == 0) {
            tmpUserId = result[i].userId
            last.push([{ ...result[i] }])
        }

        else if (result[i].userId === tmpUserId) {
            last[count].push({ ...result[i] });
        }
        else {
            tmpUserId = result[i].userId
            last.push([{ ...result[i] }]);
            count++;
        }
    }

    // category별로 불류
    count = 0;
    last.map((item, index) => {
        for (let i = 0; i < item.length; i++) {
            if (i == 0) {
                tmpCategory = item[i].category;
                realLast.push({ category: tmpCategory, words: [item[i].word] });
                if (index > 0) {
                    count++;
                }
                else {
                    realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                }
                tmpUserId2 = item[i].userId;
            }
            else if (item[i].category === tmpCategory) {
                realLast[count].words.push(item[i].word);
                if (item[i].useId != tmpUserId2)
                    realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                tmpUserId2 = item[i].userId;
            }
            else {
                tmpCategory = item[i].category;
                realLast.push({ category: tmpCategory, words: [item[i].word] });
                realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                count++;
                if (item[i].useId != tmpUserId2)
                    realLast[count] = Object.assign(realLast[count], { userId: item[i].userId });
                tmpUserId2 = item[i].userId;
            }

        }
    })

    return realLast;

}