import Button from "./Button";

const SplitBillForm = () => {
  return (
    <form className="form-split-bill">
      <h2>Split a Bill with X</h2>

      <label>💰 Bill Total</label>
      <input type="number" />

      <label>🧍‍♂️ Your Total</label>
      <input type="number" />

      <label>🧍 X's Total</label>
      <input type="number" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
};

export default SplitBillForm;
