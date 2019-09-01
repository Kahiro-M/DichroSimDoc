module.exports = {
  title: 'DCDS Manual',
  description: '色弱色差シミュレータ説明書',
  // base: '/DichroSimDoc/',
  // dest: 'docs',
  themeConfig: {
    // logoのイメージファイルを参照させます。
    logo: 'icon.png',

    // ナビゲーションにコンテンツに加える内容を追加させます。
    nav: [
      { text: 'Home', link: '/' },
      { text: 'はじめに', link: '/contents/Introduction' }
    ],

    // サイドバーを追加します。
    sidebar: [
      '/',
      '/contents/Introduction',
      '/contents/About',
      '/contents/HowToUse',
      '/contents/Explanation',
      '/contents/SourceCode',
    ],
    // ヘディングタイトルを自動でサイドメニューに表示させます。
    displayAllHeaders: true,

    // h2までをサイドメニューに表示させます。
    sidebarDepth: 2
  }
}