// vuex Module-员工
import Vuex from 'vuex';
import { Store, StoreOptions, ActionContext, Module } from 'vuex/types';
import { IRootState } from '@/plugin/store';

export interface IStateSystem {
  count: number;
  deptCount: number
}


const ModuleSystem: Module<IStateSystem, IRootState> = {
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
    addStaff({ commit }: ActionContext<IStateSystem, IRootState>) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment');
        })
      })
    }
  }
}

export default ModuleSystem;