import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectDirectories } from "../../redux/directory/directory.selectors";


class Directory extends React.Component {
    render() {
        return (
            <div className='directory-menu'>
                {this.props.sections.map(section => (
                    <MenuItem key={section.id} section={section} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectories
});

export default connect(mapStateToProps)(Directory);
