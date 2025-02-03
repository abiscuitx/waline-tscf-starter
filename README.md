# [Waline-Tencentscf-starter](https://github.com/x/Waline-Tencentscf-starter)

[Waline](https://github.com/walinejs/waline)是一款基于 Valine 衍生的简洁、安全的评论系统。
本项目是部署到[腾讯云函数 SCF](https://cloud.tencent.com/product/scf)的函数示例。


## Serverless应用中心 VS 云开发CloudBase

> Waline官方也支持使用[腾讯云开发CloudBase](https://waline.js.org/guide/deploy/cloudbase.html)部署，包月套餐计费，目前月费最低19.9原价39.9。
> 本项目基于腾讯云[Serverless 应用中心](https://cloud.tencent.com/product/sls)快速部署云函数SCF，支持按需计费，费用更低。

|服务名称|**Serverless应用中心**|云开发CloudBase|
|---|:---:|:---:|
|官方分类|计算-Serverless|开发运维-低代码平台|
|官方说明| Serverless应用开发管理平台<br>提供云函数、COS、DB等资源的快速部署配置。|云原生一体化开发环境和工具平台<br>包含计算、存储、托管等 Serverless 化能力。|
|差异分析|联动相关腾讯云产品（云函数、COS等），简化配置部署流程。应用中心暂时免费，联动配置的腾讯云产品按计费规则收费，详见[产品概述](https://cloud.tencent.com/document/product/1154/38787)。|提供独立的一体化的云开发环境，与同类腾讯云产品（云函数、COS等）的控制台、功能特性、计费规则均不互通。本服务按包月套餐收费，详见[产品概述](https://cloud.tencent.com/document/product/876/18431)。
|免费计划<br>(新用户)|**云函数：3个月标准版/高级版**（二选一,不包含web函数响应流量计费）<br>**COS：6个月50GB标准存储容量包**（不包含请求、外网下行流量费用）|**个人版环境：1个月**体验权益（超出套餐配额当月可按量付费或升配）

## 部署

### 方法一：CLI快速部署

待完善

### 方法二：控制台创建

待完善

### 配置

关于Waline更多的配置项，可查看 [服务端配置](https://waline.js.org/reference/server.html)。

                                                                                                        ## 踩坑

                                                                                                        待完善



## 代码变更
1. 增加大量think.logger日志记录，通过
2. 懒加载
3. 通过缓存减少数据库查询，使用 Map 对象提供O(1)的查找性能
4. 预热加载Markdown解析器，采用依赖注入模式

## 性能优化
>当前数据均记录测试最大值，未包含请求网络延时。腾讯云 serverless 网络响应时长在200ms左右。

|配置内存<br>（≥128MB）|冷启动时长<br>（函数运行时间）|热启动时长<br>（复用实例）|
|---|:---:|:---:|
|128MB|32537ms（优化前）<br>31245ms（优化后）|3977ms（优化前）<br>6-40ms（优化后）|
|256MB|17579ms（优化前）<br>16715ms（优化后）|3413ms（优化前）<br>6-11ms（优化后）|
|384MB|14334ms（优化前）<br>10963ms（优化后）|2743ms（优化前）<br>5-11ms（优化后）|
|512MB|12043ms（优化前）<br>8418ms（优化后）|2474ms（优化前）<br>5-10ms（优化后）|
|640MB|11008ms（优化前）<br>7614ms（优化后）|2362ms（优化前）<br>5-10ms（优化后）|
|768MB|10829ms（优化前）<br>7146ms（优化后）|2178ms（优化前）<br>5-9ms（优化后）|
|896MB|7051ms（优化前）<br>6923ms（优化后）|2105ms（优化前）<br>5-8ms（优化后）|
|1024MB|6288ms（优化前）<br>5610ms（优化后）|2011ms（优化前）<br>4-7ms（优化后）|





## 费用分析
资源使用 0.00011108?/GBs
128MB 30347ms 3.5+20s+6.5s  128/1024*30347/1000=3.7
256MB 15201ms 1.5+9.5s+4s   256/1024*15201/1000=3.8
384MB 10986ms 1.0+6.5+2.5s  384/1024*10986/1000=4.1
512MB  7803ms 1.0+4.5+2.3s   512/1024*7803/1000=4.0
1024MB 5681ms 0.5+2.5+2.6s  1024/1024*5681/1000=5.7

## 参考

- [Waline 文档](https://waline.js.org)
- [Serverless 应用中心](https://cloud.tencent.com/document/product/1154/38787)