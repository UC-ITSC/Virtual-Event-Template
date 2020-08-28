import path from 'path';
import axios from 'axios';

// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, `src`, `index.tsx`),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
    );
    return [
      {
        children: posts.map((post) => ({
          getData: () => ({
            post,
          }),
          path: `/post/${post.id}`,
          template: `src/containers/Post`,
        })),
        getData: () => ({
          posts,
        }),
        path: `/blog`,
      },
    ];
  },
  plugins: [
    `react-static-plugin-typescript`,
    [
      require.resolve(`react-static-plugin-source-filesystem`),
      {
        location: path.resolve(`./src/pages`),
      },
    ],
    require.resolve(`react-static-plugin-sass`),
    require.resolve(`react-static-plugin-reach-router`),
    require.resolve(`react-static-plugin-sitemap`),
  ],
};
