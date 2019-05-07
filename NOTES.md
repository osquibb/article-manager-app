## TODO

- Custom folder titles
- other styling
- clean out article obj after search if not moved
  to a folder.  if article (id) not in folder-2 or folder-3 after search... then remove from articles
- handle less than 4 results in folder
- back button
- forward + back button hide if no more results available

## CONCERNS

- Currently, articles are added to this.state.articles each time the search results page advances.  This poses a problem when loading the previous page.  May be better to load all search results into this.state.articles and then have this.state.folders.articleIds updated with ids of viewable articles for the current page.  Would be more in line with dnd docs....


