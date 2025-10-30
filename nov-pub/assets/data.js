/** 이북 데이터 자료 정의
**/
var eBookData = {
	useGuidePopup		: "0",
	password			: "",
	useDebug			: false,
	pageExt				: "svg",
	totalPageNum		: 88,
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
	RANDOM:274336,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC 비전웨이브",url:"",child:"0",id:"7",parent:"2"},
		{index:"18",label:"人site 테이블",url:"",child:"0",id:"8",parent:"2"},
		{index:"22",label:"터에서 치르다",url:"",child:"0",id:"9",parent:"2"},
		{index:"30",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"30",label:"I'll Land, Global",url:"",child:"0",id:"10",parent:"3"},
		{index:"38",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"38",label:"함께하는 JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"44",label:"JDC 컬렉션",url:"",child:"0",id:"13",parent:"4"},
		{index:"52",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"52",label:"예술과 Thumb타기",url:"",child:"0",id:"14",parent:"5"},
		{index:"62",label:"Beyond",url:"",child:"3",id:"6",parent:"0"},
		{index:"62",label:"동반성장 리포트",url:"",child:"0",id:"16",parent:"6"},
		{index:"66",label:"칭찬햄수다",url:"",child:"0",id:"17",parent:"6"},
		{index:"80",label:"모다들엉 마당",url:"",child:"0",id:"18",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_24", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"1838", normalImage:"1761711043346.jpg", movieURL:"1761711039619.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_25", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"1839", normalImage:"1761711053751.jpg", movieURL:"1761711050219.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"188", y:"2140", width:"180", height:"188", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"461", y:"2137", width:"194", height:"203", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"756", y:"2134", width:"169", height:"177", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"1016", y:"2124", width:"186", height:"194", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"176", y:"1655", width:"175", height:"183", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[11,{type:"youtube", id:"Youtube_26", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"908", youtubeURL:"https://youtu.be/y61dpoWJyCA?si=zb46pcsTH34YlvxQ"}
],
[13,{type:"youtube", id:"Youtube_27", name:"noname", visible:"true", x:"0", y:"1662", width:"1649", height:"929", youtubeURL:"https://youtu.be/AR_FEU-TwQw?si=lFXmhi5Iy1Az1g2m"}
],
[14,{type:"imageSlider", id:"ImageSlider_39", name:"noname", visible:"false", x:"0", y:"0", width:"1655", height:"910", mode:"slide", normalImage:"1761712180615.jpg", link:"address|_blank|", normalImage1:"1761712180650.jpg", link1:"address|_blank|", normalImage2:"1761712180686.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_141", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"910", opacity:"100", normalImage:"1761712040639.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_141", name:"액션Image_141", dispatcher:"Image_141", event:"onRelease", target:"ImageSlider_39", action:"toggleVisible"}
],
[15,{type:"youtube", id:"Youtube_28", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"913", youtubeURL:"https://youtu.be/krbmy9HsBb4?si=hKhXuQ-adiTIoeyC"}
],
[22,{type:"video", id:"Video_26", name:"noname", visible:"true", x:"0", y:"521", width:"1649", height:"930", normalImage:"1761711074611.jpg", movieURL:"1761711062741.mp4"}
],
[26,{type:"image", id:"Image_145", name:"noname", visible:"false", x:"5", y:"532", width:"1649", height:"873", opacity:"100", normalImage:"1761808271994.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_42", name:"noname", visible:"true", x:"0", y:"523", width:"1655", height:"887", mode:"slide", normalImage:"1761808755161.jpg", link:"address|_blank|", normalImage1:"1761808755191.jpg", link1:"address|_blank|", normalImage2:"1761808755224.jpg", link2:"address|_blank|", normalImage3:"1761808755259.jpg", link3:"address|_blank|", normalImage4:"1761808755278.jpg", link4:"address|_blank|", normalImage5:"1761808755329.jpg", link5:"address|_blank|", normalImage6:"1761808755360.jpg", link6:"address|_blank|", normalImage7:"1761808755390.jpg", link7:"address|_blank|"}
],
[30,{type:"youtube", id:"Youtube_29", name:"noname", visible:"false", x:"0", y:"867", width:"1649", height:"1319", youtubeURL:"https://youtu.be/WcOb_U0LRzA?si=YUxkcdbhX23R0bhG"},
{type:"image", id:"Image_128", name:"noname", visible:"true", x:"0", y:"877", width:"1649", height:"1423", opacity:"100", normalImage:"1761711095103.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_128", name:"액션Image_128", dispatcher:"Image_128", event:"onRelease", target:"Youtube_29", action:"toggleVisible"}
],
[32,{type:"image", id:"Image_143", name:"noname", visible:"true", x:"0", y:"1549", width:"1649", height:"751", opacity:"100", normalImage:"1761712878671.gif", rolloverImage:"", link:""}
],
[37,{type:"image", id:"Image_129", name:"noname", visible:"true", x:"901", y:"1942", width:"252", height:"184", opacity:"100", normalImage:"1761711323351.png", rolloverImage:"", link:"address|_blank|https://kis.ac/"},
{type:"image", id:"Image_130", name:"noname", visible:"true", x:"1207", y:"1948", width:"252", height:"184", opacity:"100", normalImage:"1761711323351.png", rolloverImage:"", link:"address|_blank|https://www.linkedin.com/school/kisj/"},
{type:"image", id:"Image_131", name:"noname", visible:"true", x:"901", y:"2171", width:"252", height:"184", opacity:"100", normalImage:"1761711323351.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/kis_jejucampus?igsh=Njd6ODNyNWU5OHZq"},
{type:"image", id:"Image_132", name:"noname", visible:"true", x:"1213", y:"2177", width:"252", height:"184", opacity:"100", normalImage:"1761711323351.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/@KISPride"}
],
[38,{type:"video", id:"Video_27", name:"noname", visible:"false", x:"901", y:"1942", width:"252", height:"184", normalImage:"", movieURL:"1761711987175.mp4"},
{type:"image", id:"Image_140", name:"noname", visible:"true", x:"0", y:"528", width:"1649", height:"1370", opacity:"100", normalImage:"1761711969117.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_140", name:"액션Image_140", dispatcher:"Image_140", event:"onRelease", target:"Video_27", action:"toggleVisible"}
],
[42,{type:"imageSlider", id:"ImageSlider_41", name:"noname", visible:"false", x:"0", y:"0", width:"1649", height:"927", mode:"slide", normalImage:"1761808165159.jpg", link:"address|_blank|", normalImage1:"1761808165224.jpg", link1:"address|_blank|", normalImage2:"1761808165324.jpg", link2:"address|_blank|"},
{type:"image", id:"Image_144", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"932", opacity:"100", normalImage:"1761712910942.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_144", name:"액션Image_144", dispatcher:"Image_144", event:"onRelease", target:"ImageSlider_41", action:"toggleVisible"}
],
[43,{type:"youtube", id:"Youtube_31", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"933", youtubeURL:"https://youtu.be/lTRzJImWJYU?si=CmUQdBEQC8TetWc0"}
],
[45,{type:"youtube", id:"Youtube_30", name:"noname", visible:"true", x:"0", y:"831", width:"1649", height:"911", youtubeURL:"https://youtu.be/epUo21YAkwQ?si=pC8bg1kl-3azlY97"}
],
[56,{type:"video", id:"Video_28", name:"noname", visible:"true", x:"0", y:"0", width:"1649", height:"2054", normalImage:"1761713255043.jpg", movieURL:"1761713185680.mp4"}
],
[60,{type:"video", id:"Video_29", name:"noname", visible:"true", x:"0", y:"0", width:"1446", height:"1808", normalImage:"1761713281009.jpg", movieURL:"1761713263615.mp4"}
],
[61,{type:"image", id:"Image_134", name:"noname", visible:"true", x:"836", y:"2043", width:"139", height:"264", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://www.jeju.go.kr/jejumuseum/index.htm"},
{type:"image", id:"Image_135", name:"noname", visible:"true", x:"1000", y:"2036", width:"139", height:"264", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jmoca2007"},
{type:"image", id:"Image_136", name:"noname", visible:"true", x:"1165", y:"2046", width:"139", height:"264", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jmoca35"},
{type:"image", id:"Image_137", name:"noname", visible:"true", x:"1323", y:"2039", width:"139", height:"264", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCVVRvdoyqcPrjbmUDw_5hWw/featured"}
],
[65,{type:"image", id:"Image_138", name:"noname", visible:"true", x:"1183", y:"1857", width:"294", height:"179", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/prcenter/issue/notice.cs?action=view&artiId=36171"}
],
[84,{type:"image", id:"Image_139", name:"noname", visible:"true", x:"1090", y:"284", width:"381", height:"166", opacity:"100", normalImage:"1761711642541.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook/202510/index.html"}
],
[86,{type:"image", id:"Image_126", name:"", visible:"true", x:"954", y:"1957", width:"516", height:"176", opacity:"100", normalImage:"1753060080848.png", rolloverImage:"", link:"address|_blank|https://naver.me/xXw8ek6z"},
{type:"image", id:"Image_127", name:"", visible:"true", x:"951", y:"2164", width:"512", height:"205", opacity:"100", normalImage:"1752806517034.png", rolloverImage:"", link:"address|_blank|https://naver.me/xumBgtak"}
],
[88,{type:"image", id:"Image_27", name:"noname", visible:"true", x:"680", y:"2214", width:"312", height:"202", opacity:"100", normalImage:"1752111233778.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/main.cs"}
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
		/*88*/	""],
	
	indexTabList : [ /** 인덱스탭 목록 */
		{textBold:"", useIndex:"true", text:"", width:"100", shadow:"true", radius_TL:"0", radius_TR:"0", radius_BR:"0", radius_BL:"0", txalign:"left", textHeight:"12"},
		{text:"Touch", textColor:"0xffffff,100", backgroundColor:"0x00b0f0,100", link:"8"},
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"30"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"38"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"52"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"62"}]
	};