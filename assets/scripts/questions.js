import React from 'react';
import ReactDOM from 'react-dom';
import FlowBuilder from '@tspielhoelle/flowbuilder'
let settingsRoot = document.getElementById('questionsdiagramroot');
if (settingsRoot) {
  ReactDOM.render(
    <div className="h-100">
      <FlowBuilder
        getEndpoint={`/admin/questions/fetch`}
        postEndpoint={`/admin/questions/update`}
        updateEndpoint={`/admin/questions/update`}
      />
    </div>,
    settingsRoot
  );
}