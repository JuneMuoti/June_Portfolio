import Header from '@/components/Header'
import React from 'react'
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Image from 'next/image';
const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
   
    // More products...
  ]
  
type Props = {}
export default function Works() {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const username = "JuneMuoti";
    const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

  useEffect(() => {
    async function fetchUserRepos() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error("Failed to fetch user repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserRepos();
  }, [username, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="bg-white">
        <Header></Header>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Public Repos</h2>
          {/* <h3 className='absolute top-0 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3> */}
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {repos.map((repo) => (
              <div key={repo.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src="/GitHub_logo.png"
                    alt="github logo"
                    width={500}
                    height={500}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={repo.html_url}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {repo.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{repo.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">Languages:{repo.language}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}



/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


// export default function UserRepos() {
//   const [repos, setRepos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const username = "example-user";
//   const token = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;

//   useEffect(() => {
//     async function fetchUserRepos() {
//       try {
//         const response = await fetch(
//           `https://api.github.com/users/${username}/repos`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch user repositories");
//         }
//         const data = await response.json();
//         setRepos(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     fetchUserRepos();
//   }, [username, token]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>User Repositories:</h2>
//       <ul>
//         {repos.map((repo) => (
//           <li key={repo.id}>
//             <a href={repo.html_url}>{repo.name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

