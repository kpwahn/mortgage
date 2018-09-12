import React from 'react';
import PropTypes from 'prop-types';

import AppBar from './AppBar';
import Drawer from './Drawer';

class Mortgage extends React.Component {
    render() {
        return (
            <div>
                <AppBar />
                <Drawer />
            </div>
        )
    }
}

export default Mortgage;
