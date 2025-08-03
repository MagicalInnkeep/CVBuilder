
function Button({
    image,
    text,
    classNa,
    isActive,
    isExpanded,
    type,
    handleClick    
}) {
    return (
        <button 
            className={`${classNa} ${isActive ? 'activeBtn' : 'notActiveBtn'}`} 
            onClick={handleClick}
            type={type}
        >
            <img className='svg-icon' src={image} alt={text} />
            <span className={`button-label ${isExpanded ? 'show' : 'hide'}`}>
             {text}
            </span>
        </button>
    );
}

export default Button;
