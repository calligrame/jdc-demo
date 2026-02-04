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
	RANDOM:559283,
	
	
	bookList : [ /** 이전호 목록 */
		],
	
	tableList : [ /** 목차 */
		{index:"-1",label:"root",url:"",child:"5",id:"0",parent:"-1"},
		{index:"8",label:"Touch",url:"",child:"4",id:"2",parent:"0"},
		{index:"8",label:"JDC Vision Wave",url:"",child:"0",id:"7",parent:"2"},
		{index:"22",label:"Walking with the  Community 1",url:"",child:"0",id:"8",parent:"2"},
		{index:"26",label:"人site Table",url:"",child:"0",id:"9",parent:"2"},
		{index:"30",label:"Walking with the  Community 2",url:"",child:"0",id:"18",parent:"2"},
		{index:"36",label:"Hybrid",url:"",child:"1",id:"3",parent:"0"},
		{index:"36",label:"I'll Land, Global",url:"",child:"0",id:"10",parent:"3"},
		{index:"42",label:"Unique",url:"",child:"2",id:"4",parent:"0"},
		{index:"42",label:"JDC Collection",url:"",child:"0",id:"12",parent:"4"},
		{index:"48",label:"Together with JDC",url:"",child:"0",id:"20",parent:"4"},
		{index:"52",label:"Multiplay",url:"",child:"1",id:"5",parent:"0"},
		{index:"52",label:"THUMB: Art at Your Fingertips",url:"",child:"0",id:"14",parent:"5"},
		{index:"58",label:"Beyond",url:"",child:"2",id:"6",parent:"0"},
		{index:"58",label:"ESG Report",url:"",child:"0",id:"16",parent:"6"},
		{index:"62",label:"Modadeuleong Madang",url:"",child:"0",id:"18",parent:"6"}],
	
	pageContents : [ /** 페이지 컨텐츠 */
		[2,{type:"video", id:"Video_35", name:"noname", visible:"true", x:"1", y:"369", width:"825", height:"918", normalImage:"1769580432686.png", movieURL:"1769580313657.mp4"}
],
[3,{type:"audio", id:"Audio_1", name:"noname", visible:"false", x:"149", y:"165", width:"483", height:"77", musicURL:"1752109528002.mp3"},
{type:"image", id:"Image_28", name:"noname", visible:"false", x:"89", y:"98", width:"927", height:"71", opacity:"100", normalImage:"1752122260603.png", rolloverImage:"", link:""}
],
[4,{type:"video", id:"Video_34", name:"noname", visible:"true", x:"2", y:"365", width:"825", height:"922", normalImage:"1769580882857.png", movieURL:"1769583387189.mp4"}
],
[6,{type:"image", id:"Image_1", name:"noname", visible:"true", x:"95", y:"1073", width:"84", height:"87", opacity:"100", normalImage:"1752037593393.png", rolloverImage:"", link:"address|_blank|https://www.youtube.com/channel/UCWjXz8g_5xqbtYWWmi1z2xw"},
{type:"image", id:"Image_2", name:"noname", visible:"true", x:"505", y:"1064", width:"95", height:"99", opacity:"100", normalImage:"1752037678226.png", rolloverImage:"", link:"address|_blank|https://blog.naver.com/jdcenter1"},
{type:"image", id:"Image_3", name:"noname", visible:"true", x:"377", y:"1063", width:"68", height:"95", opacity:"100", normalImage:"1752037709367.png", rolloverImage:"", link:"address|_blank|https://www.facebook.com/jdccenter"},
{type:"image", id:"Image_4", name:"noname", visible:"true", x:"230", y:"1067", width:"77", height:"95", opacity:"100", normalImage:"1752037731068.png", rolloverImage:"", link:"address|_blank|https://www.instagram.com/jdcenter_official/"},
{type:"image", id:"Image_5", name:"noname", visible:"true", x:"94", y:"821", width:"74", height:"98", opacity:"100", normalImage:"1752037953945.png", rolloverImage:"", link:"address|_blank|https://pf.kakao.com/_xcuXxcb"}
],
[8,{type:"youtube", id:"Youtube_39", name:"noname", visible:"false", x:"0", y:"463", width:"1280", height:"720", youtubeURL:"https://youtu.be/gR8i8Pc6hX0?si=A308PyP4QjzdsqJ0"},
{type:"image", id:"Image_204", name:"noname", visible:"true", x:"0", y:"467", width:"822", height:"685", opacity:"100", normalImage:"1769567872713.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_204", name:"액션Image_204", dispatcher:"Image_204", event:"onRelease", target:"Youtube_39", action:"toggleVisible"}
],
[11,{type:"image", id:"Image_214", name:"noname", visible:"true", x:"102", y:"221", width:"628", height:"362", opacity:"100", normalImage:"1769582767191.gif", rolloverImage:"", link:""}
],
[12,{type:"image", id:"Image_213", name:"noname", visible:"true", x:"101", y:"644", width:"628", height:"362", opacity:"100", normalImage:"1769582734090.gif", rolloverImage:"", link:""}
],
[14,{type:"image", id:"Image_221", name:"noname", visible:"true", x:"101", y:"298", width:"628", height:"362", opacity:"100", normalImage:"1769582782356.gif", rolloverImage:"", link:""}
],
[15,{type:"image", id:"Image_216", name:"noname", visible:"true", x:"97", y:"683", width:"628", height:"362", opacity:"100", normalImage:"1769582793092.gif", rolloverImage:"", link:""}
],
[17,{type:"image", id:"Image_217", name:"noname", visible:"true", x:"101", y:"366", width:"628", height:"362", opacity:"100", normalImage:"1769582807887.gif", rolloverImage:"", link:""}
],
[19,{type:"image", id:"Image_218", name:"noname", visible:"true", x:"98", y:"366", width:"628", height:"362", opacity:"100", normalImage:"1769582818313.gif", rolloverImage:"", link:""}
],
[20,{type:"image", id:"Image_219", name:"noname", visible:"true", x:"99", y:"676", width:"628", height:"362", opacity:"100", normalImage:"1769582831926.gif", rolloverImage:"", link:""}
],
[24,{type:"imageSlider", id:"ImageSlider_62", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"478", mode:"slide", normalImage:"1769572248320.png", link:"address|_blank|", normalImage1:"1769572248357.png", link1:"address|_blank|", normalImage2:"1769572248390.png", link2:"address|_blank|", normalImage3:"1769572248425.png", link3:"address|_blank|", normalImage4:"1769572248458.png", link4:"address|_blank|"},
{type:"image", id:"Image_206", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"478", opacity:"100", normalImage:"1769571905588.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_206", name:"액션Image_206", dispatcher:"Image_206", event:"onRelease", target:"ImageSlider_62", action:"toggleVisible"}
],
[28,{type:"imageSlider", id:"ImageSlider_64", name:"noname", visible:"false", x:"0", y:"73", width:"825", height:"402", mode:"slide", normalImage:"1769572845988.png", link:"address|_blank|", normalImage1:"1769572846027.png", link1:"address|_blank|", normalImage2:"1769572846060.png", link2:"address|_blank|"},
{type:"image", id:"Image_207", name:"noname", visible:"true", x:"0", y:"73", width:"825", height:"402", opacity:"100", normalImage:"1769572604787.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_207", name:"액션Image_207", dispatcher:"Image_207", event:"onRelease", target:"ImageSlider_64", action:"toggleVisible"}
],
[33,{type:"video", id:"Video_38", name:"noname", visible:"true", x:"0", y:"263", width:"825", height:"524", normalImage:"1769568572890.png", movieURL:"1769589755774.mp4"}
],
[34,{type:"video", id:"Video_37", name:"noname", visible:"true", x:"0", y:"266", width:"825", height:"461", normalImage:"1769568550119.png", movieURL:"1769568534757.mp4"}
],
[35,{type:"imageSlider", id:"ImageSlider_65", name:"noname", visible:"true", x:"0", y:"264", width:"825", height:"465", mode:"slide", normalImage:"1769573087849.png", link:"address|_blank|", normalImage1:"1769573087889.png", link1:"address|_blank|", normalImage2:"1769573087929.png", link2:"address|_blank|", normalImage3:"1769573087967.png", link3:"address|_blank|"}
],
[36,{type:"youtube", id:"Youtube_40", name:"noname", visible:"false", x:"0", y:"522", width:"1280", height:"720", youtubeURL:"https://youtu.be/h0BPIiHfuqc?si=u10Nt9zu8vONAu4J"},
{type:"image", id:"Image_205", name:"noname", visible:"true", x:"0", y:"519", width:"822", height:"861", opacity:"100", normalImage:"1769568889551.png", rolloverImage:"", link:""},
{type:"popModal", id:"popModal_Action_Image_205", name:"액션Image_205", dispatcher:"Image_205", event:"onRelease", target:"Youtube_40", action:"toggleVisible"}
],
[38,{type:"youtube", id:"Youtube_41", name:"noname", visible:"true", x:"0", y:"72", width:"729", height:"409", youtubeURL:"https://youtu.be/2ZQ0t1ptvsQ?si=nctiy5gutyZu-Kom"}
],
[39,{type:"youtube", id:"Youtube_42", name:"noname", visible:"true", x:"94", y:"74", width:"729", height:"409", youtubeURL:"https://youtu.be/cziuxzXItD4?si=VqzYRB0A4_GlMbCo"}
],
[40,{type:"youtube", id:"Youtube_43", name:"noname", visible:"true", x:"0", y:"0", width:"729", height:"409", youtubeURL:"https://youtu.be/b_3b2avX4z4?si=gL7v7pqnkqmeGXuG"}
],
[41,{type:"youtube", id:"Youtube_45", name:"noname", visible:"true", x:"98", y:"0", width:"729", height:"409", youtubeURL:"https://youtu.be/FNlExfo1LPw?si=Sq-Mu6G3y9j47WQR"}
],
[44,{type:"image", id:"Image_192", name:"noname", visible:"true", x:"558", y:"215", width:"177", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=103750&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=103750&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1469.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_193", name:"noname", visible:"true", x:"575", y:"465", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515330000002"},
{type:"image", id:"Image_194", name:"noname", visible:"true", x:"574", y:"658", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515330000009"},
{type:"image", id:"Image_195", name:"noname", visible:"true", x:"570", y:"828", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515330000006"},
{type:"image", id:"Image_196", name:"noname", visible:"true", x:"584", y:"1009", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515330000001"}
],
[46,{type:"image", id:"Image_197", name:"noname", visible:"true", x:"568", y:"211", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product.do?gnbCd=103751&type=020000&PAGE_START=1&PAGE_END=12&ORDER=best&ICOPOS=&PROD_CD_LIST=103751&CHK=notchecked&ALCO_AUCA_DT=N&ALCO_SRVC_AUCA_YN=N&PROD_TYPE123=020000&PROD_TYPE=020000&REMT_RCV_EXCHR=1469.7&SEARCH_CATE%5B%5D=&SEARCH_BRAN%5B%5D="},
{type:"image", id:"Image_198", name:"noname", visible:"true", x:"577", y:"457", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515340000003"},
{type:"image", id:"Image_199", name:"noname", visible:"true", x:"580", y:"618", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515340000011"}
],
[47,{type:"image", id:"Image_200", name:"noname", visible:"true", x:"571", y:"70", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515340000006"},
{type:"image", id:"Image_201", name:"noname", visible:"true", x:"576", y:"269", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515340000008"},
{type:"image", id:"Image_202", name:"noname", visible:"true", x:"575", y:"427", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515340000016"},
{type:"image", id:"Image_203", name:"noname", visible:"true", x:"580", y:"623", width:"162", height:"90", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcdutyfree.com/mall/product/product_Detail.do?goosCd=1515340000017"}
],
[50,{type:"youtube", id:"Youtube_47", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"409", youtubeURL:"https://youtu.be/izRPQxodTGI?si=HOtiS6-Q9bM8oQ0X"}
],
[51,{type:"imageSlider", id:"ImageSlider_66", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"407", mode:"slide", normalImage:"1769583778599.png", link:"address|_blank|", normalImage1:"1769573898735.png", link1:"address|_blank|", normalImage2:"1769573898775.png", link2:"address|_blank|", normalImage3:"1769573898811.png", link3:"address|_blank|", normalImage4:"1769573898849.png", link4:"address|_blank|"}
],
[54,{type:"imageSlider", id:"ImageSlider_67", name:"noname", visible:"true", x:"0", y:"0", width:"725", height:"522", mode:"slide", normalImage:"1769574217754.png", link:"address|_blank|", normalImage1:"1769574217797.png", link1:"address|_blank|", normalImage2:"1769574217838.png", link2:"address|_blank|"}
],
[55,{type:"imageSlider", id:"ImageSlider_68", name:"noname", visible:"true", x:"102", y:"0", width:"725", height:"522", mode:"slide", normalImage:"1769574249881.png", link:"address|_blank|", normalImage1:"1769574249922.png", link1:"address|_blank|", normalImage2:"1769574249958.png", link2:"address|_blank|"}
],
[58,{type:"image", id:"Image_189", name:"noname", visible:"true", x:"97", y:"574", width:"678", height:"591", opacity:"100", normalImage:"1769566222822.gif", rolloverImage:"", link:""}
],
[61,{type:"image", id:"Image_220", name:"noname", visible:"true", x:"2", y:"0", width:"825", height:"404", opacity:"100", normalImage:"1769589719044.gif", rolloverImage:"", link:""}
],
[64,{type:"imageSlider", id:"ImageSlider_60", name:"noname", visible:"false", x:"0", y:"0", width:"825", height:"441", mode:"slide", normalImage:"1767326135414.jpg", link:"address|_blank|", normalImage1:"1767326135457.jpg", link1:"address|_blank|", normalImage2:"1767326135497.jpg", link2:"address|_blank|", normalImage3:"1767326135534.jpg", link3:"address|_blank|", normalImage4:"1767326135575.jpg", link4:"address|_blank|", normalImage5:"1767326135615.jpg", link5:"address|_blank|"},
{type:"image", id:"Image_185", name:"noname", visible:"true", x:"0", y:"0", width:"825", height:"441", opacity:"100", normalImage:"1767322363134.png", rolloverImage:"", link:""},
{type:"action", id:"Action_Image_185", name:"액션Image_185", dispatcher:"Image_185", event:"onRelease", target:"ImageSlider_60", action:"toggleVisible"}
],
[65,{type:"image", id:"Image_159", name:"noname", visible:"true", x:"543", y:"141", width:"191", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://www.jdcenter.com/ebook_eng/202601/index.html"}
],
[66,{type:"image", id:"Image_190", name:"noname", visible:"true", x:"582", y:"1062", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/Gia5htxO"},
{type:"image", id:"Image_191", name:"noname", visible:"true", x:"429", y:"1078", width:"145", height:"79", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/5EngXLid"}
],
[68,{type:"image", id:"Image_162", name:"noname", visible:"true", x:"593", y:"519", width:"138", height:"92", opacity:"100", normalImage:"1764655817712.png", rolloverImage:"", link:"address|_blank|https://naver.me/GsouCQUI"}
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
		{text:"Hybrid", textColor:"0xffffff,100", backgroundColor:"0x114fa4,100", link:"36"},
		{text:"Unique", textColor:"0xffffff,100", backgroundColor:"0x1114a4,100", link:"42"},
		{text:"Multiplay", textColor:"0xffffff,100", backgroundColor:"0x00b050,100", link:"52"},
		{text:"Beyond", textColor:"0xffffff,100", backgroundColor:"0x4d1c7c,100", link:"58"}]
	};