
import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }; // 초기 상태 정의

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
        amountIncrement: (state, action) => {
            console.log(action.payload)
            state.value += Number(action.payload);
        }
    },
});

// 비동기적인 리듀서 함수를 정의하고자 할 땐
// 객체의 프로퍼티로 extraReducers 객체를 추가한다.

// 액션과 리듀서를 export
export const { increment, decrement, amountIncrement } = counterSlice.actions; // 액션 생성함수

export default counterSlice.reducer;