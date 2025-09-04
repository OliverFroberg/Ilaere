import React from "react"

export default function Card({children}: { children: React.ReactNode }) {
	return (
		<div className={`rounded-base bg-base-white shadow-lg overflow-clip`}>
			{children}
		</div>
	)
}