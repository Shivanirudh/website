import React from 'react';
import profile from '../static/IMG.jpg'

const Home = () => {
  return (
    <div className="page">
      <div className="home-content">
        <img src={profile} alt="Shiva" className="profile-picture" />
        <h1>Hello, I'm Shiva!</h1>
        <h3>
          Great to meet you!
        </h3>
        <div className="tagline">
        <p>R, python, javascript, shiny, dplyr, purrr, ditto, ggplot, d3, canvas, spark, sawk, pyspark, sparklyR, lodash, lazy, bootstrap, jupyter, vulpix, git, flask, numpy, pandas, feebas, scikit, bgm, bayes, h20.ai, sparkling-water, tensorflow, keras, onyx, ekans, hadoop, scala, unity, gc, metapod, c#/c++, krebase, neo4j.</p>
        <p>I typically ask recruiters to point out which of these are pokemon. </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
