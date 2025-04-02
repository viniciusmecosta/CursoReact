const Challenge = () =>{
    const x: number = 3;
    const y: number = 4;

    const executeSum = (x: number, y: number) =>{
        console.log(x+y);
    }
    const handleExecuteSum = () =>{
        console.log(executeSum(x,y));
    }

    return(
        <div>
            <h1>{x} + {y}</h1>
            <button onClick={handleExecuteSum}>Somar</button>
        </div>
    )

};
export default Challenge;