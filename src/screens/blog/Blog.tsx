import Layout from "@/src/components/Layout";
import PostsList from "@/src/components/posts-list/PostsList";
import QueryLog from "@/src/components/query-log/QueryLog";
import { PostService } from "@/src/services/post.service";
import { IPostPreview } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
	const { data, isLoading } = useQuery(["posts"], PostService.getAll);

	const posts: IPostPreview[] = data?.data.posts.nodes;
	const queryCount = data?.extensions.queryLog.queryCount;
	const totalTime = data?.extensions.queryLog.totalTime;

	return (
		<Layout title="Блог">
			<Container>
				<Heading>Блог</Heading>
				{isLoading ? (
					<div>Loader...</div>
				) : (
					<>
						<QueryLog queryCount={queryCount} totalTime={totalTime} />
						<PostsList posts={posts} />
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Blog;
