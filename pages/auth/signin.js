import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';
import Header from '../../components/Header';

// Browser
const SignIn = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <Image
          className="w-80"
          src="https://links.papareact.com/ocw"
          alt="instagram logo"
          width={320}
          // 100% of the image
          height={'100%'}
        />
        <p className="italic font-xs">
          This is not REAL app, it is built for educational purposes only.
        </p>
        <div className="mt-40">
          {Object.values(providers).map(provider => (
            <div key={provider.name}>
              <button
                className="p-3 bg-blue-500 rounded-lg text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Server
export async function getServerSideProps(ctx) {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
export default SignIn;
