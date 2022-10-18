import MaskField from './MaskField.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Fields/MaskField',
  component: MaskField,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
		value:{control:{type: [String, Number]}},
		mask:{control:{type: [String, Array]}},
		masked:{control:{type: Boolean, default: false}}
  },
};


// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MaskField },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<mask-field v-bind="args" />',
});


export const Default = Template.bind({});
Default.args = {
	mask:"###.##-##",
	value:"1111111",
};