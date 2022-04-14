import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterActions from '../store/modules/counterSlice';
import Nav from '../UI/organism/Nav/Nav';
import Header from '../UI/organism/Header/Header';

export default function Test() {
    const dispatch = useDispatch();
    const value = useSelector(({ counter }) => counter.value);
    const [incrementAmount, setIncrementAmount] = useState(2);

    const plus = useCallback(({ value }) => {
        dispatch(counterActions.increment({ value }));
    }, [dispatch]);

    const minus = useCallback(({ value }) => {
        dispatch(counterActions.decrement({ value }));
    }, [dispatch]);

    const plusAmount = useCallback(() => {
        console.log(incrementAmount);
        dispatch(counterActions.amountIncrement((incrementAmount) || 0))
    })

    return (
        <div>
            {/* <h1>Counter</h1>
            <button onClick={() => minus({ value })}>-</button>
            <span>{value}</span>
            <button onClick={() => plus({ value })}>+</button>
            <input
                aria-label="Set increment amount"
                type="number"
                value={incrementAmount}
                onChange={e => setIncrementAmount(e.target.value)}
            />
            <button
                onClick={() => plusAmount()}
            >
                Add Amount
            </button> */}
            <Nav></Nav>
            <Header><a name="home">...</a></Header>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <a name="dailyWords">오늘의 단어</a>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <a name="quiz">퀴즈</a>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
    );
}
