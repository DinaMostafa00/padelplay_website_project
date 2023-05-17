// import { getBlog } from "@/sanity/sanity-utils";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import blog from "@/sanity/schemas/blog-schema";

// export default async function Blog() {
//   const blog = await getBlog();

//   return (
//     <div>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blog.map((blog) => (
//           <Link
//             href={`/blog/${blog.slug}`}
//             key={blog._id}
//             className="border-2 border-yellow-500  p-1 hover:scale-105 hover:border-white transition"
//           >
//             {blog.image && (
//               <div>
//                 <Image
//                   src={blog.image}
//                   alt={blog.name}
//                   width={750}
//                   height={300}
//                   className="object-cover  "
//                 />
//               </div>
//             )}
//             <div className="">{blog.name}</div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

//////////////////////////

import { getBlog } from "@/sanity/sanity-utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function Blog() {
  const blogs = await getBlog();

  const latestBlog = blogs[0]; // Assuming the latest blog is the first item in the array

  const otherBlogs = blogs.slice(1); // Remove the latest blog from the array

  return (
    <div>
      <div className="flex justify-center py-20 hover:scale-105">
        <Link href={`/blog/${latestBlog.slug}`} key={latestBlog._id}>
          <div className="border-2 border-yellow-500  p-1 hover:scale-105 hover:border-white transition">
            {latestBlog.image && (
              <div className="relative">
                <Image
                  src={latestBlog.image}
                  alt={latestBlog.name}
                  width={750}
                  height={300}
                  className="object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full h-1/6 bg-black bg-opacity-50 text-white font-bold">
                  {latestBlog.name}
                </div>
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherBlogs.map((blog) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog._id}
            className="border-2 border-yellow-500 p-1 hover:scale-105 hover:border-white transition"
          >
            {blog.image && (
              <div>
                <Image
                  src={blog.image}
                  alt={blog.name}
                  width={750}
                  height={300}
                  className="object-cover"
                />
              </div>
            )}
            <div>{blog.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
