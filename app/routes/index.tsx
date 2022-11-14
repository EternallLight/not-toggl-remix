import { Link } from "@remix-run/react";


export default function Index() {
  return (
    <main className="relative min-h-screen bg-white bg-[#2C1338] sm:flex sm:items-center sm:justify-center">
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://public-assets.toggl.com/b/static/b5eab574993e9990540d5b532687db12/6d603/hero-flamingo.jpg"
                alt="Sonic Youth On Stage"
              />
              <div className="absolute inset-0 bg-[color:rgba(254,204,27,0.5)] mix-blend-multiply" />
            </div>
            <div className="relative px-4 pt-16 pb-8 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-32">
              <div className="mb-12">
                <svg
                  viewBox="0 0 85 32"
                  className="css-12tcxa0-StyledLogo e166r53y3"
                  fill="#2C1338"
                >
                  <path d="M44.846 11.29a1.845 1.845 0 112.667 2.55 1.845 1.845 0 01-2.667-2.55m10.571 16.233c-.049-1.422-.47-2.924-1.544-3.916-1.199-1.107-2.934-1.615-4.547-1.615h-7.19c-.71 0-1.338-.53-1.338-1.184 0-.54.366-1.01.888-1.145-.002-.001.123-.032.255-.075a9.742 9.742 0 004.187.894c2.217 0 4.438-.648 6.065-2.16 1.585-1.473 2.325-3.532 2.325-5.64 0-2.108-.74-4.165-2.325-5.637A7.398 7.398 0 0050.66 5.95c1.527.352 3.103-.084 4.187-1.944l-3.055-2.183-2.547 3.528a10.223 10.223 0 00-3.117-.468c-2.216 0-4.439.648-6.066 2.16-1.584 1.473-2.323 3.532-2.323 5.638s.739 4.167 2.323 5.64c.139.127.28.248.427.364l-.298.157a8.533 8.533 0 00-2.01 1.596c-1.004 1.063-2.008 2.655-2.008 4.774 0 0-.14 4.52 5.08 4.52h3.781c.87 0 1.758.55 1.758 1.415 0 .303-.088.599-.253.852h7.232a6.575 6.575 0 001.646-4.477m7.78-16.234a1.837 1.837 0 110 2.652 1.98 1.98 0 010-2.652m12.81 16.234c-.048-1.422-.47-2.924-1.543-3.916-1.2-1.107-2.935-1.615-4.546-1.615l-8.346-.06c-.527 0-.928-.328-.928-.814 0-.4.199-.996.704-1.095.998.31 2.037.464 3.082.459 2.218 0 4.44-.648 6.066-2.16 1.584-1.473 2.324-3.532 2.324-5.64 0-2.108-.74-4.165-2.324-5.637a7.398 7.398 0 00-1.534-1.094c1.527.352 3.103-.084 4.187-1.944l-3.053-2.183-2.549 3.528a10.223 10.223 0 00-3.117-.468c-2.216 0-4.439.648-6.066 2.16-1.582 1.473-2.323 3.532-2.323 5.638s.74 4.167 2.323 5.64c.465.43.984.798 1.543 1.096-.406.308-.785.65-1.134 1.02-1.006 1.064-2.01 2.656-2.01 4.775 0 0-.139 4.52 5.081 4.52h3.781c.871 0 1.756.55 1.756 1.415 0 .303-.086.598-.251.852h7.231a6.567 6.567 0 001.646-4.477m8.752-2.32v-6.746c-1.559.197-2.1-.897-2.1-1.981V0h-7.726v17.707c0 2.198.33 4.032 1.127 5.187 1.224 1.756 2.883 2.905 6.18 2.92.608-.028 1.624-.147 2.519-.61m-56.865-8.206a2.551 2.551 0 11.66-1.713 2.403 2.403 0 01-.66 1.713m5.757-9.17c-1.995-2.025-4.719-2.891-7.436-2.891-2.718 0-5.444.866-7.438 2.891-1.943 1.971-2.85 4.727-2.85 7.546 0 2.82.907 5.577 2.85 7.548 1.993 2.024 4.718 2.891 7.438 2.891 2.719 0 5.441-.867 7.436-2.89 1.942-1.972 2.85-4.728 2.85-7.549 0-2.82-.908-5.575-2.85-7.546M13.047 18.484c-1.285 0-1.81-.392-2.285-.992-.309-.392-.462-.968-.462-1.715v-3.493h4.313v-6.26H10.3V0H4.79v2.253c0 2.494-1.912 4.516-4.268 4.516A4.31 4.31 0 010 6.736v5.548h2.894v5.577c0 2.196.398 3.886 1.194 5.039 1.23 1.762 2.592 2.913 5.921 2.913 1.93 0 3.544-.44 4.604-1.028v-6.56a4.467 4.467 0 01-1.566.259"></path>
                </svg>
              </div>
              <p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                Which product are you interested in?
              </p>
              <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                  <Link
                    to="/track/sign-in"
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
                  >
                    Track
                  </Link>
                  <Link
                    to="/plan/sign-in"
                    className="flex items-center justify-center rounded-md bg-yellow-500 px-4 py-3 font-medium text-white hover:bg-yellow-600"
                  >
                    Plan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
