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
		title: "CME/CPD Courses & Conferences",
		link: "/courses",
    icon: "fas fa-book",
		has_dropdown: true,
		sub_menus: [
			{ link: "/courses?course-format=In-Person", title: "In Person" },
			{ link: "/courses?course-format=Online", title: "Online" },
			{ link: "/courses?course-format=Hybrid", title: "Hybrid" },
		],
	},
	{
		id: 4,
		title: "News and Articles",
		link: "/news",
    icon: "fas fa-newspaper",
		has_dropdown: true,
		sub_menus: [
			{ link: "/news", title: "Blogs" },
			{ link: "/news", title: "Articles" },
			{ link: "/news", title: "News" },
			{ link: "/news", title: "Interviews" },
		],
	},
	{
		id: 5,
		title: "More",
		link: "#",
    icon: "fas fa-file-alt",
		has_dropdown: true,
		has_dropdown_inner: false,
		sub_menus: [
			{ link: "/about", title: "About" },
			{ link: "/instructor", title: "Faculty & Speakers" },
			{ link: "/gallery", title: "Gallery" },
			{ link: "/faq", title: "FAQs" },
			{ link: "/career", title: "Career" },
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
