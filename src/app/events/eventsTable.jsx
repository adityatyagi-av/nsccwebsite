
"use client";

import { useRouter } from "next/navigation";
import React from 'react';
import Link from 'next/link';

const EventsTable = ({ events = [
  {
    id: 1,
    name: "Dev 101",
    slug:"dev-101",
    status: "Completed",
    date: "30-09-2024",
    about: {
      title: "Beginners Bootcamp",
      description: "A beginner-friendly bootcamp introducing students to Web Dev, Android Dev, and Git & GitHub essentials"
    },
    participants: 100
  },
  {
    id: 2,
    name: "Code Rush",
    slug:"code-rush",
    status: "Active",
    date: "01-12-2024",
    about: {
      title: "Coding Competetion",
      description: "Online coding competition held in for the students"
    },
    participants: "200"
  },
  {
    id: 3,
    name: "Open Source Competetion",
    slug:"open-source",
    status: "Upcoming",
    date: "01-02-2025",
    about: {
      title: "Open Source Contributions",
      description: "Encouraging and rewarding students for open source contributions."
    },
    participants: "NA"
  },
  
] }) => {
  // Function to determine status style
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "text-green-500 bg-green-100/60 dark:bg-gray-800";
      case "Completed":
        return "text-purple-500 bg-purple-100/60 dark:bg-gray-800";
      case "Upcoming":
        return "text-blue-500 bg-blue-100/60 dark:bg-gray-800";
      default:
        return "text-gray-500 bg-gray-100 dark:text-gray-400 dark:bg-gray-800"; // Fallback style
    }
  };
  const router = useRouter();

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <span>Event Name</span>
                    </th>
                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Status
                    </th>
                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      About
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      Participants
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
  {events.map((event) => (
    <tr
      key={event.id}
      className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => router.push(`/events/${event.slug}`)} // Navigate to event page
    >
      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
        <div>
          <h2 className="font-medium text-gray-800 dark:text-white">{event.name}</h2>
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
        <div className={`inline px-3 py-1 text-sm font-normal rounded-full gap-x-2 ${getStatusStyle(event.status)}`}>
          {event.status}
        </div>
      </td>
      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
        <div>{event.date}</div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div>
          <h4 className="text-gray-700 dark:text-gray-200">{event.about.title}</h4>
          <p className="text-gray-500 dark:text-gray-400">{event.about.description}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <span className="text-blue-500 font-semibold bg-blue-100 px-3 py-1 rounded-full">
            {event.participants}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </td>
    </tr>
  ))}
</tbody>


              </table>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default EventsTable;
