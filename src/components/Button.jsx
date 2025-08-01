
function Button({
    image,
    text,
    classNa,
    isSelected,
    isExpanded,
    handleClick    
}) {
    return (
        <button 
            className={`${classNa} ${isSelected ? 'activeBtn' : 'notActiveBtn'}`} 
            onClick={handleClick}
        >
            <img class='svg-icon' src={image} alt={text} />
            <span className={`button-label ${isExpanded ? 'show' : 'hide'}`}>
             {text}
            </span>
        </button>
    );
}

export default Button;
