## TODO

- Custom folder titles
- other styling

- populate search results with 4 at all times (if possible, or all remaining in this.state.searchResults)

- separate syncSearchResultsFolder-1() function called on every componentDidUpdate??

- encapsulate populateSearchResults(searchTerm) <- which would include the wiki fetch
and navigateSearchResults(next,prev) in separate functions.

## CONCERNS

- Currently, articles are added to this.state.articles each time the search results page advances.  This poses a problem when loading the previous page.  May be better to load all search results into this.state.articles and then have this.state.folders.articleIds updated with ids of viewable articles for the current page.  Would be more in line with dnd docs....


