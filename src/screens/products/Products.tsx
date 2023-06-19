import Layout from "@/src/components/Layout";
import ProductCard from "@/src/components/product-card/ProductCard";
import QueryLog from "@/src/components/query-log/QueryLog";
import { ProductService } from "@/src/services/product.service";
import { IProducts } from "@/src/types/product.interface";
import Container from "@/src/ui/container/Container";
import Heading from "@/src/ui/heading/Heading";
import { useQuery } from "@tanstack/react-query";

const Products = () => {
	const { data, isLoading } = useQuery(["products"], ProductService.getAll);

	const products: IProducts[] = data?.data.products.nodes;
	const queryCount = data?.extensions.queryLog.queryCount;
	const totalTime = data?.extensions.queryLog.totalTime;
	const graphqlSmartCache =
		data?.extensions.graphqlSmartCache.graphqlObjectCache.message;

	return (
		<Layout title="Товары">
			<Container>
				<Heading>Товары</Heading>
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<>
						<QueryLog
							queryCount={queryCount}
							totalTime={totalTime}
							graphqlSmartCache={graphqlSmartCache}
						/>
						<ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-xs mx-auto sm:max-w-none">
							{products.map((product) => (
								<li key={product.databaseId}>
									<ProductCard product={product} />
								</li>
							))}
						</ul>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Products;
