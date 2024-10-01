
import Link from "next/link"

export function Feature() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Features that Make Bug Reporting a Breeze
              </h2>
              <p
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our bug template generator offers a range of features to help you create detailed and consistent bug
                reports.
              </p>
            </div>
          </div>
          <div
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
            <div
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-950 dark:shadow-none dark:hover:bg-gray-800">
              <CheckIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Comprehensive Templates</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our templates cover all the essential details for bug reporting, ensuring you never miss a crucial piece
                of information.
              </p>
            </div>
            <div
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-950 dark:shadow-none dark:hover:bg-gray-800">
              <PuzzleIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Customizable Fields</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Tailor the template to your specific needs by adding or removing fields, ensuring your bug reports are
                always relevant.
              </p>
            </div>
            <div
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-950 dark:shadow-none dark:hover:bg-gray-800">
              <DownloadIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Easy Sharing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Generate and share bug reports with your team in seconds, ensuring everyone is on the same page.
              </p>
            </div>
            <div
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-950 dark:shadow-none dark:hover:bg-gray-800">
              <RocketIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Time-Saving Automation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Streamline your bug reporting process with our automated template generation, reducing the time and
                effort required.
              </p>
            </div>
            <div
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-950 dark:shadow-none dark:hover:bg-gray-800">
              <ClipboardIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Consistent Formatting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Ensure a professional and uniform appearance for all your bug reports with our consistent formatting
                options.
              </p>
            </div>
            <div
              className="flex flex-col items-start space-y-4 rounded-lg bg-white p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg dark:bg-gray-950 dark:shadow-none dark:hover:bg-gray-800">
              <LightbulbIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-xl font-bold">Detailed Reporting</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our templates ensure you capture all the necessary details, from steps to reproduce to expected and
                actual behavior.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div
          className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Streamline Your Bug Reporting?
            </h2>
            <p
              className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Try our bug template generator and experience the difference in your team's bug reporting process.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#">
              Try the Generator
            </Link>
          </div>
        </div>
      </section>
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


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>)
  );
}


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>)
  );
}


function LightbulbIcon(props) {
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
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
  );
}


function PuzzleIcon(props) {
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
      <path
        d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>)
  );
}


function RocketIcon(props) {
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
      <path
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>)
  );
}
