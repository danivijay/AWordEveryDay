import React, { Fragment } from 'react';
import { Columns, Column, Card, CardHeader, CardHeaderTitle, CardContent, Tag, Title, Subtitle, Content } from 'bloomer';

const WordCard = ({
      wordInfo: {
            ref,
            def: { word, meanings, incident, example },
      },
      day,
}) => {
      return (
            <Columns isCentered style={{ marginTop: '20px' }}>
                  <Column isSize={{ mobile: 12, desktop: '1/2' }}>
                        <Card>
                              <CardHeader>
                                    <CardHeaderTitle>
                                          Day {day} &nbsp;&nbsp;
                                          <Tag isColor="light">
                                                <a href={ref.link} target="_blank" rel="noopener noreferrer">
                                                      {ref.name}
                                                </a>
                                          </Tag>
                                    </CardHeaderTitle>
                              </CardHeader>
                              <CardContent>
                                    <Title isSize={6}>{incident}</Title>
                                    <Title isSize={2}>{word}</Title>
                                    <Subtitle isSize={3}>
                                          {meanings &&
                                                meanings.map((meaning) => (
                                                      <Fragment key={meaning}>
                                                            - {meaning}
                                                            <br />
                                                      </Fragment>
                                                ))}
                                    </Subtitle>
                                    <Content isSize={'medium'}>
                                          <i>{example}</i>
                                    </Content>
                              </CardContent>
                        </Card>
                  </Column>
            </Columns>
      );
};

export default WordCard;
