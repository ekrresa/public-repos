import * as React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../state/app/hooks';

export function Auth({ children }: React.PropsWithChildren<unknown>) {
  const code = localStorage.getItem('code');
  const router = useRouter();
  const state = useAppSelector(state => state.auth.queries[`signIn("${code}")`]);

  if (!state?.data || state?.error || !code) {
    router.replace('/login');
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
