import Input from './components/Input/Input.js';
import Arrows from './components/Arrows/Arrows.js';
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState("USD")
  const [currency2, setCurrency2] = useState("USD")

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(process.env.REACT_APP_FIXER_URL);
    setData(response.data.rates);
  }

  useEffect(() => {
    getData();
  }, [])

  const handleAmountChange1 = (amount1) => {
    setAmount2((amount1 * data[currency2] / data[currency1]).toFixed(2))
    setAmount1(amount1)
  }

  const handleAmountChange2 = (amount2) => {
    setAmount1((amount2 * data[currency1] / data[currency2]).toFixed(2))
    setAmount2(amount2)
  }

  const handleCurrencyChange1 = (currency1) => {
    setAmount2((amount1 * data[currency2] / data[currency1]).toFixed(2))
    setCurrency1(currency1)
  }

  const handleCurrencyChange2 = (currency2) => {
    setAmount1((amount2 * data[currency1] / data[currency2]).toFixed(2))
    setCurrency2(currency2)
  }

  const handleSetArrows = () => {
    setCurrency1(currency2)
    setCurrency2(currency1)
    setAmount2((amount1 * data[currency1] / data[currency2]).toFixed(2))
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <Input
        currencies={data}
        amount={amount1}
        currency={currency1}
        onAmountChange={handleAmountChange1}
        onCurrencyChange={handleCurrencyChange1} />
      <Arrows handleOnClick={handleSetArrows} />
      <Input
        currencies={data}
        amount={amount2}
        currency={currency2}
        onAmountChange={handleAmountChange2}
        onCurrencyChange={handleCurrencyChange2} />
    </>

  )
}

export default App;
