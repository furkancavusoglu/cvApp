import React from 'react'

const ButtonC = (props) => {
  const { onClickLogin, pendingApiCall, buttonEnabled } = props
  return (
    <div>
      <button className="btn btn-primary" onClick={onClickLogin} disabled={pendingApiCall || !buttonEnabled}>Login</button>
    </div>
  );
};

export default ButtonC