/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 70,
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
	RANDOM:897740,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"14",label:"터에서 치르다",url:"",child:"0",id:"8",parent:"2"},
		{index:"20",label:"人site 테이블",url:"",child:"0",id:"9",parent:"2"},
		{index:"26",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"26",label:"I'll Land, 글로벌",url:"",child:"0",id:"10",parent:"3"},
		{index:"34",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"34",label:"JDC 컬렉션",url:"",child:"0",id:"12",parent:"4"},
		{index:"38",label:"함께하는 JDC",url:"",child:"0",id:"20",parent:"4"},
		{index:"44",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"44",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"50",label:"Beyond",url:"",child:"3",id:"6",parent:"0"},
		{index:"50",label:"동반성장 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"56",label:"칭찬햄수다",url:"",child:"0",id:"18",parent:"6"},
		{index:"62",label:"모다들엉 마당",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"918", normalImage:"1772093973021.jpg", movieURL:"1772093969458.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"922", normalImage:"1772093983158.jpg", movieURL:"1772093978058.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"95", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"505", y:"1064", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"377", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"230", y:"1067", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"94", y:"821", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[11,{type:"image", id:"Image_230", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"1166", opacity:"100", normalImage:"1772089408480.gif", rolloverImage:"", link:""}
],
[12,{type:"image", id:"Image_231", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"1166", opacity:"100", normalImage:"1772089433284.gif", rolloverImage:"", link:""}
],
[13,{type:"image", id:"Image_232", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"1166", opacity:"100", normalImage:"1772089443686.gif", rolloverImage:"", link:""}
],
[14,{type:"youtube", id:"Youtube_48", name:"noname", visible:"true", x:"0", y:"689", width:"825", height:"468", youtubeURL:"https://youtu.be/h-ShGqbH5p0?si=FnQULoQiVdk2quSG"}
],
[16,{type:"image", id:"Image_236", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"397", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_236", name:"액션Image_236", dispatcher:"Image_236", event:"onRelease", target:" ", action:"toggleVisible"}
],
[17,{type:"imageSlider", id:"ImageSlider_69", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"397", mode:"slide", normalImage:"1772095794415.png", link:"address|_blank|", normalImage1:"1772092407872.png", link1:"address|_blank|", normalImage2:"1772092407950.png", link2:"address|_blank|", normalImage3:"1772092407989.png", link3:"address|_blank|", normalImage4:"1772092408029.png", link4:"address|_blank|"}
],
[18,{type:"imageSlider", id:"ImageSlider_70", name:"noname", visible:"false", x:"0", y:"0", width:"732", height:"419", mode:"slide", normalImage:"1772092647050.png", link:"address|_blank|", normalImage1:"1772092647102.png", link1:"address|_blank|", normalImage2:"1772092647138.png", link2:"address|_blank|"},
{type:"image", id:"Image_238", name:"noname", visible:"true", x:"0", y:"0", width:"729", height:"419", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_238", name:"액션Image_238", dispatcher:"Image_238", event:"onRelease", target:"ImageSlider_70", action:"toggleVisible"}
],
[19,{type:"image", id:"Image_221", name:"noname", visible:"true", x:"228", y:"1067", width:"135", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|http://www.puruni.com/jdc"},
{type:"image", id:"Image_222", name:"noname", visible:"true", x:"383", y:"1075", width:"131", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/@lab9745"}
],
[42,{type:"image", id:"Image_233", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"1062", opacity:"100", normalImage:"1772091248076.gif", rolloverImage:"", link:""}
],
[43,{type:"image", id:"Image_235", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"1059", opacity:"100", normalImage:"1772091264243.gif", rolloverImage:"", link:""}
],
[48,{type:"image", id:"Image_223", name:"noname", visible:"true", x:"368", y:"1056", width:"138", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/@hondiefilmfest"},
{type:"image", id:"Image_224", name:"noname", visible:"true", x:"531", y:"1046", width:"138", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jejuindie"}
],
[49,{type:"image", id:"Image_225", name:"noname", visible:"true", x:"173", y:"535", width:"563", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://forms.gle/bXvrPxQT11nifBfw9"}
],
[55,{type:"image", id:"Image_226", name:"noname", visible:"true", x:"93", y:"992", width:"202", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.benis.or.kr/article/list.do?menuKey=173&boardKey=14"},
{type:"image", id:"Image_227", name:"noname", visible:"true", x:"93", y:"1092", width:"205", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.alio.go.kr/item/itemBoard21110.do?disclosureNo=null&apbaId=C0121&nowcode=21110&reportFormNo=21110&table_name=COMM_RULE&idx_name=RULE_NO&idx=23498&reportGbn=N&bid_type=K1400"}
],
[64,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"211", y:"777", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook/202602/index.html"}
],
[67,{type:"image", id:"Image_190", name:"noname", visible:"true", x:"90", y:"1066", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GZD7O9xb"},
{type:"image", id:"Image_191", name:"noname", visible:"true", x:"253", y:"1064", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/5SKc6Ddo"}
],
[68,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"593", y:"519", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"},
{type:"image", id:"Image_228", name:"noname", visible:"true", x:"591", y:"221", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/xZK2oEWH"}
],
[70,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"307", y:"1109", width:"219", height:"130", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*70*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"26"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"34"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"44"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"50"}]
	};