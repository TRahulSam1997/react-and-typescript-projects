type ButtonProps = {
  children: string;
};

type PrimaryButtonProps = ButtonProps & { primary: boolean, secondary?:never, destructive?:never };
type SecondaryButtonProps = ButtonProps & { secondary: boolean, primary?:never, destructive?:never };
type DestructiveButtonProps = ButtonProps & { destructive: boolean, primary?:never, secondary?:never };

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const Button = ({
  children,
  primary = false,
  secondary = false,
  destructive = false
}: PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps ) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
