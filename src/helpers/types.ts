export interface Reaction {
  node: React.ReactNode;
  label: string;
  key?: string;
}

export interface ReactionCounterObject {
  node: JSX.Element;
  label: string;
  by: string;
}
