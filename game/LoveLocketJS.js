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
