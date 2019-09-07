module.exports = {
    title: 'MiniCHN',
    description: '迷你中华',
    dest: './dist',
    port: '7777',
	base: '/documents/',
    head: [
        ['link', {rel: 'icon', href: '/img/favicon.ico'}],
		['link', {rel: 'stylesheet', href: '/css/style.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: require("./nav.js"),
        sidebar: require("./sidebar.js"),
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}