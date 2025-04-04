interface propsExecution {
  func: () => void;
}

const ExecuteFunction = ({ func }: propsExecution) => {
  return (
    <div>
      <button onClick={func}>Clique</button>
    </div>
  );
};

export default ExecuteFunction;
