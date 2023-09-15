import { useState } from 'react';

interface ErrorInfo {
  [key: string]: string;
}

interface Props<InitData> {
  init: InitData;
  onSubmit: (values: InitData) => void;
  validate: (values: InitData) => ErrorInfo;
}

const useForm = <InitDataType>({ init, onSubmit, validate }: Props<InitDataType>) => {
  const [values, setValues] = useState(init);
  const [errors, setErrors] = useState<ErrorInfo>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    const passValidation = Object.keys(validationErrors).length === 0;

    if (passValidation) {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
