// 这里的代码是用来召唤“Pio”模型并配置日语台词的
OML2D.load({
  models: [
    {
      // 这里的模型可以换，目前用的是最经典的 Pio
      path: 'https://model.oml2d.com/Pio/model.json',
      scale: 0.4,
      position: [0, 60],
      stageStyle: {
        height: 300
      }
    }
  ],
  tips: {
    // 闲置时的台词
    idleTips: {
      interval: 15000,
      message: [
        "ご主人様、まだ帰りませんか？", // 主人，还不回去吗？
        "退屈ですね...",             // 好无聊啊...
        "お疲れ様です！",             // 辛苦了！
        "このブログ、素敵ですね！"      // 这个博客真棒！
      ]
    },
    // 欢迎台词（根据时间变化）
    welcomeTips: {
      message: {
        "morning": "おはようございます！今日も一日頑張りましょう！", 
        "noon": "こんにちは！お昼ご飯は食べましたか？",
        "afternoon": "こんにちは！午後もファイトです！",
        "night": "こんばんは！夜更かしは美容に悪いですよ？",
        "lateNight": "もうこんな時間...早く寝ましょう..."
      }
    },
    // 复制内容时的吐槽
    copyTips: {
      message: ["何かをコピーしましたね？覚えましたよ！"] 
    }
  }
});