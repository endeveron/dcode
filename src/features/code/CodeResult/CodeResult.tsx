import classNames from 'classnames';
import { Button } from 'components';
import { useEffect, useState } from 'react';
import './CodeResult.scss';

interface CodeResultProps {
  code: string;
  onReady: (isCopy: boolean) => void;
}

const CodeResult = ({ code, onReady }: CodeResultProps) => {
  const [isCopied, setIsCopied] = useState(false);

  let timer: any;

  const handleCopy = () => {
    setIsCopied(!isCopied);

    timer = setTimeout(() => {
      onReady(true);
    }, 1250);
  };

  const handleGoBack = () => {
    onReady(false);
  };

  useEffect(
    () => () => {
      clearTimeout(timer);
    },
    [timer]
  );

  return (
    <div
      className={classNames('code-result', {
        'code-result--copied': isCopied,
      })}
    >
      <div className="code-result__message">
        <div className="code-result__paper">
          <div className="code-result__text">{code}</div>
          <div className="code-result__paper-bg"></div>
        </div>
        <div className="code-result__shredder"></div>
      </div>
      <div className="code-result__buttons-wrapper gap">
        <Button variant="outlined" color="secondary" onClick={handleGoBack}>
          Go back
        </Button>
        <div onClick={handleCopy} className="code-result__button--fixed-width">
          <Button
            variant={isCopied ? 'text' : 'contained'}
            color={isCopied ? 'inherit' : 'primary'}
            className="code-result__main-button"
          >
            {isCopied ? 'Copied' : 'Copy code'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CodeResult };
