import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import classNames from 'classnames';

import './PageHeader.scss';

interface PageHeaderProps {
  title?: string;
  actions?: ReactJSXElement;
}

const PageHeader = ({ title, actions }: PageHeaderProps) => {
  const titleEl = title && <h2 className="page-header__title">{title}</h2>;
  const actionsEl = actions && (
    <div className="page-header__actions">{actions}</div>
  );

  return (
    <div
      className={classNames('page-header', {
        'page-header--no-title': !title,
      })}
    >
      {titleEl}
      {actionsEl}
    </div>
  );
};

export { PageHeader };
