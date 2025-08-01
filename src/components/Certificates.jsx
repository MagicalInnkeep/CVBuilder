import Button from "./Button"
import check from "../assets/check.svg"

function Certificates(
    {
        setActiveComponent
        }
    ){
    return (
        <div>
            <span>Temp</span>
            <Button key='check'
                    image={check}
                    text='Next'
                    classNa={``}
                    isActive={false}
                    isExpanded={true}
                    handleClick={() => setActiveComponent('Achievements')}/>
        </div>
    )
}

export default Certificates