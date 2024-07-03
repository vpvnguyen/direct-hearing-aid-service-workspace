# direct-hearing-aid-service-workspace

## Yarn Workspaces

The project repo is the whole directory tree making up your workspaces. A workspace is a local package made up from your own sources from that same project.
Finally, a worktree is the name given to workspaces that list their own child workspaces. A project contains one or more worktrees, which may themselves contain any number of workspaces.

When using Yarn workspaces, all the dependencies listed in each workspace will be installed in the root directory, and the workspaces will retrieve information from there instead of retrieving from their local node_modules or cache.

## Init Workspace

In your root `package.json`, add a new field named `workspaces`:

```json
{
  "workspaces": ["packages/*"]
}
```

Create a `packages` folder

```
workspace/
├── packages/
│   ├── main/
│   │   └── package.json
|   |
│   ├── auth/
|   |   └── package.json
|   |
│   └── components/
│       └── package.json
|
└── package.json
```

Inside each workspace’s `package.json` describe its name and version.

```json
{
  "name": "@workspace/main",
  "version": "1.0.0"
}
```

## How to use code from other workspace

Say we want to use `@workspace/auth` code inside `@workspace/main`, we’ll have to declare `@workspace/auth` as a dependency.

```json
{
  "name": "@workspace/main",
  "version": "1.0.0",
  "dependencies": {
    "@workspace/auth": "workspace:*"
  }
}
```

## Adding dependencies and running commands to a specific workspace

To deal with specific workspaces in your project you don’t need to cd into the desired workspace and run a command, you can do this by running yarn workspace command.

```
yarn workspace @workspace/components add -D react
```

Will add react as a dependency in the components workspace.

You can use this to run any yarn command inside a workspace

```
yarn workspace @workspace/components run build
```

Remember that you must use the name listed in the workspace’s `package.json` attribute.

## How to run a command for each workspace

First, install workspace’s plugin

```
yarn plugin import workspace-tools
```

Then, you may be able to run the yarn workspace foreach command that runs the desired command inside each workspace of your project. For example, this will add React as a dependency in all our three workspaces.

```
yarn workspaces foreach add react
```

## Publishing your packages

When publishing, yarn will transform your package.json file depending on the ranges you set to each workspace: dependency.

So for example, if we assume we have the following workspaces whose current version is 1.5.0, the following:

```json
{
  "dependencies": {
    "star": "workspace:*",
    "caret": "workspace:^",
    "tilde": "workspace:~",
    "range": "workspace:^1.2.3",
    "path": "workspace:path/to/baz"
  }
}
```

Will be transformed into:

```json
{
  "dependencies": {
    "star": "1.5.0",
    "caret": "^1.5.0",
    "tilde": "~1.5.0",
    "range": "^1.2.3",
    "path": "1.5.0"
  }
}
```
