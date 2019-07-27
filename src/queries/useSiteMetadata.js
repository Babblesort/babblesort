import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteDefaultPage {
      site {
        siteMetadata {
          title
          description
          author
          defaultPage
        }
      }
    }
  `);

  return site.siteMetadata;
};
