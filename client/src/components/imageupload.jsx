
import React, { useState } from "react";

function Image() {
	const [file, setFile] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setFile(URL.createObjectURL(e.target.files[0]));
	}

	return (
		<div className="Image">
			<input 
			type="file"
			onChange={handleChange}
			class = "form-input"/>
			{/* <img src={file} alt= "Event"/> */}
		</div>
	);
}

export default Image;
