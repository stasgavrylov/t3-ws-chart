import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

type Props = {
  className: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={classNames(
        styles.fetchButton,
        className,
        'fetchButton py-3 px-7 rounded-xl border-4 border-indigo-900 border-solid text-xl font-quicksand'
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
