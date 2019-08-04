import React, { Fragment } from 'react';
import { Columns, Column, Icon } from 'bloomer';

const FooterIcon = ({ iconInfo: { link, icon } }) => (
      <a href={link} target="_blank">
            <Icon isSize="small" className={icon} />
      </a>
);

const Footer = () => {
      const footerIcons = [
            {
                  link: 'https://twitter.com/UtmostDev',
                  icon: 'fab fa-twitter',
            },
            {
                  link: 'https://github.com/danivijay/AWordEveryDay',
                  icon: 'fab fa-github',
            },
      ];
      return (
            <Columns isCentered style={{ marginTop: '20px' }}>
                  <Column isSize={{ mobile: 12, desktop: '1/2' }} hasTextAlign="centered">
                        {footerIcons.map((iconInfo) => (
                              <Fragment key={iconInfo.link}>
                                    <FooterIcon iconInfo={iconInfo} />
                                    &nbsp;&nbsp;
                              </Fragment>
                        ))}
                        <Icon className="fas fa-arrow-up" onClick={() => window.scrollTo(0, 0)} style={{ cursor: 'pointer' }} />
                  </Column>
            </Columns>
      );
};

export default Footer;
