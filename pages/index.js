import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React from "react";
import App from "../src/components/App";

const index = ({ title }) => {
	console.log(title);

	return (
		<div title="Hello">
			<App title="hello World" />
		</div>
	);
};

export default index;
