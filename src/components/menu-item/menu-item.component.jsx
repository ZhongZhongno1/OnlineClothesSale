import React from 'react';

import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({section: {size, routeUrl, imageUrl, title}, match, history}) => (
    <div className={`${size} menu-item`}
         onClick={() => history.push(`${match.url}${routeUrl}`)}>
        <div
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
