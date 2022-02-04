export interface LoginResponse {
	id: number;
	device_id: string;
	token: string;
	name: string;
	phone: string;
	email?: any;
	photo: string;
	balance: number;
	date: string;
	gender: boolean;
}

export interface RegisterData {
	code: string;
	token: string;
}

export interface RegisterResponse {
	data: RegisterData;
}

export interface RegisterErrors {
	phone: string[];
}

export interface RegisterResponseErrors {
	errors: RegisterErrors;
}

export interface Brand {
	id: number;
	name: string;
	description: string;
	photo: string;
}

export interface Category {
	id?: number;
	name?: string;
	description?: string;
	photo?: string;
}

export interface ProductItemResponse {
	id: number;
	name: string;
	price: number;
	price_old: number;
	discount?: any;
	brand: Brand;
	category: Category;
	views: number;
	rating: number;
	photo: string;
}

export interface Self {
	href: string;
}

export interface First {
	href: string;
}

export interface Last {
	href: string;
}

export interface Links {
	self: Self;
	first: First;
	last: Last;
}

export interface Meta {
	totalCount: number;
	pageCount: number;
	currentPage: number;
	perPage: number;
}

export interface BaseResponse<T> {
	data: T[];
	_links: Links;
	_meta: Meta;
}

export interface NewsItemResponse {
	id: number;
	name: string;
	description_mini: string;
	views: number;
	photo: string;
	date: string;
}
