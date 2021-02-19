export interface SearchBarAction {
	readonly type: 'search' | 'clear'
	readonly payload?: { name: string; value: string }
}

export interface SearchBarState {
	readonly name?: string
	readonly state?: string
	readonly county?: string
	readonly city?: string
}
