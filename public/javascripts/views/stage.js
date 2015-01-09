var StageView = Backbone.View.extend({
	el: $('#stage'),
	template: _.template($('#stage-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});

console.log('StageView');