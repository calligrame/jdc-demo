/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 86,
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
	RANDOM:233102,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"18",label:"人site 테이블1",url:"",child:"0",id:"8",parent:"2"},
		{index:"26",label:"터에서 치르다",url:"",child:"0",id:"9",parent:"2"},
		{index:"32",label:"Hybrid",url:"",child:"3",id:"3",parent:"0"},
		{index:"32",label:"I'll Land, 글로벌1",url:"",child:"0",id:"10",parent:"3"},
		{index:"38",label:"I'll Land, 글로벌2",url:"",child:"0",id:"17",parent:"3"},
		{index:"44",label:"人site 테이블2",url:"",child:"0",id:"18",parent:"3"},
		{index:"52",label:"Unique",url:"",child:"1",id:"4",parent:"0"},
		{index:"52",label:"함께하는 JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"60",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"60",label:"돌담 올레 보듬음멍",url:"",child:"0",id:"14",parent:"5"},
		{index:"68",label:"Beyond",url:"",child:"3",id:"6",parent:"0"},
		{index:"68",label:"ESG 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"74",label:"예술과 Thumb타기",url:"",child:"0",id:"17",parent:"6"},
		{index:"80",label:"모다들엉 마당",url:"",child:"0",id:"18",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"921", normalImage:"1764656923248.jpg", movieURL:"1764656906109.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"917", normalImage:"1764656900287.jpg", movieURL:"1764656796054.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"95", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"227", y:"1062", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"377", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"514", y:"1062", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"94", y:"821", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[10,{type:"image", id:"Image_147", name:"noname", visible:"true", x:"5", y:"698", width:"822", height:"501", opacity:"100", normalImage:"1764650479776.gif", rolloverImage:"", link:""}
],
[14,{type:"youtube", id:"Youtube_33", name:"noname", visible:"true", x:"0", y:"164", width:"822", height:"459", youtubeURL:"https://youtu.be/epUo21YAkwQ?si=pC8bg1kl-3azlY97"}
],
[17,{type:"imageSlider", id:"ImageSlider_43", name:"noname", visible:"false", x:"0", y:"197", width:"825", height:"438", mode:"slide", normalImage:"1764651683324.jpg", link:"address|_blank|", normalImage1:"1764651683372.jpg", link1:"address|_blank|", normalImage2:"1764651683415.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_148", name:"noname", visible:"true", x:"0", y:"197", width:"825", height:"435", opacity:"100", normalImage:"1764651452178.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_148", name:"액션Image_148", dispatcher:"Image_148", event:"onRelease", target:"ImageSlider_43", action:"toggleVisible"}
],
[25,{type:"image", id:"Image_150", name:"noname", visible:"true", x:"90", y:"42", width:"159", height:"111", opacity:"100", normalImage:"1764652138884.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcdutyfree1/224095273083"}
],
[28,{type:"image", id:"Image_151", name:"noname", visible:"true", x:"574", y:"270", width:"143", height:"85", opacity:"100", normalImage:"1764652179283.png", rolloverImage:"", link:"address|_blank|www.youtube.com/@JDCENTER"}
],
[29,{type:"image", id:"Image_152", name:"noname", visible:"true", x:"574", y:"270", width:"143", height:"85", opacity:"100", normalImage:"1764652179283.png", rolloverImage:"", link:"address|_blank|instagram.com/jdcenter_official"}
],
[30,{type:"youtube", id:"Youtube_29", name:"noname", visible:"false", x:"0", y:"867", width:"1649", height:"1319", youtubeURL:"https://youtu.be/WcOb_U0LRzA?si=YUxkcdbhX23R0bhG"},
{type:"image", id:"Image_128", name:"noname", visible:"true", x:"0", y:"877", width:"1649", height:"1423", opacity:"100", normalImage:"1761711095103.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_128", name:"액션Image_128", dispatcher:"Image_128", event:"onRelease", target:"Youtube_29", action:"toggleVisible"},
{type:"image", id:"Image_153", name:"noname", visible:"true", x:"574", y:"270", width:"143", height:"85", opacity:"100", normalImage:"1764652179283.png", rolloverImage:"", link:"address|_blank|facebook.com/jdccenter"}
],
[31,{type:"image", id:"Image_154", name:"noname", visible:"true", x:"574", y:"270", width:"143", height:"85", opacity:"100", normalImage:"1764652179283.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"}
],
[32,{type:"imageSlider", id:"ImageSlider_44", name:"noname", visible:"false", x:"0", y:"458", width:"825", height:"697", mode:"slide", normalImage:"1764654102650.jpg", link:"address|_blank|", normalImage1:"1764654102702.jpg", link1:"address|_blank|", normalImage2:"1764654102741.jpg", link2:"address|_blank|", normalImage3:"1764654102781.jpg", link3:"address|_blank|", normalImage4:"1764654102822.jpg", link4:"address|_blank|", normalImage5:"1764654102863.jpg", link5:"address|_blank|", normalImage6:"1764654102908.jpg", link6:"address|_blank|", normalImage7:"1764654102945.jpg", link7:"address|_blank|"},
{type:"image", id:"Image_155", name:"noname", visible:"true", x:"0", y:"464", width:"825", height:"685", opacity:"100", normalImage:"1764653219245.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_155", name:"액션Image_155", dispatcher:"Image_155", event:"onRelease", target:"ImageSlider_44", action:"toggleVisible"}
],
[40,{type:"image", id:"Image_146", name:"noname", visible:"true", x:"0", y:"488", width:"825", height:"674", opacity:"100", normalImage:"1764650140712.gif", rolloverImage:"", link:""}
],
[42,{type:"youtube", id:"Youtube_34", name:"noname", visible:"true", x:"0", y:"263", width:"825", height:"463", youtubeURL:"https://youtu.be/B8qifz8Pjec?si=A155WQ37f59MngAu"}
],
[52,{type:"imageSlider", id:"ImageSlider_45", name:"noname", visible:"false", x:"0", y:"263", width:"825", height:"892", mode:"slide", normalImage:"1764654755287.jpg", link:"address|_blank|", normalImage1:"1764654755322.jpg", link1:"address|_blank|", normalImage2:"1764654755353.jpg", link2:"address|_blank|", normalImage3:"1764654755404.jpg", link3:"address|_blank|", normalImage4:"1764654755446.jpg", link4:"address|_blank|", normalImage5:"1764654755479.jpg", link5:"address|_blank|", normalImage6:"1764654755509.jpg", link6:"address|_blank|", normalImage7:"1764654755544.jpg", link7:"address|_blank|", normalImage8:"1764654755588.jpg", link8:"address|_blank|"},
{type:"image", id:"Image_156", name:"noname", visible:"true", x:"0", y:"263", width:"825", height:"886", opacity:"100", normalImage:"1764654425741.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_156", name:"액션Image_156", dispatcher:"Image_156", event:"onRelease", target:"ImageSlider_45", action:"toggleVisible"}
],
[61,{type:"video", id:"Video_30", name:"noname", visible:"true", x:"0", y:"685", width:"825", height:"470", normalImage:"1764655732249.jpg", movieURL:"1764655559451.mp4"}
],
[63,{type:"video", id:"Video_31", name:"noname", visible:"true", x:"0", y:"221", width:"825", height:"469", normalImage:"1764655754185.jpg", movieURL:"1764655742555.mp4"}
],
[65,{type:"image", id:"Image_138", name:"noname", visible:"true", x:"1183", y:"1857", width:"294", height:"179", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/prcenter/issue/notice.cs?action=view&artiId=36171"},
{type:"video", id:"Video_32", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"465", normalImage:"1764655777890.jpg", movieURL:"1764655765410.mp4"}
],
[66,{type:"video", id:"Video_33", name:"noname", visible:"true", x:"0", y:"160", width:"825", height:"464", normalImage:"1764655797609.jpg", movieURL:"1764655785782.mp4"}
],
[79,{type:"image", id:"Image_157", name:"noname", visible:"true", x:"454", y:"1093", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://culture.seogwipo.go.kr/citrus/index.htm"},
{type:"image", id:"Image_158", name:"noname", visible:"true", x:"609", y:"1093", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/6sot_official/"}
],
[82,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"87", y:"145", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook/202511/index.html"}
],
[83,{type:"image", id:"Image_160", name:"noname", visible:"true", x:"92", y:"1078", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/5YSRqKgF"},
{type:"image", id:"Image_161", name:"noname", visible:"true", x:"260", y:"1075", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/xQiXPain"}
],
[84,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"571", y:"860", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"}
],
[86,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"307", y:"1109", width:"219", height:"130", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*74*/	"",
		/*75*/	"",
		/*76*/	"",
		/*77*/	"",
		/*78*/	"",
		/*79*/	"",
		/*80*/	"",
		/*81*/	"",
		/*82*/	"",
		/*83*/	"",
		/*84*/	"",
		/*85*/	"",
		/*86*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"32"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"52"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"60"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"68"}]
	};