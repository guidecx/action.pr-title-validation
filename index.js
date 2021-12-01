import * as core from '@actions/core';
import * as github from '@actions/github';

const prTitleRegex = /(chore|feat|feature|bug|fix|hotfix|revert)\([0-9]+\): [/'\- A-z 0-9]+/gim;

const passMessage = '✅ Thank you for the nice PR title!';
const failMessage =
  '❌ Your PR title should resemble `type(story-number): short subject line` - see https://github.com/guidecx/action.pr-title-validation/blob/master/README.md';

async function run() {
  console.log('draft:', JSON.stringify(github.context.payload.pull_request.draft, null, 2));
  console.log('title:', JSON.stringify(github.context.payload.pull_request.title, null, 2));
  let titlePasses;
  const { title, draft } = github.context.payload.pull_request;
  console.log('line 15 ~ draft:', draft);
  console.log('line 15 ~ title:', title);
  titlePasses = draft ? true : prTitleRegex.test(title);
  console.log('line 18 ~ titlePasses:', titlePasses);

  if (titlePasses) {
    core.info(passMessage);
  } else {
    core.setFailed(failMessage);
  }
}

run();
