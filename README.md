# fullstack react ssr template

## all write by typescript

a new version of template has coming, for now, the project have `backend`、`frontend`、`packages` three part of directories.

1. `backend`, a pure `NestJS` app, you can write all the `backend` code on this directory
2. `frontend`, a ssr template which from [`react-ssr-template`](https://github.com/MrWangJustToDo/react-ssr-setup)
3. `packages`, a directory can put all of the shared module

## use

1. install

```shell
pnpm install
```

2. prepare
```shell
pnpm run build:packages
```

2. for dev

```shell
pnpm run dev:backend;
pnpm run dev:frontend;
```

3. for build

```shell
pnpm run build:backend
pnpm run build:frontend / pnpm run build:frontend_static
```

4. for prod

```shell
pnpm run start:frontend
```

you can visit the .env file, ssr is support by default, or you can just use csr by set en variable.

more about this project, you can see the source code of just ask me for help ^\_^ !
