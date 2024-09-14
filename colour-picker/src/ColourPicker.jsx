// By: Abdulganiyu Babatunde, bababdulg@gmail.com, 6474505223
// Date created: 9/14/2024
// Date last modified: 9/14/2024 
import React, {useState} from 'react';


function ColourPicker(){

    const [backColour , setBackColour] = useState("#FFFFFF");

    function handleColourChange(event) {
        setBackColour(event.target.value);
    }

    return(
        <div className="colour-picker-container">
            <h1 >Colour Picker</h1>
            <div className="colour-display" style={{backgroundColor: backColour}}>
               <p>Selected Colour: {backColour}</p> 
            </div>
                <label>Select a Colour:</label>
                <input type="color" value={backColour} onChange={handleColourChange}></input>
        </div>
    );

}

export default ColourPicker