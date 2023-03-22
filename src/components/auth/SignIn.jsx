import useAuthentication from "../services/useAuthentication";

export const SignIn = () => {
  const { email, password, setEmail, setPassword, signUp } =
    useAuthentication();

  return (
    <div className="relative flex  flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative mx-auto w-full max-w-md bg-gradient-to-b from-black to-slate-800 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-300">
              Welcome Back
            </h1>
            <p className="mt-2 text-gray-400">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-8">
            <form action="" onSubmit={signIn}>
              <div className="relative mt-10">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  className="peer w-full rounded-md border border-gray-300 px-3 py-2.5 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute -top-4 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-400"
                >
                  Email Address
                </label>
              </div>
              <div className="relative mt-10">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="peer peer w-full rounded-md border border-gray-300 px-3 py-2.5 shadow shadow-gray-100 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                />
                <label
                  htmlFor="password"
                  className="pointer-events-none absolute -top-4 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:pl-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-400"
                >
                  Password
                </label>
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign In
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Don&#x27;t have an account yet?{" "}
                <a
                  href="#!"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Sign up
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
