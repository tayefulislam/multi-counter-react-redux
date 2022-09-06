import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";

function HookCounter() {


    // redux hooks
    const count = useSelector((state) => state.value);
    const dispatch = useDispatch();


    // handeler
    const incrementHandeler = (value) => {
        dispatch(increment(value));
    }
    const decrementHandeler = (value) => {
        dispatch(decrement(value));
    }



    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => incrementHandeler(5)}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={() => decrementHandeler(3)}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}




export default HookCounter