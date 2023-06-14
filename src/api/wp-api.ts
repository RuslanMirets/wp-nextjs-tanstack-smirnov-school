import axios from "axios";

// export const fetchData = async (query: string) => {
// 	const headers = { "Content-Type": "application/json" };

// 	const response = await fetch(`${process.env.WORDPRESS_API_URL}/graphql`, {
// 		next: { revalidate: 60 },
// 		headers,
// 		method: "POST",
// 		body: JSON.stringify({
// 			query,
// 		}),
// 	});

// 	const json = await response.json();

// 	return json.data;
// };

export const fetchData = async (query: string) => {
	const response = await axios.request({
		method: "POST",
		url: `${process.env.WORDPRESS_API_URL}/graphql`,
		headers: { "Content-Type": "application/json" },
		data: { query: query },
	});

	return response.data;
};
