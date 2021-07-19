import React from 'react';
import { connect } from 'react-redux';

const HeroList = props => {
  const { heroes } = props;
  return (
    <div>
      <ul>
        {heroes.map(hero=>(
          <li key={hero.id}>
            {JSON.stringify(hero, null, 4)}
          </li>
        ))}
      </ul>
    </div>
    );
};

const mapStateToProps = state => ({
  heroes:state.superHero.heroes
});

export default connect(mapStateToProps, null)(HeroList);
