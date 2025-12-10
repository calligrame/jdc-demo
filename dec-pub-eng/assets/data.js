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
	RANDOM:92557,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"3",id:"2",parent:"0"},
		{index:"8",label:"JDC Vision Wave",url:"",child:"0",id:"7",parent:"2"},
		{index:"18",label:"人site Table 1",url:"",child:"0",id:"8",parent:"2"},
		{index:"26",label:"Walking with the Community",url:"",child:"0",id:"9",parent:"2"},
		{index:"32",label:"Hybrid",url:"",child:"3",id:"3",parent:"0"},
		{index:"32",label:"I'll Land, Global 1",url:"",child:"0",id:"10",parent:"3"},
		{index:"38",label:"I'll Land, Global 2",url:"",child:"0",id:"17",parent:"3"},
		{index:"44",label:"人site Table 2",url:"",child:"0",id:"18",parent:"3"},
		{index:"52",label:"Unique",url:"",child:"1",id:"4",parent:"0"},
		{index:"52",label:"Together with JDC",url:"",child:"0",id:"12",parent:"4"},
		{index:"60",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"60",label:"Doldam Olle Bodeumeungmeong",url:"",child:"0",id:"14",parent:"5"},
		{index:"68",label:"Beyond",url:"",child:"3",id:"6",parent:"0"},
		{index:"68",label:"ESG Report",url:"",child:"0",id:"16",parent:"6"},
		{index:"74",label:"Thumb: Art at Your Fingertips",url:"",child:"0",id:"17",parent:"6"},
		{index:"80",label:"Modadeuleong Madang",url:"",child:"0",id:"18",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"921", normalImage:"1764656923248.jpg", movieURL:"1764745692806.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"917", normalImage:"1764656900287.jpg", movieURL:"1764745698911.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"95", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"505", y:"1064", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"377", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"230", y:"1067", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"94", y:"851", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[10,{type:"image", id:"Image_147", name:"noname", visible:"true", x:"45", y:"754", width:"722", height:"437", opacity:"100", normalImage:"1765345325398.gif", rolloverImage:"", link:""}
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
[30,{type:"image", id:"Image_153", name:"noname", visible:"true", x:"574", y:"270", width:"143", height:"85", opacity:"100", normalImage:"1764652179283.png", rolloverImage:"", link:"address|_blank|facebook.com/jdccenter"}
],
[31,{type:"image", id:"Image_154", name:"noname", visible:"true", x:"574", y:"270", width:"143", height:"85", opacity:"100", normalImage:"1764652179283.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"}
],
[32,{type:"imageSlider", id:"ImageSlider_44", name:"noname", visible:"false", x:"0", y:"458", width:"825", height:"697", mode:"slide", normalImage:"1764654102650.jpg", link:"address|_blank|", normalImage1:"1764654102702.jpg", link1:"address|_blank|", normalImage2:"1764654102741.jpg", link2:"address|_blank|", normalImage3:"1764654102781.jpg", link3:"address|_blank|", normalImage4:"1764654102822.jpg", link4:"address|_blank|", normalImage5:"1764654102863.jpg", link5:"address|_blank|", normalImage6:"1764654102908.jpg", link6:"address|_blank|", normalImage7:"1764654102945.jpg", link7:"address|_blank|"},
{type:"image", id:"Image_155", name:"noname", visible:"true", x:"0", y:"464", width:"825", height:"685", opacity:"100", normalImage:"1764653219245.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_155", name:"액션Image_155", dispatcher:"Image_155", event:"onRelease", target:"ImageSlider_44", action:"toggleVisible"}
],
[35,{type:"imageSlider", id:"ImageSlider_46", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"496", mode:"slide", normalImage:"1764723051034.jpg", link:"address|_blank|", normalImage1:"1764723051080.jpg", link1:"address|_blank|", normalImage2:"1764723051117.jpg", link2:"address|_blank|", normalImage3:"1764723051156.jpg", link3:"address|_blank|", normalImage4:"1764723051196.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_163", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"494", opacity:"100", normalImage:"1764722173197.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_163", name:"액션Image_163", dispatcher:"Image_163", event:"onRelease", target:"ImageSlider_46", action:"toggleVisible"}
],
[36,{type:"imageSlider", id:"ImageSlider_47", name:"noname", visible:"false", x:"0", y:"72", width:"825", height:"440", mode:"slide", normalImage:"1764723083633.jpg", link:"address|_blank|", normalImage1:"1764723083686.jpg", link1:"address|_blank|", normalImage2:"1764723083726.jpg", link2:"address|_blank|", normalImage3:"1764723083765.jpg", link3:"address|_blank|", normalImage4:"1764723083804.jpg", link4:"address|_blank|", normalImage5:"1764723083845.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_164", name:"noname", visible:"true", x:"0", y:"72", width:"825", height:"440", opacity:"100", normalImage:"1764722173197.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_164", name:"액션Image_164", dispatcher:"Image_164", event:"onRelease", target:"ImageSlider_47", action:"toggleVisible"}
],
[37,{type:"imageSlider", id:"ImageSlider_48", name:"noname", visible:"false", x:"0", y:"72", width:"825", height:"440", mode:"slide", normalImage:"1764723117094.jpg", link:"address|_blank|", normalImage1:"1764723117137.jpg", link1:"address|_blank|", normalImage2:"1764723117173.jpg", link2:"address|_blank|", normalImage3:"1764723117216.jpg", link3:"address|_blank|", normalImage4:"1764723117253.jpg", link4:"address|_blank|", normalImage5:"1764723117289.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_165", name:"noname", visible:"true", x:"0", y:"72", width:"825", height:"440", opacity:"100", normalImage:"1764722173197.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_165", name:"액션Image_165", dispatcher:"Image_165", event:"onRelease", target:"ImageSlider_48", action:"toggleVisible"}
],
[40,{type:"image", id:"Image_146", name:"noname", visible:"true", x:"0", y:"488", width:"825", height:"674", opacity:"100", normalImage:"1765346216137.gif", rolloverImage:"", link:""}
],
[41,{type:"imageSlider", id:"ImageSlider_53", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"431", mode:"slide", normalImage:"1764725349471.jpg", link:"address|_blank|", normalImage1:"1764725349510.jpg", link1:"address|_blank|", normalImage2:"1764725349544.jpg", link2:"address|_blank|", normalImage3:"1764725349578.jpg", link3:"address|_blank|", normalImage4:"1764725349611.jpg", link4:"address|_blank|", normalImage5:"1764725349653.jpg", link5:"address|_blank|", normalImage6:"1764725349696.jpg", link6:"address|_blank|", normalImage7:"1764725349735.jpg", link7:"address|_blank|", normalImage8:"1764725349775.jpg", link8:"address|_blank|"},
{type:"image", id:"Image_172", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"431", opacity:"100", normalImage:"1764723673068.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_172", name:"액션Image_172", dispatcher:"Image_172", event:"onRelease", target:"ImageSlider_53", action:"toggleVisible"}
],
[42,{type:"youtube", id:"Youtube_34", name:"noname", visible:"true", x:"0", y:"263", width:"825", height:"463", youtubeURL:"https://youtu.be/B8qifz8Pjec?si=A155WQ37f59MngAu"}
],
[43,{type:"imageSlider", id:"ImageSlider_54", name:"noname", visible:"false", x:"0", y:"263", width:"825", height:"465", mode:"slide", normalImage:"1764725379397.jpg", link:"address|_blank|", normalImage1:"1764725379435.jpg", link1:"address|_blank|", normalImage2:"1764725379468.jpg", link2:"address|_blank|", normalImage3:"1764725379502.jpg", link3:"address|_blank|", normalImage4:"1764725379538.jpg", link4:"address|_blank|", normalImage5:"1764725379574.jpg", link5:"address|_blank|", normalImage6:"1764725379609.jpg", link6:"address|_blank|", normalImage7:"1764725379644.jpg", link7:"address|_blank|"},
{type:"image", id:"Image_171", name:"noname", visible:"true", x:"0", y:"263", width:"825", height:"465", opacity:"100", normalImage:"1764724947723.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_171", name:"액션Image_171", dispatcher:"Image_171", event:"onRelease", target:"ImageSlider_54", action:"toggleVisible"}
],
[52,{type:"imageSlider", id:"ImageSlider_45", name:"noname", visible:"false", x:"0", y:"263", width:"825", height:"892", mode:"slide", normalImage:"1764654755287.jpg", link:"address|_blank|", normalImage1:"1764654755322.jpg", link1:"address|_blank|", normalImage2:"1764654755353.jpg", link2:"address|_blank|", normalImage3:"1764654755404.jpg", link3:"address|_blank|", normalImage4:"1764654755446.jpg", link4:"address|_blank|", normalImage5:"1764654755479.jpg", link5:"address|_blank|", normalImage6:"1764654755509.jpg", link6:"address|_blank|", normalImage7:"1764654755544.jpg", link7:"address|_blank|", normalImage8:"1764654755588.jpg", link8:"address|_blank|"},
{type:"image", id:"Image_156", name:"noname", visible:"true", x:"0", y:"263", width:"825", height:"886", opacity:"100", normalImage:"1764654425741.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_156", name:"액션Image_156", dispatcher:"Image_156", event:"onRelease", target:"ImageSlider_45", action:"toggleVisible"}
],
[54,{type:"image", id:"Image_166", name:"noname", visible:"false", x:"0", y:"864", width:"825", height:"420", opacity:"100", normalImage:"1764723210435.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_49", name:"noname", visible:"true", x:"0", y:"865", width:"825", height:"420", mode:"slide", normalImage:"1764724544003.jpg", link:"address|_blank|", normalImage1:"1764724544048.jpg", link1:"address|_blank|"}
],
[56,{type:"image", id:"Image_168", name:"noname", visible:"false", x:"0", y:"847", width:"825", height:"440", opacity:"100", normalImage:"1764723673068.png", rolloverImage:"", link:""},
{type:"imageSlider", id:"ImageSlider_50", name:"noname", visible:"true", x:"0", y:"847", width:"825", height:"440", mode:"slide", normalImage:"1764724598392.jpg", link:"address|_blank|", normalImage1:"1764724598437.jpg", link1:"address|_blank|", normalImage2:"1764724598478.jpg", link2:"address|_blank|", normalImage3:"1764724598510.jpg", link3:"address|_blank|", normalImage4:"1764724598548.jpg", link4:"address|_blank|", normalImage5:"1764724598594.jpg", link5:"address|_blank|"}
],
[58,{type:"imageSlider", id:"ImageSlider_51", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"448", mode:"slide", normalImage:"1764724634095.jpg", link:"address|_blank|", normalImage1:"1764724634141.jpg", link1:"address|_blank|", normalImage2:"1764724634175.jpg", link2:"address|_blank|", normalImage3:"1764724634208.jpg", link3:"address|_blank|", normalImage4:"1764724634241.jpg", link4:"address|_blank|"},
{type:"image", id:"Image_169", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"448", opacity:"100", normalImage:"1764723673068.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_169", name:"액션Image_169", dispatcher:"Image_169", event:"onRelease", target:"ImageSlider_51", action:"toggleVisible"}
],
[59,{type:"imageSlider", id:"ImageSlider_52", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"448", mode:"slide", normalImage:"1764724667227.jpg", link:"address|_blank|", normalImage1:"1764724667266.jpg", link1:"address|_blank|", normalImage2:"1764724667298.jpg", link2:"address|_blank|", normalImage3:"1764724667330.jpg", link3:"address|_blank|", normalImage4:"1764724667364.jpg", link4:"address|_blank|", normalImage5:"1764724667398.jpg", link5:"address|_blank|", normalImage6:"1764724667432.jpg", link6:"address|_blank|"},
{type:"image", id:"Image_170", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"448", opacity:"100", normalImage:"1764723673068.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_170", name:"액션Image_170", dispatcher:"Image_170", event:"onRelease", target:"ImageSlider_52", action:"toggleVisible"}
],
[61,{type:"video", id:"Video_30", name:"noname", visible:"true", x:"0", y:"685", width:"825", height:"470", normalImage:"1764655732249.jpg", movieURL:"1764655559451.mp4"}
],
[63,{type:"video", id:"Video_31", name:"noname", visible:"true", x:"0", y:"221", width:"825", height:"469", normalImage:"1764655754185.jpg", movieURL:"1764655742555.mp4"}
],
[65,{type:"video", id:"Video_36", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"464", normalImage:"1765347123609.jpg", movieURL:"1765348842290.mp4"}
],
[66,{type:"video", id:"Video_33", name:"noname", visible:"true", x:"0", y:"160", width:"825", height:"464", normalImage:"1764655797609.jpg", movieURL:"1764655785782.mp4"}
],
[77,{type:"imageSlider", id:"ImageSlider_56", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"445", mode:"slide", normalImage:"1764725978801.jpg", link:"address|_blank|", normalImage1:"1764725978835.jpg", link1:"address|_blank|", normalImage2:"1764725978866.jpg", link2:"address|_blank|", normalImage3:"1764725978899.jpg", link3:"address|_blank|", normalImage4:"1764725978931.jpg", link4:"address|_blank|", normalImage5:"1764725978962.jpg", link5:"address|_blank|", normalImage6:"1764725978997.jpg", link6:"address|_blank|", normalImage7:"1764725979031.jpg", link7:"address|_blank|", normalImage8:"1764725979065.jpg", link8:"address|_blank|", normalImage9:"1764725999762.jpg", link9:"address|_blank|", normalImage10:"1764726009927.jpg", link10:"address|_blank|"}
],
[79,{type:"image", id:"Image_157", name:"noname", visible:"true", x:"454", y:"1093", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://culture.seogwipo.go.kr/citrus/index.htm"},
{type:"image", id:"Image_158", name:"noname", visible:"true", x:"609", y:"1093", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/6sot_official/"}
],
[82,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"87", y:"145", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook_eng/202511/index.html#page=1"}
],
[83,{type:"image", id:"Image_160", name:"noname", visible:"true", x:"429", y:"924", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/5YSRqKgF"},
{type:"image", id:"Image_161", name:"noname", visible:"true", x:"589", y:"921", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/xQiXPain"}
],
[84,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"571", y:"860", width:"170", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"}
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