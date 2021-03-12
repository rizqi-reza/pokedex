export interface ITabs extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  defaultActive?: number;
  withBorder?: boolean;
  onChange?: (index: number) => void;
}

export interface ISubTabs {
  Item: React.FC<{
    title: React.ReactNode;
  }>;
}
