import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from '../..';

const useStyles = createUseStyles((theme: Theme) => ({}));

type Props = {
  children: React.ReactNode | string;
};

export default function AchievementItem({ children }: Props) {
  const theme: any = useTheme();
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start', margin: '12px 0px' }}>
      <p style={{ paddingRight: 10, paddingTop: 3, fontSize: 16 }}> ‣ </p>
      <p
        style={{
          ...theme.typography.caption
        }}
      >
        {children}
      </p>
    </div>
  );
}
