export const filteredObjectsList = (
	data: {
		id: string
		type: string
		name: string
		hours: {
			mon: { open: string; close: string }
			tue: { open: string; close: string }
			wed: { open: string; close: string }
			thu: { open: string; close: string }
			fri: { open: string; close: string }
			sat: { open: string; close: string }
			sun: { open: string; close: string }
		}
		address: {
			state: string
			county: string
			city: string
			zipCode: string
			street: string
		}
		www: string
		info: string
	}[],
	filterByName?: string,
	filterByState?: string,
	filterByCounty?: string,
	filterByCity?: string,
	filterByType?: string
) => {
	return data.filter(obj => {
		return (
			obj.name.toLowerCase().includes(filterByName!) &&
			obj.address.state.toLowerCase().includes(filterByState!) &&
			obj.address.county.toLowerCase().includes(filterByCounty!) &&
			obj.address.city.toLowerCase().includes(filterByCity!) &&
			obj.type.toLowerCase().includes(filterByType!)
		)
	})
}
