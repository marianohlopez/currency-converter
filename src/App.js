import Input from './components/Input.js';
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

function App() {

  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(2)
  const [currency1, setCurrency1] = useState("ARS")
  const [currency2, setCurrency2] = useState("ARS")

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(process.env.REACT_APP_FIXER_URL);
    setData(response.data.rates);
  }

  useEffect(() => {
    getData();
  }, [])

  const handleAmountChange1 = (amount1) => {
    setAmount2((amount1 * data[currency2] / data[currency1]).toFixed(4))
    setAmount1(amount1)
  }

  const handleAmountChange2 = (amount2) => {
    setAmount1((amount2 * data[currency1] / data[currency2]).toFixed(4))
    setAmount2(amount2)
  }

  const handleCurrencyChange1 = (currency1) => {
    setAmount2((amount1 * data[currency2] / data[currency1]).toFixed(4))
    setCurrency1(currency1)
  }

  const handleCurrencyChange2 = (currency2) => {
    setAmount1((amount2 * data[currency1] / data[currency2]).toFixed(4))
    setCurrency2(currency2)
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
