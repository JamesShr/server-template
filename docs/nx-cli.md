# Nx CLI

<p> use `--dry-run ` flag to check generate file path</p>
<p> ex : npx nx generate @server-template/plugins:template --name=mailer --no-interactive --dry-run </p>

### generate nest application (apps/**)

```shell=
npx nx generate @nx/nest:application --directory=apps/{name} --linter=eslint --name={name} --unitTestRunner=jest --no-interactive 
```

### generate library for nest library (libs/**)

```shell=
npx nx generate @nx/nest:library --directory=libs/{name} --linter=eslint --unitTestRunner=jest --importPath=@server-template/{name} --name={name} --no-interactive 
```

### generate library for js library  (libs/**)

```shell=
npx nx generate @nx/js:library --directory=libs/tools/generate-password --importPath=@server-template/tools-generate-password --name=generate-password --unitTestRunner=jest --no-interactive
```

## NestJS

### generate module

```shell=
npx nx generate @nx/nest:module --path=apps/{app-name}/src/modules/{name}/{name} --module={name} --no-interactive
```

### generate service 

```shell=
npx nx generate @nx/nest:service --path=apps/{app-name}/src/modules/{name}/{name} --no-interactive
```

### generate controller

```shell=
npx nx generate @nx/nest:controller --path=apps/{app-name}/src/modules/{name}/{name} --no-interactive
```

## Plugin

- install 
```
npm i @nx/plugin
```

### generate plugin

```
npx nx generate @nx/plugin:plugin --directory=plugins --name=plugins --no-interactive
```

### generate plugin generator

```shell=
npx nx generate @nx/plugin:generator --path=plugins/src/generators/{name}/{name} --name={name} --unitTestRunner=none --no-interactive
```

### use plugin cover application 

```
npx nx generate @server-template/plugins:{plugin-name} --name={app-name} --no-interactive
```

### remove apps or libs by workspace

```shell=
npx nx generate @nx/workspace:remove --projectName={name} --no-interactive 
```

## Operate 

### run build

```shell=
npx nx run @server-template/{name}:build
```

### run serve
```shell=
npx nx run @server-template/{name}:serve
```

### run all serve

```shell=
npx nx run-many --target=serve
```

## Test

### run test

```shell=
npx nx run {name}:test
```

### run all test

```shell=
npx nx run-many --all --target=test
```

## Prettier

### setup prettier

```shell=
npx nx generate @nx/js:setup-prettier --no-interactive
```

### run format check

```shell=
npx nx format:check --all
```

### run format write

```shell=
npx nx format:write --all
```

### 