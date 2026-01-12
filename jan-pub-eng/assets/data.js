/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 74,
	useLogo				: false,
	logoUrl				: "",
	homeUrl				: "",
	useBooklist			: "false",
	
	pageView : {
		type			: "flip",
		side			: "auto",
		duration		: 500,
		cover			: true,
		pagezoom	 	:  "400",
		
		},
	
	pageshadow:false,
	pagearea:true,
	pagesound:"sound1",
	intro:"basic",
	RANDOM:581446,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"4",id:"2",parent:"0"},
		{index:"8",label:"JDC Vision Wave",url:"",child:"0",id:"7",parent:"2"},
		{index:"12",label:"人site Table",url:"",child:"0",id:"8",parent:"2"},
		{index:"20",label:"Walking with the Community 1",url:"",child:"0",id:"9",parent:"2"},
		{index:"34",label:"Walking with the Community 2",url:"",child:"0",id:"18",parent:"2"},
		{index:"40",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"40",label:"I'll Land, Global",url:"",child:"0",id:"10",parent:"3"},
		{index:"46",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"46",label:"JDC Collection",url:"",child:"0",id:"12",parent:"4"},
		{index:"50",label:"Together with JDC",url:"",child:"0",id:"20",parent:"4"},
		{index:"58",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"58",label:"THUMB: JEJU at Your Fingertips",url:"",child:"0",id:"14",parent:"5"},
		{index:"64",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"64",label:"ESG Report",url:"",child:"0",id:"16",parent:"6"},
		{index:"68",label:"Modadeuleong Madang",url:"",child:"0",id:"18",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"921", normalImage:"1767322324181.jpg", movieURL:"1767322319436.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"917", normalImage:"1767322338744.jpg", movieURL:"1767322334612.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"95", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"505", y:"1064", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"377", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"230", y:"1067", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"95", y:"853", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[22,{type:"youtube", id:"Youtube_37", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"471", youtubeURL:"https://youtu.be/3OQfTlYMZ5I?si=t47nKO1lRi5ATafl"}
],
[40,{type:"youtube", id:"Youtube_38", name:"noname", visible:"true", x:"0", y:"691", width:"825", height:"454", youtubeURL:"https://youtu.be/1GFYGI49B8Q?si=tlDQrjCx422vantH"}
],
[42,{type:"imageSlider", id:"ImageSlider_58", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"441", mode:"slide", normalImage:"1767325638608.jpg", link:"address|_blank|", normalImage1:"1767325638658.jpg", link1:"address|_blank|", normalImage2:"1767325638696.jpg", link2:"address|_blank|", normalImage3:"1767325638735.jpg", link3:"address|_blank|", normalImage4:"1767325638775.jpg", link4:"address|_blank|", normalImage5:"1767325638819.jpg", link5:"address|_blank|", normalImage6:"1767325638861.jpg", link6:"address|_blank|", normalImage7:"1767325638900.jpg", link7:"address|_blank|"},
{type:"image", id:"Image_183", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"441", opacity:"100", normalImage:"1767322363134.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_183", name:"액션Image_183", dispatcher:"Image_183", event:"onRelease", target:"ImageSlider_58", action:"toggleVisible"}
],
[43,{type:"imageSlider", id:"ImageSlider_59", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"441", mode:"slide", normalImage:"1767325814815.jpg", link:"address|_blank|", normalImage1:"1767325814864.jpg", link1:"address|_blank|", normalImage2:"1767325814901.jpg", link2:"address|_blank|", normalImage3:"1767325814937.jpg", link3:"address|_blank|", normalImage4:"1767325814975.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_184", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"441", opacity:"100", normalImage:"1767322363134.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_184", name:"액션Image_184", dispatcher:"Image_184", event:"onRelease", target:"ImageSlider_59", action:"toggleVisible"}
],
[44,{type:"image", id:"Image_177", name:"noname", visible:"true", x:"82", y:"318", width:"658", height:"860", opacity:"100", normalImage:"1768192137936.gif", rolloverImage:"", link:""}
],
[45,{type:"image", id:"Image_178", name:"noname", visible:"true", x:"88", y:"318", width:"637", height:"837", opacity:"100", normalImage:"1768192168546.gif", rolloverImage:"", link:""}
],
[50,{type:"video", id:"Video_36", name:"noname", visible:"false", x:"0", y:"467", width:"1280", height:"720", normalImage:"", movieURL:"1767321699644.mp4"},
{type:"image", id:"Image_182", name:"noname", visible:"true", x:"0", y:"473", width:"822", height:"676", opacity:"100", normalImage:"1767321677514.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_182", name:"액션Image_182", dispatcher:"Image_182", event:"onRelease", target:"Video_36", action:"toggleVisible"}
],
[52,{type:"image", id:"Image_179", name:"noname", visible:"true", x:"43", y:"302", width:"739", height:"830", opacity:"100", normalImage:"1768192365306.gif", rolloverImage:"", link:""}
],
[53,{type:"image", id:"Image_180", name:"noname", visible:"true", x:"58", y:"309", width:"712", height:"830", opacity:"100", normalImage:"1768192412848.gif", rolloverImage:"", link:""}
],
[60,{type:"imageSlider", id:"ImageSlider_60", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"441", mode:"slide", normalImage:"1767326135414.jpg", link:"address|_blank|", normalImage1:"1767326135457.jpg", link1:"address|_blank|", normalImage2:"1767326135497.jpg", link2:"address|_blank|", normalImage3:"1767326135534.jpg", link3:"address|_blank|", normalImage4:"1767326135575.jpg", link4:"address|_blank|", normalImage5:"1767326135615.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_185", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"441", opacity:"100", normalImage:"1767322363134.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_185", name:"액션Image_185", dispatcher:"Image_185", event:"onRelease", target:"ImageSlider_60", action:"toggleVisible"}
],
[61,{type:"imageSlider", id:"ImageSlider_61", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"441", mode:"slide", normalImage:"1767326444348.jpg", link:"address|_blank|", normalImage1:"1767326444399.jpg", link1:"address|_blank|", normalImage2:"1767326444441.jpg", link2:"address|_blank|", normalImage3:"1767326444481.jpg", link3:"address|_blank|", normalImage4:"1767326444521.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_186", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"441", opacity:"100", normalImage:"1767322363134.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_186", name:"액션Image_186", dispatcher:"Image_186", event:"onRelease", target:"ImageSlider_61", action:"toggleVisible"}
],
[63,{type:"image", id:"Image_181", name:"noname", visible:"true", x:"54", y:"152", width:"729", height:"1011", opacity:"100", normalImage:"1768195835404.gif", rolloverImage:"", link:""}
],
[70,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"549", y:"143", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook_eng/202512/index.html"},
{type:"image", id:"Image_175", name:"noname", visible:"true", x:"422", y:"1052", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/G6QtgqYb"},
{type:"image", id:"Image_176", name:"noname", visible:"true", x:"580", y:"1052", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GOhelWXx"}
],
[72,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"594", y:"512", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"},
{type:"image", id:"Image_174", name:"noname", visible:"true", x:"586", y:"237", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/5gY9jWYj"}
],
[74,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"307", y:"1109", width:"219", height:"130", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
]],
	
	textList : [ /** 본문 검색 */
		/*1*/	"",
		/*2*/	"",
		/*3*/	"",
		/*4*/	"",
		/*5*/	"",
		/*6*/	"",
		/*7*/	"",
		/*8*/	"",
		/*9*/	"",
		/*10*/	"",
		/*11*/	"",
		/*12*/	"",
		/*13*/	"",
		/*14*/	"",
		/*15*/	"",
		/*16*/	"",
		/*17*/	"",
		/*18*/	"",
		/*19*/	"",
		/*20*/	"",
		/*21*/	"",
		/*22*/	"",
		/*23*/	"",
		/*24*/	"",
		/*25*/	"",
		/*26*/	"",
		/*27*/	"",
		/*28*/	"",
		/*29*/	"",
		/*30*/	"",
		/*31*/	"",
		/*32*/	"",
		/*33*/	"",
		/*34*/	"",
		/*35*/	"",
		/*36*/	"",
		/*37*/	"",
		/*38*/	"",
		/*39*/	"",
		/*40*/	"",
		/*41*/	"",
		/*42*/	"",
		/*43*/	"",
		/*44*/	"",
		/*45*/	"",
		/*46*/	"",
		/*47*/	"",
		/*48*/	"",
		/*49*/	"",
		/*50*/	"",
		/*51*/	"",
		/*52*/	"",
		/*53*/	"",
		/*54*/	"",
		/*55*/	"",
		/*56*/	"",
		/*57*/	"",
		/*58*/	"",
		/*59*/	"",
		/*60*/	"",
		/*61*/	"",
		/*62*/	"",
		/*63*/	"",
		/*64*/	"",
		/*65*/	"",
		/*66*/	"",
		/*67*/	"",
		/*68*/	"",
		/*69*/	"",
		/*70*/	"",
		/*71*/	"",
		/*72*/	"",
		/*73*/	"",
		/*74*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"40"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"46"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"58"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"64"}]
	};