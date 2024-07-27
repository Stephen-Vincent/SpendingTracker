import ExpenseList from "./components/ExpenseList";

const App = () => {
  const expenses = [
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 20, category: "Entertainment" },
    { id: 4, description: "ddd", amount: 15, category: "Groceries" },
  ];

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(description) => console.log("delete", description)}
      />
    </div>
  );
};

export default App;
