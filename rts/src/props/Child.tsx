interface ChildProps {
	color: string;
	onClick: () => void;
	children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
	return <div>Hi there</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({
	color,
	onClick,
	children,
}) => {
	return (
		<div>
			{color}
			{children}
			<button onClick={onClick}></button>
		</div>
	);
};
