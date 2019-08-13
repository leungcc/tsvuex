// vuex Module-员工
import Vuex from 'vuex';
import { Store, StoreOptions, ActionContext, Module } from 'vuex/types';
import { IRootState } from '@/plugin/store';


// staff 的state类型
export interface IStateStaff {
  count: number;
  deptCount: number
}



const ModuleStaff: Module<IStateStaff, IRootState> = {
  namespaced: true,
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
    addStaff({ commit }: ActionContext<IStateStaff, IRootState>) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment');
        })
      })
    }
  }
}

export default ModuleStaff;