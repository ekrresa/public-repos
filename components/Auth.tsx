import * as React from 'react';
import { useRouter } from 'next/router';
import { useAppSelector } from '../state/app/hooks';

export function Auth({ children }: React.PropsWithChildren<unknown>) {
  const router = useRouter();
  const access_token = useAppSelector(state => state.auth.access_token);

  if (!access_token) {
    router.replace('/login');
    return null;
  }

  return <React.Fragment>{children}</React.Fragment>;
}
