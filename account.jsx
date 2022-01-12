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
  const [accountState, setAccountState] = React.useState();
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setAccountState(event.target.value);
  };

  // Only handles one deposit / one submit.
  const handleSubmit = event => {
    alert(`Account total = ${accountState}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
      <h2>Account Balance {accountState}</h2>
    </form>
  );
};

// ==========================================
ReactDOM.render(<Account />, document.getElementById('root'));
