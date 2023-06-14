export interface IPostPreview {
	databaseId: number;
	slug: string;
	title: string;
	excertp: string;
	featuredImage: {
		node: {
			sourceUrl: string;
		};
	};
	date: string;
}

export interface IPost extends IPostPreview {
	content: string;
}

export type PostPreviewType = {
	posts: IPostPreview[];
};

export type PostType = {
	post: IPost;
};
