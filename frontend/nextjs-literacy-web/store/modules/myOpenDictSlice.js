import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: [],
    category: [],
}; // 초기 상태 정의

const myOpenDictSlice = createSlice({
    name: 'myOpenDictinary',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
            state.data.map((item) => { state.category.push(item.category) })
            console.log(state.category)
        },
        addCategory: (state, action) => {
            state.category.push(action.payload)
        }
    },
});

// 비동기적인 리듀서 함수를 정의하고자 할 땐
// 객체의 프로퍼티로 extraReducers 객체를 추가한다.

// 액션과 리듀서를 export
export const { setData, addCategory } = myOpenDictSlice.actions; // 액션 생성함수

export default myOpenDictSlice.reducer;