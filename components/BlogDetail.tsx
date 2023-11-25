import React from 'react';
import Link from 'next/link';
import type PostType from '../interfaces/post';

interface MyComponentProps {
    blog: PostType
}

const BlogDetail: React.FC<MyComponentProps> = ({blog}) => {
  return (
    <article>
    <li>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <button>
            <Link
                href={{
                    pathname: "/blogs",
                }}
            >
            Blogs
            </Link>
        </button>
    </li>
    </article>
  );
};

export default BlogDetail
