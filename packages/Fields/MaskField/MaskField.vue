<template>
	<v-text-field type="text" :value="display" v-bind="$attrs" v-mask="config" v-on="cmpListeners" @input="onInput" @paste="paste" />
</template>

<script>
	import { mask, tokens } from "vue-the-mask";
	import masker from "vue-the-mask/src/masker.js";
	import { VTextField } from 'vuetify/lib'

	export default {
		name:"MaskField",
		components:{ VTextField },
		props: {
			value: String,
			mask: {
				type: [String, Array],
				required: true
			},
			masked: {
				// by default emits the value unformatted, change to true to format with the mask
				type: Boolean,
				default: false // raw
			},
			tokens: {
				type: Object,
				default: () => tokens
			}
		},
		directives: { mask },
		data() {
			return {
				lastValue: null //
			};
		},
		watch: {
			masked() {
				this.refresh(this.display);
			}
		},
		computed: {
			cmpListeners() {
				let listeners = {};
				Object.assign(listeners, this.$listeners);
				delete listeners.input;
				return listeners;
			},
			config() {
				return {
					mask: this.mask,
					tokens: this.tokens,
					masked: this.masked
				};
			},
			display() {
				return masker(this.value, this.mask, true, this.tokens);
			}
		},
		mounted() {
			var value = masker(this.value, this.mask, this.masked, this.tokens);
			if (value != this.value) {
				this.$emit("input", value);
			}
		},
		methods: {
			onInput(value) {
				this.refresh(value);
			},
			paste: function(e) {
				let clipboardData = e.clipboardData || window.clipboardData;
				let pastedData = clipboardData.getData("Text");
				let newValue = this.refresh(pastedData);
				if (newValue === this.value) {
					e.preventDefault();
					return;
				}
				this.$emit("input", newValue);
			},
			refresh(newValue) {
				var value = masker(newValue, this.mask, this.masked, this.tokens);
				if (value !== this.lastValue) {
					this.lastValue = value;
					this.$emit("input", value);
				}
			}
		}
	}
</script>

<style>

</style>