# waline-tscf-starter

[waline-tscf](https://github.com/abiscuitx/waline-tscf)的腾讯云SCF快速部署模板。

> waline-tscf：一个基于 [Waline](https://github.com/walinejs/waline) 的评论系统，专为 [腾讯云函数 SCF](https://cloud.tencent.com/product/scf) 部署场景优化，增强后端性能，优化个人博客的前端样式。

## 主要特性

- 前端：admin/client
  - 样式定制：更改默认主题，定制个人博客样式
- 后端：server
  - SCF支持：适配腾讯云[Serverless应用中心](https://cloud.tencent.com/product/scf)运行环境，提供快速部署模板
  - 功能增强：优化注册登录及邮件通知逻辑，支持通过环境变量输出多维度日志记录
  - 隐私保护：针对QQ邮箱头像获取，采用AES-256-GCM加密(需部署[waline-tscf-avatar服务](https://github.com/abiscuitx/waline-tscf-avatar))
  - 性能优化：通过依赖懒加载提升冷启动速度，结合缓存与map策略优化热启动性能
  - 资源加速：采用 jsDelivr 提供CDN加速，针对性优化MongoDB的连接性能

## 快速部署

### 方法一：CLI快速部署

待完善

### 方法二：控制台创建

待完善

### 配置

关于Waline更多的配置项，可查看 [服务端配置](https://waline.js.org/reference/server.html)。


## SCF VS TCB

> Waline官方：支持[腾讯云开发CloudBase](https://waline.js.org/guide/deploy/cloudbase.html)部署，包月套餐计费，目前月费最低19.9原价39.9。
> Waline-tscf：支持[腾讯云Serverless应用中心](https://cloud.tencent.com/product/sls)部署，按需计费，费用更低。

|服务名称|**Serverless应用中心**|云开发CloudBase|
|---|:---:|:---:|
|官方分类|计算-Serverless|开发运维-低代码平台|
|官方说明| Serverless应用开发管理平台<br>提供云函数、COS、DB等资源的快速部署配置。|云原生一体化开发环境和工具平台<br>包含计算、存储、托管等 Serverless 化能力。|
|差异分析|联动腾讯云函数、COS等，简化相关云产品的配置部署流程，计费规则详见[产品概述](https://cloud.tencent.com/document/product/1154/38787)。|独立一体化的云开发环境，与同类腾讯云产品的功能特性不相通，计费规则详见[产品概述](https://cloud.tencent.com/document/product/876/18431)。
|免费计划<br>(新用户)|**云函数：3个月标准版/高级版**（二选一,不包含web函数响应流量计费）<br>**COS：6个月50GB标准存储容量包**（不包含请求、外网下行流量费用）|**个人版环境：1个月**体验权益（超出套餐配额当月可按量付费或升配）


## 配置与性能费用分析
> 仅供参考，记录时长均为测试最大值，未包含网络延时，腾讯云SCF网络响应在200ms左右。

|配置内存<br>（SCF）|冷启动时长<br>（Waline）|冷启动时长<br>（waline-tscf）|热启动时长<br>（Waline）|热启动时长<br>（waline-tscf）|费用分析<br>（waline-tscf）|
|---|:---:|:---:|:---:|:---:|:---:|
|128MB|32537ms|31245ms|3977ms|4-15ms|3.7|
|256MB|17579m|16715ms|3413ms|4-11ms|3.8|
|384MB|14334ms|10963ms|2743ms|4-11ms|4.1|
|512MB|12043ms|8418ms|2474ms|4-10ms|4.0|
|640MB|11008ms|7614ms|2362ms|4-10ms||
|768MB|10829ms|7146ms|2178ms|4-9ms||
|896MB|7051ms|6923ms|2105ms|4-8ms||
|1024MB|6288ms|5610ms|2011ms|4-7ms|5.7|

## 参考

- [Waline 文档](https://waline.js.org)
- [Serverless 应用中心](https://cloud.tencent.com/document/product/1154/38787)