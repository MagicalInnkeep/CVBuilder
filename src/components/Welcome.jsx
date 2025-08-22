import Button from "./Button"
import start from "../assets/start.svg"
import upload from "../assets/upload.svg"
import ExampleCarrousel from "./ExampleCarrousel"

function Welcome(
    {
    setActiveComponent, updatedata
    }
){
    function handleImport(e) {
        const file = e.target.files[0];
        if (!file) return;
      
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const importedData = JSON.parse(event.target.result);
            updatedata(importedData); 
          } catch (error) {
            alert("Invalid JSON file");
            alert(error);
          }
        };
        reader.readAsText(file);
      }
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
            <div className="ImportData">
                <h3>Not your first rodeo?</h3>
                <p>Import your previous data with a click of a button! </p>
                <Button
                        type="button"
                        handleClick={handleImport}
                        image={upload}
                        text="Import"
                        classNa=""
                        isActive={false}
                        isExpanded={true}
                        key="import"
                    />
            </div>
        </div>
    )
}

export default Welcome