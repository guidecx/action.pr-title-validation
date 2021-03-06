# GuideCX pr-title-validation

### This action checks that our PR titles meet our guidelines

Our PR Title guidelines are simple - `type(story-number): the subject line`

- Type - should be one of ` chore | feat | feature | bug | fix | hotfix | revert `.
- Story Number - The parens with a ShortCut story number followed by a colon.
- Subject - the short subject line of the pull request. It can include the following special characters: `, . _ - / ' "`

If you wish to push up "work in progress" code that you don't want to merge yet, you will need to create a draft PR instead so that the PR title validation will pass regardless of your PR title.

### Contribution notes:

The action needs Node.js to run but checking in your node_modules directory can cause problems. As an alternative we use a tool called @vercel/ncc to compile our code and modules into one file used for distribution.
You'll notice that our entry point is `dist/index.js` instead of just the root index file so, when you make changes, just be sure to run `npm run build` so that the `dist/index.js` file is updated accordingly.

License: MIT
Copyright (c) 2021 GuideCX
