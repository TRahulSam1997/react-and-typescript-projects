import React from "react";

type ButtonOwnProps<T extends React.ElementType = React.ElementType > = {
  children: string;
  as?: T;
};

type PrimaryButtonProps = {
  primary: boolean;
  secondary?: never;
  destructive?: never;
};

type SecondaryButtonProps = {
  primary?: never;
  secondary: boolean;
  destructive?: never;
};

type DestructiveButtonProps = {
  primary?: never;
  secondary?: never;
  destructive: boolean;
};

type ButtonProps<T extends React.ElementType> = ButtonOwnProps<T> &
  Omit<React.ComponentProps<T>, keyof ButtonOwnProps>;

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const defaultElement = 'button';

function Button<T extends React.ElementType = typeof defaultElement> ({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as
}: ButtonProps<T> &
  (PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps)) {
  const classNames = createClassNames({ primary, secondary, destructive });
  const TagName = as || defaultElement;

  return <TagName className={classNames}>{children}</TagName>;
};

const Application = () => {
  return (
    <main>
      <Button primary as="a" href="/">Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
