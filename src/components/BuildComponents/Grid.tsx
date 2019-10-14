import React from 'react';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  grid: ({ columns = 12, templateColumns, templateRows, gutter = 24, margin }: GridProps) => ({
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    // overflow: 'auto',
    gridTemplateColumns: templateColumns || `repeat(${columns}, 1fr)`,
    gridTemplateRows: templateRows,
    gridGap: gutter,
    paddingTop: 56,
    padding: `0px ${margin || gutter * 2}px`
  })
});

type GridProps = {
  children: React.ReactNode;
  className?: string;
  /** Number of colums in the grid. Defaults to 12 */
  columns?: number;
  /** Set the grids column template */
  templateColumns?: string;
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
