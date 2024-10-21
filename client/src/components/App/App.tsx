import { useEffect, useState } from "react";

import { Header } from "../Header/Header";
import { List } from "../List/List";

import type { Ilists } from "../../@types";

export function App() {
	const [lists, setLists] = useState<Ilists[]>([]);
	const [listsLoading, setListsLoading] = useState(false);

	useEffect(() => {
		const loadLists = async () => {
			try {
				const res = await fetch("http://localhost:3000/lists");
				const data = await res.json();

				const timeout = setTimeout(() => {
					setLists(data);
					setListsLoading(true);
				}, 500);

				return () => clearTimeout(timeout);
			} catch (error) {
				console.log(error);
			}
		};
		loadLists();
	}, []);

	return (
		<>
			<main className="m-24 max-w-full">
				<Header />
				<List lists={lists} listsLoading={listsLoading} />
			</main>
		</>
	);
}
