
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
            <img src={image} alt={text} />
            {isExpanded && `${text}`}
        </button>
    );
}

export default Button;
