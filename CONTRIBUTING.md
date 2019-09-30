# Contributing Guide to `react-topbar-progress-indicator`

<!--
In case of copy/paste, remember to update:
- https://github.com/MoOx/react-topbar-progress-indicator
- react-topbar-progress-indicator
-->

We love your input! We want to make contributing to this project as easy and
transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

We use GitHub to

- host code
- track issues and feature requests
- accept pull requests.
- tag & publish release as well as pushing those to npm.

## Reporting bugs or requesting a feature

We use GitHub issues to track public bugs or discuss about new features. Please
write bug reports or feature requests with detail, background, and sample code
if necessary.

Just try to
[open a new issue](https://github.com/MoOx/react-topbar-progress-indicator/issues/new/choose)
& follow the instructions that should be prefilled for
[bug](.github/ISSUE_TEMPLATE/bug.md) or
[feature request](.github/ISSUE_TEMPLATE/feature.md).

People _love_ thorough bug reports. Not even kidding.

## Fixing bugs & implementing features

We use [Github flow](https://guides.github.com/introduction/flow/index.html), so
most code changes happen through Pull Requests.

[Pull Requests](https://help.github.com/en/articles/about-pull-requests) are the
best way to propose changes to the codebase since they notify watchers & allow
contributors to discuss about changes.

We actively welcome your pull requests.

To make a pull request, you need to:

1. [Fork the repo](https://help.github.com/en/articles/fork-a-repo)
2. Clone it and install dependencies

```console
git clone https://github.com/MoOx/react-topbar-progress-indicator
cd react-native
yarn
```

3. Create a local branch, from `master` (unless specified differently)

```console
git checkout -b <name-of-your-branch>
```

4. Add your changes!

- If you've added code that should be tested, add tests.
- If you've changed APIs, update the documentation.

5. Ensure the everything is still fine.

```console
yarn test
```

6. Commit & push your branch online

```console
git add -A .
git commit -m "Your commit message"
```

7. [Create a pull request](https://help.github.com/en/articles/creating-a-pull-request)

_If you are new to Git or GitHub, we encourage you to have a look to
[makeapullrequest.com](http://makeapullrequest.com)._

## Code styling

Everything as been automated: as soon as you commit, everything should be
automatically reformated if necessary (thanks to a transparent git hook) so we
don't have to think about it!

## Licensing

By contributing, you agree that your contributions will be licensed under our
MIT License.

When you submit code changes, your submissions are understood to be under the
same [MIT License](./LICENSE) that covers the project. Feel free to contact the
maintainers if that's a concern.
