module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('.nojekyll');
  eleventyConfig.addFilter('isoDate', (value) => {
    const parsed = new Date(value);
    return Number.isNaN(parsed.getTime()) ? '' : parsed.toISOString().slice(0, 10);
  });
  eleventyConfig.addFilter('formatDate', (value) => {
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(parsed);
  });

  // Keep documentation and starter templates out of the published site.
  eleventyConfig.ignores.add('docs/**');
  eleventyConfig.ignores.add('templates/**');
  eleventyConfig.ignores.add('README.md');
  eleventyConfig.ignores.add('knowledge/README.md');

  // Markdown is private-by-default: only notes with `publish: true` render.
  // Eleventy already maps Markdown files to clean directory URLs from their paths.
  eleventyConfig.addPreprocessor('exclude-unpublished-markdown', 'md', (data) => {
    if (data.publish !== true) return false;
  });

  eleventyConfig.addCollection('publishedNotes', (collectionApi) =>
    collectionApi.getAll()
      .filter((item) => item.inputPath.endsWith('.md') && item.data.publish === true)
      .sort((a, b) => new Date(b.data.date || 0) - new Date(a.data.date || 0))
  );

  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
  };
};
