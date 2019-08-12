import React, { Fragment, useState } from 'react';
import { Columns, Column, Card, CardHeader, CardHeaderTitle, CardContent, Tag, Title, Subtitle, Content, Button, Icon } from 'bloomer';

const WordCard = ({
      wordInfo: {
            ref,
            def: { word, meanings, incident, example, hasSpoilers = false },
      },
      day,
      showSpoilerByDefault = false,
}) => {
      const [showSpoiler, setshowSpoiler] = useState(showSpoilerByDefault);
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
                                    {hasSpoilers && (
                                          <Content hasTextAlign="centered" isMarginless isPaddingless>
                                                <Button
                                                      isColor="danger"
                                                      isSize="small"
                                                      isOverlay
                                                      onClick={() => setshowSpoiler(true)}
                                                      disabled={showSpoiler}
                                                >
                                                      <Icon isSize="small" className="fa fa-exclamation-triangle" />
                                                      &nbsp;&nbsp;Show Example (may contain spoilers!)
                                                </Button>
                                          </Content>
                                    )}
                                    <Content isSize={'medium'} className={hasSpoilers && !showSpoiler && 'blur'}>
                                          <i>{example}</i>
                                    </Content>
                              </CardContent>
                        </Card>
                  </Column>
            </Columns>
      );
};

export default WordCard;
