import Layout from "@/src/components/Layout";
import { IPost } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import styles from "./Post.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PostService } from "@/src/services/post.service";
import QueryLog from "@/src/components/query-log/QueryLog";

const Post = () => {
	const { query } = useRouter();

	const { data, isLoading } = useQuery(["post", query.slug], () =>
		PostService.getBySlug(query.slug as string),
	);

	const post: IPost = data?.data.post;
	const queryCount = data?.extensions.queryLog.queryCount;
	const totalTime = data?.extensions.queryLog.totalTime;

	return (
		<Layout title={post?.title || ""}>
			<Container>
				{isLoading ? (
					<div>Loader...</div>
				) : (
					<>
						<QueryLog queryCount={queryCount} totalTime={totalTime} />
						<article>
							<Heading>{post.title}</Heading>
							<div
								className={styles.content}
								dangerouslySetInnerHTML={{ __html: post.content }}
							/>
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;
