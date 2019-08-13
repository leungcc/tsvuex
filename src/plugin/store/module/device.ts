// vuex Module-员工
import Vuex from 'vuex';
import { Store, StoreOptions, ActionContext, Module } from 'vuex/types';
import { IRootState } from '@/plugin/store';

// staff 的state类型
type S = {
  count: number,
  deptCount: number
}


const ModuleDevice: Module<S, IRootState> = {
  state: {
    count: 10,
    deptCount: 12
  },
  mutations: {
    increment(state: any) {
      state.count++;
    }
  },
  actions: {
    addStaff({ commit }: ActionContext<S, IRootState>) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment');
        })
      })
    }
  }
}

export default ModuleDevice;