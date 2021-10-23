import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreaters } from './state/index';


function App() {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  console.log('state', account);

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreaters, dispatch)

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(10)}>WithDrawnMoney</button>
    </div>
  );
}

export default App;
