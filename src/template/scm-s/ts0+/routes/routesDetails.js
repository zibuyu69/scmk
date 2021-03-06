import React from 'react';
import { connect } from 'dva';
import DetailsFilter from './components/info';
import DetailListView from './components/listView';

const $1$Details = ({ $2$DetailModule, dispatch }) => {
  const DetailsFilterData = {
    $2$DetailModule,
  };
  const DetailsListData = {
    $2$DetailModule,
    mergeData(payload) {
      dispatch({
        type: '$2$DetailModule/mergeData',
        payload,
      });
    },
    toNextMem: (rowIndex, fieldName, isShow) => {
      dispatch({
        type: '$2$DetailModule/toNextMemByCurr',
        payload: { rowIndex, fieldName, isShow },
      });
    },
    insertNewRowAfterIndex: (index) => {
      dispatch({
        type: '$2$DetailModule/insertNewListItemAfterIndex',
        payload: { index },
      });
    },
    removeRowAtIndex: (index) => {
      dispatch({
        type: '$2$DetailModule/removeListItemAtIndex',
        payload: { index },
      });
    },
    saveDetails: () => {
      dispatch({
        type: '$2$DetailModule/saveRequisitionDetails',
        payload: {},
      });
    },
    cancelDetailPage: () => {
      dispatch({
        type: '$2$DetailModule/cancelDetailData',
        payload: {},
      });

      dispatch({
        type: '$2$DetailModule/querySuccess',
        payload: {
          findList: [],
        },
      });
    },
  };

  return (
    <div className="routes">
      <DetailsFilter {...DetailsFilterData} />
      <DetailListView {...DetailsListData} />
    </div>
  );
};

function mapStateToProps({ $2$DetailModule }) {
  return { $2$DetailModule };
}
export default connect(mapStateToProps)($1$Details);
