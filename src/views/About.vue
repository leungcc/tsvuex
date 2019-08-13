<template>
  <div class="about">
    <el-button size="small">测试ElementUI</el-button>
    <div>{{ count }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { Component } from 'vue-property-decorator';


interface IStaff {
  name: string,
  age: number,
  beginTime: string,
  endTime: string
}


@Component({
  name: 'About',
  mixins: [],
  components: {},
  computed: {
    ...mapState({
      count: state => state.staff.count
    })
  }
})
export default class extends Vue {
  private staff: Array<IStaff> = [];
  
}
</script>
