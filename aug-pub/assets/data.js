/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 84,
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
	RANDOM:475956,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"4",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"14",label:"터에서 치르다",url:"",child:"0",id:"8",parent:"2"},
		{index:"20",label:"I'll land, 글로벌",url:"",child:"0",id:"9",parent:"2"},
		{index:"26",label:"",url:"",child:"0",id:"18",parent:"2"},
		{index:"32",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"32",label:"人site 테이블",url:"",child:"0",id:"10",parent:"3"},
		{index:"40",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"40",label:"함께하는 JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"46",label:"JDC 컬렉션",url:"",child:"0",id:"13",parent:"4"},
		{index:"58",label:"Multiplay",url:"",child:"2",id:"5",parent:"0"},
		{index:"58",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"64",label:"오름의 일상곡",url:"",child:"0",id:"15",parent:"5"},
		{index:"70",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"70",label:"ESG 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"76",label:"모다들엉 마당",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""},
{type:"video", id:"Video_4", name:"noname", visible:"true", x:"-200", y:"1", width:"2050", height:"2950", normalImage:"1754622512726.jpg", movieURL:"1754615425045.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"188", y:"2140", width:"180", height:"188", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"461", y:"2137", width:"194", height:"203", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"756", y:"2134", width:"169", height:"177", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"1016", y:"2124", width:"186", height:"194", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"176", y:"1655", width:"175", height:"183", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[8,{type:"video", id:"Video_5", name:"noname", visible:"true", x:"0", y:"1242", width:"1655", height:"1007", normalImage:"1754618036863.png", movieURL:"1754615466664.mp4"}
],
[11,{type:"image", id:"Image_33", name:"noname", visible:"true", x:"182", y:"1441", width:"1293", height:"907", opacity:"100", normalImage:"1754633564486.gif", rolloverImage:"", link:""}
],
[15,{type:"youtube", id:"Youtube_11", name:"noname", visible:"true", x:"192", y:"531", width:"1251", height:"676", youtubeURL:"https://youtu.be/QQnd9x2Ruyo?si=AjLFwO16UaiaBvSX"}
],
[19,{type:"imageSlider", id:"ImageSlider_7", name:"noname", visible:"true", x:"0", y:"1642", width:"1655", height:"934", mode:"slide", normalImage:"1754615912473.png", link:"address|_blank|", normalImage1:"1754616720700.png", link1:"address|_blank|", normalImage2:"1754615919010.png", link2:"address|_blank|", normalImage3:"1754616737200.png", link3:"address|_blank|", normalImage4:"1754616740414.png", link4:"address|_blank|", normalImage5:"1754616743767.png", link5:"address|_blank|", normalImage6:"1754616752547.png", link6:"address|_blank|", normalImage7:"1754616755735.png", link7:"address|_blank|", normalImage8:"1754616766179.png", link8:"address|_blank|"}
],
[20,{type:"image", id:"Image_46", name:"noname", visible:"true", x:"0", y:"1103", width:"1649", height:"1207", opacity:"100", normalImage:"1754636376933.png", rolloverImage:"", link:""},
{type:"image", id:"Image_47", name:"noname", visible:"false", x:"0", y:"1090", width:"1655", height:"1218", opacity:"100", normalImage:"1754638726601.gif", rolloverImage:"", link:""},
{type:"image", id:"Image_48", name:"noname", visible:"true", x:"0", y:"1101", width:"1649", height:"1204", opacity:"100", normalImage:"1754638751866.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_48", name:"액션Image_48", dispatcher:"Image_48", event:"onRelease", target:"Image_47", action:"toggleVisible"}
],
[26,{type:"image", id:"Image_34", name:"noname", visible:"false", x:"0", y:"547", width:"1649", height:"1756", opacity:"100", normalImage:"1754534876481.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_34", name:"액션Image_34", dispatcher:"Image_34", event:"onRelease", target:"Youtube_8", action:"toggleVisible"},
{type:"youtube", id:"Youtube_8", name:"noname", visible:"true", x:"0", y:"530", width:"1655", height:"1772", youtubeURL:"https://youtu.be/MDCtIX5wp28?si=fwfFSrVTRafNJrAQ"}
],
[28,{type:"image", id:"Image_17", name:"noname", visible:"false", x:"0", y:"443", width:"1700", height:"1921", opacity:"100", normalImage:"1752042350586.png", rolloverImage:"", link:""}
],
[37,{type:"youtube", id:"Youtube_12", name:"noname", visible:"true", x:"0", y:"524", width:"1449", height:"806", youtubeURL:"https://youtu.be/MTgzK9gsdsU?si=6c0llRWR6XUyF4mW"}
],
[38,{type:"imageSlider", id:"ImageSlider_8", name:"noname", visible:"true", x:"195", y:"531", width:"1459", height:"935", mode:"slide", normalImage:"1754617168379.png", link:"address|_blank|", normalImage1:"1754617171945.png", link1:"address|_blank|", normalImage2:"1754617174483.png", link2:"address|_blank|", normalImage3:"1754617176979.png", link3:"address|_blank|"}
],
[49,{type:"image", id:"Image_39", name:"noname", visible:"true", x:"1079", y:"172", width:"404", height:"153", opacity:"100", normalImage:"1754554768882.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/official/brandStore.do?brandNm=lancome&brandCd=446"},
{type:"image", id:"Image_40", name:"noname", visible:"true", x:"1032", y:"2124", width:"462", height:"205", opacity:"100", normalImage:"1754554787292.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/official/brandStore.do?brandNm=lancome&brandCd=446"}
],
[51,{type:"image", id:"Image_41", name:"noname", visible:"true", x:"1043", y:"137", width:"446", height:"205", opacity:"100", normalImage:"1754554902488.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=271&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=271&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1386.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_42", name:"noname", visible:"true", x:"881", y:"844", width:"416", height:"186", opacity:"100", normalImage:"1754554912916.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=271&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=271&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1386.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[52,{type:"image", id:"Image_29", name:"noname", visible:"true", x:"1066", y:"2117", width:"416", height:"206", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=103733&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=103733&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1358.1&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[54,{type:"image", id:"Image_43", name:"noname", visible:"true", x:"167", y:"2120", width:"417", height:"213", opacity:"100", normalImage:"1754554992223.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=103728&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=103728&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1386.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[55,{type:"image", id:"Image_44", name:"noname", visible:"true", x:"158", y:"1064", width:"423", height:"183", opacity:"100", normalImage:"1754555068157.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=103728&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=103728&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1386.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[56,{type:"image", id:"Image_30", name:"noname", visible:"true", x:"1066", y:"130", width:"420", height:"179", opacity:"100", normalImage:"1752138171247.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=101572&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=101572&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1358.1&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_45", name:"noname", visible:"true", x:"154", y:"1061", width:"433", height:"176", opacity:"100", normalImage:"1754555116117.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=100056&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=100056&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1386.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="}
],
[57,{type:"image", id:"Image_36", name:"noname", visible:"true", x:"1097", y:"43", width:"381", height:"209", opacity:"100", normalImage:"1754535915331.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/event/eventDetail.do?serNo=1000000560"}
],
[72,{type:"image", id:"Image_37", name:"noname", visible:"true", x:"0", y:"449", width:"1649", height:"1914", opacity:"100", normalImage:"1754633513538.gif", rolloverImage:"", link:""}
],
[81,{type:"image", id:"Image_38", name:"noname", visible:"true", x:"1066", y:"725", width:"410", height:"157", opacity:"100", normalImage:"1754544262999.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[82,{type:"image", id:"Image_31", name:"", visible:"true", x:"560", y:"2029", width:"461", height:"205", opacity:"100", normalImage:"1752806517034.png", rolloverImage:"", link:"address|_blank|https://naver.me/5xa0nFXf"},
{type:"image", id:"Image_32", name:"", visible:"true", x:"1068", y:"2046", width:"410", height:"176", opacity:"100", normalImage:"1753060080848.png", rolloverImage:"", link:"address|_blank|https://naver.me/Fbqui5dK"}
],
[84,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"680", y:"2214", width:"312", height:"202", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*84*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"32"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"40"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"58"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"70"}]
	};