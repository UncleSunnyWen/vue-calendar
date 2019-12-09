<template>
  <div class="body">
    <Calendar
      :default-date="defaultDatetime"
      :is-show-week-view="true"
      :mark-date="markDate"
      @confirm="dateConfirm"
    ></Calendar>
  </div>
</template>

<script>
export default {
  name: "demo",
  data() {
    return {
      defaultDatetime: new Date(),
      markDate: [
        "2020/1/2",
        "2019/12/9",
        {
          color: "red",
          date: [
            "0",
            "2019/02/25",
            "2019/03/25",
            "2019/04/25",
            "2019/05/25",
            "2019/06/25",
            "2019/07/25",
            "2019/08/25",
            "2019/09/25",
            "2019/10/25",
            "2019/11/25",
            "2019/12/25"
          ]
        },
        {
          color: "blue",
          date: [
            "2019/01/20",
            "2019/02/20",
            "2019/03/20",
            "2019/04/20",
            "2019/05/20",
            "2019/06/20",
            "2019/07/20",
            "2019/08/20",
            "2019/09/20",
            "2019/10/20",
            "2019/11/20",
            "2019/12/20"
          ]
        },
        {
          color: "orange",
          date: [
            "2019/01/12",
            "2019/02/12",
            "2019/03/12",
            "2019/04/12",
            "2019/05/12",
            "2019/06/12",
            "2019/07/12",
            "2019/08/12",
            "2019/09/12",
            "2019/10/12",
            "2019/11/12",
            "2019/12/12"
          ]
        },
        {
          color: "black",
          date: [
            "2019/01/29",
            "2019/02/29",
            "2019/03/29",
            "2019/04/29",
            "2019/05/29",
            "2019/06/29",
            "2019/07/29",
            "2019/08/29",
            "2019/09/29",
            "2019/10/29",
            "2019/11/29",
            "2019/12/29"
          ]
        }
      ] //对象数组形式的标记日期，可以自定义标记颜色
    };
  },
  methods: {
    dateConfirm(date) {
      console.log(new Date(date.year, date.month, date.day), "confirm");
    }
  }
};
</script>

<style lang="stylus">
@import './components/vue-calendar/style/reset.styl';
</style>
