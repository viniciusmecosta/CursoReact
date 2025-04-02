const Events = () =>{
    const handleMyEvent = () =>{
        console.log("Ativou o evento!")

    }
    const renderSomething =(x:boolean) =>{
        if(x){
            return <h1>Renderizando isso</h1>
        }else{
            return <h1>Tambem Renderizo isso</h1>
        }
    }
 return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Click Aqui!</button>

        </div>
        <div>
            <button onClick={()=> console.log("Clicou no segundo botao")}>Click aq 2</button>
        </div>
        {renderSomething(true)}
    </div>
 )   
};
export default Events