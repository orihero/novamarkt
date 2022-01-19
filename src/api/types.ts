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
}

export interface RegisterData {
	code: string;
	token: string;
}

export interface RegisterResponse {
	data: RegisterResponse;
}

export interface RegisterErrors {
	phone: string[];
}

export interface RegisterResponseErrors {
	errors: RegisterErrors;
}
