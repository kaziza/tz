new Vue({

	el: "#app",
	data: {
		newItemName: '',
		newItemDesc: '',
		newItemImg: '',
		newItemPrice: 0,
		formValid: (this.newItemName && this.newItemImg),
		items: [{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'Наименование товара',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		}]
	},

	methods: {
		addNewItem() {
			this.items.push({
				name: this.newItemName,
				desc: this.newItemDesc,
				img: this.newItemImg || "https://www.goancuisine.com.au/wp-content/uploads/2017/05/holdee.jpg",
				price: this.newItemPrice || 0
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

