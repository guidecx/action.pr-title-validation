import * as core from '@actions/core';
import * as github from '@actions/github';

const prTitleRegex = /(chore|feat|feature|bug|fix|hotfix|revert)\([0-9]+\): [/'\- A-z 0-9]+/gim;

const draftMessage = 'PR title not relevant on Draft PRs';
const passMessage = '✅ Thank you for the nice PR title!';
const failMessage =
  '❌ Your PR title should resemble `type(story-number): short subject line` - see https://github.com/guidecx/action.pr-title-validation/blob/master/README.md';

async function run() {
  let titlePasses;

  const { title, draft } = github.context.payload.pull_request;

  titlePasses = draft ? true : prTitleRegex.test(title);

  if (titlePasses) {
    core.info(draft ? draftMessage : passMessage);
  } else {
    core.setFailed(failMessage);
  }
}

run();
