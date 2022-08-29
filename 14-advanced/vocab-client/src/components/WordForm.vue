<template>
	<form action="#" @submit.prevent="onSubmit">
		<p v-if="errorsPresent" class="error">Please fill out both fields</p>
		
		<div class="ui input label fluid">
			<div class="ui label">
				<i class="spain flag" /> Spanish
			</div>
			<input type="text" placeholder="Enter Spanish word..." v-model="word.spanish" />
		</div>

		<div class="ui input label fluid">
			<div class="ui label">
				<i class="united kingdom flag" /> English
			</div>
			<input type="text" placeholder="Enter English word..." v-model="word.english" />
		</div>

		<button class="positive ui button">Submit</button>
	</form>		
</template>

<script>
export default {
	name: 'word-form',
	props: {
		word: {
			type: Object,
			required: false,
			default: function () {
				return {
					english: '',
					spanish: ''
				};
			}
		}
	},
	data() {
		return {
			errorsPresent: false
		}
	},
	methods: {
		onSubmit: function () {
			if (this.word.english === '' || this.word.spanish === '') {
				this.errorsPresent = true;
			} else {
				this.$emit('createOrUpdate', this.word);
				this.errorsPresent = false;
			}
		}
	}
}
</script>

<style scoped>
.error {
	color: red;
}
</style>