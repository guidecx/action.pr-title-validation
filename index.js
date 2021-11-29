import * as core from '@actions/core';
import * as github from '@actions/github';

const prTitleRegex = new RegExp(
  '(chore|feat|feature|bug|fix|hotfix|revert)(([0-9]+)): [A-z 0-9]+',
  'gmi'
);

async function run() {
  console.log('running test...');
  try {
    const title = github.context.payload.pull_request.title;

    const titleFailsCheck = prTitleRegex.test(title);
    if (titleFailsCheck) {
      throw Error(
        '❌  Your PR title fails GCX standards, please refer to the company engineering standards for PR titles found at https://GCX-standards-doc-here/'
      );
    }
    core.info('Thank you for the nice PR title!');
  } catch (error) {
    core.info(error);
  }
}

run();
