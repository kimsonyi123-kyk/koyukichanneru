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
        "ご主人様、まだ帰りませんか？",
        "日本語の勉強、頑張ってください！",
        "このブログ、素敵ですね！"
      ]
    },
    welcomeTips: {
      message: {
        "morning": "おはようございます！", 
        "noon": "こんにちは！",
        "night": "こんばんは！"
      }
    }
  }
});