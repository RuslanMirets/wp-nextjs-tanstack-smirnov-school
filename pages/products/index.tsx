import { withCSR } from "@/src/HOC/with-CSR";
import Products from "@/src/screens/products/Products";
import { ProductService } from "@/src/services/product.service";
import Container from "@/src/ui/container/Container";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = withCSR(async () => {
	const queryClient = new QueryClient();

	await queryClient.fetchQuery(["products"], ProductService.getAll);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
});

const ProductsPage = () => {
	return <Products />;
};

export default ProductsPage;
