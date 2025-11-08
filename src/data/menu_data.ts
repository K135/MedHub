import { StaticImageData } from "next/image";

import demo_img_1 from "../../public/assets/img/header/home-1.jpg";
import demo_img_2 from "../../public/assets/img/header/home-2.jpg";
import demo_img_3 from "../../public/assets/img/header/home-3.jpg";
import demo_img_4 from "../../public/assets/img/header/home-4.jpg";
import demo_img_5 from "../../public/assets/img/header/home-5.jpg";
import demo_img_6 from "../../public/assets/img/header/home-6.jpg";
 

 
interface DataType {
	id: number;
	title?: string;
	link: string;
	icon: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	has_dropdown_inner?: boolean;
	sub_menus?: {
		link?: string;
		title?: string;
		title2?: string | any;
		btn_title?: string;
		one_page_link?: string | any;
		one_page_title?: string;
		demo_img?: StaticImageData | any;
    inner_menu?: boolean;   
    inner_menus?: {
       link?: string; title?: string 
    }[];
	}[];
}

// menu data
const menu_data:DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "/",
    icon: "fas fa-home-lg",
		img_dropdown: false,
	},
	{
		id: 2,
		title: "CME / CPD Courses",
		link: "/courses",
    icon: "fas fa-book",
		has_dropdown: false,
	},
	{
		id: 3,
		title: "Events",
		link: "/event",
    icon: "fas fa-gift",
		has_dropdown: false,
	},
	{
		id: 4,
		title: "About",
		link: "/about",
    icon: "fas fa-shopping-bag",
		has_dropdown: false,
	},
	{
		id: 5,
		title: "More",
		link: "#",
    icon: "fas fa-file-alt",
		has_dropdown: true,
		has_dropdown_inner: true,
		sub_menus: [
			{ link: "/instructor", title: "Faculty & Speakers" },
			{ link: "/instructor-details", title: "Speaker Profile" },
			{ link: "/gallery", title: "Gallery" },
			{ link: "/pricing", title: "Membership Plans" },
			{ link: "/faq", title: "FAQs" },
			{
				inner_menu: true,
				title: "Insights",
				inner_menus: [
					{ link: "/news", title: "Medical Insights" },
					{ link: "/news-details", title: "Article Details" },
				]
			},
			{ link: "/sign-in", title: "Sign In" },
			{ link: "/register", title: "Register" },
		],
	},
	{
		id: 6,
		title: "Partners",
		link: "/for-organisers",
    icon: "fas fa-handshake",
		has_dropdown: false,
	},
];
export default menu_data;
