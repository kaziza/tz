new Vue({

	el: "#app",
	data: {
		newItemName: '',
		newItemDesc: '',
		newItemImg: '',
		newItemPrice: '',
		formValid: (this.newItemName && this.newItemImg),
		sortBy: 'default',
		errors: [],
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
			name: 'zz',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 10
		},
		{
			name: 'dfgdf',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 2
		},
		{
			name: 'qqq',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 300000
		},
		{
			name: 'gghk',
			desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
			img: 'https://www.bhphotovideo.com/images/images2500x2500/fujifilm_x100v_digital_camera_silver_1542675.jpg',
			price: 4545
		}],
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
				img: this.newItemImg,
				price: this.newItemPrice
			})
			this.newItemName = '',
			this.newItemDesc = '',
			this.newItemImg = '',
			this.newItemPrice = ''
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
		},
		validateName(e){ 
			if ( e.target.value.length <= 0) {
				this.errors['name'] = 'Поле является обязательным'; 
				e.target.className += " warningOutline";
			}
			else {
				this.errors['name'] = ''; 
				e.target.className -= " warningOutline";	
			}
		},
		validateImg(e){ 
			if(e.target.value.length <= 0) {
				this.errors['img'] = 'Поле является обязательным';
				e.target.className += " warningOutline";
			}
			else {
				this.errors['img'] = '';
				e.target.className -= " warningOutline";
			}
		},
		validatePrice(e){ 
			console.log(e)
			if(parseInt(e.target.valueAsNumber) <= 0) {
				this.errors['price'] = 'Поле является обязательным'; 
				e.target.className += ' warningOutline';
			}
			else {
				this.errors['price'] = ''; 
				e.target.className -= ' warningOutline';
			}
		},
		
	}
})

byMin = (a, b) => parseFloat(a.price) - parseFloat(b.price);
byMax = (b, a) => parseFloat(a.price) - parseFloat(b.price);
