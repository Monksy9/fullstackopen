import React from 'react';

const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onsubmit}>
            <div>
                name: <input value={props.newname} onChange={props.namechange}/>
            </div>
            <div> 
                number: <input value={props.newnumber} onChange={props.numberchange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            </form>
            
        </div>
    );
};

export default PersonForm;