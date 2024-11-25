import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [user, setUser] = useState(null); 
    const [recentPosts, setRecentPosts] = useState<{ id: number; title: string; author: string; }[]>([]); 

    useEffect(() => {
        const fetchRecentPosts = async () => {
            const posts = [
                { id: 1, title: 'How to Build a Web App', author: 'Jane Doe' },
                { id: 2, title: 'Top 10 JavaScript Tricks', author: 'John Smith' },
            ];
            setRecentPosts(posts);
        };

        fetchRecentPosts();
    }, []);

    return (
        <div className="home-page">
            <header className="hero-section">
                <h1>Welcome to GeekBook!</h1>
                <p>Your hub for connecting and sharing knowledge.</p>
            </header>

            <div className="content-section">
                {user ? (
                    <>
                        <h2>Your Recent Activity</h2>
                        {/* Display user-specific content */}
                        <ul>
                            <li>You liked "React Basics" by Alex Doe</li>
                            <li>You bookmarked "CSS Flexbox Guide"</li>
                        </ul>
                    </>
                ) : (
                    <>
                        <h2>Recent Posts</h2>
                        <ul>
                            {recentPosts.map((post) => (
                                <li key={post.id}>
                                    <strong>{post.title}</strong> by {post.author}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>

            <footer className="footer">
                <p>GeekBook &copy; 2024</p>
            </footer>
        </div>
    );
};

export default Home;
