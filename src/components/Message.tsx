interface propMessage{
    message:string
}

const message = ({message}: propMessage) => {
  return (
    <div>A mensagem é {message}</div>
  )
}

export default message