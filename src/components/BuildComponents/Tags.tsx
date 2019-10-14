import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tagsContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  }
});

type TagsProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Renders a container for Tag components.
 * - Is fullWidth by default
 */
export default function Tags(props: TagsProps) {
  const { children, className } = props;
  const { tagsContainer } = useStyles(props);

  return <div className={`${tagsContainer} ${className}`}>{children}</div>;
}
