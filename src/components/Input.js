import './input.css';

const Input = ({ currencies, currency, amount, onCurrencyChange, onAmountChange }) => {
    return (
        <>
            <div className="inputs">
                <input type="number" value={amount} onChange={e => onAmountChange(e.target.value)} />
                <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
                    {Object.keys(currencies).map((curr) => {
                        return <option key={curr}>{curr}</option>
                    })}
                </select>
            </div>
        </>
    )
}

export default Input; 