# Spelschema.xyz

Visit the site at [spelschema.xyz](https://spelschema.xyz)!

## How to run Spelschema locally

Start of by cloning the repo to your local computer:

```
git clone https://github.com/Morkalork/spelschema.xyz.git
```

Then install the node modules required to run the project:

```node
npm install
```

To run it you need to start both a backend and a frontend server, run these two commands in two separate terminals:

```node
npm run server      // Start the backend
npm start          // Start the frontend
```

## Fork, fix, push?

_This is a little ~~helpful~~ guide if you haven't pushed fixes to a repo on Github before_

Would you like to push a fix/update/add to this repo? Then you first need to fork it! Do this by clicking the fork-icon (it also has some fork-text) in the upper right corner of this (Github) page!
Then choose where you want to fork it too (your user) and clone it to your computer.
Once you've cloned it, create a branch for your fix (like this: `git checkout -b morkalork/#22` where 'morkalork' is your username and '#22' is the 'name' of the issue you're fixing).

Once you've done your changes in the branch, add them and commit them and push them. Then go to the original spelschema.xyz repo on Github (ie not your fork) where you should now be alerted that you can create a Pull Request (PR). Follow the instructions and create the PR.

Remember that the following questions should be answered in a PR:

 * **What issue is this fixing? (if none, describe what you're fixing)**
 * **A screenshot of the fix (if visible)**
 * **Any implementation details that may be of use to the reviewer**
 
 _I would appreciate if you create an issue beforehand if what you're fixing/adding doesn't exist as an issue already_