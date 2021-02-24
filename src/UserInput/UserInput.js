import React from 'react';

const UserInput = (props) => {
    const inputStyle = {
      border: '2px solid #28527a',
      padding: '4px',
      marginLeft: '110px' 
    };

    return <input 
    type="text" 
    style={inputStyle}
    onChange={props.changed}  
    value={props.currentName} />;
};

export default UserInput;