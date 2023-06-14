import { IPostPreview } from "@/src/types/post.interface";
import Image from "next/image";
import Link from "next/link";
import styles from "./PostPreview.module.scss";

type Props = {
	post: IPostPreview;
};

const PostPreview = ({ post }: Props) => {
	return (
		<Link className={styles.root} href={`/blog/${post.slug}`}>
			{post.featuredImage ? (
				<Image
					className={styles.image}
					src={post.featuredImage.node.sourceUrl}
					width={300}
					height={300}
					alt={post.title}
					priority={true}
				/>
			) : (
				<Image
					className={styles.image}
					src="/img/default.jpg"
					width={300}
					height={300}
					alt={post.title}
					priority={true}
				/>
			)}
			<div className={styles.content}>
				<div className={styles.title}>{post.title}</div>
			</div>
		</Link>
	);
};

export default PostPreview;
