import classNames from 'classnames';
import styles from './RangeInput.module.css';

type RangeInputT = {
  min: number;
  max: number;
  value: number;
  step: number;
  onChange: (value: number) => void;
  className?: string;
};

export const RangeInput = ({
  min,
  max,
  value,
  step,
  onChange,
  className,
}: RangeInputT) => {
  return (
    <input
      className={classNames(styles.rangeInput, className)}
      type='range'
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      value={value}
      step={step}
    />
  );
};
