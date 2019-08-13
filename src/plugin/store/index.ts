import Vuex from 'vuex';
import Vue from 'vue';
import ModuleStaff, { IStateStaff } from './module/staff';
import ModuleDevice from './module/device';
import ModuleSystem from './module/system';
import { Store, StoreOptions, ActionContext, Module } from 'vuex/types';


Vue.use(Vuex);

export interface IRootState {
  staff: IStateStaff;//Module<any, any>
  //device: any;
  //system: any;
}

const store: Store<IRootState> = new Vuex.Store<IRootState>({
  modules: {
    staff: ModuleStaff,
    //device: ModuleDevice,
    //system: ModuleSystem
  }
})


export default store;