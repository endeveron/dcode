import { Slider as MuiSlider } from '@mui/material';

import { setSliderValue } from 'features/code';
import { selectCodeSliderValue } from 'features/code/codeSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store';

import './Slider.scss';

type TSliderMark = {
  value: number;
  label?: string;
  valueLabel?: string;
};

interface SliderProps {
  marks: TSliderMark[];
}

const Slider = ({ marks }: SliderProps) => {
  const dispatch = useAppDispatch();
  const valueFromStore = useAppSelector(selectCodeSliderValue);

  const [value, setValue] = useState<number>(3);

  useEffect(() => {
    valueFromStore && setValue(valueFromStore);
  }, [valueFromStore]);

  const handleValueChange = (value: number): void => {
    setValue(value);
  };

  const setValueToStore = (value: number): void => {
    dispatch(setSliderValue(value));
  };

  // const handleValueLabel = (value: number) => {
  //   const mark = marks.find((item) => item.value === value);
  //   const valueLabel = mark?.valueLabel;
  //   return mark && valueLabel ? valueLabel : value;
  // };

  return (
    <div className="slider">
      <MuiSlider
        min={1}
        max={marks?.length || 1}
        step={1}
        marks={marks}
        value={value}
        onChange={(_, value) => handleValueChange(value as number)}
        onChangeCommitted={(_, value) => setValueToStore(value as number)}
        valueLabelDisplay="auto"
        aria-label="custom marks"
        // valueLabelFormat={handleValueLabel}
      />
    </div>
  );
};

export { Slider };
