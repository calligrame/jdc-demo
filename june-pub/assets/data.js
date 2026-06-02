/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 90,
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
	RANDOM:155404,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"26",label:"人site 테이블",url:"",child:"0",id:"8",parent:"2"},
		{index:"32",label:"터에서 치르다",url:"",child:"0",id:"9",parent:"2"},
		{index:"46",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"46",label:"I'll Land, 글로벌",url:"",child:"0",id:"10",parent:"3"},
		{index:"58",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"58",label:"JDC 컬렉션",url:"",child:"0",id:"12",parent:"4"},
		{index:"64",label:"함께하는 JDC",url:"",child:"0",id:"20",parent:"4"},
		{index:"68",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"68",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"74",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"74",label:"동반성장 리포트",url:"",child:"0",id:"18",parent:"6"},
		{index:"82",label:"모다들엉 마당",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"2", y:"370", width:"825", height:"917", normalImage:"1780021883911.jpg", movieURL:"1780021788139.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"2", y:"365", width:"825", height:"922", normalImage:"1780021888730.jpg", movieURL:"1780021822898.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"83", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"624", y:"1060", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"452", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"263", y:"1063", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"94", y:"821", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[10,{type:"image", id:"Image_315", name:"noname", visible:"true", x:"23", y:"343", width:"789", height:"731", opacity:"100", normalImage:"1779976480856.gif", rolloverImage:"", link:""}
],
[11,{type:"youtube", id:"Youtube_53", name:"noname", visible:"true", x:"0", y:"265", width:"825", height:"469", youtubeURL:"https://youtu.be/wUgFylhpJnk?si=UUQMrFKb3uoFrQCr"}
],
[13,{type:"image", id:"Image_325", name:"noname", visible:"true", x:"0", y:"71", width:"822", height:"522", opacity:"100", normalImage:"1780014023599.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_99", name:"noname", visible:"true", x:"0", y:"72", width:"825", height:"522", mode:"slide", normalImage:"1780014570505.jpg", link:"address|_blank|", normalImage1:"1780014570867.jpg", link1:"address|_blank|", normalImage2:"1780014570951.jpg", link2:"address|_blank|", normalImage3:"1780014571106.jpg", link3:"address|_blank|", normalImage4:"1780014571138.jpg", link4:"address|_blank|", normalImage5:"1780014571160.jpg", link5:"address|_blank|"}
],
[15,{type:"image", id:"Image_327", name:"noname", visible:"false", x:"102", y:"0", width:"719", height:"507", opacity:"100", normalImage:"1780014062429.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_111", name:"noname", visible:"true", x:"99", y:"0", width:"728", height:"513", mode:"slide", normalImage:"1780044969357.jpg", link:"address|_blank|", normalImage1:"1780044969390.jpg", link1:"address|_blank|", normalImage2:"1780044969489.jpg", link2:"address|_blank|", normalImage3:"1780044969519.jpg", link3:"address|_blank|", normalImage4:"1780044969548.jpg", link4:"address|_blank|", normalImage5:"1780044969574.jpg", link5:"address|_blank|"}
],
[16,{type:"image", id:"Image_316", name:"noname", visible:"true", x:"70", y:"814", width:"667", height:"372", opacity:"100", normalImage:"1779976531382.gif", rolloverImage:"", link:""}
],
[18,{type:"imageSlider", id:"ImageSlider_112", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"579", mode:"slide", normalImage:"1780360964294.jpg", link:"address|_blank|", normalImage1:"1780360964426.jpg", link1:"address|_blank|", normalImage2:"1780360964456.jpg", link2:"address|_blank|", normalImage3:"1780360964483.jpg", link3:"address|_blank|", normalImage4:"1780360964517.jpg", link4:"address|_blank|", normalImage5:"1780360964557.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_341", name:"noname", visible:"true", x:"5", y:"0", width:"816", height:"575", opacity:"100", normalImage:"1780014062429.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_341", name:"액션Image_341", dispatcher:"Image_341", event:"onRelease", target:"ImageSlider_112", action:"toggleVisible"}
],
[21,{type:"image", id:"Image_317", name:"noname", visible:"true", x:"154", y:"286", width:"556", height:"355", opacity:"100", normalImage:"1779976593811.gif", rolloverImage:"", link:""}
],
[22,{type:"image", id:"Image_330", name:"noname", visible:"true", x:"0", y:"263", width:"822", height:"520", opacity:"100", normalImage:"1780014191530.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_102", name:"noname", visible:"true", x:"0", y:"262", width:"825", height:"520", mode:"slide", normalImage:"1780015571343.jpg", link:"address|_blank|", normalImage1:"1780015571392.jpg", link1:"address|_blank|", normalImage2:"1780015571426.jpg", link2:"address|_blank|"}
],
[23,{type:"image", id:"Image_331", name:"noname", visible:"true", x:"0", y:"793", width:"822", height:"494", opacity:"100", normalImage:"1780014215740.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_103", name:"noname", visible:"true", x:"0", y:"785", width:"825", height:"502", mode:"slide", normalImage:"1780015732867.jpg", link:"address|_blank|", normalImage1:"1780015732898.jpg", link1:"address|_blank|", normalImage2:"1780015733026.jpg", link2:"address|_blank|", normalImage3:"1780015733060.jpg", link3:"address|_blank|", normalImage4:"1780015733090.jpg", link4:"address|_blank|"}
],
[24,{type:"image", id:"Image_318", name:"noname", visible:"true", x:"420", y:"630", width:"334", height:"306", opacity:"100", normalImage:"1779976608391.gif", rolloverImage:"", link:""}
],
[25,{type:"image", id:"Image_332", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"553", opacity:"100", normalImage:"1780014246870.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_104", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"554", mode:"slide", normalImage:"1780015858298.jpg", link:"address|_blank|", normalImage1:"1780015858330.jpg", link1:"address|_blank|", normalImage2:"1780015858365.jpg", link2:"address|_blank|", normalImage3:"1780015858393.jpg", link3:"address|_blank|"}
],
[28,{type:"imageSlider", id:"ImageSlider_71", name:"noname", visible:"false", x:"0", y:"0", width:"727", height:"446", mode:"slide", normalImage:"1775009382206.jpg", link:"address|_blank|", normalImage1:"1775009382245.jpg", link1:"address|_blank|", normalImage2:"1775009382278.jpg", link2:"address|_blank|", normalImage3:"1775009382311.jpg", link3:"address|_blank|", normalImage4:"1775009382347.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_250", name:"noname", visible:"true", x:"1", y:"0", width:"727", height:"446", opacity:"100", normalImage:"1775008193832.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_250", name:"액션Image_250", dispatcher:"Image_250", event:"onRelease", target:"ImageSlider_71", action:"toggleVisible"}
],
[34,{type:"imageSlider", id:"ImageSlider_105", name:"noname", visible:"false", x:"0", y:"71", width:"729", height:"546", mode:"slide", normalImage:"1780016974303.jpg", link:"address|_blank|", normalImage1:"1780016974339.jpg", link1:"address|_blank|", normalImage2:"1780016974500.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_333", name:"noname", visible:"true", x:"0", y:"71", width:"728", height:"545", opacity:"100", normalImage:"1780014169627.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_333", name:"액션Image_333", dispatcher:"Image_333", event:"onRelease", target:"ImageSlider_105", action:"toggleVisible"}
],
[36,{type:"imageSlider", id:"ImageSlider_106", name:"noname", visible:"false", x:"0", y:"169", width:"825", height:"501", mode:"slide", normalImage:"1780017596003.jpg", link:"address|_blank|", normalImage1:"1780017596038.jpg", link1:"address|_blank|", normalImage2:"1780017596070.jpg", link2:"address|_blank|", normalImage3:"1780017596136.jpg", link3:"address|_blank|", normalImage4:"1780017596167.jpg", link4:"address|_blank|"}
],
[37,{type:"imageSlider", id:"ImageSlider_107", name:"noname", visible:"true", x:"101", y:"168", width:"728", height:"505", mode:"slide", normalImage:"1780017805209.jpg", link:"address|_blank|", normalImage1:"1780017805245.jpg", link1:"address|_blank|", normalImage2:"1780017805277.jpg", link2:"address|_blank|", normalImage3:"1780017805344.jpg", link3:"address|_blank|", normalImage4:"1780017805378.jpg", link4:"address|_blank|", normalImage5:"1780017805411.jpg", link5:"address|_blank|", normalImage6:"1780017805442.jpg", link6:"address|_blank|"}
],
[38,{type:"image", id:"Image_311", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"458", opacity:"100", normalImage:"1779964338853.gif", rolloverImage:"", link:""}
],
[40,{type:"image", id:"Image_312", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"458", opacity:"100", normalImage:"1779964359811.gif", rolloverImage:"", link:""}
],
[42,{type:"image", id:"Image_313", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"458", opacity:"100", normalImage:"1779964377882.gif", rolloverImage:"", link:""}
],
[45,{type:"image", id:"Image_314", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"458", opacity:"100", normalImage:"1779964401391.gif", rolloverImage:"", link:""}
],
[47,{type:"video", id:"Video_42", name:"noname", visible:"true", x:"201", y:"71", width:"625", height:"429", normalImage:"1779976992325.jpg", movieURL:"1780022355489.mp4"}
],
[48,{type:"image", id:"Image_319", name:"noname", visible:"true", x:"69", y:"310", width:"699", height:"863", opacity:"100", normalImage:"1779976624822.gif", rolloverImage:"", link:""}
],
[50,{type:"imageSlider", id:"ImageSlider_108", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"447", mode:"slide", normalImage:"1780019615239.jpg", link:"address|_blank|", normalImage1:"1780019615369.jpg", link1:"address|_blank|", normalImage2:"1780019615415.jpg", link2:"address|_blank|", normalImage3:"1780019615442.jpg", link3:"address|_blank|"},
{type:"image", id:"Image_338", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"447", opacity:"100", normalImage:"1780014169627.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_338", name:"액션Image_338", dispatcher:"Image_338", event:"onRelease", target:"ImageSlider_108", action:"toggleVisible"}
],
[51,{type:"imageSlider", id:"ImageSlider_109", name:"noname", visible:"false", x:"178", y:"84", width:"649", height:"455", mode:"slide", normalImage:"1780019828069.jpg", link:"address|_blank|", normalImage1:"1780019828190.jpg", link1:"address|_blank|", normalImage2:"1780019828245.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_337", name:"noname", visible:"true", x:"178", y:"83", width:"649", height:"455", opacity:"100", normalImage:"1780014169627.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_337", name:"액션Image_337", dispatcher:"Image_337", event:"onRelease", target:"ImageSlider_109", action:"toggleVisible"}
],
[60,{type:"image", id:"Image_278", name:"noname", visible:"true", x:"511", y:"521", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1122781200023"}
],
[61,{type:"image", id:"Image_280", name:"noname", visible:"true", x:"588", y:"880", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=5224023003931"},
{type:"image", id:"Image_281", name:"noname", visible:"true", x:"572", y:"737", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=5224021003156"}
],
[62,{type:"image", id:"Image_282", name:"noname", visible:"true", x:"661", y:"596", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=5224023003947"},
{type:"image", id:"Image_305", name:"noname", visible:"true", x:"654", y:"439", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=5224021003163"}
],
[63,{type:"image", id:"Image_306", name:"noname", visible:"true", x:"285", y:"1031", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=5224023003339"},
{type:"image", id:"Image_307", name:"noname", visible:"true", x:"279", y:"564", width:"95", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=5224023002931"}
],
[67,{type:"imageSlider", id:"ImageSlider_110", name:"noname", visible:"true", x:"0", y:"68", width:"825", height:"625", mode:"slide", normalImage:"1780019999445.jpg", link:"address|_blank|", normalImage1:"1780019999478.jpg", link1:"address|_blank|", normalImage2:"1780019999602.jpg", link2:"address|_blank|", normalImage3:"1780019999630.jpg", link3:"address|_blank|"}
],
[68,{type:"image", id:"Image_308", name:"noname", visible:"true", x:"0", y:"0", width:"822", height:"1281", opacity:"100", normalImage:"1779962144622.gif", rolloverImage:"", link:""}
],
[69,{type:"image", id:"Image_321", name:"noname", visible:"true", x:"570", y:"383", width:"162", height:"117", opacity:"100", normalImage:"1779976717280.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_320", name:"noname", visible:"true", x:"605", y:"374", width:"192", height:"173", opacity:"100", normalImage:"1779976645012.gif", rolloverImage:"", link:""},
{type:"video", id:"Video_43", name:"noname", visible:"true", x:"0", y:"693", width:"822", height:"459", normalImage:"1780013917667.jpg", movieURL:"1780013815543.mp4"}
],
[71,{type:"image", id:"Image_322", name:"noname", visible:"true", x:"565", y:"468", width:"253", height:"145", opacity:"100", normalImage:"1779976734217.gif", rolloverImage:"", link:""}
],
[73,{type:"image", id:"Image_324", name:"noname", visible:"true", x:"559", y:"113", width:"162", height:"117", opacity:"100", normalImage:"1779976765414.jpg", rolloverImage:"", link:""},
{type:"image", id:"Image_323", name:"noname", visible:"true", x:"596", y:"127", width:"165", height:"174", opacity:"100", normalImage:"1779976751592.gif", rolloverImage:"", link:""}
],
[86,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"211", y:"736", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook/202605/index.html"}
],
[89,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"598", y:"592", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"},
{type:"image", id:"Image_309", name:"noname", visible:"true", x:"581", y:"1040", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/FlBBxS8J"},
{type:"image", id:"Image_310", name:"noname", visible:"true", x:"427", y:"1037", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/Fc66g66Z"}
],
[90,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"307", y:"1109", width:"219", height:"130", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*86*/	"",
		/*87*/	"",
		/*88*/	"",
		/*89*/	"",
		/*90*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"46"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"58"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"68"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"74"}]
	};