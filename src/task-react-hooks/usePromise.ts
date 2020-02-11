export type PromiseResult<T> = { type: 'loading' } | { type: 'success'; value: T } | { type: 'failure'; error: any };
import React from 'react';

export function usePromise<T>(promise: () => Promise<T>): PromiseResult<T> {

  const [response, setResponse] = React.useState();


  React.useEffect(() => {
    promise().then(user => {
      setResponse({ type: 'success', value: user })
    }).catch(error => {
      setResponse({ type: 'error', value: error })
    })

  }, []);

  return response

}
