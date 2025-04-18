// 全局常量配置

const PROXY_URL = 'https://api.codetabs.com/v1/proxy?quest=';
// https://crossorigin.me/
// https://cors-proxy.htmldriven.com/?url=
// http://alloworigin.com/get?url=
// https://api.allorigins.win/get?url=
const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 网站信息配置
const SITE_CONFIG = {
    name: '躺平放映厅',
    url: 'https://tv.eve.cc',
    description: '专治各种不想动的观影强迫症患者',
    logo: 'https://images.icon-icons.com/38/PNG/512/retrotv_5520.png',
    version: '1.0.0'
};

// API站点配置
const API_SITES = {
    heimuer: {
        api: 'https://json.heimuer.xyz',
        name: 'https://json.heimuer.xyz',
        detail: 'https://heimuer.tv'
    },
    ffzy: {
        api: 'http://ffzy5.tv',
        name: 'http://ffzy5.tv',
        detail: 'http://ffzy5.tv'
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        name: 'https://tyyszy.com',
    },
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'https://www.ckzy1.com',
        adult: true
    },
    zy360: {
        api: 'https://360zy.com',
        name: 'https://360zy.com',
    },
    wolong: {
        api: 'https://wolongzyw.com',
        name: 'https://wolongzyw.com',
    },
    cjhw: {
        api: 'https://cjhwba.com',
        name: 'https://cjhwba.com',
    },
    hwba: {
        api: 'https://cjwba.com',
        name: 'https://cjwba.com',
    },
    jisu: {
        api: 'https://jszyapi.com',
        name: 'https://jszyapi.com',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.com',
        name: 'https://dbzy.com',
    },
    bfzy: {
        api: 'https://bfzyapi.com',
        name: 'https://bfzyapi.com',
    },
    mozhua: {
        api: 'https://mozhuazy.com',
        name: 'https://mozhuazy.com',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com',
        name: 'https://www.mdzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com',
        name: 'https://cj.rycjapi.com',
    },
    
    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'https://jkunzyapi.com',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com',
        name: 'https://api.bwzym3u8.com',
        adult: true
    }
};

// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 修改搜索接口为返回更多详细数据（包括视频封面、简介和播放列表）
        path: '/api.php/provide/vod/?ac=videolist&wd=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 修改详情接口也使用videolist接口，但是通过ID查询，减少请求次数
        path: '/api.php/provide/vod/?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    allowedApiDomains: [        // 允许的API域名
        'heimuer.xyz',
        'ffzy5.tv'
    ]
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult'  // 用于标记成人内容的属性名
};

// 新增隐藏内置黄色采集站API的变量，默认为true
const HIDE_BUILTIN_ADULT_APIS = true;
