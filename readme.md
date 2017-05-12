# GA CFU Web API (codename: TBD)

Express server supporting a realtime check for understanding app.

## Set Up

### Sequelize

The app uses Postgres and Sequelize as an ORM. Migrations, Seeds, and DB config are managed by an executable [sequelize-cli](https://github.com/sequelize/cli) which is a dependency of the project and can be run locally or installed globally and run without the path to the local module. Checkout [this blog post](http://mherman.org/blog/2015/10/22/node-postgres-sequelize) and/or [part 1 of this tutorial](https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1) for more examples of how `sequelize-cli` works.

Also checkout [this example express app](https://github.com/sequelize/express-example).

`sequelize-cli` is configured in `.sequelizerc` and related files are kept in `js/db`. You need a postgresql server running locally (checkout [Postgres.app](http://postgresapp.com/)) with a database `cfu_development` (can use `createdb cfu_development` from the command line). Next run migrations using sequelize-cli:

> use command `sequelize` if package installed globally and `node_modules/.bin/sequelize` if just locally

```shell
$ sequelize db:migrate

Sequelize [Node: 7.9.0, CLI: 2.7.0, ORM: 3.30.4]

Loaded configuration file "js/db/config/config.json".
Using environment "development".
== 20170511233928-create-cfus: migrating =======
== 20170511233928-create-cfus: migrated (0.022s)
== 20170512003243-create-cfuscores: migrating =======
== 20170512003243-create-cfuscores: migrated (0.018s)
```

Models are defined in `js/db/models`. New models can be created with migrations using `sequelize-cli` as described by [scotch.io](https://scotch.io/tutorials/creating-an-angularjs-application-with-sequelize-part-1#toc-creating-our-first-model-and-migration). Checkout the semantics of the command with `sequelize help:model:create`. 


## Express
