import { useState } from 'react';

import { CodeForm, CodeResult } from 'features/code';
import { ICodeFormData, IGenerateCodeReq } from 'features/code';
import { IFormField } from 'common/types/form';
import { useCrypto } from 'common/hooks/useCrypto';
import { useError } from 'common/hooks/useError';
import { useGenerateCodeMutation } from 'features/code';
import { validateCode } from 'common/utils/validate';

import './CodeContainer.scss';
import { copyTextToClipboard } from 'common/utils/clipboard';
import { TitleGroup } from 'components';

const codeFields: IFormField[] = [
  {
    name: 'code',
    label: 'Keyphrase',
    type: 'text',
    isRequired: true,
    validator: validateCode,
  },
];

const CodeContainer = () => {
  const { encryptObject, decryptString } = useCrypto();
  const [generateCode, { isLoading }] = useGenerateCodeMutation();
  const { handleApiError } = useError();

  const [codeResult, setCodeResult] = useState('');

  const handleSubmit = async (formData: ICodeFormData) => {
    const encrFormOutput = encryptObject(formData);
    const req: IGenerateCodeReq = {
      data: encrFormOutput,
    };

    try {
      const fetchedCode = await generateCode(req).unwrap();
      const decrypted = decryptString(fetchedCode);
      setCodeResult(decrypted);
    } catch (err: any) {
      handleApiError(err);
    }
  };

  const handleResult = async (isCopy: boolean) => {
    isCopy && (await copyTextToClipboard(codeResult));
    setCodeResult('');
  };

  const formEl = (
    <div className="anim-fade" key="1">
      <TitleGroup title="Start" subtitle="Type something" />
      <CodeForm
        fields={codeFields}
        isLoading={isLoading}
        onSubmitted={handleSubmit}
        submitBtnLabel="Generate"
      />
    </div>
  );

  const resultEl = (
    <div className="anim-fade" key="2">
      <TitleGroup title="Done" subtitle="Password generated" />
      <CodeResult code={codeResult} onReady={handleResult} />
    </div>
  );

  return <div className="code-container">{codeResult ? resultEl : formEl}</div>;
};

export { CodeContainer };
