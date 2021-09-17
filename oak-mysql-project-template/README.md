# ROM-Framwork

for Rest Oak Mysql framwork
## features

-  quick start new oak project
-  MVC-like but don't use orm because orm not a enough stable now
-  django-apps-like each project is a collection of apps and  each app have
  standard structure <br>(see convention section for more info)
- respect DRY (Don't Repeat Yourself) approache as possible
- code written in typescript for deno runtime
- no magic, no experiment typescript  feature, just regular typescript code
- functional orientented programing, avoid class usage as possible
- generate some codes : new app ,new controller ...see https://rom-cli2gui.netlify.app/ for more<br>
(see structure conventions section and cli.ts convention section for more info)
- allow work in group, since we have clear structure
- focus on oak and mysql, it's poosible to create equivalent project for pg, mongodb ...
<hr>

>      I think is better to work with template for a specicific database than template that work for all database, for several raisons : 
>       some deno api not yet stable 
>       some of db drivers not yet stable 
>       deno orm not yet stable </br>
>       is more easy to get help (when blocking) for specific database than orm 

<hr>

## how to use ?
clone the repo

run the command 

open the url      in your browser

congratultion you will see hello word

for advanced usage continue reading this readme

<hr>

## structure conventions

- project is composed from multipl app, for example app-auth , app-todo,...
- each app is ts module
- each crud app have  structure like this

``` 
.
├── config
│   ├── cli.ts
│   ├── cli.txt
│   ├── db
│   │   ├── mysql.sql
│   │   ├── mysql.test.sql
│   │   └── sqlite.sql
│   ├── db.sql
│   ├── helper.ts
│   └── readme.md
├── controller
│   ├── index.Ctr.ts 
│   ├── taskAdd.Ctr.ts
│   ├── taskById.Ctr.ts
│   ├── taskDelete.Ctr.ts
│   ├── taskList.Ctr.ts
│   └── taskUpdate.Ctr.ts
├── deps-managed.ts
├── mod.ts
├── routes.ts
└── test
    ├── app.rest
    └── app.test.ts

``` 
- each project have structure look like this :

```
.
├── app-auth
├── appCli.ts
├── appTest.ts
├── app-todo
├── app.ts
├── cli
├── config
├── libs
├── middlwares
├── Procfile
├── README.md
├── runtime.txt
├── server
└── tests

```
<hr>

## middlwres conventions

- middlware code will be writen in middlwares folder
- middlweare to used befor each route will registered in server/add-middlares-befor.ts
- middlweare to used befor each route will registered in server/add-middlwares-after.ts

<hr>

## cli usage

this <br>
 https://rom-cli2gui.netlify.app/ <br>
 web site is cli doc and tool for generating and explain command  <br>
commands allow init db, starting dev server, generate crud app ...


<hr>
 

## questions

- Q: supported deno version ?
- R: > 1.13.1
<hr>

- Q: why --unstable flag in the cli ? <br>
- R: I use std/fs for copy past some directory, this module is'nt stable now.
<hr>

## feedback

all feedback are welcome, in english or in french I prefer

## oak-project-template dependecies

### deps

- deno 
- oak 
- std/flag 
- https://deno.land/x/cors@v1.2.2/mod.ts

### dev-deps

- nunjucks
- std/fs

## Change logs
 
