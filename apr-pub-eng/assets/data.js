/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 68,
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
	RANDOM:863937,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC Vision Wave",url:"",child:"0",id:"7",parent:"2"},
		{index:"12",label:"Walking with the Community",url:"",child:"0",id:"8",parent:"2"},
		{index:"20",label:"人site Table",url:"",child:"0",id:"9",parent:"2"},
		{index:"24",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"24",label:"I'll Land, Global",url:"",child:"0",id:"10",parent:"3"},
		{index:"28",label:"Unique",url:"",child:"3",id:"4",parent:"0"},
		{index:"28",label:"JDC Collection",url:"",child:"0",id:"12",parent:"4"},
		{index:"34",label:"Together with JDC 1",url:"",child:"0",id:"20",parent:"4"},
		{index:"40",label:"Together with JDC 2",url:"",child:"0",id:"17",parent:"4"},
		{index:"46",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"46",label:"THUMB: Art at Your Fingertips",url:"",child:"0",id:"14",parent:"5"},
		{index:"52",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"52",label:"Children Raised by Suneulum",url:"",child:"0",id:"18",parent:"6"},
		{index:"56",label:"Modadeuleong Madang",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"2", y:"370", width:"825", height:"917", normalImage:"1775015565845.jpg", movieURL:"1775015504104.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"2", y:"365", width:"825", height:"922", normalImage:"1775015575202.jpg", movieURL:"1775015509237.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"95", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"505", y:"1064", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"377", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"236", y:"1065", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"95", y:"843", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[14,{type:"imageSlider", id:"ImageSlider_71", name:"noname", visible:"false", x:"0", y:"0", width:"727", height:"446", mode:"slide", normalImage:"1775009382206.jpg", link:"address|_blank|", normalImage1:"1775009382245.jpg", link1:"address|_blank|", normalImage2:"1775009382278.jpg", link2:"address|_blank|", normalImage3:"1775009382311.jpg", link3:"address|_blank|", normalImage4:"1775009382347.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_250", name:"noname", visible:"true", x:"1", y:"0", width:"727", height:"446", opacity:"100", normalImage:"1775008193832.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_250", name:"액션Image_250", dispatcher:"Image_250", event:"onRelease", target:"ImageSlider_71", action:"toggleVisible"}
],
[15,{type:"imageSlider", id:"ImageSlider_72", name:"noname", visible:"false", x:"100", y:"0", width:"727", height:"446", mode:"slide", normalImage:"1775009405178.jpg", link:"address|_blank|", normalImage1:"1775009405217.jpg", link1:"address|_blank|", normalImage2:"1775009405252.jpg", link2:"address|_blank|", normalImage3:"1775009405286.jpg", link3:"address|_blank|", normalImage4:"1775009405318.jpg", link4:"address|_blank|", normalImage5:"1775009405352.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_251", name:"noname", visible:"true", x:"100", y:"0", width:"727", height:"446", opacity:"100", normalImage:"1775008193832.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_251", name:"액션Image_251", dispatcher:"Image_251", event:"onRelease", target:"ImageSlider_72", action:"toggleVisible"}
],
[16,{type:"youtube", id:"Youtube_52", name:"noname", visible:"true", x:"0", y:"0", width:"740", height:"411", youtubeURL:"https://youtu.be/cnpCDRKEguM?si=icOeVc-_L9vta7hz"},
{type:"imageSlider", id:"ImageSlider_73", name:"noname", visible:"true", x:"0", y:"425", width:"736", height:"514", mode:"slide", normalImage:"1775009429242.jpg", link:"address|_blank|", normalImage1:"1775009429282.jpg", link1:"address|_blank|", normalImage2:"1775009429316.jpg", link2:"address|_blank|", normalImage3:"1775009429353.jpg", link3:"address|_blank|", normalImage4:"1775009429386.jpg", link4:"address|_blank|", normalImage5:"1775009429421.jpg", link5:"address|_blank|", normalImage6:"1775009429454.jpg", link6:"address|_blank|"}
],
[22,{type:"imageSlider", id:"ImageSlider_74", name:"noname", visible:"false", x:"0", y:"0", width:"471", height:"614", mode:"slide", normalImage:"1775009671370.jpg", link:"address|_blank|", normalImage1:"1775009671404.jpg", link1:"address|_blank|", normalImage2:"1775009671438.jpg", link2:"address|_blank|", normalImage3:"1775009671470.jpg", link3:"address|_blank|"},
{type:"image", id:"Image_254", name:"noname", visible:"true", x:"0", y:"0", width:"471", height:"614", opacity:"100", normalImage:"1775009500938.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_254", name:"액션Image_254", dispatcher:"Image_254", event:"onRelease", target:"ImageSlider_74", action:"toggleVisible"}
],
[23,{type:"youtube", id:"Youtube_49", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"465", youtubeURL:"https://youtu.be/xPWHPqP-5s8?si=mv4UWXo6ly2o2X9n"}
],
[24,{type:"youtube", id:"Youtube_50", name:"noname", visible:"true", x:"0", y:"681", width:"825", height:"469", youtubeURL:"https://youtu.be/mp6jd5ZAuDc?si=hdR25hSj0zEuaJXN"}
],
[26,{type:"imageSlider", id:"ImageSlider_75", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"480", mode:"slide", normalImage:"1775010645505.jpg", link:"address|_blank|", normalImage1:"1775010645545.jpg", link1:"address|_blank|", normalImage2:"1775010645581.jpg", link2:"address|_blank|", normalImage3:"1775010645614.jpg", link3:"address|_blank|", normalImage4:"1775010645652.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_259", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"482", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_259", name:"액션Image_259", dispatcher:"Image_259", event:"onRelease", target:"ImageSlider_75", action:"toggleVisible"}
],
[27,{type:"imageSlider", id:"ImageSlider_76", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"480", mode:"slide", normalImage:"1775010665368.jpg", link:"address|_blank|", normalImage1:"1775010665408.jpg", link1:"address|_blank|", normalImage2:"1775010665442.jpg", link2:"address|_blank|", normalImage3:"1775010665474.jpg", link3:"address|_blank|", normalImage4:"1775010665507.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_260", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"482", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_260", name:"액션Image_260", dispatcher:"Image_260", event:"onRelease", target:"ImageSlider_76", action:"toggleVisible"}
],
[32,{type:"image", id:"Image_247", name:"noname", visible:"true", x:"0", y:"1001", width:"822", height:"280", opacity:"100", normalImage:"1774935224815.png", rolloverImage:"", link:""},
{type:"image", id:"Image_255", name:"noname", visible:"true", x:"2", y:"1005", width:"825", height:"285", opacity:"100", normalImage:"1775009705273.gif", rolloverImage:"", link:""}
],
[33,{type:"image", id:"Image_256", name:"noname", visible:"true", x:"0", y:"1003", width:"825", height:"285", opacity:"100", normalImage:"1775009737540.gif", rolloverImage:"", link:""}
],
[34,{type:"video", id:"Video_39", name:"noname", visible:"true", x:"0", y:"685", width:"825", height:"465", normalImage:"1775010048811.jpg", movieURL:"1775009989642.mp4"}
],
[36,{type:"imageSlider", id:"ImageSlider_77", name:"noname", visible:"false", x:"145", y:"0", width:"581", height:"346", mode:"slide", normalImage:"1775012777935.jpg", link:"address|_blank|", normalImage1:"1775012777976.jpg", link1:"address|_blank|", normalImage2:"1775012778011.jpg", link2:"address|_blank|", normalImage3:"1775012778047.jpg", link3:"address|_blank|", normalImage4:"1775012778084.jpg", link4:"address|_blank|", normalImage5:"1775012778118.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_266", name:"noname", visible:"true", x:"145", y:"0", width:"581", height:"346", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_266", name:"액션Image_266", dispatcher:"Image_266", event:"onRelease", target:"ImageSlider_77", action:"toggleVisible"}
],
[37,{type:"imageSlider", id:"ImageSlider_78", name:"noname", visible:"false", x:"97", y:"0", width:"581", height:"346", mode:"slide", normalImage:"1775012799037.jpg", link:"address|_blank|", normalImage1:"1775012799075.jpg", link1:"address|_blank|", normalImage2:"1775012799112.jpg", link2:"address|_blank|", normalImage3:"1775012799150.jpg", link3:"address|_blank|", normalImage4:"1775012799188.jpg", link4:"address|_blank|", normalImage5:"1775012799225.jpg", link5:"address|_blank|", normalImage6:"1775012799262.jpg", link6:"address|_blank|"},
{type:"image", id:"Image_267", name:"noname", visible:"true", x:"99", y:"0", width:"581", height:"346", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_267", name:"액션Image_267", dispatcher:"Image_267", event:"onRelease", target:"ImageSlider_78", action:"toggleVisible"}
],
[38,{type:"imageSlider", id:"ImageSlider_79", name:"noname", visible:"true", x:"0", y:"348", width:"724", height:"387", mode:"slide", normalImage:"1775012819934.jpg", link:"address|_blank|", normalImage1:"1775012819978.jpg", link1:"address|_blank|", normalImage2:"1775012820011.jpg", link2:"address|_blank|", normalImage3:"1775012820048.jpg", link3:"address|_blank|", normalImage4:"1775012820085.jpg", link4:"address|_blank|", normalImage5:"1775012820127.jpg", link5:"address|_blank|"}
],
[43,{type:"imageSlider", id:"ImageSlider_82", name:"noname", visible:"false", x:"0", y:"393", width:"574", height:"299", mode:"slide", normalImage:"1775014005801.jpg", link:"address|_blank|", normalImage1:"1775014005840.jpg", link1:"address|_blank|", normalImage2:"1775014005873.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_269", name:"noname", visible:"true", x:"0", y:"393", width:"574", height:"299", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_269", name:"액션Image_269", dispatcher:"Image_269", event:"onRelease", target:"ImageSlider_82", action:"toggleVisible"}
],
[45,{type:"imageSlider", id:"ImageSlider_80", name:"noname", visible:"false", x:"103", y:"0", width:"724", height:"400", mode:"slide", normalImage:"1775013082469.jpg", link:"address|_blank|", normalImage1:"1775013082510.jpg", link1:"address|_blank|", normalImage2:"1775013082544.jpg", link2:"address|_blank|", normalImage3:"1775013082579.jpg", link3:"address|_blank|"},
{type:"image", id:"Image_270", name:"noname", visible:"true", x:"103", y:"0", width:"724", height:"400", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_270", name:"액션Image_270", dispatcher:"Image_270", event:"onRelease", target:"ImageSlider_80", action:"toggleVisible"}
],
[47,{type:"imageSlider", id:"ImageSlider_84", name:"noname", visible:"true", x:"0", y:"898", width:"825", height:"389", mode:"slide", normalImage:"1775014054735.jpg", link:"address|_blank|", normalImage1:"1775014054775.jpg", link1:"address|_blank|", normalImage2:"1775014054809.jpg", link2:"address|_blank|", normalImage3:"1775014054890.jpg", link3:"address|_blank|"}
],
[48,{type:"imageSlider", id:"ImageSlider_85", name:"noname", visible:"false", x:"0", y:"379", width:"655", height:"394", mode:"slide", normalImage:"1775014076799.jpg", link:"address|_blank|", normalImage1:"1775014076836.jpg", link1:"address|_blank|", normalImage2:"1775014076870.jpg", link2:"address|_blank|", normalImage3:"1775014076907.jpg", link3:"address|_blank|", normalImage4:"1775014076944.jpg", link4:"address|_blank|", normalImage5:"1775014076979.jpg", link5:"address|_blank|", normalImage6:"1775014077016.jpg", link6:"address|_blank|"},
{type:"image", id:"Image_264", name:"noname", visible:"true", x:"0", y:"379", width:"655", height:"394", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_264", name:"액션Image_264", dispatcher:"Image_264", event:"onRelease", target:"ImageSlider_85", action:"toggleVisible"}
],
[49,{type:"youtube", id:"Youtube_51", name:"noname", visible:"true", x:"103", y:"0", width:"721", height:"406", youtubeURL:"https://www.youtube.com/live/weqjYVgcICw?si=rcZ2PK7ANT0SCceq"},
{type:"imageSlider", id:"ImageSlider_86", name:"noname", visible:"false", x:"101", y:"418", width:"726", height:"359", mode:"slide", normalImage:"1775014098109.jpg", link:"address|_blank|", normalImage1:"1775014098148.jpg", link1:"address|_blank|", normalImage2:"1775014098184.jpg", link2:"address|_blank|", normalImage3:"1775014098257.jpg", link3:"address|_blank|", normalImage4:"1775014098294.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_265", name:"noname", visible:"true", x:"99", y:"414", width:"728", height:"361", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_265", name:"액션Image_265", dispatcher:"Image_265", event:"onRelease", target:"ImageSlider_86", action:"toggleVisible"}
],
[50,{type:"imageSlider", id:"ImageSlider_87", name:"noname", visible:"true", x:"1", y:"912", width:"825", height:"375", mode:"slide", normalImage:"1775014137499.jpg", link:"address|_blank|", normalImage1:"1775014137539.jpg", link1:"address|_blank|", normalImage2:"1775014137574.jpg", link2:"address|_blank|", normalImage3:"1775014137610.jpg", link3:"address|_blank|"}
],
[51,{type:"imageSlider", id:"ImageSlider_88", name:"noname", visible:"true", x:"2", y:"912", width:"825", height:"375", mode:"slide", normalImage:"1775014161108.jpg", link:"address|_blank|", normalImage1:"1775014161147.jpg", link1:"address|_blank|", normalImage2:"1775014161181.jpg", link2:"address|_blank|", normalImage3:"1775014161220.jpg", link3:"address|_blank|", normalImage4:"1775014161260.jpg", link4:"address|_blank|"}
],
[52,{type:"image", id:"Image_257", name:"noname", visible:"true", x:"0", y:"898", width:"825", height:"278", opacity:"100", normalImage:"1775010072110.gif", rolloverImage:"", link:""}
],
[55,{type:"image", id:"Image_258", name:"noname", visible:"true", x:"2", y:"934", width:"825", height:"253", opacity:"100", normalImage:"1775010093876.gif", rolloverImage:"", link:""},
{type:"image", id:"Image_274", name:"noname", visible:"true", x:"0", y:"933", width:"50", height:"253", opacity:"100", normalImage:"1775018624752.jpg", rolloverImage:"", link:""}
],
[60,{type:"imageSlider", id:"ImageSlider_89", name:"noname", visible:"true", x:"0", y:"933", width:"731", height:"354", mode:"slide", normalImage:"1775014362071.jpg", link:"address|_blank|", normalImage1:"1775014362113.jpg", link1:"address|_blank|", normalImage2:"1775014362146.jpg", link2:"address|_blank|", normalImage3:"1775014362182.jpg", link3:"address|_blank|", normalImage4:"1775014362219.jpg", link4:"address|_blank|"}
],
[61,{type:"imageSlider", id:"ImageSlider_90", name:"noname", visible:"true", x:"99", y:"830", width:"728", height:"456", mode:"slide", normalImage:"1775014448339.jpg", link:"address|_blank|", normalImage1:"1775014448385.jpg", link1:"address|_blank|", normalImage2:"1775014448427.jpg", link2:"address|_blank|"}
],
[62,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"211", y:"777", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook_eng/202603/index.html"}
],
[65,{type:"image", id:"Image_190", name:"noname", visible:"true", x:"90", y:"1066", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/5xgNLrxa"},
{type:"image", id:"Image_191", name:"noname", visible:"true", x:"253", y:"1064", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/xgXeuJSA"}
],
[66,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"593", y:"519", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/Grek0XCP"}
],
[68,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"307", y:"1109", width:"219", height:"130", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*68*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"24"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"28"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"46"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"52"}]
	};