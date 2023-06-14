import styles from "./PostsList.module.scss";
import { PostPreviewType } from "@/src/types/post.interface";
import PostPreview from "../post-preview/PostPreview";

const PostsList = ({ posts }: PostPreviewType) => {
	return (
		<ul className={styles.root}>
			{posts.map((post) => (
				<li key={post.databaseId}>
					<PostPreview post={post} />
				</li>
			))}
		</ul>
	);
};

export default PostsList;
