import Button from "./Button"
import start from "../assets/start.svg"
import ExampleCarrousel from "./ExampleCarrousel"

function Welcome(
    {
    setActiveComponent
    }
){
    return (
        <div>
            <div className="AppDescription">
                <h3>Create a good looking CV in a flash</h3>
                <span>Thanks to this tool, you'll be able to create a good looking CV for applying to your dream job.<br/>
                Our selection of styles is still expanding, so ensure to keep checking for more. <br/>
                Without further ado, let's <em> </em>
                <Button key='getStarted'
                        image={start}
                        text='Get Started'
                        classNa={``}
                        isActive={false}
                        isExpanded={true}
                        handleClick={() => setActiveComponent('Personal Info')}/>
                </span>
            </div>
            <ExampleCarrousel/>
        </div>
    )
}

export default Welcome