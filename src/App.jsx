import React, { Fragment } from 'react';
import Hero from './components/Hero';
import wordListJson from './wordList.json';
import WordList from './components/WordList';
import Footer from './components/Footer';
import './app.css';

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
