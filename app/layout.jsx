import '@/assets/styles/globals.css'

const MainLayout = ({children}) => {
	return (
		<html lang='it'>
			<body>
				{children}
			</body>
		</html>
	);
};

export default MainLayout;