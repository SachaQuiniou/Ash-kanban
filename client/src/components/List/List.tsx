import type { Ilists } from "../../@types";

interface listProps {
	lists: Ilists[];
}

export function List({ lists }: listProps) {
	return (
		<section
			id="list-container"
			className="flex gap-2 flex-wrap mt-1 p-2 bg-primary rounded-md "
		>
			{lists.map((list) => (
				<div
					key={list.id}
					id="list"
					className="bg-list flex flex-col gap-4 p-4 w-96 rounded-md shadow shadow-secondary"
				>
					<div className="flex justify-between items-center">
						<h2 className="text-2xl text-secondary">{list.title}</h2>
						<div id="icons" className="flex gap-2">
							<button
								type="button"
								title="Modifier la liste"
								aria-label="Modifier la liste"
							>
								<svg
									className="w-6 h-6 text-secondary hover:text-secondary/40 ease-in-out duration-300 hover:scale-125"
									aria-labelledby="icon-pencil-title"
								>
									<use xlinkHref="/assets/icons/SVG/symbol-defs.svg#icon-pencil" />
									<title id="icon-pencil-title">Modifier la liste</title>
								</svg>
							</button>
							<button
								type="button"
								title="Supprimer la liste"
								aria-label="Supprimer la liste"
							>
								<svg
									className="w-6 h-6 text-secondary hover:text-secondary/40 ease-in-out duration-300 hover:scale-125"
									aria-labelledby="icon-bin-title"
								>
									<title id="icon-bin-title">Supprimer la liste</title>
									<use xlinkHref="/assets/icons/SVG/symbol-defs.svg#icon-bin" />
								</svg>
							</button>
						</div>
					</div>
				</div>
			))}

			<div
				id="list"
				className="bg-list hover:bg-secondary/40 ease-in-out duration-300 flex justify-center items-center p-4 w-96 rounded-md shadow shadow-secondary"
			>
				<div>
					<span className="text-background text-8xl">+</span>
				</div>
			</div>
		</section>
	);
}
