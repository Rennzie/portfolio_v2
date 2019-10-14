import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  grid: ({ columns, templateRows, gutter, margin }: GridProps) => ({
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: `repeat(${columns || 12}, 1fr)`,
    gridTemplateRows: templateRows,
    gridGap: gutter || 24,
    padding: margin || (gutter || 24) * 2
  })
});

type GridProps = {
  children: React.ReactNode;
  className?: string;
  /** Number of colums in the grid. Defaults to 12 */
  columns?: number;
  templateRows?: string;
  /** Width of the column and row gutters. Defaults to 24px */
  gutter?: number;
  /** Grid outside margin. Defaults to double the gutter */
  margin?: number;
};

export default function Grid(props: GridProps) {
  const { children, className } = props;
  const { grid } = useStyles(props);

  return <section className={`${grid} ${className}`}>{children}</section>;
}
