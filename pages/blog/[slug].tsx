import { withCSR } from "@/src/HOC/with-CSR";
import Post from "@/src/screens/post/Post";
import { PostService } from "@/src/services/post.service";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getServerSideProps: GetServerSideProps = withCSR(
	async (context: GetServerSidePropsContext) => {
		const slug = context.params?.slug as string;

		const queryClient = new QueryClient();

		await queryClient.fetchQuery(["post", slug], () =>
			PostService.getBySlug(slug),
		);

		return {
			props: {
				dehydratedState: dehydrate(queryClient),
			},
		};
	},
);

const PostPage = () => {
	return <Post />;
};

export default PostPage;
