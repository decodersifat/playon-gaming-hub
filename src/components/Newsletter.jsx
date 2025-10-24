import React from 'react'

function Newsletter() {
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 py-16 sm:py-24 lg:py-32 border-t border-gray-700">

                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="  text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                                Stay <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Connected</span>
                            </h2>
                            <p className="   text-lg text-gray-400 mb-8">Get exclusive access to new game releases, special offers, and gaming news delivered straight to your inbox.</p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <input id="email-address" type="email" name="email" required placeholder="Enter your email" autoComplete="email" className="flex-1 rounded-lg bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors duration-300     " />
                                <button type="submit" className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-green-400/25 transition-all duration-300   uppercase tracking-wide">Subscribe</button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-lg bg-gray-800 border border-gray-700 p-3 ring-1 ring-green-400/20">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 text-green-400">
                                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <dt className="mt-4 text-lg font-bold text-white  ">Weekly Updates</dt>
                                <dd className="mt-2 text-base text-gray-400     ">Fresh game releases, updates, and exclusive content delivered every week to keep you in the loop.</dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-lg bg-gray-800 border border-gray-700 p-3 ring-1 ring-green-400/20">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 text-green-400">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <dt className="mt-4 text-lg font-bold text-white  ">No Spam</dt>
                                <dd className="mt-2 text-base text-gray-400 ">We respect your inbox. Only quality content, no unnecessary emails, and easy unsubscribe anytime.</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
                    <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="aspect-1155/678 w-288.75 bg-gradient-to-tr from-green-400 to-blue-500 opacity-20"></div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter