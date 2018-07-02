import React from 'react';
import FontAwesome from 'react-fontawesome';

export default () =>
  <div className="card">
    <div className="card-body">
      <h4 className="card-title">
        <FontAwesome name="chart-bar" /> Dashboard
      </h4>
      <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>