import React, { Fragment } from 'react';
import { Columns, Column, Title, Subtitle, Field, Control, Checkbox } from 'bloomer';

const Hero = () => {
      return (
            <Fragment>
                  <Columns isCentered style={{ marginTop: '20px' }} isFullWidth>
                        <Column isSize={{ mobile: 12, desktop: '1/2' }} hasTextAlign="centered">
                              <Title isSize={1}>
                                    #A<span style={{ color: '#0967fd' }}>Word</span>
                                    <wbr />
                                    EveryDay
                              </Title>
                              <Subtitle style={{ marginTop: '40px' }} isSize={4}>
                                    I'm learning a word everyday(well.. almost), with the help of pop culture. Each word will have a real life
                                    reference - which can be a movie, series, or anything which I encounters in my day to day life.
                              </Subtitle>
                              <Title isSize={6}>
                                    -{' '}
                                    <a href="https://twitter.com/UtmostDev" target="_blank" rel="noopener noreferrer">
                                          Dani Vijay
                                    </a>
                              </Title>
                        </Column>
                  </Columns>
            </Fragment>
      );
};

export default Hero;
