import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCounter from './components/HookCounter';
// import DynamicCounterReducer from './redux/dynamicCounter/dynamicCounterReducer';
import DynamicHookCounter from './components/DynamicHookCounter';

function App() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          <HookCounter />
          <DynamicHookCounter></DynamicHookCounter>


        </div>
      </div>

    </Provider>
  );
}

export default App;
