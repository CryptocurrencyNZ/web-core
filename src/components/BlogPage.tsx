import { FC } from 'react'
import { useParams } from 'react-router-dom'

const sampleBlogs = {
    "understanding-crypto-wallets": {
        title: "Understanding Crypto Wallets",
        date: "February 19, 2025",
        authors: [
            { name: "Harry Satoshi", avatar: `${import.meta.env.BASE_URL}images/avatars/Harry.jpeg` }
        ],
        coverImage: `${import.meta.env.BASE_URL}images/BlogPlaceHolder.webp`,
        content: `
            <p>Crypto wallets are essential tools for managing your digital assets. A wallet allows you to store, send, and receive cryptocurrencies securely.</p>
            <h2>Types of Crypto Wallets</h2>
            <ul>
                <li><strong>Hot Wallets</strong> - Connected to the internet.</li>
                <li><strong>Cold Wallets</strong> - Stored offline for security.</li>
            </ul>
            <p>Choosing the right wallet depends on security needs and usability.</p>`
    }
}

const BlogPage: FC = () => {
    const { slug } = useParams<{ slug: string }>()
    const blog = sampleBlogs[slug as keyof typeof sampleBlogs]

    if (!blog) {
        return <div className="text-center text-white py-10">Blog not found.</div>
    }

    return (
        <div className="w-full bg-black text-gray-300">
            {/* Hero Section with Background Image */}
            <div
                className="relative w-full h-[35vh] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${blog.coverImage})` }}
            >
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
                <div className="relative z-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">{blog.title}</h1>
                    <p className="text-gray-300 text-lg mt-2">{blog.date}</p>

                    {/* Author Section */}
                    <div className="flex justify-center items-center mt-4 gap-4">
                        {blog.authors.map((author, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <img
                                    src={author.avatar}
                                    alt={author.name}
                                    className="w-12 h-12 rounded-full border border-gray-500"
                                />
                                <span className="text-white text-lg">{author.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="max-w-3xl mx-auto px-6 py-12">
                <article className="prose prose-invert max-w-none leading-relaxed text-lg">
                    <p dangerouslySetInnerHTML={{ __html: blog.content }} />
                </article>
            </div>
        </div>
    )
}

export default BlogPage