import Button from "./Button"
import check from "../assets/check.svg"

function Result(
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
                    handleClick/>
        </div>
    )
}

export default Result