import { useState,useEffect } from "react";

const CurrencyConverter=()=>{

const[currencies,setCurrencies]=useState([]);
const[fromCurrency,setFromCurrency]=useState('USD');
const[toCurrency,setToCurrency]=useState('EUR');
const[amount,setAmount]=useState(1);
const [rates,setRates]=useState({});
const[result,setResult]=useState(null);



useEffect(()=>{
fetch('https://open.er-api.com/v6/latest/USD')
.then((res)=>res.json())
.then((data)=>{
    if(data && data.rates){
        setCurrencies(Object.keys(data.rates));
        setRates(data.rates);

    }
    else{
        console.error("invalid API resonse", data);

    }
})
.catch((error)=>console.error("error fetching currency data",error))



},[])

 const convert = (e) => {
    e.preventDefault();

    if (!rates[fromCurrency] || !rates[toCurrency]) {
      alert('Conversion rates not loaded.');
      return;
    }

    const usdAmount = amount / rates[fromCurrency];
    const converted = usdAmount * rates[toCurrency];
    setResult(converted.toFixed(4));
  };

  return (
    <div className="converter-container">
     <h2 className="title">
  <i className="fas fa-coins currency-icon"></i> Currency Converter
</h2>
      <form onSubmit={convert} className="converter-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
          className="input"
        />

        <div className="selectors">
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="select"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>

          <span className="arrow">→</span>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="select"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="convert-btn">
          Convert
        </button>
      </form>

      {result && (
        <div className="result">
          {amount} {fromCurrency} = <strong>{result} {toCurrency}</strong>
        </div>
      )}
    </div>
  );
}

export default CurrencyConverter;