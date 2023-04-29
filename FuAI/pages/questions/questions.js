const app = getApp();
const mpserverless = app.mpserverless;
Page({
  data: {
    questionIndex: 0,

    question: '',
    options: [],
    correctOptionIndex: null,

    selectedOptionIndex: null,
    anwser:[],
    score:0
  },

  onLoad: function(options) {
    // Load questions from cloud database查询数据并保存
    mpserverless.db.collection('questions').findOne({
        questionIndex:this.data.questionIndex,
      }).then(res => { 
        this.setData({
          question: res.result.question,
          options: res.result.options,
          correctOptionIndex:res.result.correctOptionIndex
        })
      })
      .catch(console.error);
  },

  onSelectOption: function(e) {
    this.setData({
      selectedOptionIndex: e.detail.value
    });
  },

  onNextQuestion: function() {
    // 如果这题没选
    if (this.data.selectedOptionIndex === null) {
      my.showToast({
        content: 'Please select an option'
      });
      return;
    }

    // Save answer to local array
    const anwser = this.data.anwser;
    anwser.push(this.data.selectedOptionIndex);
    this.setData({
      anwser: anwser
    });
    //答对加分
    console.log(this.data.anwser[this.data.questionIndex])
    console.log(this.data.correctOptionIndex)
    if(this.data.anwser[this.data.questionIndex] === this.data.correctOptionIndex){
      this.setData({
        score: this.data.score + 1
      });
    }

    //最后一题
    if (this.data.questionIndex === 9) {
        my.showToast({
          type: 'fail',
          content: '已经是最后一题',
          duration: 3000,
        });
    } else {
      //恢复默认值
      this.setData({
        questionIndex: this.data.questionIndex + 1,
        selectedOptionIndex: null
      });
      //this.data.options[this.data.selectedOptionIndex].checked = null;

      
      // TODO: Load next question from cloud database
      mpserverless.db.collection('questions').findOne({
        questionIndex:this.data.questionIndex
      }).then(res => { 
        this.setData({
          question: res.result.question,
          options: res.result.options,
          correctOptionIndex:res.result.correctOptionIndex
        })
      })
      .catch(console.error);
    }
  },

  onSubmitAnswers () {
    if (this.data.selectedOptionIndex === null) {
      my.showToast({
        content: '请选择本题选项'
      });
      return;
    }
    // TODO: Save final anwser to cloud
    console.log(this.data.score);
    mpserverless.db.collection('answers').insertOne({
      score: this.data.score,
      answer: this.data.anwser
    })
    .then(res => {})
    .catch(console.error);

    if (this.data.questionIndex === 9) {
      my.navigateTo({
        url: '/pages/results/results'
      });
  }
}
});