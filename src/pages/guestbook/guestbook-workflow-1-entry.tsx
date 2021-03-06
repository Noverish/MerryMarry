import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { guestbookWorkflowEntry } from 'src/features/guestbook/workflow/2-entry';
import { RootState } from 'src/store';
import { congrate } from 'src/svgs';
import { getNameFromMarriage } from 'src/utils';
import MainLayout from '../layouts/main-layout';
import './guestbook-workflow-1-entry.scss';

export default function GuestbookWorkflowEntryPage() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.guestbookWorkflow);
  const { marriage, isOnline } = state;

  let msg = <div />;
  if (marriage) {
    const name = getNameFromMarriage(marriage);

    if (isOnline) {
      msg = <p>{name}의 결혼식에 참석하지는 못했지만,<br />축하하는 마음으로 방명록을 남기고<br />축의금을 간편하게 전달해보세요!</p>
    } else {
      msg = <p>{name}의 결혼식에 참석하셨네요!<br />방명록을 남기고 축의금을 간편하게 전달해보세요!</p>
    }
  }

  const onClick = useCallback(() => {
    dispatch(guestbookWorkflowEntry());
  }, [dispatch]);

  return (
    <MainLayout title="방명록" onBack={true}>
      <div className="guestbook-workflow-1-entry">
        <div className="layout-1">
          <img src={congrate} className="icon" />
          <div className="title">
            {msg}
          </div>
        </div>
        <button type="button" className="btn" onClick={onClick}>다음</button>
      </div>
    </MainLayout>
  )
}
