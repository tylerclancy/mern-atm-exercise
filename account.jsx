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
  let transactionState = 0;
  const [totalState, setTotalState] = React.useState();
  let status = `Account Balance $ ${totalState}`;
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    transactionState = Number(event.target.value);
  };

  // Only handles one deposit / one submit.
  const handleSubmit = event => {
    totalState += transactionState;
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
      <h2 id="total">{status}</h2>
    </form>
  );
};

// ==========================================
ReactDOM.render(<Account />, document.getElementById('root'));
