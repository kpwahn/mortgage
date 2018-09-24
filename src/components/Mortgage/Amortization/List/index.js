import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MaterialList from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { List as VirtualizedList, WindowScroller  } from 'react-virtualized';

import ListButton from './ListButton';
import styles from './styles';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.rowRenderer = this.rowRenderer.bind(this);
  }

  rowRenderer({key, index, style}) {
    return (
      <ListButton key={key} data={this.props.mortgage.amortizationExtra[index]} style={style}/>
    );
  }

  _setListRef = ref => {
    this._list = ref;
    this._registerList(ref);
  };

  render() {
    let {classes} = this.props;
    let {amortizationExtra} = this.props.mortgage;

    let width = (this.props.open) ? window.outerWidth - 240: window.innerWidth;

    return (
      <WindowScroller>
        {
          ({ height, isScrolling, onChildScroll, scrollTop }) => (
            <VirtualizedList
              amortizationExtra={amortizationExtra}
              className={classes.VirtualizedList}
              width={width}
              height={height}
              isScrolling={isScrolling}
              onScroll={onChildScroll}
              overscanRowCount={20}
              rowCount={amortizationExtra.length}
              rowHeight={55}
              rowRenderer={this.rowRenderer}
              scrollTop={scrollTop}
            />
          )
        }
      </WindowScroller>
    );
  }
}

const mapStateToProps = (state) => ({
  mortgage: state.mortgage,
  open: state.drawer.open
});

export default connect(mapStateToProps, null)(withStyles(styles)(List));
