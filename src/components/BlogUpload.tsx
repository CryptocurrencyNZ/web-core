import { FC, useState } from 'react'

const BlogUpload: FC = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [authors, setAuthors] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const blogPost = {
            title,
            date,
            authors: authors.split(',').map((author) => author.trim()),
            content
        }

        console.log('New Blog Post:', blogPost)
        alert('Blog submitted successfully! (Console log for now)')

        // Here you would send the data to a backend API (POST request)
    }

    return (
        <div className="max-w-3xl mx-auto py-12 px-6 text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Upload a Blog Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm mb-1">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 bg-gray-900 border border-gray-800 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-2 bg-gray-900 border border-gray-800 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Author(s) (comma-separated)</label>
                    <input
                        type="text"
                        value={authors}
                        onChange={(e) => setAuthors(e.target.value)}
                        className="w-full p-2 bg-gray-900 border border-gray-800 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Content (HTML allowed)</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-2 bg-gray-900 border border-gray-800 rounded h-40"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-black py-2 rounded font-medium hover:bg-green-600 transition"
                >
                    Submit Blog Post
                </button>
            </form>
        </div>
    )
}

export default BlogUpload