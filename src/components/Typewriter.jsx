import { useEffect, useState } from "react";

export default function Typewriter({ speed = 10, delay = 0, children }) {
	const [newChildren, setNewChildren] = useState([]);
	const [innerIndex, setInnerIndex] = useState(0);
	const [outerIndex, setOuterIndex] = useState(0);
	const [start, setStart] = useState(false);

	const type = () => {
		if (!start) {
			return;
		}
		var buffer = [];
		buffer.push(newChildren);

		if (outerIndex > children.length) {
			// console.log(newChildren);
			return;
		}

		if (typeof children[outerIndex] !== "string") {
			// console.log(children[outerIndex], "not string");
			buffer.push(children[outerIndex]);
			setNewChildren(buffer);
			setOuterIndex(outerIndex + 1);
		} else {
			if (innerIndex === children[outerIndex].length) {
				setInnerIndex(0);
				setOuterIndex(outerIndex + 1);
			} else {
				buffer.push(children[outerIndex][innerIndex]);
				setNewChildren(buffer);
				setInnerIndex(innerIndex + 1);
			}
		}
	};

	useEffect(() => {
		setTimeout(() => setStart(true), delay);
		setTimeout(type, speed);
		console.log("inner: ", innerIndex);
		console.log(outerIndex);
	}, [innerIndex, outerIndex, newChildren, start]);

	return <div>{newChildren}</div>;
}
