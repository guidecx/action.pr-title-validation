import * as core from '@actions/core';
import * as github from '@actions/github';

const prTitleRegex = /(chore|feat|feature|bug|fix|hotfix|revert)\([0-9]+\): [/' A-z 0-9]+/gim;

const passMessage = 'Thank you for the nice PR title!';
const failMessage =
  '❌  Your PR title fails GCX standards, please refer to the company engineering standards for PR titles found at https://GCX-standards-doc-here/';

async function run() {
  // const title = github.context.payload.pull_request.title;
  const title = 'chore(12345): testing the title';
  const titlePasses = prTitleRegex.test(title);

  if (titlePasses) {
    core.info(passMessage);
  } else {
    core.setFailed(failMessage);
  }
}

run();
