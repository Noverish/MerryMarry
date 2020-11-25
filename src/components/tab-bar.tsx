import classnames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from 'src/utils/routes';
import './tab-bar.scss';

export const Tab = {
  guestbook: { en: 'guestbook', kr: '방명록', route: routes.guestbook },
  ticket: { en: 'ticket', kr: '모바일 식권', route: routes.ticket },
  data: { en: 'data', kr: '데이터 관리', route: routes.data },
  community: { en: 'community', kr: '커뮤니티', route: routes.community },
  my: { en: 'my', kr: 'MY', route: routes.my },
} as const;

type Props = {
  current: TabBar.Tab;
}

export function TabBar(props: Props) {
  const { current } = props;

  const tabs = Object.values(Tab).map(({ en, kr, route }) => (
    <Link
      to={route}
      key={en}
      className={classnames({ selected: current.toString() === en }, 'tab-bar-item')}
    >
      <div className="tab-bar-icon"></div>
      <span className="tab-bar-title">{kr}</span>
    </Link>
  ));

  return (
    <div className="tab-bar">
      {tabs}
    </div>
  )
}

export declare namespace TabBar {
  export type Tab = keyof typeof Tab;
}