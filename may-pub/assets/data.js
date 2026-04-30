/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 72,
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
	RANDOM:278839,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"14",label:"人site 테이블",url:"",child:"0",id:"8",parent:"2"},
		{index:"18",label:"터에서 치르다",url:"",child:"0",id:"9",parent:"2"},
		{index:"24",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"24",label:"I'll Land, 글로벌",url:"",child:"0",id:"10",parent:"3"},
		{index:"32",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"32",label:"JDC 컬렉션",url:"",child:"0",id:"12",parent:"4"},
		{index:"38",label:"함께하는 JDC",url:"",child:"0",id:"20",parent:"4"},
		{index:"46",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"46",label:"도민과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"52",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"52",label:"동반성장 리포트",url:"",child:"0",id:"18",parent:"6"},
		{index:"58",label:"모다들엉 마당",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"917", normalImage:"1777533648790.jpg", movieURL:"1777533582291.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"922", normalImage:"1777533652955.jpg", movieURL:"1777583693454.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"83", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"624", y:"1060", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"452", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"263", y:"1063", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"94", y:"821", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[10,{type:"image", id:"Image_276", name:"noname", visible:"true", x:"0", y:"798", width:"822", height:"375", opacity:"100", normalImage:"1777531004967.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_277", name:"noname", visible:"true", x:"5", y:"787", width:"816", height:"379", opacity:"100", normalImage:"1777531013900.gif", rolloverImage:"", link:""}
],
[13,{type:"imageSlider", id:"ImageSlider_91", name:"noname", visible:"false", x:"0", y:"71", width:"825", height:"454", mode:"slide", normalImage:"1777533827163.jpg", link:"address|_blank|", normalImage1:"1777533827200.jpg", link1:"address|_blank|"},
{type:"image", id:"Image_291", name:"noname", visible:"true", x:"0", y:"71", width:"822", height:"454", opacity:"100", normalImage:"1777533722856.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_291", name:"액션Image_291", dispatcher:"Image_291", event:"onRelease", target:"ImageSlider_91", action:"toggleVisible"}
],
[16,{type:"imageSlider", id:"ImageSlider_71", name:"noname", visible:"false", x:"0", y:"0", width:"727", height:"446", mode:"slide", normalImage:"1775009382206.jpg", link:"address|_blank|", normalImage1:"1775009382245.jpg", link1:"address|_blank|", normalImage2:"1775009382278.jpg", link2:"address|_blank|", normalImage3:"1775009382311.jpg", link3:"address|_blank|", normalImage4:"1775009382347.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_250", name:"noname", visible:"true", x:"1", y:"0", width:"727", height:"446", opacity:"100", normalImage:"1775008193832.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_250", name:"액션Image_250", dispatcher:"Image_250", event:"onRelease", target:"ImageSlider_71", action:"toggleVisible"}
],
[26,{type:"imageSlider", id:"ImageSlider_92", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"462", mode:"slide", normalImage:"1777534441687.jpg", link:"address|_blank|", normalImage1:"1777534441723.jpg", link1:"address|_blank|", normalImage2:"1777534441764.jpg", link2:"address|_blank|", normalImage3:"1777534441781.jpg", link3:"address|_blank|", normalImage4:"1777534441823.jpg", link4:"address|_blank|", normalImage5:"1777534441861.jpg", link5:"address|_blank|", normalImage6:"1777534441896.jpg", link6:"address|_blank|", normalImage7:"1777534441923.jpg", link7:"address|_blank|", normalImage8:"1777534441955.jpg", link8:"address|_blank|", normalImage9:"1777534441989.jpg", link9:"address|_blank|", normalImage10:"1777534442029.jpg", link10:"address|_blank|"}
],
[28,{type:"imageSlider", id:"ImageSlider_93", name:"noname", visible:"true", x:"0", y:"806", width:"825", height:"481", mode:"slide", normalImage:"1777534915537.jpg", link:"address|_blank|", normalImage1:"1777534915573.jpg", link1:"address|_blank|", normalImage2:"1777534915604.jpg", link2:"address|_blank|", normalImage3:"1777534915636.jpg", link3:"address|_blank|", normalImage4:"1777534915667.jpg", link4:"address|_blank|"}
],
[34,{type:"image", id:"Image_278", name:"noname", visible:"true", x:"511", y:"521", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1122781200023"}
],
[35,{type:"image", id:"Image_279", name:"noname", visible:"true", x:"188", y:"256", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1122780000144"},
{type:"image", id:"Image_280", name:"noname", visible:"true", x:"333", y:"504", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1122780000212"},
{type:"image", id:"Image_281", name:"noname", visible:"true", x:"645", y:"776", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1122780400007"}
],
[36,{type:"image", id:"Image_282", name:"noname", visible:"true", x:"494", y:"519", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1122781100008"}
],
[41,{type:"video", id:"Video_40", name:"noname", visible:"true", x:"0", y:"685", width:"825", height:"477", normalImage:"1777535079800.jpg", movieURL:"1777536495876.mp4"}
],
[42,{type:"imageSlider", id:"ImageSlider_94", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"430", mode:"slide", normalImage:"1777535556564.jpg", link:"address|_blank|", normalImage1:"1777538472889.jpg", link1:"address|_blank|", normalImage2:"1777535556656.jpg", link2:"address|_blank|"}
],
[44,{type:"imageSlider", id:"ImageSlider_95", name:"noname", visible:"true", x:"0", y:"72", width:"825", height:"475", mode:"slide", normalImage:"1777535586706.jpg", link:"address|_blank|", normalImage1:"1777535586749.jpg", link1:"address|_blank|", normalImage2:"1777535586783.jpg", link2:"address|_blank|", normalImage3:"1777535586813.jpg", link3:"address|_blank|"}
],
[45,{type:"imageSlider", id:"ImageSlider_96", name:"noname", visible:"true", x:"0", y:"75", width:"825", height:"475", mode:"slide", normalImage:"1777535616096.jpg", link:"address|_blank|", normalImage1:"1777535616133.jpg", link1:"address|_blank|", normalImage2:"1777535616174.jpg", link2:"address|_blank|", normalImage3:"1777535616205.jpg", link3:"address|_blank|", normalImage4:"1777535616236.jpg", link4:"address|_blank|", normalImage5:"1777535616270.jpg", link5:"address|_blank|"}
],
[46,{type:"image", id:"Image_284", name:"noname", visible:"true", x:"0", y:"314", width:"211", height:"145", opacity:"100", normalImage:"1777532225364.gif", rolloverImage:"", link:""}
],
[48,{type:"image", id:"Image_283", name:"noname", visible:"true", x:"0", y:"303", width:"388", height:"285", opacity:"100", normalImage:"1777532202041.gif", rolloverImage:"", link:""}
],
[49,{type:"imageSlider", id:"ImageSlider_97", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"513", mode:"slide", normalImage:"1777535772873.jpg", link:"address|_blank|", normalImage1:"1777535772919.jpg", link1:"address|_blank|"},
{type:"image", id:"Image_270", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"513", opacity:"100", normalImage:"1775010291111.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_270", name:"액션Image_270", dispatcher:"Image_270", event:"onRelease", target:"ImageSlider_97", action:"toggleVisible"}
],
[50,{type:"imageSlider", id:"ImageSlider_98", name:"noname", visible:"false", x:"0", y:"0", width:"724", height:"414", mode:"slide", normalImage:"1777535891397.jpg", link:"address|_blank|", normalImage1:"1777535891435.jpg", link1:"address|_blank|", normalImage2:"1777535891466.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_298", name:"noname", visible:"true", x:"0", y:"0", width:"724", height:"414", opacity:"100", normalImage:"1777533722856.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_298", name:"액션Image_298", dispatcher:"Image_298", event:"onRelease", target:"ImageSlider_98", action:"toggleVisible"}
],
[51,{type:"image", id:"Image_299", name:"noname", visible:"true", x:"176", y:"197", width:"99", height:"98", opacity:"100", normalImage:"1777539289098.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_300", name:"noname", visible:"true", x:"542", y:"198", width:"99", height:"98", opacity:"100", normalImage:"1777539289098.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_301", name:"noname", visible:"true", x:"541", y:"185", width:"72", height:"30", opacity:"100", normalImage:"1777539289098.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_302", name:"noname", visible:"true", x:"206", y:"189", width:"72", height:"30", opacity:"100", normalImage:"1777539289098.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_303", name:"noname", visible:"true", x:"591", y:"206", width:"114", height:"390", opacity:"100", normalImage:"1777539382892.gif", rolloverImage:"", link:""},
{type:"image", id:"Image_304", name:"noname", visible:"true", x:"109", y:"207", width:"114", height:"390", opacity:"100", normalImage:"1777539408432.gif", rolloverImage:"", link:""}
],
[55,{type:"image", id:"Image_285", name:"noname", visible:"true", x:"309", y:"40", width:"477", height:"485", opacity:"100", normalImage:"1777532663300.gif", rolloverImage:"", link:""}
],
[57,{type:"image", id:"Image_286", name:"noname", visible:"true", x:"286", y:"679", width:"514", height:"487", opacity:"100", normalImage:"1777532717031.gif", rolloverImage:"", link:""},
{type:"image", id:"Image_287", name:"noname", visible:"true", x:"71", y:"915", width:"226", height:"145", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.ultari.go.kr/site/board/data/nv_refRoomView.do?firstIndex=&currentPageNo=1&recordCountPerPage=10&p_orderByRdcnt=&bbsCode=00000052&bsnsCode=0000007N&nttSn=7&p_ctgryCodeNull=&p_registDtSt=&p_registDtEd=&p_bbsCode=&p_ctgryCode=&p_searchKeyWord=%EB%B9%84%EB%B0%80%EC%9C%A0%EC%A7%80"}
],
[64,{type:"imageSlider", id:"ImageSlider_89", name:"noname", visible:"true", x:"0", y:"933", width:"731", height:"354", mode:"slide", normalImage:"1775014362071.jpg", link:"address|_blank|", normalImage1:"1775014362113.jpg", link1:"address|_blank|", normalImage2:"1775014362146.jpg", link2:"address|_blank|", normalImage3:"1775014362182.jpg", link3:"address|_blank|", normalImage4:"1775014362219.jpg", link4:"address|_blank|"}
],
[65,{type:"imageSlider", id:"ImageSlider_90", name:"noname", visible:"true", x:"99", y:"830", width:"728", height:"456", mode:"slide", normalImage:"1775014448339.jpg", link:"address|_blank|", normalImage1:"1775014448385.jpg", link1:"address|_blank|", normalImage2:"1775014448427.jpg", link2:"address|_blank|"}
],
[67,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"211", y:"783", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook/202604/index.html"}
],
[69,{type:"image", id:"Image_288", name:"noname", visible:"true", x:"93", y:"1082", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/Ge7526aT"},
{type:"image", id:"Image_289", name:"noname", visible:"true", x:"246", y:"1077", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/xy7jkfaX"}
],
[70,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"593", y:"498", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"},
{type:"image", id:"Image_290", name:"noname", visible:"true", x:"592", y:"252", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GM3vbpQH"}
],
[72,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"307", y:"1109", width:"219", height:"130", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*72*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"24"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"32"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"46"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"52"}]
	};