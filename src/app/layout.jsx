import { config } from "@/helpers/config";
import { Montserrat } from "next/font/google";
import "@/styles/index.scss";
import BootstrapProvider from "@/helpers/providers/bootstrap-provider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Messenger from "@/components/common/misc/messenger";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-montserrat",
});

export const metadata = {
	title: {
		template: `%s | ${config.project.name}`,
		default: config.project.name, // a default is required when creating a template
	},
	description: config.project.description,
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.variable}>
			<body>
				<BootstrapProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</BootstrapProvider>
				<Messenger />
			</body>
		</html>
	);
}
