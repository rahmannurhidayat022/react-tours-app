import React, { useState, useEffect } from "react";
import Header from "./Header";
import List from "./List";

export default function Tours({ url }) {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const handleFetch = async () => {
		try {
			const res = await fetch(url);
			const data = await res.json();
			setLoading(false);
			setTours(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		handleFetch();
	});

	const handleRemove = (id) => {
		const updated = tours.filter((tour) => tour.id !== id);
		setTours(updated);
	};

	const handleRefresh = () => {
		handleFetch();
	};

	if (loading) {
		return (
			<div>
				<h1 className="text-3xl font-bold text-center">Loading...</h1>
			</div>
		);
	} else {
		return (
			<div className="container mx-2">
				<Header />
				<List
					tours={tours}
					handleRemove={handleRemove}
					handleRefresh={handleRefresh}
				/>
			</div>
		);
	}
}
