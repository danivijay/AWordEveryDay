import React, { Fragment, useState } from 'react';
import WordCard from './WordCard';

const WordList = ({ wordList }) => {
      return (
            <Fragment>
                  {wordList &&
                        wordList.reverse().map((wordInfo, i) => <WordCard wordInfo={wordInfo} key={wordInfo.def.word} day={wordList.length - i} />)}
            </Fragment>
      );
};

export default WordList;
