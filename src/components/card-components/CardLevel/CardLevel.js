import React from 'react';
import './CardLevel.scss';

const isMaxLevel = (lvl, rarity) => {
  let maxLevel = 20;
  if (rarity === 'r') {
    maxLevel = 40;
  }
  if (rarity === 'sr') {
    maxLevel = 60;
  }
  if (rarity === 'ssr') {
    maxLevel = 100;
  }
  if (rarity === 'ur') {
    maxLevel = 100;
  }
  if (rarity === 'tur') {
    maxLevel = 120;
  }
  if (rarity === 'eza') {
    maxLevel = 140;
  }
  if (rarity === 'lr') {
    maxLevel = 150;
  }
  return lvl === maxLevel;
}

export default props => (
  <div className={ `card-level ${props.type}` }>
    <span>Lv</span>
    <span className={`${isMaxLevel(props.lvl, props.rarity) ? 'maxed' : 'not-maxed' }`}>
      { props.lvl }
    </span>
  </div>
);