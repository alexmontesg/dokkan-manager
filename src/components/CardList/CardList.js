import React from 'react';
import './CardList.scss';
import Card from '../Card/Card';
import cards from './collection';

export default () => (
  <div className="cards-list">
    { cards.map(c => <Card key={ c.id } { ...c } />) }
  </div>
);