import { graphql, Link } from 'gatsby';
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const MdxPage = ({
  data: {
    mdx: {
      frontmatter: { title, blog },
      body
    }
  }
}) => {
  return (
    <main>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <p>blog name: {blog}</p>
      <MDXProvider>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </main>
  );
};

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        blog
      }
      body
    }
  }
`;

export default MdxPage;
