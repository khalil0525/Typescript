import { ChildAsFC } from "./Child";
const Parent = () => {
	return (
		<ChildAsFC  color={"red"} onClick={() => console.log("on click")}/>
	
		
	);
};
export default Parent;
