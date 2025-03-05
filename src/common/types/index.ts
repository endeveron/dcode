export interface LocationState {
  from: {
    pathname: string;
  };
}

export type WithChildren<T = {}> = T & { children?: React.ReactNode };

export interface IResStatus {
  status: 1 | 0;
}
