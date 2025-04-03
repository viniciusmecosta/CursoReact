interface myH2Props {
  name?: string;
  age?: number;
  dead?: boolean;
}

function ShowUserName({ name, age }: myH2Props) {
  return (
    <div>
      <h2>
        O nome do Usuário é {name} e tem {age} anos
      </h2>
    </div>
  );
}

export default ShowUserName;
