import React from 'react';
import { CardType, CardLevel } from '../card-components';
import './Card.scss';

export default props => (
  <div className={ `card ${ props.type }` }>
    <CardType type = { props.type } awaken = { props.awaken } />
    <CardLevel lvl = { props.lvl } rarity = { props.rarity } type = { props.type } />
  </div>
);