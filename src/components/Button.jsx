
function Button({
    image,
    text,
    classNa,
    isSelected,
    bigSidebar}
){
    console.log('image src:', image);

    return (
        <button className={isSelected?'activeBtn':'notActiveBtn' && classNa}>
             <img src={image} alt={text} /> {bigSidebar?text:null}
        </button>
    )

}

export default Button;