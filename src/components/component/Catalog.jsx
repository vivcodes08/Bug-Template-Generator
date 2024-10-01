import React from 'react'
import Link from "next/link"

 function Catalog() {
  return (
    
    <main className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Templates</h1>
          <div>
          <p
            className="max-w-[700px] mx-auto mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Browse our collection of pre-built templates to kickstart your next project.
          </p>
          <Link
            href="/tracker"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Tracker
          </Link>
          </div>
          
          
        </div>
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="template/classic">
            <img
              alt="Template 1"
              className="w-full h-56 object-fill"
              height={500}
              src="/templates/classic.png"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Classic 
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A clean and modern template.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="/template/critical">
            <img
              alt="Template 2"
              className="w-full h-56 object-cover"
              height={500}
              src="/templates/p1.png"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="/template/critical">
                  High Priority Issue
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Production and Customer Urgent P1 Issue.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 3"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Coming Soon!
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400"></p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 4"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Coming Soon
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">Coming Soon</p>
            </div>
          </Link>
        
        
        </div>
      </div>
    </main>
  );
}


export default Catalog
