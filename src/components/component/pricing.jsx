
import Link from "next/link"

export function Pricing() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <section className="w-full  border-b">
        <div className="container px-4 md:px-6 space-y-6 text-center">
          <div className="space-y-4">
            <h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Unleash Your Bugs with Our Generator
            </h1>
            <p
              className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Effortlessly create a diverse array of bugs to test your software. Our powerful generator provides endless
              possibilities for your quality assurance needs.
            </p>
          </div>
        </div>
      </section>
      <div className="container grid gap-6 px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-6 ml-16">
          <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Free Model</h2>
                <p className="text-gray-500 dark:text-gray-400">Get started with our basic bug generation features.</p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Generate up to 100 bugs per month
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Basic bug types
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Community support
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Paid Model</h2>
                <p className="text-gray-500 dark:text-gray-400">Unlock advanced features for your bug testing needs.</p>
              </div>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Generate unlimited bugs
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Advanced bug types
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-5 h-5 text-gray-900 dark:text-gray-50" />
                  Detailed reporting
                </li>
              </ul>
              <div className="flex justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#">
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

function CheckIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>)
  );
}
