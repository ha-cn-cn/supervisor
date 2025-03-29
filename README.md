# 替换为国内源 Supervisor
支持无损切换，不会损坏您的任何数据 可以通过在HAOS shell中直接运行以下命令
```shell
cd /mnt/data/
curl -sSL https://os-artifacts.smart-assistant.cn/ha -o ha && sh ha
```
# [📚 文档](DOCS.md)
# Home Assistant Supervisor

## 第一个用于家庭自动化的私有云解决方案

Home Assistant (前 Hass.io) 是一个基于容器的系统，用于管理您的 Home Assistant核心安装及相关应用该系统是 通过与主管沟通的家庭助理控制。的 Supervisor提供了一个API来管理安装。这包括更改 网络设置或安装和更新软件。

## 安装

安装说明可在 https://home-assistant.io/getting-started.

## 发展

对于小的更改和错误修复，您可以遵循这一点，但对于重大更改，请首先打开RFC。 可以找到开发说明 [在这里][development].

## 发布

发布是在3个阶段 (channels) 完成此结构:

1. 拉取请求将合并到`main`分支。
2. 新的生成被推送到`dev`阶段。
3. 发布版本。
4. 新的生成被推送到`beta`阶段。
5. 的 [`stable.json`][stable] 文件已更新。
6. 被推送到的构建`beta`现在将被推送到`stable`。

[development]: https://developers.home-assistant.io/docs/supervisor/development
[stable]: https://github.com/home-assistant/version/blob/master/stable.json

[![Home Assistant - A project from the Open Home Foundation](https://www.openhomefoundation.org/badges/home-assistant.png)](https://www.openhomefoundation.org/)
