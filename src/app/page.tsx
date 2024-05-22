"use client"

import thao from '../../public/assets/images/thao.jpg'
import Image from "next/image"

import Link from "next/link"
export default function Home() {
  const contact = [
    {
      link: 'https://www.facebook.com/thanhdathao.23',
      name: 'flex',
      platform: 'Follow on Twitter',
      icon: <svg viewBox="0 0 24 24" aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path
          d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z">
        </path>
      </svg>
    },
    {
      link: 'https://www.instagram.com/thanhthaoship_/',
      name: 'mt-4 flex2',
      platform: 'Follow on Instagram',
      icon: <svg viewBox="0 0 24 24" aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path
          d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z">
        </path>
        <path
          d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z">
        </path>
      </svg>
    },
    {
      link: 'https://github.com/thanhthaoship',
      name: 'mt-4 flex',
      platform: 'Follow on GitHub',
      icon: <svg viewBox="0 0 24 24" aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
        </path>
      </svg>
    },
    {
      link: 'https://www.facebook.com/thanhdathao.23',
      name: 'mt-4 flex',
      platform: 'Follow on Facebook',
      icon: <svg aria-hidden="true"
        className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
        <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
      </svg>
    },
  ]

  const articles = [
    {
        date: 'December 12, 2023',
        title: "Support learning of driver's license exams",
        link: '/',
        description: "The 'Support Learning of Driver's License Exams' project aims to provide a comprehensive and effective online learning environment for individuals seeking to obtain a driver's license. The primary goal of the project is to help them acquire a solid understanding of theoretical knowledge related to traffic laws and driving regulations. It offers high-quality study materials, practice tests, and reference materials to prepare for driver's license exams."
    }, 
    {
      date: 'December 12, 2023',
      title: "Support learning of driver's license exams",
      link: '/',
      description: "The 'Support Learning of Driver's License Exams' project aims to provide a comprehensive and effective online learning environment for individuals seeking to obtain a driver's license. The primary goal of the project is to help them acquire a solid understanding of theoretical knowledge related to traffic laws and driving regulations. It offers high-quality study materials, practice tests, and reference materials to prepare for driver's license exams."
  }, 
  {
    date: 'December 12, 2023',
    title: "Support learning of driver's license exams",
    link: '/',
    description: "The 'Support Learning of Driver's License Exams' project aims to provide a comprehensive and effective online learning environment for individuals seeking to obtain a driver's license. The primary goal of the project is to help them acquire a solid understanding of theoretical knowledge related to traffic laws and driving regulations. It offers high-quality study materials, practice tests, and reference materials to prepare for driver's license exams."
}, 

]
  return (
    <div className="flex-auto">
      <div className="sm:px-8 mt-16 sm:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-10">
                  <div className="max-w-xs px-2.5 lg:max-w-none"><Image alt="" loading="lazy" width="800"
                    height="800" decoding="async" data-nimg="1"
                    className="relative aspect-square rotate-6 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                    src={thao}
                  /></div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                  <h1
                    className="font-sans text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                    I’m Cù Thanh Thảo. I live in Ho Chi Minh City, where I code the future.</h1>
                  <div className="leading-7 font-sans mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                    <p>
                      
                      In the bustling corridors of my college, amidst the hum of eager minds, I found my place not just through intellect but through my fervent love for coding. 
                      My laptop, adorned with stickers proclaiming my allegiance to Python and Java, became a symbol of my determination and passion. </p>
                    <p>My journey into the world of coding was more than a pursuit of knowledge; it was a deep-seated devotion. From the intricacies of algorithms to the elegance of design patterns, I delved into the realms of code with insatiable curiosity, finding solace and joy in every line I wrote.</p>
                    <div className="mt-6 flex gap-6">
                      {contact.map((c) => (
                        <a key={c.platform} className="group -m-1 p-1" aria-label={c.platform}
                          href={c.link} target="_blank">
                          {c.icon}
                        </a>
                      ))}

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <main className="flex-auto">
            <div className="sm:px-8 mt-10 sm:mt-16">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                    <div className="relative px-4 sm:px-8 lg:px-12">
                        <div className="mx-auto max-w-2xl lg:max-w-5xl">
                            <header className="max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                                Projects I did to improve my knowledge every day</h1>
                                <p className="leading-7 mt-6 text-base text-zinc-600 dark:text-zinc-400">All my personal and collective projects during my time studying at FPT University</p>
                            </header>
                            <div className="mt-16 sm:mt-20">
                                <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                                    <div className="flex max-w-3xl flex-col space-y-16">
                                        {articles.map((article) => (
                                            <article key={article.title} className="md:grid md:grid-cols-4 md:items-baseline">
                                                <div className="md:col-span-3 group relative flex flex-col items-start">
                                                    <h2
                                                        className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                                        <div
                                                            className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl">
                                                        </div><Link href={article.link}><span
                                                            className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span><span
                                                                className="relative z-10">{article.title}</span></Link>
                                                    </h2><time
                                                        className="md:hidden relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                                                    ><span
                                                        className="absolute inset-y-0 left-0 flex items-center"
                                                        aria-hidden="true"><span
                                                            className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span></span>{article.date}</time>
                                                    <p className="leading-6 relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                                        {article.description}
                                                    </p>
                                                    <div aria-hidden="true"
                                                        className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
                                                        Read article<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"
                                                            className="ml-1 h-4 w-4 stroke-current">
                                                            <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg></div>
                                                </div><time
                                                    className="mt-1 hidden md:block relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                                                >{article.date}</time>
                                            </article>
                                        ))}


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </div>
    </div>
  )
}