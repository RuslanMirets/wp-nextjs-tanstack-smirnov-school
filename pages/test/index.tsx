import Layout from "@/src/components/Layout";
import PostsList from "@/src/components/posts-list/PostsList";
import { PostService } from "@/src/services/post.service";
import { IPostPreview } from "@/src/types/post.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSideProps } from "next";
import React from "react";

const TestPage = () => {
	const { data, isLoading } = useQuery(["posts-test"], PostService.getAll);

	const posts: IPostPreview[] = data?.data.posts.nodes;

	return (
		<Layout title="Тест">
			<Container>
				<Heading>Тест</Heading>
				{isLoading ? <div>Loading...</div> : <PostsList posts={posts} />}
			</Container>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.fetchQuery(["posts-test"], PostService.getAll);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

export default TestPage;
