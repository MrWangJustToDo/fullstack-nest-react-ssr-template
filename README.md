# fullstack react ssr template

## all write by typescript

current project have three part of logic

1. `src/app`, the frontend app, just like `Next.js`, base on the [react-ssr-template](https://github.com/MrWangJustToDo/react-ssr-setup), also support `dev-server`/`middleware` develop, hot reload, dynamic page router and so on
2. `src/build`, the build script witch use for frontend app, help to build `dev/prod` frontend app
3. `src/server`, the backend server, use `NestJs` so you can do what ever you want.

## use

1. install
```shell
pnpm install
```

2. for dev
```shell
pnpm run start:dev
```

3. for build
```shell
pnpm run build
```

4. for prod
```shell
pnpm run start:prod
```

you can visit the .env file, ssr is support by default, or you can just use csr by set en variable.

more about this project, you can see the source code of just ask me for help ^_^ ! 