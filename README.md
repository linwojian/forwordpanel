# 闲(的)蛋(疼)中转面板
一个轻量的中转面板, 一台面板管理多台中转机器, 实现出租, 限流, 转发等功能

介绍见wiki: https://github.com/xiaoli123/forwordpanel/wiki

基于Java编写的中转管理平台(中转面板)
使用的技术:
- springboot
- element-ui
- h2 

> 注意, 系统不必每个nat上都部署, 也不需要一定要部署在nat, 只要部署的机器能ssh上nat即可, 部署一套系统管理多个nat



## 主要功能
集中管理中转机器, 出租, 限流, 到期禁用等等, 具体见wiki:
https://github.com/xiaoli123/forwordpanel/wiki

## 使用方式
见wiki: https://github.com/xiaoli123/forwordpanel/wiki

一键安装脚本： bash <(wget --no-check-certificate -qO- 'https://sh.xdmb.xyz/xiandan/xd.sh')
(初始用户名密码：admin/admin)
