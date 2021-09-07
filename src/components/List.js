import React, { useState } from "react";

export default function List({ tours, handleRemove, handleRefresh }) {
	const [selengkapnya, setSelengkapnya] = useState(false);

	if (tours.length === 0) {
		return (
			<div className="w-full flex justify-center">
				<button
					onClick={() => handleRefresh()}
					className="mt-3 text-white font-semibold py-2 px-4 bg-blue-700 hover:bg-blue-500">
					Refresh
				</button>
			</div>
		);
	}

	return tours.map((item, index) => {
		return (
			<div
				key={item.id + "-" + index}
				className="font-sans my-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
				<div className="md:flex">
					<div className="md:flex-shrink-0">
						<img
							className="h-48 w-full object-cover md:h-full md:w-48"
							src={item.image}
							alt={item.name}
						/>
					</div>
					<div className="p-8">
						<div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
							{item.price}
						</div>
						<h2 className="block mt-1 text-lg leading-tight font-medium text-black">
							{item.name}
						</h2>
						<p className="my-3 text-gray-500">
							{selengkapnya ? item.info : item.info.substring(0, 200)}
							{"... "}
							<button
								onClick={() => setSelengkapnya(!selengkapnya)}
								className="text-blue-500 hover:underline hover:text-blue-900">
								{selengkapnya ? "Persingkat" : "Selengkapnya"}
							</button>
						</p>
						<button
							onClick={() => handleRemove(item.id)}
							className="mt-2 py-2 px-4 rounded-md text-white bg-red-800 hover:bg-red-600">
							Tidak tertarik
						</button>
					</div>
				</div>
			</div>
		);
	});
}
