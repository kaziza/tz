new Vue({

	el: "#app",
	data: {
		newItemName: '',
		newItemDesc: '',
		newItemImg: '',
		newItemPrice: 0,
		formValid: (this.newItemName && this.newItemImg),
		sortBy: 'default',
		items: [
			{
				name: 'ccccccc',
				desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
				img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
				price: 300000
			},
			{
			name: 'aaaa',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10000
		},
		{
			name: 'bbbb',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 200000
		},
		
		// {
		// 	name: 'Наименование товара',
		// 	desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		// 	img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
		// 	price: 10000
		// },
		// {
		// 	name: 'Наименование товара',
		// 	desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		// 	img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
		// 	price: 10000
		// },
		// {
		// 	name: 'Наименование товара',
		// 	desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		// 	img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
		// 	price: 10000
		// },
		// {
		// 	name: 'Наименование товара',
		// 	desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
		// 	img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
		// 	price: 10000
		// }
		],
		computed: {
			sortedByMin: function() {
			  function compare(a, b) {
				if (a.price < b.price)
				  return -1;
				if (a.price > b.price)
				  return 1;
				return 0;
			  }
		
			  return this.items.sort(compare);
			},
			sortedByMax: function() {
				function compare(a, b) {
				  if (a.price > b.price)
					return -1;
				  if (a.price < b.price)
					return 1;
				  return 0;
				}
		  
				return this.items.sort(compare);
			},
			sortedByName: function() {
				function compare(a, b) {
				  if (a.name < b.name)
					return -1;
				  if (a.name > b.name)
					return 1;
				  return 0;
				}
		  
				return this.items.sort(compare);
			}
		},
		sortOptions: [
			{ value: 'default', text: 'По умолчанию' },
			{ value: 'byMin', text: 'По цене min (от меньшего к большему)' },
			{ value: 'byMax', text: 'По цене max (от большего к меньшему)' },
			{ value: 'byName', text: 'По наименованию' } 
		]
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
		},
		sortItems() {
			switch(this.sortBy) {
				case 'byMin': 
				  	return this.items.sort(byMin);
				case 'byMax':
				  	return this.items.sort(byMax);
				case 'byName':
					function compare(b, a) {
						if (a.name > b.name) return -1;
						return 0;
					}
				  	return this.items.sort(compare);
				default:
					return this.items;

			}
		}
	}
})

byMin = (a, b) => parseFloat(a.price) - parseFloat(b.price);
byMax = (b, a) => parseFloat(a.price) - parseFloat(b.price);
