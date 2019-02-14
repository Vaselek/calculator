import React, {Fragment} from 'react';

const NumberBtn = ({name, label, onClick}) => {
  return (
    <Fragment>
      <button onClick={onClick} type="button" name={name}>{label}</button>
    </Fragment>
  );
};

export default NumberBtn;
