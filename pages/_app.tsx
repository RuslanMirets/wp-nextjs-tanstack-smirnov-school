import { queryClientConfig } from "@/src/config/query-client.config";
import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient(queryClientConfig));

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<ChakraProvider>
					<Component {...pageProps} />
					<ReactQueryDevtools initialIsOpen={false} />
				</ChakraProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}
