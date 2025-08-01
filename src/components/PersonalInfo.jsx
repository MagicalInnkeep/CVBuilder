import Button from "./Button"
import check from "../assets/check.svg"

function PersonalInfo(
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
                    handleClick={() => setActiveComponent('Education')}/>
        </div>
    )
}

export default PersonalInfo