const portfolioSorted = (collectionApi) => {
  return collectionApi.getFilteredByTag("portfolio").sort(function (a, b) {
    return a.data.title.localeCompare(b.data.title, undefined, {
      sensitivity: "base",
    });
  });
};

const expertiseSorted = (collectionApi) => {
  return collectionApi.getFilteredByTag("expertise").sort(function (a, b) {
    return a.data.eleventyNavigation.order - b.data.eleventyNavigation.order;
  });
}

const homeSorted = (collectionApi) => {
  return collectionApi.getFilteredByTag('home').sort(function (a, b) {
    return a.data.eleventyNavigation.order - b.data.eleventyNavigation.order;
  });
}

export default {
  portfolioSorted, expertiseSorted, homeSorted
};
