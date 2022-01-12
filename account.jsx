const ATMDeposit = ({ onChange }) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}/>
      <input type="submit" />
    </label>
  );
};

const Account = () => {
  const handleChange = event => {};
  const handleSubmit = event => {};

  return (
    <form>
      <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
      <h2>Account Balance</h2>
    </form>
  );
};

// ==========================================
ReactDOM.render(<Account />, document.getElementById('root'));
