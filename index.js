import * as core from '@actions/core';
import * as github from '@actions/github';

const prTitleRegex = new RegExp(
  '(chore|feat|feature|bug|fix|hotfix|revert)(([0-9]+)): [A-z 0-9]+',
  'gmi'
);

async function run() {
  core.info('Running PR title check...');

  console.log('github.context: \n', JSON.stringify(github.context, null, 2));

  const title = github.context.payload.pull_request.title;

  core.info('PR title:', title);

  const titleFailsCheck = !prTitleRegex.test(title);

  if (titleFailsCheck) {
    core.error(
      '❌  Your PR title fails GCX standards, please refer to the company engineering standards for PR titles found at https://GCX-standards-doc-here/'
    );
  }

  core.info('Thank you for the nice PR title!');
}

run();
