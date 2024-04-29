const portfolioSorted = (collectionApi) => {
  return collectionApi.getFilteredByTag("portfolio").sort(function (a, b) {
    return a.data.title.localeCompare(b.data.title, undefined, {
      sensitivity: "base",
    });
  });
};

module.exports = {
  portfolioSorted,
};
