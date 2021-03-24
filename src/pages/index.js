import { graphql, Link } from 'gatsby';
import React from 'react';

const IndexPage = ({
  data: {
    allMdx: { nodes }
  }
}) => {
  return (
    <main>
      <h1>Index Page</h1>
      <h2>Option A</h2>
      <p>"to" is created using "articlePath"</p>
      <ul>
        {nodes.map((node) => {
          const { id, frontmatter, articlePath } = node;
          return (
            <li key={id}>
              <Link to={articlePath}>{frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
      <hr />
      <h2>Option B</h2>
      <p>"to" is created using "frontmatter.blog/slug"</p>
      <ul>
        {nodes.map((node) => {
          const { id, slug, frontmatter } = node;
          return (
            <li key={id}>
              <Link to={`${frontmatter.blog}/${slug}`}>
                {frontmatter.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        id
        slug
        frontmatter {
          title
          blog
        }
        articlePath: gatsbyPath(filePath: "/{mdx.frontmatter__blog}/{mdx.slug}")
      }
    }
  }
`;

export default IndexPage;
