interface fragmentProps{
  name: string;

}

export const Fragment = ({name} : fragmentProps) => {
  return (
    <>
      <h2>Title 01 {name}</h2>
      <h3>Title 02</h3>
    </>
  )
}
