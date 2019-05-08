## TODO

- Custom folder titles
- other styling
- clean out article obj after search if not moved
  to a folder.  if article (id) not in folder-2 or folder-3 after search... then remove from articles

- search results issue
  1) searchResults an array of article objects
  2) update searchResults when articles moved FROM folder-1
  2a) prevent moving of files back to search bar
  3) next and previous buttons check searchResults for next/prev 4 article ids
  (if >0 and <4 next or prev available, populate with next or prev + articles on current page
  to make a list of 4 or max possible if less than 4)



- encapsulate populateSearchResults(searchTerm) <- which would include the wiki fetch
and navigateSearchResults(next,prev) in separate functions.

## CONCERNS

- Currently, articles are added to this.state.articles each time the search results page advances.  This poses a problem when loading the previous page.  May be better to load all search results into this.state.articles and then have this.state.folders.articleIds updated with ids of viewable articles for the current page.  Would be more in line with dnd docs....


