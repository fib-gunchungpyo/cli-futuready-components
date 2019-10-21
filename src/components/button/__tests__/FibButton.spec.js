import { mount } from '@vue/test-utils';
import FibButton from '@/components/button/FibButton.vue';

describe('FibButton.vue', () => {
  it('renders a button', () => {
    const wrapper = mount(FibButton);
    expect(wrapper.contains('button')).toBe(true);
  });

  it('renders a loading button', () => {
    const wrapper = mount(FibButton, {
      propsData: {
        loading: true
      }
    });

    expect(wrapper.classes('is-loading')).toBe(true);
  });
});
