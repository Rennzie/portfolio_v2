import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../..';
const useStyles = createUseStyles((theme: Theme) => ({}));

type Props = {
  children: React.ReactNode | string;
};

export default function Tag({ children }: Props) {
  const theme: any = useTheme();
  return (
    <span
      style={{
        fontFamily: 'Roboto Mono',
        fontSize: 14,
        padding: 8,
        margin: 2,
        color: 'white',
        backgroundColor: '#9e3000'
      }}
    >
      {children}
    </span>
  );
}
