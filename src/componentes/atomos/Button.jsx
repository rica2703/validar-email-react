function Button(props){
    return(
        <button className={props.className} onClick={props.onClick}>{props.textoBoton}</button>
    );
}
export default Button;