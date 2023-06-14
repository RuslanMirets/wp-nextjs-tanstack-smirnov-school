export interface IUser {
	user: {
		id: string;
		userId: string;
		firstName: string;
		lastName: string;
		username: string;
		email: string;
		avatar: {
			url: string;
		};
		roles: {
			nodes: [
				{
					name: string;
				},
			];
		};
	};
}
