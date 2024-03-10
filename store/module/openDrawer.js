import { reactive } from 'vue';

export const openDrawer = reactive({
  status: false,
  toggle() {
    this.status = this.status === true ? false : true;
  },
});
