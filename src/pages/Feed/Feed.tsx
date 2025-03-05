import { LogoutButton, PageHeader } from 'components';
import { CodeContainer } from 'features/code/CodeContainer/CodeContainer';

import './Feed.scss';

const Feed = () => {
  return (
    <div className="feed page">
      <div className="feed__header">
        <PageHeader actions={<LogoutButton />} />
      </div>
      <div className="feed__content">
        <CodeContainer />
      </div>
    </div>
  );
};

export { Feed };
