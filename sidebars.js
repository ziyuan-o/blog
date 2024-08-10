/*
 * @Author: XJN
 * @Date: 2023-07-02 09:37:16
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2024-01-19 17:17:12
 * @FilePath: \blog\sidebars.js
 * @Description: 
 * @前端实习生：资源挖掘博客: 
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  skill: [
    'skill/introduction',
    {
      label: 'HTML与CSS',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/HTML与CSS/html',
        'skill/HTML与CSS/css',
        'skill/HTML与CSS/screen',
        'skill/HTML与CSS/skill',
        'skill/HTML与CSS/canvas'
      ],
    },
    {
      label: 'JavaScript',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/JavaScript/javascript1',
        'skill/JavaScript/javascript2',
        'skill/JavaScript/javascript3',
        'skill/JavaScript/javascript4',
        'skill/JavaScript/javascripttip'
      ],
    },
    {
      label: 'Vue',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/Vue/vue2'
      ],
    },
    {
      label: 'React',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/React/react',
        'skill/React/reacthooks',
        'skill/React/reactwebsite',
        'skill/React/tsreact',
        'skill/React/reactuse',
      ],
    },
    {
      label: 'Node',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/Node/node',
        'skill/Node/nodesql',
        'skill/Node/nodeuse',
        'skill/Node/nestjs',
        'skill/Node/nestjsbefore'
      ],
    },
    {
      label: 'TypeScript',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/TypeScript/typescript'
      ],
    },
    {
      label: '微信小程序',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/微信小程序/wechat1',
        'skill/微信小程序/wechat2',
        'skill/微信小程序/wechat3',
      ],
    },
    {
      label: 'Uniapp',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/Uniapp/uniapp'
      ],
    },
    {
      label: '数据结构与算法',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/数据结构与算法/build',
        'skill/数据结构与算法/count',
        'skill/数据结构与算法/leetcode',
      ],
    },
    {
      label: '前端工程化',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/前端工程化/frontendEngineering',
        'skill/前端工程化/webpack',
        'skill/前端工程化/gitgithub',
        'skill/前端工程化/usegit',
        'skill/前端工程化/gitcommit',
      ],
    },
    {
      label: '力扣算法',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/力扣算法/algorithmbefore',
        'skill/力扣算法/algorithmarr',
      ],
    },
    {
      label: '抓住小细节',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'skill/抓住小细节/detail',
        'skill/抓住小细节/detailhtmlcss',
        'skill/抓住小细节/detailjs',
        'skill/抓住小细节/detailreact',
        'skill/抓住小细节/detailvue',
        'skill/抓住小细节/detailnode',
        'skill/抓住小细节/detailts',
        'skill/抓住小细节/detailllqyl',
        'skill/抓住小细节/detailwl',
        'skill/抓住小细节/detailbc',
      ],
    }
  ],
  thing: [
    'thing/introduction',
    {
      label: 'HTML与CSS',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'thing/HTML与CSS/threecolumn',
      ],
    },
    {
      label: 'JavaScript',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'thing/JavaScript/console',
        'thing/JavaScript/eventLoop',
        'thing/JavaScript/lightDeppCopy',
        'thing/JavaScript/jsRunPrinciple',
        'thing/JavaScript/scope',
        'thing/JavaScript/closure',
        'thing/JavaScript/setTimeout',
        'thing/JavaScript/noconsole',
        'thing/JavaScript/sessionStorage',
        'thing/JavaScript/jslanguagedesign',
      ],
    },
    {
      label: 'React',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'thing/React/reactstate',
        'thing/React/setreact',
        'thing/React/removeeffect',
        'thing/React/build-your-own-react',
      ],
    },
    {
      label: 'Node',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'thing/Node/commonjsnode',
      ],
    },
    {
      label: '前端工程化',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'thing/前端工程化/dependencies',
      ],
    },
    {
      label: '网络',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'thing/网络/inputUrlHappen',
        'thing/网络/inputUrlHappenAdd',
        'thing/网络/websocket',
        'thing/网络/networkModel',
        'thing/网络/httpsencryption',
        'thing/网络/websafe',
      ],
    },
  ],
  use: [
    'use/introduction',
    {
      label: '工具',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'use/tool/windowcmd',
        'use/tool/yalc',
        'use/tool/xswitch',
        'use/tool/release-it',
        'use/tool/mvn',
        'use/tool/delete_node_modules',
        'use/tool/markdown',
        'use/tool/gitee',
      ],
    },
    {
      label: '技术',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'use/technology/bigfile',
        'use/technology/tsaxios',
        'use/technology/qiankun',
      ],
    },
    {
      label: '其他',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'use/other/cli',
        'use/other/scpsh',
        'use/other/projectUbun',
        'use/other/hexo',
        'use/other/ubuntusetvue',
        'use/other/useubuntu',
        'use/other/googletoolsipload',
      ],
    },
    {
      label: '开发纪录',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'use/开发纪录/whaledevfrontend',
        'use/开发纪录/whaledevbackEnd',
      ],
    },
  ],
  hobby: [
    'hobby/introduction',
    {
      label: '摄影',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'hobby/摄影/studyphotography',
        'hobby/摄影/studyphoto',
      ],
    },
    {
      label: '旅行',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'hobby/旅行/travel',
      ],
    },
  ],
  summarize: [
    'summarize/introduction',
    {
      label: '2023',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'summarize/2023/frondstudy21',
      ],
    },
  ],
  办公专区:{
    前言: ["办公专区/办公专区-intro"],
    windows软件: ["办公专区/windows软件/pdf-BatchUnlock",
                  "办公专区/windows软件/aardio",
                  "办公专区/windows软件/WiseCare365Pro",
                  "办公专区/windows软件/Escrcpy",
                  "办公专区/windows软件/jihe-gj",
                  "办公专区/windows软件/uTorrentPRO",
                  "办公专区/windows软件/DriverTalentPro",
                  "办公专区/windows软件/xiake-vieo",
                  "办公专区/windows软件/SandboxiePlus",
                  "办公专区/windows软件/AnyDesk",
                  "办公专区/windows软件/qudong-360",
                  "办公专区/windows软件/GihosoftTubeGetPro",
                  "办公专区/windows软件/Inpaint-10.2",
                  "办公专区/windows软件/Bandizip-6.25",
                  "办公专区/windows软件/XMind2024",
                  "办公专区/windows软件/PlayerFab-7.0.4.5",
                  "办公专区/windows软件/SPlayer-2.0.9",
                  "办公专区/windows软件/Office2024LTSC",
                  "办公专区/windows软件/LKYOfficeTools-1.3.0.223",
                  "办公专区/windows软件/Bandicam-7.1.1.2158",
                  "办公专区/windows软件/AdvancedSystemCare",
                  "办公专区/windows软件/xianyi-ps",
                  "办公专区/windows软件/FrpcDesktop",
                  "办公专区/windows软件/雷电模拟器",
    ],
    安卓软件: ["办公专区/安卓软件/jingmo",
              "办公专区/安卓软件/jizhi",
              "办公专区/安卓软件/che",
              "办公专区/安卓软件/es-4.4.2.11",
              "办公专区/安卓软件/nika",
              "办公专区/安卓软件/bilimiao",
              "办公专区/安卓软件/GKD-1.8.0",
              "办公专区/安卓软件/youlanqi-x",
              "办公专区/安卓软件/IDphoto",
              "办公专区/安卓软件/yuyan",
              "办公专区/安卓软件/Flix",
              "办公专区/安卓软件/wifi-key",
              "办公专区/安卓软件/纤云护眼",
              "办公专区/安卓软件/畅片",
],
TV应用: ["办公专区/TV应用/BBLL",
        "办公专区/TV应用/BesTV",
        "办公专区/TV应用/book-tin",
  
],
windows系统: ["办公专区/windows系统/Windows11-game",
             "办公专区/windows系统/Windows10-game",
             "办公专区/windows系统/Windows11-mei",

],
  },
  赚钱资源:{
    前言: ["赚钱资源/赚钱资源-intro"],
    网盘专区: ["赚钱资源/网盘专区/yunpan-money",
              "赚钱资源/网盘专区/wenjian-chuan",
              "赚钱资源/网盘专区/yunpan-guanfang",
              "赚钱资源/网盘专区/yunpan-sousuo",
              "赚钱资源/网盘专区/yunpan-shequ",
              "赚钱资源/网盘专区/yunpan-root",
              "赚钱资源/网盘专区/rentuiban",
    ],
    网赚缩址: ["赚钱资源/suozhi-money"],
    调查任务: ["赚钱资源/diaocha-money"],
    威客众包: ["赚钱资源/weike-zhongbao"],
  },
  区块链专区: {
    前言: ["区块链专区/区块链专区-intro"],
    区块链百科: ["区块链专区/qukuail-baike"],
    兑换平台: ["区块链专区/兑换平台/atchange"],
    区块链钱包: ["区块链专区/区块链钱包/huobi-app",
                "区块链专区/区块链钱包/ouyi-app",
                "区块链专区/区块链钱包/bi-an--app",
    ],
  },
  学习专区:{
    前言: ["学习专区/学习专区-intro"],
    link3: ["学习专区/自建网站/link3/link3-js",
           "学习专区/自建网站/link3/link3-zc"
    ],
    python: ["学习专区/python/python-intro"]
  },
  营销专区:{
    前言: ["营销专区/营销专区-intro"],
    知乎: ["营销专区/知乎/zhihu-intro"],
    微博: ["营销专区/微博/weibo-intro"],
  },
  
  

}

module.exports = sidebars
