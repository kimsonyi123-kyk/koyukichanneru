OML2D.loadOml2d({
  dockedPosition: "left",
  models: [
    {
      path: "/models/miku25/21miku_night_3.0_f_t01.model3.json",
      scale: 0.1,
      position: [0, 100],
      stageStyle: {
        height: 480,
		width: 270
      }
    }
  ],
  tips: {
    idleTips: {
      interval: 15000,
      message: [
        "ご主人様、まだ帰りませんか？", // 主人，还不回去吗？
        "退屈ですね...",             // 好无聊啊...
        "お疲れ様です！",             // 辛苦了！
        "このブログ、素敵ですね！"      // 这个博客真棒！
      ]
    },
    welcomeTips: {
      message: {
        "morning": "おはようございます！今日も一日頑張りましょう！", 
        "noon": "こんにちは！お昼ご飯は食べましたか？",
        "afternoon": "こんにちは！午後もファイトです！",
		"evening": "こんばんは！もうすっかり暗くなりましたね。",
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