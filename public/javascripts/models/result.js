var Result = Backbone.Model.extend({
	defaults: {
		sex: '',
		hours: '',
		lbs: '',
		drinks: '',
		abv: '',
		bac: '',
		rate: ''
	},
	url: '/rounds',
});
