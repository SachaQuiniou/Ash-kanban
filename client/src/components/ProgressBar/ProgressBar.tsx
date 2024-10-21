export function ProgressBar() {
	return (
		<div className="w-full flex justify-center">
			<div className="w-1/2 bg-list rounded-md shadow shadow-secondary text-center overflow-hidden">
				<div className="relative w-full h-10 bg-list">
					<div className="absolute inset-0 flex items-center justify-center z-10">
						<p className="text-secondary">Chargement des listes...</p>
					</div>
					<div className="bg-secondary/40 h-full rounded-md w-full animate-fill-bar" />
				</div>
			</div>
		</div>
	);
}
