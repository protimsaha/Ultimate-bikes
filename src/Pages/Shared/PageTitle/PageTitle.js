import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({ title }) => {
    return (
        <Helmet>
            <title> {title}- Ultimate Bikes</title>
        </Helmet>
    );
};

export default PageTitle;