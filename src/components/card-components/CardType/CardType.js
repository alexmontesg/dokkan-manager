import React from 'react';
import './CardType.scss';

export default props => (
  <div className={ `card-type ${props.type} ${props.awaken || ''}` }>
    <div>
      <div>
        { props.awaken ? <span className="awakening">{ props.awaken }</span> : '' }
        <span className="type">{ props.type }</span>
      </div>
    </div>
  </div>
);