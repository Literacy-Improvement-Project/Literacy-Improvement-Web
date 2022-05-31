import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterActions from '../store/modules/counterSlice';
import Nav from '../components/organism/Nav/Nav';
import Header from '../components/organism/Header/Header';
import { fetchWords } from './api/fetchWords';
import { dehydrate, QueryClient, useQuery } from "react-query";

export default function Test() {
    const { isLoading, error, data } = useQuery('Morp', () =>
        fetchWords(),
        {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        });
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
export async function getServerSideProps(context) {

    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(
        'Morp',
        async () => await fetchWords());

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}