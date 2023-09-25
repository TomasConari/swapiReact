export const Button = ({text}) =>{
    const change = () =>{
        const back = document.querySelector(".App");
        back.style.backgroundColor = "blue";
    };
    return(
        <button onClick={change}>{text}</button>
    );
};

