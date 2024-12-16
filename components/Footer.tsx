'use client'

import { useEffect, useRef } from 'react'

export default function Footer() {
  const email = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (email.current) {
      email.current.href = email.current.href.replace('$', '@')
    }
  }, [])
  return (
    <section className="bg-white text-gray-700 md:pt-6">
      <div className="container mx-auto flex flex-col items-center py-8 sm:flex-row">
        <a
          href="/"
          title="DNS.Desi"
          className="logo select-none text-xl font-black leading-none text-gray-900"
        >
          DNS
          <dot className="text-indigo-600">.</dot>
          Desi
        </a>
        <a
          className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l sm:border-gray-200 sm:pl-4"
          href="/"
          target="_blank"
          rel="noopener"
          title=""
        >
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
        </a>
        <span className="mt-4 inline-flex justify-center space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">

          
        </span>
      </div>
    </section>
  )
}
