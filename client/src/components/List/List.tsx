import { Card } from "../Card/Card";

export function List() {
	return (
		<section
			id="list-container"
			className="flex gap-2 flex-wrap mt-1 p-2 bg-primary rounded-md "
		>
			<div
				id="list"
				className="bg-list flex flex-col gap-4 p-4 w-96 rounded-md shadow shadow-secondary"
			>
				<div>
					<h2 className=" text-2xl text-secondary">Sprint 1</h2>
				</div>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>

			<div
				id="list"
				className="bg-list flex flex-col gap-4 p-4 w-96 rounded-md shadow shadow-secondary"
			>
				<div className="flex justify-between items-center">
					<h2 className="text-2xl text-secondary">Sprint 2</h2>
					<div id="icons" className="flex gap-2">
						<button
							type="button"
							title="Modifier la liste"
							aria-label="Modifier la liste"
						>
							<svg
								className="icon text-xl text-secondary hover:text-secondary/40 ease-in-out duration-300 hover:scale-125"
								aria-labelledby="icon-pencil-title"
							>
								<title id="icon-pencil-title">Modifier la liste</title>
								<use xlinkHref="#icon-pencil" />
							</svg>
						</button>
						<button
							type="button"
							title="Supprimer la liste"
							aria-label="Supprimer la liste"
						>
							<svg
								className="icon text-xl text-secondary hover:text-secondary/40 ease-in-out duration-300 hover:scale-125"
								aria-labelledby="icon-bin-title"
							>
								<title id="icon-bin-title">Supprimer la liste</title>
								<use xlinkHref="#icon-bin" />
							</svg>
						</button>
					</div>
				</div>
				<Card />
			</div>

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
