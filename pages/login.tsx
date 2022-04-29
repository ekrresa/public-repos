import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLazySignInQuery } from '../state/features/auth.slice';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const state = 'dontbeevil';

export default function Login() {
  const router = useRouter();
  const [trigger, { data, error }] = useLazySignInQuery({
    refetchOnReconnect: false,
    refetchOnFocus: false,
  });

  React.useEffect(() => {
    if (router.query.code && router.query.state === state) {
      trigger(router.query.code as string);
    }

    if (router.query.error) {
      console.error(router.query.error);
    }
  }, [router.query.code, router.query.error, router.query.state, trigger]);

  if (data?.access_token) {
    localStorage.setItem('code', router.query.code as string);
    router.replace('/');
  }

  if (error) {
    console.error(error);
  }

  return (
    <div className="h-screen grid place-items-center">
      <Link
        href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope="user repo"&state=${state}`}
        passHref
      >
        <a className="rounded-lg text-white bg-[#2C984A] px-6 py-2 shadow text-sm md:text-base">
          Login with GitHub
        </a>
      </Link>
    </div>
  );
}
