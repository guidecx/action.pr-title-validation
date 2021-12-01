import * as core from '@actions/core';
import * as github from '@actions/github';

const prTitleRegex = /(chore|feat|feature|bug|fix|hotfix|revert)\([0-9]+\): [/'\- A-z 0-9]+/gim;

const passMessage = '✅ Thank you for the nice PR title!';
const failMessage =
  '❌ Your PR title should resemble `type(story-number): short subject line` - see https://github.com/guidecx/action.pr-title-validation/blob/master/README.md';

async function run() {
  core.info(github.context.payload);
  const title = github.context.payload.pull_request.title;
  const titlePasses = prTitleRegex.test(title);

  if (titlePasses) {
    core.info(passMessage);
  } else {
    core.setFailed(failMessage);
  }
}

run();
