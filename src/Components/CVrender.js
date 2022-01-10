import React, { Component } from 'react';

const CVRenderPersonInfo = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.surname}</h1>
    </div>
  );
};

export default CVRenderPersonInfo;
