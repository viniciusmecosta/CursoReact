interface handleMessage {
  handleMessage: (msg: string) => void;
}
const ChangeMessageState = ({ handleMessage }: handleMessage) => {
  const messages: string[] = ["oi", "Olá", "Tchau"];
  return (
    <div>
      <button onClick={() => handleMessage(messages[0])}>Oi</button>
      <button onClick={() => handleMessage(messages[1])}>Olá</button>
      <button onClick={() => handleMessage(messages[2])}>Tchau</button>
    </div>
  );
};

export default ChangeMessageState;
