import React from 'react';
import Link from 'next/link';
import type PostType from '../interfaces/post';

interface myComponentProps {
    key: string
    blog: PostType
}

const BlogsListItem: React.FC<myComponentProps> = ({blog}) => {
  return (
    <li>
        <h2>{blog.title}</h2>
        <p>
            <Link
                href={{
                    pathname: blog.dynamicRoutingPath,
                }}
            >View
            </Link>
        </p>
    </li>
  );
};

export default BlogsListItem
