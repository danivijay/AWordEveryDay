import React, { Fragment } from 'react';
import Hero from './components/Hero';
import wordListJson from './wordList.json';
import WordList from './components/WordList';
import Footer from './components/Footer';
import './app.css';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-93459619-4');
ReactGA.pageview(window.location.pathname + window.location.search);

console.log(window.location.pathname + window.location.search);

function App() {
      return (
            <Fragment>
                  <Hero />
                  <WordList wordList={wordListJson.data} />
                  <Footer />
            </Fragment>
      );
}

export default App;
