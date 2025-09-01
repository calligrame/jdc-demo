/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 76,
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
	RANDOM:818564,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"14",label:"人site 테이블",url:"",child:"0",id:"8",parent:"2"},
		{index:"20",label:"터에서 치르다",url:"",child:"0",id:"9",parent:"2"},
		{index:"26",label:"Hybrid",url:"",child:"2",id:"3",parent:"0"},
		{index:"26",label:"I'll land, 글로벌",url:"",child:"0",id:"10",parent:"3"},
		{index:"32",label:"人site 테이블2",url:"",child:"0",id:"19",parent:"3"},
		{index:"38",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"38",label:"함께하는 JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"46",label:"JDC 컬렉션",url:"",child:"0",id:"13",parent:"4"},
		{index:"54",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"54",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"60",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"60",label:"ESG 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"66",label:"모다들엉 마당",url:"",child:"0",id:"17",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_16", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"1548", normalImage:"1756714480687.jpg", movieURL:"1756714464124.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_17", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"1548", normalImage:"1756714510890.jpg", movieURL:"1756714488393.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"188", y:"2140", width:"180", height:"188", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"461", y:"2137", width:"194", height:"203", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"756", y:"2134", width:"169", height:"177", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"1016", y:"2124", width:"186", height:"194", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"176", y:"1655", width:"175", height:"183", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[9,{type:"image", id:"Image_70", name:"noname", visible:"true", x:"0", y:"218", width:"1649", height:"2155", opacity:"100", normalImage:"1756711723829.gif", rolloverImage:"", link:""}
],
[11,{type:"image", id:"Image_71", name:"noname", visible:"true", x:"5", y:"320", width:"1649", height:"1410", opacity:"100", normalImage:"1756706648994.gif", rolloverImage:"", link:""}
],
[20,{type:"video", id:"Video_12", name:"noname", visible:"true", x:"0", y:"1896", width:"1655", height:"679", normalImage:"1756711999194.jpg", movieURL:"1756711978188.mp4"}
],
[21,{type:"video", id:"Video_13", name:"noname", visible:"true", x:"0", y:"379", width:"923", height:"516", normalImage:"1756712060317.jpg", movieURL:"1756712045090.mp4"},
{type:"imageSlider", id:"ImageSlider_15", name:"noname", visible:"true", x:"941", y:"383", width:"713", height:"514", mode:"slide", normalImage:"1756712198187.jpg", link:"address|_blank|", normalImage1:"1756712198228.jpg", link1:"address|_blank|"}
],
[22,{type:"imageSlider", id:"ImageSlider_16", name:"noname", visible:"false", x:"642", y:"0", width:"1012", height:"653", mode:"slide", normalImage:"1756712320396.jpg", link:"address|_blank|", normalImage1:"1756712320437.jpg", link1:"address|_blank|", normalImage2:"1756712320475.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_81", name:"noname", visible:"true", x:"639", y:"0", width:"1009", height:"652", opacity:"100", normalImage:"1756712235989.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_81", name:"액션Image_81", dispatcher:"Image_81", event:"onRelease", target:"ImageSlider_16", action:"toggleVisible"}
],
[24,{type:"imageSlider", id:"ImageSlider_17", name:"noname", visible:"false", x:"-1", y:"700", width:"1655", height:"719", mode:"slide", normalImage:"1756712735163.jpg", link:"address|_blank|", normalImage1:"1756712735212.jpg", link1:"address|_blank|", normalImage2:"1756712735248.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_82", name:"noname", visible:"true", x:"0", y:"699", width:"1655", height:"719", opacity:"100", normalImage:"1756712516659.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_82", name:"액션Image_82", dispatcher:"Image_82", event:"onRelease", target:"ImageSlider_17", action:"toggleVisible"}
],
[26,{type:"video", id:"Video_14", name:"noname", visible:"true", x:"0", y:"931", width:"1655", height:"842", normalImage:"1756713190964.jpg", movieURL:"1756713129225.mp4"}
],
[28,{type:"imageSlider", id:"ImageSlider_18", name:"noname", visible:"true", x:"0", y:"1731", width:"1655", height:"844", mode:"slide", normalImage:"1756714698422.jpg", link:"address|_blank|", normalImage1:"1756714701829.jpg", link1:"address|_blank|"}
],
[29,{type:"image", id:"Image_83", name:"noname", visible:"true", x:"0", y:"1731", width:"1649", height:"844", opacity:"100", normalImage:"1756713219462.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_19", name:"noname", visible:"true", x:"0", y:"1731", width:"1655", height:"844", mode:"slide", normalImage:"1756713592531.jpg", link:"address|_blank|", normalImage1:"1756713592564.jpg", link1:"address|_blank|", normalImage2:"1756713592599.jpg", link2:"address|_blank|", normalImage3:"1756713592631.jpg", link3:"address|_blank|", normalImage4:"1756713592665.jpg", link4:"address|_blank|", normalImage5:"1756713592698.jpg", link5:"address|_blank|", normalImage6:"1756713592731.jpg", link6:"address|_blank|"}
],
[30,{type:"video", id:"Video_11", name:"noname", visible:"true", x:"0", y:"0", width:"819", height:"532", normalImage:"1756707553644.jpg", movieURL:"1756707447679.mp4"}
],
[31,{type:"video", id:"Video_15", name:"noname", visible:"true", x:"0", y:"0", width:"1655", height:"532", normalImage:"1756713672321.jpg", movieURL:"1756713648330.mp4"}
],
[32,{type:"video", id:"Video_9", name:"noname", visible:"false", x:"5", y:"679", width:"1649", height:"1021", normalImage:"", movieURL:"1756709063419.mp4"},
{type:"image", id:"Image_76", name:"noname", visible:"true", x:"0", y:"285", width:"1649", height:"1417", opacity:"100", normalImage:"1756707234492.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_76", name:"액션Image_76", dispatcher:"Image_76", event:"onRelease", target:"Video_9", action:"toggleVisible"}
],
[33,{type:"image", id:"Image_79", name:"noname", visible:"true", x:"0", y:"285", width:"1649", height:"1417", opacity:"100", normalImage:"1756707234492.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_79", name:"액션Image_79", dispatcher:"Image_79", event:"onRelease", target:"Video_9", action:"toggleVisible"}
],
[38,{type:"youtube", id:"Youtube_14", name:"noname", visible:"false", x:"0", y:"743", width:"1649", height:"1286", youtubeURL:"https://youtu.be/Fzr2TReTeqE?si=nGCQNOG50fs9LD-W"},
{type:"image", id:"Image_65", name:"noname", visible:"true", x:"0", y:"285", width:"1649", height:"1315", opacity:"100", normalImage:"1756692840328.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_65", name:"액션Image_65", dispatcher:"Image_65", event:"onRelease", target:"Youtube_14", action:"toggleVisible"}
],
[39,{type:"youtube", id:"Youtube_15", name:"noname", visible:"false", x:"0", y:"743", width:"1649", height:"1286", youtubeURL:"https://youtu.be/Fzr2TReTeqE?si=nGCQNOG50fs9LD-W"},
{type:"image", id:"Image_66", name:"noname", visible:"true", x:"0", y:"285", width:"1649", height:"1315", opacity:"100", normalImage:"1756692840328.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_66", name:"액션Image_66", dispatcher:"Image_66", event:"onRelease", target:"Youtube_15", action:"toggleVisible"}
],
[41,{type:"imageSlider", id:"ImageSlider_20", name:"noname", visible:"false", x:"0", y:"526", width:"1655", height:"642", mode:"slide", normalImage:"1756713979560.jpg", link:"address|_blank|", normalImage1:"1756713979598.jpg", link1:"address|_blank|", normalImage2:"1756713979632.jpg", link2:"address|_blank|", normalImage3:"1756713979666.jpg", link3:"address|_blank|"},
{type:"image", id:"Image_84", name:"noname", visible:"true", x:"5", y:"527", width:"1649", height:"642", opacity:"100", normalImage:"1756713698758.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_84", name:"액션Image_84", dispatcher:"Image_84", event:"onRelease", target:"ImageSlider_20", action:"toggleVisible"}
],
[44,{type:"imageSlider", id:"ImageSlider_21", name:"noname", visible:"false", x:"0", y:"0", width:"1655", height:"894", mode:"slide", normalImage:"1756714247616.jpg", link:"address|_blank|", normalImage1:"1756714247651.jpg", link1:"address|_blank|", normalImage2:"1756714247687.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_85", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"894", opacity:"100", normalImage:"1756714113452.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_85", name:"액션Image_85", dispatcher:"Image_85", event:"onRelease", target:"ImageSlider_21", action:"toggleVisible"}
],
[45,{type:"youtube", id:"Youtube_16", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"891", youtubeURL:"https://youtu.be/zH6YSDGiNro?si=pzdYppZVr7WtxnKO"}
],
[52,{type:"image", id:"Image_29", name:"noname", visible:"true", x:"1043", y:"1082", width:"416", height:"206", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1032248000001"},
{type:"image", id:"Image_58", name:"noname", visible:"true", x:"1046", y:"1885", width:"416", height:"206", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1032248000002"}
],
[58,{type:"image", id:"Image_59", name:"noname", visible:"true", x:"977", y:"2008", width:"141", height:"305", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jejuff/"},
{type:"image", id:"Image_60", name:"noname", visible:"true", x:"1154", y:"2017", width:"141", height:"305", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jejuff.jejuff"},
{type:"image", id:"Image_61", name:"noname", visible:"true", x:"1325", y:"2014", width:"141", height:"305", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/@jejufilmfestival"}
],
[61,{type:"image", id:"Image_74", name:"noname", visible:"true", x:"0", y:"1168", width:"1649", height:"1129", opacity:"100", normalImage:"1756706700196.gif", rolloverImage:"", link:""}
],
[63,{type:"image", id:"Image_73", name:"noname", visible:"true", x:"56", y:"396", width:"1532", height:"922", opacity:"100", normalImage:"1756708337497.gif", rolloverImage:"", link:""}
],
[65,{type:"image", id:"Image_75", name:"noname", visible:"true", x:"88", y:"1535", width:"1480", height:"821", opacity:"100", normalImage:"1756706710831.gif", rolloverImage:"", link:""}
],
[66,{type:"image", id:"Image_62", name:"noname", visible:"true", x:"175", y:"2121", width:"321", height:"201", opacity:"100", normalImage:"1752138056009.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/prcenter/issue/notice.cs?action=view&artiId=36099"}
],
[71,{type:"image", id:"Image_38", name:"noname", visible:"true", x:"1069", y:"725", width:"410", height:"157", opacity:"100", normalImage:"1754544262999.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"},
{type:"image", id:"Image_63", name:"noname", visible:"true", x:"1165", y:"1765", width:"262", height:"157", opacity:"100", normalImage:"1754544262999.png", rolloverImage:"", link:"address|_blank|https://naver.me/xVGGMzo9"}
],
[74,{type:"image", id:"Image_31", name:"", visible:"true", x:"547", y:"1990", width:"461", height:"205", opacity:"100", normalImage:"1752806517034.png", rolloverImage:"", link:"address|_blank|https://naver.me/F6nnChZ6"},
{type:"image", id:"Image_32", name:"", visible:"true", x:"1048", y:"2003", width:"410", height:"176", opacity:"100", normalImage:"1753060080848.png", rolloverImage:"", link:"address|_blank|https://naver.me/xhllFCDc"}
],
[76,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"680", y:"2214", width:"312", height:"202", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*76*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"26"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"38"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"54"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"60"}]
	};