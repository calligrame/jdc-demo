/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 92,
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
	RANDOM:137012,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"16",label:"터에서 치르다",url:"",child:"0",id:"8",parent:"2"},
		{index:"26",label:"터에서 치르다2",url:"",child:"0",id:"9",parent:"2"},
		{index:"32",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"32",label:"I'll land, 글로벌",url:"",child:"0",id:"10",parent:"3"},
		{index:"42",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"42",label:"함께하는 JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"48",label:"JDC 컬렉션",url:"",child:"0",id:"13",parent:"4"},
		{index:"58",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"58",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"66",label:"Beyond",url:"",child:"3",id:"6",parent:"0"},
		{index:"66",label:"동반성장 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"72",label:"돌담 올레 보듬응멍",url:"",child:"0",id:"17",parent:"6"},
		{index:"84",label:"모다들엉 마당",url:"",child:"0",id:"18",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_24", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"1838", normalImage:"1759211555502.jpg", movieURL:"1759220185893.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_25", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"1839", normalImage:"1759211581731.jpg", movieURL:"1759220191838.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"188", y:"2140", width:"180", height:"188", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"461", y:"2137", width:"194", height:"203", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"756", y:"2134", width:"169", height:"177", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"1016", y:"2124", width:"186", height:"194", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"176", y:"1655", width:"175", height:"183", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[10,{type:"imageSlider", id:"ImageSlider_22", name:"noname", visible:"true", x:"0", y:"1418", width:"1655", height:"882", mode:"slide", normalImage:"1759198515047.jpg", link:"address|_blank|", normalImage1:"1759198515088.jpg", link1:"address|_blank|", normalImage2:"1759198515120.jpg", link2:"address|_blank|"}
],
[13,{type:"imageSlider", id:"ImageSlider_23", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"822", mode:"slide", normalImage:"1759199161883.jpg", link:"address|_blank|", normalImage1:"1759199161922.jpg", link1:"address|_blank|"}
],
[14,{type:"image", id:"Image_90", name:"noname", visible:"true", x:"1248", y:"964", width:"212", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/jejugnbproduct.do?gnbCd=070000&type=070000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=PRD00066&PROD_CD=070000&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=070000&PROD_TYPE=070000&REMT_RCV_EXCHR=1411.6&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_91", name:"noname", visible:"true", x:"1260", y:"1816", width:"212", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/jejugnbproduct.do?gnbCd=070000&type=070000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=PRD00071&PROD_CD=070000&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=070000&PROD_TYPE=070000&REMT_RCV_EXCHR=1411.6&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[15,{type:"image", id:"Image_92", name:"noname", visible:"true", x:"1241", y:"760", width:"212", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.skinmdlab.com/"},
{type:"image", id:"Image_93", name:"noname", visible:"true", x:"1240", y:"1428", width:"212", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/jejugnbproduct.do?gnbCd=070000&type=070000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=PRD00067&PROD_CD=070000&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=070000&PROD_TYPE=070000&REMT_RCV_EXCHR=1411.6&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_94", name:"noname", visible:"true", x:"1260", y:"2100", width:"212", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/jejugnbproduct.do?gnbCd=070000&type=070000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=PRD00068&PROD_CD=070000&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=070000&PROD_TYPE=070000&REMT_RCV_EXCHR=1411.6&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[16,{type:"youtube", id:"Youtube_25", name:"noname", visible:"true", x:"0", y:"1368", width:"1649", height:"933", youtubeURL:"https://youtu.be/Fi9OApRl43k?si=Wzlo0j7DMMfXDkna"}
],
[18,{type:"imageSlider", id:"ImageSlider_24", name:"noname", visible:"true", x:"0", y:"481", width:"1649", height:"927", mode:"slide", normalImage:"1759199847434.JPG", link:"address|_blank|", normalImage1:"1759199847480.JPG", link1:"address|_blank|", normalImage2:"1759199847515.JPG", link2:"address|_blank|", normalImage3:"1759199847550.JPG", link3:"address|_blank|", normalImage4:"1759199847584.JPG", link4:"address|_blank|", normalImage5:"1759199847620.JPG", link5:"address|_blank|", normalImage6:"1759199847658.JPG", link6:"address|_blank|", normalImage7:"1759199847698.JPG", link7:"address|_blank|", normalImage8:"1759199847735.JPG", link8:"address|_blank|", normalImage9:"1759199847769.JPG", link9:"address|_blank|", normalImage10:"1759199847804.JPG", link10:"address|_blank|", normalImage11:"1759199847843.JPG", link11:"address|_blank|", normalImage12:"1759199847881.JPG", link12:"address|_blank|", normalImage13:"1759199847917.JPG", link13:"address|_blank|", normalImage14:"1759199847957.JPG", link14:"address|_blank|"}
],
[21,{type:"image", id:"Image_119", name:"noname", visible:"true", x:"78", y:"195", width:"1492", height:"1468", opacity:"100", normalImage:"1759219421896.gif", rolloverImage:"", link:""}
],
[26,{type:"video", id:"Video_18", name:"noname", visible:"true", x:"0", y:"521", width:"1655", height:"936", normalImage:"1759200141057.jpg", movieURL:"1759211634170.mp4"}
],
[28,{type:"imageSlider", id:"ImageSlider_26", name:"noname", visible:"true", x:"-1", y:"1423", width:"1655", height:"881", mode:"slide", normalImage:"1759200418899.jpg", link:"address|_blank|", normalImage1:"1759200418933.jpg", link1:"address|_blank|", normalImage2:"1759200418965.jpg", link2:"address|_blank|", normalImage3:"1759200418997.jpg", link3:"address|_blank|"}
],
[30,{type:"image", id:"Image_118", name:"noname", visible:"true", x:"67", y:"445", width:"1521", height:"1941", opacity:"100", normalImage:"1759219389338.gif", rolloverImage:"", link:""}
],
[32,{type:"video", id:"Video_19", name:"noname", visible:"false", x:"0", y:"869", width:"1649", height:"1021", normalImage:"", movieURL:"1759211603541.mp4"},
{type:"image", id:"Image_96", name:"noname", visible:"true", x:"1", y:"880", width:"1649", height:"1417", opacity:"100", normalImage:"1759200574866.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_96", name:"액션Image_96", dispatcher:"Image_96", event:"onRelease", target:"Video_19", action:"toggleVisible"}
],
[33,{type:"image", id:"Image_79", name:"noname", visible:"true", x:"0", y:"285", width:"1649", height:"1417", opacity:"100", normalImage:"1756707234492.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_79", name:"액션Image_79", dispatcher:"Image_79", event:"onRelease", target:"Video_9", action:"toggleVisible"}
],
[34,{type:"video", id:"Video_20", name:"noname", visible:"true", x:"0", y:"524", width:"1655", height:"897", normalImage:"1759200940968.jpg", movieURL:"1759211612634.mp4"}
],
[36,{type:"imageSlider", id:"ImageSlider_27", name:"noname", visible:"true", x:"0", y:"531", width:"1655", height:"881", mode:"slide", normalImage:"1759202652125.jpg", link:"address|_blank|", normalImage1:"1759202652167.jpg", link1:"address|_blank|"},
{type:"imageSlider", id:"ImageSlider_28", name:"noname", visible:"true", x:"0", y:"1423", width:"1655", height:"881", mode:"slide", normalImage:"1759202760431.jpg", link:"address|_blank|", normalImage1:"1759202760470.jpg", link1:"address|_blank|"}
],
[39,{type:"imageSlider", id:"ImageSlider_29", name:"noname", visible:"true", x:"-1", y:"530", width:"1655", height:"881", mode:"slide", normalImage:"1759202998567.jpg", link:"address|_blank|", normalImage1:"1759202998602.jpg", link1:"address|_blank|"},
{type:"imageSlider", id:"ImageSlider_30", name:"noname", visible:"true", x:"0", y:"1426", width:"1655", height:"881", mode:"slide", normalImage:"1759203020100.jpg", link:"address|_blank|", normalImage1:"1759203020132.jpg", link1:"address|_blank|"}
],
[44,{type:"imageSlider", id:"ImageSlider_32", name:"noname", visible:"false", x:"0", y:"0", width:"1655", height:"852", mode:"slide", normalImage:"1759203411261.jpg", link:"address|_blank|", normalImage1:"1759203411293.jpg", link1:"address|_blank|"},
{type:"image", id:"Image_100", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"829", opacity:"100", normalImage:"1759203387103.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_100", name:"액션Image_100", dispatcher:"Image_100", event:"onRelease", target:"ImageSlider_32", action:"toggleVisible"}
],
[46,{type:"imageSlider", id:"ImageSlider_33", name:"noname", visible:"false", x:"0", y:"0", width:"1655", height:"887", mode:"slide", normalImage:"1759203943123.jpg", link:"address|_blank|", normalImage1:"1759203943170.jpg", link1:"address|_blank|", normalImage2:"1759203943210.jpg", link2:"address|_blank|", normalImage3:"1759203943248.jpg", link3:"address|_blank|"},
{type:"image", id:"Image_101", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"887", opacity:"100", normalImage:"1759203387103.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_101", name:"액션Image_101", dispatcher:"Image_101", event:"onRelease", target:"ImageSlider_33", action:"toggleVisible"}
],
[50,{type:"image", id:"Image_102", name:"noname", visible:"true", x:"1186", y:"1866", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126135400008"}
],
[51,{type:"image", id:"Image_103", name:"noname", visible:"true", x:"1164", y:"768", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126135900002"},
{type:"image", id:"Image_104", name:"noname", visible:"true", x:"1167", y:"1498", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126131700002"},
{type:"image", id:"Image_105", name:"noname", visible:"true", x:"1179", y:"2166", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126130000009"}
],
[52,{type:"image", id:"Image_29", name:"noname", visible:"true", x:"1194", y:"1395", width:"277", height:"206", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126146500002"},
{type:"image", id:"Image_58", name:"noname", visible:"true", x:"1200", y:"2153", width:"255", height:"206", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126141300002"}
],
[53,{type:"image", id:"Image_106", name:"noname", visible:"true", x:"1186", y:"994", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126140000016"},
{type:"image", id:"Image_107", name:"noname", visible:"true", x:"1176", y:"1768", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=3126140000007"}
],
[56,{type:"image", id:"Image_108", name:"noname", visible:"true", x:"1235", y:"1123", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/event/eventDetail.do?serNo=1000000565"}
],
[57,{type:"image", id:"Image_109", name:"noname", visible:"true", x:"1235", y:"1129", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/event/eventDetail.do?serNo=1000000498"}
],
[62,{type:"video", id:"Video_22", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"913", normalImage:"1759208584483.jpg", movieURL:"1759211656738.mp4"}
],
[65,{type:"image", id:"Image_110", name:"noname", visible:"true", x:"0", y:"1703", width:"1649", height:"872", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://naver.me/5uI1tmwS"},
{type:"image", id:"Image_111", name:"noname", visible:"true", x:"869", y:"1482", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://70festival.com/"},
{type:"image", id:"Image_112", name:"noname", visible:"true", x:"1173", y:"1475", width:"289", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/seogwipo_festa_70"}
],
[66,{type:"image", id:"Image_62", name:"noname", visible:"true", x:"175", y:"2121", width:"321", height:"201", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/prcenter/issue/notice.cs?action=view&artiId=36099"},
{type:"image", id:"Image_113", name:"noname", visible:"true", x:"956", y:"2153", width:"512", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jeju-sp.com/notifications/cnotice.htm?qType=title&q=%EB%82%A9%ED%92%88%EB%8C%80%EA%B8%88&act=view&seq=64510"}
],
[68,{type:"image", id:"Image_121", name:"noname", visible:"true", x:"156", y:"510", width:"1313", height:"652", opacity:"100", normalImage:"1759219541829.gif", rolloverImage:"", link:""}
],
[70,{type:"imageSlider", id:"ImageSlider_36", name:"noname", visible:"true", x:"70", y:"221", width:"1522", height:"2174", mode:"slide", normalImage:"1759219456263.gif", link:"address|_blank|"}
],
[76,{type:"imageSlider", id:"ImageSlider_35", name:"noname", visible:"true", x:"716", y:"0", width:"932", height:"930", mode:"slide", normalImage:"1759205959365.jpg", link:"address|_blank|", normalImage1:"1759206074850.jpg", link1:"address|_blank|"},
{type:"image", id:"Image_115", name:"noname", visible:"true", x:"721", y:"0", width:"932", height:"930", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_115", name:"액션Image_115", dispatcher:"Image_115", event:"onRelease", target:"ImageSlider_35", action:"toggleVisible"}
],
[77,{type:"video", id:"Video_21", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"943", normalImage:"1759206177030.jpg", movieURL:"1759212277624.mp4"}
],
[87,{type:"image", id:"Image_114", name:"noname", visible:"true", x:"1063", y:"718", width:"395", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://naver.me/xVGGMzo9"}
],
[88,{type:"image", id:"Image_116", name:"noname", visible:"true", x:"1095", y:"354", width:"389", height:"163", opacity:"100", normalImage:"1759199294979.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook/202509/index.html"}
],
[90,{type:"image", id:"Image_31", name:"", visible:"true", x:"951", y:"2164", width:"512", height:"205", opacity:"100", normalImage:"1752806517034.png", rolloverImage:"", link:"address|_blank|https://naver.me/xlbBmw2t"},
{type:"image", id:"Image_32", name:"", visible:"true", x:"954", y:"1957", width:"516", height:"176", opacity:"100", normalImage:"1753060080848.png", rolloverImage:"", link:"address|_blank|https://naver.me/Ge4lOSHm"}
],
[92,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"680", y:"2214", width:"312", height:"202", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*90*/	"",
		/*91*/	"",
		/*92*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"32"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"42"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"58"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"66"}]
	};