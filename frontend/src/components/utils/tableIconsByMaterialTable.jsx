import React, { forwardRef } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import CheckIcon from '@material-ui/icons/Check';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LastPageIcon from '@material-ui/icons/LastPage';
import SearchIcon from '@material-ui/icons/Search';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBoxIcon {...props} ref={ref} />),
  Arrow: forwardRef((props, ref) => <KeyboardArrowUpIcon {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <CheckIcon {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutlineIcon {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <EditIcon {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPageIcon {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPageIcon {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRightIcon {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeftIcon {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <ClearIcon {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <SearchIcon {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpwardIcon {...props} ref={ref} />),
};

export default tableIcons;
