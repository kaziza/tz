new Vue({

	el: "#app",
	data: {
		newItemName: '',
		newItemDesc: '',
		newItemImg: '',
		newItemPrice: 0,
		items: []
	},

	methods: {
		addNewItem() {
			this.items.push({
				name: this.newItemName,
				desc: this.newItemDesc,
				img: this.newItemImg,
				price: this.newItemPrice
			})
			this.newItemName = '',
			this.newItemDesc = '',
			this.newItemImg = '',
			this.newItemPrice = 0
		},
		removeItem(index) {
			this.items.splice(index, 1)
		}
	}
})