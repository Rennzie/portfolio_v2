import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  gridItem: ({
    columnStart = '',
    columnSpan = '',
    rowStart = '',
    rowSpan = ''
  }: GridItemProps) => ({
    gridColumnStart: `${columnStart} span ${columnSpan}`,
    gridRowStart: `${rowStart} span ${rowSpan}`
  })
});

type GridItemProps = {
  children: React.ReactNode;
  className?: string;
  /** Column start position */
  columnStart?: number | string;
  /** Number of columns to span */
  columnSpan?: number | string;
  /** Row start position */
  rowStart?: number | string;
  /** Number of rows to span */
  rowSpan?: number | string;
};

export default function GridItem(props: GridItemProps) {
  console.log(props);
  const { children, className } = props;
  const { gridItem } = useStyles(props);

  return <div className={`${gridItem} ${className}`}>{children}</div>;
}
