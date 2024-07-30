import React, { useEffect, useState } from "react";
import BottomNav from "../components/bottom_nav";
import BlogItem from "../components/blog_item";
import SearchAppBar from "../components/app_bar";
import { useData } from "../DataContext";

function Blog() {
    const { fetchBlogArticles } = useData();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            try {
                const fetchedBlogs = await fetchBlogArticles();
                setBlogs(fetchedBlogs);
            } catch (error) {
                console.error("Error loading blogs: ", error);
            } finally {
                setLoading(false);
            }
        };
        loadBlogs();
    }, [fetchBlogArticles]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <SearchAppBar/>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <BlogItem
                        key={blog.id} // Ensure you include a unique key prop
                        id={blog.id}
                        title={blog.title} 
                        altText={blog.altText}
                        imageUrl={blog.image} 
                        description={blog.description} 
                        isLast={blogs.indexOf(blog) === blogs.length - 1}
                    />
                ))
            ) : (
                <div>No blogs available</div> // Handle case when no blogs are available
            )}
            <BottomNav/>
        </div>
    );
}

export default Blog;
