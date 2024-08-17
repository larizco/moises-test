import * as React from 'react';

export const Context = React.createContext(null);

export function SongsContext(props: any) {

  return (
    <Context.Provider value={props}>
      {props.children}
    </Context.Provider>
  );
}
