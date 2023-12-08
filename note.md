# 静态网站托管

## 1. 什么是静态网站托管

静态网站托管（Static Website Hosting）是指将网站文件（HTML、CSS、JavaScript、图片等）存储在服务器上，并提供访问服务的网站服务。

## 2. 静态网站托管的优势

- 免费：静态网站托管服务免费，不需要支付任何费用。

## github 静态托管

github pages 是 github 提供的静态托管服务，可以直接在 github 上托管静态网站。

GH-Pages

简单介绍一下 Github Pages 。这是一项 Github 推出的免费服务（对私有仓库是收费的）。只要通过一些简单的规则，你就可以为托管在 Github 的项目创建在线页面。

Github Pages 分为「个人/组织页面」以及「项目页面」两种，前者用于展示个人信息，适用于个人主页、简历或博客。后种可以用来介绍项目，提供文档，或展示 Demo 等。

Personal Page

假设你有一个 github 帐号， 如果你想要创建个人页面， 只需要创建一个仓库：<https://github.com/jingjignshenye/blog.github.io> 然后提交静态页面到该仓库的 master 分支下。

所有的内容都会被托管到这个地址：<https://jingjignshenye.github.io> （建议开启强制 https）

Project Page
如果你有一个项目：<https://jingjingshenye.github.io/blog/> ， 则有几种方式可以使用 GH-Pages 托管面页：

直接使用 master 分支，常用于静态 Web 项目；

可以在项目的 master 分支下创建一个 /doc 目录，将静态页面放在该目录，常用于文档；

或创始一个 gh-pages 分支，将静态页面放在根目录，常用于静态生成博客；

### vite.config.js

要生成可以托管的静态网站，该位置文件里添加`base`这个选项

```js
module.exports = {
  base: "/blog/",
};
```

windows 下运行命令`"deploy": "powershell bin/deploy.bat"`，可以推送到远程仓库

bat 脚本如下

```bat
call yarn build

cd dist

git init
git add -A
git commit -m "auto construct blog"

@REM  git push [远程库名] [本地分支名]:[远程分支名]
@REM git push -f https://github.com/jingjingshenye/vitepress-blog.git master:gh-pages
git push -f https://github.com/jingjingshenye/canvas-blog.git master:gh-pages
```

编译后的文件需要推送到仓库的 gh-pages 分支。

```bash
git add.
git commit -m "commit message"
git push origin gh-pages
```

### 1. 注册 github 账号

注册 github 账号，如果没有账号，可以直接注册一个。

### 2. 创建仓库

点击右上角的+号，选择 New repository，输入仓库名称，并选择公开。

### 3. 克隆仓库

在终端中，输入以下命令克隆仓库：

```bash
git clone https://github.com/username/repository_name.git
```

### 4. 上传文件

将文件上传到仓库的根目录下，然后通过 git 命令将文件提交到仓库。

```bash
git add.
git commit -m "first commit"
git push -u origin master
```

### 5. 访问网站

在浏览器中输入仓库的网址，就可以看到托管的网站了。
