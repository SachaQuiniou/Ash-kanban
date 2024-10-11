import { Card } from "../Card/Card";

export function List() {
	return (
		<section
			id="list-container"
			className="flex gap-2 flex-wrap mt-1 p-2 bg-primary rounded-md shadow-sm shadow-secondary"
		>
			<div
				id="list"
				className="bg-card flex flex-col gap-4 p-4 w-96 rounded-md shadow-sm shadow-secondary"
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
				className="bg-card flex flex-col gap-4 p-4 w-96 rounded-md shadow-sm shadow-secondary"
			>
				<div>
					<h2 className="text-2xl text-secondary">Sprint 2</h2>
				</div>
				<Card />
			</div>

			<div
				id="list"
				className="bg-card hover:bg-secondary/40 ease-in-out duration-300 flex justify-center items-center p-4 w-96 rounded-md shadow-sm shadow-secondary"
			>
				<div>
					<span className="text-background text-8xl">+</span>
				</div>
			</div>
		</section>
	);
}
