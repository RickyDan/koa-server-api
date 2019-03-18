# koa-server-api

## 技术栈
-> koa2、koa-router、jwt、sequelize、koa-multer、pm2、sequelize

>  如果觉得不错的话，请star一下吧 😊

### 下载

```
# git clone

git clone git@github.com:RickyDan/koa-server-api.git

cd koa-server-api
```

### 安装运行

```
# npm intall & yarn install

# npm intall -g pm2 

# npm run pm2 & yarn pm2

pm2 启动后即可用postman等http测试工具访问接口

```

### 注意事项

克隆项目后，需要把config目录下的db配置改成自己的用户名和密码，并且要确认安装好 mysql 数据库
推荐使用 VsCode 编辑器，项目默认已经配置好 debug 相关的 config, 使用 VsCode 侧边栏的Debug
按钮点击即可进入debug模式。

### 目标功能

- [x] 登录注册功能
- [x] 用户相关接口
- [x] 权限判断
- [x] 商品相关接口
- [x] 订单相关接口
- [x] 图片上传功能
- [ ] 优化代码，规范化写法
- [ ] 优化数据库表相关的设计
- [ ] 编写测试
