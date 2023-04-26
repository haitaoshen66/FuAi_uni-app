const app = getApp();
const mpserverless = app.mpserverless;
Page({
  data: {
    questionIndex: 0,
    question: '',
    options: [],
    selectedOptionIndex: null
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
    console.log(e.detail.value)
    this.setData({
      selectedOptionIndex: parseInt(e.detail.value)
    });
  },

  onNextQuestion: function() {
    if (this.data.selectedOptionIndex === null) {
      my.showToast({
        content: 'Please select an option'
      });
      return;
    }

    // TODO: Save answer to local array

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
      // TODO: save data
      
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
    }else{
    // TODO: Save final answer to local array

    my.navigateTo({
      url: '/pages/results/results'
    });
  }
}
});