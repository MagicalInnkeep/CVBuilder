
function Button({
    image,
    text,
    classNa,
    isActive,
    isExpanded,
    handleClick    
}) {
    return (
        <button 
            className={`${classNa} ${isActive ? 'activeBtn' : 'notActiveBtn'}`} 
            onClick={handleClick}
        >
            <img className='svg-icon' src={image} alt={text} />
            <span className={`button-label ${isExpanded ? 'show' : 'hide'}`}>
             {text}
            </span>
        </button>
    );
}

export default Button;
