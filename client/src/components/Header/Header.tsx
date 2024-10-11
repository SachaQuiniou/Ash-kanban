import logo from "../../../assets/img/Logo.webp";

export function Header() {
	return (
		<header className="bg-primary p-8 rounded-md">
			<h1 className="flex text-4xl text-secondary">
				Ash
				<span>
					<img src={logo} alt="logo" className="rotate-90" />
				</span>
				Kanban
			</h1>
		</header>
	);
}
