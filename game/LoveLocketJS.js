if(window.modUtils.getMod('maplebirch')){
//测试通道
maplebirch.tool.framework.addTo('Options', 'LLTestFunc');

//精神病院的同心吊坠
maplebirch.tool.framework.addTo('BeforeLinkZone',{
    passage: ['Asylum Cell'],
    widget: 'show_loveclocket_asylum',
});

//警局戴上颈饰
maplebirch.tool.framework.addTo('BeforeLinkZone',{
    passage: ['Police Station Collar Removal'],
    widget: 'LL_storeon_pocket',
});

//监狱储存颈饰
maplebirch.tool.framework.addTo('BeforeLinkZone',{
    passage: ['Prison Intro Cell'],
    widget: 'LL_clean_pocket',
});

//监狱凯拉尔反应
maplebirch.tool.framework.addTo('BeforeLinkZone',{
    passage: ['Prison Kylar'],
    widget: 'prison_kylar_notice',
});
}else if(window.modUtils.getMod('Simple Frameworks')){

//测试通道
simpleFrameworks.addto('iModOptions', 'LLTestFunc');

//精神病院的同心吊坠
simpleFrameworks.addto('BeforeLinkZone',{
    passage: ['Asylum Cell'],
    widget: 'show_loveclocket_asylum',
});

//警局戴上颈饰
simpleFrameworks.addto('BeforeLinkZone',{
    passage: ['Police Station Collar Removal'],
    widget: 'LL_storeon_pocket',
});

//监狱储存颈饰
simpleFrameworks.addto('BeforeLinkZone',{
    passage: ['Prison Intro Cell'],
    widget: 'LL_clean_pocket',
});

//监狱凯拉尔反应
simpleFrameworks.addto('BeforeLinkZone',{
    passage: ['Prison Kylar'],
    widget: 'prison_kylar_notice',
});
}
