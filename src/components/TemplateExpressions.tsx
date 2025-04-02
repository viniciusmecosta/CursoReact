const TemplateExpressions = () => {
  const name: string = "Vinicius";
  const data: string[] = ["29102001", "22122014"];
  return (
    <div>
      <h1>Olá {name}</h1>
      <h2>{data[0]}</h2>
      <h2>{data[1]}</h2>
    </div>
  );
};

export default TemplateExpressions;
