import CpfField from './CpfField.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Fields/CpfField',
  component: CpfField,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
		value:{control:{type: [String, Number], description:"teste"}},
		masked:{control:{type: Boolean, default: false}}
  },
};


// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CpfField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<cpf-field v-bind="args" />',
});


export const Default = Template.bind({});
Default.args = {
	value:"11111111111",
};