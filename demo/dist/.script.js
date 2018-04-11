const search = instantsearch({
  appId: 'O3F8QXYK6R',
  apiKey: '6a027258345c8a569385505b041e6dec',
  indexName: 'superheroes'
});

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: "Search for superheroes"
  })
);

search.addWidget(
  instantsearch.widgets.hits({
    container: '#results',
    templates : {
      empty: "No results found",
      item: function(hit) {
        const name = hit._highlightResult.name.value;
        return `<div>${name}</div>`
      }
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#powers',
    attributeName: 'powers'
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#teams',
    attributeName: 'teams'
  })
);

search.start();
