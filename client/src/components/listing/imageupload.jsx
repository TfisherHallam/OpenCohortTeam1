import React, { useState } from "react";

function Image({ onFileChange }) {
	const [file, setFile] = useState();

	async function handleChange(e) {
		const selectedFile = e.target.files[0];


		setFile(selectedFile);
		await onFileChange(selectedFile);
	}

	return (
			<div className="form-input">
				<input type="file" id={"image"} onChange={handleChange}/>
				{}
			</div>
	);
}

export default Image;
