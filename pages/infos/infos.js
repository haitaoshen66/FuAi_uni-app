Page({
  data: {
    gender: 'male',
    age: '',
    index:0,
    educationLevel:["高中", "大学", "研究生及以上"],
    educationLevels: [
      {
        id: 0,
        name: '高中',
      },
      {
        id: 1,
        name: '大学',
      },
      {
        id: 2,
        name: '研究生及以上',
      },
    ],
  },
  onLoad() {
  
  },
  inputChange(e) {
    console.log('input年龄改变为', e.detail.value);
    this.setData({
      age: e.detail.value
    })
  },
  radioChange(e) {
    console.log('radio性别改变为', e.detail.value);
    this.setData({
      gender: e.detail.value
    })
  },
  PickerChange(e) {
    console.log('picker教育水平改变为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },

  onSubmit(e) {
    const gender = this.data.gender
    const age = this.data.age
    const educationLevel = this.data.educationLevel[this.data.index]

    if (gender && age && educationLevel) {
      my.navigateTo({
        url: '/pages/questions/questions?gender=' + gender + '&age=' + age + '&educationLevel=' + educationLevel
      })
    } else {
      my.showToast({
        type: 'fail',
        content: 'Please fill out all fields',
        duration: 1500
      })
    }
  },
  onReset() {
    this.setData({
      index: 0,
    });
  },

  goPage(){
    my.navigateTo({
      url: '/pages/test/test'
    })
  }
})