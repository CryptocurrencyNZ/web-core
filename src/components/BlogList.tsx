import { FC } from 'react'
import { Link } from 'react-router-dom'

const blogs = [
    {
        title: "Understanding Crypto Wallets",
        date: "February 19, 2025",
        authors: ["John Doe"],
        slug: "understanding-crypto-wallets"
    },
    {
        title: "How to Buy Bitcoin in NZ",
        date: "January 10, 2025",
        authors: ["Jane Smith"],
        slug: "how-to-buy-bitcoin-nz"
    }
]

const BlogList: FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 px-6 text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Latest Blog Posts</h1>

            <ul className="space-y-6">
                {blogs.map((blog) => (
                    <li key={blog.slug} className="border-b border-gray-700 pb-4">
                        <Link to={`/web-core/blog/${blog.slug}`} className="text-xl text-green-400 hover:underline">
                            {blog.title}
                        </Link>
                        <p className="text-gray-400 text-sm">
                            {blog.date} • By {blog.authors.join(', ')}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BlogList