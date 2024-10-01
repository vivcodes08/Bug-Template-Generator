/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MPL0eIygtvp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState ,useEffect}  from "react"

export default function BugTracker() {
  const [currentPage, setCurrentPage] = useState(1)
  const [bugsPerPage] = useState(10)
  const bugs = [
    {
      id: "BUG-001",
      title: "Incorrect error message displayed",
      description: "When trying to login with invalid credentials, the error message is misleading.",
      status: "Open",
    },
    {
      id: "BUG-002",
      title: "Dropdown menu not working",
      description: "The dropdown menu on the navigation bar is not functioning properly.",
      status: "In Progress",
    },
    {
      id: "BUG-003",
      title: "Images not loading on product page",
      description: "Product images are not displaying on the product details page.",
      status: "Closed",
    },
    {
      id: "BUG-004",
      title: "Checkout process not working",
      description: "Users are unable to complete the checkout process due to an issue with the payment integration.",
      status: "Open",
    },
    {
      id: "BUG-005",
      title: "Search functionality not working",
      description: "The search bar on the homepage is not returning any results.",
      status: "In Progress",
    },
    {
      id: "BUG-006",
      title: "Notifications not being received",
      description: "Users are not receiving notifications for updates to their account or orders.",
      status: "Closed",
    },
    {
      id: "BUG-007",
      title: "Slow page load times",
      description: "The website is taking a long time to load, especially on mobile devices.",
      status: "Open",
    },
    {
      id: "BUG-008",
      title: "Broken links on the footer",
      description: "Several of the links in the footer are not working correctly.",
      status: "In Progress",
    },
    {
      id: "BUG-009",
      title: "Incorrect currency display",
      description: "The prices on the website are not displaying the correct currency for the user's location.",
      status: "Closed",
    },
    {
      id: "BUG-010",
      title: "Unable to upload profile picture",
      description: "Users are unable to upload a profile picture due to an issue with the file upload functionality.",
      status: "Open",
    },
    {
      id: "BUG-011",
      title: "Broken email subscription",
      description:
        "The email subscription form on the homepage is not working, preventing users from signing up for updates.",
      status: "In Progress",
    },
    {
      id: "BUG-012",
      title: "Incorrect product pricing",
      description: "The prices displayed for certain products are not matching the actual prices in the shopping cart.",
      status: "Closed",
    },
  ]
  const [bugsList,setBugslist]=useState([]);
  const indexOfLastBug = currentPage * bugsPerPage
  const indexOfFirstBug = indexOfLastBug - bugsPerPage
  const currentBugs = bugs.slice(indexOfFirstBug, indexOfLastBug)
  const totalPages = Math.ceil(bugs.length / bugsPerPage)
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  useEffect(()=>{

    (async function fetchBugsList(){
      const response=await fetch('/api/submit',{
        method:'GET'
      })

      const data=await response.json();
      console.log("datafetched",data.data)
      setBugslist(data.data)
    })()

  },[])
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Bug Tracker</h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="px-4 py-2 text-left">Bug ID</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {bugsList && bugsList.length >0  && bugsList.map((bug) => (
              <tr key={bug.id} className="border-b dark:border-gray-700">
                <td className="px-4 py-2 font-medium">{bug.id}</td>
                <td className="px-4 py-2">{bug.title}</td>
                <td className="px-4 py-2">{bug.description}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      bug.status === "Open"
                        ? "bg-red-100 text-red-500 dark:bg-red-900 dark:text-red-400"
                        : bug.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-500 dark:bg-yellow-900 dark:text-yellow-400"
                        : "bg-green-100 text-green-500 dark:bg-green-900 dark:text-green-400"
                    }`}
                  >
                    {bug.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex justify-center mt-6">
        <div className="btn-group">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`btn btn-sm ${
                page === currentPage ? "btn-primary" : "btn-outline-primary dark:btn-outline-gray-400"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      </div> */}
    </div>
  )
}