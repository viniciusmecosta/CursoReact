interface childrenComponent {
  children?: React.ReactNode;
}

const Container = ({ children }: childrenComponent) => {
  return (
    <div>
      <h2> Esse é o titulo do componente</h2>
      {children}
    </div>
  );
};

export default Container;
