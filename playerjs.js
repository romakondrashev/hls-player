var pljssglobal = [];
var pljssglobalid;
if (window['PlayerjsAsync']) {
    setTimeout(PlayerjsAsync, 1)
};

function Playerjs(options) {
    var o = {
        play: false,
        audiosrc: [],
        audioctx: [],
        playerid: 'lb6huqnbej86',
        default_w: 640,
        default_h: 360,
        version: '12.9.1',
        compilation: ['', '', 'VASTP'],
        compilations: '',
        fullscreen: false,
        realfullscreen: false,
        nativecontrols: false,
        fullwheel: false,
        fullscreen_start: false,
        airplay: false,
        pipwebkit: false,
        ispipkit: false,
        u: '#1NuFvh3FUif5Sk2trlRE6ESwsIzwsIyEoEWark2tRhgERKWoRh29ok3ERKREsIzwsIzwRHyFXjfaUESXtHyFphgFWjf4RKREsEzwPIywsERsRi3FQiCUUkWMRKSwoEVBqjf1QmCUrkRE6EVBolCQQERsRhbE6ESwqJREoEVPRKSMsHyFuk3eqiCUqiuE6IysRkCeVmCBqiDFYi2Q0lCBTiCUqiuE6J30oEVJrkWauk2tOmCU0kCdRKWoRk3FTigERKSAoEV9qESXtHyFQh3aYk24RKRF0jgaoibEoEWa5lCdRKRF0igQ0ERsRlC9vjgaYk24RKRF0k3wpkCeVmyEoEVJojfJnESXsHyFXhf5TESXsHyF0igQ0ESXRERsRmVBuESXRmCU0kCdRHyFXjfaUESXtHyFXjfaUk25skCB5ESXtHyFQkVUphgaYk24RKRFsk3JYmCUrkREoEVFWESXtHyFRi2ARKSwqJysRhVmshfaTjf5WESXRJRw2EzhPJRF9HyFSk250lV9og2tYkVdRKWoRk3FTigERKSMoEV9qESXtHyF0NgxUESXRl2QQlCdRHyFQh3aYk24RKRFojf5UERsRjyE6IcAoEWFrmf5Tjf5WESXRIbEoEWlRKSdsHyFQESXRIbEoEVBRiuE6ESARHyFQkC9QiyE6ESwqJREoEVBrmVeuESXRIyEoEVJrkC9uESXRJcl1Jvd3ERsRh29ok3FRiuE6EViSiVJVhuEoEVJrkC9ukC9QiyE6EVFQhSQRhbEoEVJrkC9uk3iUlRE6EViViViViREoEVF1iViUlRE6NuFrkRE6IysRh29ok3ERKRFViViViVhRHyFQESXsHSe9HyFsk3JYmCUrkRE6EVJrkWauk2tvERsRkfBui2UqESXRIRwsEzwPJuEoEVQQkVaoibE6IbsRhVmshfaTjf5WESXRJbwsEzdPIyEoEWaYlyE6IbsRjCUTibE6IbsRjCUTif9qkCU2ibE6IbsRjCBqiCtUjCUTibE6IbsRjCBqiCtUh29ok3ERKRFVJ2h3iSlRHyFXhf5TkCevh2BoibE6ESAqJbEoEWarlDaYlyE6IbsRkCUqigaYlC1QlVmYkVFrmDarkbE6IcwoEVFWESXsHyFRi2JrkC9uESXRizM2h2M0ERsRh3evmC9pm2UTmCPRKSwoEVe4lCBqiyE6ER0tEW0oEVJrkWauk2tOlCtQNbE6NuFrlVaUlRE6IRsRk24RKSAoEVUSk24RKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPiVUoky1umftULbmqk256igFrFux0lVBql2irlV09F3auhf5vkCB0ibP1HywvGbl#LDxrkDUojf5UEDxrjf50lv0WIy41KcI3JbwsHSM4JzI4EzwqJchuJbwtIu41Icd2IuwtIb40Ivl1EzlPIy41KcI3JbwsHSM4JzI4FuxVjftoLblSiViViViVFu8#Ly9WLSsrl3iWLREoEVUSk24uESXRLDJ2iux3jfa0jz0WISwWECQUjfmXmz0WISwWLStWECiYkCsplWeoic0WkV9qNVeukulPiVUokz0WEvwsIzwsIylPmDFQkWJVk3FpLbm0lVBql2tQmCdXJbsPJyTWLStuifJ0EDP9FvwWEDT9FvwWEDmYiDaXLblvHSdWECQUjfmXmz0WIcEWECiYkCs9FuJViViViVhWHv48lVeSmyx4Lbl2HSdWEDT9FvwWEDmYiDaXLblvHSdWECQUjfmXmz0WIcEWECiYkCs9FuJViViViVhWHv48H2l#Ly9vmVl#ERsRjfJrkSIRKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPmDFQkWJVk3FpLbm0lVBql2tQmCdXIRsPIuTWLStshgaXECM9F00tJRs3HSAvJShtIcIuEAstJRs3HSAsKcA2KcM1EAstJb4uIzPtJvP1HzlqIcw5Ich5JzdPczA0HSE3Jcw5Ius3HSAsKcA2KcM1EAItJy4uJvdsKcIoIu4tKcTtIShuJbwtIb4sJSItKcloIyw3HSAvJvd0JSM1HzwPMvIqISAtKzT1KcAoIywsHzIqIcT5IcE2ISdPIys3HSAsKcA2KcM1EAIsHzAtHSwtKcEtIShPIu4uIcA4Kcd5IbstJy4uIcPvIvP5EzlqIcI3JcM2JzdoIcMqISA4IvI4KbxIJu4tIvl1Jzh0JbstIR40JzAsJzh1EAI0HSA5IvIsKzd1HzAuHSM0Icw0JSdPIb43KzMvKzh2IRstIy4sJzA3IzA4EzAqJvP0IvP2JSEoJu4tIzTtJST0JbxzIb43KzMvKzh2IRs0HSA3JShvJvw1EzMqIcTvIvw4JcdoIb43JvluKcEvJRw3HSAvJvd0JSM1HzAqJvl3ISTuIvhPMvAsHSw4Icl4JzMoIb43JvluKcEvJRwtIR40Kcw3IzhvHzMqIcl2JSI3IzdPIcEqJzTsJvw2Ius3HSAsKcA2KcM1EAstIy42JzM1Ich3HzlqIcw5Ich5JzdPczAvHSI4ISP5KchoIcAqJcduJzwsJyxIIchoJu4tIvh2IcAvIRxjFuxVjftoLblSiViViViVFv48H3xQmCP#Ly9WLSsrl3iWLREoEVBSmCUrkRE6EWxohgTRHyFQh3aYk24uESXRlCB1l2dRHyF0NgxUESXRl3iWERsRl2JQkCdRKSAqIRsRl2JQkCermVeuESXtHSdoEV1QlVmYkRE6ESwPIywsEzAsEW0oEVJrkWauk2tOkge0ibE6NuFrlVaUlRE6IcwoEV9qESXtHyFYh29qESXRLDJ2iux3jfa0jz0WISwWECQUjfmXmz0WISwWLStWEDauhf5viV9ukc0WmDFQkWJohgaUGzAoEzAYFv48lCB0jyxTLbmJIy45KcT3KzhvJvloIcEqIzEsIvP1JuxzIy40JzltJclvIzToIcEqIzEsISh3JuwpIy4sIzw2IzM2Jvw2JvIoIcAqJcltKcA5IRw1HST5JvTvIvJUHcw3HzAtHSwtKcE5IzdPczwqIzw0IvT1IcItIzMoJu4sIzh5JSAvKyxzIy4sIzM5Kcl2IcdtJRs2HSM1JSP3JSh1EzwqJzM5Jvl0Jzl0HzhqIzAsJch0JuwsHST5KcP1IvP2Jbs2HSwsKzw2JST1EAs0HSd2KzEsIvE0HzdqKcTtKzh0IbxIKb4uKzh5JcA0KystHSE5IcdtIvMvEAI5HSTtJvTsJSl5HzwqJShvIzA4IcA0EzAsHST5Ivl5IcPoIb4tIcw2Kzh5JRwtIy45KcE2JvdoIR4sIzAuJcMsJyxIIcwqKcl1IzT2KbstJR4sIcP0JShPMvAsHST3IvT3KcAoIchqKcw5Jvl0Kbw5HSP5JcM0ISMvHzA3HSI1JzMsJRw5HSE2JSdtISAvHzA2HSluISPvJSTPczMqJcP0JzltISAoIcEqIzEtIcdtJbxIIy45KcT3KzhvJvloIcEqIzEsIvP1JuxjFuxVjftoHgF1kCd9F25rkWYUlV8WECiYkCs9FuJViViViVhWHv48lCB0jyxTLbmJIcdqJSAtKcw3Ius1HSM1Jvd4Jcw0EAItJb42JzT3JvP2HzdqJzP5Jvw0KcIPIcdqJvIuJcM3Jys1HSd2KcT0JvM3EzA1HSP0Jcd5KzPoJb42Kcl4IvT2IuxzIchqIzMuIvP5Jus1HSTuIzM2JzwtEzA2HSE0Icw3IcToJR4tKcwuIvEuEzA2HSMuJvM4KzPoJR41Izh2Kzd1JRxzIchqKch1Ivh0Ibs3HSMtKcl1Kch1EzA3HSE4KzTtJRs4HSdtKzh3IvduEzA3HSE4KzTtJRs5HSPtIcwvJcA2EAItJu4uKzP5IchoIcAqIzP3JvhuIbwtJR45JvdtJvdvHzAuHSw1IzwvIzAPIchqJzhsIzM2KystIR43JcM4JzM2EAItJR4tJSdsJcEoIcIqIcd4Jzh1JRwtJb44KzE2IvT4HzAvHSI4JzT0JcIPIcdqJvEvJSP5IRstIu40JSl0IzT4EAItJb40IST1Jzl3HzAvHShuIzwtISAPIcdqIvA0Kzw3JbstIu45KzEtJST0EzA1HSM2JvMsKcPoIcMqISl2IvAsKyxzIcdqJSEsIzAuIbstJy41Jvw0JcEvEzA1HST4ISA2KcMoIcMqJSP1IcTuJbwtJR4uJvhvIcw4HzA0HSdvISd5IzEPMvA2HSd4Kcd4KcEoIcMqIvlsIzd5JRwtJu4sIcd1ISw1HzA0HSwuKzM4JcAPIclqJzE4Kzh5IRstIu40JSE5ISP4EAItKy4sKcMvIcIvHzAuHSd1ISM0JvTPIcPqJzP4KcA2HzAtHSI0ISA2KcdPIcPqJzP4KcA2HzTqKzAtIzI1IchPMvA4HSM4KzTtJRs4HSE5JcdvJcM3EzA4HSAsJzAuJzMoJR45KzP2ISh1KywtJu40JSA0ISluHzdqKzT3JSAtIvAPMvA3HSw3IzI4JcPoJb4uIvI3KchtIRwtJR42JvEvIST0HzMqJvPvJzP1IvAPIchqIvP4IzTuJus0HSd0ISMtJzT2EAItJR4tIvdvJvd0HzMqIvE4Izl3ISTPIcdqJvd2JvduJRs0HSI1KcA5Izw4EzA1HSd0ISMtJbs0HShtIcTsJvIuEAItJb4vISPsJvlvHzMqKzh0JSE0JchPIcdqIvd5IcTsIbs1HSE0IvE0JvI4EzA1HShtIcTsJvIoJb40Jcl1KzdsJyxjFuxYiz0WlCYvg3irkDepie9UkCepif50IRlPiVUokz0WE2iViViViRlrLStshgaXECM9F00tIu43JzAtIzT4HzlqJzE3Jvd2JvPPMvAvHSPtKcMtJbs3HSM3JcA0KcEvEzAvHST2KcP5IvdoJu42IzP5IcA3EzA0HSAuKcd2Kbs3HSP0IcM0JzT1EAItJy40IcA1Icl1HzPqISduIzMuKzMPIcMqJcPvJzT2Ibs4HSl5JcEuIzl2EzA0HSd4IvM5JSAoKb41EAItJy41KzI0KchtHzAsHSEsJzl3KcEPIcMqJzAtJcA3JbstIy43Jzl5JcluEzA0HSAuKcd2KbstIb4tJcP1JcdtEAItIu45JST4KcI1HzAtHSI5Icw4KzIPIcIqKzA5JzA1HzAtHSduJzP1IzPPIcIqJvMtIcw5KystIb41JvEuJzIuEAItIu41IzM4JShvHzAtHSltJcEuJzIPIcIqJzE5IShuIbstIR4sISE2Jzh3EzAvHSd3ISE0IvEoIcEqISd4KzTsIRxzIcIqJvA1ISE0IustIR40KcdtIvI3EzA0HSwuISh0JSloIcEqJclsJvI3KbwtJy4uJcP4KcwuHzAuHSMuJvl1JSPPMvA0HSM1IcM1KbstIR4vIcAuIzP4EzA0HSlsJvE5IcdoIcEqIzPvJvT1JuwtJy45JcI5ISltHzAtHSluJzhuIvlPMvA1HSI0KcA2IvhoIcAqIcM5IzM2EzA1HSd4IvM5JSAoIcwqJzw4KcE5IuwtJb41KzI0KchtHzTqJbxzIcdqJcPvJzT2Ibs4HSd5Icw3Izl1EzA1HSI0KcA2IvhoJu44Jcw5JcI5KbwtJy45JcI5ISltHzlqISl1Ivl2IvMPMvA0HSlsJvE5IcdoJR45IchuIzMuJuwtJy40JcA0JcToJR42KzP3KcAuEzA0HSE1KzP5IzEoJR41JvEuJzIuIRxzIcMqIzEuJSM2Jus2HSMuKcE2ISAtEzAvHSltJcEuJzIoJR41IzM4JShuJbwtIu41JvEuJzIuHzhqJvMtIcw5KyxzIcIqJzE5IShuIbs2HST3JvI1IvI1EzAvHSdsJzP2JSIoJu4uKzM3Jvd2JuwtIu43JzAtIzT4HzlqJzE3Jvd2JvPPfRlPjfM9F3xZl192k2t1kfeOiftUkfeqmzAWECiYkCs9FuJViViViVhWHv48H2l#Ly9vmVl#ERsRjfJrkSERKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPiVUoky1umftULbmqk256igFrFuxVjftoLblSIzwsIzwsFux0lVBql2irlV09F3auhf5vkCB0ibPtHywtGbl#LDxQmCPPiz0WccAsHST5IzP1IvPoIu40JcI1IcAuJuxIIR40ISI2JvdtKbstIR4sISw2KzT5EAssHST5Kcl4JSI3JustIR4sISwvKzd3EAIsHSM0JvA1JvIsKbstIR4sISwuJSl3Ey0sHSwsIzhsJzh3Izh3IustIb41JvA5IcTuEzdqKcT3KcIvIvJUHcw3HzAtHSwtKcE5IzdPczwqIzw0IvT1IcItIzMoJu4sIzh5JSAvKyxzIy4sIzM5Kcl2IcdtJRs2HSM1JSP3JSh1EzwqJzM5Jvl0Jzl0HzhqIzAsJch0JuwsHST5KcP1IvP2Jbs2HSwsKzw2JST1EAs0HSd2KzEsIvE0HzdqKcTtKzh0IbxIKb4uKzh5JcA0KystHSE5IcdtIvMvEAI5HSTtJvTsJSl5HzwqJShvIzA4IcA0EzAsHST5Ivl5IcPoIb4tIcw2Kzh5JRwtIy45KcE2JvdoIR4sIzAuJcMsJyxIIcwqKcTsKzdvKysvHSM1IvdtIcE3EBXPccAsHST4JST0JvIoJR41JSP2Kzl2JRxIIcwqKcl1IzT2KbstJR4sIcP0JShPMvAsHST3IvT3KcAoIchqKcw5Jvl0Kbw5HSP5JcM0ISMvHzA3HSI1JzMsJRw5HSE2JSdtISAvHzA2HSluISPvJSTPczdqIzd4JzPuKcEoIcEqJzT3IcduEAstIy45Kzh5JzlvHzhqJch4JSP3JShPfRlPiVUokz0WE2iViViViRlrLStshgaXECM9F00tJy4sJvd3Ivd5HzAqIzl1JvI1KcIPczwqJcl1JvI1KcItHzA0HSd3JclvJcTPMvwqIvMtJzEtIvd2HzA0HSPtIzw1IzdPIy4vJzA0ISAvJchoIcdqIcP5KcM5JbwsHSd3JclvJcTvIbstJb40ISMuJSMtEAIsHSPtIzw1IzdsJRstJb42JcP1JvP2EzAqIcP5KcM5JzToIcdqJSd4Jcl4JRwtHSMuJzE2Jzw3HzA1HSMuJzE2JzAPczA0HSTuJzE2JzAoIb45ISMuJSMsJuxzIcdqIcd4Jcl4JRstHSh4KcT0KcM5EzA1HSA1Kzd3KzhoIb4vIcwsJcw1IbwtJy45ISMuJSMtHzAqIzl1JvI1KcIPMvA0HSh4KcT0KcdoIy44JzA0ISAvJchPIcMqIvAsIzdsJbssHSP0IcMuIcI1JRwtJy4sJvd3Ivd5HzAqIzl1JvI1KcIPfRlPiVUokz0WE2iViViViRlrLSsriv48H3J2iv4RHyFQh3aYk24RKRFpmgaUERsRhfJ0jf9qIRE6EWeqkge0ibEoEWa5lCdRKRFvmVlRHyFphgFWjf4RKREsEzwPIyw3ERsRl2JQkCdRKREsHSPRHyFvh2Boif92igERKREtHSARObsRh29qmDFrkB92k2t1kfdRKWoRk3FTigERKSToEV9qESXtHyF0NgxUESXRl2QQlCdRHyFQh3aYk24RKRF2k2t1kfdRHyFXESX1HyFuk3eqiCUqiuE6ESARHyFSmgJ0k213jfa0jyE6IysRmuE6IcwsHyFQESXtHyFQhVlRKREtERsRhf92igERKREsERsRh29ok3ERKRFViViViVhRHyFSk2trlVFWESXRiViViViVERsRh29ok3FrmVeuESXRiViViViVERsRjCUTibE6IbsRjCUTif91mC11mCdRKSAoEWFrmCB0jf9qESXRISlsERsRhVmshfaTjf5WESXRJbwsEzdPIyEoEVFWESXsHyFXhf5TkCdRKSAoEV1QlVmYkRE6ESwPKywtIzwPIyEoEWxrl2U0jf9qESXRhV90mC9pHgFYi2Q0ERsRjCBqiCtUh29ok3ERKRFViViViVhRHyFXhf5TkCevh2BoibE6ESAqJbEoEVQQkVaoifBrmVeuESXRHcARHyFXhf5TkCeXjfaUESXtHyFQkVUphgaYk24RKRFqk25UERsRjCUTigmYmCQrmgaskCB5kCUvmyE6ID0oEVJrkWauk2tOmCUpibE6NuFrlVaUlRE6JbsRk24RKSAoEVBSmCUrkRE6EWaYkfdRHyF0NgxUESXRmCe4myEoEWaUNDMRKREsKSwsERsRiV9qmDJYNVdRKSAsHyFphgFWjf4RKREsEzwPIywtJbEoEVJojfJnESXsHyFvigxQlVB0k3ERKRErERsRlC9vjgaYk24RKRFSk250lV9oluF9HyFSk250lV9og2a1lVB0jf9qESY7EV9uiCeuESX2HyFrkRE6IbsRhfJ0jf9qESXRiDeuhgaYk24RHyF0NgxUESXRmCe4myEoEWaUNDMRKREsKSwsERsRiV9qmDJYNVdRKSAsHyFphgFWjf4RKREsEzwPIywtJbEoEVJojfJnESXsHyFSk2trlRE6EViViViViREoEVFWESXsObsRh29qmDFrkB9RmfiVigERKWoRk3FTigERKSPoEV9qESXtHyFYh29qESXRLCaYmRxSkCBvlv0WkC9QiCeuGDFQkVMYFv48l3iWECJohgJvLbmSjgFSmftQlRQuhf5TGblPmVUUm0FrNz0WISdPISdPJcwPJcwWLStSjgFSkCdPh2tQl3I9F3xQmCPXlVBqiyTWEDJ0lV9nic0WGCJrkC9uGblPh3P9FvdsFuxSNc0WJcwWEDE9FvEsFuxVjftoLbmqk25UFuxvmDFrj2dpm2UTmCP9FvEWEDJ0lV9nib1pjgaUlVtYkfU0LbltIylrLSsrl3iWLSsriCU2LWt8Oy5ok2BTigEXlVBqiyTPN3xrl2U0jf9qKRxuiftQmCU2icpphgFWjf46EzwPhge0kvp3jfa0jzXPJcxsNzp9HVtrhfaUlRQuhf5TGcYRifirlVdPN2JrkWaUkWM6EylWK2aYl3xohgT6ECFok2JnK3xQiCaYkVlpmC9sKRwtIzwUK30qh2Uuh3eohgEXlVBqiyTPNu13ifFnjgMphf5YkfB0jf9qKRxuk3aQmCdPIWIPkCUqifBuECUqiVUqjgaUK2Bqjf1QmCUrkSXPlV90hgaUEzFvECtYkVeQlRxYkViYkVU0icpXifUWjDM6EzAsIyd7HgmUhVpYmy10lVBql2irlV0pk3FYi2UqKRxSif50igEPh2eqmCeuK3auhf5viV9ukb1rlVUWjf46ECJUkWaUlRxSif50igE7m2UTmCP6EzAsIyd7lC9vjgaYk246ECBRl29omgaUK3arlzXPIzpRk3a0k206Ezw7kCeVmzXPIzpujfmXmzXPIzpphgFWjf46ECB1mC87Ob5shgaXGDFQkVMYEDpvmDFrj2dpiCBvjCBulVB5KRwtHywuIzw7l3auk2pUHfaQl2QriVivigM6Ezw7HgmUhVpYmy1QkVUphgaYk246ECaQl2PPIb41luxUhgJUHfUqHf91myxYkViYkVU0icpQkVUphgaYk246ECaQl2PPIb41luxUhgJUHfUqHf91myxYkViYkVU0icp9My13ifFnjgMpj2e5iWFQkfevEDFrmCB0ibx7IcwsFbx7HgmUhVpYmy10lVBql2irlV06EDFrmCB0ibPvJSxTiflYK3auhf5viV9ukcXPlV90hgaUGzI2ICaUiuT7Og1wj2e5iWFQkfevEDFrmCB0ibx7IcwsFbx7HgmUhVpYmy10lVBql2irlV06EDFrmCB0ibPvJSxTiflYK3auhf5viV9ukcXPlV90hgaUGzI2ICaUiuT7Og1wHgmUhVpYmy1nigUVlVBpigIPiCBvjyx7IydPN3J0lV9nib1ThgJXhgFuhgT6EzAoEzEsIzpvmDFrj2dpiCBvjC9ViWJUmzXPIzp9JcwUEDpvmDFrj2dpiCBvjCBulVB5KRw4KbsPISwsK3J0lV9nib1ThgJXk2iVl2e0KRwpIvesNzp9IcwsFbx7l3auk2pUHfaQl2QQlWFQNcXPKzToEzEsIzpvmDFrj2dpiCBvjC9ViWJUmzXPHcAuJDx4K319MCpUNfiuhf1UluxThgJXEDosFbx7l3auk2pUHfaQl2QQlWFQNcXPIbsPISwsK3J0lV9nib1ThgJXk2iVl2e0KRwsK301IydPN3J0lV9nib1ThgJXhgFuhgT6EzP5HywuIzw7l3auk2pUHfaQl2QriVivigM6Ey0vJgx4K30tIzwUEDpvmDFrj2dpiCBvjCBulVB5KRw4KbsPISwsK3J0lV9nib1ThgJXk2iVl2e0KRwpIcE0lDP7Og0RHyFQh3aYk24RKRFRmfiVigERHyF0NgxUESXRh3JvERsRlC9vjgaYk24RKRFujfmXmyEoEWJShftUESXRIy44ERsRh2tYh2oRKSwoEVQYiCdRKSAoEV1QlVmYkRE6ESAuIywvJRwsEzwRHyFQESXRIy43EW0oEVJrkWauk2tOl2e0mCUqi3IRKWoRk3FTigERKSloEV9qESXsHyFYh29qESXRLDJ2iux3jfa0jz0WISwWECQUjfmXmz0WISwWLStWEDauhf5viV9ukc0WmDFQkWJohgaUGzAoEzMYFv48lCB0jyxTLbmJKy4vJzEuJSw1JbstIb44Kch1IzM4EAs1HST0KzE1ISI4HzAtHSP5JSdsJzPPczdqKcM4ISduIvPoJR44IzhtJvI0EAsuHSMsISA3KzP1HzhqKzw2IclvJyxIIR40IzEtJvP4JbstIb44Kch1IzM4EAspKy44KzA3KzMuib0tJRstIb44Kch1IzM4EAspKy44KzA3KzMuib0tJRssEAsuHSMsISA3KzP1HzwPczEqJzwuIcl4KzdoJy44IcE1ISPvJuxIJb45JzPuJcEvKys0HSPtISduKzI3EAs1HST0KzE1ISI4HzwPczPqIvMuIShsJcdoIyxIKy4vJzEuJSw1JbstIb44Kch1IzM4EBXPccAsHSE3Izd0IzEoIcAqKzT2Jcw0KyxIIcwqISlsJcMsIRssEAstIu40IchuJcw2HzwPMvA0HSPsJcE3ISdoIywtJb45IcEvKzPtHzwqJzMtISAuIcAtEzA2HSlvJvhvIzdoIb4vISI2JzT1JuxzIclqJchuKzluKbsuHSEsJSw4JvwvEzA3HST4Ivh1KzhoIu40IcdvIvdsIuwtKys0HST1IcMuKcP3EAstKys2HSP3KclsKcM5EAItKys4HSM0Ivw0Izw1EzA3HSd4JvI4Jbs5HSh2KcT5IcwtEzA2HSl2ISA0ISdoIcwqJchsJcT5IRxzIcdqKcI2KcwsIbstIb40JcAuIzl0EzA0HSl5KcPuJcloIcAqKzT2Jcw0KywtIu4vJcw4KzduHzAtHSP5JSdsJzPPczAsHSE3Izd0IzEoIcAqKzT2Jcw0KyxjEA0tIR42JvE3IcToIR4sIzA4Icd3IbxIIcEqJSluJvA5HzTqKcwuKzd5JvMPczAvHSI5IclvKzdoKb45IzE4JcT3JyxzIcMqIcTuJzh4Kys5HSTsISP1Kcl0EzA0HSl1JSEvKcToKb42KcA3KzhsJywtJb4sKzIsJSP1HzTqISh5JSIuIvEPMvA1HSMsKcP5JvEoKy44Jzl0JvP2EzA1HSd4IcM3KcloKy4tIcP5IvI5IbwtJb41Kcl4ISAuHzlqIzPvKcl2JyxIIcdqJcT3KzEtIRs1HSwtJSl5JcE4EAItJb41Kcl4ISAuHzIqKcw1Jcl3JvMPIcdqJzMuJcl5KbsvHSAvIzlvIvwtEzA1HSAvISw5IShoIR42KcEuIvl4JRxzIcMqKzEtJSw1IusuHSE1Ivl0ISlPIcMqISTvISMsIRsuHSwuIvhsJzE5EzAvHSd0JST4IcMoIR4sIzA4Icd3IbxIIcEqJSluJvA5HzEqIzwtKzA1JvAPfRlPiVUokz0WE2iViViViRl#Ly9shgaXLSsriv48H3J2iv4RHyFQh3aYk24RKRFviga0jf5WluEoEWxrl2U0jf9qESXRh29qmDFrkDIplVUWjDMRHyFphgFWjf4RKREsEzwPIywtJbEoEWa5lCdRKRFvmVlRHyFvh2BoibE6ESwqKbEoEWJShftUk3iUlRE6ESAqIbF9HyFSk250lV9og3xohgUojgJ0ESY7EV9uiCeuESXtIRsRk24RKSAoEVUSk24RKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPmDFQkWJVk3FpLbm0lVBql2tQmCdXIRsPIuTWLStshgaXECM9F00sHzwPczA2HzwPczA2HzEPczwoIRxIIyssEBXPccwoJRxIIchoJRxIIchoKyxIIys4EAssHzhPfRxJIystIRxIIchoIcEPczA2HzA0EAssHzA0EAssHzAuEBXWECiYkCs9FuJViViViVhWHv48H2l#Ly9vmVl#ERsRhfJ0jf9qESXRlCtQNftYl3MRHyFsk3JYmCUrkRE6EVJrkWauk2tvHgFYi2Q0ERsRkfBui2UqESXRIywsEzwPJREoEVFWESXtHyFvh2BoibE6ESAqIuEoEWa5lCdRKRFvmVlRHyFQkVUphgaYk24RKRFqk25UERsRhVmshfaTjf5WESXRIuwvEzIPIuEoEVFWhbE6Iy40HyFRi2BrmVeuESXsHSPoEWaYlyE6IysRjCUTibE6IbsRjCUTigmYmCQrmgaskCB5kCUvmyE6Ig0oEVJrkWauk2tOiWeokyE6NuFrlVaUlRE6IcAoEV9qESXtHyFYh29qESXRLDJ2iux3jfa0jz0WISwWECQUjfmXmz0WISwWLStWECiYkCsplWeoic0WkV9qNVeukulPmDFQkWJVk3FpLbm0lVBql2tQmCdXIbsPIbTWLStshgaXECM9F002HSh3JzMsJcAtHzwPczhqJSl0Jzw1IcAoIb43JzA5Ivd0KyxIIb43JzAtJzTtJRstHSl0IcTvJcM4EAstHSl0IcA0KcA2HzhqJSl3JzA5IvdPczwoJR42Jvl0IcTvJbxIIyssEAs2HSh3JzMsJcAtHzwPfRxJIcPoIyxIIcPoJR42Jvl0IcTvJbxIIchqISd4KzdsKys2HSh3JvMtKcI1EAstJR4uJcP4Jcw4HzAqJvMtKcI1JzPPczAtHSIuJcd5JzToIb43JzA5Ivd0KyxIIcAqIvE1JcT0KbssEAstKyssEBXPccAqJvMtIcM5IchoIcAqIvEuJcPsJRxIIb43JzAtJzTtJRstJR4uJcPsJSM1EAs2HSh3JzMsJcAtHzA2HSE1Kzw2JzdPczhqJSl0Jzw1IcAoIcPPczwoIcPPczwoIcAqIvEuJcPsJRxIIb43JzAtJzTtJRstIb4vISE1Kzw2EBXPccA4HzAtHSIuISd4IzhPczA4HzA4EAstIb4vISd1KcM5HzA4EAstIb4vISd1KcM5HzA2HSE1Kzw2JzdPczA2HSE1KzP1IzPoIchqISd4Izh0JbxIIchqISd4KzdsKystIb4vISE1Kzw2EAstKystIb4vISE1Kzw2EBXWECiYkCs9FuJViViViVhWHv48H2l#Ly9vmVl#ERsRjfJrkSERKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPiVUoky1umftULbmqk256igFrFuxVjftoLblSIzwsIzwsFux0lVBql2irlV09F3auhf5vkCB0ibPtHywtGbl#LDxQmCPPiz0WccwoJR42Jvl0IcTvJbxIIys0HSTvJcM4IvP3EAs0HSTvIvE1JcT1HzMqKcI1JzPvKzlPczMqKcIvISd1KcdoHcPqKzPtJvP0IVdpIchPczhqJSl0Jzw1IcAoHcPqKzPtJvP0IVdpIchPczhqJSl0Jzw1IcAoJR42Jvl0IcTvJbxIIys2HSh3JvMtKcI1EBXPccAtHSIuJcd5JzToJR42Jvl0IcTvJbxIIcAqIvE1JcT0KbssEAstIu4sJSh3JzMtHzwPczAvHSw2JSl0JzAoJy45Ivd0KzI4JuxIIcPoJy45Ivd0KzI4JuxIIcPoJR42Jvl0IcTvJbxIIcAqIvE1JcT0Kbs2HSh3JvMtKcI1EBXPccMqKcIvISd1KcdoIcPPczMqKcIvISd1KcdoIcIqIzh0JcA2IbxIHcPqKzPtJvP0IVdpIchoIcIqIzh0JcA2IbxIHcPqKzPtJvP0IVdpIchoIcAqIvEuJcPsJRxIJR42JvM0IzdtIbstIb4vISE1Kzw2EAs2HSh3JzMsJcAtHzA4EAs0HSTvIvE1JcT1HzA4EBXPccAtHSIuJcd5JzToIcPPczAtHSIuJcd5JzToIcAqIvEuJcPsJRxIIcPoIcAqIvEuJcPsJRxIIcPoIcIqIzh0JcA2IbxIIcIqIzh2JvM0IbstIu4sJSM1IchtEAstIu4sJSh3JzMtHzA4EAstIb4vISd1KcM5HzA4EBXWECiYkCs9FuJViViViVhWHv48H2l#Ly9vmVl#ERsRhfJ0jf9qESXRiWeokDJSlVeUkREoEVBSmCUrkSERKRFqk3Fphftvh3FUif4RHyF0NgxUESXRl3iWERsRlC9vjgaYk24RKRFSk250lV9olu1ujfmXmyEoEV1QlVmYkRE6ESwPIcwPIywtJbEoEWJShftUESXRIy45ERsRl2JQkCermVeuESXRIb4tEW0oEVJrkWauk2tOl3aQlWMRKWoRk3FTigERKSAvHyFsk3JYmCUrkRE6EVJUkWaUlREoEWJShftUESXRJyEoEV9qESXtHyFYh29qESXRLDJ2iux3jfa0jz0WISwWECQUjfmXmz0WISwWLStWECiYkCsplWeoic0WkV9qNVeukulPmDFQkWJVk3FpLbm0lVBql2tQmCdXJbsPIuTWLStshgaXECM9F00tIb40JzhvJzhuHzhqIcd3KzAuJbxIIb4tJzwtKcEvIbssHSAtJSh2JSh3EAItHSwtJzIuJSTuHzwqIzMvJvdPIy44KzM3JcT2IRssEzwqJvI2JSPuJSToIyxzIy4vIvItJvIsKyssEzwqIzwvJvwtKcEoIy4vISPtISdPIy4sIzI3IzA5IRssHSluKcA2JSh3EAssHzwqJvE5Ich2JSlPczwoIcIqISlsKzIvIuxIIy4sIzI3IzA5IRstIu4uJvw4IvIvEAIsHSwsIvlsIcTuHzAvHSh3IcP3JbwsHSIvIvA3Ivw4HzA0EzwqJvI2JSPuJSToIcMPMvwqKzP4JzhtJcMoIcMPIb4sIcMvISh5IRstIu45JzP5JcPvEzAqIcdtIST4IzPoIcIqKzl2IzMtJuxIIcAqJzM2IvM2IRs3HSP0ISA4JvdPMvAtHSh5Izh3IvAoJu42JzA2JSh3EzAtHSP0JSA1IvPoJu4vIvTsJSE1EzAtHSP0JSA1IvPoJuxzIcAqKzM2IcdvKys2HSh2IzTvJvdPIcAqJSTsJSlvIbs2HSI2IcT3KcA3EzAtHSM0JSI0JSEoJR4tJcl4IcE1EAstIb40JzhvJzhuHzhqIcd3KzAuJbxjFuxVjftoLblSiViViViVFu8#Ly9WLSsrl3iWLREoEVUSk24vESXRLDJ2iux3jfa0jz0WISwWECQUjfmXmz0WISwWLStWEDauhf5viV9ukc0WmDFQkWJohgaUGzEoEzIYFv48lCB0jyxTLbmJIchoJu4tIvh2IcAvIRxIIchoJu4tIzTtJST0JbxIIcdqISw4Icl4Jbs3HSAsKcA2KcM1EAstJy4uJvdsKcIoJu4tIzTtJST0JbxzIcMqISl1IzTvHzIqIcT5IcE2ISdPIcAqIzhvIcT3HzwPJu4tIvl1Jzh0JbssEAIvHSEtIcP5JcTtHzwPIysvHSA5KcAuJSE1EzwoJu4tIzTtJST0JbxzIystIb4sIcTuIcE2EzIqISAtKzT1KcAoIcMqISA4IvI4Kbw3HSAvJvd0JSM1HzA0HSEtKzIvKzTPczlqIcI3JcM2JzdoIcEqJzMtIzM2JbxzJy4tKcIvIzP1JbstIR40JzAsJzh1EzAqJvP0IvP2JSEoIcwqIzMtJvwtKywtHSl4JzI4JShuHzlqIcw5Ich5JzdPMvAqJvP0IvP2JSEoJy4tJvh2IvlsJbw0HSA5IvIsKzd1HzAqJvl3ISTuIvhPJu4tIvl1Jzh0JbstHSl3JvE5ISI2EAItIy4sKzA3KzM0HzAqJvl3ISTuIvhPIcEqJzTsJvw2Ius0HSA3JShvJvw1EzAuHSM5IzlsJSIoJu4tIzTtJST0JbxIIcwqJSM0JcA2Jus3HSAsKcA2KcM1EAstIu4vKzE4KcT2HzAtHSd1ISMsIzMPczA2HzlqIcI2JSAtIvEPfRlPiVUokz0WE2iViViViRl#Ly9shgaXLSsriv48H3J2iv4RHyFQh3aYk24RKRFskCB5ERsRmDUsibE6EWJ2iuEoEVFWESXtHyFRi2JrkC9uESXRiViViViVERsRhVmrESXRIbEoEVFWlCBTiCUqiuE6ESIPIuwvEzIRHyFYh29qkfBui2UqESXRIywsEzwPJyEoEVFWhbE6ESwqIbEoEVFWhf92igERKREpIbEoEWJShftUk3iUlRE6ESMqJyEoEVQYiCdRKSAoEVQYiCerkWxohgTRKSAoEVQYiCerkWUrmga1hVdRKSAoEVARKREtERsRhVmSk2trlV92igERKREpIbEoEVUSk25vh29ok3ERKREpIbF9HyFSk250lV9og2tYmVdRKWoRk3FTigERKSIoEV9qESXtHyF0igQ0ESXRkCU2ibEoEVtUmDaUlWJshfJYkVlRKSEoEVBSmCUrkRE6EVtYmVdRHyF0NgxUESXRmCe4myEoEVQQkVMRKSwoEVJojfJnESXsHyFVk250l2U6ibE6IcwoEV1QlVmYkRE6ESwPIywsEzA1ERsRhbE6ESARHyFXjfaUESXtHyFXjfaUk252k2MRKSAoEWxrl2U0jf9qESXRh29qmDFrkDIRHyFSk2trlRE6EVd1hcTsIyF9HyFSk250lV9og3J0k3wRKWoRk3FTigERKSA1HyFrkRE6IysRjfJrkRE6EStvmVlPm2UTmCP9FvEsFuxXifUWjDM9FvEsFv48iux0lVBql2irlV09F3auhf5vkCB0ibP0Hyw0Gbl#LDFUh3MPNz0WIylPNc0WIylPm2UTmCP9FvAuFuxXifUWjDM9FvAuFuxVjftoLblSiViViViVFu8#Ly9WLSsrl3iWLREoEVBSmCUrkRE6EWJ0k3wRHyF0NgxUESXRl3iWERsRhVlRKSx9HyFSk250lV9og3xuighRKWoRk3FTigERKSA2HyFrkRE6IysRjfJrkRE6EStvmVlPm2UTmCP9FvEsFuxXifUWjDM9FvEsFv48iux0lVBql2irlV09F3auhf5vkCB0ibP1HSdoEzdYFv48lCB0jyxTLbmJKy45KcT5KbstIy40Ivl0KbxIKy45KcT5KbstIy40Ivl1EAsuHzdqISA4JvdPczPqKcT5KcToIyxIKy45KcT5KbstIy40Ivl0KbxjEA0sHzwPczEoIyxIIRstIy4uJzT4IuxIIystIy4uJzT4IuxIIyssEBXWECiYkCs9FuJViViViVhWHv48H2l#Ly9vmVl#ERsRhfJ0jf9qESXRlDFUmREoEWa5lCdRKRFvmVlRHyFvh2BoibE6Ib4uHyFsk3JYmCUrkRE6EVJrkWauk2tvERsRkfBui2UqESXRIywsEzwPIcdRObsRh29qmDFrkB9qigQ0ESY7EV9uiCeuESXtJusRk24RKSwoEVUSk24RKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPmDFQkWJVk3FpLbm0lVBql2tQmCdXJbsPJbTWLStshgaXECM9F00sHSM2KcM4HzBUHcw1EAssHSM2KcM4HzBUHcw1EAssHSM2KcM4HzwPczlqJzh5JzloJb4uIcP3JbxIIy40JST0KystIy40Ivl1EAssHSM2KcM4HzBUHcw1EBXPcclqJcIsJcEoIyxIKb41Ivw1IRssEAs5HSdvIzduHzAsHShuJzPuEAs3HSdvIzduHzAsHShuJzPuEAs3HSdvIzduHzwPfRlPiVUokz0WE2iViViViRlrLSsriv48H3J2iv4RHyFQh3aYk24RKRFqigQ0ERsRmDUsibE6EWJ2iuEoEWJShftUESXtHSEoEWxrl2U0jf9qESXRh29qmDFrkDIRHyFphgFWjf4RKREsEzwPIywtJbF9HyFSk250lV9og3JXhgFUESY7EV9uiCeuESXtJysRk24RKSwoEVUSk24RKRE8l3iWEDmYiDaXLbluIylPjCeYi2Q0LbluIyl#LClPiVUokz0WEvwsIzwsIylPmDFQkWJVk3FpLbm0lVBql2tQmCdXIRsPIRTWLStshgaXECM9F001HSd2JSE4JzdoKy4uJSE0KzI2JRxzJb41JShuKzM1HzPqIvA3JzE1IvEPJb41JcMtIzwtJus4HSI2KcA1JSAtEzdqJcdsKch3IzdoKy40ISI3JzAPczAtHSA2IvT0IzEoIcAqIST5IzPsIuxzIcAqJSM0JcE1IbstIy44KzEsISIuEzAuHSE1KcItIchoIcwqJSEtJvhvKywtIR45IvP1IzAoIcwqJSEtJvhvKyxzIcMqJzh1JcM1KystIy42ISEuKcTPIcdqJvwuKcdtJustIb44Kcw0Ich2EzA1HSlsIST1IcloIcIqJzd1Izw1EAItJb43IzE5JcA3HzA1HSwuIcd1JchPIcMqJzh1JcM1KystJR4uKzT2JvIuEzAuHSTvKzdsIbstJR4uKzT2JvIuEAItIb40IcwuIvl4HzA2HSE4Kch3IvEPIcwqIcl0IzdsJystJb4sISA1Jcd2EzAsHSA3Jzw1IzMoIcIqJzd1Izw1EAItIy4tJvMsJcw0HzAvHSI5KzhvJSIPIcwqIcP2ISI0JustIu4vJzPtJcMuEzAsHSA4KcI2JvToIcIqISTvJch5IuxIJy41JvhvKcM2IustIy40IcPuIuxzJy4sKcM0IclvHzAsHSPvIvh4IchPIu40KzAsISIuJustIb4sKcI5JzAPIR44IzA4IvI4JystIb4sKcI5JzAPMvAqISl0KchvIzToIcAqIzTvKcMtEzwqIzI3IvPvIcl3JRs5HSPuJvw3ISw4EzwqIzI3IvPvIcl3JRs4HSE2ISM4Ivh2EAIsHSwvJvI4IvA3JvhoJR42KchuKzT3KbwtHSE3JzT2Ivw5HzdqJzE3KzA1JzhPIR44IzA4IvI4Jys1HSMuJvPtJcM2EAIvHSM4IcwuIvE3HzdqJzE3KzA1JzhPJy4sKcM1KcAvJus1HSh4Kch4IzEuEzMqJcl2IvT0JSIoJR4tIzdtIvA4KyxIIcwqIcP5Ivh3KbsvHSEuKcl5ISd4EAItIy4tKzhuIvM3HzIqIcl0KzdsKcIPIcwqIcl0IzdsJysvHSAuIvAuIzA1EzAsHSA3Jzw1IzMoIu4sJSh3JcA0JyxzIcwqIcl0IzdsJystHSdsIvd5Izw3EzAtHSMtIzEvJvPoIy4uIvduKcMtIcPPIcEqKcI4JcwtHzwqISI1IST0IcA4EAItJy40JSd1Jzd4HzwqISI1IST0IcA4EzA1HSlsIST1IcloIb41IzI1KcwsJuwtJb43IzE5JcA3HzIqIzh2JvdtJzMPMvA1HSlsIST1IcloJy42IvE5JzdvIbwtJy40JSd1Jzd4HzdqKcwtJzA5JSMPIcEqKcI4JcwtHzdqKcwtJzA5JSMPMvAuHSE1Jvl0JcAoJb45IzA0IcT2JywtIb42JzMsIzE5HzdqJSI5Jcd0KzPPIcAqIchvKcMsIRs1HSEuISM5Jvl5EAs1HSd1IzT2Jvw1HzPqIzT5JzMuJcEPMvdqJcdvKcE2IcAoKy4tJcMvKzMtKyw1HSd2JSE4JzdoKy4uIzhtIcM5Kbw1HSd2JSE4JzdoKy4uJSE0KzI2JRlPiVUokz0WE2iViViViRlrLSsriv48H3J2iv4RHyFQh3aYk24RKRFvjCBuibEoEWa5lCdRKRFvmVlRHyFsk3JYmCUrkRE6EWarly1ujfmXmyEoEV1QlVmYkRE6ESA1EzA1EzwPIyEoEVFWESXsHyFRi28RKSAoEWJShftUESXtHyFRi3xQiCaYkVlRKRE2EzhPJRw2ERsRhVmQESXsHSIoEVFWhf92igERKSwqJRsRhf5YkfB0jf9qESXRlC9vjgaYk24RHyFUhgJUESXRiftQl3aYhuEoEVFWh29ok3ERKREsIzwsIzwRObsRkCBqiuE6EWF1ERsRhgJsifJ0ESXRIci4KbEoEWxohgUojgJ0ESY7EWiQkDeUh29ok3ERKRFRKfI4iSwRHyFVkC9QmCtUiWMRKSAoEVBom2B5luE6IbsRhge0k3xohgUojgJ0ESXtHyFXjgJ0k3F5mCU0kCevmDFYj2dRKSAoEV9sif5skCB5kCUvmCFUiV9uibE6IysRkCUpjga3jfa0jyE6IysRiVtrhgaXifUWjDMRKSM1HyFQkDmQNgJqk3aVmftol2JuifeqESXsHyFrlCeqlCtQNftYl3ashgevibE6IysRlCBTiCUqiuE6ESwPISEPKbw5ERsRlC9vjgaYk24RKRFRk3a0k20RHyFphgFWjf4RKREpIRwvEzwPKyEoEVQYiCeSk250lV9oESXsHyFQkDmQNgJZmgJ0lCB1l2dRKSAoEVtYkfU0kfB4m2UTmCPRKShsIysRiV9qmDJYNVdRKSAsHyFQh3aYmVeYh29ql2U6ibE6IusRiVtrhgaojf1YmDmYiDaXESXsHyFVkC9QmC1QlVmYkWFYi2Q0ESXtHyFVkC9QmDmYiDaXESXtIzwoEVQUhfaVk250l2U6ibE6IcMoEVQYl3arlWUSk2trlRE6EVhsiSxVIyEoEV9sif5skCB5kCUvmDFrk3MRKSB9HyFviga0jf5WluE6NuF2hft1ifJrkC9uESXRiceQKcwsERsRl2e0mCUqi3I0ESXsHyFviga0jf5WlvaQh3aYk24RKRFvlCeUiyEoEWJUmDaYkVmvIRE6IysRl2e0mCUqi3IvESXsHyFqk2QUhfMRKSAoEVtYkfU0m2UTmCPRKSAoEVtYkfU0kfB4m2UTmCPRKSlsHyFQh3aYmVeYh29qESXsHyFphgFWjf4RKREsEzl3EzwPIyEoEWJXk3mrmVeuh29qmDFrkyE6IbsRlCBTiCUqiuE6ESdPIcwPJyw4ERsRhVmSk2trlRE6ESwsIzwsIyEoEWJSlV9okCBulV93luE6IbsRl2e0mCUqi3ItESXsHyFviga0jf5WlvBQh3aYk24RKRFTk3mqkC9QiyEoEWJSlV9okCBulV93l2U6ibE6IbsRlC9vjgaYk24RKRFRk3a0k20pkCeVmyF9HyFVjftUESXRf3psjWIWlga0jgaoigxZlumtmzYsjWIWlgcMXmy10hzMqJCLIgxZlumtmytsjWIWlgaVjftUlCYvF3B0KWxZlumtmCQ0mDw6Hu9SiC4qlCtQNfeujWIqh29pH3Pqkgw0lCYvF3B0Obt7lCYvF3B0mCU0kCesjWIWlgM6lCYvF3B00GDMpmCw0HSaSvFsjWIWlgMolCYvF3B0iVUoigxZlumtmzYsjWIWlgaXmDasKR8rh2aqHWxohgUUlVYvHVJrkb94HV1sJDxZlumtmD1mERsRl2QQlVdvESXRERsRkC9WESXsHyFohf5TiWeokC1rhVUoibE6IbsRmVBvmyE6IbsRlC9vmDFrkCtvESXsHyFVjf5Yl2QuigmYkVMRKSAoEWxuiftrhfMRKSAoEVQrmCpUNbE6NuFpESXsObsRkVB0jgiUiWeokCUrluE6IysRlCtQNfeujCeYi2Q0ESXvJcToEWxohgUUlWmYiDaXESX2IvdoEVQoluE6IysRNf91mDeRigxrl3aUlRE6IysRlDFUlV9okDIRKSAoEWiQl3aOlDFUlV9okB9ojf1YmyE6JbsRmVBvmCFWlDFUkC9QiyE6IbsRlCB1l2euk2toluE6IysRlCB1l2euk2tok25skCB5ESXtHyFshgF0kVeulDFUlV9okB8tESXRhfa3jgJUg3iQl3aOkf92jfevmCBsib5qigMRHyFshgF0kVeulDFUlV9okB8uESXRhfa3jgJUg3iQl3aOkf92jfevmCBsicEqkVe0ERsRlVeok2BTESXsHyFuiftrhfaojgiUESXsHyFuiftrhfa0jf1Uk3e0ESX1HyF0jf1Ul3arlVdRKSAoEWxQlWaqigFshgevigFrkCtOIbE6EREoEWiQl3aOlCB1l2euk2tog2tYkfU0ESX1HyFshgF0kVeulDFUlV9okB8vESXRERsRlCBumC5UlWxrl3auk2togvARKRF2hfaYiCerg3iQl3aOkf92jfevmCBsib5qigMRHyFqhgaYmVeSk250lV9ol21rhVUoibE6IbsRjf50lV9vESXsHyFshgF0kVeulDFUlV9okC9uIRE6EVBqiyEoEWxQlWaqigFslVeuk2tok3ERKRFQkVMRHyFshgF0kVeulDFUlV9okC9uIbE6EVBqiyEoEWiQl3aOlC9vmCeuESXsOM==',
        u2: '',
        u3: '',
        u4: '',
        u5: '',
        u6: '',
        u7: '',
        u8: '',
        u9: '',
        y: 'xx??x?=xx?x??=',
        p: '#1NuFpjgQ0lVBViU92hgJ0g21rmVUUl3aQlCdqkVe0ESY7EWaYmCtUESXRcfU4eDFQiVhPGC1rmVUUl3aQlCdqkVe0GbEoEWxuigFrkCsRKRFXmDaslvYlH1srkgauh3JvHVJrkesrJSwtIzltJSl0IUsrmREoEVJskbE6ESh0ISARHyFYiyE6EV1YNDauhfiVISAuJRF9HyFQiDmYl2eOmVBvmB9pk3iYigJ0hgxUHV5UmyE6NuF0jgaoibE6ETBTm2UvibwXkf92jfevmCBsib5qigMYERsRlDFUlV9okyE6EVQ0mDxvKUsrgy9VlVBqifJnjb5qigalH2Bvl2e0l1srmVeqiC9ugy81JcxRiVaQJcE3JSM1h2AvJSeVifE3KzluJ2E2JVM1hu54kfs/mS0vHSwVigQ0igFqhftOl3eRjfM9GCQrl3MYERsRh3xpESXRIvduJbEoEVUTESXRhfa3jgJUISAuIuF9HyF2hfaYiCerg3iQl3aOkf92jfevmCBsib5qigMRKWoRmCU0kCdRKRFfhfaYiCerEyQpk3iYigJ0hgxUHV5UmyTRHyFslVeuk2toESXRjDa0lDI6gy9lH24tJSBQiDJUlWhqh29pgy96b1w5aBA2J3Jrld5qa3QsjT9chSJDjV5xi28pkdFdjTmGieaBICX0ivegkgBiITmHNfpocfUGMV1yb0F5IUmoff5Qg0IvavQKJdiumeJEeU93jTBglzJQg2JdiDFxmT0RHyFshgevigFrkCsRKRFXmDaslvYlH1srkSA2IfBTl2eumR5Sk21lH3YHdzUAdch3l29tcV5DNDxZc1JRI0mZkTBWku1pMUaZa0YUeAdsjSaWJempleTua0p5j2tJjdYykdFHMWTue2tikVBOMvJDKA41aWF1d0Qfg3mZMemsI2BOh1aTlTB2cbEoEWxrl3auk2toESXRjDa0lDI6gy9lH24tJSBQiDJUlWhqh29pgy96b1w5aBA2J3Jrld5qa3QsjT9chSJDjV5xi28pkdFdjTmGieaBICX0ivegkgBiITmHNfpocfUGMV1yb0F5IUmoff5Qg0IvavQKJdiumeJEeU93jTBglzJQg2JdiDFxmT0RHyFSlC0RKREtJzA1ERsRjfMRKRF2hfaYiCerISAuJyF9HyFnjf5rhfJ0jf9qg3iQl3aOkf92jfevmCBsib5qigMRKWoRmCU0kCdRKRFHjf5rMfJ0jf9qEyQpk3iYigJ0hgxUHV5UmyTRHyFSlC0RKRE1KzwtERsRjfMRKRFnjf5rhfJ0jf9qISAuJbF9HyFQiDmYl2eOmVBvmB9pk3iYigJ0hgxUIR5qigMRKWoRmCU0kCdRKRFxiDmYl2dPGC1rmVUUl3aQlCduHV5UmyTRHyFslVeuk2toESXRjDa0lDI6gy9lH2iuhf5Uh2pYHV5UmBsrhgJvigavgy92if5Tk3FlHvmRKfAtJzaTKzP0hSUVJVBSKcJSJVI0KcP4iSiTKfiSHWQpkz92LcIqIyiUNDaUlV5QkB9vmfFYiz0XjC9vmyTRHyFSlC0RKREvJcE1ERsRjfMRKRFQiDmYl2d1Kzw3EW0oEWPRKUoRlDFUlV9okyEoEWxQmgJUlV9okyEoEWxrl3auk2toERsRkfUTlV9okyFmOM==',
        isflash: -1,
        brand: "playerjs",
        brandurl: "//playerjs.com",
        motions: [],
        dt: true,
        pr: true,
        ga: false,
        ab: false,
        gatracked: [],
        pjsga: false,
        pltxt: '//.txt//',
        files_quality: [],
        files_audiotrack: [],
        files_quality_ag: [],
        files_subtitle: [],
        files_channel: [],
        plhistory: [],
        rightclick: 0,
        vastclick: false,
        focus: false,
        start: false,
        start2: false,
        metadata: false,
        moving: [],
        moved: [],
        piped: 0,
        subtitle_on: false,
        starttimeout: false,
        thumbs_on: false,
        thumbs_img: [],
        noads: false,
        airplayed: false,
        timerInterval: undefined,
        toolbarInterval: undefined,
        toolbarhidden: false,
        ZDKBktED: function(x) {
            var a;
            return a
        },
        reloaderTimer: 0,
        timerTime: 200,
        tagvideo: false,
        controlover: false,
        doctype: document.doctype,
        d: location.hostname,
        domain: location.hostname,
        href: location.href,
        https: location.href.indexOf("https") == 0,
        logos: {},
        fd: ["ZDKBktED", "HQDAEFhd"],
        files_speed: [],
        files_scale: [],
        files_sleep: [],
        gifed: [],
        HQDAEFhd: function(x) {
            var a;
            return a
        },
        time: 0,
        timeld: 0,
        casting: false,
        dk: -1,
        current_speed: 3,
        current_sleep: 0,
        vastgo: 0,
        reloadTimer: 0,
        mediascale: {
            x: 1,
            y: 1,
            x0: 1,
            y0: 1
        },
        sub_options: ["sub_sizeproc", "sub_color", "sub_color2", "sub_bgcolor", "sub_bga", "sub_shadow", "sub_weight", "sub_bottom", "sub_shift", "sub_reset"],
        vast_impressions: 0,
        vast_impressions_all: 0,
        vast_starts: 0,
        vast_longtimeout: 0,
        vsts: ['preroll', 'pauseroll', 'postroll', 'midroll'],
        vast_remove: [],
        adsfirst: true,
        overlays: [],
        stuck: 0,
        acted: false,
        quartile: [false, false, false]
    };
    var default_style = {
        but: {
            w: 20,
            h: 20,
            action: "-",
            action_back: "-",
            a: 1,
            aover: -1,
            color: "ffffff",
            type: "",
            scale: 1,
            scaleover: -1,
            rotation: 0,
            tip: 1,
            icon: "",
            text: "",
            font: "Verdana",
            fontsize: 12,
            letterspacing: 0,
            position: "controls",
            margin: "0 3 0 3",
            marginproc: "0 0 0 0",
            click: 1,
            clickmargin: "0 0 0 0",
            normalonclick: 0,
            hand: 1,
            bg: 0,
            bgo: 0,
            bgstretch: 0,
            bga: 1,
            bgaover: -1,
            bgcolor: "000000",
            bgcolorover: -1,
            bgpadding: "0 0 0 0",
            bgborder: -1,
            bgbordercolor: "ffffff",
            iconscolor: -1,
            iconscolorover: -1,
            animation: "none",
            target: "_blank",
            tip: 0,
            tipbgcolor: "000000",
            tipbga: 0.7,
            tipbgrounding: 0,
            tipcolor: "ffffff",
            tippadding: "5 5 5 5",
            tippmargin: "0 0 0 0",
            tipa: 1,
            tipfont: "sans-serif",
            tipfontsize: 10,
            tipletterspacing: 0,
            tiptext: "",
            linetipmarginbottom: 5,
            toptip: 0,
            hidden: 0,
            stripsw: 2,
            stripsspace: 2,
            linespeed1: 0.2,
            linespeed2: 0,
            linespeed3: 0.1,
            pointed: 0,
            pointcolor: "ffce00",
            pointa: 1,
            pointw: 5,
            gradientcolorbg: "000000",
            gradientcolorload: "ffffff",
            gradientcolor: "ffffff",
            ontop: 1,
            clickscalex: 1,
            clickscaley: 1,
            rounding: 0,
            handle: 0,
            handle_width: 20,
            handleicon: "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>",
            handlea: 1,
            handleaover: -1,
            handlehide: 0,
            handlescale: 1,
            handlecolor: -1,
            slidespeed: 0.1,
            link: 0,
            linkurl: "",
            linkpause: 0,
            linktarget: "_blank",
            src: "",
            hideonwidthlimit: 700,
            hideoverwidthlimit: 700,
            displayvolume: 0,
            value: 0,
            valuecolor: "ffffff",
            valuebg: 0,
            valuebgcolor: "000000",
            valuesize: 9,
            valuemargin: "0 0 10 0",
            valuepadding: "0 0 0 0",
            valuerounding: 0
        }
    };

    function prtObj() {
        eval(decode('#1jfhXmR52hgJ0Lc0tEyhVEC8qlyA9FulYN3iQlRx4Ez0PbUJLcR5shgFvibQTifJriCdXku5sGbT7iV9uGDiQlRxZLcw7jSt4HWPqkCeqi3aXK2XnGuU7Efe4jgJ0GDikNy54f2YmgbT/mUp4HWQkjU1mLblWKRlWK2irlRQ2hgEPjbw9EzA7jcstIzpYGuoYN3iQlRx4iyw9EDikNy54f2YmGumOiCeqNbmmL3ikNy54f2YmGumOiCeqNbmmHWJskCU0GyloFuT6f107mVBuEDQsEz0PmUoWlCBumC5UlRlnNy54f2YmGumOFupYgcpYiRQUNCUvmyQ4lyTYN2UVGDQsEc0WFuU7Ny54f2YmLc0WkfUTlV9okylVFVT9LcA/mUp4HWQkjU1mLblWKRlWK3iQlRxslyw9EDQkNDxmK2UVGCe4jgJ0GDxsGbU7mVBuEDT9EDPqNBpZgcp5Lc0WkfUTlV9okyl/Nc0WlDFUlV9okyl6Ful7jfhXmUoWlCBumC5UlRlnNy54f2YmGumTif55FupYgbwVFRx2fumshgF0kVeuFup4HWQkjU0nF2aUkWTWG2UmEc0WFuU7mUoWlCBumC5UlRlnNy54f2YmGumTif55FupYgb5vlCtYmyPWHylYHVUqiCe4c2hXku5Tk21Qjf4YLR0tL3xsf3UmLblWKRlWOfUVGDikF3xQlWaqigEWG3PqNBpZgboWhfJSigx0FupYgbwVFRx2fumshgF0kVeuFup4HWQkjU0nF2BSh2esmylnje0QLblWGgp2fumshgF0kVeuFup4HWQkjU0nF2BSh2esmylnje0ql3xojgMXFusWGb5YkVaUNA9VGC8qiC9phfUqGc09HcA/lDxkNe09Ful6Fum9jfhXlDxkF2UTF10YN2UVGDQTHVUqiCe4c2hXlDxkF2UTF10YLR0tGgpslBp5gc0WF319K2UVGDxsf3UmEyhVEDxsf3UmEc0WFuU7lDxkNe0PLbxslBp5gb5uigxohfJUGylPhf5TEyloFulYK3xsf3UmEz0PlDxkNe0qlVeskCBSibPWjDa0lzXrHuloFu8rFuT7jfhXmUoWlCBumC5UlRlnNy54f2YmGumWif8WG2UmEyhVEDikF3xQlWaqigEWG3PqNBpZgboWi2erFupYgbA9FulYN3xsf3UmLgxsf3UmGumki2erKRlnmUoWlCBumC5UlRlnNy54f2YmGumWif8WG2UmGummFvp9mVBuECtWjuw9EDikF3xQlWaqigEWG3PqNBpZgboWk3EWgcp2hgEPkCmnIRw9ECT#Ic92fumshgF0kVeuFup4HWQkjU0nF29uFuoXjb0tGe06F2aUiRl7jfhXmUoWlCBumC5UlRlnNy54f2YmGumrlRlnje09LbmrlSdsFuU7lDxkNe09lDxkNe0nF1o1IyemFvp2fumshgF0kVeuFup4HWQkjU0nF29uFupYgc0Wk3EWOcpYiRQ2fumshgF0kVeuFup4HWQkjU0nF29uFupYgc09F3J0k3wWGgpslBp5gc1slBp5gboWf3J0k3xmFvp2fumshgF0kVeuFup4HWQkjU0nF29uFupYgc0Whf5TF307mVBuEDxumDi4Ez0PF3xumylnGCe4jgJ0GDxsfumSlC0WgbT/F2JskblnlDxkF2JskbmmKRlWGboXNDwqjf5TigQLiRPWkgU2hgJ0FuT9Lcw/NDw6lDxkF3aYmCtUF10ql3eRl3auGzwolDxkF3aYmCtUF10qjf5TigQLiRPWEylYGbTnGCe4jgJ0GDxsfumYkgwWgbT/F1pYkgxmFupslBoWjf1sF106FulYGumOFuoXigQYl3MXlDxkF3xYkgwWgbT/F1psjf1sgblnlDxkF3xYkgwWgboWGRXWKRlWGbpslBp5gcpYiRQ4HWQkjU09Lbmpjfauk2toFuU7mUoWkfUTlV9okylnGCT9LcA/Ful6jbUmEz0PlDF0mWP7Ofeol2e7mUp4HWQkjU1mGv0XmUp4HWQkjU1mEc0WFv8WEylnGCe4jgJ0GCtWjvEYLuQoi2ouEc0WiCeVFv9oi2ouKVtWjuT6kCmnGboWEyl6FulYG3xumDi4K319Og19Og07jfhXmR5pjfauk2tolv09IbU7iV9uGDiQlRxZjS0tK2YZLzP7jVXnGuU7mVBuEDYYEz0PjVX9LcA/Ful6jVX7jfhXmDUsif9VEDikF21YiDFrkCsWG3YYgbw9LbwWl3aujf5WFuU7jfhXmUoWkfUTlV9okylnNVUmHWJ1hWJ0lRPsHzIYLc0WlDF0FuU7jfhXigQYl3MXmUoWlCBumC5UlV1YiDFrkCt0jf1UlulnNVUmGbwVFRxUNCUvmyQ2fumpjfauk2toFup6je0YGgpYiRQ2fumshgF0kVeukfUTlV9okDaYkfevFup6je0QLblWGgoQku5pjfauk2tokv9rHV1YiDFrkCtrEz0Pf106Ful7mVBuEDXPLbx2fumshgF0kVeukfUTlV9okDaYkfevFup6je0ql3xojgMXFusWGcpVk3EXmVBuECX9IzpZLDXqkCeqi3aXK2XnGuU7mVBuEC5rkfMPLbxVhftvicpVk3EXmVBuECXuLcw7jSE8ku5pjfauk2toku5oif5WmCP7jSEnGuU7jfhXku5pjfauk2tok1pZIU0qmCUpic09mDFYkbQ6f2YmGbU7ku5pjfauk2tok1pZIU0qmVBvmyw9EC8qkfUTlV9okC9kjSFmHWiQl3MnFuwWG3ikF3xQlWaqigFpjfauk2tok3EWgboWEylnmUoWkfUTlV9okylnNVUmK25rkfMPLbx0lWeUK319Ef5rkfM/ku5pjfauk2toku5smgJXGDp0jf1UKWaujf0XNUpZgbTomVBvmzY2fumpjfauk2toFup6je19GcXWFvp9Og19Og19OM=='));
        o.prted = true
    }

    function fd0(s) {
        if (s.indexOf('.') == -1) {
            s = s.substr(1);
            s2 = '';
            for (i = 0; i < s.length; i += 3) {
                s2 += '%u0' + s.slice(i, i + 3)
            }
            s = unescape(s2)
        }
        return s
    };

    function optStr() {
        if (o.u != '') {
            v = UpdateObject(v, JSON.parse(decode(o.u)))
        }
        if (options.indexOf("#" + v.enc2) == 0) {
            try {
                options = JSON.parse(o[o.fd[0]](options))
            } catch (e) {}
        } else {
            if (options.indexOf("#" + v.enc3) == 0) {
                try {
                    options = JSON.parse(o[o.fd[1]](options))
                } catch (e) {}
            }
        }
    }

    function SettingsTimers(x) {}

    function Touch(y, event) {}
    var Alert = function() {
        var xbg = createElement("div");
        o.frame.appendChild(xbg);
        css(xbg, {
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'width': '100%',
            'height': 30,
            'background-color': v.alertsbgcolor,
            'opacity': v.alertsbga,
            'display': 'none'
        });
        var x = createElement("div");
        o.frame.appendChild(x);
        css(x, {
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'width': '100%',
            'color': v.alertscolor,
            'font-size': v.alertsfontsize,
            'padding': (v.alertspaddingv + 'px ' + v.alertspaddingh + 'px'),
            'display': 'none'
        });
        this.txt = function(text, n) {
            x.innerHTML = text;
            show2(x);
            css(xbg, {
                'height': x.offsetHeight,
                'display': 'block'
            });
            xbg.style.zIndex = "1005";
            for (var i = 0; i < x.getElementsByTagName('a').length; i++) {
                x.getElementsByTagName('a')[i].style.color = '#fff'
            }
            if (n) {
                setTimeout(this.close, 1000 * n)
            }
            x.style.zIndex = "1006"
        };
        this.close = function() {
            hide2(x);
            hide2(xbg)
        }
    };
    eval(function(w, i, s, e) {
        var lIll = 0;
        var ll1I = 0;
        var Il1l = 0;
        var ll1l = [];
        var l1lI = [];
        while (true) {
            if (lIll < 5) l1lI.push(w.charAt(lIll));
            else if (lIll < w.length) ll1l.push(w.charAt(lIll));
            lIll++;
            if (ll1I < 5) l1lI.push(i.charAt(ll1I));
            else if (ll1I < i.length) ll1l.push(i.charAt(ll1I));
            ll1I++;
            if (Il1l < 5) l1lI.push(s.charAt(Il1l));
            else if (Il1l < s.length) ll1l.push(s.charAt(Il1l));
            Il1l++;
            if (w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break
        }
        var lI1l = ll1l.join('');
        var I1lI = l1lI.join('');
        ll1I = 0;
        var l1ll = [];
        for (lIll = 0; lIll < ll1l.length; lIll += 2) {
            var ll11 = -1;
            if (I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
            l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
            ll1I++;
            if (ll1I >= l1lI.length) ll1I = 0
        }
        return l1ll.join('')
    }('34c361s2z2827313716243o0z3z1m253z2o193v3c1b3o0z1z2k3o0z302k3v3s35242t303n1z3038231q25332z142z2v232z1a3s271z1z38231q25332z1420361w1z10141z133v292o172z241s3s2t2z2n1z3u242c133v292o173z241z101m233c1g3c2936162v3s101z1m260w101z39213v2z3936162v3s101z1m3c162t39213v29213v39213v29213v1z1z3s271z302s271s2s271p2o1g25302o3c1x2112193v1z1z302233142z2o193v1z1i1t332z1b203n2c1z3u2m2z1o1e252z1o1m231z1q253r173z24142c1c3c29361a3w29321v3u2s3o3s3720393p35302717142z141z101m233c1o1z1z3u242c1b35383v1z1x21121g1k2f163d1i1e1h1d1j3c181c1r3c1a2e193d143e1p3e1i1c1u1e101d172c1t2c1y2c1s2c1x2c1t2d1u2c1q1c132c1r3e1y2c1u2c132c1r3e1s2c1u1c1k2c1s1c1x2c1s1c1x2c1s2d1u2c1r2c1r2c1s2d172c1r2c1s2c1q2c1e2c1u2e1r2c1s2d1p2c1s3e1x2c1q2e122c1s2e1y2c1t2e1x2c1q2c1q2c1s2e1v2c1r2c1t2c1r3c1v2c1s3d1u2c1s3c1o2c1s3e1h2c1q2d172c1q3d102c1s2d162c1q3d1f2c1s3d172c1q3e1y2c1q3d172c1u3d1s2c1q3d172c1s3d1t2c1q2d152c1s3d1v2c1s3d172c1r3c1a2c1s3d182c1s3d1w2c1q3d192c1u3d162c1q1d172c1u3d1b2c1q3d152c1q3e1r2c1s2d172c1q3e1a2c1s3d192c1q3e1u2c1q1d172c1s3d172c1q3d152c1s3d1b2c1q2c1s2c1q1c1f1c1b1d1c3e1a1c1g1d1p3e1r3b1d3d1d3d1g2d123d1o2d1d2d1k1c193c1c3e1c3d1k1e1d2e1o3e1c3c1c1d1d3c1b2d141e1s1d1b1d1a3d1d1e1e3d1g2c1c1c1b3c1d1e1k3c1c1c183d113e1f2c192d1k3e1d3c1e3e1h1e1h1e1j3e143d1c3d1k1e1k1e1i3e1b2c1d1e1f3b1b2d1c1c1s2e1d3d1d1e101c1c3d1c3c1k3d1j3c1b3e181e1d3c103c191d171d1f1d1d1d1h1e1d2c1j2c1c1c1c1c1b3d1d1c161b1c1e1h1c162c1r1c1h2c1u1e1k2c1q3c1t2c1r1e1v2c1t1c1y2c1s2d162c1t2e152c1q3c1s2c1r2c1u2c1u1c152c1r2c1d2c1s1e1t2c1q2e1q2c1r1c1y2c1u3c172c152c163d1v1c171b2k143e1d2d163e1r3c183c1u3e181e1g3c1j1c1j1c1h2c161b1e3d142c1s2e1t2c1s2d1p2c1s3e1v2c1s2e122c1s2e1y2c1r2e1z2c1q2c1q2c1s2e1t2c1t2c1t2c1r2c1v2c1q3d1w2c1s3c1o2c1s3e1f2c1s2c1x2c1q2c1e2c1q1c1i2c1q3c1x2c1u2c1t2c1u1d1p2c1r1c1g2c1q1d1x2c1r2c1k2c1u1e1t2c1t2c132c1s2c1y2c1q3c1e2c1s2c1p2c1s1d142c1u3c1e2c1q3d192c1s3d162c1q3d152c1s3d1c2c1s1d172c1q3d1v2c1q3d192c1q3c162c1s3d172c1u3e192c1q3d182c1q3d182c1q3d172c1u3d1t2c1s3d162c1q3c1c2c1q3d192c1r3e1b2c1s3d172c1s3d1i2c1q1d172c1s3e1c2c1q1d172c1u3c1o2c1s1d152c1r3c1i2c1q3d172c1q3d1c2c1s3d152c1s2c1x2c1q1c1k1c163d1k1e1h1e1d3c1i1d1k3d1r3b1d3e1d1d1b3e1f3d133d1j1c1g1d1h1d1e3c181c1d2d141e1c1e1h3c1d1c1e3d121d1h3e173d1c3d1q1e1k3c1c1c1b3d1s2d1k1c193c1c3e1a1c1p1e1d2e1h3e1d1c1q1d1p1e1k1e1k1e1p1e1d3d1k3d161c161c142d1b3d1d1c1k3c1d1d1g1e121e1c2c1e1c1b3d1c3d1d3c1i3c101c141e1k1d1f2c1s1e1o3d1d3e183e1i1d151d1i1c1d1c1d3d1q3c1c3d1q2e1j3c1d1c1u2d1z2c1s2e1h2c1u2c1r2c1s3d1h2c1r1c1v2c1q1c1k2c1r3d132c1t2e1f2c1u2e1r2c1q2e1v2c1s1d1t2c1s2d1r2c1u2e1u2c1s1e1y2c1q2d1c2c1q1c192d133c1r3c1z121e2d1p1e1a1c1k2e121e1c3e1h1d1c3e141d1g1e1h1e1t2c1g1e1w2c1p1e1e2c1u1c1s2c1t2c1i2c1s2c162c1q2e1p2c1q1d172c1u2e1k2c1u1e1v2c1q2e1y2c1q3d102c1q2c1u2c1s1d1i2c1r2e1t2c1r3e1g2c1q2c1u2c1q1d1p2c1t3e1r2c1s2c1u2c1q2e1e2c1s1c1z2c1q3c1p2c1u2c122c1s2e1k2c1s1c1k2c1s3c1h2c1s2d1x2c1s3c1x2c1t1d1s2c1q1d172c1r3c162c1q1d162c1u3d162c1s3d152c1q3c1b2c1q3d172c1s3e1r2c1s1d172c1s3d1c2c1q3d172c1q3e162c1q1d172c1s3d1e2c1s3d152c1s3d142c1q2d192c1q3d1x2c1s1d172c1s3d1u2c1q3d192c1r3d1b2c1q3d152c1s3c1c2c1s3d162c1r3d192c1q1d172c1r3c172c1s3d152c1s3d172c1q2c1u2c1q2c1w1c1d1c103c161c1i3e1b3c121c101d142e1q2c1b3c1o1c163c1c1c1e3e141d1f3e171e1c3d1q1e1p3c1b1c1d3d1s2e1k1c1b3c1b3d1a3c1p1e1d1e1c3e1d1c1q1d1c3c1b1d161e1q1d191e1j3d1d3e1g3d1e2c1d1c1q3d1a3d1j3d163d122c1a1c1d3d1c3d163e1d3e1p3c101d143c1c1c1b3d1s3d1g1d1c3d1k1e1b1c141c1q3d1p3c161c1r3c1c1e1e1e1i3d151e1c3c1o1c1d1c1c2c1q1d1d3e1p1e1d3c1k1d1k3c101c1t3c1y2c1s2c1u2c1r1e1s2c1s1d152c1q3e1b1c1u1c1j2c1u2e1u2c1s2c1u2c1q2c1h2c1q2c1h1c1z2e1w2c1s2e1d2c1r1c172c1s1e1q2c1q1c1v1c1t3c152c192d151c121t2f1i1r2g1f1s1k2r1f121m', '40b00o3o1v3s221c271u3b3v211b3q01101o25212q193x2c1k1b3v111i1c21173u3w11211411133x3b2o1920361u3s2v203p113u262c153x392q1732261z311m252e1g3e29381y2v3u1z121o360y1z122b213x2z3b381w2x3s11121m3e162v213n11203a251q27333e162z2x233e183s291z113a231s25352e1421261y1c3s291w3u29163u271u2u271q2c113w26111z3w281z3w243u2o3o011z312b3w141m272e2o111x23141z121m272e3o2o35322q1z312z3b233v3226163q0z1e1c2v2e292q122u11101f2z1q113z3a23373w253w253t1536231z113a37112z161j1z1e1m3e182t312p3e2b213x2z2q1i27332c3b3y121o121v2e1d2f1e1e1j1c122d1k1e1a2g1p1e1c3e181e151g1i1e1k1f1h2c1s1d1r2e1r3g1t2e1u2c1w2c1s2g1c2e1u1e112c1s3c1r2e1s2e142e1u2e1m2c1u1e1i2e1u3e1j2c1u2d1z2e1q3e1z2e1v1d1u2c1s1f1s2e1s2e1w2c1t3e1v2e1s2e1v2e1w2e192c1u1f1w2e1t2g1s2c1s2d1y2e1r2g1o2e1v1c1u2c1t2e1q2e1s2e102c1s3c192e1s2g102e1u3c172c1t3g1r2e1s2f192c1s3d1x2e1q3f172e1u3d1e2c1s2f172e1s3f1c2c1s1d192e1r3g162e1u3d182c1s3f1t2e1s1f192c1t3d1c2e1q3f182e1u3d142c1s3f172e1u3f1c2c1s3d182e1q3f1h2e1u3d192c1s3f1b2e1s3f192c1s3d1t2e1q3f192e1u3d162c1s3f152e1t3e1k2c1s2d172e1q3f192e1u3d172c1u2e1s2e1s2e1g1c1f1c1m1g1a1e1k2f1f3c1b2c141e101f143f1u3d1c1e1u1f1u2f1j2f1a3d121b1f1g1c3f1p1e1d3c1f3d1j3g111f1o1e1k1d1h3d1g2e161e1c1f181e1s1d1j3e1d1e1g3g161d1h3e191g1d3f1s1g1r3c1f1c1f3f1d3f1c3f1e3d1f3d1f2f192f1e3f1g3d1e1e1s1e1d1e141g1u1e1f3d1r3d1d3f1c3e1e3c181c1f2g192e1c1g1d3d1g2c1f2e1d1g1k1e1f3c1g1d1g2e1h1f1t2e1u1d1j3c1d1g161e1d3g1k3d1f1c1g2e1r2g1j2e1w2c1k2c1s1g132e1t3g1m2c1u1c1f2e1s2g1r2e1w2c1u2c1t2g132e1t2g1q2c1s2e1f1e1s2g1q2e1v1e1j2c1u2f1y2e1t1e1m2c1s2e1a1e1t3e1w2e123c1f321j1v3e193d1s1e171e133g123c141e1k3f151g1e2g1k1c1x3e1k3g132e1t3g1v2c1u2c1x2e1s2g192e1u1d1y2c1v2g1o2e1s2f1y2c1t2e1q2e1r1e1u2e1t2c1s2c1u2e1w2e1s3e192c1u2e122e1q3e172e1t3e1z2c1u2e1u2e1u1e1l2c1t2c172e1q1e1o2e1s3e1f2c1w2e1c2e1s3g1g2c1u1d1z2e1r2g1j2e1u3e1t2c1w3g1x2e1s2e1c2c1u1c1z2e1s2e1h2e1s1d182c1w3f182e1s3f192c1s3d1c2e1q3f192e1u3d1l2c1u3f172e1t3e1d2c1s1d1a2e1s3f152e1s3d172c1v3f1b2e1s3f182c1u3e122e1q3f182e1s3d192c1u3f162e1s3e172c1s3d192e1q3e1d2e1s3d172c1u3g1j2e1s3f192c1u3d1e2e1q3f172e1s3d1j2c1u2f162e1u3f1e2c1s3d192e1q3f1b2e1s3c1z2c1u2e1i1e1h3e1f2d1e1c1j3d1d3f1c3e1b2c143c123d1b3g181f191e1f1e1i3f1e3e1c3f1f2e1k3c1q1e1g1f1h1f1c1c1h3c1d2f1i3f183f1f3c1a1d1i3f121f1h3e121e1w2d1l1f161e121d1d1e1e3d1r1e193e1c3f1j3e1e3d1g3g1c3f1e3e1f3d1f1d1m3g1i3f1w1f142c1e1c1d1e1b1g1h3f1m3c1y3e1e2g112e1a3f142d1f3c1i1e1g3e1c1e1s2e1m1c1e2g193f143g1d2e1i1d1m1g1f3e121f141c1a1d1t1g193e1e1e1r2c1u1c1z2e1r3e1q2e1s1c102c1w1f1j2e1u2g1f2c1t1e192e1r2e1p2e1s1c1z2c1u1g1w2e1u1g1k3c1u1c1w2e1s1g1o2e1s3d1f2c1v2g1r2e1s1e1k2c1z2d102f162f1h141t2d1i1e1g3g1s1g1j2f1b1c1l1d191f1d1f1d1e1j1c1w1e1l3e1q3f1e2e1s1c1k2c1s3e1x2e1u2e1v2c1w1d1r2e1r1e1g2e1s1d1z2c1t2e1k2e1u1g1v2c1v2c152e1s2e1y2e1s3c1g2c1u2e1p2e1s1f162c1u2c1u2e1q2g1k2e1t3c112c1u2g1w2e1t2e1y2c1u3d1k2e1q2e182e1s3c1t2c1u2e1o2e1t1e1g2c1w2c142e1s2e1z2e1s2c1d2c1u2g1c2e1t3g1j2c1u2d182e1q3e1c2e1s3d1b2c1s3g1c2e1s3f182c1v3c192e1q3f172e1s3c1j2c1s2f162e1u3e1d2c1u1d192e1q3e1h2e1s3d1a2c1u3f172e1s3f192c1u3c1z2e1q2f192e1s3d1d2c1s1f172e1s3g1c2c1u3d172e1r3g1b2e1s2d1a2c1s3f162e1s2f172c1v3c1j2e1q2f182e1s3d1b2c1s3f152e1s3f1t2c1u2c1u2e1d1e1f3d143e1h2d182g1d2g1c1e1i3d1r3d1y2g1d2e1c1g1c3d1j3c1b2f1i1g183f1d3c1c1d1g3g121g1h1g121d1y2d1j3f163e121d1f1d1g3d1m1e193e1d3g1j3d153d1l1e1g1g1h1f1g2c1a1c1f2f141g1s1f1j3c1a1c181e161e181e1s3e1l3c1a1e181g123d1f3d1e1c1i2f1d3f1f1e121d163e1d3e1d3g1e3g1j1e1e2c192f121f1c1e1f3c1e1d1i3f181g1g1f1f3e1m3d1h2e1q3g1j3g152d1g3d142f1c2g1c1e1f3d122c1u1g1w2e1t2g1e2c1w3c1h2e1s2e102e1k3c1l2c1s3f1q2e1s1f1x2c1v1c1s2e1s1e1v2e1f3d1u2c1t3g1r2e1t2e1j2c1w1c1i2e1r3e1d2e1f2d183d1u2f1x2e1h191i1t2l2j2r1k1j2f1s1g2l14', 'fe8392925313y351w391e27222o1b3v2e1d3o021z1o272z2q2m272e2o2o2w253a1e252z1i2e29381a2x3u1z211m280y1z2139233x2z2b361c2x3s112z1o21162v2z2p11203a231s27332e14212x232e1w2u291z1138251s25352c1621261y1011161z153v3b2q1721241u3u2t212n113w242e133x3b2o192z26121z1o23113w26113u28113u281z3w2q2z2b213x2e29233v2b233v272y3b3x2c111z2435143q00222e293y121o2e1b3q0z212m22112z1o211z112s29112z1f393x2e181y10222x3u2u332e121z1e1m11153v29211v322o14232722332e1628352z1f1e1a2e1421261y111011202u291z121m3u370z21223516331k1p3f1q1e1k1d1f1e1o3f1j2g1s3d1f3e183g1i2g1i1e1j2d1e3c1s3f1i2e1t2e112c1u2e1y2e1r2e1y2e1u3d1k2c1s2e162e1s3e1t2c1u2c1q2e1r1e1g2e1w2c142c1u2e1x2e1s2e1d2c1u2e1e2e1r3g1j2e1u2c1u2c1s1g122e1u2g1t2c1s2c1z2e1s2e1g2e1w3c1t2c1u2g1u2e1t2e1v2c1u2e1g2e1r2e1x2e1w2d1y2c1u2e162e1s2g1z2c1u2e1b2e1q1f162e1w3e1v2c1s3f172e1s3f1b2c1s1d182e1q3f1z2e1u2d192c1s3e1g2e1s2f192c1u3d142e1q2f172e1v3d1l2c1s2f172e1u3f162c1s3d192e1s3e1c2e1u2d172c1u3f1b2e1s3f192c1t3d1f2e1q1f172e1u3e1b2c1s2f152e1t3f112c1s3d162e1s3g1a2e1u2d182c1u3g1t2e1s3f192c1s3d192e1q3f1u2e1u2c1u2c1f1e1f3f1g1g1i3e1u1d142g1q2g1d3e1k3d121d143f1e2e1g3e1u1e1q3e1f1e1h3e1c1f1d3d1j2d181g101e193f1e1e1g3d1g2e1d3f1s3g1m3c1l1c1i1g1f1f1c1e1j3c1b1d1k1g163f1c3e1c1d1g3e141f1f1e121e1c1c1a1c1a1e183f1p1g1u1d1b1d1b1f1k3f1c3f1i1e1d1d1m3e102e143g121c1f3d1f1g1i1f1t1g1u1c1d1d1a3g1q1e1s3e1i3d1e3e141f1g1g1s1f1i3c1u1d1h1f1a1e1c1g1m3c123e1f1f1e1g1w3e1u2c1u1e1u2e1r1e1d2e1u2e152c1t2e1f2e1z2g1x2c1u3d1s2e1r3g1t2e1u2c1v2c1t2e1w2e1f3e1s2c1s1c1f2e1r2e1t2e1w2c1h2c1t2g1s2e1f3f103d1v3c172e10141k143e141e1k3g1g2e1f3d162e1g3f1a1g1g1d1q1e1l1e103g1c1e1r3e142c1w2g1p2e1s2e1z2c1u2c1i2e1s3e1t2e1u2e1w2c1v2e1r2e1u2g1g2c1t2c1z2e1s2f1y2e1u2c182c1u2g1v2e1u2g1b2c1s1d182e1q2e1z2e1s1e1g2c1w1e1s2e1t2e1k2c1u2c182e1q2g1p2e1s1d192c1w2g1k2e1u1g1x2c1s2e102e1q3f102e1s2c1w2c1u1f1i2e1r2g1v2c1t3e1i2e1q1f192e1u3e182c1u3f172e1t3f162c1s3d192e1s3f1c2e1s2d172c1w3g1e2e1s3f192c1u3d1f2e1q3f182e1u3e1e2c1u3f152e1s3f172c1s2d192e1s3e1a2e1s3d182c1u3g182e1s3f182c1s3d1c2e1q1f172e1t3d1b2c1u3f172e1s3f152c1s2d192e1s3g1w2e1s1d172c1u3f1c2e1s3f172c1s3c112e1q2e1w2e1k1c123d1q1g1i1f143f121e141e1u2g1d3f143f103e1i1d1f3e1b1f161g1f1d1b1d1s3f1d3g1g3f1g1c1d1c1e1e1d1g1p3e1f1c183d151g1f2e1b1f1k1d1f1c1i2e1q1g1j3g1d1c1j3c1e2f193f1j1f181c122c1b2f191f1b1f1b2d1b3c1a1e1b3f183f153c1i1d1u3f1d1g1c3f1f1c1f3c1d1e171f1r1f1s1e123c1w1g123f1c3f171e1h1d1u2g1h2g1p1e1a3e181d1r3g1b1e1h3e1f1c1g2c1e1g1f2e1i1g1f3d1f2c1u2e1f2e1s1e102c1s2e1j2e1q1g1i2e1s2c1s2c1v1g1i2e1s3e1y2c1u1c1j2e1q2g1j2e1u2c1h2c112e1k2e1s2e1j2c1s2e172e1q2g1r2e1u1e1k2c1y3f1x3e1z2e1u2c191e1t2f1c3g1c1e1i3c1r1e1j1f1i1e1d3e1g1d1i1d1g2e1f1g1b2e152c1w1c1l2e1r2e152e1s1c1q2c1s3g1d2e1u2e1e2c1u3e1g2e1s1f1x2e1t2e1l2c1u2g1r2e1u3g1z2c1u2c1c2e1s1e1x2e1u2c1j2c1s1e1s2e1s2e1w2c1v2c102e1s2e1z2e1t2d1w2c1s1e132e1t2g1y2c1w2c152e1r3g1u2e1u1c1m2c1u1e1x2e1u1e1x2c1u2d1w2e1r2e1t2e1s2d192c1t3e1x2e1s3f182c1u3c1e2e1q3f192e1u3d1f2c1s3f162e1s3f1d2c1u2d172e1r3f1z2e1s3d192c1s3e1i2e1s3f172c1u3d162e1q1f192e1s3d172c1s3f162e1s3f1v2c1u2d192e1q3g1g2e1s2d1b2c1s3f1c2e1s1f172c1u3c1q2e1q3f192e1u3d1v2c1s3f162e1u3g1y2c1u3d172e1q3f192e1s3d192c1s2e1s2e1s2g1f1c143e193f1o1e1p3f1r3b1f3d1f3e192e1p3e1y2d1m3e1f1e1d1g1p3e1d1c1a3d131g1f2e1b2f1k1d1e3c1g2e1q1g1c3g1f1c1l3c1d2f193g1j3f183c142c191f1d1g1g3f1g2c1e3d1s1f1i3e1o1e1i1d1j3d1c2f1i3g1k1g1k3d1m3d1f3f1d3g1j1g1h3d163c1f2g1d3f1s3e1d1c1e1c1i2f101g141g1f1d1d1d1h3d1q2f1s2f1f3c1f2d141f1j1g1a1g1i3c1l1c1f2g1d3e1x1e122c1b3d1s2f193f1w1g1s1e1h3c142e1r2g1f2e1u2e1y2c1s2f142e1t3g1z2c1v1c102e1p1e172e1t2c1m2c1u2f1d2e1u1g1h2c1v1e172e1s2g182e1u1e1v2c1s3e1d2e1s2g172c1u2d1t2e143e1z3e1r3c141d2f1s1q2t1e1l2v1j2d1r161', '25f2f4c87c8ddb537488ef298ed034d8'));
    var v = {
        log: 0,
        logout: 0,
        screencolor: "#000000",
        border: 0,
        bordersize: 1,
        bordercolor: "#000000",
        bgcolor: "#ffffff",
        rounding: 0,
        screenclick: 1,
        doubleclick: 1,
        player: 0,
        stopotherplayers: 1,
        iframe: 0,
        toolbar: {
            customimage: 0,
            color: "000000",
            a: "0.4",
            h: 34,
            stretchonfullscreen: 1,
            hide: 1,
            hidewithoutmoving: 1,
            hidejustfull: 0,
            hidetimeout: 3,
            hideleavetimeout: 0,
            leftandrightpadding: 3,
            animation: "none",
            position: "bottom",
            margin: "0 0 0 0",
            rounding: 0,
            clickarea: 0,
            image: ''
        },
        hotkey: {
            on: 1,
            f: 1,
            r: 1,
            m: 1,
            seek: 5,
            leftright: "seek",
            space: 1,
            updown: "volume",
            seeksides: 0,
            nums: 1,
            volumewheelfull: 1,
            wheelstep: 0.2
        },
        playlist: {
            bgcolor: "000000",
            bgcolorover: "333333",
            bga: 0.9,
            bgaover: -1,
            position: "left",
            margin: "0 0 0 0",
            padding: "7 15 7 15",
            color: "ffffff",
            font: "arial, helvetica, sans-serif",
            fontsize: 12,
            valuefontsize: 10,
            letterspacing: 0,
            valuecolor: "ffdd1f",
            borderbottom: 1,
            bordercolor: "444444",
            a: 1,
            aover: -1,
            posters: 0,
            posterheight: 100,
            posterwidth: 177,
            postertitleonhover: 1,
            historytitlea: 1,
            historycolor: "999999",
            historybgcolor: "000000",
            historybga: -1,
            historybgaover: -1,
            historytitlestrike: 0,
            activeiconsize: 3,
            headfontsize: 16,
            headbordercolor: "888888",
            rounding: 0,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            scrollarrowbg: 0,
            scrollarrowbgcolor: "000000",
            scrollarrowgradient: 1,
            scrollarrowbgover: 0,
            scrollarrowbgovercolor: "333333",
            limitwidth: 0,
            limitmaxwidth: 200,
            autoplaylist: 0,
            always: 0,
            alwaysjustpause: 0,
            alwaysnotfullscreen: 0,
            autohide: 1,
            floatleft: 0,
            floatheight: 50,
            floatmarginright: 0,
            floatlimitwidth: 1,
            floatwidth: 170,
            marginbg: 0,
            marginbgcolor: "333333",
            marginbgpadding: "0 0 0 0",
            hmaxk: 30,
            bordercolor: "666666"
        },
        settings: {
            bgcolor: "000000",
            bgcolorover: "222222",
            bga: 0.7,
            bgaover: -1,
            font: "arial, helvetica, sans-serif",
            position: "bottom-right",
            margin: "0 0 0 0",
            padding: "7 10 7 15",
            color: "ffffff",
            fontsize: 12,
            headfontsize: 16,
            valuefontsize: 10,
            letterspacing: 0,
            titlecolor: "ffffff",
            valuecolor: "ffdd1f",
            a: 1,
            scale: 5,
            aover: -1,
            activeicon: 1,
            activeiconsize: 3,
            scrollarrows: 1,
            scrollarrowsize: 1,
            scrollarrowcolor: "ffffff",
            limitwidth: 0,
            limitmaxwidth: 200,
            rounding: 0,
            settings1: 1,
            settings1action: "quality",
            settings2: 1,
            settings2action: "audiotrack",
            settings3: 1,
            settings3action: "subtitle",
            settings4: 0,
            settings4action: "download",
            settings5: 0,
            settings5action: "speed",
            hmaxk: 30,
            bordercolor: "666666"
        },
        logo: {
            position: "bottom-right",
            margin: "0 10 50 0"
        },
        volume: 0.8,
        volumestore: 1,
        mutestore: 1,
        loop: 0,
        shuffle: 0,
        finishrewind: 1,
        mute: 0,
        preload: 0,
        preloadhls: 0,
        preloaddash: 0,
        autoplay: 0,
        autoplaymute: 1,
        showtitleplaylist: 0,
        addtitleplaylistbr: 0,
        addtitleplaylist: 0,
        file_separator: ',',
        file2_separator: ';',
        file3_separator: '//',
        poster_scale: 'fill',
        poster_a: 1,
        poster_aover: -1,
        poster_float: 0,
        poster_floatmargin: '20 0 0 20',
        poster_floatposition: 'top-left',
        poster_floatwidth: 100,
        poster_floatheight: 100,
        poster_floatbgcolor: -1,
        posteronpause: 0,
        alerts: 1,
        alertsbgcolor: "ff0000",
        alertscolor: "ffffff",
        alertspaddingv: 5,
        alertspaddingh: 10,
        alertsbga: 1,
        alertsfontsize: 10,
        rightclick: 0,
        youtubeposter: 1,
        youtubelayer: 1,
        ytautoquality: 1,
        posterhide: 1,
        aspect: '16x9',
        landfullmobile: 0,
        hlschangequality: 'next',
        hlsautoquality: 1,
        hlsdebug: 0,
        hlscookies: 0,
        hlslowquality: 0,
        hlsquality: 1,
        hlsaudio: 1,
        livewakeuptime: 5,
        reload: 0,
        reloadlive: 1,
        livewakeup: 0,
        reloadtimeout: 5,
        dashdebug: 0,
        dashcookies: 0,
        dashlowquality: 0,
        dashquality: 1,
        dashaudio: 1,
        nameofhlsquality: 0,
        nameofyoutubequality: 0,
        nameofdashquality: 0,
        qualitystore: 1,
        eventstracker: 0,
        events: "PlayerjsEvents",
        errortimeout: 5000,
        container_h_procent: '100%',
        ga: 0,
        ga_event: {
            init: 1,
            error: 0,
            full: 0,
            end: 0,
            play: 1,
            play25: 0,
            play50: 0,
            play75: 0,
            vast_skip: 0,
            vast_click: 0,
            vast_impression: 0
        },
        yamtr_event: {
            init: 1,
            error: 0,
            full: 0,
            end: 0,
            play: 1,
            play25: 0,
            play50: 0,
            play75: 0
        },
        ga_proc: 100,
        playsinlineonmobile: 1,
        subtitle_start: 1,
        sub_size: 14,
        sub_sizeproc: '100%',
        sub_big_fullscreen: 1,
        sub_size_fullscreen: 20,
        sub_bg: 1,
        sub_bga: 0.7,
        sub_bgo: 2,
        sub_bgpadding: 3,
        sub_bottom: 10,
        sub_color: "ffffff",
        sub_color2: "ffeeab",
        sub_bgcolor: "000000",
        sub_shadow: 0,
        sub_weight: 400,
        sub_designstore: 1,
        sub_shift: 0,
        sub_store: 1,
        sub_off: 1,
        sharetitle: 1,
        sharetop: 0.3,
        shareiconscale: 3,
        shareiconscaleover: 4,
        shareiconmargin: 5,
        embedsize: 0,
        embedwidth: 560,
        embedheight: 315,
        fullonplay: 0,
        fullonplaymobile: 1,
        fullblack: 1,
        nativefullios: 1,
        hidestartbutios: 1,
        thumbs: 0,
        thumb_width: 160,
        thumb_height: 90,
        thumb_border: 0,
        thumb_borderwidth: 1,
        thumb_bordercolor: "333333",
        thumb_radius: 0,
        thumb_shadow: 1,
        enc2: '2',
        enc3: '3',
        vast_timeout: 10,
        vast_pauseonclick: 1,
        vast_closeonclick: 1,
        vast_volume: -1,
        vast_title: 1,
        vast_preroll_limit: 1,
        vast_preroll_andlimit: -1,
        vast_prerolltimebreak: 0,
        vast_prerolltbimp: 1,
        vast_preroll_counter: 0,
        vast_pauseroll_limit: 1,
        vast_pauserolltimebreak: 0,
        vast_pauserolltbimp: 1,
        vast_pauseroll_counter: 0,
        vast_postroll_limit: 1,
        vast_postrolltimebreak: 0,
        vast_postrolltbimp: 1,
        vast_postroll_counter: 0,
        vast_playroll_limit: 1,
        vast_playroll_counter: 0,
        vast_midroll_limit: 1,
        vast_midroll_counter: 0,
        vast_midrolltimebreak: 0,
        vast_midrolltbimp: 1,
        vast_introtimebreak: 0,
        vast_introtbimp: 1,
        vast_linktxtbgcolor: "#ffffff",
        vast_linktxtcolor: "#000000",
        vast_skipbgcolor: "#000000",
        vast_skipcolor: "#ffffff",
        vast_titlebgcolor: "#000000",
        vast_titlecolor: "#ffffff",
        vast_xbgcolor: "#000000",
        vast_xcolor: "#ffffff",
        vast_progressbgcolor: "#000000",
        vast_progresscolor: "#ffffff",
        vast_volumebgcolor: "#000000",
        vast_volumecolor: "#ffffff",
        vast_linktxtonmobile: 1,
        vast_unmutehover: 0,
        vast_unmutebutonce: 1,
        vast_default_volume: 0.5,
        vast_unmutebutbgcolor: "#ffffff",
        vast_unmutebutcolor: "#000000",
        vast_openclick: 1,
        vast_preroll_vmap: 1,
        vast_pauseroll_vmap: 1,
        vast_postroll_vmap: 1,
        vast_midroll_vmap: 1,
        vpaid_timeout: 10,
        vpaid_timeout2: -1,
        vast_resound: 1,
        vpaid_slotinframe: 1,
        eventstrackervast: 0,
        pauserollonplay: 0,
        partnerprerollor: "or",
        partnerpauserollor: "or",
        partnerpostrollor: "or",
        partnermidrollor: "or",
        midrollpoint: "50%",
        introskiptime: -1,
        introclickable: 0,
        introclosetime: -1,
        introtitle: 0,
        introtxt: 0,
        rc_version: 1,
        rc_anyway: 0,
        heartbeatinterval: 30,
        default_channel: 2,
        tagsinterval: 10,
        playedquartile: 0,
        minivis: 30,
        lsfullstart: 1,
        lsfullplay: 1,
        captions: 0,
        pip: {
            on: 0,
            bgcolor: "000000",
            border: 0,
            shadow: 2,
            bordercolor: "000000",
            position: "left",
            margin: "20 0 0 20",
            width: 150,
            hide: 0
        }
    };
    v.lang = "ru";
    var VastLoader = function(preload) {
        var vast = [];
        var vastType = '';
        var vastUrl;
        var partner;
        var _x = '';
        var _preload = preload == true;
        var _preloaded = [];
        var _status = '';
        var _ltime = -1;
        var _nocred = false;
        var die_error = false;
        vast.events = [];
        vast.wrapper0 = ' -> ';
        o.vast_adid = '';
        var no = ['desktop', 'mobile', 'mobiletv', 'tv', 'lg'];
        eval(function(w, i, s, e) {
            var lIll = 0;
            var ll1I = 0;
            var Il1l = 0;
            var ll1l = [];
            var l1lI = [];
            while (true) {
                if (lIll < 5) l1lI.push(w.charAt(lIll));
                else if (lIll < w.length) ll1l.push(w.charAt(lIll));
                lIll++;
                if (ll1I < 5) l1lI.push(i.charAt(ll1I));
                else if (ll1I < i.length) ll1l.push(i.charAt(ll1I));
                ll1I++;
                if (Il1l < 5) l1lI.push(s.charAt(Il1l));
                else if (Il1l < s.length) ll1l.push(s.charAt(Il1l));
                Il1l++;
                if (w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break
            }
            var lI1l = ll1l.join('');
            var I1lI = l1lI.join('');
            ll1I = 0;
            var l1ll = [];
            for (lIll = 0; lIll < ll1l.length; lIll += 2) {
                var ll11 = -1;
                if (I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
                l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
                ll1I++;
                if (ll1I >= l1lI.length) ll1I = 0
            }
            return l1ll.join('')
        }('b1d5f1s2z2a29313716263q0z2z1m27312o193v2e1d3o0z1z2m3q0z202k3x3u35242t223p1z2038251s25332z16212v232z1c3u271z1z3a251q2533211620261w1112141z133x2b2o173z261u3s2t3z2p113u243c153x292o1721261z101m253e1g2c2938182v3s10111o260w10113b213v3z2b38162v3s12111m2c162v3b213v29233x39213v2b233v1z1z2u291z203s291u2s271p2q1i25203o2e1z2112193x111z202235162z2o193x111i1t33211d202n3c113w2m2z1o1g272z1o1m25111q253r193124143c1e3e29361a3y2b321v3u2u3q3s37302b3r35203719162z141z121o232c1o11113u243c1d37383v1z1z23121g1g1v181d1k1e1l1f1h3c181e1t3c1c1e1d3f123e1p3g1k1c1w1e141f152c1t2e102c1u2c112e1r2d1u2e1s1c152c1v3g1w2c1u2e152c1t3e1w2e1s1c1k2e1u1c1z2c1w1e1v2c1s2f1w2c1t2c1v2e1q2d172e1t2c1u2c1u2e1c2c1u2g1t2c1u2d1t2e1q3e1x2e1s2e142c1w2g1w2c1t2g1z2c1s1c1u2e1q2e1v2e1t2c1v2c1v3e1t2c1s3f1w2c1u3c1s2e1q3e1h2e1s2d192c1u3f1y2c1s2f182c1s3d1j2e1q3d172e1s3e102c1u3f152c1u3f1u2c1s3d1b2e1q3d1t2e1s2d172c1w3f1t2c1s3f192c1t3c1e2e1q3d182e1u3d1y2c1u3f172c1u3f182c1s1d1b2e1s3d1b2e1s3d172c1u3g1p2c1s2f192c1s3e1e2e1q3d192e1s3e1w2c1u1f152c1s3g192c1s3d192e1q3d1b2e1s2c1u2c1u1e1d1c1b2g1e3e1c1c1k1f1k3e1r3d1f3d1c3d1k2f103d1o2f1f2e1p1c1d3e1d3e1c1g1m1e1c1e1s3g1d3c1c1f1f3c1d1d181g1q1d1b1g1c3d1c3e1i3f1e2c1c1e1d1c1c1e1r3e1d1c183f131e1h2c1d2f1i3e1d1e1g1e1j3e1l1g1h3e141g1e3e1p1e1r1g1g3e1b2e1f1e1h3b1f2f1a1c1s2g1f1d1f3e141e1d3d1c1e1m3e1o3c1f3g161e1d1e121c1b1d1b1f1d1d1d1f1j1e1c2c1q2e1d1c1c1e1d3d1c1c1a1d1d1e1h1e1r2c1u2d1a2e1s2d102e1u2e1v2c1w2g1j2c1u2e1y2c1u1c1h2e1q1c1t2e1s1e142c1v1e1x2c1u1e1u2c1u2e1q2e1r2e1v2e1s1c1r2c1w3g1k2c1s2g152c1u1d1v2e1r2e152e1s2d1z2c1v2e162c1s2f1t2c1s1c1x2e1s1c1z2e1t3d1o2c1v1e1w2c1s2f1w2c1s3e1s2e1s2d152e1u3c1w2c1u3e1t2c1u2g1t2c1s2e1x2e1q1c1w2e1u3e1z2c1v2g1f2c1s2e1u2c1u2e1x2e1q3e1j2e1t1e1v2c1w3e1t2c1u1e1t2c1t3e1c2e1s2e1t2e1t2c152c1w1e1d2c1u2e1j2c1t1d1w2e1d2d1t2g1q2c1u2e182e1s3e1u2e1u2c1y2c1w3e1q2c1s2e1u2c1u2e1x2e1s2c102e1t1e1s2c1u1f1w2c1s2e1m2c1t2e1h2e1s1e172e1s1c152c1u3e1r2c1t1e1j2c1u3c1f2e1q2c1q2e1u2e1k2c1w2f1o2c1s1e1u2c1u3d1u2e1s1c172e1s1e1v2c1w2f1o2c1s2e1d2c1s2e1f2e1q2e1u2e1t1c1t2c1w2e1y2c1u2g1j2c1s2c1s2e1r2c1a2e1t2e102c1t2f1y2c1u2g1y2c1t1d1x2e1s3c1w2e1s3c1b2c1u3f1c2c1t2e1f2c1r1c1s2e1q3c1p2e1r2c172c1v2f1u2c1s2g102c1t3d1h3f1s2c1u3e1f2c1u2c1j2e1r2c1o2e1t1c1t2c1w2g1w2c1u1e102c1u1c1x2e1q2c1w2e1t1c1v2c1w3f1d2c1t2g1u2c1r1c1v2e1s2e1h2e1t3c1i2c1v2e1t2c1u1e1s2c1t1c1x2e1s1c172e1s1e1c2c1w2e1q2c1s2f1t2c1t2d1w2e1s2d192e1s1c1z2c1w2e1f2c1t2g1t2c1u1c1g2e1s2c152e1u2c1f2c1v1g1h2c1t2g1x2c1u3c1m2e1p2c1o2e1s2c1p2c1v3g1t2c1t2e1f2c1t2c1t2e1r3c1o2e1u2e102c1u2e1y2c1t3g1s2c1t2c182e1s2e182e1u1c1t2c1u2f1d2c1t2e1u2c1w3d113e1x2c1u2e192i2t143g1h2d183e1t3e183c1u3g1c1e1i3c1l1e1j1c1h2e1a1b1g3d162e1s2e1t2e1w2d1r2c1u3g1v2c1s2g162c1u2e102e1r2e1z2e1u2c1s2c1u2g1t2c1t2e1x2c1t2c1x2e1q3d1w2e1w3c1q2c1u3g1f2c1s2e112c1s2c1g2e1q2c1i2e1u3c1z2c1w2e1t2c1u1f1t2c1t1c1i2e1q1d1x2e1v2c1p2c1w1g1t2c1t2e172c1u2c102e1q3c1e2e1w2c1r2c1u1f142c1u3e1i2c1s3d1b2e1s3e162e1u3d172c1u3f1c2c1s2f1b2c1s3d1x2e1q3d192e1u3c182c1u3f172c1u3g1d2c1s3d1a2e1q3d182e1u3d192c1w3f1t2c1s3f1a2c1s3c1e2e1q3d192e1v3e1d2c1u3f172c1s3f1m2c1s1d192e1s3e1c2e1u1d192c1w3e1o2c1s1f192c1t3c1k2e1q1d172e1u3d1b2c1u3f152c1s2e112c1s1c1m1e161d1k1g1l1e1c3c1k1f1k3e1r3d1e3e1c1d1d3g1f3e131f1q1c1i1d1j1f1e1c181e1e2d161e1e1f1h3c1d1e1i3d141e1j3g171d1c3f1u1e1p3c1e1e1b3d1s2f1r1c1b3c1e3f1a1c1p1g1e2e1j3e1f1e1q1d1p1g1r1e1p1e1r1g1d1e1k1f1a1c181c162f1b3e1d1e1r3c1c1d1i1f122e1c2e1i1c1d3e1e3f1d3c1i1e141c161e1m1f1f2c1s2g1s3d1f3e1a3g1i1e151f1m1c1c1c1f3f1q3c1c3f1u2e1o3c1f1e1u2d1r2e1v3c1u2c1w3g1f2c1u1e1t2c1s2c1q2e1s2e1o2e1w2c172c1u3g1b2c1s2g102c1u2c122e1s2c172e1t2c152c1u2e1h2c1s2e182c1s2e1h2e1r2c1y2e1v3c1f2c1u1e1s2c1t3e1z2c1t2c1j2e1r3c172e1u2c1j2c1w3g1q2c1s3g1m2c1s2e1h2e1r3c1x2e1u2d152c1u3e1s2c1s2f1y2c1u2c1l2e1q2c1h2e1v2c152c1v2e1u2c1u2g1w2c1s1c1u2e1q2c102e1w1c1q2c1u1f1r2c1u2g102c1t2e1v2e1r2c152e1u2d1u2c1v1e1s2c1r2e1v2c1u3c1j2e1s2e1z2e1w3e1i2c1h3f1r1c1u2e1v1c1f2c1u1f142c1t2e122c1u2c102e1s3c102e1u2c1f2c1w2g1u2c1s2g172c1s3c122e1r2c1y2e1u1e142c1w1e1w2c1s2e122c1t2e1a2e1q2c1a2e1w2e1u2c1u2e1h2c1s2g122c1s3c1l2e1s3e1t2e1w3d152c1w2g172c1t1g172c1u3e1l2e1q2e1o2e1u1c1u2c1u1f1o2c1u2f1h2c1t2c1z2e1r1c102e1w2d1q2c1v2e1u2c1t1g1x2c1r3c1z2e1q1d102e1u3c102c1v3f1r2c1t2e1j2c1u3c1v2e1q2e1z2e1u2c1x2c1v2g1u2c1u3e122c1u3c1w2e1r2e1y2e1u3c173e1k2e1q2c1j2e1v2c102c1w2e1f2c1u3e1q2c1t1c1v2e1q2d1t2e1u2c1y2c1v2g182c1s2f1z2c1u3c1k2e1s2e102e1w3c1v2c1w2e1x2c1t2e192c1s2e1h2e1q2c1t2e1w2c152c1u3e132c1s1e1h2c1s2c1r2e1q3c1v2e1v3d152c1v3e152c1t2e1h2c1s3e102e1s2e1w2e1w2c1f2c1w2g1t2c1u3e1h2c1s1d1h2e1q1e1x2e1u2c1d2c1u2g1j2c1u2g1z2c1t1d1s2e1q2e102e1u2c1x2c1u2e1x2c1t1e1f2c1s2d1l2e1s2e1q2e1u2c1p2c1u1g132c1u2g172c1t3c1f2e1r2d1d1e1v3c172c1b3f151c122t2f1e1e1g3g1u1e1j1d1d1e1h1d191f1f1d1d1c1l1e1s1e1o3e1s3d1e2c1u2e1g2c1s3e1z2c1u1c1x2e1s1d1r2e1t1c1g2c1u1f1v2c1t2e1m2c1u1e1x2e1r2c152e1u2c1y2c1u3e1c2c1u2e1r2c1s1d182e1q2c1u2e1s2e1k2c1v3e1x2c1u2g1y2c1t2c102e1q3d1k2e1s2c182c1u3e1p2c1u2e1q2c1t1c1i2e1s2c142e1u2c1z2c1u2e192c1u2g1e2c1t3e1l2e1q2d182e1s3c1c2c1u1f172c1s3g1e2c1s3d1a2e1r3c192e1s3d172c1u3e1f2c1s2f182c1u3c1f2e1q1d192e1s3c1h2c1u3f162c1u3f192c1s3d1b2e1q3c1z2e1s2d192c1u3f1c2c1s1f192c1s3e1e2e1q3d172e1t3e1b2c1u2f162c1s3f182c1s2d192e1r3c1j2e1s2d182c1u3f172c1s3f172c1s3d1v2e1q2c1u2e1f1c1f3b163g1d2d182g1f2e1c1c1k1f1k3e1y2g1f2c1c1e1e1f1f3c1b2f1k1d183d1f3e181e1g3g141d1h3e141f1u2d1j3f181c121b1e1f1c3e1p1e1b3c1d3e1l3f113e1o1e1i1d1h3d1i2e161c1c2f161e1s1d1l3e161c181e181c181c1u1g1h3c1a1e1a1e123b1e1f1a1c1i2f1f3d1f3c141f123e1d3e1f1d1e3e1l1g1d2c192f141d1c1c1e3e1d1d1i3f1a1e1g1d1e1g1i3e1h2e1s3d1j3e172f1c3e142f1e2d1c1c1h3e132c1s2f1m2c1s1c1k2e1s2c1q2e1u2e1r2c1u2e1j2c1s2g192c1t1e122e1s2d1s2e1u2c1t2c1u2e132c1u2g1l2c1u3c1s2e1s2c1i2e1s1e1t2c1w2f1t2c1u3g1v2c1s2d1y2e1r2c1u2e1s2d1i2c1v2e1u2c1s2e1w2c1u1c1s2e1s2e1e2e1s2c1y2c1v2e152c1s3g1v2c1s2d1k2e1r3c1t2e1t2c102c1w2e1w2c1u2e152c1r2c1h2e1s1c1x2e1s2e1s2c1w3e1q2c1u3e172c1u3e1q2e1s1c1u2e1t1c1x2c1u2e1b2c1u3f1u2c1u2e1l2e1s2d1x2e1s2e1q2c1u1g132c1u1e1s2c1s3c1v2g142c1t2f102c1u3c1t2e1r2c1x2e1t2c102c1w2e1w2c1t2e1l2c1u1c1j2e1s1c1u2e1s2c1g2c1v2g1g2c1u1g1f2c1s2d1b2e1s2d1i2e1s1e1o2c1u2g1r2c1u1g1q2c1s3e1m2e1q1e1v2e1s2e1k2c1t2e1w2c1s3e1u2c1u1d122e1r2c182e1s1e1k2c1w1g1s2c1u2g1q2c1s3c1l2e1q3c1d2e1t2c152c1v2g1r2c1u3g1u2c1s2d122e1r1c1t2e1s2c1s2c1v3e1c2c1u3e1e2c1u3c1x2e1s2e1t2e1t2d162c1v2g182c1t2g1e2c1s2e1r2e1s2d1x2e1s2c1a2c1v1e1s2c1s1e182c142c1w3g1d2c1s2g1m2c1u2e122e1r2c1h2e1u3c1o2c1v3e1s2c1t2e1j2c1u2c1w2e1q3c1h2e1s2e1h2c1v2e1k2c1s3e1k2c1u2e1z2e1r2e1x2e1u1c172c1v3e1q2c1u2e1t2c1u2d1k2e1q2e1p2e1s2c1q2c1u3e1s2c1s3e1u2c1t2d102e1s2c1x2e1u1e1o2c1v1e1x2c1u2g1v2c1s1d112e1s2e1t2e1s3e1w2c1u1e1s2c1u2g1y2c1t1e1k2e1r1e1p2e1u3c1o2c1u2g1c2c1t2g1t2c1s2e1z2e1q2c1j2e1s3c1s2c1w2e1s2c1t2f1f2c1s1d1k2e1q1c1z2e1t2e1h2c1v3e1b1c1v2e1w2c103c1h341d2d1q1s2t1e1j2t1l2d1r141', 'b6e58m3q1t3s221a291s3b3v2z1d3o01101m272z3q193v3e1i1b3v1z1k1a21173s3y1z31141z153v3b2o1732241u3s2t322n113u243e133x392o1920361z2z1o233e1g2c2b361y2v3s11101o260w11102b213v3129381w2v3u1z121m2c182t212n1z3238251q25352c162z2v252c182s27111z3a231q27333e142z381w1c2s271y2s29162s291s3u271o3e1z3w261z113u281z3u263s3o3o0z112z3b3w121o252e2o1z1z21141z101o253e2o2m37203q1z2z3129233v2038143q0z1c1e2t2e292o142s11101d311o112z3825353w253u273r153621111z3a371z31141j1z1c1o2c182t2z2r2c2b213v312o1i27313e293y121m142g1e1c2d1e1c1j1c102g1k1e1c2e1m1c1c3e161g151g1k1c1k1d1h2c1q1f1r2e1t2e1t2c1u2c1u2e1s2g1e2c1u1c112c1q3e1r2e1u2c142c1u2e1k2e1u1e1k2c1u3c1j2c1s3f1z2e1s3c1z2c1v1d1s2e1s1f1u2c1s2c1w2c1r3g1v2e1u2c1v2c1w2e172e1u1f1y2c1t2e1s2c1q2f1y2e1t2e1l2c1v1c1s2e1t2e1s2c1s2c102c1q3e192e1u2e102c1u3c152e1t3g1t2c1s2d192c1q3f1x2e1s3d172c1u3d1c2e1s2f192c1s3d1c2c1q1f192e1t3e162c1u3d162e1s3f1v2c1s1d192c1r3g1c2e1s3d182c1u3d122e1s3f192c1u3d1c2c1q3f182e1s3d1h2c1u1d172e1s3f1d2c1s3d192c1q3f1t2e1s2d192c1u3d142e1s3f172c1t3c1k2c1q2f172e1s3d192c1u3d152e1u2e1u2c1s2c1g1c1d1e1p1g1c1c1k2d1f3c192e141e121d143d1u3d1a1g1u1f1w2d1j2d1a1e101d1c3g1e3d1m1c1d3c1d3f1j3g131d1l1c1k1e1f1f1g2e181c1f1d181e1q1g1j3e1c1c1g3e161d1f3g193g1c3d1s1e1r3c1d1e1c3f1c3d1f3d1e3d1d3f1c1f1b2d1e3d1g3d1c2g1s3e1f1c141e1u2e1d3g1r3d1c3d1f3c1e1c161e1c2g1b2c1c1e1d3d1e2e1c2e1c1e1k1c1f3c1e1f1g2e1j1d1t2c1u1e1h3e1d3g181c1d3e1k1e1d1e1g2e1u1e1v2c1u2c1s2e1u1e1t2c1u2e1t2c1q2e1o2e1u2e1l2c1u2c1b2e1s1f1k2c1u2e1k2c1q3e1h2e1s2d1r2c1w1c1q2e1t2g1g2c1u2e102c1q3e1z2e1t1e1k2c1v2c1o2e1s1f1s2c1u1c1w2c1q2g1u2e1s3e1k2c1w1d1g2e1s1g152c1s3e1h2c1r2f1u2e1s1c172c1u3c1o2e1t2f152c1u3e122c1q3g1w2e1s2e1t2c1w1c1i2e1u2g102c1u1c1w2c1r3g1r2e1s3c1w2c1u2e162e1s2g1j2c1s2c1e2c1q2e1e2e1t2c102c1v3c1r2e1t2e1q2c1s1d1f2c1s2g1v2e1s2c1h2c1w2d1q2e1t2e1s2c1t2c1u2e152e1u1e1x2c1t2c122c1s2e1y2e1t3e1x2c1t1e1q2e1t1g1i2c1t2e1i2c1s2f1w2e1s3c1v2c1u2e1h2e1u1g1i2c1u2c102c1s1g1d2e1s1e102c1u1e1t2e1t3g1y2c1s2e1v2c1r3g1j2e1s2c102c1v1c1g2e1u1e1j2c1s2e1y2c1r2e1o2e1t1c1v2c1u1e1r2e1t1f1j2c1u2e1z2c1q2f1u2e1t2d1z2c1u2c1s2e1u3e1u2c1t2e1z2c1s2e1v2e1t1d1f2c1v2c172e1u1e152c1u1c1e2c1q1e1u2e1s3e1j2c1w3e132e1u2e1v2c1t3c1u2c1q2g1x2e1u1e152c1b2c1r3e172e1u3e1x2c1w2e1y2e1t2e1h2c1u2c1q2c1r1f1d2e1u2d1k2c1w3c1s2e1t2g1f2c1u1e122c1q3g1v2e1u2e1j2c1v2e1y2e1t2g172c1s1e1x2c1r3e1i2e1u2e1i2c1w3e1g2e1u2e1i2c1t2e1x2c1r2e1q2e1u2e1v2c1v1c1q2e1s2g1h2c1u2e1x2c1s2g1v2e1u3e1i2c1u1d1v2e1s3e1o2c1t1c1g2c1r3e1t2e1u1c182c1v2e1q2e1u2e1w2c1t2e102c1q3e1q2e1t1c1u2c1v2c132e1s2e1x2c1s2c1x2c1s2e1a2e1u3c1v2c1w2c1v2e1u1e1h2c1t2c1u2c1s3e1v2e1u1c192d172c1r3e1z141r2s3g193f1q1c191c151e123e141g1i3d171e1g2e1k1e1x3g1i3e152c1v3e1v2e1u2e1v2c1u2e1b2c1u1f1y2e1t2e1q2c1u2d1y2e1t2g1o2c1t1c1w2c1t2e1s2e1s2c1y2c1u3c192e1u2g102c1s3c192c1t3g1z2e1s2c1w2c1w1c1o2e1t2e152c1s1c1q2c1s3g1f2e1u2c1e2c1u3e1g2e1u1f1x2c1t2e1l2c1u3g1t2e1u3e1z2c1u2c1c2e1u1e1x2c1u2c1j2c1s1f182e1u3d1a2c1u3d192e1s3f1a2c1s3d1b2c1u3f1o2e1s3d192c1v3c1d2e1s1f182c1u3e172c1s3f172e1t3d1d2c1u1d182e1u3g102c1s3d1a2c1s3f192e1s3d182c1u3c172e1s3f172c1s3c1f2c1s3f172e1s3d1l2c1u3d192e1u3g1c2c1s3d192c1s3f1j2e1s2d182c1w3d1b2e1s3f172c1s3d1d2c1s3e1z2e1s2c1k1c1j3c1c2f1e1e1h3b1f3d1e3c1b2e143e103b1d3e1a1d191g1c1g1g3d1g1c1e3d1c2g1k3e1o1c1i1d1j1d1c1e1h3e1b2d1k1d1a3d1c3e1a1g1g3d141e1j1c121g1w2f1j1d181c141b1d1g1e3g1p1c1b3c1e3d1j3g1e3f1e3e1e3d1g3c1c3f1c1g1k3d1k3d1y1d142e1e1e1b1c1d1e1j1d1p3e1y3g1c2d132c1c3d142f1c3e1g1c1i3c1e1c1s2g1p1e1c2e1b3d163e1d2g1i1g1k1d1h1c141d141e1a1g1r1e1b1c1g1c1t2e1u1g172c1t3c1a2c1u3g1j2e1u2e1q2c1w2e1r2e1s2e1u2c1u2c102c1t3f1q2e1t2d1x2c1u3e1x2e1u3g1o2c1s2c1t2c1t2g1s2e1t1c1q2c1w2d1t2e1s1g1c2c1s2c1m2c1s3g152e1s2d1t2c1u2e152e1t1f1s2c1s3c112c1t2e192e1s1c1v2c1w3d152e1t2e1r2c1s2c192c1s3g1s2e1t1c1x2c1w1d1p2e1u1f1o2c1u2c1x2c1s2e1p2e1s2c1d2c1w2c1x2e1s2g1b2c1s2e1d2c1t1e1t2e1u2d1u2c1v2c1v2e1u2g1o2c1t2c1d2c1t2e1t2e1s3c102c1w1e1v2e1u2e172c1u3c172c1f2e1u3g1d2c1u1c1h2c1s3e1u2e1t2c1x2c1v2c102e1s1g1q2c1t1c1y2c1s1e1q2e1t1d182c1w3e1y2e1s2e1f2c1t2d1f2c1s1f1z2e1u2c1t2c1u2e1t2e1t1g1x2c1t1c1x2c1t1e1q2e1s1c1a2c1u1c102e1t2e192c1s2c1z2c1u2e1g2e1s1e1a2c1u2e1w2e1s2g1j2c1t1e1h2c1t3e1v2e1t1c1w2c1u3c1h2e1s3f1y2c1u2c1y2c1t3e1h2e1s2e182c1w2c1k2e1t3e1c2c1u2e122c1u2e1y2e1s2c1c2c1u2e1w2e1u1g1x2c1s2d1v2c1s2e102e1s3c172c1w2c1t2e1s1e1a1c142c1v2c1v2e1u1g1x2c1s1c1t2c1t2g102e1t2c1h2c1w3e1y2e1s3g1x2c1u2e1u2c1s1g1t2e1r1c142c1v1c1o2e1u1g102c1t1d1s2c1u1e1u2e1u1c1w2c1v2e1v2e1u1e1x2c1t1c112c1u2e1h2e1t1c1x2c1w2c152e1s1g162c1s2d172c1u1e1z2e1u1c102c1u1d1p2e1u1e1x2c1t3e1v2c1s3e102e1u2c1f2c1v2d1f2e1s2e1w2c1u1c1y2c1s2g1w2e1u1d1l2c1v2e1x2e1t2g1w2c1s2c1w2c1t2e1h2e1u2c1z2c1u2e1s2e1u2f1t2c1u2c1k2c1u3g1t2e1s2e1a2c1u2d1v2e1f2f163d1u2d112c1h192r2u2e1c3g1c1e1i3c1m1e1l1d1i1e1d3e1g1d1g1d1i2c1f1g1b2e152c1u1c1q2c1r2e152e1s1c1l2c1u3e1d2e1u1e1e2c1s3e1i2c1s2f1x2e1t2e1j2c1w2e1r2e1u3g1z2c1s2c1e2c1s1e1x2e1u2c1h2c1u1c1s2e1s2e1w2c1t2c122c1s2e1z2e1t2d1u2c1u1c132e1t2g1y2c1u2c172c1r3g1u2e1u2c1k2c1w1c1x2e1u1e1x2c1s2d1y2c1r3e1t2e1s2d172c1v3c1x2e1s3f182c1s3c1d2c1q3f192e1u3d1d2c1u3d162e1s3f1d2c1s2d192c1r3f1z2e1s1d172c1u3c1i2e1s3f172c1s3d182c1q1f192e1s3d152c1u3d162e1s3f1v2c1s2d1b2c1q3g1g2e1s2d192c1u3d1c2e1s3f172c1s3c1s2c1q1f192e1u3d1t2c1u3d162e1u3g1y2c1s3d192c1q3f192e1s3d172c1u2c1s2e1s2g1f1c123e1b3d1o1e1p3f1r3b1d3d1e3c192e1p3e1y2d1k3e1e1c1d1g1p3e1d1c183e151e1f2e1b1f1k1d1f3c1i2c1q2g1c3g1c1c1j3c1f2d191f1j3f181c122c1b1e1d1g1g3f1g2c1f3d1u1e1i1e1o1e1i1d1h3e1e2e1i3f1k1g1k3d1k3e1e3d1d1g1j3g1h3d143c1e2e1d3f1s3e1d1c1f1c1k2e101f143g1c2d1b1e1j3b1q2f1s1f1f3c1d2e161e1j1g1a1g1i3c1j1c1e2e1d1e1x3e122c193d1u2d191f1w1g1s2e1f3c192c1q1e1y2e1s2c1h2c1v1e1x2e1u1e1y2c1u1e1s2c1s3g1t2e1t2e1h2c1w3e1p2e1t3g1t2c1u2e1z2c1s1g1y2e1t2c102c1u1e1t2e1u2e1j2c1s3c1w2c1q2g102e1u2e1u2c1u1c1u2e1t3e1v2c1u1c1w2c1r3g1t2e1u3e1k2c1v2d1q2e1s2g1o2c1u3c1w2c1s2f152e1t2e1u2c1u2d152e1s2e1w2c1u3c1x2c1r3e1y2e1u2e1x2c1w2c1f2e1t2e1w2c1u2e102c1r2e102e1t2d152c1w3e1d2e1u3f1b2c1t2e1z2c1s1e1a2e1u2c1x2c1w2e1t2e1s2g1y2c1t2c1l2c1r2g1j2e1u1c192c1u2c1s1g1x2e1u2d172c1w3c1q2e1s2e1u2c1t2c1z2c1s1e1t2e1u3e1d2c1w2e1g2e1s3g1w2c1s1c1u2c1r2e1i2e1s3e1u2c1t3e1w2e1s2e1d2c1u1e1w2c1s2e1f2e1t3c102c1w2c1h2e1s3e1u2c1s2e1s2c1q3e152e1s3e1i2c1w2e1p2e1u1e1d2c1u1e1e2c1r1e1w2e1t2c182c1u2e142e1u3e1t2c1s2c1v2c1q3e182e1u2c1z2c1v2c1h2e1u2e1u2c1t2c172c1q2g102e1u1d1e2c1w2d1y2e1t2f1u2c1s2c1v2c1r2g1t2e1u3d1q2c1v2c1p2e1u2e1y2c1u2c1k2c1s2f1f2f1q2c1u2d102c1s1e1v2e1t2c1t2c1w2e1w2e1t2g102c1t1e1b2c1q2g1v2e1t1c1q2c1v2e152e1s2e1v2c1s2c1u2c1s2g102e1s3c1v2c1u2d1r2e1u2e1j2c1t1e122c1r3g1v2e1u2e1y2c1u2e1r2e1u2e1s2c1t2e112c1r1e172e1s3c1u2c1u2e1u2e1u2e1f2c1u3c1j2c1r3g1v2e1u1c1j2c1u3e1r2e1u2g152c1u3c1j2c1r3f1w2e1u2c1f2c1w2c1k2e1t3e162c1s2e1r2c1s2e1s2e1t2d1t2c1v2c1r2e1s2e1c2c1u1d1u2c1s3e1v2e1s2c1m2c1u1e1f2e1u1e1u2c1t3c1d2c1d3f1y3f1v3c172c14121t2h1i1t2g1f1u1k2t1f121o', 'cd10b2b23333w331y371g25202q193x3c1b3q00111m25212o2o252c2q2m2y23381g23211g2c2b361c2v3s112z1o360w112z3b213v2129381a2v3u1z311m2z182t312n1z2238251q25352c162z2v252c1y3s27111z3a231q27333e142z281w121z1411133x392o192z361s3s2v2z3p1z3u262c153v392q17213410111m251z3u281z3w261z3w26113u2o2129233v2c2b213x29213x2520393v2e1z112233163o02302c2b3w141m2c1d3o013z2k241z311m2z111z3u271z211d3b3v2c1a1w12302v3w2s353c10111c1o1z133x27231t302q12252520352c182633211d1g182c162z281w1z121z323s2711101o3s35012z243314351s2e3d1o1g1i1f1f1c1s3d1j2e1q3f1d3g183e1m2e1i1c1h2f1c3e1s3d1m2c1t3c1z2e1s3g1y2c1v2c1y2c1s3f1i2e1s2c1a2c1s3c1r2e1s2e1q2c1v1c1g2c1u2e122e1u2c112c1s2c1b2e1s2g1e2c1v3e1j2c1s2e1s2e1s1e162c1u2e1r2e1q2e1z2c1w2c1g2c1u3e1r2e1u2e1y2c1t2c1t2e1s2g1g2c1v2c1x2c1u2f1w2e1u2c1a2c1s2e1x2e1s2g1b2c1u1d162c1u3g1t2e1s2d1b2c1s3d192e1q1f182c1u3d1z2c1s3f172e1s3c1k2c1s2d172e1s3f142c1u2d172c1t3f1j2e1s2d1b2c1u3d142e1q3f192c1w3c1c2c1s2f152e1u3d1f2c1s3d172e1r3f1c2c1u1d172c1s3g192e1s2d192c1t3d1z2e1q3f162c1w3e1a2c1s2f162e1u3e1x2c1s3d172e1q3g192c1u3d1u2c1s2e1s2e1f1c1j3d1g1e1g3g1s1g141e1u2e1d3c1i1g101g143d1i2c1g3c1s2g1o3g1c3c1l3c1f1d1b1g1h2f183e141c193d1c1g1e3f1g2c1e3d1s3e1k1e1j1e1i1e1j1d1c1c1h1e192f1k3e1a3d1f3c1a1g1e3g141d1j1c121c1a1e181e1a1c1c3d1m1e1s2f192f1b1d1r3d1f3d1g1g1b1g1p3c142c143e101e1d3f1c3e1m1d1t1e1s2e1b1f1a3e1u1c1s3c1g3f1c3g141d1k1e1s1d1g1e1s2g1h3d1e1c1f1e1k1e103g1c3d1i1e1t2e1f2e1s3e1z2c1w3e1f2c1t2e1w2e1u1e1s2c1u2e1r2e1s1f1w2c1v2e1h2c1t3e1t2e1s2c172c1t2d1p2e1r2f1f2c1v2e1w2c1u2f1y2e1t1e192c1t3c1i2e1s2g1r2c1v3c1i2c1t2e1g2e1s3e1v2c1t2d142e1q2g1k2c1u2c1l2c1s2g122e1u2e1u2c1t2c1f2e1q2f1a2c1v3c1x2c1t2e1c2e1t2e102c1u2e1t2e1q2f1i2c1w2c1x2c1u2e1g2e1u1c122c1u2c182e1r2g1z2c1v1e1w2c1s2e1o2e1s2c1v2c1u2d1w2e1s3e172c1v2c1r2c1r3e1b2e1u1e1z2c1u1c1y2e1s2g1x1c1t2c1u2c1v2e1r3g1y2c1t2d1h2c1s2e1s2e1t2c1z2c1t2c102e1q2g1f2c1v3c1k2c1s2f1r2e1t2c1y2c1s1c102e1p1f1u2c1v3c1i2c1u3e1v2e1s2d1l2c1u1d1f2e1s1e1j2c1w2e102c1t1e1x2e1t2e122c1t2c1t2e1q2f1g2c1u3d1i2c1t2f1w2e1s2e1w2c1t1e1d2e1s1e1j2c1u2e1k2c1s2g1p2e1u2c1v2c1s1c1t2e1q2g1q2c1w3c142c1t3e1y2e1t2c1v2c1t2c1i2e1r2e1w2c1v2c1f2c1u1g1f2e1t3c1f2c1u1c1a2e1q2e182c1v2c1t2c1t3e132e1u2c1z2c1t3c1d2e1q1f1t2e122c1u1e172e1r1e1t2c1w2e1y2c1t2g1y2e1t2c1j2c1u3e1v2e1q2e172c1w2d1q2c1u2e1g2e1s1e182c1t2c1u2e1r2e1y2c1u1c1u2c1t1f1h2e1u2e102c1t2c1o2e1q2f102c1w3d1x2c1s1g1y2e1s2e1y2c1t2c1s2e1q2f1e2c1v3d1t2c1s2g1y2e1s1c1x2c1u2c1c2e1q1g1k2c1w3c182c1s1g1h2e1s1e102c1u2c1f2e1s1g1s2c1w2e1t2c1u2e1y2e1u2e112c1t1c1k2e1r2e1u2c1w2c1t2c1u3g1r2e1u2e1s2c1s2e102e1q3g1x2c1u3d1f2c1t2f1u2e1u1e122c1t2e1k2e1x3f1y2d1a2d1h121s243c161c1k3g1g2g1c3d162c1i3d1a1g1g1f1q1e1l1c123e1c1e1r3g142c1w2e1r2c1s2e1z2e1u2c1i2c1u3c1t2e1u3g1w2c1v2c1t2c1u2g1g2e1t2c1z2c1u2d1y2e1u2e182c1u2e1x2c1u2g1b2e1s1d182c1s3c1z2e1s1g1g2c1w1c1u2c1t2e1k2e1u2c182c1s2e1p2e1s1f192c1w2e1m2c1u2g1x2e1s2e102c1s3d102e1s3e1w2c1u1d1k2c1r2g1v2e1t3e1i2c1s1d192e1u3g182c1u3d192c1t3f162e1s3d192c1u3d1c2e1s2f172c1w3e1g2c1s3f192e1u3d1f2c1s3d182e1u3g1b2c1u3d172c1s3f172e1s2d192c1u3c1a2e1s3f182c1u3d1a2c1s3f182e1s3d1c2c1s1d172e1t3f1b2c1u3d192c1s3f152e1s2d192c1u3e1w2e1s1f172c1u3d1e2c1s1f172e1s3c112c1s3c1w2e1k1e123d1q1e1k1d141f121g141e1u2e1f1d141f103g1i1d1f3c1d2d161g1c1f1b1d1s3d1f1e1g3f1g1e1d1c1e1c1f1e1p3e1c1e183e151e1h2c1b2f1k1f1c1c1i2c1s2e1j3g1d1e1j3c1e2d1b1e1j1f181e122c1b2d1b2d1b2f1b2f1b3c1a1c1d3d183f153e1i1e1u3d1f2e1c1f1f1e1c3c1d1c191d1r1f1s1g123c1w1d143d1c3f171g1h1e1u2d1j2e1p1e1a3g181e1r3e1d1c1h1e1c1e1g2c1e1e1h2c1i2g1c3f1f2c1t2d1k2c1s2g102e1u1e102c1t2e1o2e1u2e1y2c1w2e1q2c1u3f1y2e1t1c162c1t3c1p2e1s3e102c1w3d172c1s3g1w2e1s1e1u2c1t3e1i2e1t1e1v2c1v2c1j2c1s1e1y2e1t2c1c2c1s2c1u2e1s1g1q2c1u3c1j2c1s1e192e1s2e1r2c1t1e1g2e1u1e1a2c1w2d1z2c1s3e1y2e1t2e192c1t2c1i2e1u1e1j2c1u1c1j2c1s3f1w2e1s2e1q2c1t2c1v2e1u2e1q2c1w3c1u2c1t2f1t2e1u2e1d2c1s3c1w2e1s2e1t2c1v3e1t2c1u2e1y2e1u2e1v2c1u2c192e1s1g1f2c1w2d1t2c1s1e1a1e1y2c1w2d102c1t1e1j2e1s3e102c1u3c1s2e1s3e1u2c1v3c1m2c1s1g1j2e1u2e1j2c1t3c1i2e1t3g162c1w2e1y2c1u3g1o2e1u2d1h2c1s3e1t2e1t3g1q2c1w3c1h2c1t2g1k2e1s1e1i2c1t3c1i2e1s1g1g2c1w2c1y2c1t3e1s2e1s3c1z2c1s3d1j2e1s1g1t2c1u2c1u2c1u2g1k2e1t2e1e2c1u1e1j2e1t2f152c1w3c1a2c1s2e1t2e1u2c122c1u2c1p2e1u2e1w2c1w3d182c1t3f1t2e1u2c1y2c1t1c1u2e1s2f1x2c1v2d1k2c1u2f1o2e1u2e1z2c1s3c102e1u2f1r2c1u2c1f2c1k3f1s1f1s2c1v1e1l2c1t3g1h2e1t1c1v2c1u2e1y2e1t2g172c1w2c152c1u2g1v2e1u3c1l2c1s2e1i2e1u1g1f2c1v3e1l2c1t2g1k2e1t2c1k2c1s3c1j2e1s1f1t2c1w2c1m2c1s3e1k2e1s3e1v2c1t1e1i2e1s2g1x2c1u2c1l2c1t3e1x2e1s3c1h2c1u1c1i2e1s3g1f2c1u2c1m2c1t1e152e1u2c122c1u1c1z2e1u1e1t2c1u2c1w2c1t1e1h2e1u1e1x2c1u2e1f2e1u2g1x2c1w3d1z2c1s2g1y2e1s2c1v2c1u1e1t2e1t1e1w2c1u2c1u2c1s2g1y2e1s3e122c1t3c1w2e1u1g1x2c1w1e1t2c163e1z3e1r3c141o2q1p1e1e1c1k2e141g1c3g1h1d1g3e141d1i1g1h1g1t2c1k2e1w2c1r1g1e2e1u1c1w2c1t2c1k2e1s2e162c1u2e1m2c1s1f172e1u2e1r2c1u1e1x2e1q2g1y2c1u3d102c1s2e1u2e1s1d1m2c1r2e1v2e1r3g1g2c1u2c1u2c1s1f1p2e1t2e1v2c1s2c1w2e1q3g1e2c1w1c1z2c1s3e1p2e1u2c162c1s2e1p2e1s1e1k2c1w3c1h2c1u2f1x2e1s3c112c1t1d1u2e1q1f172c1v3c162c1s1f162e1u3d1a2c1s3d172e1q3e1b2c1u3d172c1u3g1r2e1s1d1b2c1s3d1b2e1q3f172c1u3e162c1s1f172e1s3d1i2c1s3d172e1s3f142c1u2d192c1s3f1x2e1s3d1b2c1s3e1w2e1q3f192c1v3d1e2c1s3f152e1s3c1d2c1s3d182e1r3f192c1u1d172c1t3e172e1s3d192c1s3d192e1q2e1u2c1u2c1w1c1f1e103e161c1m3e1b3c141e101f141e1u2c1b3c1q1e163e1c1c1i3e141e1h3g171f1c3d1u1e1m3c1d1e1d3f1s2e1r1c1b3c1d3g1a1e1p1e1e2e1c3e1c1e1q1f1c3c1f2d161e1s1f191f1j3d1e1e1g3d1g2e1d1e1q3d1e3d1j3d183f122e1a1c1e3d1f3d183g1d1f1p3c141d143c1e1e1b3f1s3d1k1d1f3e1p1g1b1e143c1u3d1m3c181e1r1e1c3e1i1e1i3d171g1c1e1o1c1e1c1f2c1s1f1d3f1p1e1e3c1k1e1p3e101e1u3e1j2c1s1c1y2e1r1g1f2c1u2c1l2c1u2g1j2e1u1c102c1r3c1y2e1r3g172c1v2c152c1t2f1p2e1s3e1l2c1u1e1y2e1r2e1i2c1u1c1y2c1s2f1a2e1t2e1s2c1t2e1r2e1r2g1i2c1v2e172c1t1e1i2e1s2d172c1u2e102e1q2g1v2c1v1d1z2c1t2e152e1s3e1v2c1s2d1s2e1r1e1q2c1v2d1x2c1t3e132e1u2e1e2c1u3e1v2e1s1e1w2c1u2e1w2c1r2e1x2e1u2d1s2c1u3c1q2e1s2e102c1w2e1e2c1u2g1r2e1u1c1f2c1t2d1u2e1r1g1s2c1u2e1u2c1s2e1q2e1t3c1v2c1t2c1k2e1v2e1u3c1h2c1t3c1s2e1r2g102c1w2c1y2c1u3e1q2e1s2c1h2c1u1e102e1s1g1t2c1v2c152c1t1e1b2e1t1c1t2c1t1c152e1r3g182c1v1c1x2c1t2g1g2e1s2e1s2c1t2e102e1r1e1w2c1u2c102c1t1e1q2e1s2c102c1t2e102e1q3g1t2c1u3c1j2c1t1e1d2e1s2e1h2c1t2e1q2e1q1g1r2c1w1c102c1u3e1y2e1u2c172c1s2e1t2e1r3f1w2c1u2c1q2c1t2e1s2e1u3e1w2c1u3c1f2e1s2g1x2c1u2e1x2c1s3g1r2e1u3d1q2c1u3d172e1s2e1t2c1w2d1y2c1u3e1r2e1u2e1t2c1z3c1t3e1w2e1u1d1f2c1s1c1y2e1s3e1o2c1v1c1t2c1u2g1h2e1u2c1r2c1s1d1h2e1q2g1p2c1u1e1z2c1r1f1s2e1s1c1r2c1s1c1b2e1q2e1u2c1u2e1t2c1t3e1b2e1t2e122c1s2c1z2e1r1e1x2c1u2c1x2c1u2e1r2e1t2e1m2c1t2e172e1r3e1x2c1w2c1x2c1s2e172e1u2d122c1s2e1k2e1r3f102c1w2e1u2c1t2e1c2e1t2e122c1s2c1z2e1r1e1p2c1w2c142c1u2e1r2e1u3e1v2c1s2c1s2e1r2g1t2c1v1c1x2c1u2g1b2e1u2c182c1r1c1y2e1q1g1h2c1w2c1d2c1u1e142e1s1c1b2c172c183f1t1e171g1v2j2l2p1i1l2d1u1e2j16', '25f2f4c87c8ddb537488ef298ed034d8'));
        var wait_url;
        var wait_wrap;

        function LoadXml(x, wrap) {
            
            if (preload) {
                _preloaded.push(x)
            }
            if (x != '') {
                _x == '' ? _x = x : '';
                _nocred = false;
                var stop = false;
                if (o.waitingads == 1 || o.destroyed) {
                    if (!o.destroyed) {
                        if (!wait_url) {
                            wait_url = x;
                            wait_wrap = wrap
                        }
                        setTimeout(LoadXml, 500)
                    }
                    return
                } else {
                    if (!x && !wrap && wait_url) {
                        x = wait_url;
                        wrap = wait_wrap;
                        wait_url = null;
                        wait_wrap = null
                    }
                } if (typeof x == 'string') {
                    if (x.indexOf("js:") == 0) {
                        try {
                            x = eval(x.substr(3) + '()')
                        } catch (e) {}
                        if (x.indexOf(".") == -1) {
                            o.actions.EmptyVastUrl()
                        }
                    }
                    if (x.indexOf("<VAST>") == 0) {
                        var x2 = new Object();
                        if (window.DOMParser) {
                            var p = new DOMParser();
                            x2.responseXML = p.parseFromString(x, "text/xml")
                        } else {
                            var p = new ActiveXObject("Microsoft.XMLDOC");
                            p.async = "false";
                            p.loadXML = x;
                            x2.responseXML = p
                        }
                        Parsing(x2);
                        return
                    }
                }
                if (x.indexOf('[remove]') > -1) {
                    o.vast_remove ? o.vast_remove.push(x) : '';
                    o.actions.VastRemoveUrl(vastUrl);
                    x = x.replace('[remove]', '')
                }
                o.vast_stop = 0;
                if (x.indexOf('[stop]') > -1) {
                    o.vast_stop = 1;
                    x = x.replace('[stop]', '')
                }
                if (x.indexOf("nocontrols") > -1) {
                    vast.nocontrols = 1;
                    if (x.indexOf("nocontrolsvpaid") > -1) {
                        vast.nocontrolsvpaid = 1
                    }
                }
                if (x.indexOf("yescontrols") > -1) {
                    vast.yescontrols = 1
                }
                if (x.indexOf('[ima]') > -1) {
                    if (v.vast_ima == 1) {
                        vast.ima = 1
                    }
                    x = x.replace('[ima]', '')
                }
                if (x.indexOf('[pausemute]') > -1) {
                    vast.pause_mute = 1
                }
                if (x.indexOf('[mute]') > -1) {
                    vast.mute = 1;
                    x = x.replace('[mute]', '')
                }
                if (x.indexOf('[unmute]') > -1) {
                    vast.mute = -1;
                    x = x.replace('[unmute]', '')
                }
                if (x.indexOf("[skip:") > 0) {
                    var to = x.match(/\[skip:\d*\]/g);
                    if (to) {
                        if (to.length > 0) {
                            var tmp = to[0].substr(to[0].indexOf(":") + 1);
                            !vast.extensions ? vast.extensions = [] : '';
                            vast.extensions.skipTime = tmp.substr(0, tmp.length - 1)
                        }
                    }
                    x = x.replace(/\[skip:\d*\]/g, '')
                }
                if (x.indexOf("[imp:") > 0) {
                    var to = x.match(/\[imp:\d*\]/g);
                    if (to) {
                        if (to.length > 0) {
                            var tmp = to[0].substr(to[0].indexOf(":") + 1);
                            v["vast_" + vastType + "_" + "andlimit"] = tmp.substr(0, tmp.length - 1)
                        }
                    }
                    x = x.replace(/\[imp:\d*\]/g, '')
                }
                if (x.indexOf("[controls]") > 0) {
                    vast.yescontrols = 1;
                    x = x.replace("[controls]", "")
                }
                if (!stop) {
                    o.vast_poster ? show2(o.vast_poster) : '';
                    x = vastURL(x, wrap);
                    vastUrl = x;
                    v.vast_ima == 1 ? DestroyIma() : '';
                    if (vast.ima == 1) {
                        o.ima = new VastIMA(x, vast)
                    } else {
                        if (!wrap) {
                            vast.vasturl = x;
                            o.current_vast_url = x
                        }
                        js((wrap ? "vast_wrapper" : "vast_url"), x);
                        var xhr = new XMLHttpRequest();
                        xhr.open('GET', x, true);
                        if (v.vast_nocredentials == 1 || x.indexOf("nocredentials") > -1 || x.indexOf('kxcdn.com') > 0 || x.indexOf('pljs.ru') > 0 || x.indexOf('plrjs.org') > 0) {
                            _nocred = true
                        } else {
                            xhr.withCredentials = true
                        }
                        xhr.timeout = parseInt(v.vast_timeout) * 1000;
                        xhr.onload = function(e) {
                            Parsing(this)
                        };
                        xhr.onerror = function(e) {
                            if (e.target.status == 0 && !_nocred) {
                                LoadXmlNoCredentials(x)
                            } else {
                                ErrorLoad()
                            }
                        };
                        xhr.ontimeout = function(e) {
                            ErrorLoad(301)
                        };
                        try {
                        	console.debug(xhr);
                        	
                            // xhr.send()
                            LoadXmlNoCredentials(x)
                        } catch (e) {
                            ErrorLoad()
                        }
                    }
                } else {
                    die_error = true;
                    _status = 'next';
                    if (!_preload) {
                        setTimeout(function() {
                            o.actions.VastNext()
                        }, 100)
                    }
                }
            } else {
                ErrorLoad()
            }
        }

        function LoadXmlNoCredentials(x) {
            var xhr = XHR(x);
            xhr.timeout = parseInt(v.vast_timeout) * 1000;
            xhr.onload = function(e) {
                Parsing(this)
            };
            xhr.onerror = function(e) {
                ErrorLoad()
            };
            xhr.ontimeout = function(e) {
                ErrorLoad(301)
            };
            try {
                xhr.send()
            } catch (e) {
                ErrorLoad()
            }
        }

        function ChX(x) {
            if (x) {
                if (o.vast_remove) {
                    if (o.vast_remove.indexOf(x) > -1) {
                        log('VAST removed');
                        o.actions.VastError();
                        x = ''
                    }
                }
                for (var i = 0; i < no.length; i++) {
                    if (x.indexOf('[no_' + no[i] + ']') > -1) {
                        x = x.replace('[no_' + no[i] + ']', '');
                        if (o.system[no[i]]) {
                            log('VAST no ' + no[i]);
                            o.actions.VastError();
                            x = ''
                        }
                    }
                }
                if (v.geo == 1 && o.geo) {
                    x = o.geo.V(x)
                }
            }
            return x
        }

        function ErrorLoad(x) {
            var z;
            if (!z) {
                log("VAST Loading Error");
                if (vast.isWrapper) {
                    Event("Error", (x > 0 ? x : 300))
                } else {
                    Event("Error", 100)
                }
                _status = 'error';
                !die_error && !_preload ? o.actions.VastError() : '';
                die_error = true
            }
        }
        this.
        break = function() {
            if (!die_error) {
                ErrorLoad()
            }
        };

        function Parsing(x) {
            // return;
            var rxml = x.responseXML;
            if (rxml == null && x.responseText) {
                try {
                    if (x.responseText.indexOf("VAST") > 0) {
                        var parser = new DOMParser();
                        rxml = parser.parseFromString(x.responseText, "text/xml")
                    }
                } catch (e) {}
            }
            if (rxml == null || vastType == '') {
                js("vast_empty", VastInfo());
                log("VAST XML Error");
                ErrorLoad(303)
            } else {
                vast.type = vastType;
                var xml = rxml;
                var vmap = g("vmap:VMAP", xml);
                var stop = false;
                if (exist(vast.wrapperTime)) {
                    _ltime = new Date().getTime() - vast.wrapperTime;
                    Event("loadTime")
                }
                if (vmap) {
                    var vmaps = vmap.getElementsByTagName("vmap:AdBreak");
                    if (vmaps.length > 0) {
                        var vmap_ands = [];
                        var vmap_ors = [];
                        for (var i = 0; i < vmaps.length; i++) {
                            if (vmaps[i].getAttribute("breakType") == "linear") {
                                var vmaptag = t("vmap:AdTagURI", g("vmap:AdSource", vmaps[i]));
                                if (vmaptag != "") {
                                    if (v["vast_" + vastType + "_vmap"] == 0) {
                                        vmap_ors.push(vmaptag)
                                    } else {
                                        vmap_ands.push(vmaptag)
                                    }
                                }
                            }
                        }
                        if (vmap_ands.length > 0) {
                            o.actions.VastInsertAnd(vmap_ands, _x)
                        }
                        if (vmap_ors.length > 0) {
                            o.actions.VastInsertOr(vmap_ors, _x)
                        }
                        _status = 'error';
                        !_preload ? o.actions.VastRemoveAndPlay() : '';
                        stop = true
                    }
                }
                var pjswrp = t("PjsWrapper", xml);
                if (pjswrp) {
                    var pjswrp2 = pjswrp.split(',');
                    for (var i = 0; i < pjswrp2.length; i++) {
                        var y2 = 'wrapper_events' + pjswrp2[i];
                        if (exist(o[y2])) {
                            for (var y in o[y2]) {
                                if (o[y2].hasOwnProperty(y)) {
                                    if (!exist(vast.events[y])) {
                                        vast.events[y] = []
                                    }
                                    vast.events[y] = vast.events[y].concat(o[y2][y])
                                }
                            }
                        }
                    }
                }
                var ads = xml.getElementsByTagName("Ad");
                // if (ads.length > 1) {
                //     var rnd = random(10000, 20000);
                //     o['wrapper_events' + rnd] = [];
                //     for (var y in vast.events) {
                //         if (vast.events.hasOwnProperty(y)) {
                //             o['wrapper_events' + rnd][y] = vast.events[y].slice()
                //         }
                //     }
                //     var ad_ands = [];
                //     var ad_ors = [];
                //     for (var i = 1; i < ads.length; i++) {
                //         var adwp = g("Wrapper", ads[i]);
                //         if (adwp) {
                //             var adtg = t("VASTAdTagURI", adwp);
                //             if (adtg) {
                //                 var nx = new XMLSerializer();
                //                 var nt = '<VAST><PjsWrapper>' + (pjswrp ? pjswrp + ',' : '') + rnd + '</PjsWrapper>' + nx.serializeToString(ads[i]) + '</VAST>';
                //                 if (nt != '') {
                //                     if ((adwp.getAttribute("allowMultipleAds") == "true" || v.vast_adsfalland == 1) && v["vast_" + vastType + "_" + "vmap"] == 1) {
                //                         ad_ands.push(nt)
                //                     } else {
                //                         ad_ors.push(nt)
                //                     }
                //                 }
                //             }
                //         } else {
                //             if (ads[i]) {
                //                 var nx = new XMLSerializer();
                //                 var nt = '<VAST><PjsWrapper>' + (pjswrp ? pjswrp + ',' : '') + rnd + '</PjsWrapper>' + nx.serializeToString(ads[i]) + '</VAST>';
                //                 if (v.vast_adsfalland == 1 || ads[i].getAttribute("allowMultipleAds") == "true") {
                //                     ad_ands.push(nt)
                //                 } else {
                //                     ad_ors.push(nt)
                //                 }
                //             }
                //         }
                //     }
                //     // if (ad_ands.length > 0) {
                //     //     o.actions.VastInsertAnd(ad_ands, _x)
                //     // }
                //     // if (ad_ors.length > 0) {
                //     //     o.actions.VastInsertOr(ad_ors, _x)
                //     // }
                // }
                if (!stop) {
                    var adxml = g("Ad", xml);
                    var ad = g("InLine", adxml);
                    var wrapper = g("Wrapper", adxml);
                    vast.isWrapper = false;
                    vast.isVpaid = false;
                    vast.isImg = false;
                    _Event("Error", adxml);
                    if (wrapper) {
                        vast.isWrapper = true;
                        ad = wrapper;
                        vast.wrapper ? vast.wrapper0 += vast.wrapper + ' -> ' : '';
                        vast.wrapper = t("VASTAdTagURI", ad);
                        var vz = wrapper.getAttribute("minVisibility");
                        if (vz) {
                            if (vz > 0 && exist(o.visibility)) {
                                if (o.visibility < vz) {
                                    log("Wrapper visibility", (o.visibility + '<' + vz));
                                    vast.file = undefined;
                                    vast.isWrapper = false
                                }
                            }
                        }
                    }
                    var xml_string = new XMLSerializer().serializeToString(xml.documentElement);
                    js("vast_xml", escape(xml_string));
                    if (ad) {
                        var creatives;
                        o.vast_adid += (o.vast_adid != '' ? ' -> ' : '') + adxml.getAttribute("id");
                        vast.adsystem = t("AdSystem", ad);
                        creatives = g('Creatives', ad);
                        _Event("Impression", ad);
                        vast.version = xml.documentElement.getAttribute("version");
                        _Event("Error", ad);
                        if (vast.adsystem == "PjsVast" && vast.pjstat) {
                            vast.events['Error'].push(vast.pjstat + "err")
                        }
                        // var creative;
                        // if (creatives) {
                        //     var crtvs = creatives.getElementsByTagName("Creative");
                        //     for (var i = 0; i < crtvs.length; i++) {
                        //         creative = g("Linear", crtvs[i]);
                        //         var overlays = g("NonLinearAds", crtvs[i]);
                        //         if (overlays) {
                        //             var over = overlays.getElementsByTagName("NonLinear");
                        //             for (var j = 0; j < over.length; j++) {
                        //                 // OverlayParsing(over[j])
                        //             }
                        //         }
                        //         if (creative) {
                        //             if (t("Duration", creative) != "") {
                        //                 vast.duration = seconds(t("Duration", creative))
                        //             }
                        //             if (t("AdParameters", creative) != "") {
                        //                 vast.adparameters = t("AdParameters", creative)
                        //             }
                        //             if (g("MediaFiles", creative)) {
                        //                 vast.file = _Media("MediaFile", g("MediaFiles", creative));
                        //                 if (exist(v.vast_denied_files)) {
                        //                     var dnfs = v.vast_denied_files.split(",");
                        //                     for (var i = 0; i < dnfs.length; i++) {
                        //                         if (vast.file.indexOf(dnfs[i]) > -1) {
                        //                             log("VAST file denied", dnfs[i]);
                        //                             js("vast_file_denied", vast.file);
                        //                             vast.file = undefined
                        //                         }
                        //                     }
                        //                 }
                        //             }
                        //             if (g("TrackingEvents", creative)) {
                        //                 _Tracking("Tracking", "event", g("TrackingEvents", creative))
                        //             }
                        //             var clicks = g("VideoClicks", creative);
                        //             if (clicks) {
                        //                 vast.click = t("ClickThrough", clicks);
                        //                 _Tracking("ClickTracking", "id", clicks)
                        //             }
                        //             var skipoffset = creative.getAttribute("skipoffset");
                        //             if (skipoffset) {
                        //                 !exist(vast.extensions) ? vast.extensions = [] : '';
                        //                 vast.extensions.skipTime = seconds(skipoffset)
                        //             }
                        //         }
                        //         var companions = g("CompanionAds", crtvs[i]);
                        //         // if (companions) {
                        //         //     var cmpns = companions.getElementsByTagName("Companion");
                        //         //     var aspct = 100;
                        //         //     var ppl = 0;
                        //         //     for (var j = 0; j < cmpns.length; j++) {
                        //         //         var sr = g("StaticResource", cmpns[j]);
                        //         //         if (sr) {
                        //         //             var srct = sr.getAttribute("creativeType");
                        //         //             if (srct) {
                        //         //                 if (srct.indexOf("image") > -1) {
                        //         //                     var tmp = Math.abs(cmpns[j].getAttribute("width") / cmpns[j].getAttribute("height") - o.aspect);
                        //         //                     var tmp2 = cmpns[j].getAttribute("width") * cmpns[j].getAttribute("height");
                        //         //                     if (tmp < aspct && tmp2 >= ppl) {
                        //         //                         aspct = tmp;
                        //         //                         ppl = tmp2;
                        //         //                         vast.companionImg = textContent(sr);
                        //         //                         _Event("CompanionClickThrough", cmpns[j])
                        //         //                     }
                        //         //                 }
                        //         //             }
                        //         //         }
                        //         //     }
                        //         // }
                        //     }
                        // }!exist(vast.extensions) ? vast.extensions = [] : '';
                        // var extensions = g("Extensions", ad);
                        // if (extensions) {
                        //     _Extensions(extensions)
                        // }
                    }
                    if (vast.isWrapper) {
                        log("Wrapper", vast.wrapper);
                        vast.wrapperTime = new Date().getTime();
                        LoadXml(vast.wrapper, true)
                    } else {
                        Done()
                    }
                }
            }
        }

        function Done() {
            Event("onVastLoad");
            if (exist(vast.file) && o.vok) {
                _status = 'ready';
                !_preload ? o.actions.VastReady(vast) : ''
            } else {
                js("vast_empty", VastInfo());
                Event("Error", 401);
                _status = 'error';
                !die_error && !_preload ? o.actions.VastError() : '';
                die_error = true
            }
        }

        function g(x, xml) {
            if (exist(xml)) {
                return xml.getElementsByTagName(x)[0]
            } else {
                return null
            }
        }

        function t(x, xml, i) {
            if (!exist(i)) {
                i = 0
            }
            if (exist(xml.getElementsByTagName(x)[i])) {
                if (exist(xml.getElementsByTagName(x)[i].childNodes[0])) {
                    return xml.getElementsByTagName(x)[i].childNodes[0].wholeText.trim()
                } else {
                    return ""
                }
            } else {
                return ""
            }
        }

        function _Event(x, xml) {
            if (!exist(vast.events[x])) {
                vast.events[x] = []
            }
            if (exist(xml)) {
                if (exist(xml.getElementsByTagName(x)[0])) {
                    for (var i = 0; i < xml.getElementsByTagName(x).length; i++) {
                        var y = xml.getElementsByTagName(x)[i].childNodes;
                        for (var j = 0; j < y.length; j++) {
                            if (y[j].wholeText) {
                                var y2 = y[j].wholeText;
                                if (exist(y[j].nextSibling)) {
                                    if (y[j].nextSibling.localName == "URL") {
                                        y2 = textContent(y[j].nextSibling)
                                    }
                                }
                                var z;
                                if (y2) {
                                    z = y2.replace(/\s+/g, ' ').trim()
                                }
                                if (z && z != '') {
                                    if (x == "CompanionClickThrough") {
                                        vast.click = z
                                    } else {
                                        if (vast.events[x].indexOf(z) == -1) {
                                            vast.events[x].push(z)
                                        }
                                    } if (z.indexOf("pjstat") && x == "Impression") {
                                        vast.pjstat = z
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        function _Tracking(x, x2, xml) {
            if (exist(xml.getElementsByTagName(x)[0])) {
                for (var i = 0; i < xml.getElementsByTagName(x).length; i++) {
                    var y = xml.getElementsByTagName(x)[i].getAttribute(x2);
                    if (x == "ClickTracking" && y != "skipAd") {
                        y = "click"
                    }
                    if (y) {
                        var n = xml.getElementsByTagName(x)[i].childNodes;
                        if (n.length > 0) {
                            var z = n[0].wholeText.replace(/\s+/g, ' ').trim();
                            if (y == "impression") {
                                y = "Impression"
                            }
                            if (y == "progress") {
                                var prgtime = xml.getElementsByTagName(x)[i].getAttribute("offset");
                                if (prgtime) {
                                    if (!exist(vast.progresstimes)) {
                                        vast.progresstimes = []
                                    }
                                    vast.progresstimes.push(seconds(prgtime));
                                    y = y + '_' + seconds(prgtime)
                                }
                            }
                            if (!exist(vast.events[y])) {
                                vast.events[y] = []
                            }
                            vast.events[y].push(z)
                        }
                    }
                }
            }
        }

        function _Extensions(xml) {
            if (exist(xml.getElementsByTagName("Extension")[0])) {
                for (var i = 0; i < xml.getElementsByTagName("Extension").length; i++) {
                    var y = xml.getElementsByTagName("Extension")[i].getAttribute("type");
                    if (y) {
                        var z = '';
                        if (exist(xml.getElementsByTagName("Extension")[i].childNodes[0])) {
                            if (exist(xml.getElementsByTagName("Extension")[i].childNodes[0].wholeText)) {
                                z = xml.getElementsByTagName("Extension")[i].childNodes[0].wholeText.replace(/\s+/g, ' ').trim()
                            }
                        }
                        if (y == "CustomTracking") {
                            _Tracking("Tracking", "event", xml.getElementsByTagName("Extension")[i])
                        }
                        if (y == "or") {
                            o.actions.VastInsertOr(t("Extension", xml, i))
                        }
                        if (y == "and") {
                            o.actions.VastInsertAnd(t("Extension", xml, i))
                        }
                        var dur = exist(o.media) ? o.media.duration() : 0;
                        if (y == "Allowblock" && (dur > 120 || dur == 0)) {
                            if (z == '1') {
                                if (vastType == "preroll") {
                                    vastUrl.indexOf("vr=1") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=1", "vr=5")) : '';
                                    vastUrl.indexOf("vr=5") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=5", "vr=9")) : ''
                                }
                                if (vastType == "midroll") {
                                    vastUrl.indexOf("vr=2") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=2", "vr=6")) : '';
                                    vastUrl.indexOf("vr=6") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=6", "vr=10")) : ''
                                }
                                if (vastType == "pauseroll") {
                                    vastUrl.indexOf("vr=3") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=3", "vr=7")) : '';
                                    vastUrl.indexOf("vr=7") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=7", "vr=11")) : ''
                                }
                                if (vastType == "postroll") {
                                    vastUrl.indexOf("vr=4") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=4", "vr=8")) : '';
                                    vastUrl.indexOf("vr=8") > 0 ? o.actions.VastInsertAnd(vastUrl.replace("vr=8", "vr=12")) : ''
                                }
                            }
                        } else {
                            if (y == "loadTime" || y == "skipAd" || y == "addClick" || y == "viewable" || y.indexOf("second") == 0) {
                                if (y.indexOf("second") == 0) {
                                    if (!exist(vast.events.sec)) {
                                        vast.events.sec = []
                                    }
                                    vast.events.sec.push(parseInt(y.substr(6)))
                                }
                                if (!exist(vast.events[y])) {
                                    vast.events[y] = []
                                }
                                vast.events[y].push(z)
                            } else {
                                if (y.indexOf("Time") > -1 && z != -1) {
                                    z = seconds(z)
                                }
                                if (y.indexOf("Txt") > -1) {
                                    z = decodeHtml(z)
                                }
                                if (y == "controls") {
                                    var x_control = xml.getElementsByTagName("Extension")[i].getElementsByTagName("control");
                                    if (x_control.length > 0) {
                                        for (var i2 = 0; i2 < x_control.length; i2++) {
                                            if (x_control[i2].getAttribute("id")) {
                                                vast["control_" + x_control[i2].getAttribute("id")] = x_control[i2].getAttribute("layout")
                                            }
                                        }
                                    }
                                }
                                if (y == "minVisibility") {
                                    if (z > 0 && v.vast_visibility != 0 && exist(o.visibility)) {
                                        if (o.visibility < z) {
                                            log("VAST visibility", (o.visibility + "<" + z));
                                            js("vast_visibility", (o.visibility + "<" + z));
                                            vast.file = undefined;
                                            vast.isWrapper = false
                                        }
                                    }
                                }
                                if (y == "callPjsEvent") {
                                    if (z) {
                                        js(z, VastInfo())
                                    }
                                }
                                if (y == "hideAfterComplete") {
                                    vast.hidevpaid = 1
                                }
                                if (vast.extensions.extensionsPriority == 1 && z.toString().indexOf('//') == -1) {
                                    if (!exist(vast.extensions[y])) {
                                        vast.extensions[y] = z
                                    }
                                } else {
                                    vast.extensions[y] = z
                                }
                            }
                        }
                    }
                }
            }
        }

        function _Media(x, xml) {
            var r = "";
            var mp4 = [];
            if (exist(xml.getElementsByTagName(x)[0])) {
                for (var i = 0; i < xml.getElementsByTagName(x).length; i++) {
                    var y = xml.getElementsByTagName(x)[i];
                    var type = y.getAttribute("type");
                    var api = y.getAttribute("apiFramework");
                    r = textContent(y);
                    if (type) {
                        vast.filetype = type;
                        if (type.indexOf("javascript") > -1 && api == "VPAID") {
                            vast.isVpaid = true;
                            break
                        }
                        if (type.indexOf("mp4") > -1) {
                            var m = {};
                            m.x = r;
                            if (y.getAttribute("width")) {
                                m.w = y.getAttribute("width")
                            }
                            mp4.push(m)
                        }
                        if (type.indexOf("image") > -1) {
                            if (mp4.length == 0) {
                                vast.isImg = true;
                                break
                            }
                        }
                    }
                }
            }
            if (mp4.length > 0) {
                r = mp4[0].x;
                var w = 0;
                for (var i = 0; i < mp4.length; i++) {
                    if (mp4[i].w) {
                        if (mp4[i].w > w) {
                            r = mp4[i].x;
                            w = mp4[i].w
                        }
                        if (mp4[i].w >= o.screen_w) {
                            return mp4[i].x
                        }
                    }
                }
            }
            return r
        }

        function textContent(x) {
            if (x) {
                var y = x.textContent;
                if (y) {
                    return y.replace(/\s+/g, ' ').trim()
                }
            }
        }

        function vastURL(x, wrap) {
            if (x.indexOf("prt") == 0) {
                partner = true;
                x = Prt(x);
                log("VASTP " + vast.prt)
            }
            if (x.indexOf('random') == -1 && v.vast_addrandom == 1 && x.indexOf('//') > -1) {
                x = x + (x.indexOf('?') == -1 ? '?' : '&') + 'rand=(random)'
            }
            x = x.replace(/\{/g, "(");
            x = x.replace(/\}/g, ")");
            x = x.replace(/\(ref\)/g, Href());
            x = x.replace(/\(referer\)/g, Href());
            x = x.replace(/\(host\)/g, encodeURIComponent(o.domain));
            x = x.replace(/\(referrer\)/g, encodeURIComponent(exist(v.parent_domain) ? v.parent_domain : document.referrer));
            x = x.replace(/\(rereferer\)/g, encodeURIComponent(exist(v.parent_domain) ? v.parent_domain : document.referrer));
            x = x.replace(/\(random\)/g, Math.random());
            x = x.replace(/\(vast_id1\)/g, v.vast_id1);
            x = x.replace(/\[random\]/g, Math.random());
            x = x.replace(/\(adblock\)/g, (o.ab ? 1 : 0));
            x = x.replace(/\[CACHEBUSTING\]/g, Math.random());
            x = x.replace(/\(width\)/g, o.screen_w);
            x = x.replace(/\(height\)/g, o.screen_h);
            x = x.replace(/\(duration\)/g, o.media ? o.media.duration() : 0);
            x = x.replace(/\(visibility\)/g, (exist(o.visibility) ? o.visibility : -1));
            if (x.indexOf("(platform)") > 0) {
                o.system.tv ? x = x.replace(/\(platform\)/g, "smarttv") : '';
                if (o.system.mobile) {
                    x = x.replace(/\(platform\)/g, "mobile")
                } else {
                    x = x.replace(/\(platform\)/g, "web-html5")
                }
            }
            for (var i = 1; i < 6; i++) {
                var y = '';
                i > 1 ? y = i : '';
                if (x.indexOf("(timeout" + y + ":") > 0) {
                    var re = new RegExp('\\(timeout' + y + ':\\d*\\)', 'g');
                    var to = x.match(re);
                    if (to.length > 0) {
                        var tmp = to[0].substr(to[0].indexOf(":") + 1);
                        tmp = tmp.substr(0, tmp.indexOf(")"));
                        if (y == '') {
                            v.vast_timeout = tmp * 1;
                            v.vpaid_timeout = tmp * 1
                        } else {
                            v['vpaid_timeout' + y] = tmp * 1
                        }
                    }
                    x = x.replace(re, '')
                }
            }
            if (x.indexOf("(connection)") > 0) {
                var cn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                x = x.replace(/\(connection\)/g, ((typeof(cn) != "undefined" && typeof(cn.type) != "undefined") ? cn.type : "undefined"))
            }
            x = VastReplace(x);
            if (wrap != true) {
                v.vpaidimpression == 1 || x.indexOf("vpaidimpression") > 0 ? vast.vpaidImOnVdSrt = 1 : ''
            }
            if (x.indexOf("http://") == 0) {
                x = '//' + x.substr(7)
            }
            return x
        }

        function seconds(x) {
            var y = x.split(":");
            var z = 0;
            if (y.length == 3) {
                z = parseInt(y[0]) * 3600 + parseInt(y[1]) * 60 + parseInt(y[2])
            }
            if (y.length == 2) {
                z = parseInt(y[0]) * 60 + parseInt(y[1])
            }
            return z
        }

        function decodeHtml(x) {
            var div;
            if (x) {
                div = createElement('div');
                div.innerHTML = x;
                return decodeURIComponent(div.textContent)
            } else {
                return void 0
            }
        }

        function Event(x, code) {
            if (exist(vast)) {
                if ((exist(vast.prt) && v.eventstrackervast == 0) || vast.adsystem == "intro" || vast.adsystem == "outro") {} else {
                    code > 0 ? js(("vast_" + x), code) : js("vast_" + x)
                } if (exist(vast.events[x])) {
                    for (var i = 0; i < vast.events[x].length; i++) {
                        log("VAST " + x);
                        var stop = false;
                        var z = vast.events[x][i];
                        if (code > 0) {
                            if (z.indexOf("[ERRORCODE]") > 0) {
                                z = z.replace("[ERRORCODE]", code)
                            }
                        }
                        if (z.indexOf("(time)") > 0) {
                            z = z.replace("(time)", _ltime)
                        }
                        if (z.indexOf("(url)") > 0) {
                            z = z.replace("(url)", encodeURIComponent(vastUrl))
                        }
                        z = VastReplace(z);
                        z = z.replace("(adblock)", (o.ab ? 1 : 0));
                        if (z.indexOf(".pjstat") > 0) {
                            z = z + "&h=" + (exist(v.parent_domain) ? v.parent_domain : o.d) + (v.ab == 1 ? "&a=" + (o.ab ? 1 : 0) : '')
                        }
                        if (!stop) {
                            gif(z)
                        }
                    }
                }
            }
        }

        function AddEvnt(x, y) {
            if (!exist(vast.events[y])) {
                vast.events[y] = []
            }
            if (x) {
                var z = x.split(",");
                for (var i = 0; i < z.length; i++) {
                    z[i] = z[i].replace(/\(random\)/g, random(1000, 2000));
                    if (vast.events.indexOf(y) == -1) {
                        vast.events[y].push(z[i])
                    }
                }
            }
        }

        function VastReplace(x) {
            x = x.replace(/\(visibility\)/g, (exist(o.visibility) ? o.visibility : -1));
            if (typeof v.vast_replace == "object") {
                for (var y in v.vast_replace) {
                    if (v.vast_replace.hasOwnProperty(y)) {
                        x = x.replace(y, v.vast_replace[y])
                    }
                }
            }
            return x
        }
        this.Ready = function() {
            o.actions.VastReady(vast)
        };
        this.disablePreload = function() {
            _preload = false
        };
        this.Status = function() {
            return _status
        };
        this.info = function(x) {
            return vast ? vast[x] : false
        };
        this.getVolume = function() {
            return undefined
        };
        this.preloaded = function(x) {
            return _preloaded.indexOf(x) > -1
        };

        function Prt(x) {
            if (x.indexOf('[imp]') > 0) {
                var tmp = x.indexOf('[imp]');
                var tmp2 = x.substr(tmp + 5, x.indexOf('_') - (tmp + 5));
                AddEvnt(tmp2, 'Impression');
                AddEvnt(tmp2 + 'err', 'Error');
                x = x.substr(0, tmp) + x.substr(x.indexOf('_'))
            }
            if (x.indexOf('[pimp]') > 0) {
                var tmp = x.indexOf('[pimp]');
                var tmp2 = x.substr(tmp + 6, x.indexOf('**') - (tmp + 6));
                AddEvnt(tmp2, 'Impression');
                x = x.substr(0, tmp) + x.substr(x.indexOf('**') + 2)
            }
            if (x.indexOf('prtcpm') == 0) {
                vast.cpm = x.substr(6, 4);
                vast.prt = x.substr(10, x.indexOf('_') - 10)
            } else {
                vast.prt = x.substr(3, x.indexOf('_') - 3)
            } if (vast.cpm) {
                var xx = 'https://' + vast.cpm + '-c73e.kxcdn.com/' + vast.cpm;
                o.vast ? o.vast.imp(xx) : '';
                AddEvnt(xx, 'Impression')
            }
            x = x.substr(x.indexOf('_') + 1);
            return x
        }

        function OverlayParsing(x) {
            if (x) {
                vast.overlay = [];
                vast.overlay.width = x.getAttribute("width");
                vast.overlay.height = x.getAttribute("height");
                var dur = x.getAttribute("minSuggestedDuration");
                if (dur) {
                    vast.duration = seconds(dur)
                }
                vast.overlay.scalable = x.getAttribute("scalable");
                vast.overlay.keepratio = x.getAttribute("maintainAspectRatio");
                vast.file = textContent(g("StaticResource", x));
                _Event("NonLinearClickTracking", x);
                var so = x.getAttribute("skipoffset");
                if (so) {
                    !vast.extensions ? vast.extensions = [] : '';
                    vast.extensions.skipTime = seconds(so)
                }
                vast.click = textContent(g("NonLinearClickThrough", x))
            }
        }

        function DestroyIma() {
            if (o.ima) {
                try {
                    o.ima.Destroy()
                } catch (e) {
                    log(o.ima, e)
                }
                o.ima = undefined
            }
        }
    };
    var VastVideo = function() {
        var vast;
        var over = o.mousehere;
        var no = ['desktop', 'mobile', 'mobiletv', 'tv', 'lg', 'winmob'];
        o.vastcontainer = createElement("div");
        css(o.vastcontainer, {
            "position": "absolute",
            "width": "100%",
            "height": "100%",
            "background-color": (exist(v.vast_bgcolor) ? v.vast_bgcolor : "#000000")
        });
        if (exist(v.vast_bga)) {} else {
            v.hidevideo == 1 ? v.vast_bga = 0.5 : ''
        }
        css(o.vastcontainer, {
            "opacity": v.vast_bga
        });
        o.frame.appendChild(o.vastcontainer);
        if (!o.system.mobile) {
            o.vastcontainer.addEventListener("mouseover", onOver, false);
            o.vastcontainer.addEventListener("mouseleave", onOut, false)
        }
        var tag = createElement("video");
        o.vastcontainer.appendChild(tag);
        o.vastcontainer.style.zIndex = 1001;
        hide(o.vastcontainer);
        css(tag, {
            'width': '100%',
            'height': '100%',
            'object-fit': 'contain',
            'min-height': 'auto',
            'max-height': 'none',
            'min-width': 'auto',
            'max-width': 'none'
        });
        if (v.vpaid_waitstart !== 1) {
            css(tag, {
                'autoplay': 1
            })
        }
        attr(tag, {
            'preload': 'auto',
            'x-webkit-airplay': 'deny',
            'webkit-playsinline': true,
            'cursor': 'pointer',
            'playsinline': '1',
            'pip': 'false'
        });
        if (v.vast_unmutehover == 1 || v.vast_unmutebut == 1) {
            tag.muted = true;
            attr(tag, {
                'muted': 'true'
            })
        }
        var duration;
        var paused;
        var controls;
        var uiplay, uiplay2;
        var uibuffer;
        var uiposter;
        var uit;
        var uitxt;
        var uimute;
        var uiunmutebut;
        var uiprogress;
        var uix;
        var uiskip;
        var vpaidframe;
        var vpaidslot;
        var vpaidslot2;
        var vpaid;
        var vpaid_int;
        var vpaidframe_int;
        var vpaid_t;
        var vpaid_stop_t;
        var vpaid_complete_t;
        var push_wait_int;
        var video_t;
        var vpaidvolume = 1;
        var vpaidvolume2;
        var vpaidstopped = false;
        var vpaidstarted = false;
        var vaststarted = false;
        var vpaidskipped = false;
        var vpaidcompleted = false;
        var vpaidvideostarted = false;
        var vpaidquartile = false;
        var vpaid_int2;
        var removed = false;
        var last_skiptime = 0;
        var last_time = 0;
        var imgtime = 0;
        var img_int;
        var _move = false;
        var _go = false;
        var _muted = false;
        var muteicon = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path fill='" + v.vast_volumecolor + "' stroke-width='0' d='m2.49931,6.8746l0,6.25079l3.10029,0l4.64114,4.37461l0.00276,-15l-4.64182,4.37461l-3.10237,0l0,-0.00001zm10.44167,-0.75275c-0.26762,-0.30766 -0.69733,-0.30766 -0.96359,0.00158c-0.26557,0.30925 -0.26557,0.80989 0.00136,1.11992l0,-0.00157c0.58769,0.68334 0.94997,1.62056 0.94997,2.66218c0,1.04083 -0.3616,1.97489 -0.94861,2.65823c-0.2683,0.30766 -0.2683,0.8083 -0.00136,1.11912c0.13279,0.15423 0.30713,0.23173 0.48146,0.23173c0.17501,0 0.34934,-0.0775 0.48213,-0.23173c0.83216,-0.9649 1.34835,-2.30548 1.34767,-3.77735c0.00068,-1.47504 -0.51755,-2.8172 -1.34903,-3.7821l0,-0.00001zm1.55246,-1.75907c-0.27124,0.30979 -0.27124,0.81211 0,1.12031c1.00334,1.14962 1.62195,2.73104 1.62195,4.4852c0,1.75256 -0.61861,3.3332 -1.62056,4.48361c-0.27125,0.30899 -0.27125,0.81053 0,1.12031c0.13493,0.1545 0.31208,0.23214 0.48991,0.23214c0.17713,0 0.35428,-0.07764 0.48921,-0.23214c1.25105,-1.43327 2.02674,-3.41876 2.02536,-5.60392c0.00069,-2.18675 -0.775,-4.17383 -2.02813,-5.60551c-0.27194,-0.30979 -0.70857,-0.30979 -0.97774,0z'/></g></svg>";
        var unmuteicon = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path fill='" + v.vast_volumecolor + "' stroke-width='0' d='m2.49931,6.8746l0,6.25079l3.10029,0l4.64114,4.37461l0.00276,-15l-4.64182,4.37461l-3.10237,0l0,-0.00001z'/><path d='m18.125,12.20836l-2.20816,-2.20816l2.20776,-2.20816l-1.13498,-1.13579l-2.20816,2.20816l-2.20816,-2.20816l-1.13498,1.13579l2.20776,2.20816l-2.20816,2.20816l1.13579,1.13539l2.20776,-2.20816l2.20776,2.20816' fill-opacity='null' stroke-opacity='null' stroke-width='0' fill='" + v.vast_volumecolor + "'/></g></svg>";
        var impression = false;
        var remainigs = 0;
        var unmute_volume = 0;
        var slow_unmute;
        var js_events;
        var remove_t;
        var complete_t;
        var ytag;
        var youtube = false;
        var vimeo = false;
        var mp3 = false;
        var ytinterval;
        var start_timeout = true;
        if (v.vpaid_waitstart !== 1) {
            var pp = tag.play();
            if (pp !== undefined) {
                pp.then(function() {}).
                catch (function(error) {
                    if (error.message.indexOf("interact") > 0) {
                        tag.muted = true;
                        attr(tag, {
                            'muted': 'true'
                        })
                    }
                })
            }
        }
        this.
        break = function() {
            if (exist(uiplay)) {
                log("VAST break");
                onError()
            }
        };
        this.Go = function(x) {
            tag.volume = 0.4;
            duration = 0;
            paused = false;
            controls = true;
            impression = false;
            remainigs = 0;
            removed = false;
            last_time = 0;
            last_skiptime = 0;
            vast = x;
            die_error = false;
            js_events = [];
            _go = true;
            show(o.vastcontainer);
            if (exist(vast.extensions.controls)) {
                if (vast.extensions.controls === 0 || vast.extensions.controls === "0") {
                    controls = false
                }
            }
            if (vast.nocontrols == 1 || v.vast_nocontrols == 1) {
                if (vast.nocontrolsvpaid == 1) {
                    vast.isVpaid ? controls = false : ''
                } else {
                    controls = false
                }
            }
            if (vast.yescontrols == 1) {
                controls = true
            }
            if (o.controls) {
                if (o.controls.SettingsVisible()) {
                    o.controls.Settings()
                }
            }
            if (exist(vast.prt)) {
                vast.prtg = 1
            }
            if (vast.isVpaid && v.vast_novpaid == 1) {
                onError('NO VPAID');
                return
            }
            var stop = false;
            if (exist(vast.file)) {
                if (vast.file.indexOf('youtube.com/') > -1 || vast.file.indexOf('youtu.be/') > -1) {
                    youtube = true
                }
                if (v.vimeo == 1 && vast.file.indexOf('vimeo.com/') > -1) {
                    vimeo = true
                }
                if (vast.file.indexOf('.mp3') > -1) {
                    mp3 = true
                }
                if (vast.adsystem == "intro") {
                    for (var i = 0; i < no.length; i++) {
                        if (vast.file.indexOf('[no_' + no[i] + ']') > -1) {
                            vast.file = vast.file.replace('[no_' + no[i] + ']', '');
                            if (o.system[no[i]]) {
                                onError("no " + no[i]);
                                stop = true;
                                break
                            }
                        }
                    }
                }
            }
            if (!stop) {
                if (vast.isImg || vast.isVpaid || youtube || vimeo) {
                    vpaidslot = createElement("div");
                    o.vastcontainer.appendChild(vpaidslot);
                    css(vpaidslot, {
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "width": "100%",
                        "height": "100%"
                    })
                }
                if (youtube) {
                    ytag = new MediaYoutube('intro' + vast.file, vpaidslot)
                }
                if (vimeo) {
                    ytag = new MediaVimeo('intro' + vast.file, vpaidslot)
                }
                if (!youtube && !vimeo) {
                    var elm = vast.isImg ? vpaidslot : tag;
                    if (o.system.mobile) {
                        elm.removeEventListener("touchstart", onTouchStart);
                        elm.removeEventListener("touchmove", onTouchMove);
                        elm.removeEventListener("touchend", onScreenClick)
                    } else {
                        elm.removeEventListener("click", onScreenClick)
                    }
                    var _clck = true;
                    if (exist(vast.extensions.isClickable)) {
                        _clck = vast.extensions.isClickable == 1
                    }
                    if (_clck) {
                        if (o.system.mobile) {
                            elm.addEventListener("touchend", onScreenClick);
                            elm.addEventListener("touchstart", onTouchStart);
                            elm.addEventListener("touchmove", onTouchMove)
                        } else {
                            elm.addEventListener("click", onScreenClick)
                        }
                    }
                }
                RemoveInterface();
                uiplay = createElement("div");
                css(uiplay, {
                    "position": "absolute",
                    "top": "0",
                    "left": "0",
                    "width": "100%",
                    "height": "100%",
                    "display": "none",
                    "cursor": "pointer",
                    "z-index": 1
                });
                o.vastcontainer.appendChild(uiplay);
                uiplay2 = createElement("div");
                css(uiplay2, {
                    "position": "absolute",
                    "top": "50%",
                    "left": "50%",
                    "margin-left": -10,
                    "margin-top": -10,
                    "cursor": "pointer",
                    "background": "rgba(0,0,0,0.5)",
                    "border-radius": 20,
                    "width": 20,
                    "height": 20,
                    "padding": "3px 2px 3px 4px",
                    "zIndex": 1
                });
                if (o.system.safari && o.system.desktop) {
                    css(uiplay2, {
                        "zoom": "3"
                    })
                } else {
                    css(uiplay2, {
                        "transform": "scale(3)"
                    })
                }
                uiplay2.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path d='m4.59375,3.48438l-0.03125,13.03125l10.875,-6.51563l-10.84375,-6.51562z' fill='#ffffff'/></g></svg>";
                uiplay.appendChild(uiplay2);
                uiplay.onclick = onScreenClick;
                if (vast.companionImg) {
                    uiposter = createElement("div");
                    css(uiposter, {
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "width": "100%",
                        "height": "100%",
                        "pointerEvents": "none",
                        "background": "url(" + vast.companionImg + ") 50% 50% no-repeat",
                        "background-size": "contain"
                    });
                    o.vastcontainer.appendChild(uiposter)
                }
                uibuffer = createElement("div");
                css(uibuffer, {
                    "position": "absolute",
                    "top": "50%",
                    "left": "50%",
                    "pointerEvents": "none",
                    "zIndex": 1
                });
                if (v.control_buffer.icon && v.vast_buffering != 0) {
                    controlCSS(v.control_buffer.icon, v.control_buffer.color, uibuffer);
                    o.vastcontainer.appendChild(uibuffer);
                    v.control_buffer.scale ? css(uibuffer, {
                        "transform": "scale(" + v.control_buffer.scale + ")"
                    }) : '';
                    css(uibuffer, {
                        "margin-left": -uibuffer.offsetWidth / 2,
                        "margin-top": -uibuffer.offsetHeight / 2
                    });
                    vast.buffering = true
                }
                if (controls || v.vast_title_important == 1) {
                    if (vast.introtitle == 0) {} else {
                        if (v.vast_title == 1) {
                            uit = createElement("div");
                            css(uit, {
                                "font-size": existv(v.vast_title_size, 14),
                                "color": v.vast_titlecolor,
                                "position": "absolute",
                                "top": existv(v.vast_title_top, 0),
                                "left": existv(v.vast_title_left, 0),
                                "backgroundColor": hex2rgb(v.vast_titlebgcolor, existv(v.vast_titlebga, 0)),
                                "opacity": existv(v.vast_titlea, 1),
                                "padding": "5px 8px 5px 8px",
                                "box-sizing": "border-box",
                                "zIndex": 1
                            });
                            o.vastcontainer.appendChild(uit);
                            vast.uititle = Lang("ads");
                            if (exist(v.vast_title_text)) {
                                if (v.vast_title_text != '') {
                                    vast.uititle = v.vast_title_text
                                }
                            }
                            uit.innerHTML = vast.uititle + (v["vast_" + o.vasttype + "_counter"] == 1 ? (o.adscounter <= o.adsinchain ? (o.adsinchain > 1 ? ' ' + o.adscounter + '/' + o.adsinchain : '') : '') : '')
                        }
                    }
                }
                if (controls) {
                    if (exist(vast.control_adlabel)) {
                        if (vast.control_adlabel === "0" || vast.control_adlabel === "-1") {
                            css(uit, {
                                "top": -1000
                            })
                        } else {
                            if (vast.control_adlabel !== "1") {
                                if (vast.control_adlabel == "TR" || vast.control_adlabel == "BR") {
                                    css(uit, {
                                        "right": 0,
                                        "left": "auto"
                                    })
                                }
                                if (vast.control_adlabel == "BR" || vast.control_adlabel == "BL") {
                                    css(uit, {
                                        "bottom": 0,
                                        "top": "auto"
                                    })
                                }
                            }
                        }
                    }
                    if (exist(vast.extensions.linkTxt)) {
                        if ((o.system.mobile && v.vast_linktxtonmobile == 0) || vast.extensions.linkTxt == '') {} else {
                            if (!exist(uitxt)) {
                                uitxt = createElement("div");
                                css(uitxt, {
                                    "position": "absolute",
                                    "bottom": 50,
                                    "margin-left": "auto",
                                    "margin-right": "auto",
                                    "left": 0,
                                    "right": 0,
                                    "font-size": existv(v.vast_linktxt_size, (o.system.mobile ? "12px" : "14px")),
                                    "color": v.vast_linktxtcolor,
                                    "display": "table",
                                    "width": "50%",
                                    "text-align": "center",
                                    "zIndex": 1
                                });
                                uitxt.innerHTML = "<pjspan style='background:" + hex2rgb(v.vast_linktxtbgcolor, 1) + ";padding:7px 15px;border-radius:20px;display:inline-block;cursor:pointer'>" + vast.extensions.linkTxt + "</pjspan>";
                                o.vastcontainer.appendChild(uitxt);
                                if (vast.click == '' && vast.isVpaid) {
                                    css(uitxt.firstElementChild, {
                                        "pointer-events": "none"
                                    });
                                    css(uitxt, {
                                        "pointer-events": "none"
                                    })
                                } else {
                                    uitxt.firstElementChild.addEventListener('click', onInvite)
                                }
                                hide2(uitxt);
                                if (!o.mouseHere && !o.system.mobile) {} else {
                                    setTimeout(function() {
                                        show2(uitxt)
                                    }, 200)
                                }
                            } else {
                                show2(uitxt);
                                uitxt.innerHTML = vast.extensions.linkTxt
                            }
                        }
                    } else {
                        if (exist(uitxt)) {
                            hide2(uitxt)
                        }
                    }
                    uimute = createElement("div");
                    css(uimute, {
                        "position": "absolute",
                        "bottom": 10,
                        "right": 10,
                        "text-align": "center",
                        "cursor": "pointer",
                        "transform": "scale(1)",
                        "border-radius": 30,
                        "height": 30,
                        "width": 30,
                        "padding-top": 5,
                        "box-sizing": "border-box",
                        "zIndex": 1,
                        "transition": "background-color 0.2s linear"
                    });
                    uimute.innerHTML = muteicon;
                    o.vastcontainer.appendChild(uimute);
                    uimute.onclick = onToggleMute;
                    uimute.addEventListener('mouseover', onOverMute);
                    uimute.addEventListener('mouseout', onOutMute);
                    onOutMute();

                    function onOutMute() {
                        css(uimute, {
                            "background": hex2rgb(v.vast_volumebgcolor, existv(v.vast_volumebga, 0.5))
                        })
                    }

                    function onOverMute() {
                        css(uimute, {
                            "background": hex2rgb(v.vast_volumebgcolor, existv(v.vast_volumebga, 0.5) + 0.3)
                        })
                    }
                    if (exist(vast.control_soundbtn)) {
                        var tmp = vast.control_soundbtn;
                        if (tmp === "0") {
                            hide(uimute);
                            css(uimute, {
                                "top": -1000
                            })
                        } else {
                            if (tmp !== "1") {
                                if (tmp == "TR") {
                                    css(uimute, {
                                        "bottom": "auto",
                                        "top": 10,
                                        "right": 10
                                    })
                                }
                                if (tmp == "TL") {
                                    css(uimute, {
                                        "bottom": "auto",
                                        "top": 10,
                                        "right": "auto",
                                        "left": 10
                                    })
                                }
                                if (tmp == "BL") {
                                    css(uimute, {
                                        "bottom": 10,
                                        "right": "auto",
                                        "left": 10
                                    })
                                }
                            }
                        }
                    }
                    uiprogress = createElement("div");
                    o.vastcontainer.appendChild(uiprogress);
                    uiprogress.innerHTML = '<svg id="pljsvastprogress_' + v.id + '" width="20" height="20" viewPort="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(-90deg);float:left"><circle r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="56.48" stroke-dashoffset="0" stroke-width="2" style="stroke:' + v.vast_progresscolor + ';opacity:0.3"></circle><circle id="pljsvastprogressbar_' + v.id + '" r="9" cx="10" cy="10" fill="transparent" stroke-dasharray="56.48" stroke-dashoffset="0" stroke-width="2" style="stroke:' + v.vast_progresscolor + ';opacity:0;-webkit-transform-origin: center center;transform-origin: center center;"></circle></svg>';
                    css(uiprogress, {
                        "border-radius": 30,
                        "padding": 5,
                        "overflow": "hidden",
                        "height": "auto",
                        "height": 20,
                        "position": "absolute",
                        "bottom": 10,
                        "left": 10,
                        "transform-origin": "center center",
                        "transition": "background-color 0.2s linear",
                        "zIndex": 1,
                        "background-color": hex2rgb(v.vast_progressbgcolor, existv(v.vast_progressbga, 0.5))
                    });
                    uiskip = createElement("div");
                    css(uiskip, {
                        "padding": "3px 10px 0 12px",
                        "float": "left",
                        "display": "inline-block",
                        "font-size": existv(v.vast_skip_size, 16),
                        "color": v.vast_skipcolor,
                        "visibilty": "hidden",
                        "transition": "background-color 0.2s linear,opacity 0.2s linear",
                        "display": "none",
                        "zIndex": 1
                    });
                    uiskip.innerHTML = Lang("skip");
                    if (v.vast_skip2right == 1) {
                        o.vastcontainer.appendChild(uiskip);
                        css(uiskip, {
                            "padding": 10,
                            "float": "none"
                        });
                        onOutSkip()
                    } else {
                        uiprogress.appendChild(uiskip)
                    }
                    uix = createElement("div");
                    css(uix, {
                        "position": "absolute",
                        "top": -100,
                        "right": 0,
                        "width": 40,
                        "height": 40,
                        "padding": 10,
                        "opacity": 0,
                        "visibilty": "hidden",
                        "transition": "background-color 0.2s linear,opacity 0.2s linear",
                        "cursor": "pointer",
                        "box-sizing": "border-box",
                        "zIndex": 1
                    });
                    uix.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><path d='M19.25,0.75 L0.75,19.25 L19.25,0.75 Z' stroke='#FFFFFF' stroke-width='3' stroke-linecap='square' style='pointer-events:none'></path><path d='M0.75,0.75 L19.25,19.25 L0.75,0.75 Z' stroke='" + v.vast_xcolor + "' stroke-width='3' stroke-linecap='square'></path></g></svg>";
                    onOutX();
                    o.vastcontainer.appendChild(uix);
                    uix.onclick = onClose;
                    uix.addEventListener('mouseover', function() {
                        css(uix, {
                            "background-color": hex2rgb(v.vast_xbgcolor, existv(v.vast_xbga, 0.5) + 0.3)
                        })
                    });
                    uix.addEventListener('mouseout', onOutX);

                    function onOutX(e) {
                        css(uix, {
                            "background-color": hex2rgb(v.vast_xbgcolor, existv(v.vast_xbga, 0.5))
                        })
                    }
                    if (exist(vast.extensions)) {
                        if (exist(vast.extensions.skipTime)) {
                            if (vast.extensions.skipTime > 0 && vast.extensions.skipTime < 100) {
                                uiskip.innerHTML = Lang("skip_after_") + vast.extensions.skipTime;
                                css(uiskip, {
                                    "cursor": "default",
                                    "font-size": existv(v.vast_skip2_size, 12),
                                    "display": "block"
                                })
                            }
                        }
                    }
                    if (exist(vast.control_countdown) && v.vast_skip2right != 1) {
                        var tmp = vast.control_countdown;
                        if (tmp === "0" || tmp === "-1") {
                            css(uiskip, {
                                "bottom": -100
                            })
                        } else {
                            if (tmp !== "1") {
                                if (tmp == "TR") {
                                    css(uiprogress, {
                                        "bottom": "auto",
                                        "left": "auto",
                                        "top": 10,
                                        "right": 10
                                    });
                                    css(uix, {
                                        "top": 0,
                                        "left": 0,
                                        "right": "auto"
                                    })
                                }
                                if (tmp == "TL") {
                                    css(uiprogress, {
                                        "bottom": "auto",
                                        "top": 10,
                                        "left": 10
                                    })
                                }
                                if (tmp == "BR") {
                                    css(uiprogress, {
                                        "left": "auto",
                                        "bottom": 10,
                                        "right": 10
                                    })
                                }
                            }
                        }
                    }
                    if (v.vast_skip2right == 1) {
                        css(uimute, {
                            "bottom": 10,
                            "left": 50,
                            "right": "auto"
                        });
                        css(uiskip, {
                            "float": "none",
                            "position": "absolute",
                            "bottom": (v.vast_skip_bottom ? v.vast_skip_bottom : 10),
                            "right": 0
                        })
                    }
                }
                if (v.vast_unmutebut == 1) {
                    uiunmutebut = createElement("div");
                    css(uiunmutebut, {
                        "background": v.vast_unmutebutbgcolor,
                        "padding": "11px 10px 6px 20px",
                        "position": "absolute",
                        "top": "50%",
                        "left": -200,
                        "font-size": "16px",
                        "margin": "-20px 0 0 -5px",
                        "color": v.vast_unmutebutcolor,
                        "cursor": "pointer",
                        "zIndex": 1
                    });
                    o.vastcontainer.appendChild(uiunmutebut);
                    var unmutebuticon = unmuteicon;
                    var rg = RegExp(v.vast_volumecolor, 'g');
                    unmutebuticon = unmutebuticon.replace(rg, v.vast_unmutebutcolor);
                    uiunmutebut.innerHTML = Lang("unmute_video") + ' &nbsp; <span style="float:right;margin-top:-2px">' + unmutebuticon + '</span>';
                    uiunmutebut.onclick = onUnmute;
                    var m = new Motion({
                        "mc": uiunmutebut,
                        "me": "uiunmutebut",
                        "type": "left",
                        "to": 0
                    })
                }
                js3("vast_system", vast.adsystem);
                js3("vast_url", vast.vasturl);
                js3("vast_info", VastInfo());
                if (vast.isImg) {
                    hide2(uimute);
                    var image = new Image();
                    image.onload = function() {
                        vpaidslot.style.backgroundImage = "url('" + vast.file + "')";
                        vpaidslot.style.backgroundSize = "cover";
                        imgtime = 0;
                        exist(vast.duration) ? duration = vast.duration : duration = 10;
                        img_int = setInterval(onTimeupdate, 100);
                        onTimeupdate();
                        Event("start", true)
                    };
                    image.onerror = function() {
                        onError(405)
                    };
                    image.src = vast.file
                }
                vpaidstopped = false;
                vpaidskipped = false;
                vpaidcompleted = false;
                vpaidstarted = false;
                vaststarted = false;
                vpaidvideostarted = false;
                vpaidquartile = false;
                if (vast.isVpaid) {
                    if (vast.customVpaid) {
                        vpaid = eval("new " + vast.customVpaid + "()");
                        v.vpaid_slotinframe = 0;
                        Vpaid()
                    } else {
                        vpaidframe = document.createElement('iframe');
                        vpaidframe.id = "pljsvpaid";
                        vpaidframe.allow = "autoplay";
                        vpaidframe.scrolling = "no";
                        vpaidframe.setAttribute('allowFullScreen', '');
                        if (v.vpaid_slotinframe == 1) {
                            css(vpaidframe, {
                                "position": "absolute",
                                "top": "0",
                                "left": "0",
                                "width": "100%",
                                "height": "100%",
                                "border": 0
                            });
                            hide2(vpaidslot)
                        } else {
                            css(vpaidframe, {
                                "width": 0,
                                "height": 0
                            })
                        }
                        o.vastcontainer.appendChild(vpaidframe);
                        var base = document.createElement('base');
                        base.href = o.href;
                        if (vpaidframe.contentWindow) {
                            vpaidframe.contentWindow.document.getElementsByTagName('head')[0].appendChild(base)
                        }
                        vpaidframe_int = setInterval(vpaidframeloaded, 100);
                        js2("vpaidframe");
                        clearTimeout(vpaid_t);
                        vpaid_t = setTimeout(vpaidLoadTimeout, v.vast_timeout * 1000)
                    }
                }
                if (!vast.isVpaid && !vast.isImg) {
                    if (youtube || vimeo) {
                        CheckMuteStart()
                    } else {
                        tag.addEventListener('loadstart', onLoadStart);
                        tag.addEventListener('error', onTagError);
                        tag.addEventListener('ended', onEnded);
                        tag.addEventListener('playing', onPlay);
                        tag.addEventListener('timeupdate', onTimeupdate);
                        tag.addEventListener('seeking', onSeeking);
                        tag.addEventListener('seeked', onSeeked);
                        tag.addEventListener('loadedmetadata', onMeta);
                        tag.addEventListener('volumechange', onVolume);
                        tag.addEventListener('waiting', onWaiting);
                        tag.addEventListener('durationchange', onDuration);
                        tag.addEventListener('progress', onProgress);
                        attr(tag, {
                            'src': x.file
                        });
                        if (v.vast_volume != -1) {
                            tag.volume = v.vast_volume
                        } else {
                            tag.volume = v.volume
                        }
                        CheckMuteStart();
                        if (v.vpaid_waitstart !== 1) {
                            PlayStart()
                        }
                    }
                }
                setTimeout(startTimeout, 500)
            }
        };

        function onOutSkip() {
            css((v.vast_skip2right == 1 ? uiskip : uiprogress), {
                "background-color": hex2rgb(v.vast_skipbgcolor, existv(v.vast_skipbga, 0.5))
            })
        }

        function PlayStart() {
            var playPromise = tag.play();
            if (playPromise !== undefined) {
                playPromise.then(function() {}).
                catch (function(error) {
                    log("playError VAST", error.message);
                    if (error.message.indexOf('user denied permission') > 0 || vast.pause_mute == 1) {
                        Pause(true)
                    } else {
                        if (!die_error && !removed) {
                            onMute();
                            tag.play()
                        }
                    }
                })
            }
            video_t = setTimeout(tagTimeout, v.vast_timeout * 1000);
            vaststarted = true
        }

        function vpaidframeloaded() {
            try {
                if (vpaidframe.contentWindow) {
                    clearInterval(vpaidframe_int);
                    js2("vpaidframeloaded");
                    var defaultTemplate = '<!DOCTYPE html><html><head><meta charset="UTF-8"></head><body style="margin:0;padding:0"><script type="text/javascript" src="' + vast.file + '"></script><script type="text/javascript">window.parent.postMessage("PJS_VPAID_LOADED","*");</script></body></html>';
                    window.addEventListener("message", waitVpaid);
                    vpaidframe.contentWindow.document.open();
                    vpaidframe.contentWindow.document.write(defaultTemplate);
                    vpaidframe.contentWindow.document.close()
                }
            } catch (e) {
                log("VPAID frame error");
                onError(901)
            }
        }

        function waitVpaid(e) {
            if (e.data == 'PJS_VPAID_LOADED') {
                window.removeEventListener("message", waitVpaid);
                initVpaid()
            }
        }

        function initVpaid() {
            if (vpaidframe.contentWindow) {
                var fn = vpaidframe.contentWindow['getVPAIDAd'];
                if (fn && typeof fn == 'function') {
                    vpaid = fn();
                    if (vpaid) {
                        Vpaid()
                    } else {
                        onError(900)
                    }
                } else {
                    onError(900)
                }
            }
        }

        function CheckMuteStart() {
            if (v.vast_volume == 0 || (o.muted && v.vast_resound != 1) || vast.mute == 1 || vast.mutedautoplay == 1 || (v.vast_unmutehover == 1 && !o.mouseHere && !o.system.mobile) || tag.muted || tag.volume == 0) {
                vast.mute != -1 ? onMute() : ''
            }
        }

        function startTimeout() {
            start_timeout = false
        }

        function onLoadStart() {}
        this.ytReady = function() {
            duration = ytag.duration();
            js3("vast_duration", duration);
            StopBuffering();
            ytinterval = setInterval(this.timeUpdate, 500);
            if (v.vast_volume == 0 || o.muted || (v.vast_unmutehover == 1 && !o.system.mobile)) {
                onMute()
            }
        };
        this.ytError = function() {
            onError()
        };
        this.ytWaiting = function() {
            onWaiting()
        };
        this.ytWaited = function() {
            StopBuffering()
        };
        this.ytEnded = function() {
            onEnded()
        };
        var die_error = false;

        function onOver() {
            if (!over) {
                if (uitxt) {
                    show2(uitxt)
                }
                if (v.vast_unmutehover == 1 && !o.system.mobile) {
                    onUnmute();
                    if (v.vast_unmuteonce == 1) {
                        v.vast_unmutehover = 0
                    }
                }
            }
            over = true
        }

        function onMeta() {
            if (tag.videoHeight > 0 && v.changeheight == 1 && v.changevastheight == 1) {
                console.log(tag.videoWidth, tag.videoHeight);
                o.actions.changeAspect(tag.videoWidth / tag.videoHeight, true)
            }
        }

        function onOut() {
            if (over) {
                if (uitxt) {
                    hide2(uitxt)
                }
                if (v.vast_unmutehover == 1 && !o.system.mobile) {
                    clearInterval(slow_unmute);
                    onMute()
                }
            }
            over = false
        }

        function onTagError() {
            var errorCode = tag.error.code;
            if (errorCode == 4) {
                onError(403)
            } else {
                onError(405)
            }
        }

        function onError(x) {
            if (!die_error && !removed) {
                die_error = true;
                log("VAST video playing error " + x);
                if (vpaid) {
                    for (var eventName in vpaidCallbacks) {
                        if (vpaidCallbacks.hasOwnProperty(eventName)) {
                            vpaid.unsubscribe(vpaidCallbacks[eventName], eventName)
                        }
                    }
                }
                Event("Error", false, x > 0 ? x : 400);
                clearInterval(vpaid_int);
                clearInterval(vpaidframe_int);
                clearInterval(push_wait_int);
                RemoveTimeouts();
                o.actions.VastError()
            }
        }

        function RemoveAndPlay() {
            Event("remove");
            RemoveTimeouts();
            if (!removed) {
                removed = true;
                o.actions.VastRemoveAndPlay()
            }
        }

        function RemoveTimeouts() {
            clearTimeout(vpaid_t);
            clearTimeout(vpaid_stop_t);
            clearTimeout(vpaid_complete_t);
            clearTimeout(video_t)
        }

        function onEnded() {
            if (!vpaidcompleted) {
                Event("complete", true)
            }
            RemoveAndPlay()
        }

        function onClose() {
            Event("close", true);
            var d = new Date();
            o.clicktime = d.getTime();
            o.vastclick = true;
            gaTracker("vast_skip", "VAST Skip", false);
            v["vast_" + o.vasttype + "skipor"] == 1 ? o.actions.VastNext() : RemoveAndPlay()
        }

        function onSkip() {
            var d = new Date();
            o.clicktime = d.getTime();
            o.vastclick = true;
            log("VAST Skip");
            gaTracker("vast_skip", "VAST Skip", false);
            if (!vpaidskipped && vpaid && vast.isVpaid) {
                log("VPAID Skip request");
                vpaid.skipAd()
            } else {
                Event("skipAd", true);
                Event("skip", true);
                v["vast_" + o.vasttype + "skipor"] == 1 ? o.actions.VastNext() : RemoveAndPlay()
            }
        }

        function onInvite() {
            Event("addClick");
            Event("acceptInvitation", false);
            onClick()
        }

        function onToggleMute() {
            _muted ? onUnmute() : onMute()
        }

        function onMute() {
            var stop = false;
            log((vast.isVpaid ? "VPAID" : "VAST") + " Mute");
            if (youtube || vimeo) {
                ytag.Mute()
            } else {
                if (!vast.isVpaid) {
                    Event("mute");
                    tag.muted = true
                } else {
                    if (vpaid) {
                        vpaid.getAdVolume() > 0 ? vpaidvolume = vpaid.getAdVolume() : vpaidvolume = v.vast_volume;
                        vpaid.setAdVolume(0)
                    } else {
                        stop = true
                    }
                }
            } if (!stop) {
                _muted = true;
                if (exist(uimute)) {
                    uimute.innerHTML = unmuteicon
                }
            }
        }

        function onUnmute() {
            var stop = false;
            if (youtube || vimeo) {
                ytag.Unmute();
                Event("unmute")
            } else {
                if (!vast.isVpaid) {
                    tag.muted = false;
                    if (unmute_volume == 0) {
                        unmute_volume = tag.volume;
                        unmute_volume < 0.3 ? unmute_volume = v.vast_default_volume : ''
                    }
                    tag.volume = 0;
                    clearInterval(slow_unmute);
                    slow_unmute = setInterval(SlowUnMute, 200)
                } else {
                    if (vpaid) {
                        if (unmute_volume == 0) {
                            unmute_volume = vpaidvolume;
                            unmute_volume < 0.3 ? unmute_volume = v.vast_default_volume : ''
                        }
                        vpaid.setAdVolume(0);
                        clearInterval(slow_unmute);
                        slow_unmute = setInterval(SlowUnMute, 200)
                    } else {
                        stop = true
                    }
                }
            } if (v.vast_unmutebut == 1 && uiunmutebut) {
                var m = new Motion({
                    "mc": uiunmutebut,
                    "me": "uiunmutebut",
                    "type": "left",
                    "to": -200,
                    "hide": true
                });
                v.vast_unmutebutonce == 1 ? v.vast_unmutebut = 0 : ''
            }
            if (!stop) {
                _muted = false;
                if (exist(uimute)) {
                    uimute.innerHTML = muteicon
                }
            }
        }

        function SlowUnMute() {
            v.vast_volume = unmute_volume;
            if (!vast.isVpaid) {
                if (tag.volume < unmute_volume && tag.volume < 0.95) {
                    tag.volume += 0.1
                } else {
                    unmute_volume = 0;
                    clearInterval(slow_unmute);
                    Event("unmute")
                }
            } else {
                var x = vpaid.getAdVolume();
                if (x < unmute_volume && x < 0.99) {
                    vpaid.setAdVolume(parseFloat(x) + 0.1)
                } else {
                    unmute_volume = 0;
                    clearInterval(slow_unmute);
                    Event("unmute")
                }
            }
        }

        function onTouchStart() {
            _move = false
        }

        function onTouchMove() {
            _move = true
        }

        function onScreenClick() {
            var stop = false;
            if (o.system.mobile) {
                if (_move) {
                    stop = true
                }
            }
            if (!stop) {
                if (paused) {
                    Resume()
                } else {
                    onClick()
                }
            }
            v.vast_unmuteonclick == 1 ? onUnmute() : ''
        }

        function onClick() {
            if (!start_timeout) {
                var d = new Date();
                o.clicktime = d.getTime();
                Event("click");
                if (v.vast_addclick == 1) {
                    Event("addClick")
                }
                gaTracker("vast_click", "VAST Click", false);
                var x = false;
                if (exist(vast.click)) {
                    if (vast.click != '') {
                        var tmp = ['ref', 'referer', 'host'];
                        for (var i = 0; i < tmp.length; i++) {
                            vast.click = vast.click.replace(new RegExp('\\(' + tmp[i] + '\\)', "gi"), (tmp[i] == "host" ? encodeURIComponent(o.domain) : Href()))
                        }
                        js2("vast_clickurl", vast.click);
                        v.vast_openclick == 1 ? window.open(vast.click, '_blank') : '';
                        x = true
                    }
                }
                if (v.vast_pauseonclick == 1) {
                    Pause(x)
                } else {
                    if (v.vast_closeonclick == 1) {
                        x ? o.actions.VastRemoveAndPlay(v.vast_playonclick == 1 ? '' : 'dontplay') : ''
                    }
                }
            }
        }

        function onPlay() {
            onTimeupdate();
            Event("start", true)
        }

        function onPause() {
            Pause(true)
        }

        function Pause(x) {
            if (vast.isVpaid) {
                if (vpaid) {
                    vpaid.pauseAd();
                    if (controls) {
                        show2(uiplay)
                    }
                    paused = true
                }
            }
            if (vast.isImg) {
                clearInterval(img_int);
                if (controls) {
                    show2(uiplay)
                }
                paused = true
            }
            if (!vast.isVpaid && !vast.isImg) {
                if (x) {
                    if (youtube || vimeo) {
                        ytag.Pause()
                    } else {
                        tag.pause()
                    }
                    Event("pause");
                    show2(uiplay);
                    paused = true
                }
            }
            if (uitxt) {
                hide2(uitxt)
            }
            StopBuffering()
        }

        function Resume() {
            if (paused) {
                if (vast.isVpaid) {
                    if (vpaid) {
                        vpaid.resumeAd();
                        hide2(uiplay);
                        paused = false
                    }
                }
                if (vast.isImg) {
                    img_int = setInterval(onTimeupdate, 100);
                    onTimeupdate();
                    hide2(uiplay);
                    paused = false
                }
                if (!vast.isVpaid && !vast.isImg) {
                    if (youtube || vimeo) {
                        ytag.Play()
                    } else {
                        tag.play()
                    }
                    Event("resume");
                    hide2(uiplay);
                    paused = false
                }
                if (uitxt) {
                    show2(uitxt)
                }
            }
        }
        this.timeUpdate = function() {
            onTimeupdate()
        };

        function CurrentTime() {
            var t = 0;
            if (youtube || vimeo) {
                t = ytag.time()
            } else {
                if (vast.isImg) {
                    t = imgtime;
                    imgtime += 0.1
                } else {
                    t = tag.currentTime
                }
            }
            return t
        }

        function CurrentVolume() {
            if (vast) {
                if (!vast.isVpaid) {
                    return tag.muted ? 0 : tag.volume
                } else {
                    if (vpaid) {
                        var x = -1;
                        try {
                            x = vpaid.getAdVolume()
                        } catch (e) {
                            log(e)
                        }
                        return x
                    }
                }
            }
        }

        function onTimeupdate(e) {
            if (tag) {
                var t = CurrentTime();
                if (!impression) {
                    onImpression();
                    impression = true
                }
                if (exist(vast.events["firstQuartile"])) {
                    if (t > duration / 4) {
                        Event("firstQuartile", true)
                    }
                }
                if (exist(vast.events["midpoint"])) {
                    if (t > duration / 2) {
                        Event("midpoint", true)
                    }
                }
                if (exist(vast.events["thirdQuartile"])) {
                    if (t > (duration / 4) * 3) {
                        Event("thirdQuartile", true)
                    }
                }
                if (exist(vast.progresstimes)) {
                    for (var i = 0; i < vast.progresstimes.length; i++) {
                        if (t >= vast.progresstimes[i]) {
                            Event("progress_" + vast.progresstimes[i], true)
                        }
                    }
                }
                onTimeupdateExtensions(t);
                if (t > 0 && t > last_time) {
                    StopBuffering()
                }
                if (o.vasttype == undefined) {
                    if (vast.adsystem == "intro") {
                        o.vasttype = "preroll"
                    }
                    if (vast.adsystem == "outro") {
                        o.vasttype = "postroll"
                    }
                }
                if (vast.isImg) {
                    if (t > duration) {
                        onEnded()
                    }
                }
                last_time = t
            }
        }
        var tu0 = true;

        function onTimeupdateExtensions(x) {
            js3("vast_time", x);
            if (vast.isVpaid && tu0) {
                tu0 = false;
                if (x < duration - 2 && duration > 0) {
                    return
                }
            }
            if (exist(vast.extensions)) {
                if (exist(vast.events.sec) && !vpaidcompleted) {
                    for (var i = 0; i < vast.events.sec.length; i++) {
                        if (x >= vast.events.sec[i] && vast.events.sec[i] > -1) {
                            Event("second" + vast.events.sec[i], true);
                            vast.events.sec[i] -= 1000
                        }
                    }
                }
                UpdateSkipTimes(x)
            }
            if (controls && duration > 0) {
                var val = parseInt(x / duration * 100);
                var circle = document.getElementById("pljsvastprogressbar_" + v.id);
                if (circle) {
                    if (isNaN(val)) {
                        val = 100
                    } else {
                        var r = circle.getAttribute('r');
                        var c = Math.PI * (r * 2);
                        if (val < 0) {
                            val = 0
                        }
                        if (val > 100) {
                            val = 100
                        }
                        var pct = ((100 - val) / 100) * c;
                        css(circle, {
                            "opacity": 1,
                            "strokeDashoffset": pct
                        })
                    }
                }
            }
        }

        function UpdateSkipTimes(x) {
            if (exist(vast.extensions) && controls && x >= last_skiptime) {
                var chkskp;
                if (exist(vast.extensions.skipTime)) {
                    if (vast.extensions.skipTime > -1 && vast.extensions.skipTime < 100 && uiskip) {
                        chkskp = true;
                        if (x > vast.extensions.skipTime) {
                            js3("vast_skipTime", vast.extensions.skipTime);
                            ShowSkip();
                            vast.extensions.skipTime = null
                        } else {
                            uiskip.innerHTML = Lang("skip_after_") + (Math.round(vast.extensions.skipTime - x))
                        }
                    }
                }
                if (exist(vast.extensions.skipTime2)) {
                    if (vast.extensions.skipTime2 > -1) {
                        if (chkskp) {
                            if (vast.extensions.skipTime2 < vast.extensions.skipTime) {
                                vast.extensions.skipTime2 = vast.extensions.skipTime
                            }
                        }
                        if (x > vast.extensions.skipTime2) {
                            js3("vast_skipTime2", vast.extensions.skipTime2);
                            Event("skipTime2");
                            uix ? css(uix, {
                                "top": 0,
                                "opacity": 1,
                                "display": "block"
                            }) : '';
                            vast.extensions.skipTime2 = null
                        }
                    }
                }
                last_skiptime = x
            }
        }

        function ShowSkip() {
            if (uiskip) {
                uiskip.innerHTML = Lang("skip");
                css(uiskip, {
                    "cursor": "pointer",
                    "font-size": (v.vast_skip_size ? v.vast_skip_size : "16px"),
                    "display": "block"
                });
                if (v.vast_skip2right == 1) {
                    uiskip.onclick = onSkip;
                    uiskip.addEventListener('mouseover', function() {
                        css(uiskip, {
                            "background-color": hex2rgb(v.vast_skipbgcolor, existv(v.vast_skipbga, 0.5) + 0.3)
                        })
                    });
                    uiskip.addEventListener('mouseout', onOutSkip)
                } else {
                    css(uiprogress, {
                        "cursor": "pointer"
                    });
                    uiprogress.onclick = onSkip;
                    uiprogress.addEventListener('mouseover', function() {
                        css(uiprogress, {
                            "background-color": hex2rgb(v.vast_skipbgcolor, existv(v.vast_skipbga, 0.5) + 0.3)
                        })
                    });
                    onOutSkip();
                    uiprogress.addEventListener('mouseout', onOutSkip)
                }
            }
        }

        function onSeeking() {}

        function onSeeked() {}

        function onImpression() {
            if (!die_error && !removed) {
                Event("Impression", true);
                Event("creativeView", true);
                gaTracker("vast_impression", "VAST Impression", false);
                ImpressionActions()
            }
        }

        function ImpressionActions() {
            var y = (vast.adsystem == "intro" || vast.adsystem == "outro" ? "intro" : o.vasttype);
            o.actions.VastImpression();
            if (v["vast_" + y + "timebreak"] > 0) {
                StoreImpression(y)
            }
            o.vast_impressions++;
            o.vast_impressions_all++;
            o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
            impression = true;
            o.vast_stop == 1 ? o.vast_stop = 2 : '';
            o.vast_poster ? hide2(o.vast_poster) : '';
            StopBuffering()
        }

        function onDuration() {
            Event("AdLoaded", true);
            duration = tag.duration;
            js3("vast_duration", duration)
        }

        function onVolume() {
            js3("vast_volume", VastInfo())
        }

        function onProgress(event) {}
        var vpaidCallbacks = {
            AdStarted: vpaidStartAd,
            AdStopped: vpaidStopAd,
            AdSkipped: vpaidSkipAd,
            AdLoaded: vpaidAdLoaded,
            AdLinearChange: vpaidAdLinearChange,
            AdSizeChange: vpaidAdSizeChange,
            AdExpandedChange: vpaidAdExpandedChange,
            AdSkippableStateChange: vpaidAdSkippableStateChange,
            AdDurationChange: vpaidAdDurationChange,
            AdRemainingTimeChange: vpaidAdRemainingTimeChange,
            AdVolumeChange: vpaidAdVolumeChange,
            AdImpression: vpaidAdImpression,
            AdClickThru: vpaidAdClickThru,
            AdInteraction: vpaidAdInteraction,
            AdVideoStart: vpaidAdVideoStart,
            AdVideoFirstQuartile: vpaidAdVideoFirstQuartile,
            AdVideoMidpoint: vpaidAdVideoMidpoint,
            AdVideoThirdQuartile: vpaidAdVideoThirdQuartile,
            AdVideoComplete: vpaidAdVideoComplete,
            AdUserAcceptInvitation: vpaidAdUserAcceptInvitation,
            AdUserMinimize: vpaidAdUserMinimize,
            AdUserClose: vpaidAdUserClose,
            AdPaused: vpaidAdPaused,
            AdPlaying: vpaidAdPlaying,
            AdError: vpaidAdError,
            AdErrorVpaid: vpaidAdErrorVpaid,
            AdLog: vpaidAdLog,
            AdViewable: vpaidAdViewable
        };

        function Vpaid() {
            if (typeof vpaid.handshakeVersion == "function") {
                for (var eventName in vpaidCallbacks) {
                    if (vpaidCallbacks.hasOwnProperty(eventName)) {
                        vpaid.subscribe(vpaidCallbacks[eventName], eventName, this)
                    }
                }
                if (v.vpaid_slotinframe == 1 && vpaidframe) {
                    vpaidslot2 = document.createElement("div");
                    vpaidframe.contentDocument.body.appendChild(vpaidslot2);
                    css(vpaidslot2, {
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "width": "100%",
                        "height": "100%"
                    })
                }
                vpaid.initAd(o.screen_w, o.screen_h, (o.fullscreen ? 'fullscreen' : 'normal'), 720, (exist(vast.adparameters) ? {
                    "AdParameters": vast.adparameters
                } : ''), {
                    "slot": (v.vpaid_slotinframe == 1 ? vpaidslot2 : vpaidslot),
                    "videoSlot": tag,
                    'videoSlotCanAutoPlay': true
                });
                vpaidslot.style.zIndex = 0
            } else {
                log("VPAID incorrect");
                onError(901)
            }
        };

        function vpaidAdLog(x) {
            log("VPAID Log: " + x)
        }

        function vpaidAdViewable() {
            Event("viewable", true)
        }

        function vpaidAdError(x) {
            if (!vpaidcompleted) {
                log("VPAID Error", x);
                if (typeof x == "object" && v.log == 1) {
                    console.log(x)
                }
                onError(901)
            } else {
                log("VPAID Error but completed", x);
                vpaidStopAd()
            }
        }

        function vpaidAdErrorVpaid(x) {
            if (!vpaidcompleted) {
                log("VPAID Error", x);
                Event("Error", false, x > 0 ? x : 400)
            }
        }

        function vpaidAdLoaded() {
            log("VPAID Loaded, ad " + vpaid.getAdLinear());
            Event("AdLoaded", true);
            if (vpaid.getAdLinear() != 'nonlinear') {
                clearTimeout(vpaid_t);
                vpaid_t = setTimeout(vpaidVideoTimeout, v.vpaid_timeout * 1000);
                StartVpaidVolume();
                if (v.vpaid_waitstart !== 1) {
                    vpaid.startAd()
                }
                clearInterval(vpaid_int2);
                vpaid_int2 = setInterval(vpaidAdRemainingTimeChange, 1000);
                vpaidAdRemainingTimeChange()
            } else {
                vpaidAdError("Nonlinear")
            }
        }

        function StartVpaidVolume() {
            if (v.vast_volume == 0 || vast.mute == 1 || (v.vast_unmutehover == 1 && !o.system.mobile && o.mouseHere != 1)) {
                if (vpaid.getAdVolume() > 0 && vast.mute != -1) {
                    onMute()
                }
            } else {
                if (v.vast_volume != -1) {
                    vpaid.setAdVolume(parseFloat(v.vast_volume))
                } else {
                    vpaid.setAdVolume(parseFloat(v.volume))
                }
            } if (vpaid.getAdVolume() == 0 && controls) {
                hide2(uimute)
            }
        }

        function StopBuffering() {
            if (vast.buffering) {
                uibuffer ? hide2(uibuffer) : '';
                vast.buffering = false;
                clearInterval(push_wait_int)
            }
        }

        function onWaiting() {
            uibuffer ? show2(uibuffer) : '';
            vast.buffering = true;
            if (v.vast_push_waiting == 1) {
                clearInterval(push_wait_int);
                push_wait_int = setInterval(PushWaiting, 1500)
            }
        }

        function PushWaiting() {
            last_skiptime = last_skiptime + 1;
            UpdateSkipTimes(last_skiptime)
        }

        function vpaidStartAd() {
            vpaidstarted = true;
            v.vpaidvideotimeout != 1 ? vpaidvideostarted = true : '';
            duration = vpaid.getAdDuration();
            var rt = vpaid.getAdRemainingTime();
            if (duration > 0) {} else {
                if (exist(vast.duration)) {
                    if (vast.duration >= rt) {
                        duration = vast.duration
                    }
                }
            } if (duration >= 5000) {
                duration = duration / 1000
            }
            js3("vast_duration", duration);
            o.vast_poster ? hide2(o.vast_poster) : '';
            js_events = [];
            log("VPAID Started");
            Event("creativeView", true);
            StopBuffering()
        }

        function vpaidVideoTimeout() {
            if (!vpaidvideostarted && !die_error) {
                log("VPAID timeout");
                js3("vpaid_video_timeout", VastInfo());
                onError(901)
            }
        }

        function vpaidQuartileTimeout() {
            if (!vpaidquartile && !die_error) {
                if (v.vpaid_mute_impression == 0 && paused) {} else {
                    log("VPAID quartile timeout");
                    js3("vpaid_quartile_timeout", VastInfo());
                    onError(901)
                }
            }
        }

        function vpaidStoppedTimeout() {
            if (!vpaidstopped && !die_error) {
                if (v.vpaid_mute_impression == 0 && paused) {} else {
                    log("VPAID stopped timeout");
                    js3("vpaid_stopped_timeout", VastInfo());
                    if (!removed) {
                        impression ? vpaidStopAd() : onError(901)
                    }
                }
            }
        }

        function tagTimeout() {
            if (tag) {
                if (!die_error && tag.currentTime == 0 && duration == 0) {
                    log("VAST video loading timeout");
                    js3("vast_video_timeout", VastInfo());
                    onError(402)
                }
            }
        }

        function vpaidLoadTimeout() {
            if (!vpaidvideostarted && !die_error) {
                log("VPAID loading timeout");
                js3("vpaid_loading_timeout", VastInfo());
                onError(901)
            }
        }

        function vpaidStopAd() {
            if (!removed) {
                if (!vpaidstopped) {
                    log("VPAID Stopped");
                    vpaidstopped = true;
                    if (!removed && !impression) {
                        if (vpaidstarted && duration > 0 && remainigs > 75 && exist(vast.prt)) {
                            vpaidImpression()
                        }
                        log("VPAID No impression --> Error (" + remainigs + ")");
                        onError(901)
                    } else {
                        if (vpaidcompleted || vpaidskipped) {
                            RemoveAndPlay()
                        } else {
                            remove_t = setTimeout(RemoveAndPlay, 200)
                        }
                    }
                }
            }
        }

        function vpaidSkipAd() {
            log("VPAID Skipped");
            vpaidskipped = true;
            onSkip()
        }

        function vpaidAdSizeChange() {
            log("VPAID SizeChanged: " + vpaid.getAdWidth() + " x " + vpaid.getAdHeight());
            if (vpaid.getAdHeight() > 0 && vpaid.getAdWidth() > 0 && v.changeheight == 1 && v.changevastheight == 1) {
                o.actions.changeAspect(vpaid.getAdWidth() / vpaid.getAdHeight(), true)
            }
        }

        function vpaidAdExpandedChange() {
            log("VPAID ExpandedChange: " + vpaid.getAdExpanded())
        }

        function vpaidAdSkippableStateChange() {
            if (controls) {
                log("VPAID AdSkippableStateChange: " + vpaid.getAdSkippableState());
                if (vpaid.getAdSkippableState()) {
                    ShowSkip()
                } else {
                    hide(uiskip)
                }
            }
        }

        function vpaidAdDurationChange() {
            log("VPAID DurationChanged: " + vpaid.getAdDuration());
            if (vpaid.getAdDuration() > 0) {
                duration = vpaid.getAdDuration();
                js3("vast_duration", duration)
            }
        }

        function vpaidAdRemainingTimeChange(event) {
            if (event) {
                clearInterval(vpaid_int2)
            }
            var rt = vpaid.getAdRemainingTime();
            if (!duration) {
                duration = vpaid.getAdDuration()
            }
            remainigs++;
            if (duration == 0 || rt > duration) {
                if (rt > 0) {
                    duration = rt;
                    js3("vast_duration", duration)
                }
            }
            if (rt > 0) {
                if (duration > 0) {
                    onTimeupdateExtensions(duration - rt)
                }
            }
        }

        function vpaidAdVolumeChange() {
            if (vpaid.getAdVolume() != undefined) {
                if (vpaid.getAdVolume() == 0) {
                    Event("mute");
                    vpaidvolume2 = 0
                } else {
                    vpaidvolume2 == 0 ? Event("unmute") : '';
                    vpaidvolume2 = vpaid.getAdVolume()
                }
            }
            log("VPAID VolumeChanged: " + vpaid.getAdVolume())
        }

        function vpaidAdImpression() {
            if (vast.vpaidImOnVdSrt != 1) {
                vpaidImpression()
            }
        }

        function vpaidImpression() {
            vpaidcompleted = false;
            log("VPAID Impression", duration);
            Event("Impression");
            ImpressionActions();
            gaTracker("vast_impression", "VAST Impression", false);
            if (v.vpaid_timeout2 > -1) {
                clearTimeout(vpaid_t);
                vpaid_t = setTimeout(vpaidVideoTimeout, v.vpaid_timeout2 * 1000)
            }
            if (v.vpaid_mute_impression == 1) {
                onMute()
            }
        }

        function vpaidAdClickThru(x, y, z) {
            log("VPAID ClickThru");
            if (exist(x)) {
                if (typeof x == "string") {
                    if (x.indexOf('//') > -1 && z == true) {
                        vast.click = x
                    }
                }
            }
            if (exist(vast.extensions.isClickable)) {
                if (vast.extensions.isClickable == 1) {
                    onClick()
                } else {
                    Event("click")
                }
            } else {
                onClick()
            }
        }

        function vpaidAdInteraction() {}

        function vpaidAdVideoStart() {
            if (vast.vpaidImOnVdSrt == 1) {
                vpaidImpression()
            }
            log("VPAID AdVideoStart");
            vpaidvideostarted = true;
            clearTimeout(vpaid_t);
            if (v.vpaid_timeout3 > -1) {
                vpaid_t = setTimeout(vpaidQuartileTimeout, v.vpaid_timeout3 * 1000)
            }
            clearTimeout(vpaid_stop_t);
            if (v.vpaid_timeout4 > -1) {
                vpaid_stop_t = setTimeout(vpaidStoppedTimeout, v.vpaid_timeout4 * 1000)
            }
            if (v.vpaid_mute_impression == 1) {
                onMute()
            }
            Event("start", false)
        }

        function vpaidAdVideoFirstQuartile() {
            vpaidquartile = true;
            log("VPAID firstQuartile");
            Event("firstQuartile", false)
        }

        function vpaidAdVideoMidpoint() {
            log("VPAID midpoint");
            Event("midpoint", false)
        }

        function vpaidAdVideoThirdQuartile() {
            log("VPAID thirdQuartile");
            Event("thirdQuartile", false)
        }

        function vpaidAdVideoComplete() {
            if (!vpaidcompleted) {
                Event("complete", false);
                vpaidcompleted = true;
                for (var y in vast.events) {
                    if (vast.events.hasOwnProperty(y)) {
                        if (y.indexOf("old_") == 0) {
                            vast.events[y.substr(4)] = vast.events[y]
                        }
                    }
                }
                if (exist(vast.events.sec)) {
                    for (var i = 0; i < vast.events.sec.length; i++) {
                        vast.events.sec[i] += 1000
                    }
                }
                if (v.vpaid_timeout5 > -1) {
                    clearTimeout(vpaid_complete_t);
                    vpaid_complete_t = setTimeout(vpaidStoppedTimeout, v.vpaid_timeout5 * 1000)
                }
            }
            log("VPAID complete")
        }

        function vpaidAdLinearChange() {
            log("VPAID linear has changed: " + vpaid.getAdLinear())
        }

        function vpaidAdUserAcceptInvitation() {
            Event("acceptInvitation", false)
        }

        function vpaidAdUserMinimize() {}

        function vpaidAdUserClose() {
            var d = new Date();
            o.clicktime = d.getTime();
            Event("close", true);
            o.vastclick = true;
            gaTracker("vast_skip", "VAST Skip", false)
        }

        function vpaidAdPaused() {
            if (vast.isVpaid && vpaidcompleted) {} else {
                Event("pause");
                if (v.vpaid_nopause == 1) {
                    vpaid.resumeAd()
                } else {
                    if (controls && v.vast_pauseonclick == 1) {
                        show2(uiplay)
                    }
                    paused = true
                }
            }
        }

        function vpaidAdPlaying() {
            Event("resume");
            if (controls && exist(uiplay)) {
                hide2(uiplay)
            }
            paused = false
        }

        function StoreImpression(y) {
            if (v["vast_" + y + "timebreak"] > 0 && o.storage) {
                var tbi = localStorage.getItem("pljs" + y + "i_" + o.d) * 1;
                var z = false;
                if (tbi) {
                    tbi >= v["vast_" + y + "tbimp"] ? z = true : ''
                } else {
                    tbi = 0
                } if (z || o.vast_impressions_all + 1 >= v["vast_" + y + "tbimp"]) {
                    var x = new Date();
                    localStorage.setItem("pljs" + y + "_" + o.d, x.getTime());
                    localStorage.setItem("pljs" + y + "i_" + o.d, 0)
                } else {
                    localStorage.setItem("pljs" + y + "i_" + o.d, tbi + 1)
                }
            }
        }

        function Event(x, del, code, justcode) {
            if (x == "start") {
                o.vast_started = true;
                v.miniwithvast == 1 && o.minify ? o.minify.Check() : ''
            }
            if (exist(vast.prt) && v.eventstrackervast == 0 && v.vpaid != 1) {} else {
                if (del) {
                    if (!exist(js_events[x])) {
                        js3("vast_" + x, VastInfo())
                    }
                    js_events[x] = true
                } else {
                    code > 0 ? js3(("vast_" + x), code) : js3("vast_" + x, VastInfo())
                }
            } if (exist(vast.events)) {
                if (exist(vast.events[x])) {
                    log("VAST Event " + x);
                    for (var i = 0; i < vast.events[x].length; i++) {
                        var z = vast.events[x][i];
                        var stop = false;
                        if (exist(z)) {
                            if (code > 0) {
                                if (z.indexOf("[ERRORCODE]") > 0) {
                                    z = z.replace("[ERRORCODE]", code)
                                } else {
                                    justcode == 1 ? stop = true : ''
                                }
                            }
                            if (z.indexOf("(visibility)") > 0) {
                                if (exist(o.visibility)) {
                                    z = z.replace("(visibility)", o.visibility)
                                }
                            }
                            if (z.indexOf("(volume)") > 0) {
                                z = z.replace("(volume)", CurrentVolume())
                            }
                            z = z.replace("(adblock)", (o.ab ? 1 : 0));
                            z = z.replace(/\(random\)/g, Math.random());
                            if (z.indexOf(".pjstat") > 0) {
                                var m = 0;
                                z = z + "&m=" + (o.system.tv ? 2 : (o.system.mobile ? 1 : 0)) + ("&h=" + (exist(v.parent_domain) ? v.parent_domain : o.domain))
                            }
                            if (typeof v.vast_replace == "object") {
                                for (var y in v.vast_replace) {
                                    if (v.vast_replace.hasOwnProperty(y)) {
                                        z = z.replace(y, v.vast_replace[y])
                                    }
                                }
                            }
                        } else {
                            stop = true
                        } if (!stop) {
                            gif(z)
                        }
                    }
                    if (del) {
                        vast.events["old_" + x] = vast.events[x];
                        vast.events[x] = undefined
                    }
                }
            }
            if (x == "click" && v.vast_addclick == 1) {
                Event("addClick")
            }
        };

        function js2(x) {
            if (vast.adsystem != "intro" && vast.adsystem != "outro") {
                js(x)
            }
        }

        function js3(x, y) {
            if ((exist(vast.prt) && v.eventstrackervast == 0 && v.vpaid != 1) || vast.adsystem == "intro" || vast.adsystem == "outro") {} else {
                js(x, y)
            }
        }
        this.config = function(x) {
            return vast ? vast[x] : false
        };
        this.tagLive = function() {
            var x = false;
            if (tag) {
                if (tag.parentElement) {
                    try {
                        if (tag.parentElement.nodeName == "PJSDIV") {
                            x = true
                        }
                    } catch (e) {
                        x = false
                    }
                }
            }
            if (vast) {
                if (vast.isVpaid) {
                    return false
                }
            }
            return x
        };
        this.info = function(x) {
            return vast ? vast[x] : false
        };
        this.active = function() {
            return !removed
        };
        this.Resize = function() {
            if (vast) {
                if (vast.isVpaid) {
                    if (vpaid) {
                        vpaid.resizeAd(o.screen_w, o.screen_h, (o.fullscreen ? 'fullscreen' : 'normal'))
                    }
                }
            }
        };

        function RemoveInterface() {
            RemoveControl('uiplay');
            RemoveControl('uibuffer');
            if (tag) {
                if (tag.played.length > 0) {
                    tag.pause()
                }
            }
            if (controls && o.vastcontainer.contains(uix)) {
                if (v.vast_title == 1) {
                    RemoveControl('uit')
                }
                var cntrls = ['uiprogress', 'uiskip', 'uix', 'uitxt', 'uitxt', 'uimute', 'uiposter', 'uiunmutebut'];
                for (var i = 0; i < cntrls.length; i++) {
                    RemoveControl(cntrls[i])
                }
            }
        };

        function RemoveControl(x) {
            if (exist(eval(x))) {
                if (o.vastcontainer.contains(eval(x))) {
                    if (x == 'uitxt') {
                        uitxt.removeEventListener('click', onInvite)
                    }
                    o.vastcontainer.removeChild(eval(x));
                    eval(x + ' = null;')
                }
            }
        }
        this.getVolume = function() {
            return CurrentVolume()
        };
        this.pause = function() {
            if (!removed && !paused && vast) {
                Pause(true);
                return true
            } else {
                return false
            }
        };
        this.resume = function() {
            if (!removed && paused && vast) {
                Resume();
                return true
            } else {
                return false
            }
        };
        this.VpaidSet = function(x, y) {
            if (vast) {
                if (x == "setAdVolume") {
                    if (y == 0) {
                        onMute()
                    } else {
                        onUnmute()
                    }
                }
                if (x == "stopAd") {
                    RemoveAndPlay()
                }
                if (x == "startAd") {
                    if (!vast.isVpaid) {
                        !vaststarted ? PlayStart() : ''
                    } else {
                        !vpaidstarted ? vpaid.startAd() : ''
                    }
                }
                if (x == "skipAd") {
                    onSkip()
                }
                if (x == "pauseAd") {
                    onPause()
                }
                if (x == "resumeAd") {
                    onPlay()
                }
            }
        };
        this.imp = function(x) {
            if (impression && !removed) {
                var y = x.split(',');
                for (var i = 0; i < y.length; i++) {
                    gif(y[i])
                }
            }
        };
        this.RemoveForNextAd = function() {
            if (youtube || vimeo) {
                clearInterval(ytinterval);
                ytag.Remove()
            }
            if (vast) {
                RemoveInterface();
                if (vast.isVpaid) {
                    if (exist(vpaidslot)) {
                        if (!vpaidstopped && vpaid && vpaidstarted) {
                            try {
                                vpaid.stopAd()
                            } catch (e) {
                                log(e)
                            }
                        }
                        if (vpaid) {
                            for (var eventName in vpaidCallbacks) {
                                if (vpaidCallbacks.hasOwnProperty(eventName)) {
                                    vpaid.unsubscribe(vpaidCallbacks[eventName], eventName)
                                }
                            }
                        }
                        if (o.vastcontainer.contains(vpaidslot) && vast.hidevpaid != 1) {
                            o.vastcontainer.removeChild(vpaidslot)
                        }
                    }
                    clearInterval(vpaid_int);
                    clearInterval(vpaid_int2);
                    clearInterval(vpaidframe_int);
                    clearInterval(push_wait_int);
                    RemoveTimeouts();
                    if (vast.hidevpaid != 1 && vpaidframe) {
                        try {
                            o.vastcontainer.removeChild(vpaidframe)
                        } catch (e) {}
                    }
                }
            }
            if (exist(vpaidslot)) {
                clearInterval(img_int);
                if (o.vastcontainer.contains(vpaidslot) && vast.hidevpaid != 1) {
                    o.vastcontainer.removeChild(vpaidslot)
                }
            }
            if (vast) {
                vast.events = []
            }
            removed = true;
            impression = false;
            remainigs = 0;
            mp3 = false
        };
        this.waitGo = function(x) {
            vast = x
        };
        this.Remove = function() {
            try {
                if (o.vastcontainer.contains(tag)) {
                    o.vastcontainer.removeChild(tag)
                }
            } catch (e) {}
            this.RemoveForNextAd();
            removed = true;
            try {
                if (o.frame.contains(o.vastcontainer) && vast.hidevpaid != 1) {
                    o.frame.removeChild(o.vastcontainer)
                }
                if (vast.hidevpaid == 1) {
                    hide2(o.vastcontainer)
                }
            } catch (e) {}
        }
    };
    var Settings = function(is) {
        var i;
        var style = [];
        var f = [];
        var fbg = [];
        var fimg = [];
        var ftitle = [];
        var fvalue = [];
        var faction = [];
        var f2 = [];
        var f2bg = [];
        var f2img = [];
        var f2title = [];
        var f2value = [];
        var f2action = [];
        var stout = [];
        var is_visible = false;
        var open_action;
        var open_settings = -1;
        var empty = true;
        var key = is;
        var playlist;
        var shuffle = [];
        var shuffle_ = [];
        var plid = '';
        var plfolder = '';
        var plx = -1;
        var sub_settings_on = false;
        var sub_settings = false;
        var autonextopenfolder = false;
        var autoprevopenfolder = false;
        var justshow = false;
        var removed = false;
        var showinterval;
        var arrinterval;
        var wheelinterval;
        var hidetimeout;
        var settimer;
        var scale_i = -1;
        var _cstm = 0;
        var evntclk = "click";
        var evntovr = (o.system.mobile ? "touchstart" : "mouseover");
        var evntout = (o.system.mobile ? "touchend" : "mouseout");
        style = UpdateObject(style, v[is]);
        style = MarginPadding(v[is], 'margin', 'margin');
        if (style.marginbg == 0) {
            style.marginbgpadding = "0 0 0 0"
        }
        style = MarginPadding(v[is], 'bgpadding', 'marginbgpadding');
        style = MarginPadding(v[is], 'padding', 'padding');
        style.scrollwidth = 0;
        var _activeIcon = "<svg width='" + style.activeiconsize * 2 + "' height='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize * 2) : style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><ellipse ry='" + (style.activeiconsize) + "' rx='" + style.activeiconsize + "' cy='" + (style.activeiconsize * 2 > style.valuefontsize ? (style.activeiconsize) : (style.valuefontsize / 2)) + "' cx='" + style.activeiconsize + "' fill='#" + style.valuecolor + "'/></g></svg>";
        var _xIcon = "<svg width='" + style.activeiconsize * 2 + "' height='" + style.valuefontsize + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' ><g><ellipse ry='" + (style.activeiconsize - 1) + "' rx='" + (style.activeiconsize - 1) + "' cy='" + (style.valuefontsize / 2 + 2) + "' cx='" + style.activeiconsize + "' stroke='#" + style.valuecolor + "' stroke='1' fill-opacity='0'/></g></svg>";
        var xx = 4;
        var _nextIcon = "<svg width='" + (xx + 2) + "' height='" + (style.valuefontsize) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='1' y1='" + (style.valuefontsize / 2 - xx) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/><line x1='" + xx + "' y1='" + (style.valuefontsize / 2) + "' x2='1' y2='" + (style.valuefontsize / 2 + xx) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg>";
        var _prevIcon = "<svg width='" + (xx + 10) + "' height='" + (style.valuefontsize + 2) + "' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' style='float:left'><g><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 - xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round' /><line x1='1' y1='" + (style.valuefontsize / 2 + 2) + "' x2='" + xx + "' y2='" + (style.valuefontsize / 2 + xx + 2) + "' stroke='#" + style.color + "' stroke-width='1' stroke-linecap='round'/></g></svg>";
        var container = createElement("div");
        o.frame.appendChild(container);
        css(container, {
            'overflow': 'hidden',
            'display': 'block',
            'opacity': 0,
            'border-radius': style.rounding
        });
        if (is == "settings") {
            container.style.zIndex = 100
        } else {
            container.style.zIndex = 99
        }
        var control = createElement("div");
        if (style.smallfontsize > 0 && o.screen_w < 400) {
            style.fontsize = style.smallfontsize
        }
        css(control, {
            'position': 'relative',
            'top': 0,
            'left': 0,
            'display': 'block',
            'width': '100%',
            'padding-top': style.bgpaddingtop,
            'padding-right': style.bgpaddingright + 20,
            'padding-bottom': style.bgpaddingbottom,
            'padding-left': style.bgpaddingleft,
            'color': style.color,
            'font-size': style.fontsize,
            'font-family': style.font,
            'letter-spacing': style.letterspacing + 'px'
        });
        if (o.system.safari) {
            css(control, {
                'min-width': 220
            })
        }
        if (is !== "playlist") {
            css(control, {
                'overflow-y': 'scroll'
            })
        }
        container.appendChild(control);
        if (style.floatleft != 1) {
            var control2 = createElement("div");
            css(control2, {
                'display': 'block',
                'overflow': 'hidden',
                'border-radius': style.rounding
            });
            if (style.floatleft != 1) {
                if (o.system.safari) {
                    css(control2, {
                        'min-width': 220
                    })
                }
            }
            control.appendChild(control2)
        }
        if (is == "playlist") {
            attr(control, {
                id: (v.id + "_" + is)
            });
            if (style.floatleft == 1) {
                css(control, {
                    'width': '100%',
                    'padding-right': style.bgpaddingright,
                    'padding-bottom': style.bgpaddingbottom + 20,
                    'overflow-x': 'scroll',
                    'white-space': 'nowrap'
                });
                css(container, {
                    'width': o.screen_w - style.marginright - style.marginleft,
                    'height': style.floatheight + style.bgpaddingtop + style.bgpaddingbottom
                })
            } else {
                css(control, {
                    'overflow-y': 'scroll'
                });
                if (style.width100 == 1) {
                    ResizePlaylist()
                }
            } if (style.marginbg == 1) {
                css(container, {
                    'background-color': style.marginbgcolor
                })
            }
            if (v.playlist.droplist == 1) {
                hide2(container)
            }
        }
        if (style.scrollarrows == 1) {
            var arr_up = createElement("div");
            var scrollbgcolor = hexToRgb(style.marginbg == 1 ? style.marginbgcolor : style.bgcolor);
            if (style.floatleft == 1) {
                StyleArrow(arr_up, 'to right, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'left', 12, 5, 7, 10, 7, 10, 12, 15);
                arr_up.addEventListener(evntclk, ScrollLeft)
            } else {
                StyleArrow(arr_up, 'to bottom, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'top', 5, 12, 10, 7, 10, 7, 15, 12);
                arr_up.addEventListener(evntclk, ScrollUp)
            }
            var arr_down = createElement("div");
            if (style.floatleft == 1) {
                StyleArrow(arr_down, 'to left, rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + '), rgba(' + scrollbgcolor + ',0)', 'right', 8, 5, 13, 10, 13, 10, 8, 15);
                arr_down.addEventListener(evntclk, ScrollRight)
            } else {
                StyleArrow(arr_down, 'to bottom, rgba(' + scrollbgcolor + ',0), rgba(' + scrollbgcolor + ',' + (style.bga * 1 + 0.3) + ')', 'bottom', 5, 8, 10, 13, 10, 13, 15, 8);
                arr_down.addEventListener(evntclk, ScrollDown)
            }
            arr_up.addEventListener("mouseover", ScrollOverOut);
            arr_up.addEventListener("mouseout", ScrollOverOut);
            arr_down.addEventListener("mouseover", ScrollOverOut);
            arr_down.addEventListener("mouseout", ScrollOverOut);
            control.addEventListener("wheel", Wheel, {
                passive: true
            });
            arr_up.addEventListener("mouseup", onMouseUp);
            arr_down.addEventListener("mouseup", onMouseUp);
            container.appendChild(arr_up);
            container.appendChild(arr_down);
            clearInterval(arrinterval);
            arrinterval = setInterval(ArrowsInterval, 1000)
        }
        control.addEventListener(evntovr, ControlOver);
        control.addEventListener(evntout, ControlOut);
        if (is == "settings") {
            for (var i = 1; i < 11; i++) {
                if (exist(v["control_" + is][is + i])) {
                    v.settings[is + i] = v["control_" + is][is + i];
                    if (exist(v["control_" + is][is + i + "title"])) {
                        v.settings[is + i + "title"] = v["control_" + is][is + i + "title"]
                    }
                    if (exist(v["control_" + is][is + i + "action"])) {
                        v.settings[is + i + "action"] = v["control_" + is][is + i + "action"]
                    }
                }
                if (exist(v.settings[is + i])) {
                    if (v.settings[is + i] == 1) {
                        CreateItem('f', i);
                        StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]);
                        ftitle[i].innerHTML = Lang(v.settings[is + i + "action"]);
                        if (exist(v.settings[is + i + "title"])) {
                            if (v.settings[is + i + "title"] != '') {
                                ftitle[i].innerHTML = v.settings[is + i + "title"]
                            }
                        }
                        if (exist(v.settings[is + i + "action"])) {
                            faction[i] = v.settings[is + i + "action"];
                            Value(i);
                            if (faction[i] == 'scale') {
                                scale_i = i
                            }
                        }
                        f[i].addEventListener(evntovr, onOver);
                        f[i].addEventListener(evntout, onOut);
                        f[i].addEventListener(evntclk, onClick);
                        f[i].addEventListener("mouseup", onMouseUp);
                        if (v.settings[is + i + "hide"] == 1) {
                            css(f[i], {
                                "height": 0
                            })
                        }
                    }
                }
            }
        }

        function Wheel() {
            clearInterval(wheelinterval);
            wheelinterval = setInterval(ControlOut, 3000);
            Retimer()
        }

        function ControlOver() {
            o.mouseDown = true
        }

        function ControlOut() {
            if (style.showovercontrol == 1) {
                clearTimeout(o.settingsovertimer);
                o.settingsovertimer = setTimeout(function() {
                    if (!o.mouseDown) {
                        HideControl()
                    }
                }, (v.settings.showoverto > 0 ? v.settings.showoverto * 1000 : 1000))
            }
            o.mouseDown = false
        }

        function onOver(event) {
            if (o.fullscreen) {
                o.volumewheel ? o.actions.volumewheel(false) : ''
            }
            var i = event.target.getAttribute('fid');
            var x;
            if (i) {
                x = 'f'
            } else {
                if (event.target.getAttribute('f2id')) {
                    i = event.target.getAttribute('f2id');
                    x = 'f2'
                }
            } if (i) {
                i = parseInt(i);
                var opn = false;
                if (exist(eval(x)[i])) {
                    if (style.bgaover > -1) {
                        css(eval(x + 'bg')[i], {
                            'opacity': style.bgaover
                        })
                    }
                    if (style.aover > -1) {
                        css(eval(x + 'title')[i], {
                            'opacity': style.aover
                        });
                        css(eval(x + 'value')[i], {
                            'opacity': style.aover
                        })
                    }
                    if (is == "playlist") {
                        if (faction[i].indexOf("playlist") == 0) {
                            var id = faction[i].substr(8);
                            if (plid == id || plfolder == id) {
                                css(eval(x + 'title')[i], {
                                    'color': style.valuecolor
                                });
                                css(eval(x + 'value')[i], {
                                    'color': style.valuecolor
                                });
                                opn = true
                            } else {
                                css(eval(x + 'title')[i], {
                                    'color': style.color
                                })
                            }
                        }
                    }
                    if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) {} else {
                        css(eval(x + 'bg')[i], {
                            'backgroundColor': style.bgcolorover
                        })
                    }
                }
            }
        };

        function onOut(event) {
            if (o.fullscreen) {
                o.volumewheel ? o.actions.volumewheel(true) : ''
            }
            var i = event.target.getAttribute('fid');
            var x;
            var opn = false;
            Retimer();
            if (i) {
                x = 'f'
            } else {
                if (event.target.getAttribute('f2id')) {
                    i = event.target.getAttribute('f2id');
                    x = 'f2'
                }
            } if (i) {
                if (exist(eval(x)[i])) {
                    if (style.bgaover > -1) {
                        css(eval(x + 'bg')[i], {
                            'opacity': style.bga,
                            "transition": "opacity 0.1s linear"
                        })
                    }
                    if (style.aover > -1) {
                        css(eval(x + 'title')[i], {
                            'opacity': style.a,
                            "transition": "opacity 0.1s linear"
                        });
                        css(eval(x + 'value')[i], {
                            'opacity': style.a,
                            "transition": "opacity 0.1s linear"
                        })
                    }
                    if (is == "playlist") {
                        if (faction[i].indexOf("playlist") == 0) {
                            var id = faction[i].substr(8);
                            if (plid == id || plfolder == id) {
                                css(eval(x + 'title')[i], {
                                    'color': style.valuecolor
                                });
                                css(eval(x + 'value')[i], {
                                    'color': style.valuecolor
                                });
                                opn = true
                            } else {
                                if (exist(o.plhistory[id])) {
                                    HistoryPlaylist(i)
                                } else {
                                    css(eval(x + 'title')[i], {
                                        'color': style.color
                                    })
                                }
                            }
                        }
                    }
                    if (style.playbgcolored == 1 && exist(style.playbgcolor) && opn) {} else {
                        css(eval(x + 'bg')[i], {
                            'backgroundColor': style.bgcolor
                        })
                    }
                }
            }
        }

        function onClick(event) {
            if (!justshow) {
                var d = new Date();
                o.clicktime = d.getTime();
                var i = event.target.getAttribute('fid');
                if (i) {
                    if (exist(f[i])) {
                        if (exist(faction[i])) {
                            Action(i, 0)
                        }
                    }
                }
            }
        }

        function onMouseUp(event) {
            event.cancelBubble = true;
            Retimer()
        }

        function onClick2(event) {
            if (!justshow) {
                var d = new Date();
                o.clicktime = d.getTime();
                var i = event.target.getAttribute('f2id');
                if (i) {
                    if (i == 0) {
                        Home()
                    } else {
                        if (exist(f2action[i])) {
                            Action2(i)
                        }
                    }
                }
            }
        }

        function onClickSubtitle(event) {
            var x = event.target.getAttribute('setupx');
            if (x) {
                ActionOptions(x)
            }
        }

        function onClickSubtitle2(event) {
            Retimer();
            var i = event.target.getAttribute('f2id');
            if (exist(f2action[i])) {
                if (f2action[i].indexOf("=") > 0) {
                    var x = f2action[i].substr(0, f2action[i].indexOf("="));
                    var y = f2action[i].substr(f2action[i].indexOf("=") + 1);
                    var z = open_action + '_reset';
                    if (!v[z]) {
                        v[z] = []
                    }
                    if (!exist(v[z][x])) {
                        v[z][x] = v[x] + ''
                    }
                    StyleSubtitle(x, y)
                }
            }
        }

        function StyleSubtitle(x, y) {
            v[x] = y;
            if (o.storage && v.sub_designstore == 1 && x != "sub_shift") {
                localStorage.setItem("pljs" + x, y)
            }
            o.actions.RenewSubtitle();
            ActionOptions(x)
        }

        function onClickTimer2(event) {
            var i = event.target.getAttribute('f2id');
            var x = f2action[i];
            if (exist(x)) {
                if (x.indexOf("=") > 0) {
                    var z = x.substr(0, x.indexOf("="));
                    var y = x.substr(x.indexOf("=") + 1);
                    v[z] = y;
                    SubtitleTimerMenu();
                    Value(o[open_action + '_i']);
                    if (open_action == "offsettimer") {
                        SettingsTimers("offsetwrite")
                    }
                }
            }
        }

        function Value(i) {
            if (exist(faction[i])) {
                var _hide = false;
                var _show = false;
                var _value = '';
                if (is == "settings") {
                    if (faction[i] == "quality") {
                        _value = o.media.getQuality()
                    }
                    if (faction[i] == "audiotrack") {
                        _value = o.media.getAudioTrack()
                    }
                    if (faction[i] == "channel") {
                        if (o.channels) {
                            _value = o.files_channel[o.current_channel]
                        }
                    }
                    if (faction[i] == "audiotrack" || faction[i] == "channel" || faction[i] == "quality") {
                        if (o['files_' + faction[i]].length == 0) {
                            _hide = true
                        } else {
                            if (o['files_' + faction[i]].length == 1 && (style.show1value != 1 || o['files_' + faction[i]][0] == 1)) {
                                _hide = true
                            } else {
                                _show = true
                            }
                        }
                    }
                    if (faction[i] == "airplay") {
                        if (!o.airplay) {
                            _hide = true
                        } else {
                            _show = true
                        }
                    }
                    if (faction[i] == "download") {
                        if (o.file_type != 'native' && !v.download) {
                            _hide = true
                        } else {
                            _show = true
                        }
                    }
                    if (faction[i] == "subtitle") {
                        if (exist(o.subs)) {
                            _show = true;
                            if (o.subtitle_on || v.sub_off == 1) {
                                _value = o.files_subtitle[!o.subtitle_on ? o.files_subtitle.length - 1 : o.current_subtitle]
                            } else {
                                _value = ''
                            }
                            var sxs = false;
                            for (var s = 0; s < o.subs.length; s++) {
                                if (o.subs[s] != '') {
                                    sxs = true;
                                    break
                                }
                            }
                            if (!sxs) {
                                _hide = true;
                                _show = false
                            }
                        } else {
                            _hide = true
                        }
                    }
                    if (faction[i] == "speed") {
                        _value = o.files_speed[o.current_speed];
                        _show = true;
                        if (o.file_type == "vimeo" || (o.media.isLive() && v.speed4live != 1)) {
                            _hide = true;
                            _show = false
                        }
                    }
                    if (faction[i] == "scale") {
                        _value = Math.round(o.mediascale.x * 100) + '%';
                        _show = true
                    }
                    if (faction[i].indexOf("timer") > 0) {
                        var x = ' ';
                        var y = ['hour', 'minute', 'second'];
                        for (var z = 0; z < y.length; z++) {
                            if (exist(v[faction[i] + y[z]])) {
                                if (v[faction[i] + y[z]] != ' ') {
                                    x += (x != ' ' ? ':' : '') + v[faction[i] + y[z]]
                                }
                            }
                        }
                        _value = x != ' 0:0' && x.indexOf(":") > -1 ? x : ' ';
                        _show = true
                    }
                }
                fvalue[i].innerHTML = _value + (_value != '' && style.hidearrow != 1 ? ' &nbsp;<svg width="5px" height="7px" viewBox="-1 -1 5 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polyline stroke="#' + style.valuecolor + '" stroke-width="1" fill="none" points="0 0 3 3 0 6"></polyline></svg>' : '');
                if (_hide) {
                    hide(f[i]);
                    if (is == "settings") {
                        stout[i] ? clearTimeout(stout[i]) : '';
                        if (o.controls) {
                            o.controls.SettingsN(i, false, _value)
                        } else {
                            stout[i] = setTimeout(function() {
                                o.controls.SettingsN(i, false, _value)
                            }, 200)
                        }
                    }
                    css(f[i], {
                        'position': 'absolute',
                        'right': 0,
                        'top': -100
                    })
                }
                if (_show) {
                    if (style.floatleft == 1) {
                        css(f[i], {
                            'display': 'inline-block'
                        })
                    } else {
                        show(f[i])
                    } if (is == "settings") {
                        stout[i] ? clearTimeout(stout[i]) : '';
                        if (o.controls) {
                            o.controls.SettingsN(i, true, _value)
                        } else {
                            stout[i] = setTimeout(function() {
                                o.controls.SettingsN(i, true, _value)
                            }, 500)
                        }
                    }
                    css(f[i], {
                        'position': 'relative',
                        'right': 0,
                        'top': 0
                    })
                }
                Resize()
            }
            for (var j = 1; j < f.length; j++) {
                if (f[j]) {
                    if (isVisible(f[j])) {
                        var refresh = false;
                        empty ? refresh = true : '';
                        empty = false;
                        refresh && o.controls ? o.controls.refresh() : ''
                    }
                }
            }
        };

        function Action(i, cstm) {
            if (exist(faction[i])) {
                o.setaction = true;
                Retimer();
                var x = VisibleItems();
                if (open_action != faction[i]) {
                    open_action = faction[i];
                    if (open_action == 'quality' || open_action == 'audiotrack' || open_action == 'subtitle' || open_action == 'speed' || open_action == 'channel' || open_action == 'scale' || open_action.indexOf("timer") > 0) {
                        open_settings = i;
                        var z = copyObject(o['files_' + open_action]);
                        if (open_action == "sleeptimer") {
                            z = SettingsTimers("sleepoptions")
                        }
                        if (open_action == "offsettimer") {
                            z = SettingsTimers("offsetoptions")
                        }
                        var current = o['current_' + open_action];
                        var pressed = o['pressed_' + open_action];
                        for (var j = 1; j < f.length; j++) {
                            if (f[j]) {
                                f[j].style.display = "none"
                            }
                        }
                        f2 = [];
                        CreateItem('f2', 0);
                        StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]);
                        css(f2[0], {
                            "border-bottom": "1px solid " + (style.bordercolored == 1 ? "#" + style.bordercolor.replace("#", "") : "rgba(100,100,100,0.7)")
                        });
                        _cstm = cstm;
                        f2title[0].innerHTML = (x[0] < 2 || _cstm == 1 || style.noprevicon == 1 ? '' : _prevIcon) + (v.settings[is + i + "title"] && v.settings[is + i + "title"] != '' ? v.settings[is + i + "title"] : Lang(v.settings[is + i + "action"]));
                        if (open_action == 'subtitle' && !o.hls_subs && !o.dash_subs) {
                            f2value[0].innerHTML = Lang("options");
                            css(f2value[0], {
                                'color': style.color,
                                'text-decoration': 'underline',
                                'pointerEvents': 'auto',
                                'cursor': 'pointer'
                            });
                            f2value[0].addEventListener(evntclk, SubtitleSettings);
                            if (sub_settings_on) {
                                for (j = 0; j < o.sub_options.length; j++) {
                                    if (v.sub_all == 0 && o.sub_options[j] == "sub_color2") {} else {
                                        z.push("pjslng_" + o.sub_options[j])
                                    }
                                }
                            }
                        }
                        if (open_action == 'scale') {
                            Scale();
                            css(f2value[0], {
                                'width': style.valuefontsize * 2.5,
                                'text-align': 'right'
                            })
                        }
                        css(f2title[0], {
                            'font-size': style.headfontsize
                        });
                        f2action[0] = "home";
                        if (_cstm != 1 && x[0] > 1) {
                            f2[0].addEventListener(evntovr, onOver);
                            f2[0].addEventListener(evntout, onOut);
                            f2[0].addEventListener(evntclk, onClick2);
                            f2[0].addEventListener("mouseup", onMouseUp)
                        } else {
                            css(f2[0], {
                                "cursor": 'default'
                            })
                        } if (style.nohead == 1) {
                            hide2(f2[0])
                        }
                        if (exist(z)) {
                            for (j = 0; j < z.length; j++) {
                                var y = j + 1;
                                var totheend = false;
                                var off = false;
                                if (z[j] && trim(z[j]) != '') {
                                    if (open_action == 'quality') {
                                        if (z[j] == Lang("auto")) {
                                            totheend = true
                                        }
                                    }
                                    CreateItem('f2', y, totheend);
                                    StyleItem(f2[y], f2bg[y], f2title[y], f2value[y], faction[i]);
                                    if (typeof(z[j]) == 'string') {
                                        if (z[j].indexOf("<<<") == 0) {
                                            z[j] = z[j].replace('<<<', '');
                                            off = true
                                        }
                                        if (z[j].indexOf('timer') > 0) {
                                            o[open_action + '_i'] = i
                                        }
                                        if (z[j].indexOf("pjslng") == 0) {
                                            var tmp = z[j];
                                            if (tmp.indexOf("timer") > 0) {
                                                f2title[y].innerHTML = Lang(z[j].substr(tmp.indexOf("timer") + 5))
                                            } else {
                                                f2title[y].innerHTML = Lang(z[j].substr(7))
                                            } if (z[j] == 'pjslng_sub_sizeproc') {
                                                css(f2[y], {
                                                    "border-top": "1px solid rgba(100,100,100,0.7)"
                                                })
                                            }
                                        } else {
                                            f2title[y].innerHTML = z[j]
                                        }
                                    } else {
                                        f2title[y].innerHTML = z[j]
                                    }
                                    f2action[y] = open_action + j;
                                    if (current == j || pressed == j) {
                                        f2value[y].innerHTML = current == j ? _activeIcon : _xIcon;
                                        current == j ? css(f2title[y], {
                                            'color': style.valuecolor
                                        }) : ''
                                    }
                                    if (typeof(z[j]) == 'string') {
                                        if (z[j].indexOf("pjslng") == 0) {
                                            var t = z[j].substr(7);
                                            if (t.indexOf("color") > 0) {
                                                f2value[y].innerHTML = "<div style='" + (v[t] == "000000" ? 'border:1px solid #999;height:8px;width:8px;' : 'height:10px;width:10px;') + ";background-color:" + (v[t].indexOf("#") == -1 ? '#' : '') + v[t] + ";border-radius:10px;'></div>"
                                            } else {
                                                if (exist(v[z[j].substr(7)])) {
                                                    f2value[y].innerHTML = v[z[j].substr(7)]
                                                }
                                            }
                                        }
                                    }
                                    if (open_action == 'quality') {
                                        if (z[j] == Lang("auto") && o.media.autoQuality()) {
                                            css(f2title[y], {
                                                'color': style.valuecolor
                                            })
                                        }
                                        if (exist(v.forbidden_quality)) {
                                            if (v.forbidden_quality.indexOf(z[j]) > -1) {
                                                hide2(f2[y])
                                            }
                                        }
                                    }
                                    var clck = "";
                                    if (typeof(z[j]) == 'string') {
                                        if (z[j].indexOf("pjslng") == 0) {
                                            attr(f2[y], {
                                                'f2parent': i,
                                                'setupx': z[j].substr(7)
                                            });
                                            clck = "onClickSubtitle"
                                        }
                                    }
                                    if (!off) {
                                        f2[y].addEventListener(evntovr, onOver);
                                        f2[y].addEventListener(evntout, onOut);
                                        if (clck == "onClickSubtitle") {
                                            f2[y].addEventListener(evntclk, onClickSubtitle)
                                        } else {
                                            f2[y].addEventListener(evntclk, onClick2)
                                        }
                                        f2[y].addEventListener("mouseup", onMouseUp)
                                    } else {
                                        css(f2[y], {
                                            "cursor": "default"
                                        })
                                    }
                                }
                            }
                        }
                        Resize()
                    }
                    if (faction[i] == 'download') {
                        o.actions.Download()
                    }
                    if (faction[i].indexOf('playlist') > -1) {
                        var id = faction[i].substr(8);
                        if (exist(o.playlist_dic[id])) {
                            if (exist(o.playlist_dic[id]['file'])) {
                                o.seekto = undefined;
                                ActionPlaylist(i);
                                if (exist(o.playlist_dic[id]['start'])) {
                                    v.start = o.seekto = o.playlist_dic[id]['start']
                                }
                                SettingsTimers("offset");
                                if (exist(o.playlist_dic[id]['redirect']) && v.redirect == 1 && v.redirectplaylist == 1) {
                                    redirect(o.playlist_dic[id]['redirect'])
                                } else {
                                    UpdateVars0(id);
                                    o.actions.NewFile(o.playlist_dic[id]['file']);
                                    v.playlist.always == 0 && v.playlist.autohide == 1 ? setTimeout(HideControl, 200) : '';
                                    autonextopenfolder = false;
                                    autoprevopenfolder = false;
                                    UpdateVars(id)
                                }
                            } else {
                                if (exist(o.playlist_dic[id]['folder'])) {
                                    UpdatePlaylist(id);
                                    if (autonextopenfolder) {
                                        plx == -1 ? Action(0, 0) : ''
                                    } else if (autoprevopenfolder) {
                                        plx == -1 ? Action(parseInt(f.length) - 2, 0) : ''
                                    }
                                }
                            }
                        }
                        if (o.droplist) {
                            o.droplist.Update()
                        }
                    }
                    if (faction[i] == 'airplay') {
                        o.media.Airplay()
                    }
                }
            }
        };
        this.UpdateTimer = function(x) {
            Value(o[x + '_i'])
        };

        function ActionOptions(x) {
            if (x == "sub_reset") {
                var z = open_action + '_reset';
                if (v[z]) {
                    for (var y in v[z]) {
                        if (v[z].hasOwnProperty(y)) {
                            StyleSubtitle(y, v[z][y])
                        }
                    }
                    SubtitleSettingsMenu()
                }
                return
            }
            Retimer();
            for (var i = 0; i < f2.length; i++) {
                if (f2[i]) {
                    f2[i].style.display = "none"
                }
            }
            f2 = [];
            CreateItem('f2', 0);
            StyleItem(f2[0], f2bg[0], f2title[0], f2value[0]);
            css(f2[0], {
                "border-bottom": "1px solid " + (style.bordercolored == 1 ? "#" + style.bordercolor.replace("#", "") : "rgba(100,100,100,0.7)")
            });
            if (x.indexOf("timer") > 0) {
                f2[0].addEventListener(evntclk, SubtitleTimerMenu);
                f2title[0].innerHTML = Lang(x.substr(x.indexOf("timer") + 5))
            } else {
                f2[0].addEventListener(evntclk, SubtitleSettingsMenu);
                f2title[0].innerHTML = (style.noprevicon != 1 ? _prevIcon : '') + Lang(x)
            }
            css(f2title[0], {
                'font-size': style.headfontsize
            });
            f2[0].addEventListener(evntovr, onOver);
            f2[0].addEventListener(evntout, onOut);
            f2[0].addEventListener("mouseup", onMouseUp);
            var values = [];
            var valuefromlang = false;
            if (x.indexOf("size") > 0) {
                values = ['50%', '75%', '100%', '125%', '150%', '175%', '200%', '250%', '300%', '400%']
            }
            if (x.indexOf("bga") > 0) {
                values = ['0', '0.2', '0.3', '0.4', '0.5', '0.6', '0.7', '0.8', '0.9', '1']
            }
            if (x.indexOf("shift") > 0) {
                for (i = -5; i < 5.5; i += 0.5) {
                    values.push(Math.round(i * 100) / 100)
                }
            }
            if (x.indexOf("weight") > 0) {
                values = [200, 400, 600]
            }
            if (x.indexOf("bottom") > 0) {
                for (i = 0; i < 21; i++) {
                    values[i] = i * 10
                }
            }
            if (x.indexOf("hour") > 0) {
                for (i = 0; i < 24; i++) {
                    values[i] = i
                }
            }
            if (x.indexOf("minute") > 0 || x.indexOf("second") > 0) {
                for (i = 0; i < 60; i++) {
                    values[i] = i
                }
            }
            if (x.indexOf("shadow") > 0) {
                valuefromlang = true;
                values = [0, 1]
            }
            if (x.indexOf("color") > 0) {
                values = ['ffffff', 'ffeeab', '72ccf8', '62de50', 'faed54', 'feba54', 'e8bbff', 'ffc7d1', 'aaaaaa', 'd9bb8c', 'b3fee8', '4bd9ac', 'FEF370', 'D90000', '073DA0', '409829', '644082', '000000'];
                var vx = v[x].replace("#", "");
                if (values.indexOf(vx) == -1) {
                    values[8] = vx
                }
            }
            for (y = 1; y <= values.length; y++) {
                CreateItem('f2', y, false);
                StyleItem(f2[y], f2bg[y], f2title[y], f2value[y]);
                css(f2value[y], {
                    'padding-left': 0
                });
                if (x.indexOf("color") > 0 || x.indexOf("bottom") > 0 || x.indexOf("timer") > 0 || x.indexOf("shift") > 0) {
                    y % 3 != 0 ? css(f2[y], {
                        'float': 'left'
                    }) : '';
                    css(f2[y], {
                        'width': '33.3%'
                    });
                    if (x.indexOf("color") > 0) {
                        f2title[y].innerHTML = "<div style='" + (values[y - 1] == "000000" ? 'border:1px solid #999;height:18px;width:18px;' : 'height:20px;width:20px;') + ";background-color:#" + values[y - 1] + ";border-radius:20px;'></div>";
                        css(f2[y], {
                            'line-height': 1
                        })
                    } else {
                        f2title[y].innerHTML = values[y - 1]
                    }
                } else {
                    if (x.indexOf("weight") > 0) {
                        f2title[y].innerHTML = values[y - 1]
                    } else {
                        y % 2 != 0 ? css(f2[y], {
                            'float': 'left'
                        }) : '';
                        css(f2[y], {
                            'width': '50%'
                        });
                        if (valuefromlang) {
                            f2title[y].innerHTML = Lang(values[y - 1] + 'val')
                        } else {
                            f2title[y].innerHTML = values[y - 1]
                        }
                    }
                }
                f2action[y] = x + '=' + values[y - 1];
                if ((values[y - 1] == v[x] && String(v[x]) != " ") || v[x] == '#' + values[y - 1]) {
                    f2value[y].innerHTML = _activeIcon;
                    css(f2title[y], {
                        'color': style.valuecolor
                    })
                }
                f2[y].addEventListener(evntovr, onOver);
                f2[y].addEventListener(evntout, onOut);
                if (x.indexOf("timer") > 0) {
                    f2[y].addEventListener(evntclk, onClickTimer2)
                } else {
                    f2[y].addEventListener(evntclk, onClickSubtitle2)
                }
                f2[y].addEventListener("mouseup", onMouseUp)
            }
            Resize()
        }

        function UpdateVars0(id) {
            if (exist(o.playlist_dic[id]['poster'])) {
                v.poster = o.playlist_dic[id]['poster'];
                exist(v.poster) ? o.media.Poster(v.poster) : ''
            }
            if (exist(o.playlist_dic[id]['title'])) {
                o.titlestore = o.playlist_dic[id]['title']
            }
        }

        function UpdateVars(id) {
            if (exist(o.playlist_dic[id]['title'])) {
                if (v.showtitleplaylist == 1) {
                    if (o.actions.TitleTemplate(o.playlist_dic[id])) {} else {
                        v.title = (v.addtitleplaylist == 1 && exist(o.maintitle) ? o.maintitle + (v.addtitleplaylistbr == 1 ? '<br>' : ' ') : '') + o.playlist_dic[id]['title']
                    }
                    o.actions.Title('title')
                }
            }
            if (v.pointed == 1) {
                if (exist(o.playlist_dic[id]['points'])) {
                    v.points = o.playlist_dic[id]['points']
                } else {
                    v.points = []
                }
                o.controls.RenewPoints()
            }
            v.remove = undefined;
            var xv = ['url', 'url2', 'url3', 'vars', 'embed', 'end', 'remove', 'delete', 'heartbeat', 'download', 'label', 'title2', 'thumbnails'];
            for (var i = 0; i < xv.length; i++) {
                if (exist(o.playlist_dic[id][xv[i]])) {
                    v[xv[i]] = o.playlist_dic[id][xv[i]]
                }
            }
            v.start = 0;
            if (exist(o.playlist_dic[id]['start'])) {
                v.start = o.seekto = o.playlist_dic[id]['start']
            }
            if (exist(o.playlist_dic[id]['sub'])) {
                o.playlist_dic[id]['subtitle'] = o.playlist_dic[id]['sub']
            }
            if (exist(o.playlist_dic[id]['subtitle'])) {
                o.actions.Subtitle(o.playlist_dic[id]['subtitle'])
            }
            if (exist(o.playlist_dic[id]['design'])) {
                apiProcessor('design', o.playlist_dic[id]['design'])
            }
        }

        function ActionPlaylist(x) {
            if (plx == 0 && !o.start) {
                css(ftitle[plx], {
                    'color': style.color
                });
                css(fbg[plx], {
                    'backgroundColor': style.bgcolor
                });
                fvalue[plx].innerHTML = ''
            } else {
                o.plopenid = x;
                if (plx > -1) {
                    HistoryPlaylist(plx)
                }
                if (plid != '') {
                    o.plhistory[plid] = true;
                    shuffle = removebykey(shuffle, plid)
                }
            } if (faction[x]) {
                var id = faction[x].substr(8);
                fvalue[x].innerHTML = _activeIcon;
                css(ftitle[x], {
                    'color': style.valuecolor,
                    'text-decoration': 'none',
                    'opacity': style.a
                });
                if (style.playbgcolored == 1 && exist(style.playbgcolor)) {
                    css(fbg[x], {
                        'backgroundColor': style.playbgcolor
                    })
                }
                plx = x;
                plid = id;
                o.plid = plid;
                v.plstart = plid;
                o.playlist_title = ftitle[x].innerHTML;
                o.plopenid = plid;
                plfolder = o.playlist_dic[id]['pjs_parent'];
                if (o.controls) {
                    o.controls.PlaylistControls()
                }
            }
        }

        function UpdatePlaylist(id) {
            var x = id == 0 ? o.playlist : o.playlist_dic[id];
            o.plopenid = id;
            for (var i = 0; i < f.length; i++) {
                if (style.floatleft == 1) {
                    control.removeChild(f[i])
                } else {
                    control2.removeChild(f[i])
                }
                f[i] = null
            }
            f = [];
            plx = -1;
            if (exist(x['folder'])) {
                var y = Object.keys(x['folder']).length;
                CreateItem('f', y);
                faction[y] = "playlistfolder";
                StyleItem(f[y], fbg[y], ftitle[y], fvalue[y]);
                if (style.floatleft == 1) {
                    css(f[y], {
                        "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"),
                        "height": style.floatheight
                    })
                }
                if (style.borderbottom == 1) {
                    if (style.floatleft == 1) {
                        css(f[y], {
                            "borderRight": "1px solid #" + style.headbordercolor
                        })
                    } else {
                        css(f[y], {
                            "borderBottom": "1px solid #" + style.headbordercolor
                        })
                    }
                }
                var tmp = x.title;
                if (style.noprevicon != 1) {
                    tmp = _prevIcon + tmp
                }
                ftitle[y].innerHTML = tmp;
                css(ftitle[y], {
                    'font-size': style.headfontsize
                });
                var p = x['pjs_parent'];
                f[y].addEventListener(evntovr, onOver);
                f[y].addEventListener(evntout, onOut);
                f[y].addEventListener(evntclk, function() {
                    PlaylistBack(p)
                });
                x = x['folder']
            }
            var y = Object.keys(x).length;
            shuffle = [];
            shuffle_ = [];
            for (var i = 0; i < y; i++) {
                CreateItem('f', i);
                faction[i] = "playlist" + x[i].id;
                if (!exist(o.plhistory[x[i].id]) && !exist(x[i].folder)) {
                    shuffle[x[i].id] = i;
                    shuffle_[x[i].id] = i
                }
                StyleItem(f[i], fbg[i], ftitle[i], fvalue[i]);
                if (style.floatleft == 1) {
                    if (style.activeiconsize == 0) {
                        css(ftitle[i], {
                            'width': style.floatwidth - style.paddingleft - style.paddingright
                        });
                        hide2(fvalue[i])
                    }
                    css(f[i], {
                        "width": (style.floatlimitwidth == 1 ? style.floatwidth : "auto"),
                        "height": style.floatheight
                    })
                }
                if (style.borderbottom == 1 && i < y - 1) {
                    var brd = createElement("div");
                    f[i].appendChild(brd);
                    if (style.floatleft == 1) {
                        css(brd, {
                            "position": "absolute",
                            "top": 0,
                            "right": 0,
                            "width": 1,
                            "height": "100%",
                            "background": "#" + style.bordercolor,
                            "pointerEvents": "none"
                        })
                    } else {
                        css(brd, {
                            "position": "absolute",
                            "bottom": 0,
                            "left": 0,
                            "width": "100%",
                            "height": 1,
                            "background": "#" + style.bordercolor,
                            "pointerEvents": "none"
                        })
                    }
                }
                ftitle[i].innerHTML = x[i].title ? x[i].title : '&nbsp;';
                if (v.timestore == 1 && v.playedstore == 1 && x[i].id) {
                    if (o.playedstored) {
                        if (o.playedstored.indexOf(x[i].id) > -1) {
                            x[i].played = 1
                        }
                    }
                }
                if (exist(x[i].played)) {
                    if (x[i].played == 1) {
                        o.plhistory[x[i].id] = true;
                        HistoryPlaylist(i)
                    }
                }
                if (exist(x[i].folder)) {
                    fvalue[i].innerHTML = _nextIcon;
                    css(fvalue[i], {
                        "color": style.color
                    })
                }
                f[i].addEventListener(evntovr, onOver);
                f[i].addEventListener(evntout, onOut);
                f[i].addEventListener(evntclk, onClick);
                f[i].addEventListener("mouseup", onMouseUp);
                if (exist(o.plhistory[x[i].id])) {
                    HistoryPlaylist(i)
                }
                if (plid == x[i].id) {
                    ActionPlaylist(i)
                }
                if (plfolder == x[i].id) {
                    css(ftitle[i], {
                        'color': style.valuecolor
                    });
                    css(fvalue[i], {
                        'color': style.valuecolor
                    })
                }
            }
            Resize();
            empty = false;
            o.controls ? o.controls.refresh() : ''
        }

        function StyleArrow(x, y, z, x1, y1, x2, y2, x3, y3, x4, y4) {
            var ww = (style.floatleft == 1 ? '40px' : '100%');
            var hh = (style.floatleft == 1 ? '100%' : '40px');
            css(x, {
                'position': 'absolute',
                'display': 'inline-block',
                'width': ww,
                'height': hh,
                'text-align': 'center'
            });
            if (style.scrollarrowgradient == 1) {
                css(x, {
                    'background': '-moz-linear-gradient(' + y + ')',
                    'background': '-webkit-linear-gradient(' + y + ')',
                    'background': '-ms-linear-gradient(' + y + ')',
                    'background': '-o-linear-gradient(' + y + ')',
                    'background': 'linear-gradient(' + y + ')',
                })
            }
            if (style.floatleft == 1 || o.system.mobile) {
                css(x, {
                    'cursor': 'pointer'
                })
            } else {
                css(x, {
                    'pointer-events': 'none'
                })
            } if (style.limitwidth == 1) {
                css(x, {
                    'max-width': style.limitmaxwidth + 'px!important'
                })
            }
            if (z == "top") {
                css(x, {
                    'top': -1,
                    'left': 0
                })
            }
            if (z == "bottom") {
                css(x, {
                    'bottom': -1,
                    'left': 0
                })
            }
            if (z == "left") {
                css(x, {
                    'top': 0,
                    'left': 0
                })
            }
            if (z == "right") {
                css(x, {
                    'top': 0,
                    'right': 0
                })
            }
            if (z == "right" || z == "left") {
                css(x, {
                    'text-align': 'left',
                    'padding-top': container.offsetHeight / 2 - 10
                })
            }
            x.innerHTML = "<center><div " + (style.scrollarrowbgover == 1 ? "onMouseOver='this.style.backgroundColor=\"#" + style.scrollarrowbgovercolor + "\"' onMouseOut='" + (style.scrollarrowbg == 1 ? "this.style.backgroundColor=\"#" + style.scrollarrowbgcolor : "this.style.background=\"none") + "\"'" : "") + " style='pointer-events:auto;cursor:pointer;width:20px;height:20px;border-radius:20px;" + (style.scrollarrowbg == 1 ? "background-color:#" + style.scrollarrowbgcolor + ";" : "") + (z == "top" ? "margin-top:10px;" : "") + (z == "bottom" ? "margin-top:10px;" : "") + (z == "right" ? "margin-left:0px;" : "") + (z == "left" ? "margin-right:0px;" : "") + "'><svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'><g><line x1='" + x1 + "' y1='" + y1 + "' x2='" + x2 + "' y2='" + y2 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/><line x1='" + x3 + "' y1='" + y3 + "' x2='" + x4 + "' y2='" + y4 + "' stroke='#" + style.scrollarrowcolor + "' stroke-width='" + style.scrollarrowsize + "' stroke-linecap='round'/></g></svg></div></center>"
        }
        this.Arrows = function() {
            if (style.scrollarrows == 1) {
                Arrows()
            }
        };

        function ArrowsInterval() {
            if (is_visible) {
                Arrows()
            }
        }

        function Arrows(e) {
            if (style.scrollarrows == 1 && !removed) {
                if (style.floatleft == 1) {
                    var h = control.scrollWidth;
                    var m = container.offsetWidth + style.bgpaddingleft + style.bgpaddingright;
                    var t = control.scrollLeft
                } else {
                    var h = control.scrollHeight;
                    var m = container.offsetHeight;
                    var t = control.scrollTop
                } if (h > m) {
                    if (t > 0) {
                        if (!isVisible(arr_up)) {
                            show(arr_up);
                            var m1 = new Motion({
                                "mc": arr_up,
                                "type": "alpha_div",
                                "to": 1,
                                "time": 0.3,
                                "me": "arr_up"
                            })
                        }
                    } else {
                        if (isVisible(arr_up)) {
                            var m2 = new Motion({
                                "mc": arr_up,
                                "type": "alpha_div",
                                "to": 0,
                                "time": 0.3,
                                "me": "arr_up",
                                "hide": true
                            })
                        }
                        if (e) {
                            e.deltaY < 0 ? e.preventDefault() : ''
                        }
                    } if (t < h - m - 10) {
                        if (!isVisible(arr_down)) {
                            show(arr_down);
                            var m3 = new Motion({
                                "mc": arr_down,
                                "type": "alpha_div",
                                "to": 1,
                                "time": 0.3,
                                "me": "arr_down"
                            })
                        }
                    } else {
                        if (isVisible(arr_down)) {
                            var m4 = new Motion({
                                "mc": arr_down,
                                "type": "alpha_div",
                                "to": 0,
                                "time": 0.3,
                                "me": "arr_down",
                                "hide": true
                            })
                        }
                        if (e) {
                            e.deltaY > 0 ? e.preventDefault() : ''
                        }
                    }
                } else {
                    hide(arr_up);
                    hide(arr_down)
                }
            }
        }

        function ScrollDown() {
            var x = control.scrollTop + container.offsetHeight - 60;
            var m = new Motion({
                "mc": control,
                "type": "scroll",
                "to": x,
                "time": 0.3,
                "me": "scroll_down",
                "ease": "cubic"
            });
            setTimeout(Arrows, 1000)
        }

        function ScrollUp() {
            var x = control.scrollTop - container.offsetHeight + 60;
            var m = new Motion({
                "mc": control,
                "type": "scroll",
                "to": x,
                "time": 0.3,
                "me": "scroll_up",
                "ease": "cubic"
            });
            setTimeout(Arrows, 1000)
        }

        function ScrollOverOut(event) {
            clearTimeout(o.settingsovertimer);
            event.stopPropagation()
        }

        function ScrollRight() {
            var x = control.scrollLeft + (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) - 60;
            var m = new Motion({
                "mc": control,
                "type": "scrollleft",
                "to": x,
                "time": 0.3,
                "me": "scroll_right",
                "ease": "cubic"
            });
            setTimeout(Arrows, 1000)
        }

        function ScrollLeft() {
            var x = control.scrollLeft - (container.offsetWidth + style.bgpaddingleft + style.bgpaddingright) + 60;
            var m = new Motion({
                "mc": control,
                "type": "scrollleft",
                "to": x,
                "time": 0.3,
                "me": "scroll_left",
                "ease": "cubic"
            });
            setTimeout(Arrows, 1000)
        }

        function PlaylistBack(x) {
            if (x == '') {
                UpdatePlaylist(0)
            } else {
                if (exist(o.playlist_dic[x])) {
                    UpdatePlaylist(x)
                }
            }
            open_action = ''
        }

        function HistoryPlaylist(x) {
            fvalue[x].innerHTML = '';
            css(ftitle[x], {
                'color': style.historycolor
            });
            if (style.historytitlestrike == 1) {
                css(ftitle[x], {
                    'text-decoration': 'line-through'
                })
            }
            if (style.historytitlea > -1) {
                css(ftitle[x], {
                    'opacity': style.historytitlea
                })
            }
            css(fbg[x], {
                'backgroundColor': style.historybgcolor
            });
            if (style.historybga > -1) {
                css(fbg[x], {
                    'opacity': style.historybga
                })
            }
        }

        function Action2(i) {
            if (exist(f2action[i])) {
                Retimer();
                if (f2action[i].indexOf("quality") == 0) {
                    o.actions.SetQuality(f2action[i].substr(7))
                }
                if (f2action[i].indexOf("audiotrack") == 0) {
                    o.actions.SetAudioTrack(f2action[i].substr(10))
                }
                if (f2action[i].indexOf("subtitle") == 0) {
                    !o.sbt ? o.sbt = new PluginSub() : '';
                    o.sbt.SetSubtitle(f2action[i].substr(8))
                }
                if (f2action[i].indexOf("channel") == 0 && v.channels == 1) {
                    o.channels.SetChannel(f2action[i].substr(7))
                }
                if (f2action[i].indexOf("scale") == 0) {
                    if (f2action[i] == 'scale0') {
                        o.media.scale(style.scale / 100)
                    }
                    if (f2action[i] == 'scale1') {
                        o.media.scale('-' + style.scale / 100)
                    }
                    if (f2action[i] == 'scale2') {
                        o.media.normalscale()
                    }
                }
                if (f2action[i].indexOf("timer") > 0) {
                    if (f2action[i].indexOf("timer2") > 0) {
                        SettingsTimers(open_action + '0');
                        Value(o[open_action + '_i']);
                        if (open_action == "offsettimer") {
                            SettingsTimers("offsetwrite")
                        }
                        Home()
                    }
                }
                if (f2action[i].indexOf("speed") == 0) {
                    o.actions.SetSpeed(f2action[i].substr(5));
                    UpdateSpeed();
                    setTimeout(HideControl, 200)
                }
            }
        };
        this.UpdateSpeed = function() {
            UpdateSpeed()
        };
        this.Exist = function(x) {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    return true
                }
            }
            return false
        };

        function UpdateSpeed() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "speed") {
                    Value(i);
                    if (open_action == 'speed') {
                        Remove2();
                        Action(i, 0)
                    }
                }
            }
        }

        function CreateItem(x, i, totheend) {
            if (exist(eval(x))) {
                eval(x)[i] = createElement("div");
                if (i < 2 || x == "f" || open_action != 'quality' || totheend) {
                    if (style.floatleft == 1) {
                        control.appendChild(eval(x)[i])
                    } else {
                        control2.appendChild(eval(x)[i])
                    }
                } else {
                    if (style.floatleft == 1) {
                        control.insertBefore(eval(x)[i], eval(x)[i - 1])
                    } else {
                        control2.insertBefore(eval(x)[i], eval(x)[i - 1])
                    }
                } if (x == 'f') {
                    attr(eval(x)[i], {
                        'fid': i
                    })
                }
                if (x == 'f2') {
                    attr(eval(x)[i], {
                        'f2id': i
                    })
                }
                eval(x + 'bg')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'bg')[i]);
                eval(x + 'img')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'img')[i]);
                css(eval(x + 'img')[i], {
                    'position': 'absolute',
                    'right': 0,
                    'top': 0,
                    'width': '100%',
                    'height': '100%',
                    'pointerEvents': 'none'
                });
                eval(x + 'title')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'title')[i]);
                eval(x + 'value')[i] = createElement("div");
                eval(x)[i].appendChild(eval(x + 'value')[i]);
                if (x == "f2" && is == "settings" && style.activeicon == 0) {
                    hide2(eval(x + 'value')[i])
                }
            }
        };

        function StyleItem(x, xbg, xtitle, xvalue, actn) {
            css(x, {
                'position': 'relative',
                'right': 0,
                'top': 0,
                'cursor': 'pointer',
                'height': 'auto',
                'width': '100%',
                'overflow': 'hidden',
                'display': 'block',
                'line-height': '1.5em'
            });
            if (style.floatmarginright && style.floatleft == 1) {
                css(x, {
                    'marginRight': style.floatmarginright
                })
            }
            if (style.floatleft == 1) {
                css(x, {
                    'display': 'inline-block',
                    'vertical-align': 'top',
                    'white-space': 'normal'
                })
            }
            css(xbg, {
                'position': 'absolute',
                'right': 0,
                'top': 0,
                'width': '100%',
                'height': '100%',
                'backgroundColor': style.bgcolor,
                'opacity': style.bga,
                'pointerEvents': 'none',
                'transition': 'opacity 0.2s linear,background .2s linear'
            });
            css(xtitle, {
                'position': 'relative',
                'right': 0,
                'top': 0,
                'float': (style.align ? style.align : 'left'),
                'color': style.color,
                'padding-top': style.paddingtop,
                'padding-right': style.paddingright,
                'padding-bottom': style.paddingbottom,
                'padding-left': style.paddingleft,
                'pointerEvents': 'none',
                'opacity': style.a,
                'transition': 'opacity 0.2s linear,color 0.2s linear',
            });
            css(xvalue, {
                'position': 'relative',
                'right': 0,
                'top': 0,
                'float': (style.valuealign ? style.valuealign : 'right'),
                'padding-top': style.paddingtop + (style.valuefontsize < style.fontsize ? (style.fontsize - style.valuefontsize) / 2 : 0),
                'padding-right': style.paddingright,
                'padding-left': style.paddingleft,
                'pointerEvents': 'none',
                'font-size': style.valuefontsize,
                'opacity': style.a,
                'color': style.valuecolor,
                'transition': 'opacity 0.2s linear,color 0.2s linear'
            });
            if (style.limitwidth == 1) {
                css(x, {
                    'max-width': style.limitmaxwidth + 'px!important'
                });
                css(xtitle, {
                    'max-width': (style.limitmaxwidth - 70) + 'px!important'
                })
            } else {
                if (style.floatleft == 1) {
                    if (style.floatlimitwidth == 1) {
                        css(x, {
                            'width': style.floatwidth
                        });
                        css(xtitle, {
                            'width': style.floatwidth - 70
                        })
                    }
                } else {
                    css(xtitle, {
                        'white-space': 'nowrap'
                    });
                    css(xvalue, {
                        'white-space': 'nowrap'
                    })
                }
            }
        }

        function Home() {
            for (var i = 1; i < f.length; i++) {
                if (exist(f[i])) {
                    if (style.floatleft == 1) {
                        f[i].style.display = "inline-block"
                    } else {
                        f[i].style.display = "block"
                    }
                }
            }
            Retimer();
            Remove2();
            Resize();
            open_action = '';
            open_settings = -1
        };

        function Remove2() {
            for (var j = 0; j < f2.length; j++) {
                if (f2[j]) {
                    if (style.floatleft == 1) {
                        control.removeChild(f2[j])
                    } else {
                        control2.removeChild(f2[j])
                    }
                    f2[j] = null
                }
            }
            f2 = [];
            open_action = ''
        }

        function Width() {
            return control.offsetWidth
        };
        this.resizePlaylist = function() {
            ResizePlaylist()
        };

        function ResizePlaylist() {
            if (is == "playlist") {
                if (style.floatleft == 1 || style.width100 == 1) {
                    var x = o.screen_w - style.marginright - style.marginleft;
                    css(container, {
                        'width': x
                    });
                    css(control, {
                        'width': x
                    });
                    control2 ? css(control2, {
                        'width': x
                    }) : ''
                }
            }
        }

        function Resize() {
            if (!removed) {
                if (is == "settings") {
                    o.controls ? o.controls.resizeSettings() : '';
                    var x = style.nohead == 1 && f.length > 1 ? f[1] : f[0]
                }
                if (is == "playlist") {
                    ResizePlaylist();
                    o.controls ? o.controls.resizePlaylist() : '';
                    var x = f[0];
                    if (v.change2playlist == 1) {
                        MainUpdateSize()
                    }
                }
                f.length > 1 && !x ? (f[1] ? x = f[1] : '') : '';
                f.length > 2 && !x ? (f[2] ? x = f[2] : '') : '';
                if (x) {
                    x.offsetWidth == 0 && f2.length > 0 ? x = f2[0] : ''
                }
                if (control.offsetWidth - control.clientWidth > 0 && x && style.floatleft != 1) {
                    if (exist(arr_up)) {
                        css(arr_up, {
                            "width": control2.offsetWidth
                        })
                    }
                    if (exist(arr_down)) {
                        css(arr_down, {
                            "width": control2.offsetWidth
                        })
                    }
                    style.scrollwidth = (control.offsetWidth - x.offsetWidth) - (control.clientWidth - x.clientWidth)
                } else {
                    style.scrollwidth = 0
                }
            }
        };

        function VisibleItems() {
            var x = 0;
            var y = 0;
            var z = '';
            for (var i = 1; i < f.length; i++) {
                if (exist(f[i])) {
                    if (f[i].style.visibility == "visible") {
                        x++;
                        y = i;
                        z = faction[i]
                    }
                }
            }
            return [x, y, z]
        }

        function SubtitleSettings() {
            sub_settings_on = !sub_settings_on;
            SubtitleSettingsMenu()
        }

        function SubtitleSettingsMenu() {
            Home();
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "subtitle") {
                    Action(i, _cstm)
                }
            }
        }

        function Retimer() {
            clearTimeout(settimer);
            settimer = setTimeout(function() {
                o.setaction = false
            }, 2000)
        }

        function SubtitleTimerMenu() {
            var x = open_action;
            Home();
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    Action(i, 0)
                }
            }
        }

        function HideControl(x) {
            if (is == 'settings' && v.settings.always == 1) {} else {
                if (is == 'playlist' && v.playlist.droplist == 1 && v.playlist.dropnohide != 1) {
                    o.droplist ? o.droplist.Hide() : '';
                    is_visible = false
                } else {
                    if ((x != 1 || (style.hidesmoothly == 1 && style.always == 1)) && !o.system.tv) {
                        var m = new Motion({
                            "mc": container,
                            "type": "alpha_div",
                            "to": 0,
                            "time": 0.1,
                            "me": is,
                            "ease": "elastic"
                        });
                        hidetimeout = setTimeout(function() {
                            css(container, {
                                "visibility": "hidden",
                                "opacity": 0,
                                "top": -2000
                            });
                            is_visible = false
                        }, 200)
                    } else {
                        css(container, {
                            "visibility": "hidden",
                            "opacity": 0,
                            "top": -2000
                        });
                        is_visible = false
                    }
                } if (is == 'playlist') {
                    if (v.playlist.hidecontrol == 1 && o.controls) {
                        o.controls.toggleControl("action", "playlist", true)
                    }
                }
                clearInterval(wheelinterval)
            }
        };
        this.c = function() {
            return container
        };
        this.co = function() {
            if (container.contains(control)) {
                return control
            }
        };
        this.s = function(key) {
            return style[key]
        };
        this.ss = function(key) {
            return style
        };
        this.show = function() {
            Home();
            clearTimeout(hidetimeout);
            is_visible = true;
            if (is == 'playlist' && v.playlist.droplist == 1) {
                o.droplist ? o.droplist.Show() : ''
            } else {
                css(container, {
                    "visibility": "visible",
                    "opacity": 1,
                    "transition": "opacity 0.2s linear"
                });
                var x = VisibleItems();
                if (x[0] == 1) {
                    if (x[2] == "quality" || x[2] == "audiotrack" || x[2] == "subtitle" || x[2] == "speed" || x[2] == "scale" || x[2].indexOf("timer") > 0) {
                        Action(x[1], 0)
                    }
                }
            } if (o.controls) {
                is == 'settings' ? o.controls.resizeSettings() : '';
                if (is == 'playlist') {
                    o.controls.resizePlaylist();
                    if (v.playlist.hidecontrol == 1) {
                        o.controls.toggleControl("action", "playlist", false)
                    }
                }
            }
            if (o.system.safari) {
                css(control, {
                    'min-width': 'auto'
                });
                if (style.floatleft != 1) {
                    css(control2, {
                        'min-width': 'auto'
                    })
                }
            }
            justshow = true;
            clearInterval(showinterval);
            showinterval = setInterval(ShowTimeout, 100)
        };

        function ShowTimeout() {
            clearInterval(showinterval);
            justshow = false
        }
        this.open = function(i) {
            Action(i, 1)
        };
        this.hide = function(x) {
            HideControl(x)
        };
        this.SetQuality = function() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "quality") {
                    Value(i);
                    if (o.files_quality.length > 1) {
                        show(f[i])
                    }
                    if (open_action == 'quality') {
                        Remove2();
                        Action(i, _cstm)
                    }
                }
            }
        };
        this.Airplay = function() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "airplay") {
                    Value(i)
                }
            }
        };
        this.SetSetting = function(x) {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == x) {
                    Value(i);
                    if (o['files_' + x]) {
                        if (o['files_' + x].length > 1) {
                            show(f[i])
                        }
                    }
                    if (open_action == x) {
                        Remove2();
                        Action(i, _cstm)
                    }
                }
            }
        };
        this.SetSubtitle = function() {
            for (var i = 0; i < faction.length; i++) {
                if (faction[i] == "subtitle") {
                    Value(i);
                    if (o.files_subtitle) {
                        if (o.files_subtitle.length > 0) {
                            var x = false;
                            if (o.subs) {
                                for (var y = 0; y < o.subs.length; y++) {
                                    if (o.subs[y] != '') {
                                        x = true;
                                        break
                                    }
                                }
                            } else {
                                x = true
                            }
                            x ? show(f[i]) : ''
                        }
                    }
                    if (open_action == 'subtitle') {
                        Remove2();
                        Action(i, 0)
                    }
                }
            }
        };
        this.updatePlaylist = function(x) {
            o.playlist = x;
            UpdatePlaylist(0);
            if (exist(v.plstart)) {
                if (v.plstart.indexOf("x-") != 0) {
                    for (var y in o.playlist_dic) {
                        if (o.playlist_dic.hasOwnProperty(y)) {
                            if (o.playlist_dic[y].pjs_id == v.plstart) {
                                v.plstart = y
                            }
                        }
                    }
                }
                if (exist(o.playlist_dic[v.plstart])) {
                    FindPlStart(o.playlist_dic[v.plstart]);
                    var y = o.playlist_dic[v.plstart]['pjs_i'];
                    ActionPlaylist(y);
                    if (v.playlist.openplaylistroot == 1 && style.droplist != 1) {
                        UpdatePlaylist(0);
                        setTimeout(function() {
                            Resize()
                        }, 500)
                    } else {
                        setTimeout(function() {
                            ScrollTo(y);
                            Resize()
                        }, 500)
                    }
                    v.plstart = undefined
                } else {
                    ActionPlaylist(0)
                }
            } else {
                ActionPlaylist(0)
            } if (style.droplist == 1) {
                if (!exist(o.droplist)) {
                    o.droplist = new PluginDroplist()
                }
            }
        };
        this.playById = function(x) {
            if (exist(o.playlist_dic[x])) {
                FindPlStart(o.playlist_dic[x]);
                Action(o.playlist_dic[x]['pjs_i'], 0);
                ScrollTo(o.playlist_dic[x]['pjs_i'])
            }
        };
        this.openById = function(x) {
            if (exist(o.playlist_dic[x])) {
                FindPlStart(o.playlist_dic[x]);
                if (o.playlist_dic[x]["file"]) {
                    ActionPlaylist(o.playlist_dic[x]['pjs_i']);
                    UpdateVars0(x);
                    o.actions.NewFile(o.playlist_dic[x]["file"], 1);
                    UpdateVars(x);
                    ScrollTo(o.playlist_dic[x]['pjs_i']);
                    if (o.droplist) {
                        o.droplist.Update()
                    }
                } else if (o.playlist_dic[x]["folder"]) {
                    UpdatePlaylist(x)
                }
            }
        };

        function showById(x) {
            if (exist(o.playlist_dic[x])) {
                plfolder = '';
                UpdatePlaylist(0);
                FindPlStart(o.playlist_dic[x]);
                UpdateVars0(x);
                Action(o.playlist_dic[x]['pjs_i'], 0);
                UpdateVars(x)
            }
        };
        this.PlaylistNext = function() {
            autonextopenfolder = true;
            x = parseInt(plx) + 1;
            if (plid != '') {
                o.plhistory[plid] = true;
                shuffle = removebykey(shuffle, plid)
            }
            if (v.shuffle == 1) {
                x = Shuffle(shuffle);
                if (x == null) {
                    if (v.shuffle8 == 1 || v.playlist.autoplaylist == 1) {
                        shuffle_.sort(function(a, b) {
                            return Math.random() - 0.5
                        });
                        for (var x in shuffle_) {
                            if (shuffle_.hasOwnProperty(x)) {
                                shuffle[x] = shuffle_[x]
                            }
                        }
                        x = Shuffle(shuffle)
                    } else {
                        o.actions.ShuffleEnd()
                    }
                }
            } else {
                if ((faction[x] == "playlistfolder" || plx == -1) && plid != '') {
                    var y = Object.keys(o.playlist_dic).indexOf(plid);
                    if (y < Object.keys(o.playlist_dic).length) {
                        var z = o.playlist_dic[Object.keys(o.playlist_dic)[y + 1]];
                        if (z) {
                            if (exist(z.folder)) {
                                z = o.playlist_dic[Object.keys(o.playlist_dic)[y + 2]]
                            }
                            this.openById(z.id);
                            x = -1;
                            o.actions.Play()
                        }
                    }
                }
            } if (x > -1) {
                Action(x, 0);
                ScrollTo(x)
            }
        };

        function ScrollTo(x) {
            if (f[x] && !removed) {
                if (style.floatleft == 1) {
                    var to = f[x].offsetLeft - 20;
                    var m = new Motion({
                        "mc": control,
                        "type": "scrollleft",
                        "to": to,
                        "time": 0.3,
                        "me": "scroll_left",
                        "ease": "cubic"
                    })
                } else {
                    var to = f[x].offsetTop - container.offsetHeight / 2 + 20;
                    var m = new Motion({
                        "mc": control,
                        "type": "scroll",
                        "to": to,
                        "time": 0.3,
                        "me": "scroll_down",
                        "ease": "cubic"
                    })
                }
                setTimeout(Arrows, 1000)
            }
        }

        function Shuffle(obj) {
            var keys = Object.keys(obj);
            var x;
            for (var i = 0; i < keys.length; i++) {
                x = obj[keys[keys.length * Math.random() << 0]];
                if (x) {
                    break
                }
            }
            return x
        };
        this.Scale = function() {
            Scale()
        };

        function Scale() {
            if (scale_i > -1) {
                Value(scale_i);
                if (open_action == 'scale') {
                    f2value[0].innerHTML = Math.round(o.mediascale.x * 100) + '%'
                }
            }
        };
        this.PlaylistNextExist = function() {
            if (v.shuffle == 1) {
                return Object.keys(shuffle).length > 0
            }
            var x = false;
            if (o.playlist_dic) {
                x = Object.keys(o.playlist_dic).indexOf(plid) < Object.keys(o.playlist_dic).length - 1
            }
            return x
        };
        this.PlaylistRewind = function() {
            if (exist(o.pl_first_id)) {
                showById(o.pl_first_id)
            }
        };
        this.PlaylistPrevExist = function() {
            var x = plx > 0;
            if (o.playlist_dic) {
                var y = Object.keys(o.playlist_dic);
                var z = y.indexOf(plid);
                x = z > 0;
                if (z == 1) {
                    if (exist(o.playlist_dic[y[0]].folder)) {
                        x = false
                    }
                }
            }
            return x
        };
        this.PlaylistExist = function() {
            return exist(o.playlist_dic)
        };
        this.PlaylistPrev = function() {
            autoprevopenfolder = true;
            if (this.PlaylistPrevExist()) {
                var x = parseInt(plx) - 1;
                if (x < 0) {
                    var y = Object.keys(o.playlist_dic).indexOf(plid);
                    if (y > 0) {
                        var z = o.playlist_dic[Object.keys(o.playlist_dic)[y - 1]];
                        if (z) {
                            if (exist(z.folder)) {
                                z = o.playlist_dic[Object.keys(o.playlist_dic)[y - 2]]
                            }
                            if (z) {
                                this.openById(z.id);
                                o.actions.Play()
                            }
                        }
                    }
                } else {
                    Action(x, 0);
                    ScrollTo(x)
                }
            }
        };
        this.PlaylistHere = function() {
            if (plx > 0) {
                ScrollTo(plx)
            }
        };

        function FindPlStart(x) {
            if (x['pjs_parent_i'] != -1) {
                FindPlStart(o.playlist_dic[x['pjs_parent']]);
                UpdatePlaylist(x['pjs_parent'])
            } else {
                UpdatePlaylist(0)
            }
        };
        this.g = function(x) {
            switch (x) {
                case "width":
                    return Width();
                    break;
                case "height":
                    return container.offsetHeight;
                    break;
                case "top":
                    return container.offsetTop;
                    break;
                case "scroll_height":
                    return control.scrollHeight;
                    break;
                case "margin_bottom":
                    return style.marginbottom;
                    break;
                case "x":
                    return int(container.style.left);
                    break;
                case "y":
                    return int(container.style.top);
                    break;
                case "opacity":
                    return container.style.opacity;
                    break;
                case "show":
                    return is_visible;
                    break;
                case "open":
                    return open_settings;
                    break;
                case "key":
                    return key;
                    break;
                case "motion_id":
                    return key + motion_id;
                    break;
                case "empty":
                    return empty;
                    break;
                case "playlist":
                    return is == "playlist";
                    break;
                case "activeicon":
                    return _activeIcon;
                    break;
                case "butplstart":
                    return o.playlist_dic[o.butplstart] ? o.playlist_dic[o.butplstart].title : '';
                case "title2":
                    return v.title2 ? v.title2 : ''
            }
        };
        this.empty = function() {
            if (is == "settings") {
                var x = 0;
                for (var i = 1; i < 11; i++) {
                    if (faction[i] == "quality") {
                        var y = o.files_quality.length;
                        if (exist(v.forbidden_quality)) {
                            var z = v.forbidden_quality.split(",");
                            for (var j = 0; j < z.length; j++) {
                                if (o.files_quality.indexOf(z[j]) > -1) {
                                    y--
                                }
                            }
                        }
                        if (y > 0) {
                            if (y > 1 || (y == 1 && o.files_quality != 1 && style.show1value == 1)) {
                                x++
                            }
                        }
                    }
                    if (faction[i] == "airplay") {
                        if (o.airplay) {
                            x++
                        }
                    }
                    if (faction[i] == "download") {
                        if (o.file_type == 'native' || v.download) {
                            x++
                        }
                    }
                    if (faction[i] == "audiotrack") {
                        if (o.files_audiotrack.length > 0) {
                            x++
                        }
                    }
                    if (faction[i] == "channel" && v.channels == 1) {
                        if (o.files_channel.length > 0) {
                            x++
                        }
                    }
                    if (faction[i] == "subtitle") {
                        if (exist(o.subs)) {
                            for (var s = 0; s < o.subs.length; s++) {
                                if (o.subs[s] != '') {
                                    x++;
                                    break
                                }
                            }
                        }
                    }
                    if (faction[i] == "speed") {
                        if (o.file_type != "vimeo") {
                            x++
                        }
                    }
                    if (faction[i] == "scale") {
                        x++
                    }
                    if (faction[i]) {
                        if (faction[i].indexOf("timer") > 0) {
                            x++
                        }
                    }
                    if (v.settings[is + i + 'hide'] == 1) {
                        x--
                    }
                }
                return x == 0
            } else if (is == "playlist") {
                return f.length == 0
            } else {
                console.log("empty", is, empty);
                return empty
            }
        };
        this.Remove = function() {
            if (container.parentNode == o.frame) {
                container.removeChild(control);
                o.frame.removeChild(container);
                o.droplist ? o.droplist.Remove() : '';
                container = null;
                control = null;
                removed = true
            }
        }
    };
    var MediaYoutube = function(url, parentcontainer) {
        var intro = false;
        if (url.indexOf('intro') == 0) {
            intro = true;
            url = url.substr(5)
        }
        var youtube_id = YoutubeID(url);
        var error;
        var player;
        var created = false;
        var ready = false;
        var started = false;
        var vastonmobile = false;
        var auto = true;
        var _set_quality = [];
        var _speed = 1;
        var _wait = false;
        var startwait_t;
        var _start = 0;
        var _readyonplay = 0;
        var quality_received = false;
        var container_id = 'pljs_yt_' + v.id + (intro ? 'intro' : '');
        var container = createElement('div');
        container.setAttribute('id', container_id);
        parentcontainer.appendChild(container);
        o.airplay = false;
        !intro ? o.actions.AirplayChanged() : '';
        if (o.system.mobile) {
            v.preload = 1
        }
        if (v.youtubecontrols != 1) {
            var layer = createElement('div');
            parentcontainer.appendChild(layer);
            css(layer, {
                position: "absolute",
                top: 0,
                left: 0,
                "background-color": "#ff0000",
                height: "100%",
                width: "100%",
                "opacity": 0
            });
            layer.addEventListener("dblclick", function(event) {
                event.cancelBubble = true
            });
            if (o.system.mobile) {
                layer.addEventListener("touchstart", function(event) {
                    event.cancelBubble = true
                });
                layer.addEventListener("click", function(event) {
                    event.cancelBubble = true
                });
                layer.addEventListener("touchend", function(event) {
                    event.cancelBubble = true;
                    ScreenClick(event);
                    if (v.screenclick == 1) {
                        setTimeout(HideLayer, 100);
                        setTimeout(ShowLayer, 1000)
                    }
                })
            } else {
                layer.addEventListener("mousemove", function(event) {
                    var x = true;
                    if (v.vast == 1) {
                        if (exist(v.preroll) && !started) {
                            x = false
                        }
                        if (exist(v.playroll) && Status() == "paused" && time() > 0) {
                            x = false
                        }
                    }
                    if (x && v.screenclick == 1 && v.youtubelayer == 1 && v.ytcl != 1) {
                        hide2(this);
                        setTimeout(ShowLayer, 2000)
                    }
                })
            }
            v.screenclick == 1 ? hide2(layer) : ''
        }

        function ShowLayer() {
            show2(layer)
        }

        function HideLayer() {
            if (v.ytcl != 1) {
                hide2(layer)
            }
        }
        if (v.preload == 1 && v.autoplay == 0) {
            onWaiting()
        }
        if (!window['YT']) {
            window.onYouTubeIframeAPIReady = function() {
                YouTubeIframeAPIReady();
                for (var i = 0; i < pljssglobal.length; i++) {
                    if (pljssglobal[i].api("id") != v.id) {
                        if (pljssglobal[i].api('isyoutube')) {
                            pljssglobal[i].api('youtubeready')
                        }
                    }
                }
            };
            if (!Scripted("youtube.com/iframe_api")) {
                var tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                tag.name = "youtube_iframe_api";
                var firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                tag.onerror = function(e) {
                    o.actions.MediaReady();
                    if (v.yterrors != 1) {
                        error = 'YouTube API Error';
                        o.media.onError()
                    }
                }
            }
        } else {
            YouTubeIframeAPIReady()
        }

        function YouTubeIframeAPIReady() {
            if (v.preload == 1 || intro) {
                !created ? Init() : ''
            } else {
                o.actions.MediaReady()
            }
        }

        function Init() {
            if ("YT" in window) {
                if (exist(YT.Player) && !created) {
                    log("Youtube Init");
                    var cntrls = 0;
                    if (v.youtubecontrols == 1) {
                        cntrls = 1
                    }
                    o.seekto > 0 ? _start = parseInt(o.seekto) : '';
                    player = new YT.Player(container_id, {
                        height: o.container_h,
                        width: o.container_w,
                        videoId: youtube_id,
                        playerVars: {
                            enablejsapi: 1,
                            playerapiid: container_id,
                            html5: 1,
                            disablekb: 1,
                            autohide: 1,
                            playsinline: ((v.playsinlineonmobile == 0 || (v.playsinlineonmobileiphone != 1 && o.system.iphone)) && o.system.mobile ? 0 : 1),
                            iv_load_policy: 3,
                            controls: cntrls,
                            showinfo: 0,
                            modestbranding: 1,
                            rel: 0,
                            autoplay: 0,
                            loop: 0
                        },
                        events: {
                            'onReady': onYtPlayerReady,
                            'onStateChange': onYtPlayerStateChange,
                            'onError': onError,
                            'onPlaybackQualityChange': onQualityChanged
                        }
                    });
                    if (o.seekto > 0) {
                        o.seekto = undefined
                    }
                    Resize();
                    created = true
                } else {
                    setTimeout(Init, 500)
                }
            } else {
                setTimeout(Init, 500)
            }
        }
        var _play_i;

        function onYtPlayerReady() {
            log("Youtube Ready");
            ready = true;
            clearTimeout(startwait_t);
            o.actions.StopWaiting();
            if (intro) {
                if (o.system.mutedautoplay) {
                    o.actions.Mute()
                }
                player.playVideo();
                o.vast.ytReady()
            } else {
                if (v.autoplay == 1 && o.system.mutedautoplay && !o.acted) {
                    o.actions.Mute();
                    if (o.system.mobile) {
                        clearInterval(_play_i);
                        _play_i = setInterval(PlayingChecker, 300)
                    }
                }
                if (v.preload == 0) {
                    player.playVideo()
                } else {
                    o.actions.MediaReady()
                }
                o.media.onDuration();
                if (_speed != 1) {
                    SetSpeed(_speed)
                }
                onMeta();
                Resize()
            }
        }

        function PlayingChecker() {
            var x = player.getPlayerState();
            if (x == 2 || x == -1) {
                o.controls.Pause();
                o.controls.StopWaiting();
                clearInterval(_play_i)
            }
            if (x == 1) {
                clearInterval(_play_i)
            }
        }

        function onYtPlayerStateChange(event) {
            if (intro) {
                if (event.data == YT.PlayerState.ENDED) {
                    o.vast.ytEnded()
                }
                if (event.data == YT.PlayerState.PLAYING) {}
            } else {
                if (event.data == YT.PlayerState.PLAYING) {
                    if (_readyonplay == 1) {
                        _readyonplay = 0;
                        onYtPlayerReady()
                    }
                    o.actions.Play();
                    if (_start > 0) {
                        player.seekTo(_start, true);
                        _start = 0;
                        o.seekto = undefined
                    }
                    ShowLayer();
                    started = true;
                    ready = true;
                    if (vastonmobile) {
                        player.pauseVideo()
                    } else {
                        o.media.onPlay();
                        o.media.onTimeupdate()
                    }
                    Qualities();
                    if (exist(v.default_quality)) {
                        for (var i = 0; i < o.files_quality.length; i++) {
                            if (v.default_quality == o.files_quality[i]) {
                                SetQuality(i)
                            }
                        }
                        v.default_quality = null
                    } else {
                        if (exist(o.default_quality)) {
                            for (var i = 0; i < o.files_quality.length; i++) {
                                if (o.default_quality == o.files_quality[i]) {
                                    SetQuality(i)
                                }
                            }
                            o.default_quality = null
                        }
                    }
                    _wait = false
                }
                if (event.data == -1 && _wait && o.play) {
                    o.actions.StopWaiting();
                    _wait = false;
                    onPause()
                }
                if (event.data == YT.PlayerState.PAUSED) {
                    onPause()
                }
                if (event.data == YT.PlayerState.ENDED) {
                    onEnded()
                }
                if (event.data == YT.PlayerState.BUFFERING) {
                    if (!o.play) {
                        o.actions.Play()
                    }
                    _wait = true;
                    onWaiting()
                }
                if (event.data == YT.PlayerState.CUED) {}
            }
        }

        function onError(event) {
            if (intro) {
                o.vast.ytError()
            } else {
                if (event.data == 2) {
                    error = "wrong youtube id"
                }
                if (event.data == 5) {
                    error = "network empty"
                }
                if (event.data == 101 || event.data == 150 || event.data == 100) {
                    error = "this video is unavailable"
                }
                if (v.customyterrors == 1) {
                    exist(v.customyterror) ? error = v.customyterror : ''
                }
                if (v.yterrors != 1) {
                    o.media.onError()
                } else {
                    hide(o.poster)
                }
            }
        }

        function onEnded() {
            v.start > 0 ? _start = v.start : '';
            o.media.onEnded();
            o.media.onDuration()
        }

        function onPause() {
            if (!o.nopause) {
                o.actions.Pause()
            }
        }

        function onTimeupdate() {
            o.media.onTimeupdate()
        }

        function onMeta() {
            o.media.onMeta();
            o.actions.LoadedData()
        }

        function onDuration() {
            o.media.onDuration()
        }

        function onVolume() {
            o.media.onVolume()
        }

        function onWaiting() {
            if (o.media) {
                o.media.onWaiting()
            } else {
                startwait_t = setTimeout(onWaiting, 100)
            }
        }

        function onQualityChanged(event) {
            SetCurrentQuality(event.data)
        }

        function Qualities() {
            if (!quality_received) {
                var x = player.getAvailableQualityLevels() + '';
                if (x != '' && x != undefined) {
                    o.files_quality = x.split(',');
                    if (v.ytautoquality == 0) {
                        var y = o.files_quality.indexOf('auto');
                        if (y > -1) {
                            o.files_quality.splice(y, 1)
                        }
                    }
                    for (var i = 0; i < o.files_quality.length; i++) {
                        o.files_quality[i] = RenameQualities(o.files_quality[i])
                    }
                    quality_received = true;
                    SetCurrentQuality(player.getPlaybackQuality())
                }
            }
        }

        function SetCurrentQuality(x) {
            o.current_quality = o.files_quality.indexOf(RenameQualities(x + ''));
            o.controls.QualityChanged(o.current_quality)
        }
        this.size = function() {
            return {
                "width": 0,
                "height": 0
            }
        };
        this.src = function(x) {
            youtube_id = YoutubeID(x);
            if (o.seekto > 0) {
                _start = parseInt(o.seekto)
            }
            playById(youtube_id)
        };

        function Status() {
            var state = -1;
            if (ready) {
                state = player.getPlayerState()
            }
            var x = '';
            if (state == -1) {
                x = "paused"
            }
            if (state == 1 || state == 3) {
                x = "playing"
            }
            if (state == 2) {
                x = "paused";
                if (o.play) {
                    o.controls.Pause();
                    o.actions.StopWaiting()
                }
            }
            if (state == 5) {
                x = "paused"
            }
            if (state == 0) {
                x = "ended"
            }
            return x
        }

        function Resize() {
            player ? player.setSize(o.screen_w, o.screen_h) : ''
        }

        function RenameQualities(x) {
            var y = x;
            if (x == "tiny") {
                y = "160p"
            }
            if (x == "small") {
                y = "240p"
            }
            if (x == "medium") {
                y = "360p"
            }
            if (x == "large") {
                y = "480p"
            }
            if (x == "hd720") {
                y = "720p"
            }
            if (x == "hd1080") {
                y = "1080p"
            }
            if (v.nameofyoutubequality == 1) {
                y = Lang(y)
            }
            if (x == "auto") {
                y = Lang("auto")
            }
            _set_quality[y] = x;
            return y
        }

        function time() {
            return ready ? player.getCurrentTime() : 0
        };

        function SetSpeed(x) {
            player ? player.setPlaybackRate(x) : '';
            _speed = x
        };
        this.YoutubeReady = function() {
            YouTubeIframeAPIReady()
        };
        this.Play = function() {
            if (ready) {
                player.playVideo()
            } else {
                if (!created) {
                    Init()
                } else {}
            }
        };
        this.Pause = function() {
            if (ready) {
                player.pauseVideo()
            }
        };
        this.Toggle = function() {
            if (ready) {
                Status() == 'playing' ? player.pauseVideo() : player.playVideo()
            }
        };
        this.Seek = function(x) {
            ready ? player.seekTo(x, true) : ''
        };
        this.tag = function() {
            return false
        };
        this.Mute = function() {
            ready ? player.mute() : ''
        };
        this.Unmute = function() {
            ready ? player.unMute() : ''
        };
        this.Volume = function(x) {
            ready ? player.setVolume(x * 100) : ''
        };
        this.isPlaying = function() {
            return Status() == 'playing'
        };
        this.isLive = function() {
            return false
        };
        this.setQuality = function(x) {
            SetQuality(x)
        };

        function SetQuality(x) {
            if (ready) {
                if (exist(o.files_quality[x])) {
                    var y = _set_quality[o.files_quality[x]];
                    auto = y == 'auto';
                    var z = time();
                    player.setPlaybackQuality(y)
                }
            }
        }
        this.setSpeed = function(x) {
            SetSpeed(x)
        };
        this.ready = function() {
            return ready
        };
        this.status = function() {
            return Status()
        };
        this.time = function() {
            return time()
        };
        this.duration = function() {
            var x = ready ? player.getDuration() : 0;
            if (exist(v.end)) {
                x = v.end
            }
            return x
        };
        this.loaded = function() {
            var x = 0;
            if (ready) {
                x = player.getVideoLoadedFraction() * player.getDuration()
            }
            return x
        };
        this.resize = function() {
            Resize()
        };
        this.errorMessage = function() {
            return error
        };
        this.auto = function() {
            return v.ytautoquality == 1 ? auto : false
        };
        this.playId = function(x) {
            playById(x)
        };

        function playById(x) {
            url = x;
            if (player) {
                _readyonplay = 1;
                player.loadVideoById(x, 0)
            }
        }
        this.BeforeVast = function() {
            if (o.system.mobile && o.system.android) {
                this.Play();
                vastonmobile = true
            } else {
                if (Status() == "playing") {
                    this.Pause()
                }
            }
        };
        this.AfterVast = function() {
            vastonmobile = false
        };
        this.nativeControls = function() {
            return true
        };
        this.Remove = function() {
            ready ? player.destroy() : '';
            ready = false;
            quality_received = false;
            try {
                if (container) {
                    parentcontainer.removeChild(container)
                }
                parentcontainer.removeChild(layer)
            } catch (e) {}
        }
    };
    var TimeStore = function() {
        var x = '';
        var t = 0;
        var d = 0;
        if (o.storage) {
            if (v.timestoredontuse != 1) {
                if (localStorage.getItem("pljsplayfrom_" + v.id + o.href2) != null) {
                    x = localStorage.getItem("pljsplayfrom_" + v.id + o.href2)
                }
                if (v.playedstore == 1 && localStorage.getItem("pljsplayed_" + v.id + o.href2) != null) {
                    o.playedstore = localStorage.getItem("pljsplayed_" + v.id + o.href2)
                }
                if (exist(v.cuid)) {
                    if (localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) != null) {
                        x = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid)
                    }
                    if (v.playedstore == 1 && localStorage.getItem("pljsplayed_" + o.d + v.cuid) != null) {
                        o.playedstore = localStorage.getItem("pljsplayed_" + o.d + v.cuid)
                    }
                }
                if (o.playedstore && v.playedstore == 1) {
                    o.playedstored = o.playedstore.split(",")
                }
                if (x.indexOf("{") == 0) {
                    if (v.timestorejustbut == 1) {
                        o.butplstart = x.substr(1, x.indexOf("}") - 1)
                    } else {
                        o.plcontinue = v.plstart = x.substr(1, x.indexOf("}") - 1)
                    }
                    x = x.substr(x.indexOf("}") + 1);
                    v.timestore0plroot == 1 ? v.playlist.openplaylistroot = 0 : ''
                }
                UpdateTime(x)
            }
        };

        function UpdateTime(x) {
            if (x) {
                if (x.indexOf("--") > 0) {
                    var y = x.split("--");
                    t = parseFloat(y[0]);
                    if (v.timestorejustbut == 1) {
                        o.butseekto = t
                    } else {
                        d = parseFloat(y[1]);
                        o.seekto = t
                    }
                }
            }
        }
        this.updateCuid = function() {
            if (exist(v.cuid)) {
                if (localStorage.getItem("pljsplayfrom_" + o.d + v.cuid) != null) {
                    x = localStorage.getItem("pljsplayfrom_" + o.d + v.cuid);
                    UpdateTime(x);
                    o.controls.Played(t, d);
                    o.controls.Duration(t, d);
                    v.duration = d
                } else {
                    o.seekto = 0;
                    o.controls.Played(0, 0);
                    o.controls.Duration(0, 0);
                    v.duration = 0
                }
            }
        };
        this.write = function(t, d) {
            if (o.media.isLive() && v.timestorenolive == 1) {} else {
                var ct = new Date().getTime();
                localStorage.setItem("pljsplayfrom_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2), (exist(o.plid) ? "{" + o.plid + "}" : '') + t + '--' + d + '--' + ct)
            }
        };
        this.writePl = function(x) {
            o.playedstore = (o.playedstore ? o.playedstore + ',' : '') + x;
            localStorage.setItem("pljsplayed_" + (exist(v.cuid) ? o.d + v.cuid : v.id + o.href2), o.playedstore)
        };
        this.flag = function() {
            return {
                t: t,
                d: d
            }
        }
    };
    var PluginSub = function() {
        var sub = [];
        var empty = true;
        this.start = function(x) {
            Start(x)
        };

        function Start(x) {
            if (x != '') {
                var start = 0;
                var memory = '';
                o.subs = x.split(",");
                o.files_subtitle = [];
                o.current_subtitle = -1;
                if (StorageSupport() && v.sub_store == 1) {
                    if (localStorage.getItem("pljssubtitle") != null) {
                        memory = localStorage.getItem("pljssubtitle")
                    }
                } else {
                    if (o.remember_sub) {
                        memory = o.remember_sub
                    }
                }
                for (var i = 0; i < o.subs.length; i++) {
                    if (o.subs[i].indexOf("#0") == 0) {
                        o.subs[i] = fd0(o.subs[i])
                    }
                    if (o.subs[i].indexOf("#" + v.enc2) == 0) {
                        o.subs[i] = o[o.fd[0]](o.subs[i])
                    }
                    if (o.subs[i].indexOf("[") == 0 && o.subs[i].indexOf("]") > 1) {
                        o.files_subtitle[i] = o.subs[i].substr(o.subs[i].indexOf("[") + 1, o.subs[i].indexOf("]") - 1);
                        o.subs[i] = o.subs[i].substr(o.subs[i].indexOf("]") + 1)
                    } else {
                        o.files_subtitle[i] = o.subs[i].substr(o.subs[i].lastIndexOf("/") + 1);
                        o.files_subtitle[i] = o.files_subtitle[i].substr(0, o.files_subtitle[i].lastIndexOf("."))
                    } if (o.subs[i].indexOf("#0") == 0) {
                        o.subs[i] = fd0(o.subs[i])
                    }
                    if (o.subs[i].indexOf("#" + v.enc2) == 0) {
                        o.subs[i] = o[o.fd[0]](o.subs[i])
                    }
                }
                if (o.files_subtitle.length > 1 && v.sub_all == 1) {
                    o.files_subtitle.push(StringVar('sub_all_title', Lang('together')));
                    o.subs.push("all")
                }
                if (o.files_subtitle.length > 0 && v.sub_off == 1) {
                    o.files_subtitle.push(StringVar('sub_off_title', Lang('off')));
                    o.subs.push("")
                }
                for (var i = 0; i < o.subs.length; i++) {
                    if (exist(v.default_subtitle)) {
                        if (v.default_subtitle == o.files_subtitle[i]) {
                            start = i;
                            o.current_subtitle = i
                        }
                    }
                    if (memory != '') {
                        if (memory == o.files_subtitle[i]) {
                            start = i;
                            o.current_subtitle = i
                        }
                    }
                }
                if (v.sub_off == 1 && v.subtitle_start == 0) {
                    o.current_subtitle = o.files_subtitle.length - 1
                }
                exist(o.controls) ? o.controls.SubtitleChanged() : '';
                if (v.subtitle_start == 1) {
                    o.current_subtitle = start;
                    if (v.sub_all == 1 && o.subs[start] == "all") {
                        SubtitleLoadAll(o.current_subtitle)
                    } else {
                        SubtitleLoad(o.current_subtitle)
                    }
                } else {
                    v.sub_off != 1 ? o.current_subtitle = -1 : ''
                }
            } else {
                Remove()
            }
        }

        function SubtitleLoad(x) {
            if (exist(o.subs[x])) {
                if (o.subs[x].indexOf(".") > -1) {
                    o.subsor = o.subs[x].split(" or ");
                    o.sub_or = 0;
                    SubtitleLoad2()
                }
            }
        }

        function SubtitleLoadAll(x) {
            sub[x] = Object();
            sub[x][0] = Array();
            sub[x][1] = Array();
            for (var i = 0; i < o.subs.length; i++) {
                setTimeout(SubtitleLoad, i * 500, i)
            }
        }

        function SubtitleLoad2(x) {
            var url = trim(o.subsor[o.sub_or]);
            var xhr = XHR(url);
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    o.subtitle_on = true;
                    SubtitleParse(url, this.responseText, x)
                } else {
                    if (o.sub_or + 1 < o.subsor.length) {
                        o.sub_or++;
                        SubtitleLoad2()
                    } else {
                        SubtitleError("loading_error")
                    }
                }
            };
            xhr.onerror = function(e) {
                if (o.sub_or + 1 < o.subsor.length) {
                    o.sub_or++;
                    SubtitleLoad2()
                } else {
                    SubtitleError("loading_error")
                }
            };
            xhr.send()
        };

        function SubtitleError(x) {
            log("subtitle not found or access denied");
            if (o.files_subtitle[o.current_subtitle].indexOf(Lang("loading_error")) == -1) {
                o.files_subtitle[o.current_subtitle] = o.files_subtitle[o.current_subtitle] + ' (' + Lang(x) + ')'
            }
            v.subtitle_errdel == 1 ? o.subs[o.current_subtitle] = '' : '';
            o.current_subtitle = -1;
            o.subtitle_on = false;
            if (o.constrols) {
                o.controls.SubtitleChanged();
                o.controls.refresh()
            } else {
                setTimeout(function() {
                    o.controls.SubtitleChanged();
                    o.controls.refresh()
                }, 100)
            } if (exist(o.subtitle)) {
                o.frame.removeChild(o.subtitle);
                o.subtitle = null
            }
        }

        function SubtitleParse(url, x, y) {
            if (url.indexOf('.srt') > -1 || url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1 || url.indexOf('.vtt') > -1) {
                var l = o.current_subtitle;
                if (exist(sub[l]) && o.subs[l] == "all") {} else {
                    sub[l] = Object();
                    sub[l][0] = Array();
                    sub[l][1] = Array()
                }
                var rows = Array();
                rows = x.split(/\r|\n/);
                var cnt = 1;
                var t1 = 0;
                var t2 = 0;
                var url_shift = (exist(v.subshift) ? v.subshift : 0);
                if (url.indexOf('shift=') > 0) {
                    url_shift = url.substr(url.indexOf('shift=') + 6) * 1
                }
                for (i = 0; i < rows.length; i++) {
                    if (url.indexOf('.srt') > -1 || url.indexOf('.vtt') > -1) {
                        if (rows[i].indexOf('-->') > -1 && rows[i].indexOf(':') > -1) {
                            t1 = TimeSub(rows[i].substr(0, rows[i].indexOf('-->'))) * 1 + url_shift;
                            t1 == 0 ? t1 = 1 : '';
                            t2 = TimeSub(rows[i].substr(rows[i].indexOf('-->') + 4, 12)) * 1 + url_shift;
                            exist(sub[l][0][t1]) ? '' : sub[l][0][t1] = '';
                            for (var j = t1; j < t2; j++) {
                                sub[l][1][j] = t1
                            }
                            cnt++
                        } else {
                            rows[i] = trim(rows[i]);
                            if (rows[i] != '' && rows[i].length > 0 && rows[i] != cnt && rows[i] != 'WEBVTT') {
                                sub[l][0][t1] = (sub[l][0][t1] && sub[l][0][t1] != '' ? sub[l][0][t1] + '<br>' : '') + (o.subs[l] == "all" && y > 0 ? '[sub2]' : '') + rows[i] + (o.subs[l] == "all" && y > 0 ? '[/sub2]' : '')
                            }
                        }
                    }
                    if (url.indexOf('.ass') > -1 || url.indexOf('.ssa') > -1) {
                        if (rows[i].indexOf('Dialogue:') > -1) {
                            t1 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 3 : 12), 12)) * 1 + url_shift;
                            t2 = TimeSub(rows[i].substr((url.indexOf('.ssa') > -1 ? rows[i].indexOf('=0') + 14 : 23), 10)) * 1 + url_shift;
                            var p = '';
                            if (rows[i].indexOf('0,,') > 0) {
                                p = rows[i].substr(rows[i].indexOf('0,,') + 3)
                            } else {
                                if (rows[i].indexOf('ffect,') > 0) {
                                    p = rows[i].substr(rows[i].indexOf('ffect,') + 6)
                                }
                            } if (sub[l][0][t1] != undefined) {
                                sub[l][0][t1] += '\n' + (o.subs[l] == "all" && y > 0 ? '[sub2]' : '') + p + (o.subs[l] == "all" && y > 0 ? '[/sub2]' : '')
                            } else {
                                sub[l][0][t1] = p
                            }
                            sub[l][0][t1] = sub[l][0][t1].replace(/{.*?}/, '');
                            sub[l][0][t1] = sub[l][0][t1].replace(/\\\\N/, '<br>');
                            sub[l][0][t1] = sub[l][0][t1].replace(/\\N/, '<br>');
                            for (var j = t1; j < t2; j++) {
                                sub[l][1][j] = t1
                            }
                        }
                    }
                }
                o.controls.SubtitleChanged();
                o.actions.RenewSubtitle()
            } else {
                SubtitleError("error")
            }
        }

        function TimeSub(srt) {
            var tmp = srt.split(':');
            var out = 0;
            tmp.length == 2 ? tmp.unshift("00") : '';
            tmp[0] != '00' ? out += tmp[0] * 3600 : '';
            tmp[1] != '00' ? out += tmp[1] * 60 : '';
            out += tmp[2].substr(0, 2) * 1;
            out = out * 10 + tmp[2].substr(3, 1) * 1;
            return out
        };

        function SetSubtitle(x) {
            if (exist(o.subs[x])) {
                log("Subtitle", x);
                o.current_subtitle = x;
                if (exist(o.files_subtitle[x])) {
                    if (o.storage && v.sub_store == 1) {
                        localStorage.setItem("pljssubtitle", o.files_subtitle[x])
                    } else {
                        o.remember_sub = o.files_subtitle[x]
                    }
                }
                if (o.file_type == "hls" && o.hls_subs == true) {
                    o.media.hlsDashSub(x, "hls")
                } else {
                    if (o.file_type == "dash" && o.dash_subs == true) {
                        o.media.hlsDashSub(x, "dash")
                    } else {
                        if (o.subs[x] == "all") {
                            SubtitleLoadAll(o.current_subtitle)
                        } else {
                            SubtitleLoad(o.current_subtitle)
                        }
                    }
                }
            }
        };
        this.SetSubtitle = function(x) {
            if (exist(o.current_subtitle)) {
                if (o.current_subtitle != x) {
                    if (x == -1 || (v.sub_off == 1 && x == o.files_subtitle.length - 1)) {
                        SubtitleOff()
                    } else {
                        v.sub_shift = 0;
                        o.current_subtitle = x;
                        o.subtitle_on = true;
                        v.subtitle_start = 1;
                        SetSubtitle(x);
                        js("subtitle", o.files_subtitle[x]);
                        o.controls.SubtitleChanged()
                    }
                } else {
                    if (v.sub_off != 1) {
                        SubtitleOff()
                    }
                }
            }
        };
        this.show = function(x) {
            Show(x)
        };
        this.style = function() {
            Style()
        };
        this.remove = function() {
            Remove()
        };

        function SubtitleOff() {
            js("subtitle", "off");
            o.current_subtitle = v.sub_off == 1 ? o.files_subtitle.length - 1 : -1;
            v.subtitle_start = 0;
            o.subtitle_on = false;
            o.controls.SubtitleChanged();
            o.hls_subs || o.dash_subs ? SetSubtitle(o.current_subtitle) : '';
            exist(o.subtitle) ? o.frame.removeChild(o.subtitle) : '';
            o.subtitle = null
        }

        function Show(time) {
            if (v.sub_shift) {
                time = time - v.sub_shift * 1
            }
            if (o.subtitle_on && exist(o.subs)) {
                if (sub) {
                    var x = o.current_subtitle;
                    if (exist(sub[x])) {
                        if (exist(sub[x][1])) {
                            var t = parseInt(time * 10);
                            if (exist(sub[x][1][t])) {
                                var y = '';
                                y = sub[x][0][sub[x][1][t]];
                                if (!exist(o.subtitle)) {
                                    o.subtitle = createElement('div');
                                    o.frame.appendChild(o.subtitle);
                                    Style()
                                }
                                if (empty) {
                                    show2(o.subtitle)
                                }
                                SubtitleBottom();
                                if (v.sub_split2words == 1) {
                                    y = PluginSubword(y)
                                }
                                if (v.sub_all == 1) {
                                    y = y.replace(/\[sub2\]/gm, '<span style="color:' + (v.sub_color2.indexOf("#") == -1 ? '#' : '') + v.sub_color2 + '">');
                                    y = y.replace(/\[\/sub2\]/gm, '</span>')
                                }
                                o.subtitle.innerHTML = '<span style="' + (v.sub_bg == 1 ? 'background-color:' + hexToRGBA(v.sub_bgcolor, v.sub_bga) + ';' : '') + '-webkit-box-decoration-break: clone;color:' + (v.sub_color.indexOf("#") == -1 ? '#' : '') + v.sub_color + ';padding:' + v.sub_bgpadding + 'px ' + v.sub_bgpadding * 2 + 'px;border-radius:' + v.sub_bgo + 'px;margin:0 0;line-height:' + (v.sub_lineheight ? v.sub_lineheight : 1.8) + ';font-weight:' + v.sub_weight + '">' + trim(y) + '</span>';
                                if (v.sub_big_fullscreen == 1) {
                                    if (o.fullscreen) {
                                        css(o.subtitle, {
                                            "font-size": ((v.sub_size_fullscreen + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size_fullscreen / 100)) + "px")
                                        })
                                    } else {
                                        css(o.subtitle, {
                                            "font-size": ((v.sub_size + ((parseInt(v.sub_sizeproc) - 100) * v.sub_size / 100)) + "px")
                                        })
                                    }
                                }
                                empty = false
                            } else {
                                if (!empty && exist(o.subtitle)) {
                                    o.subtitle.innerHTML = '';
                                    empty = true;
                                    hide2(o.subtitle)
                                }
                            }
                        }
                    }
                }
            }
        }

        function Style() {
            if (o.subtitle) {
                css(o.subtitle, {
                    "position": "absolute",
                    "width": "100%",
                    "padding-left": "10%",
                    "padding-right": "10%",
                    "left": 0,
                    "color": v.sub_color,
                    "text-align": "center",
                    "box-sizing": "border-box"
                });
                if (v.sub_fonted == 1 && exist(v.sub_font)) {
                    v.sub_font != '' ? css(o.subtitle, {
                        "font-family": v.sub_font
                    }) : ''
                }
                if (v.sub_shadow == 1) {
                    css(o.subtitle, {
                        "text-shadow": "1px 1px 2px black"
                    })
                } else {
                    css(o.subtitle, {
                        "text-shadow": "none"
                    })
                } if (v.sub_drag == 1) {
                    PluginMovable(o.subtitle, 'o.subdrag')
                } else {
                    css(o.subtitle, {
                        "pointer-events": "none"
                    })
                }
            }
        }

        function SubtitleBottom() {
            if (!o.subdrag) {
                if (o.controls.ToolbarHidden() || v.sub_bottom > v.toolbar.h) {
                    css(o.subtitle, {
                        "position": "absolute",
                        "top": "auto",
                        "left": 0,
                        "bottom": (v.sub_bottom * 1)
                    })
                } else {
                    css(o.subtitle, {
                        "position": "absolute",
                        "top": "auto",
                        "left": 0,
                        "bottom": (v.sub_bottom * 1 + v.toolbar.h * 1)
                    })
                }
            }
        }

        function Remove() {
            o.current_subtitle = -1;
            o.subtitle_on = false;
            o.thumbs_on = false;
            v.subtitle = null;
            v.thumbnails = null;
            o.sub = null;
            o.subs = null;
            if (exist(o.controls)) {
                o.controls.SubtitleChanged()
            }
            o.files_subtitle = null;
            if (exist(o.subtitle)) {
                o.frame.removeChild(o.subtitle);
                o.subtitle = null
            }
            o.current_subtitle = null;
            o.subtitle_on = false
        }
    };
    o.lang_ru = {
        "auto": "Авто",
        "play": "Пуск",
        "pause": "Пауза",
        "stop": "Стоп",
        "fullscreen": "Во весь экран",
        "normalscreen": "Выйти из полноэкранного режима",
        "settings": "Настройки",
        "options": "Параметры",
        "volume": "Громкость",
        "mute": "Выключить звук",
        "unmute": "Включить звук",
        "live": "В ЭФИРЕ",
        "playlist": "Плейлист",
        "quality": "Качество",
        "download": "Скачать",
        "subtitle": "Субтитры",
        "speed": "Скорость",
        "error": "ошибка",
        "unmute_video": "Включите звук",
        "audiotrack": "Аудио",
        "loading_error": "ошибка загрузки",
        "160p": "Очень низкое",
        "240p": "Низкое",
        "360p": "Среднее",
        "480p": "Высокое",
        "540p": "Высокое",
        "next": "Следующий",
        "prev": "Предыдущий",
        "share": "Поделиться",
        "copied": "Скопировано в буфер обмена",
        "ads": "Реклама",
        "skip": "Пропустить",
        "skip_after_": "Пропустить через ",
        "adsinvitation": "Перейти на сайт рекламодателя",
        "sub_sizeproc": "Размер текста",
        "sub_shift": "Сдвиг по времени",
        "sub_color": "Цвет текста",
        "sub_color2": "Цвет текста 2",
        "sub_bgcolor": "Цвет фона",
        "sub_bga": "Прозрачность фона",
        "sub_shadow": "Тень",
        "sub_weight": "Толщина текста",
        "sub_bottom": "Отступ снизу",
        "sub_reset": "Сбросить",
        "sleeptimer": "Сон",
        "offsettimer": "Пропускать",
        "hour": "Час",
        "minute": "Минута",
        "second": "Секунда",
        "1val": "Да",
        "0val": "Нет",
        "of": "из",
        "pass": "Пароль",
        "casterror": "Ошибка воспроизведения на устройстве",
        "castdevice": "Играет на устройстве",
        "channel": "Канал",
        "scale": "Масштаб",
        "on": "Вкл.",
        "off": "Выкл.",
        "together": "Все сразу",
        "kbps": "кбит/с"
    };
    var Motion = function(_o) {
        var _ease;
        var _timer;
        var _type;
        var _from;
        var _to;
        var _steps;
        var _step = 0;
        var _speed;
        var _stop = false;
        var _timeout;
        if (_o.me != undefined && _o.mc != undefined && _o.type != undefined && _o.to != undefined) {
            if (_o.time == null) {
                if (_o.type.indexOf("alpha") > -1) {
                    _o.to == 0 ? _o.time = 0.5 : _o.time = 0.2
                } else {
                    _o.time = 0.15
                }
            }
            _ease = Ease(_o.ease);
            if (_o.type.indexOf("scale") == -1) {
                if (exist(o.motions[_o.me])) {
                    o.motions[_o.me].TheEnd()
                }
            }
            if (_o.type.indexOf("scale") == -1) {
                o.motions[_o.me] = this
            }
            if (_o.show == 1) {
                _o.mc.set("display", true)
            }
            _type = _o.type.split('|');
            _to = String(_o.to).split('|');
            _from = new Array();
            for (var i = 0; i < _type.length; i++) {
                if (!_to[i]) {
                    _to[i] = _to[0]
                }
                if (_type[i] == "alpha") {
                    _from[i] = _o.mc.g("opacity")
                }
                if (_type[i] == "alpha_div") {
                    _from[i] = _o.mc.style.opacity
                }
                if (_type[i] == "y") {
                    _from[i] = _o.mc.g("y")
                }
                if (_type[i] == "x") {
                    _from[i] = _o.mc.g("x")
                }
                if (_type[i] == "left") {
                    _from[i] = parseInt(_o.mc.style.left)
                }
                if (_type[i] == "scale") {
                    _from[i] = _o.mc.g("scaleX")
                }
                if (_type[i] == "scroll") {
                    _from[i] = _o.mc.scrollTop
                }
                if (_type[i] == "scrollleft") {
                    _from[i] = _o.mc.scrollLeft
                }
                if (_type[i] == "scaleY") {
                    _from[i] = _o.mc.g("scaleY")
                }
                if (_type[i] == "scaleX") {
                    _from[i] = _o.mc.g("scaleX")
                }
                if (_type[i] == "width") {
                    _from[i] = _o.mc.g("width")
                }
                if (_type[i] == "width_div") {
                    _from[i] = _o.mc.offsetWidth;
                    _to[i] = Math.floor(_to[i]);
                    _o.me == "line_play" ? log("width", _o.me, _from[i], _to[i], _o.mc.offsetWidth) : ''
                }
                if (_type[i] == "height") {
                    _from[i] = _o.mc.g("height")
                }
                if (_type[i] == "height_div") {
                    _from[i] = _o.mc.offsetHeight
                }
                _to[i] = Number(_to[i]);
                _from[i] = Number(_from[i])
            }
            _speed = _o.time * 1000 / _ease.length;
            _steps = _ease.length;
            if (_type.length == 1 && _from[0] == _to[0]) {
                End()
            } else {
                setTimeout(onStep, Math.round(_speed))
            }
        }

        function onStep() {
            for (var i = 0; i < _type.length; i++) {
                var tmp = _from[i] + (_to[i] - _from[i]) * (_ease[_step] ? _ease[_step] : 0);
                if (_type[i] == "alpha") {
                    _o.mc.set("opacity", tmp)
                }
                if (_type[i] == "alpha_div") {
                    _o.mc.style.opacity = tmp
                }
                if (_type[i] == "y") {
                    _o.mc.set("top", tmp)
                }
                if (_type[i] == "x") {
                    _o.mc.set("left", tmp)
                }
                if (_type[i] == "left") {
                    _o.mc.style.left = tmp + "px"
                }
                if (_type[i] == "scale") {
                    _o.mc.set("scale", tmp)
                }
                if (_type[i] == "scaleY") {
                    _o.mc.set("scaleY", tmp)
                }
                if (_type[i] == "scaleX") {
                    _o.mc.set("scaleX", tmp)
                }
                if (_type[i] == "scroll") {
                    _o.mc.scrollTop = tmp
                }
                if (_type[i] == "scrollleft") {
                    _o.mc.scrollLeft = tmp
                }
                if (_type[i] == "width") {
                    _o.mc.set("width", tmp)
                }
                if (_type[i] == "width_div") {
                    css(_o.mc, {
                        "width": tmp
                    })
                }
                if (_type[i] == "height") {
                    _o.mc.set("height", tmp)
                }
                if (_type[i] == "height_div") {
                    css(_o.mc, {
                        "height": tmp
                    })
                }
            }
            _step++;
            if (!_stop) {
                if (_step == _steps) {
                    End()
                } else {
                    _timeout = setTimeout(onStep, Math.round(_speed))
                }
            }
        }

        function End() {
            _stop = true;
            if (_o.hide) {
                if (_type[0] == "alpha_div" || _type[0] == "left") {
                    hide(_o.mc)
                } else {
                    _o.mc.set("display", false)
                }
            }
            if (_o.type.indexOf("scale") == -1) {
                o.motions[_o.me] = null;
                delete o.motions[_o.me]
            }
        };
        this.TheEnd = function() {
            clearTimeout(_timeout);
            End()
        };
        this.TheEnd2 = function() {
            clearTimeout(_timeout);
            _step = _steps - 1;
            onStep();
            End()
        };

        function Ease(str) {
            switch (str) {
                case "elastic":
                    return [0, 0.432, 0.857, 1.275, 1.372, 1.296, 1.102, 0.957, 0.883, 0.87, 0.914, 0.992, 1.029, 1.041, 1.036, 1.019, 0.996, 0.984, 0.981, 0.988, 1.001, 1.006, 1.007, 1.006, 1.003, 0.999, 0.998, 0.998, 0.998, 0.998, 1];
                    break;
                case "cubic":
                    return [0, 0.096, 0.185, 0.267, 0.344, 0.416, 0.483, 0.547, 0.606, 0.659, 0.705, 0.747, 0.785, 0.818, 0.848, 0.874, 0.897, 0.918, 0.935, 0.95, 0.962, 0.971, 0.979, 0.985, 0.99, 0.994, 0.997, 0.999, 1];
                    break;
                case "back":
                    return [0, 0.146, 0.28, 0.403, 0.513, 0.613, 0.702, 0.78, 0.848, 0.907, 0.956, 0.997, 1.029, 1.055, 1.072, 1.084, 1.092, 1.095, 1.095, 1.093, 1.088, 1.081, 1.072, 1.06, 1.046, 1.033, 1.023, 1.014, 1.007, 1.003];
                    break;
                default:
                    return [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
                    break
            }
        }
    };
    var System = function() {
        var N = navigator.appName,
            ua = navigator.userAgent,
            tem;
        var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        var M = ua.match(/(opera|chrome|safari|firefox|msie|trident|edge)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
        this.browser = M ? M[1] : N;
        this.version = M ? M[2] : navigator.appVersion;
        this.opera = this.browser == "Opera";
        this.ie9 = this.browser == "MSIE 9.0";
        this.ie = this.browser == "MSIE" || this.browser == "Trident" || this.browser == "Edge";
        this.edge = ua.search(/(edge)\/?\s*/i) > -1;
        this.firefox = this.browser == "Firefox";
        this.safari = this.browser == "Safari";
        this.chrome = window.chrome;
        this.win = ua.search("Windows NT") > -1;
        this.ios = (ua.search(/(iphone|ipad|ipod)\/?\s*/i) > -1) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        this.tv = v.notv != 1 && ua.search(/(Tizen|MiTV|LG Browser|SmartTV|Philips|TV Build)\/?\s*/i) > -1;
        this.lg = v.notv != 1 && ua.search(/(LG Browser)\/?\s*/i) > -1;
        this.iphone = ua.search(/(iphone)\/?\s*/i) > -1;
        this.ipad = this.ios && !this.iphone;
        this.webkit = 'WebkitAppearance' in document.documentElement.style;
        this.android = ua.search(/(android)\/?\s*/i) > -1;
        this.mobile = (this.ios || this.android || (ua.search(/(blackberry|iemobile|opera mini)\/?\s*/i) > -1)) && !this.tv;
        this.mutedautoplay = this.safari || this.chrome;
        this.desktop = !this.mobile;
        this.mobiletv = this.mobile || this.tv;
        this.fullscreen = false;
        if (this.ios) {
            this.iosv = parseFloat(ua.substr(ua.indexOf('OS ') + 3, 4).replace('_', '.'));
            if (this.ipad && !'ontouchstart' in window) {
                this.mobile = this.ios = false;
                this.tv = true
            }
        }
        if (o.frame.requestFullScreen || o.frame.requestFullscreen || o.frame.mozRequestFullScreen || o.frame.webkitRequestFullScreen || o.frame.msRequestFullscreen) {
            this.fullscreen = true
        }
    };

    function UpdateObject(obj, obj2) {
        for (var s in obj2) {
            if (typeof(obj2[s]) == 'object') {
                if (s == "events" || s == "file") {
                    obj[s] = obj2[s]
                } else {
                    for (var s2 in obj2[s]) {
                        if (typeof(obj[s]) != 'object') {
                            obj[s] = {}
                        }
                        if (typeof(obj2[s][s2]) == 'object') {
                            for (var s3 in obj2[s][s2]) {
                                if (typeof(obj[s][s2]) != 'object') {
                                    obj[s][s2] = {}
                                }
                                if (typeof(obj2[s][s2][s3]) == 'object') {
                                    for (var s4 in obj2[s][s2][s3]) {
                                        if (typeof(obj[s][s2][s3]) != 'object') {
                                            obj[s][s2][s3] = {}
                                        }
                                        obj[s][s2][s3][s4] = obj2[s][s2][s3][s4];
                                        if (s3 == 'padding' || s3 == 'margin') {
                                            obj[s][s2][s3][s4] = parseInt(obj[s][s2][s3][s4])
                                        }
                                    }
                                } else {
                                    obj[s][s2][s3] = obj2[s][s2][s3];
                                    if (s2 == 'padding' || s2 == 'margin') {
                                        obj[s][s2][s3] = parseInt(obj[s][s2][s3])
                                    }
                                }
                            }
                        } else {
                            obj[s][s2] = obj2[s][s2];
                            if (s == 'padding' || s == 'margin') {
                                obj[s][s2] = parseInt(obj[s][s2])
                            }
                        }
                    }
                }
            } else {
                if (s.indexOf("roll") > 0 && trim(obj2[s]) === "") {} else {
                    obj[s] = SettingsParser(s, obj2[s])
                }
            }
        }
        return obj
    };
    var SettingsParser = function(key, value) {
        if (typeof(value) == 'string') {
            value = trim(value);
            if (key.indexOf("color") > -1 && value.indexOf("#") != 0 && value != -1) {
                value = "#" + value
            }
        }
        return value
    };

    function hexToRGBA(hex, opacity) {
        return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function(l) {
            return parseInt(hex.length % 2 ? l + l : l, 16)
        }).concat(opacity || 1).join(',') + ')'
    }

    function StorageSupport() {
        try {
            var storage = window['localStorage'],
                x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true
        } catch (e) {
            return false
        }
    };

    function killMotion(motion_id) {
        if (motion_id) {
            if (o.motions[motion_id]) {
                o.motions[motion_id].TheEnd()
            }
        }
    };
    var Lang = function(x) {
        var y = x;
        if (y) {
            y = x.charAt(0).toUpperCase() + x.slice(1);
            if (y.indexOf("_") > -1) {
                y = y.replace(/_/ig, " ")
            }
        }
        var en = {
            "of": "of",
            "kbps": "kbps",
            "castdevice": "Playback on device",
            "casterror": "Playback error on device",
            "together": "All at once",
            "pass": "Password",
            "0val": "No",
            "sleeptimer": "Sleep",
            "offsettimer": "Skip",
            "1val": "Yes",
            "sub_bottom": "Bottom margin",
            "sub_weight": "Font weight",
            "sub_shadow": "Shadow",
            "sub_bga": "Background opacity",
            "sub_bgcolor": "Background color",
            "sub_sizeproc": "Text size",
            "sub_color": "Text color",
            "sub_color2": "Text color 2",
            "sub_shift": "Time shift",
            "sub_reset": "Reset",
            "prev": "Previous",
            "copied": "Copied to clipboard",
            "160p": "Tiny",
            "240p": "Small",
            "360p": "Medium",
            "480p": "High",
            "540p": "High",
            "720p": "HD",
            "1080p": "Full HD",
            "1296p": "Super HD",
            "1440p": "Quad HD",
            "2160p": "Ultra HD 4K",
            "ads": "Ad",
            "adsinvitation": "Go to the advertiser's website",
            "audiotrack": "Audio",
            "live": "LIVE",
            "fullscreen": "Enter fullscreen",
            "normalscreen": "Exit fullscreen"
        };
        if (exist(en[x])) {
            y = en[x]
        }
        if (exist(o['lang_' + v.lang])) {
            if (exist(o['lang_' + v.lang][x])) {
                y = o['lang_' + v.lang][x]
            }
        }
        if (v.rename) {
            if (v.rename[x]) {
                y = v.rename[x]
            }
        }
        return y
    };
    var gaTracker = function(x, y, z) {
        if (!exist(o.gatracked[y]) && v.playerjscom != 1) {
            var t = o.titlestore ? o.titlestore : (v.title ? v.title : '');
            exist(v.label) ? t = v.label : '';
            if (v.yamtr_event[x] == 1 && v.yamtr == 1 && exist(v.yamtrid)) {
                if (x == "init") {
                    setInterval(yaHit, 300000)
                }
                if (exist(window["yaCounter" + v.yamtrid])) {
                    window["yaCounter" + v.yamtrid].reachGoal('playerjs_' + x, {
                        title: t
                    });
                    log("Yandex", 'playerjs_' + x)
                } else {
                    log("Yandex Metric error")
                }
            }
            if (v.ga_event[x] == 1) {
                if (v.ga == 1) {
                    var gao = {
                        eventCategory: 'Player',
                        eventAction: y
                    };
                    if (t != '') {
                        gao.eventLabel = t
                    }
                    ga('user.send', 'event', gao)
                }
            }
        }
        z ? o.gatracked[y] = true : ''
    };

    function yaHit() {
        if (exist(window["yaCounter" + v.yamtrid])) {
            window["yaCounter" + v.yamtrid].reachGoal('playerjs_hit');
            log("Yandex", 'playerjs_' + x)
        }
    };
    var YoutubeID = function(url) {
        var x = '';
        url = url.replace("v=", "{=");
        if (url.indexOf('youtu.be/') > -1) {
            x = url.substr(url.indexOf(".be/") + 4);
            x.replace("/", "")
        } else {
            x = url.split(/(youtu.be\/|v\/|embed\/|watch\?|youtube.capiom\/user\/[^#]*#([^\/]*?\/)*)\??{?=?([^#\&\?]*)/)[3]
        } if (x != '') {
            if (x.indexOf("?t=") > 0) {
                v.start = x.substr(x.indexOf("?t=") + 3);
                var h = 0;
                var m = 0;
                var s = 0;
                if (v.start.indexOf("h") > 0) {
                    h = v.start.substr(0, v.start.indexOf("h"));
                    v.start = v.start.substr(v.start.indexOf("h") + 1)
                }
                if (v.start.indexOf("m") > 0) {
                    m = v.start.substr(0, v.start.indexOf("m"));
                    v.start = v.start.substr(v.start.indexOf("m") + 1)
                }
                if (v.start.indexOf("s") > 0) {
                    s = v.start.substr(0, v.start.indexOf("s"));
                    v.start = v.start.substr(v.start.indexOf("s") + 1)
                }
                if (h > 0 || m > 0 || s > 0) {
                    v.start = h * 3600 + m * 60 + s * 1
                }
                x = x.substr(0, x.indexOf("?t="))
            }
        }
        return x
    };
    var js = function(x, y, li) {
        if (x == "init") {
            o.init = true
        }
        if (v.eventstracker == 1 && o.init) {
            if (v.eventlisteners == 1 || li == 1) {
                var ev = document.createEvent('Events');
                if (y !== undefined) {
                    ev.info = y
                }
                ev.initEvent(x, true, true);
                o.container.dispatchEvent(ev)
            } else {
                if (y !== undefined) {
                    if (typeof(y) == 'object') {
                        y = JSON.stringify(y)
                    }
                }
                if (typeof(v.events) == 'object') {
                    if (exist(v.events[x]) || exist(v.events['other'])) {
                        var z = x;
                        if (!exist(v.events[x]) && exist(v.events['other'])) {
                            z = 'other'
                        }
                        if (x.indexOf("vast_") == 0) {
                            if (exist(v.events['vast'])) {
                                z = 'vast'
                            }
                        }
                        try {
                            if (y !== undefined) {
                                eval(v.events[z] + "('" + x + "','" + v.id + "','" + y + "')")
                            } else {
                                eval(v.events[z] + "('" + x + "','" + v.id + "')")
                            }
                        } catch (e) {
                            log("events", e, x)
                        }
                    }
                } else {
                    if (v.events == '') {
                        v.events = "PlayerjsEvents"
                    }
                    try {
                        if (y !== undefined) {
                            eval(v.events + "('" + x + "','" + v.id + "','" + y + "')")
                        } else {
                            eval(v.events + "('" + x + "','" + v.id + "')")
                        }
                    } catch (e) {
                        log("events", e, x, y)
                    }
                }
            }
        }
        if (v.postmessage == 1 && li !== 1) {
            var zv = {
                event: x,
                time: o.media ? (x == "seek" ? o.seeked_time : o.media.time()) : 0
            };
            if (y !== undefined) {
                zv["data"] = y
            }
            if (x == "duration" || x == "time") {
                zv["duration"] = o.media.duration()
            }
            if (x == "volume" || x == "unmute") {
                zv["volume"] = v.volume
            }
            if (x == "new") {
                zv["id"] = apiProcessor("playlist_id")
            }
            window.parent.postMessage(zv, '*');
            var z = x;
            x == "init" || x == "start" || x == "end" ? z = x + "ed" : '';
            x == "play" ? z = "resumed" : '';
            x == "pause" ? z = "paused" : '';
            x == "mute" ? z = "muted" : '';
            x == "unmute" ? z = "unmuted" : '';
            x == "seek" ? z = "rewound" : '';
            x == "vast_Impression" ? z = "adShown" : '';
            zv["event"] = z;
            if (z != '' && z != x) {
                window.parent.postMessage(zv, '*')
            }
        }
    };
    this.event = function(x, y) {
        o.events[x] = y
    };
    var api = function(x, y, but) {
        return apiProcessor(x, y, but)
    };
    this.api = function(x, y, but) {
        return apiProcessor(x, y, but)
    };

    function apiProcessor(x, y, but) {
        if (exist(o.actions)) {
            if (o.destroyed == 1) {
                return
            }
            if (but) {
                if (typeof(but) == 'string') {
                    if (but.indexOf("id:") == 0) {
                        but = o.controls.butByS(but.substr(3), "dom");
                        if (but) {
                            if (x == "button" && y == "toogle") {
                                but.CustomToogle()
                            }
                        }
                    }
                }
            }
            if (x == "play") {
                if (exist(y)) {
                    if (typeof(y) == 'string') {
                        y = y.replace(/(\r\n|\n|\r)/gm, "");
                        var seekto = -1;
                        if (y.indexOf("[seek:") > -1 && y.indexOf("]") == y.length - 1) {
                            seekto = y.substr(y.indexOf("[seek:") + 6, y.length - 1);
                            o.seekto = seekto = parseInt(seekto.substr(0, seekto.length - 1));
                            y = y.substr(0, y.indexOf("[seek:"))
                        }
                        if (y.indexOf("#" + v.enc2) == 0) {
                            y = o[o.fd[0]](y)
                        }
                        if (y.indexOf("#" + v.enc3) == 0 && y.indexOf(v.file3_separator) > 0) {
                            y = o[o.fd[1]](y)
                        }
                        if (y.indexOf("#0") == 0) {
                            y = fd0(y)
                        }
                        if (v.fplace == 1) {
                            y = fplace(y)
                        }
                        if (y.indexOf(".txt") == y.length - 4) {
                            var xhr = XHR(y);
                            xhr.onload = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    try {
                                        apiProcessor('play', JSON.parse(this.responseText))
                                    } catch (e) {}
                                }
                            };
                            xhr.send();
                            return
                        }
                        if (y.indexOf("id:") == 0 && exist(o.playlist_dic)) {
                            var z = y.substr(3);
                            for (var j in o.playlist_dic) {
                                if (o.playlist_dic.hasOwnProperty(j)) {
                                    if (o.playlist_dic[j].pjs_id == z) {
                                        z = j
                                    }
                                }
                            }
                            if (exist(o.playlist_dic[z])) {
                                o.controls.PlaylistPlayId(z);
                                seekto > -1 ? o.seekto = seekto : '';
                                return true
                            } else {
                                return false
                            }
                        }
                        if (y.indexOf("youtubeid:") == 0) {
                            var z = y.substr(10);
                            if (o.file_type == "youtube") {
                                o.media.playByYoutubeId(z);
                                return true
                            } else {
                                y = '//youtu.be/' + z
                            }
                        }
                    }
                    o.actions.NewFile(y)
                } else {
                    o.actions.Play()
                }
            }
            if (x == "file" && exist(y)) {
                o.newfile = true;
                o.actions.NewFile(y, 1);
                o.controls.Duration(0, 0)
            }
            if (x == "preload" && exist(y)) {
                o.newfile = true;
                o.actions.NewFile(y, 1, 1)
            }
            if (x == "pause") {
                if (o.play) {
                    o.actions.Pause();
                    o.actions.RenewSubtitle()
                }
            }
            if (x == "channel" && exist(y)) {
                o.start && o.channels ? o.channels.SetChannel(y) : ''
            }
            if (x.indexOf("vpaid_") == 0) {
                if (o.vast) {
                    o.vast.VpaidSet(x.substr(6), y)
                }
            }
            if (x == "preload") {
                o.media.Preload()
            }
            if (x == "alert") {
                o.alert.close();
                o.alert = new Alert();
                if (v.alert404 == 1) {
                    o.alert.txt(v.alert404text)
                } else {
                    o.alert.txt("Test message")
                } if (v.alert404v == 1 && exist(v.alert404video)) {
                    o.err404v = new PluginErrorVideo()
                }
            }
            if (x == "waiting") {
                o.controls.Waiting();
                o.controls.HideElement("control_start")
            }
            if (x == "toggle") {
                o.play ? o.actions.Pause() : o.actions.Play()
            }
            if (x == "stop") {
                v.preload = 0;
                v.autoplay = 0;
                o.media.Recover();
                o.actions.Stop()
            }
            if (x == "reload") {
                o.time = o.media.time();
                o.actions.Reload()
            }
            if (x == "share") {
                o.controls.showShare()
            }
            if (x == "startvast" && exist(y)) {
                if (v.vast == 1 && o.p != '') {
                    var sv = JSON.parse(decode(o.p));
                    for (var l in sv) {
                        if (sv.hasOwnProperty(l)) {
                            if (exist(sv[l].id)) {
                                if (y == sv[l].id) {
                                    v.midroll = 'prt' + (exist(sv[l]['cpm']) ? 'cpm' + sv[l]['cpm'] : '') + y + '_' + sv[l].preroll;
                                    v.midrolls = true;
                                    o.actions.advertising("midroll")
                                }
                            }
                        }
                    }
                }
            }
            if (x == "vastbreak") {
                typeof VastBreak == "function" ? VastBreak() : ''
            }
            if (x == "cuid" && y) {
                v.cuid = y;
                o.
                continue ? o.
                continue.updateCuid() : ''
            }
            if (x == "mute") {
                o.actions.Mute()
            }
            if (x == "speed") {
                if (exist(y)) {
                    o.actions.SetSpeed(y)
                } else {
                    return o.files_speed[o.current_speed]
                }
            }
            if (x == "speeds") {
                return o.files_speed
            }
            if (x == "unmute") {
                o.actions.Unmute()
            }
            if (x == "thumbnails") {
                if (exist(y)) {
                    v[x] = y;
                    o.actions.Thumbs()
                }
            }
            if (x == "qualities") {
                return o.files_quality
            }
            if (x == "adblock") {
                return o.ab ? true : false
            }
            if (x == "live") {
                return o.media ? o.media.isLive() : false
            }
            if (x == "subtitles") {
                return v.sub_off == 1 ? o.files_subtitle.slice(0, -1) : o.files_subtitle
            }
            if (x == "audiotracks") {
                return o.files_audiotrack
            }
            if (x == "volume" || x == "setVolume") {
                if (exist(y)) {
                    if (y >= 0 && y <= 1) {
                        o.actions.Volume(y)
                    }
                }
                return o.muted ? 0 : v.volume
            }
            if (x == "muted") {
                return exist(o.muted) ? o.muted : false
            }
            if (x == "moveplaylist") {
                o.controls ? o.controls.PlaylistMove(y) : ''
            }
            if (x == "design") {
                y < 2 ? y = '' : '';
                if (o['u' + y] != '') {
                    var x2 = JSON.parse(decode(o['u' + y]));
                    var v2 = [];
                    for (var l in v) {
                        if (v.hasOwnProperty(l)) {
                            if (l.indexOf("control_") == 0) {
                                v[l] = null
                            }
                        }
                    }
                    if (typeof x2 == "object") {
                        for (var k in x2) {
                            if (x2.hasOwnProperty(k)) {
                                if (k.indexOf("control_") == 0) {
                                    v[k] = x2[k]
                                }
                                if (k == "toolbar") {
                                    v2[k] = x2[k]
                                }
                            }
                        }
                    }
                    v = UpdateObject(v, v2);
                    var show_settings = false;
                    if (o.controls.SettingsVisible()) {
                        o.controls.Settings();
                        show_settings = true
                    }
                    var show_playlist = false;
                    if (o.controls.PlaylistVisible()) {
                        o.controls.Playlist();
                        show_playlist = true
                    }
                    o.controls.Remove();
                    o.controls = null;
                    o.controls = new Controls();
                    if (o.media.status() == "playing") {
                        o.controls.Play()
                    }
                    o.controls.Volume(v.volume);
                    if (exist(v.title)) {
                        Title(v.title)
                    }
                    if (show_settings) {
                        o.controls.Settings()
                    }
                    if (show_playlist) {
                        o.controls.Playlist()
                    }
                    if (o.fullscreen) {
                        o.controls.Fullscreen()
                    }
                    if (key != 'control_duration') {
                        o.controls.Duration(o.media.time(), o.media.duration())
                    }
                    Resize()
                }
            }
            if (x == "vars") {
                return v.vars
            }
            if (x == "resize") {
                o.controls.resize(true)
            }
            if (x == "seek") {
                if (exist(y)) {
                    if (typeof y == "string") {
                        if (y.indexOf("%") > -1) {
                            y = parseInt(y.substr(0, y.indexOf("%")));
                            y = o.media.duration() * y / 100
                        } else {
                            var omt = o.media.time();
                            if (o.
                                continue && !o.start) {
                                if (!o.
                                    continue.seeked) {
                                    var f = o.
                                    continue.flag();
                                    if (f.t && f.d) {
                                        omt = f.t;
                                        o.
                                        continue.seeked = true
                                    }
                                }
                            }
                            if (y.indexOf("+") == 0) {
                                y = omt + parseInt(y.substr(1))
                            } else {
                                if (y.indexOf("-") == 0) {
                                    y = omt - parseInt(y.substr(1))
                                }
                            }
                        }
                    }
                    y = y * 1;
                    y < 0 ? y = 0 : '';
                    if (o.media.duration() > 0) {
                        y > o.media.duration() ? y = 0 : ''
                    }
                    if (!exist(o.vast) && !exist(o.vastloader) && o.media.duration() > 0) {
                        o.seekto = undefined;
                        o.actions.Seek(y, true);
                        o.actions.Playing()
                    } else {
                        o.seekto = y
                    }
                }
            }
            if (x == "fullscreen") {
                !o.fullscreen ? o.actions.Fullscreen() : ''
            }
            if (x == "exitfullscreen") {
                o.fullscreen ? o.actions.Normalscreen() : ''
            }
            if (x == "isfullscreen") {
                return o.fullscreen
            }
            if (x == "size") {
                return o.screen_w + '/' + o.screen_h
            }
            if (x == "fix") {
                if (exist(o.minify)) {
                    o.minify.Do()
                }
            }
            if (x == "unfixing" || x == "unfix") {
                if (exist(o.minify)) {
                    o.minify.Un()
                }
            }
            if (x == "time") {
                var _t = o.media ? o.media.time() : 0;
                if (o.
                    continue && v.timestore == 1 && !o.start) {
                    var f = o.
                    continue.flag();
                    if (f.t) {
                        _t = f.t
                    }
                }
                return _t
            }
            if (x == "timeplay") {
                if (o.butplstart) {
                    apiProcessor("play", "id:" + o.butplstart)
                }
                if (o.butseekto) {
                    apiProcessor("seek", o.butseekto);
                    apiProcessor("play")
                }
            }
            if (x == "duration") {
                return o.media ? o.media.duration() : 0
            }
            if (x == "points") {
                if (y) {
                    v.points = y;
                    o.controls.RenewPoints()
                }
            }
            if (x == "quality") {
                if (exist(y)) {
                    if (but) {
                        v.hd = Switcher(v.hd, y, but);
                        if (o.files_quality.length == 2) {
                            o.actions.SetQuality(v.hd)
                        }
                    } else {
                        o.actions.SetQuality(y)
                    }
                } else {
                    return o.media ? o.media.getQuality() : 0
                }
            }
            if (x == "audiotrack") {
                if (exist(y)) {
                    if (but) {
                        v.ahd = Switcher(v.ahd, y, but);
                        if (o.files_audiotrack.length == 2) {
                            o.actions.SetAudioTrack(v.ahd)
                        }
                    } else {
                        o.actions.SetAudioTrack(y)
                    }
                } else {
                    return o.media ? o.media.getAudioTrack() : 0
                }
            }
            if (x == "isyoutube") {
                return o.file_type == "youtube"
            }
            if (x == "restart") {
                if (o.current_audiotrack > 0) {
                    o.restart_audio = o.current_audiotrack
                }
                o.actions.NewFile(v.file)
            }
            if (x == "playing") {
                return o.play
            }
            if (x == "started") {
                return o.start
            }
            if (x == "system") {
                return o.system[y]
            }
            if (x == "youtubeready") {
                o.destroyed != 1 ? o.media.onYoutubeReady() : ''
            }
            if (x == "id") {
                return v.id
            }
            if (x == "log") {
                v.log = y
            }
            if (x == "eventstracker") {
                v.eventstracker = y
            }
            if (x == "pip") {
                o.media.PipToggle()
            }
            if (x == "switchpip") {
                o.media.PipSwitch();
                if (but) {
                    o.piped = Switcher(o.piped, y, but)
                }
            }
            if (x == "airplay") {
                o.media.Airplay()
            }
            if (x == "pipwebkit") {
                o.media.PipWebkit()
            }
            if (x == "options" && v.playerjscom != 1) {
                console.log(options)
            }
            if (x == "subtitle") {
                v.subtitle = y;
                if (exist(y)) {
                    if (y.toString().length < 3 && o.sbt) {
                        o.sbt.SetSubtitle(y * 1)
                    } else {
                        o.actions.Subtitle(y)
                    }
                }
            }
            if (x == "quiz") {
                if (exist(o.quiz)) {
                    if (exist(y)) {
                        o.quiz.api(y)
                    } else {
                        return o.quiz.Active()
                    }
                }
            }
            if (x == "geo") {
                if (o.geobj) {
                    return o.geobj
                } else {
                    return false
                }
            }
            if (x == "box") {
                var box = createElement("div");
                box.id = y;
                box.style.zIndex = 10000;
                o.frame.appendChild(box)
            }
            if (x == "screenshot") {
                if (o.tagvideo) {
                    var canvas = createElement("canvas");
                    o.container.appendChild(canvas);
                    var ctx = canvas.getContext('2d');
                    var size = o.media.size();
                    canvas.width = size.width > 0 ? size.width : o.normal_w;
                    canvas.height = size.height > 0 ? size.height : o.normal_h;
                    ctx.drawImage(o.media.tag(), 0, 0, canvas.width, canvas.height);
                    quality = 2;
                    var canvas2 = document.createElement("canvas");
                    canvas2.width = canvas.width * quality;
                    canvas2.height = canvas.height * quality;
                    var ctx2 = canvas2.getContext("2d");
                    ctx2.drawImage(o.media.tag(), 0, 0, canvas.width * quality, canvas.height * quality);
                    if (v.sscopyright == 1 && exist(v.sstext)) {
                        !exist(v.ssfontsize) ? v.ssfontsize = 20 : '';
                        !exist(v.ssfontcolor) ? v.ssfontcolor = "ffffff" : '';
                        ctx2.font = v.ssfontsize + "px Courier, Arial";
                        ctx2.fillStyle = "#" + v.ssfontcolor;
                        ctx2.fillText((v.sstext == "domain" ? o.domain : v.sstext), v.ssfontsize, canvas.height * quality - v.ssfontsize - 5)
                    }
                    ctx.drawImage(canvas2, 0, 0, canvas.width, canvas.height);
                    var img;
                    try {
                        img = canvas.toDataURL("image/jpeg")
                    } catch (e) {
                        console.log(e.message);
                        return false
                    }
                    return img
                } else {
                    return false
                }
            }
            if (x == "scale") {}
            if (x == "dash") {
                return o.file_type == x ? o.media.getDASH() : undefined
            }
            if (x == "hls") {
                return o.file_type == x ? o.media.getHLS() : undefined
            }
            if (x == "poster") {
                if (!o.play) {
                    o.media.Poster(y);
                    return true
                } else {
                    return false
                }
            }
            if (x == "scale") {
                if (y) {
                    o.media.scale(y)
                } else {
                    return [o.mediascale.x, o.mediascale.y, o.mediacontainer.style.left, o.mediacontainer.style.top]
                }
            }
            if (x == "title") {
                if (exist(y)) {
                    exist(y) ? v.title = y : '';
                    o.actions.Title('title');
                    return true
                } else {
                    return v.title
                }
            }
            if (x == "invert") {
                o.actions.InvertPlaylist()
            }
            if (x == "playlist") {
                if (y) {
                    if (typeof(y) == 'object') {
                        try {
                            o.actions.UpdatePlaylist(y);
                            return true
                        } catch (e) {
                            return false
                        }
                    } else {
                        if (y.indexOf(".txt") == y.length - 4 || y.indexOf(".txt?") > 0) {
                            var xhr = XHR(y);
                            xhr.onload = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    try {
                                        apiProcessor('playlist', JSON.parse(this.responseText))
                                    } catch (e) {}
                                }
                            };
                            xhr.send();
                            return true
                        }
                    }
                }
            }
            if (x == "next") {
                o.controls.PlaylistNext()
            }
            if (x == "prev") {
                o.controls.PlaylistPrev()
            }
            if (x == "find") {
                if (exist(y) && exist(o.playlist_dic)) {
                    !o.play ? v.autoplay = 0 : '';
                    for (var j in o.playlist_dic) {
                        if (o.playlist_dic.hasOwnProperty(j)) {
                            if (o.playlist_dic[j].pjs_id == y) {
                                y = j
                            }
                        }
                    }
                    if (exist(o.playlist_dic[y])) {
                        o.controls.PlaylistOpenId(y);
                        return true
                    } else {
                        return false
                    }
                }
            }
            if (x == "playlist_folders") {
                var tmp = [];
                if (exist(o.playlist_dic)) {
                    for (var j in o.playlist_dic) {
                        if (o.playlist_dic[j].folder && o.playlist_dic[j].pjs_parent_i == -1) {
                            tmp.push({
                                title: o.playlist_dic[j].title,
                                id: o.playlist_dic[j].id
                            })
                        }
                    }
                }
                return tmp
            }
            if (x == "playlist_id") {
                if (o.plid) {
                    return o.playlist_dic[o.plid].pjs_id ? o.playlist_dic[o.plid].pjs_id : o.plid
                }
            }
            if (x == "playlist_length") {
                if (o.playlist_dic) {
                    return Object.keys(o.playlist_dic).length
                } else {
                    return -1
                }
            }
            if (x == "playlist_title") {
                if (exist(o.playlist_title)) {
                    return o.playlist_title
                }
            }
            if (x == "showplaylist") {
                o.controls.PlaylistShow()
            }
            if (x == "vastnow") {
                if (o.vast) {
                    return true
                } else {
                    return false
                }
            }
            if (x == "vastinfo") {
                if (o.vast) {
                    return VastInfo()
                } else {
                    return false
                }
            }
            if (x == "vastpause") {
                if (o.vast) {
                    return o.vast.pause()
                } else {
                    return false
                }
            }
            if (x == "vastresume") {
                if (o.vast) {
                    return o.vast.resume()
                } else {
                    return false
                }
            }
            if (x == "captions") {
                v.captions = Switcher(v.captions, y, but);
                o.media.captions()
            }
            if (x == "loop") {
                if (exist(but)) {
                    v.loop = Switcher(v.loop, y, but)
                } else {
                    if (exist(y)) {
                        v.loop = y
                    } else {
                        return v.loop
                    }
                }
            }
            if (x == "shuffle") {
                if (exist(but)) {
                    v.shuffle = Switcher(v.shuffle, y, but)
                } else {
                    if (exist(y)) {
                        v.shuffle = y
                    } else {
                        return v.shuffle
                    }
                }
            }
            if (x == "autonext" || x == "playlistloop") {
                var z = "autoplaylist";
                x == "playlistloop" ? z = "playlistrewind" : "";
                if (exist(but)) {
                    v.playlist[z] = Switcher(v.playlist[z], y, but)
                } else {
                    if (exist(y)) {
                        y == '0/1' ? y = 1 - v.playlist[z] : '';
                        v.playlist[z] = y
                    } else {
                        return v.playlist[z]
                    }
                }
            }
            if (x == "hd") {
                if (o.files_quality.length == 2) {
                    v.hd = o.files_quality[o.current_quality];
                    v.hd = Switcher(v.hd, y, but);
                    if (o.files_quality[0] == v.hd) {
                        o.actions.SetQuality(0)
                    } else {
                        o.actions.SetQuality(1)
                    }
                }
            }
            if (x == "v" && y) {
                if (y.indexOf('file') == 0 || y.indexOf('bk') == 0) {
                    return
                }
                return v[y]
            }
            if (x.indexOf("update:") == 0) {
                var xx = x.substr(7);
                if (typeof(y) == 'object' && typeof(v[xx]) == 'object') {
                    for (var yy in y) {
                        if (y.hasOwnProperty(yy)) {
                            v[xx][yy] = y[yy]
                        }
                    }
                } else {
                    if (x.indexOf('rc_') == -1) {
                        v[xx] = y
                    }
                }
                return true
            }
            if (x == "currentfile") {
                return o.media ? o.media.currentFile() : ''
            }
            if (x == "vrsn") {
                return o.version + ' ' + o.playerid
            }
            if (x == "playerid") {
                return o.playerid
            }
            if (x == "hlserror") {
                return o.hlserror
            }
            if (x == "dasherror") {
                return o.dasherror
            }
            if (x == "visibility") {
                return o.visibility
            }
            if (x == "vastids") {
                return o.vast ? o.vast_adid : undefined
            }
            if (x == "destroy") {
                o.actions.StopMedia();
                o.destroyed = 1;
                v.hotkey.on = 0;
                o.container.innerHTML = ''
            }
        } else {
            return false
        }
    };

    function Switcher(x, y, but) {
        var z = trim(y) + '';
        if (y.indexOf("/") > 0) {
            var y2 = y.split("/");
            if (y2.length == 2) {
                if (x == trim(y2[0])) {
                    z = trim(y2[1]);
                    if (but) {
                        but.CustomSwitch(1)
                    }
                } else {
                    z = trim(y2[0]);
                    if (but) {
                        but.CustomSwitch(0)
                    }
                }
            }
        }
        return z
    }

    function XHR(x) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', x, true);
        return xhr
    }

    function VastInfo() {
        var x;
        if (o.vast) {
            if (o.vast.active()) {
                x = o.vast
            }
        }
        if (!x && o.vastloader) {
            x = o.vastloader
        }
        if (x) {
            return {
                system: x.info("adsystem"),
                version: x.info("version"),
                vpaid: x.info("isVpaid"),
                url: o.current_vast_url + (x.info("wrapper") ? x.info("wrapper0") + x.info("wrapper") : ''),
                type: x.info("filetype"),
                file: x.info("file"),
                volume: x.getVolume(),
                id: o.vast_adid
            }
        }
    }
    var createElement = function(x) {
        var y = x;
        x == 'div' || x == 'div2' ? y = 'pjsdiv' : '';
        var z = document.createElement(y);
        if (x == 'div2') {
            css(z, {
                "cursor": "pointer",
                "display": "block"
            })
        }
        return z
    };
    var log = function(a, b, c, d, e, f, g) {
        if (v.log == 1 || v.logout == 1) {
            var x = a + (b != undefined ? " " + b : "") + (c != undefined ? " " + c : "") + (d != undefined ? " " + d : "") + (e != undefined ? " " + e : "") + (f != undefined ? " " + f : "") + (g != undefined ? " " + g : "");
            console.log("Playerjs" + (v.pjsframed == 1 ? "2" : "") + ": " + x);
            if (v.logout == 1 && exist(document.getElementById("pjslog"))) {
                document.getElementById("pjslog").innerHTML += x + '<br/>'
            }
        }
    };
    var CustomFonts = function() {
        if (v.fonts == 1 && exist(v.fontnames) && v.fontnames != '') {
            var x = document.createElement('link');
            x.rel = 'stylesheet';
            x.href = 'https://fonts.googleapis.com/css?family=' + v.fontnames.replace(/,/ig, "|").replace(/ /ig, "+");
            document.head.appendChild(x)
        }
    };
    var SvgColor = function(div, clr) {
        var x = ["path", "polygon", "polyline", "rect", "ellipse"];
        for (var y = 0; y < x.length; y++) {
            var z = div.querySelectorAll("svg " + x[y]);
            if (z.length > 0) {
                for (var y2 = 0; y2 < z.length; y2++) {
                    z[y2].style.fill = clr
                }
            }
        }
    };
    var Time = function(time) {
        time < 0 ? time = 0 : '';
        var full_minutes = o.media.duration >= 600 ? true : false;
        var full_hours = o.media.duration >= 3600 ? true : false;
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time - minutes * 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        minutes = minutes - hours * 60;
        if (days > 0) {
            hours = hours - days * 24
        }
        return String((days > 0 ? days + ':' : '') + (hours > 0 || full_hours ? hours + ':' : '') + ((hours > 0 || full_minutes) && minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds)
    };
    var Href = function() {
        return encodeURIComponent((window.location != window.parent.location) ? document.referrer : document.location.href)
    };
    var Scripted = function(y) {
        var x = false;
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf(y) > -1) {
                x = true
            }
        }
        return x
    };
    var hex2rgb = function(x, y) {
        x = x.replace('#', '');
        var r = parseInt(x.length == 3 ? x.slice(0, 1).repeat(2) : x.slice(0, 2), 16);
        var g = parseInt(x.length == 3 ? x.slice(1, 2).repeat(2) : x.slice(2, 4), 16);
        var b = parseInt(x.length == 3 ? x.slice(2, 3).repeat(2) : x.slice(4, 6), 16);
        if (y) {
            return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + y + ')'
        } else {
            return 'rgb(' + r + ', ' + g + ', ' + b + ')'
        }
    };
    var css = function(e, o) {
        if (exist(e)) {
            for (var key in o) {
                if (o.hasOwnProperty(key)) {
                    if (o[key] != 'NaNpx' && o[key] != undefined) {
                        if (typeof o[key] == 'number' && key != 'opacity' && key != 'zIndex') {
                            o[key] += 'px'
                        }
                        if ((key.indexOf("color") > -1 || key.indexOf("Color") > -1) && o[key].indexOf("#") == -1 && o[key].indexOf("rgba") == -1) {
                            o[key] = '#' + o[key]
                        }
                        if (key == "transform") {
                            e.style['-ms-' + key] = o[key];
                            e.style['-moz-' + key] = o[key];
                            e.style['-webkit-' + key] = o[key];
                            e.style['-o-' + key] = o[key]
                        }
                        if (key == "fontFamily") {
                            if (o[key].indexOf(" ") > -1) {
                                o[key] = '"' + o[key] + '"'
                            }
                        }
                        if (key == "box-sizing") {
                            e.style.setProperty(key, o[key], 'important')
                        } else {
                            e.style[key] = o[key]
                        }
                    }
                }
            }
        }
    };
    var CheckColor = function(c) {
        return c.substr(0, 1) != '#' ? c = "#" + c : c
    };
    var controlCSS = function(x, color, y) {
        !color ? color = '#fff' : '';
        color = CheckColor(color);
        var r = random(100000, 1000000);
        x = x.replace(/\(rand\)/g, r);
        x = x.replace(/\(color\)/g, color);
        var _html = x.substr(0, x.indexOf('|||'));
        var _css = x.substr(x.indexOf('|||') + 3);
        var _css2 = '';
        if (o.system.webkit) {
            _css2 = _css.replace(/animation:/g, "-webkit-animation:");
            _css2 = _css2.replace(/animation-/g, "-webkit-animation-");
            _css2 = _css2.replace(/@keyframes/g, "@-webkit-keyframes");
            _css2 = _css2.replace(/transform/g, "-webkit-transform")
        }
        y.innerHTML = _html;
        pushCSS(_css2 + _css)
    };
    var pushCSS = function(x) {
        if (o.css) {
            if (o.css.styleSheet) {
                o.css.styleSheet.cssText = x
            } else {
                o.css.appendChild(document.createTextNode(x))
            }
        }
    };
    var xhr = function(y, z) {
        var x = new XMLHttpRequest();
        x.open('GET', y, true);
        x.onload = z;
        x.send()
    };
    var FindPjsDiv = function(x) {
        if (x) {
            for (var i = 0; i < 5; i++) {
                if (x.nodeName == "PJSDIV") {
                    break
                } else {
                    if (x.parentElement) {
                        x = x.parentElement
                    }
                }
            }
        }
        return x
    };
    var gif = function(z) {
        var gif = document.createElement("img");
        if (o.gifed.indexOf(z) > -1) {
            o.gifed.push(z);
            if (z.indexOf("?") > 0) {
                z = z + '&' + Math.random()
            } else {
                z = z + '?' + Math.random()
            }
        } else {
            o.gifed.push(z)
        }
        gif.setAttribute('src', z);
        gif.setAttribute('height', '1px');
        gif.setAttribute('width', '1px')
    };
    var attr = function(e, o) {
        for (var key in o) {
            if (o.hasOwnProperty(key)) {
                e.setAttribute(key, o[key])
            }
        }
    };
    var destroy = function(e) {
        if (e) {
            try {
                e.parentNode.removeChild(e);
                e = null
            } catch (e) {}
        }
    };
    var random = function(min, max) {
        return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random())
    };
    var randomstr = function() {
        return Math.random().toString(36).substring(2, 12)
    };
    var removebykey = function(x, y) {
        x = Object.keys(x).reduce(function(obj, key) {
            if (key != y) {
                obj[key] = x[key]
            }
            return obj
        }, {});
        return x
    };
    var trim = function(x) {
        if (typeof x == "string") {
            return x.replace(/^\s+|\s+$/gm, '')
        } else {
            return x
        }
    };
    var encode = function(x, n) {
        if (n == 0) {
            return "#0" + salt.e(x)
        }
        if (n == -1) {
            return salt.e(x)
        }
        if (n == 1) {
            return "#1" + pepper(salt.e(x), 1)
        }
    };
    var str2obj = function(x) {
        if (v[x] != "") {
            if (typeof v[x] != "string") {
                o[x + 'o'] = v[x]
            } else {
                if (v[x].indexOf("[{") == 0) {
                    try {
                        v[x] = v[x].replace(/pjs'qt/ig, '"');
                        o[x + 'o'] = eval(v[x])
                    } catch (e) {}
                }
            }
        }
    };
    var dechar = function(x) {
        return String.fromCharCode(x)
    };
    var decode = function(x) {
        if (x.substr(0, 2) == "#1") {
            return salt.d(pepper(x.substr(2), -1))
        } else if (x.substr(0, 2) == "#0") {
            return salt.d(x.substr(2))
        } else {
            return x
        }
    };
    var checkBase64 = function(x) {
        if (x) {
            if (x.indexOf('http') == -1 && x.indexOf('.') == -1 && x.length > 100) {
                x = 'data:image/png;base64,' + x
            }
        }
        return x
    };
    var hide = function(x) {
        x.style.visibility = "hidden"
    };
    var show = function(x) {
        x.style.visibility = "visible"
    };
    var hide2 = function(x) {
        x ? x.style.display = "none" : ''
    };
    var show2 = function(x) {
        x ? x.style.display = "block" : ''
    };
    var isVisible = function(x) {
        return x ? x.style.visibility != "hidden" && x.style.display != "none" : false
    };
    var int = function(s) {
        if (typeof s == "string") {
            if (s.indexOf("px") > 0) {
                s = s.substr(0, s.indexOf("px"))
            }
        }
        return parseInt(s)
    };
    var hidden = function(x) {
        return x.style.display == "none"
    };
    var hexToRgb = function(hex) {
        var bigint = parseInt(hex, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
        return r + "," + g + "," + b
    };
    var MarginPadding = function(o, x, y) {
        o[x + 'top'] = 0;
        o[x + 'right'] = 0;
        o[x + 'bottom'] = 0;
        o[x + 'left'] = 0;
        if (exist(o[y])) {
            var z = o[y].split(" ");
            if (z.length == 4) {
                o[x + 'top'] = z[0] ? parseFloat(z[0]) : 0;
                o[x + 'right'] = z[1] ? parseFloat(z[1]) : 0;
                o[x + 'bottom'] = z[2] ? parseFloat(z[2]) : 0;
                o[x + 'left'] = z[3] ? parseFloat(z[3]) : 0
            }
        }
        return o
    };
    var MarPad = function(x) {
        if (x) {
            x = x.replace(/ /ig, 'px ')
        }
        return x + 'px'
    };
    var StringVar = function(x, y) {
        return v[x] && v[x] != '' ? v[x] : y
    };
    var abc = String.fromCharCode(65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122);
    var salt = {
        _keyStr: abc + "0123456789+/=",
        e: function(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = salt._ue(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                } else if (isNaN(i)) {
                    a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        d: function(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + dechar(n);
                if (u != 64) {
                    t = t + dechar(r)
                }
                if (a != 64) {
                    t = t + dechar(i)
                }
            }
            t = salt._ud(t);
            return t
        },
        _ue: function(e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += dechar(r)
                } else if (r > 127 && r < 2048) {
                    t += dechar(r >> 6 | 192);
                    t += dechar(r & 63 | 128)
                } else {
                    t += dechar(r >> 12 | 224);
                    t += dechar(r >> 6 & 63 | 128);
                    t += dechar(r & 63 | 128)
                }
            }
            return t
        },
        _ud: function(e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c1 = 0;
            var c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += dechar(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += dechar((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += dechar((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    };
    var pepper = function(s, n) {
        s = s.replace(/\+/g, "#");
        s = s.replace(/#/g, "+");
        var a = sugar(o.y) * n;
        if (n < 0) a += abc.length / 2;
        var r = abc.substr(a * 2) + abc.substr(0, a * 2);
        return s.replace(/[A-Za-z]/g, function(c) {
            return r.charAt(abc.indexOf(c))
        })
    };
    var sugar = function(x) {
        x = x.split(dechar(61));
        var result = '';
        var c1 = dechar(120);
        var chr;
        for (var i in x) {
            if (x.hasOwnProperty(i)) {
                var encoded = '';
                for (var j in x[i]) {
                    if (x[i].hasOwnProperty(j)) {
                        encoded += (x[i][j] == c1) ? dechar(49) : dechar(48)
                    }
                }
                chr = parseInt(encoded, 2);
                result += dechar(chr.toString(10))
            }
        }
        return result.substr(0, result.length - 1)
    };
    var exist = function(x) {
        return x != null && typeof(x) != 'undefined' && x != 'undefined'
    };
    var existv = function(x, y) {
        return exist(x) ? x : y
    };
    var exist2 = function(x) {
        return exist(x) && x != -1 && x != ''
    };
    var copyObject = function(y) {
        var x = [];
        if (exist(Object.assign)) {
            x = Object.assign([], y)
        } else {
            for (var z in y) {
                if (y.hasOwnProperty(z)) {
                    x[z] = y[z]
                }
            }
        }
        return x
    };
    var findLeft = function(el) {
        return el.getBoundingClientRect().left + (window.scrollX ? window.scrollX : window.pageXOffset)
    };
    var findTop = function(el) {
        const rect = el.getBoundingClientRect();
        return rect.top + window.scrollY
    };
    var redirect = function(x) {
        if (x != '') {
            if (v.redirectblank == 1) {
                window.open(x)
            } else {
                window.location.href = x
            }
            x = ''
        }
    };
    var timeFormat = function(seconds) {
        var seconds = Math.floor(seconds);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
        seconds = Math.floor(seconds % 60);
        hours > 0 && minutes < 10 ? minutes = "0" + minutes : "";
        seconds = seconds >= 0 ? ((seconds >= 10) ? seconds : "0" + seconds) : "00";
        var out = (hours > 0 ? hours + ":" : "") + (minutes >= 0 ? minutes : "0") + ":" + seconds;
        return out
    };
    var reRightMenu = function() {
        if (v.rightmenu == 1) {
            o.rightmenu ? o.frame.removeChild(o.rightmenu) : '';
            o.rightmenu = null
        }
    };
    var Actions = function() {
        var _fullscreen_end = false;
        if (o.system.tv) {
            log("tv")
        }
        this.Title = function(x) {
            o.controls ? o.controls.title(x) : ''
        };
        this.File = function(x) {
            if (x) {
                if (typeof(x) == 'string') {
                    x = x.replace(/(\r\n|\n|\r)/gm, "");
                    if (x.indexOf("[{") == 0) {
                        try {
                            x = x.replace(/pjs'qt/ig, '"');
                            x = JSON.parse(x)
                        } catch (e) {
                            x = "incorrect JSON"
                        }
                    }
                }
                if (typeof(x) == 'object') {
                    o.playlist_dic = [];
                    o.playlist = IndexPlaylist(x);
                    if (v.playlist.openlast == 1 && !v.plstart) {
                        var keys = Object.keys(o.playlist_dic);
                        var last = keys.slice(-1)[0];
                        last ? v.plstart = last : ''
                    }
                    var y = FindFileInPlaylist();
                    if (y) {
                        x = y.file;
                        o.titlestore = y.title;
                        o.controls ? o.controls.titlepl(y.title) : '';
                        if (exist(y.poster)) {
                            if (o.media) {
                                o.media.Poster(y.poster)
                            } else {
                                v.poster = y.poster
                            }
                        }
                        if (exist(y.sub)) {
                            y.subtitle = y.sub
                        }
                        if (exist(y.start)) {
                            v.start = o.seekto = y.start
                        }
                        SettingsTimers("offset");
                        if (exist(y.id)) {
                            o.plid = y.id
                        }
                        var sx = ["subtitle", "vars", "embed", "url", "url2", "url3", "heartbeat", "thumbnails", "label", "download", "points", "remove", "end", "delete", "title2"];
                        if (exist(v.control_title)) {
                            if (v.control_title.showfrom1file == 1 && v.control_title.showtitleplaylist == 1) {
                                sx.push("title");
                                sx.push("t1");
                                sx.push("t2");
                                sx.push("t3");
                                sx.push("t4");
                                sx.push("t5")
                            }
                        }
                        for (var i = 0; i < sx.length; i++) {
                            if (exist(y[sx[i]])) {
                                v[sx[i]] = y[sx[i]]
                            }
                        }
                        if (sx.indexOf('title') > 0) {
                            if (v.control_title.templated == 1) {
                                o.title_template = v.control_title.template;
                                o.actions.TitleTemplate(y)
                            }
                            o.actions.Title('title')
                        }
                        if (o.controls) {
                            o.controls.UpdatePlaylist(o.playlist)
                        }
                        if (o.droplist) {
                            o.droplist.Update()
                        }
                    } else {}
                }
                if (typeof(x) == 'string') {
                    x = fjs(x);
                    if (x.indexOf("#" + v.enc2) == 0) {
                        x = o[o.fd[0]](x)
                    }
                    if (x.indexOf("#" + v.enc3) == 0 && x.indexOf(v.file3_separator) > 0) {
                        x = o[o.fd[1]](x)
                    }
                    if (x.indexOf("#0") == 0) {
                        x = fd0(x)
                    }
                    x = fjs(x);
                    if (v.fplace == 1) {
                        x = fplace(x)
                    }
                    if (x == '') {
                        log("empty file");
                        o.media_error = true;
                        js("error", "empty")
                    }
                    o.files_quality = [];
                    o.files_quality_ag = [];
                    o.files_audiotrack = [];
                    o.current_file = 0;
                    o.current_quality = 0;
                    o.current_audiotrack = 0;
                    v.file_separator == '' ? v.file_separator = ',' : '';
                    if ((x.indexOf("]") > -1 && x.indexOf("[") > -1) || exist(v.qualities)) {
                        o.files = x.split(v.file_separator)
                    } else {
                        o.files = [x]
                    }
                    o.audiotracks = [];
                    if (exist(v.qualities)) {
                        var qualities = v.qualities.split(v.file_separator)
                    }
                    if (o.files.length > 0) {
                        var q = 0;
                        for (var i = 0; i < o.files.length; i++) {
                            o.files[i] = trim(o.files[i]);
                            if (o.files[i] != '') {
                                if (o.files[i].indexOf("[") == 0 && o.files[i].indexOf("]") > 1) {
                                    o.files_quality[i] = o.files[i].substr(o.files[i].indexOf("[") + 1, o.files[i].indexOf("]") - 1);
                                    o.files[i] = o.files[i].substr(o.files[i].indexOf("]") + 1)
                                } else {
                                    if (exist(v.qualities)) {
                                        o.files_quality[i] = exist(qualities[i]) ? qualities[i] : ''
                                    } else {
                                        o.files_quality[i] = i + 1
                                    }
                                }
                                var is = 0;
                                if (exist(v.default_quality) && q == 0) {
                                    if (v.default_quality.indexOf("num:") == 0) {
                                        if (v.default_quality.substr(4) * 1 == i) {
                                            is = 1
                                        }
                                    }
                                    if (v.default_quality == o.files_quality[i]) {
                                        is = 1
                                    }
                                    if (v.default_quality == "max" && i == o.files.length - 1) {
                                        is = 1
                                    }
                                }
                                if (exist(o.default_quality)) {
                                    if (o.default_quality == o.files_quality[i]) {
                                        is = 1;
                                        q = i
                                    }
                                }
                                if (is == 1) {
                                    o.current_file = i;
                                    o.current_quality = i
                                }
                                o.files[i] = Prefile(o.files[i])
                            }
                        }
                    } else {
                        o.files[0] = Prefile(o.files[0])
                    }
                    return o.files[o.current_file]
                }
            } else {
                return x
            }
        };

        function Prefile(x) {
            if (exist(v.prefile) && x.indexOf("//") == -1) {
                x = v.prefile + x
            }
            return x
        };
        this.InvertPlaylist = function() {
            if (o.playlist) {
                var x = o.playlist.reverse();
                for (var i = 0; i < x.length; i++) {
                    x[i].pjs_i = i
                }
                o.playlist = x;
                o.controls.UpdatePlaylist(o.playlist)
            }
        };
        this.UpdatePlaylist = function(x) {
            if (typeof(x) == 'object') {
                o.playlist_dic = [];
                o.playlist_source = x;
                o.playlist = IndexPlaylist(x);
                if (o.controls) {
                    o.controls.UpdatePlaylist(o.playlist)
                }
            }
        };
        this.NewFile = function(x, y, z) {
            !exist(y) ? v.autoplay = 1 : '';
            !exist(z) ? v.preload = 0 : '';
            v.duration = undefined;
            v.end = undefined;
            v.delete = undefined;
            o.media_error != 2 ? o.media_error = false : '';
            o.metadata = false;
            o.pipwebkit = false;
            o.reloadTimer = 0;
            o.gatracked = [];
            o.checknative = false;
            o.gained = false;
            o.dvr = false;
            o.quartile = [false, false, false];
            o.sess = randomstr();
            o.sesstime = 0;
            o.sbt ? o.sbt.remove() : '';
            if (v.vast_midroll_limit > 1) {
                if (exist(o.midrollo) && v.midrolls == 1) {
                    for (var i in o.midrollo) {
                        o.midrollo[i].worked = undefined
                    }
                    v.vast_midroll_limit--
                }
            }
            if (o.err404v) {
                o.err404v.remove()
            }
            if (o.media.status() == "playing") {
                this.Stop()
            }
            if (exist(o.share)) {
                o.share.Remove()
            }
            if (exist(o.reloadErrorTimeout)) {
                clearTimeout(o.reloadErrorTimeout)
            }
            js("new");
            o.actions.VastRecover();
            x = this.File(x);
            if (y == 1) {
                o.file_type = ''
            }
            o.media.File(x);
            if ((o.system.mobile || o.system.safari) && !exist(y)) {
                o.actions.Play()
            }
            if (exist(o.custom_aspect)) {
                o.mediascale = {
                    x: 1,
                    y: 1,
                    x0: 1,
                    y0: 1
                };
                o.media.normalscale()
            }
            gaTracker("play", "Play", false);
            o.media.NativeControls();
            o.controls.QualityChangedNoHand();
            o.controls.AudioTrackChangedNoHand();
            o.controls.refresh()
        };
        this.TitleTemplate = function(x) {
            var y = false;
            if (x && o.title_template) {
                v.title = o.title_template;
                for (var i = 1; i < 6; i++) {
                    if (exist(x['t' + i])) {
                        v.title = v.title.replace("{" + i + "}", x['t' + i]);
                        y = true
                    }
                }
            }
            return y
        };
        this.MediaReady = function() {
            if (v.autoplay == 1) {
                if (v.observer == 1) {
                    setTimeout(function() {
                        o.actions.Play()
                    }, 500)
                } else {
                    this.Play()
                }
                v.autoplayed = 1
            }
            Thumbs()
        };
        this.Thumbs = function() {
            Thumbs()
        };

        function Thumbs() {
            if (v.thumbs == 1) {
                if (typeof PluginThumbs !== "undefined") {
                    o.th = new PluginThumbs()
                }
            }
        }
        this.NativeControls = function() {
            var x = false;
            if (o.system.mobile) {
                x = true;
                if (v.nativenotiphone == 1 && o.system.iphone) {
                    x = false
                }
                if (v.nativenotipad == 1 && o.system.ipad) {
                    x = false
                }
                if (v.nativenotios == 1 && o.system.ios) {
                    x = false
                }
                if (v.nativenotandroid == 1 && o.system.android) {
                    x = false
                }
            }
            if (v.nativeontv == 1 && o.system.tv) {
                x = true
            }
            return x
        };
        this.Metadata = function() {
            o.media.Volume(v.volume);
            if (o.muted) {
                o.media.Mute()
            }
            o.metadata = true;
            o.controls.refresh();
            if (o.casting && o.tagvideo) {
                o.chromecast.Go()
            }
        };
        this.onPlayTag = function() {
            !o.onplay ? onPlay(true) : ''
        };

        function onPlay(x) {
            o.onplay = true;
            if (o.controls) {
                if (o.controls.SettingsVisible()) {
                    o.controls.Settings()
                }
            }
            if (o.droplist) {
                o.droplist.Close()
            }!x ? o.media.Play() : '';
            if (!o.checknative) {
                setTimeout(function() {
                    o.media.NativeControls()
                }, 500)
            }!o.play ? o.controls.Play() : '';
            v.effects == 1 ? o.effects.api("play") : '';
            v.vast == 1 ? o.actions.VastRecover('pauseroll') : '';
            if (o.system.mobile) {
                o.controls.HideInterval()
            }
            if (exist(o.share)) {
                o.share.isOpen() ? o.share.Hide() : ''
            }
            if (v.heartbeats == 1 && exist(v.heartbeat) && o.dt) {
                if (v.heartbeat != '' && !exist(o.heartbeatInterval)) {
                    o.heartbeatInterval = setInterval(Heartbeat, v.heartbeatinterval * 1000);
                    Heartbeat()
                }
            }
        }
        this.Play = function(noads) {
            if (!o.play) {
                var stop = false;
                if (o.file_type == "youtube") {
                    if (!o.media.YoutubeReady() && v.autoplay != 1 && v.preload == 1) {
                        stop = true;
                        if (window['YT']) {
                            v.autoplay = 1;
                            o.media.onYoutubeReady()
                        }
                    }
                }
                if (v.pass == 1 && v.passontime == 0) {
                    o.actions.Password();
                    stop = true
                }
                if (o.media_error || stop) {
                    if (o.media_error) {
                        Advertising("preroll") ? datetime(2) : ''
                    }
                } else {
                    o.newfile = false;
                    StopOtherPlayer(!o.start);
                    o.alert.close();
                    if (!o.start) {
                        js("start");
                        o.start = true;
                        if (v.toolbar.hideuntilstarted == 1) {
                            setTimeout(function() {
                                o.controls.resizetext()
                            }, 100)
                        }
                        if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                            o.starttimeout = true;
                            setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                        }
                        if (v.water == 1 && v.wid) {
                            PluginWater()
                        }
                        for (var i = 0; i < o.vsts.length; i++) {
                            if (v['vast_nofirst' + o.vsts[i]] == 1) {
                                localStorage.setItem("pljsfirst" + o.vsts[i], Date.now())
                            }
                        }
                        if (v.pjsstat == 1 && v.pjsstatid) {
                            PluginStat("start")
                        }
                        js("new");
                        o.controls.refresh();
                        gaTracker("play", "Play", false);
                        o.ab ? gaTracker("adblock", "AdBlock", true) : ''
                    } else {
                        gaTracker("resume", "Resume")
                    } if (v.fullonplay == 1 && !o.fullscreen) {
                        var dd = new Date();
                        var tt = dd.getTime();
                        if (tt - o.clicktime < 300) {
                            if (v.fullonplaymobile == 1) {
                                o.system.mobile ? this.Fullscreen() : ''
                            } else {
                                this.Fullscreen()
                            }
                        }
                    }
                    if (o.err404v) {
                        o.err404v.remove()
                    }
                    if (noads != 1 && Advertising("preroll") || Advertising("intro")) {
                        datetime(2)
                    } else {
                        if (v.redirect == 1 && exist(v.redirectonplay) && !exist(options.redirect)) {
                            redirect(v.redirectonplay);
                            stop = true
                        }
                        if (!stop) {
                            log("Play");
                            if (o.file_type != 'pdf') {
                                o.media.duration() > 0 ? o.controls.Duration(o.media.time(), o.media.duration()) : ''
                            }
                            if (!o.start2) {
                                o.start2 = true;
                                if (v.toolbar.hideleavetimeout > 0 && v.autoplay == 1) {
                                    o.starttimeout = true;
                                    setTimeout(StartTimeout, v.toolbar.hideleavetimeout * 1000)
                                }
                            }
                            var playroll = false;
                            if (o.media.time() > 1 && v.pauserollonplay == 1 && noads != 1) {
                                playroll = Advertising("pauseroll")
                            }
                            if (playroll) {} else {
                                onPlay(false)
                            }
                        }
                    }
                }
            } else {
                o.media ? o.media.Play() : ''
            }
        };

        function StartTimeout() {
            o.starttimeout = false;
            o.controls.refresh()
        }
        this.Pause = function() {
            if (o.play) {
                log("Pause");
                o.media.Pause();
                o.controls.Pause();
                js("pause");
                v.posteronpause ? ShowPoster() : '';
                v.posterhidepause == 1 ? HidePoster2() : '';
                v.effects == 1 ? o.effects.api("pause") : '';
                if (!exist(o.vast) && v.pauserollonplay == 0) {
                    Advertising("pauseroll")
                }
                o.onplay = false
            }
        };
        this.Mute = function() {
            o.media.Mute();
            o.controls.Mute();
            o.muted = true;
            js("mute")
        };
        this.Unmute = function() {
            o.media.Unmute();
            o.muted = false;
            o.controls.Unmute();
            js("unmute")
        };
        this.Volume = function(x, y) {
            x < 0.01 ? x = 0 : '';
            x > 1 ? x = 1 : '';
            if (x <= 0) {
                this.Mute();
                v.volume = 0;
                x = 0
            } else {
                if (o.muted) {
                    this.Unmute()
                }
                v.volume = x
            }
            js("volume", x);
            o.controls.Volume(x, y);
            o.media.Volume(x)
        };
        this.Waiting = function() {
            o.controls.Waiting()
        };
        this.StopWaiting = function() {
            o.controls ? o.controls.StopWaiting() : ''
        };
        this.Progress = function() {
            this.StopWaiting()
        };
        this.Seeked = function() {
            o.actions.UpdatePlay();
            this.StopWaiting()
        };
        this.Duration = function(time, duration) {
            if (o.
                continue && !o.start) {
                var f = o.
                continue.flag();
                if (f.t && f.d) {
                    time = f.t
                }
            }
            o.controls.Duration(time, duration)
        };
        this.LoadedData = function(time, duration) {
            if (exist(o.seekto) && o.file_type != "youtube" && !o.media.isLive()) {
                o.actions.Seek(o.seekto, false);
                o.seekto = undefined
            }
        };
        this.ScreenClick = function() {
            var d = new Date();
            o.clicktime = d.getTime();
            var x = false;
            if (o.controls.SettingsVisible() && v.settings.always != 1) {
                o.controls.Settings();
                x = true
            }
            if (o.droplist) {
                if (o.droplist.Visible()) {
                    o.droplist.Close();
                    x = true
                }
            }
            if (v.playlist.always == 0) {
                if (o.controls.PlaylistVisible() && v.playlist.autohide == 1) {
                    o.controls.Playlist();
                    x = true
                }
            }
            if (v.redirect == 1 && exist(v.redirectonclick) && !exist(options.redirect)) {
                redirect(v.redirectonclick);
                x = true
            }
            if (!x) {
                if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
                    PluginHotIcon('play', (o.play ? 0 : 1))
                }
                this.Toggle()
            }
        };
        this.ControlsBgClick = function() {
            if (o.controls.SettingsVisible()) {
                o.controls.Settings()
            }
        };
        this.Toggle = function() {
            if (o.media.status() == "playing") {
                this.Pause()
            } else {
                this.Play()
            }
            Sub()
        };
        this.Seek = function(sec, hand) {
            if (sec < o.media.duration()) {
                if (v.control_line.dontseekforward == 1) {
                    if (sec > o.media.time()) {
                        return
                    }
                }
                if (v.delete > 0) {
                    sec < v.delete ? sec = v.delete : ''
                }
                o.seeked_time = sec;
                o.media.Seek(sec);
                if (hand) {
                    o.controls.Seek(sec, o.media.duration())
                }
                o.seeking = true;
                o.seeking_time = o.media.time();
                Sub(o.seeking_time)
            }
        };
        this.Open = function(url, target, endfull) {
            if (o.media.status() == "playing" && o.mode != 'audio') {
                Pause();
                if (o.fullscreen && endfull) {
                    o.controls.Normalscreen()
                }
            }
            window.open(url, target)
        };
        this.Download = function() {
            var x = o.media.currentFile();
            if (exist(v.download)) {
                x = v.download
            }
            if (x != '') {
                js("download");
                var win = window.open(x, (v.downself == 1 ? '_self' : '_blank'));
                win.focus()
            }
        };
        this.UpdatePlay = function() {
            var time = o.media.time();
            var duration = o.media.duration();
            o.controls.Played(time, duration)
        };
        this.Playing = function() {
            var time = o.media.time();
            var duration = o.media.duration();
            var delta = duration > 0 ? time / duration : 0;
            if (!o.seeking) {
                o.controls ? o.controls.Played((o.seekto > 0 ? o.seekto : time), duration) : ''
            } else {
                time != o.seeking_time ? o.seeking = false : ''
            } if ((v.ga == 1 || v.yamtr == 1) && duration > 0) {
                gaTrackPlay("play25", "Play 25%", delta, 0.25);
                gaTrackPlay("play50", "Play 50%", delta, 0.50);
                gaTrackPlay("play75", "Play 75%", delta, 0.75)
            }
            for (var i = 0; i < 3; i++) {
                if (!o.quartile[i]) {
                    if (delta >= i * 0.25 + 0.25) {
                        Quartile(i)
                    }
                }
            }
            v.reloadlog == 1 ? log(1, time, duration) : '';
            if (v.reload == 1) {
                if (o.play) {
                    var z = false;
                    var rld = false;
                    if (v.reloadlive == 1) {
                        if (!o.media.isLive()) {
                            z = true
                        }
                    }
                    if (time > 0) {
                        if (time == o.time && !z) {
                            rld = true
                        } else {
                            o.reloadTimer = 0
                        }
                        o.time = time
                    } else {
                        if (v.reloadstart == 1) {
                            var ld = o.media.loaded();
                            v.reloadlog == 1 ? log(2, ld, o.timeld) : '';
                            if (!z) {
                                if (ld == o.timeld) {
                                    rld = true
                                } else {
                                    o.reloadTimer = 0
                                }
                            }
                            o.timeld = ld
                        }
                    } if (rld) {
                        o.reloadTimer++;
                        v.reloadlog == 1 ? log(3, o.reloadTimer) : '';
                        if (o.reloadTimer == v.reloadtimeout * (1000 / o.timerTime)) {
                            o.actions.Reload()
                        }
                    }
                }
            }
            if (v.vast == 1) {
                v.nomidroll != 1 && v.midrolls == 1 ? MidrollOverlay("midroll", time, duration) : '';
                v.nooverlay != 1 && v.overlays == 1 ? MidrollOverlay("overlay", time, duration) : ''
            }
            if (v.intros == 1 && v.introstart > 0) {
                if (time >= v.introstart) {
                    if (!exist(o.vast)) {
                        if (Advertising("intro")) {
                            o.media.Pause();
                            o.controls.Pause()
                        }
                        v.introstart = 0
                    }
                }
            }
            SettingsTimers("play");
            if (v.pass == 1 && v.passontime > -1) {
                PasswordTime(time, duration)
            }
            if (o.subtitle_on) {
                Sub(time)
            }
            if (o.storage && v.timestore == 1) {
                if (o.
                    continue) {
                    o.
                    continue.write(time, duration)
                }
            }
            if (exist(v.end)) {
                if (v.end > 0 && time > v.end) {
                    if (o.file_type == "youtube") {
                        o.media.Pause();
                        o.media.Seek(v.start > 0 ? v.start : 0)
                    } else {
                        o.media.Recover();
                        o.actions.Stop()
                    }
                    v.start > 0 ? o.seekto = v.start : '';
                    o.actions.Ended()
                }
            }
            if (exist(v.remove)) {
                var r1 = v.remove.split(",");
                for (var i = 0; i < r1.length; i++) {
                    var r2 = r1[i].split("-");
                    if (r2.length == 2) {
                        if (time > r2[0] && time < r2[1]) {
                            o.media.Seek(r2[1])
                        }
                    }
                }
            }
        };

        function Quartile(x) {
            o.quartile[x] = true;
            if (v.timestore == 1 && v.playedstore == 1 && v.playedquartile == x) {
                if (o.storage && o.plid) {
                    o.
                    continue ? o.
                    continue.writePl(o.plid) : ''
                }
            }
        }

        function gaTrackPlay(x, y, t, p) {
            if (!exist(o.gatracked[y])) {
                if (t > p) {
                    gaTracker(x, y, true)
                }
            }
        };
        this.Reload = function() {
            o.reloadTimer = 0;
            if (v.reloadjustevent == 1) {
                js("reload")
            } else {
                o.seekto > 0 || o.media.isLive() ? '' : o.seekto = o.media.time();
                var openpl = o.controls.PlaylistVisible();
                js("reload");
                o.media.reload();
                openpl && v.playlist.autohide == 1 ? o.controls.PlaylistShow() : ''
            }
        };
        this.Stopped = function() {
            o.controls.Played(0, 0);
            o.controls.Loaded(0, 0);
            o.actions.Duration(0, 0);
            o.controls.StopWaiting()
        };
        this.Loading = function() {
            var time = o.media.loaded();
            if (v.pjsiframed == 1) {
                js("loaded", time)
            }
            var duration = o.media.duration();
            o.controls ? o.controls.Loaded(time, duration) : ''
        };
        this.Ended = function() {
            js("fileend");
            if (v.loop == 1) {
                if (o.file_type == "youtube") {
                    this.Stop()
                }
                if (v.start > 0) {
                    o.actions.Seek(v.start)
                }
                this.Play()
            } else {
                if (o.media.isLive() || o.file_type == "youtube") {
                    this.Stop()
                } else {
                    if (v.finishrewind == 1) {
                        o.actions.Seek((v.start > 0 ? v.start : 0), true);
                        if (o.system.ie) {
                            o.media.Pause()
                        }
                    }
                }
                o.controls.onEnded();
                v.intros == 1 ? v.outros = 1 : '';
                if (Advertising("postroll") || Advertising("outro")) {} else {
                    End()
                }
            }
        };
        this.Fullscreen = function() {
            o.frameresize.contentWindow.onresize = Resize;
            var stop = false;
            var error = false;
            o.fs_error = false;
            o.fullscreen_process = true;
            setTimeout(function() {
                o.fullscreen_process = false
            }, 3000);
            for (var x in o.motions) {
                if (o.motions.hasOwnProperty(x)) {
                    if (exist(o.motions[x])) {
                        try {
                            o.motions[x].TheEnd2()
                        } catch (e) {}
                    }
                }
            }
            try {
                o.fullscreen_start = true;
                if (((o.system.ios && v.nativefullios == 1) || (o.system.android && v.nativefulldroid == 1)) && o.tagvideo && !o.nativecontrols) {
                    var x = o.media.tag();
                    if (x) {
                        if (x.webkitSupportsFullscreen) {
                            NativeWebkitFullscreen();
                            stop = true
                        }
                    }
                }
                if (!stop) {
                    var fspr;
                    if (o.frame.requestFullscreen) {
                        o.realfullscreen = true;
                        fspr = o.frame.requestFullscreen({
                            navigationUI: "hide"
                        });
                        if (fspr !== undefined) {
                            fspr.then(function() {}).
                            catch (function(error) {})
                        }
                    } else if (o.frame.requestFullScreen) {
                        o.frame.requestFullScreen({
                            navigationUI: "hide"
                        });
                        o.realfullscreen = true
                    } else if (o.frame.mozRequestFullScreen) {
                        o.frame.mozRequestFullScreen({
                            navigationUI: "hide"
                        });
                        o.realfullscreen = true
                    } else if (o.frame.webkitRequestFullScreen) {
                        o.frame.webkitRequestFullScreen({
                            navigationUI: "hide"
                        });
                        o.realfullscreen = true
                    } else if (o.frame.msRequestFullscreen) {
                        o.frame.msRequestFullscreen();
                        o.realfullscreen = true
                    }
                }
            } catch (e) {
                error = true;
                log(e)
            }
            if (!o.realfullscreen && !stop) {
                if (o.system.webkit && o.iniframe) {
                    NativeWebkitFullscreen()
                } else {
                    this.FullscreenUI()
                }
            }
            if (!error) {
                setTimeout(PostFullscreen, 200)
            }
        };

        function NativeWebkitFullscreen() {
            var x = o.media.tag();
            if (x) {
                o.nativefull = true;
                o.media.nativeSubtitle();
                x.webkitEnterFullScreen();
                x.addEventListener("webkitendfullscreen", iosExitFullscreen)
            }
        }

        function PostFullscreen() {
            if (o.fs_error != true) {
                if (o.ispipkit) {
                    o.media.PipWebkit()
                }
                if (v.hotkey.volumewheelfull == 1) {
                    VolumeWheelX(true);
                    o.volumewheel = true
                }
                v.effects == 1 ? o.effects.api("full") : '';
                js("fullscreen");
                gaTracker("full", "Fullscreen", true)
            }
        };
        var volumewheelin;
        var lastwheel = {
            x: 0,
            y: 0
        };

        function VolumeWheel(e) {
            if (o.droplist) {
                if (o.droplist.OpenScroll()) {
                    return
                }
            }
            o.hidden_volume_over = true;
            clearInterval(volumewheelin);
            volumewheelin = setInterval(function() {
                o.hidden_volume_over = false;
                o.controls.resize();
                lastwheel = {
                    x: 0,
                    y: 0
                };
                clearInterval(volumewheelin)
            }, 2000);
            o.controls.resize();
            e.preventDefault();
            e.deltaX != 0 ? lastwheel.x++ : lastwheel.x--;
            e.deltaY != 0 ? lastwheel.y++ : lastwheel.y--;
            if (e.wheelDelta != 0) {
                if (lastwheel.x > lastwheel.y) {
                    if (e.deltaX > 0) {
                        o.actions.Volume(parseFloat(v.volume) - v.hotkey.wheelstep / 10, "no")
                    } else {
                        o.actions.Volume(parseFloat(v.volume) + v.hotkey.wheelstep / 10, "no")
                    }
                } else {
                    if (e.deltaY > 0) {
                        o.actions.Volume(parseFloat(v.volume) + (o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10), "no")
                    } else {
                        o.actions.Volume(parseFloat(v.volume) - (o.system.win ? -v.hotkey.wheelstep / 10 : v.hotkey.wheelstep / 10), "no")
                    }
                }
                o.controls.volumescroll()
            }
        }

        function iosExitFullscreen() {
            if (o.system.ios) {
                o.media.removeNativeSubtitle();
                js("exitfullscreen")
            }
            o.nativefull = false
        }
        this.FullscreenUI = function() {
            if (o.fullscreen_start) {
                o.fullscreen = true;
                o.controls.Fullscreen();
                if (!o.realfullscreen) {
                    if (exist(o.parentIframe)) {
                        try {
                            css(o.parentIframe, {
                                'width': '100%',
                                'height': '100%',
                                'position': 'fixed',
                                'left': 0,
                                'top': 0,
                                'zIndex': "100000"
                            })
                        } catch (err) {}
                    }
                    css(o.frame, {
                        'width': '100%',
                        'height': '100%',
                        'position': 'fixed',
                        'left': 0,
                        'top': 0,
                        'zIndex': "100000"
                    });
                    o.screen_w = o.frame.offsetWidth;
                    o.screen_h = o.frame.offsetHeight;
                    try {
                        document.body.style.overflow = 'hidden';
                        if (!exist(o.playlist)) {
                            document.ontouchmove = function(e) {
                                e.preventDefault()
                            }
                        }
                    } catch (err) {}
                }
                if (v.fullblack == 1) {
                    css(o.frame, {
                        'backgroundColor': '#000000'
                    })
                }
                if (o.droplist) {
                    o.droplist.Close()
                }
                Sub();
                o.fullscreen_start = false
            }
        };
        this.Normalscreen = function() {
            _fullscreen_end = true;
            if (document.cancelFullScreen) {
                document.cancelFullScreen()
            } else if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.cancelFullscreen) {
                document.cancelFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
            if (!o.realfullscreen) {
                this.NormalscreenUI(false)
            }
        };
        this.changeAspect = function(x, y) {
            NewAspect(x, y)
        };

        function NewAspect(x, frmvst) {
            if (exist(o.vast) && !frmvst) {
                o.resizeonplay = x
            } else {
                var stop = false;
                var coh = o.container_w / x;
                if (exist(o.parentIframe) && v.notframe != 1) {
                    try {
                        css(o.parentIframe, {
                            'height': coh
                        })
                    } catch (err) {
                        stop = true;
                        log("iframe crossdomain issue")
                    }
                }
                if (!stop) {
                    o.aspect = x;
                    o.container_h = coh;
                    if (o.aspect > 0) {
                        css(o.container, {
                            'height': coh
                        })
                    }
                    js("height", coh)
                }
                if (o.vast && !o.fullscreen) {
                    o.screen_h = coh;
                    o.vast.Resize()
                }
            }
        };
        this.NormalscreenUI = function(x) {
            if (_fullscreen_end || x) {
                o.fullscreen = false;
                if (!o.realfullscreen) {
                    if (exist(o.parentIframe)) {
                        try {
                            css(o.parentIframe, {
                                'position': 'static',
                                'left': 0,
                                'top': 0,
                                'zIndex': 'unset'
                            });
                            css(o.parentIframe, o.parentIframe_style);
                            css(o.parentIframe, {
                                'width': o.normal_w,
                                'height': o.normal_h
                            })
                        } catch (err) {}
                    }
                    css(o.frame, {
                        'width': o.normal_w,
                        'height': o.normal_h,
                        'position': 'absolute',
                        'left': 0,
                        'top': 0,
                        'zIndex': 'unset'
                    });
                    try {
                        document.body.style.overflow = 'auto';
                        document.ontouchmove = function(e) {
                            return true
                        }
                    } catch (err) {}
                }
                o.controls.Normalscreen();
                if (v.fullblack == 1) {
                    css(o.frame, {
                        'backgroundColor': v.screencolor
                    });
                    if (v.transparent == 1) {
                        o.frame.style.backgroundColor = 'transparent'
                    } else {
                        css(o.frame, {
                            'backgroundColor': v.screencolor
                        })
                    }
                }
                if (v.hotkey.volumewheelfull == 1) {
                    VolumeWheelX(false);
                    o.volumewheel = false
                }
                if (o.droplist) {
                    o.droplist.Close()
                }
                Sub();
                o.subdrag ? o.subdrag = false : '';
                o.controls.PlaylistHere();
                _fullscreen_end = false;
                js("exitfullscreen");
                o.realfullscreen = false;
                o.fullscreen_process = false
            }
        };
        this.volumewheel = function(x) {
            VolumeWheelX(x)
        };

        function VolumeWheelX(x) {
            lastwheel = {
                x: 0,
                y: 0
            };
            if (x) {
                window.addEventListener("wheel", VolumeWheel, {
                    passive: false
                })
            } else {
                clearInterval(volumewheelin);
                window.removeEventListener("wheel", VolumeWheel, {
                    passive: false
                })
            }
        }
        this.Stop = function() {
            v.preload = 0;
            o.controls.Pause();
            o.actions.Stopped();
            o.media.Volume(v.volume);
            if (o.controls.SettingsVisible()) {
                o.controls.Settings()
            }
            if (o.muted) {
                this.Mute()
            }
            if (exist(o.heartbeatInterval)) {
                clearInterval(o.heartbeatInterval);
                o.heartbeatInterval = null
            }
            Sub(0);
            log("stop");
            js("stop")
        };
        this.StopMedia = function() {
            v.preload = 0;
            v.autoplay = 0;
            o.media.Recover();
            o.actions.Stop()
        };
        this.SetQuality = function(x) {
            if (exist(o.current_quality)) {
                if (o.current_quality != x) {
                    o.current_quality = x;
                    if (v.qualitystore == 1) {
                        o.default_quality = o.files_quality[x];
                        if (o.storage) {
                            localStorage.setItem("pljsquality", o.default_quality)
                        }
                    }
                    o.media.SetQuality(x);
                    js("quality", o.files_quality[x]);
                    o.controls.QualityChanged(x)
                }
            }
        };
        this.AirplayChanged = function() {
            o.controls ? o.controls.AirplayChanged() : ''
        };
        this.SetAudioTrack = function(x) {
            if (exist(o.current_audiotrack)) {
                if (o.current_audiotrack != x) {
                    o.current_audiotrack = x;
                    if (v.trackstore == 1) {
                        o.default_audio = v.default_audio = o.files_audiotrack[x];
                        if (o.storage) {
                            localStorage.setItem("pljstrack", o.default_audio)
                        }
                    }
                    o.media.SetAudioTrack(x);
                    js("audiotrack", x);
                    o.controls.SettingChanged("audiotrack")
                }
            }
        };
        this.SetSpeed = function(x, z) {
            var y = x;
            if (!z) {
                y = x == o.speed1 ? 1 : o.files_speed[x];
                o.current_speed = x
            }
            if (o.line_speed) {
                if (x == o.custom_speed) {
                    return
                }
                o.custom_speed = y;
                for (var i = 0; i < o.files_speed.length; i++) {
                    if (y <= o.files_speed[i]) {
                        o.current_speed = i;
                        break
                    }
                }
            }
            if (o.storage && v.speedstore == 1) {
                localStorage.setItem("pljsspeed", y)
            }
            js("speed", y);
            o.media.SetSpeed(y);
            o.controls.SettingChanged("speed")
        };

        function Sub(x) {
            o.sbt ? o.sbt.show(exist(x) ? x : o.media.time()) : ''
        };
        this.RenewSubtitle = function() {
            if (o.sbt) {
                Sub();
                o.sbt.style()
            }
        };
        this.Subtitle = function(x) {
            if (typeof(PluginSub) == 'function') {
                !o.sbt ? o.sbt = new PluginSub() : '';
                o.sbt.start(x)
            }
        };
        var vast_and;
        var vast_or;
        var vast_type;
        var vasturl;

        function Advertising(x) {
            if (v["vast_" + x + "timebreak"] > 0 && o.storage) {
                var tb = localStorage.getItem("pljs" + x + "_" + o.d);
                if (tb) {
                    var ct = new Date();
                    o.clicktime = ct.getTime();
                    var ct2 = (ct.getTime() - tb) / 3600000;
                    if (ct2 < v["vast_" + x + "timebreak"]) {
                        return false
                    }
                }
            }
            if (v["vast_" + x + "timelimit"] > 0) {
                if (o.media.duration() > 0) {
                    if (o.media.duration() < v["vast_" + x + "timelimit"] * 60) {
                        if (v["vast_" + x + "timelimited"] > 0) {
                            v.vast_preroll_andlimit = v["vast_" + x + "timelimited"]
                        } else {
                            return false
                        }
                    }
                }
            }
            if (o.compilations.indexOf("VAST") != -1 && v.vast == 1 && !o.noads && v[x + 's'] == 1) {
                if (typeof VastVideo == "undefined") {
                    return false
                }
                if (x == "intro" || x == "outro") {
                    if (typeof PluginIntro !== "undefined") {
                        vasturl = [];
                        return PluginIntro(x)
                    }
                }
                if (exist(o.vast) || exist(o.vastloader)) {
                    js("vast_init", x);
                    return true
                } else {
                    if (exist(v[x])) {
                        if (v[x].toString().indexOf(".") > -1 || v[x].toString().indexOf(":") > -1 || v[x].toString().indexOf("[yandex]") > -1) {
                            js("vast_init", x);
                            if (x != "midroll" && x != "overlay") {
                                o.actions.Waiting();
                                Curtain()
                            }
                            vast_and = 0;
                            vast_or = 0;
                            vast_type = x;
                            vasturl = v[x].split(" and ");
                            o.vast_loaders = [];
                            o.adsinchain = vasturl.length;
                            o.adscounter = 1;
                            o.adsfirst = true;
                            for (var i = 0; i < vasturl.length; i++) {
                                vasturl[i] = vasturl[i].split(" or ")
                            }
                            v[x.concat("_", "recover")] = v[x];
                            v[x] = null;
                            o.vasttype = x;
                            if (x != 'overlay') {
                                o.vast = new VastVideo()
                            }
                            o.vastloader = new VastLoader();
                            for (var i = 0; i < vasturl.length; i++) {
                                for (var j = 0; j < vasturl[i].length; j++) {
                                    var _url = trim(vasturl[i][j]);
                                    if (_url.indexOf("[50%]") > 0) {
                                        var tmp = random(1, 2);
                                        vasturl[i][j] = vasturl[i][j].replace("[50%]", "");
                                        if (tmp == 2) {
                                            vasturl[i][j] = ''
                                        }
                                    }
                                }
                            }
                            if (v.vast_preload == 1) {
                                for (var i = 0; i < vasturl.length; i++) {
                                    var n = i == 0 ? 1 : 0;
                                    if (vasturl[i].length > n) {
                                        for (var j = n; j < vasturl[i].length; j++) {
                                            var _url = trim(vasturl[i][j]);
                                            if (o.system.ie9) {
                                                VastAddPreload(_url)
                                            } else {
                                                setTimeout(VastAddPreload, i * 100, _url)
                                            }
                                        }
                                    }
                                }
                            }
                            o.vastloader.Load(trim(vasturl[0][0]), x);
                            return true
                        } else {
                            return false
                        }
                    } else {
                        return false
                    }
                }
            } else {
                return false
            }
        };
        this.advertising = function(x) {
            Advertising(x)
        };

        function MidrollOverlay(w, x, d) {
            if (exist(o[w + 'o']) && v[w + 's'] == 1) {
                var y;
                for (var i in o[w + 'o']) {
                    if (o[w + 'o'].hasOwnProperty(i)) {
                        if (!exist(o[w + 'o'][i].worked) && exist(o[w + 'o'][i].time) && exist(o[w + 'o'][i].vast)) {
                            var z = o[w + 'o'][i].time.toString();
                            if (z) {
                                if (z.indexOf("%") > 0) {
                                    if (d > 0) {
                                        z = parseInt(z.substr(0, z.indexOf("%"))) * d / 100
                                    } else {
                                        z = -1
                                    }
                                } else {
                                    z = parseInt(z)
                                } if (x >= z) {
                                    if (v['vast_' + w + 'rest'] > 0 && z > -1) {
                                        if (x - z >= v['vast_' + w + 'rest']) {
                                            z = -1
                                        }
                                    }
                                    if (z > -1) {
                                        y = o[w + 'o'][i].vast;
                                        v[w] = o[w + 'o'][i].vast;
                                        if (Advertising(w)) {
                                            o[w + 'o'][i].worked = true;
                                            break
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
        this.VastImpression = function() {
            if (o.vasttype == "midroll") {
                if (v.vast_midrollbgload == 1) {
                    if (o.play) {
                        o.media.Pause();
                        o.controls.Pause()
                    }
                    css(o.vastcontainer, {
                        "opacity": 1,
                        "visibility": "visible",
                        "top": 0
                    })
                }
            }
            if (o.nativefull && !o.realfullscreen) {
                var x = o.media.tag();
                if (x) {
                    x.webkitExitFullscreen()
                }
            }
        };
        this.VastReady = function(x) {
            o.vastloader = null;
            log("VAST ready");
            js("vast_ready", o.vasttype);
            if (x.type == "overlay") {
                var ovr = new VastOverlay(x);
                o.overlays.push(ovr)
            } else {
                if (exist(o.vast)) {
                    if (v.preload == 0 && v.vastbgpreload == 1 && o.media.time() == 0 && o.media.duration() == 0) {
                        v.preload = 1;
                        o.media.Preload()
                    }
                    if ((!o.vast.tagLive() || x.isVpaid) && o.vastgo > 0) {
                        log("VAST renew");
                        o.vast.Remove();
                        o.vast = null;
                        o.vast = new VastVideo()
                    }
                    if (o.vasttype == "midroll" && v.vast_midrollbgload == 1) {
                        css(o.vastcontainer, {
                            "opacity": 0,
                            "visibility": "hidden",
                            "top": 2000
                        })
                    } else {
                        if (o.play) {
                            o.media.Pause();
                            o.controls.Pause()
                        }
                    }
                    o.vastgo++;
                    if (o.adsfirst && v.vast_longtimeout > 0) {
                        clearTimeout(o.vast_longtimeout);
                        o.vast_longtimeout = setTimeout(VastLongTimeout, v.vast_longtimeout * 1000 * 60);
                        if (exist(v.vast_longtimemsg)) {
                            if (v.vast_longtimemsg != '') {
                                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                                o.vast_longtomsg = new PluginVastTimeMsg()
                            }
                        }
                    }
                    o.adsfirst = false;
                    if (v.vast_prestarttimeout > 0) {
                        log("VAST startdelay");
                        js("vast_startdelay");
                        setTimeout(VastGo, v.vast_prestarttimeout * 1000, x)
                    } else {
                        VastGo(x)
                    }
                } else {
                    log("VAST alarm")
                }
            }
        };

        function VastGo(x) {
            o.vast.Go(x)
        }

        function VastLongTimeout() {
            if (exist(o.vast)) {
                if (o.vast.active() && o.vast_impressions == 0) {
                    o.vast.RemoveForNextAd();
                    log("VAST timeout " + v.vast_longtimeout);
                    vasturl = [];
                    VastRemoveAndPlay()
                }
            }
        }
        this.VastError = function() {
            js('vast_error', o.vasttype);
            log("VAST error");
            VastNext()
        };
        this.VastNext = function() {
            var stop = false;
            var nolimit = false;
            if (o.vasttype == "preroll") {
                if (v.vast_preroll_and2limit > 0 && o.vast_starts > 0) {
                    nolimit = true;
                    if (o.vast_impressions >= v.vast_preroll_and2limit) {
                        stop = true
                    }
                }
                if (v.vast_preroll_andlimit > 0 && !nolimit) {
                    if (v.vast_preroll_2andlimit == 1 && o.vast_starts == 0) {} else {
                        if (o.vast_impressions >= v.vast_preroll_andlimit) {
                            stop = true
                        }
                    }
                }
            }!stop ? VastNext() : VastRemoveAndPlay()
        };
        this.VastRemoveUrl = function(x) {
            if (v[o.vasttype + "_recover"]) {
                for (var i = 0; i < 3; i++) {
                    v[o.vasttype + "_recover"] = v[o.vasttype + "_recover"].replace(x + (i == 0 ? ' and ' : (i == 1 ? ' or ' : '')), '')
                }
            }
        };

        function VastNext() {
            if (vasturl.length > 0 && vasturl[vast_and]) {
                if (vast_or < vasturl[vast_and].length - 1) {
                    o.vast ? o.vast.RemoveForNextAd() : '';
                    vast_or++;
                    var _url = trim(vasturl[vast_and][vast_or]);
                    var _preloaded = VastPreloaded(_url);
                    if (_preloaded == 'skip') {
                        o.vastloader = new VastLoader();
                        o.vastloader.Load(_url, o.vasttype)
                    }
                    if (_preloaded == 'error') {
                        VastNext()
                    }
                } else {
                    VastRemoveAndPlay()
                }
            } else {
                VastRemoveAndPlay()
            }
        }

        function VastPreloaded(_url) {
            var x = 'skip';
            if (v.vast_preload == 1 && o.vast_loaders) {
                var find = false;
                var n = 0;
                for (var i = 0; i < o.vast_loaders.length; i++) {
                    if (o.vast_loaders[i].done == 0) {
                        if (o.vast_loaders[i].ldr.preloaded(_url)) {
                            o.vast_loaders[i].done = 1;
                            var y = o.vast_loaders[i].ldr.Status();
                            if (y == 'ready') {
                                o.vastloader = o.vast_loaders[i].ldr;
                                log("VAST preloaded");
                                o.vast_loaders[i].ldr.Ready();
                                x = y
                            } else {
                                if (y == '') {
                                    x = 'ok';
                                    log("VAST preloading");
                                    o.vastloader = o.vast_loaders[i].ldr;
                                    o.vast_loaders[i].ldr.disablePreload()
                                }
                                if (y == 'error') {
                                    x = 'error'
                                }
                            }
                            find = true
                        }
                        if (find && o.vast_loaders[i].load == 0) {
                            n++;
                            if (n < 6) {
                                VastPreloadLoad(o.vast_loaders[i])
                            } else {
                                break
                            }
                        }
                    }
                }
            }
            return x
        }
        this.VastInsertAnd = function(x, y) {
            if (x != '') {
                var z = vast_and;
                var moveOr2end = false;
                if (y) {
                    for (var j = 0; j < vasturl.length; j++) {
                        vasturl[j] == y ? z = j : ''
                    }
                }
                if (vasturl.length == 1) {
                    if (vasturl[0].length > 1 && vast_or < vasturl[0].length - 1 && vasturl[vast_or]) {
                        var last_ors = vasturl[vast_or].slice(1, 99);
                        vasturl[0].splice(vast_or + 1, 99);
                        moveOr2end = true
                    }
                }
                if (typeof(x) == "object") {
                    for (var i = 0; i < x.length; i++) {
                        vasturl.splice(z + i + 1, 0, [x[i]]);
                        if (o.system.ie9) {
                            VastAddPreload(x[i])
                        } else {
                            setTimeout(VastAddPreload, i * 100, x[i])
                        }
                    }
                } else {
                    if (typeof(x) == "string") {
                        vasturl.push([x]);
                        VastAddPreload(x)
                    }
                } if (moveOr2end) {
                    vasturl[vasturl.length - 1] = vasturl[vasturl.length - 1].concat(last_ors)
                }
            }
        };
        this.VastInsertOr = function(x, y) {
            if (x != '') {
                var z = vast_and;
                if (y) {
                    for (var j = 0; j < vasturl.length; j++) {
                        vasturl[j] == y ? z = j : ''
                    }
                }
                if (vasturl[z]) {
                    if (typeof(x) == "object") {
                        for (var i = 0; i < x.length; i++) {
                            vasturl[z].push(x[i])
                        }
                    } else {
                        if (typeof(x) == "string") {
                            vasturl[z].push(x)
                        }
                    }
                }
            }
        };
        this.VastRemoveAndPlay = function(x) {
            VastRemoveAndPlay(x)
        };

        function VastAddPreload(x) {
            if (v.vast_preload == 1 && o.vast_loaders) {
                var i = 0;
                for (var i = 0; i < vasturl.length; i++) {
                    if (vasturl[i] == x) {
                        if (vast_and >= i) {
                            return
                        } else {}
                    }
                }
                if (vasturl.length == 1 && vasturl[0].length > 1) {} else {
                    var n = 0;
                    for (i = 0; i < o.vast_loaders.length; i++) {
                        o.vast_loaders[i].done == 0 ? n++ : ''
                    }
                    o.vast_loaders.push({
                        load: 0,
                        done: 0,
                        x: trim(x),
                        t: o.vasttype,
                        ldr: new VastLoader(true)
                    });
                    n < 5 ? VastPreloadLoad(o.vast_loaders[o.vast_loaders.length - 1]) : ''
                }
            }
        }

        function VastPreloadLoad(x) {
            if (x) {
                x.load = 1;
                x.ldr.Load(x.x, x.t)
            }
        }

        function VastRemoveAndPlay(dontplay) {
            var stop = false;
            var nolimit = false;
            if (o.vasttype == "preroll") {
                if (v.vast_preroll_and2limit > 0 && o.vast_starts > 0) {
                    nolimit = true;
                    if (o.vast_impressions >= v.vast_preroll_and2limit) {
                        stop = true
                    }
                }
                if (v.vast_preroll_andlimit > 0 && !nolimit) {
                    if (v.vast_preroll_2andlimit == 1 && o.vast_starts == 0) {} else {
                        if (o.vast_impressions >= v.vast_preroll_andlimit) {
                            stop = true
                        }
                    }
                }
            }
            if (vasturl.length > 0 && vast_and == vasturl.length - 1) {
                if (vasturl[0][0].indexOf("js:") == 0) {
                    vast_and = -1;
                    vasturl = [
                        [vasturl[0][0]]
                    ]
                }
            }
            if (o.vast_stop == 2) {
                stop = true
            }
            if (vasturl.length > vast_and + 1 && !stop) {
                o.vast.RemoveForNextAd();
                vast_and++;
                o.adscounter++;
                vast_or = 0;
                var _url = trim(vasturl[vast_and][0]);
                var _preloaded = VastPreloaded(_url);
                if (_preloaded == 'skip') {
                    o.vastloader = new VastLoader();
                    o.vastloader.Load(_url, vast_type)
                }
                if (_preloaded == 'error') {
                    VastRemoveAndPlay(dontplay)
                }
            } else {
                RemoveCurtain();
                o.controls.StopWaiting();
                if (exist(o.vast)) {
                    o.vast.Remove();
                    o.vast = null
                }
                o.vastloader = null;
                vasturl = [];
                vast_or = 0;
                vast_and = 0;
                o.shwvstfnsh != 1 ? js("vast_finish", o.vasttype) : '';
                o.shwvstfnsh = 0;
                if (v.vast_ima == 1) {
                    if (o.ima) {
                        o.ima.Destroy();
                        o.ima = undefined
                    }
                }
                vast_type = '';
                o.vast_impressions = 0;
                clearTimeout(o.vast_longtimeout);
                o.vast_longtomsg ? o.vast_longtomsg.remove() : '';
                o.vast_starts++;
                if (o.vasttype == "preroll" || (o.vasttype == "pauseroll" && v.pauserollonplay == 1) || o.vasttype == "midroll") {
                    if (v.file != '?') {
                        o.media.AfterVast();
                        var re;
                        if (o.file_type == "youtube" && !o.vastclick && o.system.ios) {
                            re = true;
                            o.vasttype == "preroll" ? o.media.reYT() : ''
                        }
                        if (re || dontplay == 'dontplay' || v.vast_dontplay == 1) {} else {
                            o.actions.Play(1)
                        }
                    }
                }
                if (o.resizeonplay > 0) {
                    NewAspect(o.resizeonplay);
                    o.resizeonplay = 0
                }
                if (o.vasttype == "postroll") {
                    End()
                }
                o.vastclick = false;
                o.vasttype = null
            }
        };
        this.EmptyVastUrl = function() {
            vasturl = [
                ['']
            ]
        };
        this.VastRecover = function(y) {
            var x = ['preroll', 'pauseroll', 'postroll', 'intro', 'outro'];
            var z;
            for (var i = 0; i < x.length; i++) {
                z = false;
                if (y) {
                    y != x[i] ? z = true : ''
                }
                if (!z && exist(v[x[i].concat("_", "recover")])) {
                    v['vast_' + x[i].concat("_", "limit")]--;
                    if (v['vast_' + x[i].concat("_", "limit")] > 0) {
                        v[x[i]] = v[x[i].concat("_", "recover")];
                        v[x[i].concat("_", "recover")] = null
                    }
                }
            }
        };
        this.Password = function() {
            Curtain();
            if (exist(o.pass)) {
                o.pass.Remove();
                o.pass = null
            }
            o.pass = new Pass()
        };
        this.RemovePassword = function() {
            RemoveCurtain();
            o.pass.Remove();
            o.pass = null
        };
        this.Curtain = function() {
            Curtain()
        };
        this.RemoveCurtain = function() {
            RemoveCurtain()
        };

        function Curtain() {
            if (o.curtain) {} else {
                o.curtain = createElement("div");
                o.frame.appendChild(o.curtain);
                css(o.curtain, {
                    "width": "100%",
                    "height": "100%",
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "background": "#000000",
                    "opacity": 0.1
                });
                o.curtain.style.zIndex = 1001
            }
        };

        function RemoveCurtain() {
            if (o.curtain) {
                o.frame.removeChild(o.curtain);
                o.curtain = null
            }
        };

        function ShowPoster() {
            if (exist(o.poster)) {
                if (v.poster != o.currentposter) {
                    Poster(v.poster, o.poster, v.poster_scale)
                }
                show(o.poster);
                css(o.poster, {
                    "opacity": v.poster_a
                });
                o.controls.refresh()
            }
        };
        this.HidePoster = function() {
            if (exist(o.poster)) {
                if (isVisible(o.poster)) {
                    var t = o.media.time();
                    if (t == 0 && v.posterhidestart == 1) {} else {
                        if (v.posterhidetime > 0) {
                            clearTimeout(o.pstr_to);
                            o.pstr_to = setTimeout(HidePoster2, v.posterhidetime * 1000)
                        } else {
                            HidePoster2()
                        }
                    }
                }
            }
        };

        function HidePoster2() {
            clearTimeout(o.pstr_to);
            if (v.posteronpause == 1 && !o.play) {} else {
                css(o.poster, {
                    "opacity": 0
                });
                setTimeout(HidePoster3, 500)
            }
        }

        function HidePoster3() {
            if (!o.play && v.posterhide == 1) {} else {
                hide(o.poster)
            }
        }
        this.ShowPoster = function() {
            ShowPoster()
        };

        function StopOtherPlayer(x) {
            if (v.stopotherplayers == 1) {
                for (var i = 0; i < pljssglobal.length; i++) {
                    if (pljssglobal[i].api("id") != v.id) {
                        pljssglobal[i].api('pause')
                    }
                }
            }
            pljssglobalid = v.id
        }

        function IndexPlaylist(x) {
            var y = Object.keys(x).length;
            if (y > 0) {
                x = IndexPlaylistProcessor(x, y, '', -1)
            }
            return x
        }

        function IndexPlaylistProcessor(x, y, p, j) {
            var x2 = [];
            var stop;
            if (exist(x['playlist'])) {
                x = x['playlist'];
                y = x.length
            }
            var ii = 0;
            for (var i = 0; i < y; i++) {
                stop = false;
                if (exist(x[i]['id'])) {
                    x[i]['pjs_id'] = x[i]['id']
                }
                x[i]['id'] = "x" + p + '-' + i + (exist(x[i]['id']) ? '-' + x[i]['id'] : '');
                j == -1 && i == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : '';
                if (!exist(o.pl_first_id)) {
                    j == 0 && !exist(x[i]['folder']) ? o.pl_first_id = x[i]['id'] : ''
                }
                x[i]['pjs_parent'] = p;
                x[i]['pjs_parent_i'] = j;
                x[i]['pjs_i'] = ii;
                if (exist(x[i]['comment'])) {
                    x[i]['title'] = x[i]['comment'];
                    var q1 = x[i]['file'] ? x[i]['file'].indexOf('[') : 0;
                    var q2 = x[i]['file'] ? x[i]['file'].indexOf(']') : 0;
                    if (q1 > 0 && q2 > 0) {
                        var s1 = x[i]['file'].substr(q1 + 1, q2 - q1 - 1);
                        var s2 = s1.split(",");
                        var s3 = '';
                        for (var k = 0; k < s2.length; k++) {
                            s3 += "[" + s2[k] + "]" + x[i]['file'].replace("[" + s1 + "]", s2[k]) + (k < s2.length - 1 ? "," : '')
                        }
                        x[i]['file'] = s3
                    }
                }
                if (exist(x[i]['playlist'])) {
                    x[i]['folder'] = x[i]['playlist']
                }
                if (!exist(x[i]['folder'])) {
                    if (exist(x[i]['file'])) {
                        if (x[i]['file'] == '' && !exist(x[i]['redirect'])) {
                            stop = true
                        }
                    } else {
                        stop = true
                    }
                }
                if (!stop) {
                    o.playlist_dic[x[i]['id']] = x[i];
                    ii += 1
                }
                if (exist(x[i]['folder'])) {
                    var z = Object.keys(x[i]['folder']).length;
                    if (z > 0) {
                        x[i]['folder'] = IndexPlaylistProcessor(x[i]['folder'], z, x[i]['id'], i)
                    }
                }
                if (!stop) {
                    x2.push(x[i])
                }
            }
            return x2
        }

        function FindFileInPlaylist() {
            var x = [];
            if (exist(v.plstart)) {
                if (v.plstart.indexOf("x-") != 0) {
                    for (var y in o.playlist_dic) {
                        if (o.playlist_dic.hasOwnProperty(y)) {
                            if (o.playlist_dic[y].pjs_id == v.plstart) {
                                v.plstart = y
                            }
                        }
                    }
                }
                if (exist(o.playlist_dic[v.plstart])) {
                    v.playlist.norootplstart == 1 ? v.playlist.openplaylistroot = 0 : '';
                    x = o.playlist_dic[v.plstart]
                } else {
                    x = o.playlist[0];
                    if (v.plstart == o.plcontinue) {
                        o.seekto = undefined
                    }
                }
            } else {
                x = o.playlist[0]
            } if (x) {
                for (var i = 0; i < 10; i++) {
                    if (exist(x['folder'])) {
                        x = x['folder'][0]
                    } else {
                        break
                    }
                }
                v.plstart = x.id;
                if (v.plstart == o.plcontinue) {
                    x.start = undefined
                }
            }
            return x
        }

        function End() {
            gaTracker("end", "End", true);
            o.actions.VastRecover();
            if (o.storage && v.timestore == 1) {
                o.
                continue.write(0, o.media.duration())
            }
            if (o.controls.PlaylistExist()) {
                if (v.playlist.autoplaylist == 1 && o.controls.PlaylistNextExist()) {
                    o.controls.PlaylistNext();
                    if (o.play && o.system.ios && o.file_type != "native") {}
                } else {
                    End2()
                }
            } else {
                ShowPoster();
                js("finish")
            }
        }
        this.ShuffleEnd = function() {
            End2()
        };

        function End2() {
            if (v.playlist.playlistrewind == 1 && !o.controls.PlaylistNextExist()) {
                o.controls.PlaylistRewind();
                return
            }
            if (v.playlist.openplaylistafter == 1) {
                !o.controls.PlaylistVisible() ? o.controls.Playlist() : ''
            }
            ShowPoster();
            js("finish")
        }

        function fjs(x) {
            if (x.indexOf('js:') == 0) {
                try {
                    x = eval(x.substr(3))
                } catch (e) {
                    console.log(e.message)
                }
            }
            return x
        }

        function Heartbeat() {
            var vts = Math.floor(Date.now() / 1000);
            var fts = (exist(v.livets) ? v.livets : 0) + parseInt(o.media.time());
            var type = 0;
            o.system.desktop ? type = 1 : '';
            o.system.ios ? type = 2 : '';
            o.system.android ? type = 3 : '';
            o.system.winmob ? type = 4 : '';
            o.system.tv ? type = 5 : '';
            var url = v.heartbeat.replace("[vts]", vts);
            url = url.replace("[fts]", fts);
            url = url.replace("[dvtp]", type);
            var gif = document.createElement("img");
            gif.setAttribute('src', url);
            gif.setAttribute('height', '1px');
            gif.setAttribute('width', '1px');
            o.frame.appendChild(gif)
        }
    };
    var Media = function(url) {
        var url;
        var urls;
        var urls_and;
        var current_url;
        var _status = "";
        var _lastime = 0;
        var _ended = false;
        var _stopped = false;
        var _tags;
        var media;
        var media2;
        o.mediascale = {
            x: 1,
            y: 1,
            x0: 1,
            y0: 1
        };
        var wait;
        var plurls;
        var current_plurl = 0;
        if (typeof(url) == 'string') {
            url = trim(url);
            if (url.indexOf("[{") == 0) {
                try {
                    url = url.replace(/pjs'qt/ig, '"');
                    url = JSON.parse(url);
                    wait ? url = o.actions.File(url) : ''
                } catch (e) {
                    console.log(e);
                    url = "incorrect JSON"
                }
            }
            if (url.indexOf("#" + v.enc2) == 0) {
                url = o[o.fd[0]](url)
            }
            if (url) {
                if (url.indexOf("#" + v.enc3) == 0 && url.indexOf(v.file3_separator) > 0) {
                    url = o[o.fd[1]](url)
                }
            }
            if (url) {
                if (url.indexOf("#0") == 0) {
                    if (url.indexOf(o.pltxt) > 0) {
                        url = fd0(url.replace(o.pltxt, '')) + o.pltxt
                    } else {
                        url = fd0(url)
                    }
                }
            }
            if (v.fplace == 1) {
                url = fplace(url)
            }
            if (typeof(url) == 'string') {
                if (url.indexOf(".m3u") == url.length - 4 || url.indexOf(".txt") > 0) {
                    plurls = url.split(" or ");
                    PlaylistLoad()
                }
            }
        }
        o.mediacontainer = createElement("div");
        css(o.mediacontainer, {
            "position": "absolute",
            "top": 0,
            "left": 0,
            "width": "100%",
            "height": "100%",
            "transition": "transform 0.2s linear",
            "text-align": "center"
        });
        o.frame.appendChild(o.mediacontainer);
        if (!wait) {
            Start()
        }

        function PlaylistLoad() {
            url = plurls[current_plurl];
            if (url.indexOf(o.pltxt) > 0) {
                url = url.replace(o.pltxt, '');
                v.file = url
            }
            var xhr = XHR(url);
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    Playlist(this)
                } else {
                    PlaylistError(1)
                }
            };
            xhr.onerror = function(e) {
                PlaylistError(1)
            };
            xhr.send();
            wait = true
        }

        function PlaylistError(x) {
            if (current_plurl + 1 < plurls.length) {
                current_plurl++;
                PlaylistLoad();
                x = 0
            }
            if (x == 1) {
                onError("playlist not found or access denied")
            }
            if (x == 2) {
                onError("playlists JSON")
            }
        }

        function Playlist(x) {
            if (x.responseText) {
                var y = x.responseText;
                if (y.indexOf("#" + v.enc2) == 0) {
                    y = o[o.fd[0]](y)
                }
                if (y.indexOf("#" + v.enc3) == 0 && y.indexOf(v.file3_separator) > 0) {
                    y = o[o.fd[1]](y)
                }
                if (url.indexOf(".m3u") == url.length - 4) {
                    var m3u = y.split(/(\r\n\t|\n|\r\t)/gm);
                    url = [];
                    var m3ui = 1;
                    var m3ut = '';
                    for (var i = 0; i < m3u.length; i++) {
                        if (m3u[i].indexOf("#EXTINF") > -1) {
                            if (m3u[i].indexOf(" - ") > -1) {
                                var tmp = m3u[i].split(" - ");
                                m3ut = tmp[tmp.length - 1]
                            }
                        }
                        if (m3u[i].indexOf("http") > -1) {
                            url.push({
                                title: "" + (m3ut != '' ? m3ut : m3ui),
                                file: m3u[i]
                            });
                            m3ui++;
                            m3ut = ''
                        }
                    }
                } else {
                    y = y.replace(/(\r\n\t|\n|\r\t)/gm, "");
                    try {
                        url = JSON.parse(y)
                    } catch (e) {
                        PlaylistError(2)
                    }
                } if (exist(url.items)) {
                    url = YoutubePlaylist(url)
                }
                if (o.controls) {
                    if (v.playlist.openplaylistbefore == 1) {
                        if (!o.controls.PlaylistVisible()) {
                            o.controls.PlaylistShow()
                        }
                    }
                }
                Start();
                Resize();
                setTimeout(function() {
                    js("playlist")
                }, 1)
            }
        }

        function Start() {
            url = o.actions.File(url);
            url && url != '?' ? File(url) : ''
        }

        function onError(x) {
            log("Error: " + x);
            var y = true;
            var yy = true;
            js("loaderror", x);
            if (urls) {
                if (urls.length > 0) {
                    current_url++;
                    y = current_url > urls.length - 1;
                    if (y && v.tryotherquality == 1) {
                        if (o.files.length > 1 && o.current_quality > 0) {
                            if (o.files_quality[o.current_quality].indexOf(Lang("loading_error")) == -1) {
                                o.files_quality[o.current_quality] = o.files_quality[o.current_quality] + ' (' + Lang("loading_error") + ')'
                            }
                            yy = false;
                            o.actions.SetQuality(o.current_quality - 1)
                        }
                    }
                    if (!y) {
                        var z = false;
                        o.seekto > 0 || !o.start || media.isLive() ? '' : o.seekto = Time();
                        if (o.file_type != FileType(urls[current_url]) || o.file_type != 'native') {
                            if (o.play) {
                                o.actions.Stop();
                                z = true
                            }
                        }
                        log("Alternative source", o.seekto);
                        File('or');
                        o.start && !o.vast ? media.Play() : ''
                    } else {
                        if (v.reload == 1 && yy) {
                            y = false;
                            ErrorReload()
                        }
                    }
                }
            }
            if (y && yy) {
                gaTracker("error", "Error", true);
                if (v.alerts && !o.media_error) {
                    if (v.alert404 == 1 && x == "not found") {
                        o.alert.txt(v.alert404text)
                    } else {
                        o.alert.txt(x)
                    } if (v.alert404v == 1 && exist(v.alert404video)) {
                        o.err404v = new PluginErrorVideo()
                    }
                }
                o.media_error = true;
                if (o.play) {
                    o.actions.StopWaiting();
                    o.controls.Pause()
                }
                exist(o.poster) ? o.actions.ShowPoster() : '';
                js("error", x)
            }
        };

        function ErrorReload() {
            log("Error Reload Timeout");
            exist(o.reloadErrorTimeout) ? clearTimeout(o.reloadErrorTimeout) : '';
            o.reloadErrorTimeout = setTimeout(function() {
                o.actions.Reload()
            }, v.reloadtimeout * 1000)
        }
        this.onError = function() {
            onError(media.errorMessage())
        };
        this.onEnded = function(y) {
            log("Ended");
            _ended = true;
            var x = false;
            if (Duration() > 0 && !o.casting && !y) {
                var time = o.current_time;
                if (time + 10 < Duration()) {
                    log('Break (recovery)');
                    js("recovery");
                    media.Play();
                    media.Seek(time);
                    x = true
                }
            }
            if (!x) {
                o.actions.Ended();
                js("end")
            }
        };
        this.onPlay = function() {
            if (v.posterhidepause == 1) {
                exist(o.poster) ? o.actions.ShowPoster() : ''
            }
            v.posterhide == 1 ? o.actions.HidePoster() : '';
            o.controls.Play();
            o.actions.onPlayTag();
            if (v.tags == 1 && exist(v.tagsurl)) {
                if (v.tagsurl.length > 5) {
                    RadioTags();
                    clearInterval(_tags);
                    _tags = setInterval(RadioTags, v.tagsinterval * 1000)
                }
            }
            js("play")
        };
        this.NativeControls = function() {
            if (v.nativecontrolsmobile == 1 && o.tagvideo) {
                if (o.actions.NativeControls()) {
                    o.nativecontrols = media.nativeControls();
                    o.controls.refresh()
                }
            }
            o.checknative = true
        };
        this.onPause = function() {
            o.actions.Pause()
        };
        this.onSeeking = function() {
            log("Seeking")
        };
        this.onSeeked = function() {
            log("Seeked");
            o.actions.Seeked();
            o.seeking_time ? js("seek", o.seeking_time) : ''
        };
        this.onMeta = function() {
            log("Metadata");
            o.actions.Metadata()
        };
        this.onDuration = function() {
            if (media) {
                log("Duration", Duration());
                o.actions.Duration(Time(), Duration());
                js("duration", Duration());
                if (exist(o.restart_audio)) {
                    o.actions.SetAudioTrack(o.restart_audio);
                    o.restart_audio = null
                }
            }
        };

        function Time() {
            var x = media.time();
            return x
        }

        function Duration() {
            var x = media.duration();
            return x
        }
        this.onVolume = function() {};
        this.onWaiting = function() {
            log("Waiting");
            o.actions.Waiting();
            js("waiting")
        };
        this.onTimeupdate = function() {
            if (_lastime != Time()) {
                o.actions.StopWaiting();
                if (_lastime == 0) {
                    if (v.posterhide == 1 && v.posterhidestart == 1) {
                        o.actions.HidePoster()
                    }
                }
            }
            _lastime = Time();
            js("time", _lastime);
            if (v.pip.on == 1) {
                if (typeof(PluginPip) == 'function') {
                    if (!media2 && v.pip.custom != 1 && v.file2 && v.file2 != '' && _lastime > 0) {
                        o.mediapip = new PluginPip();
                        media2 = o.mediapip.create()
                    }
                }
            }
        };
        this.onYoutubeReady = function() {
            if (o.file_type == "youtube") {
                media ? media.YoutubeReady() : ''
            }
        };
        this.playByYoutubeId = function(x) {
            o.actions.Stop();
            media.playId(x)
        };
        this.YoutubeReady = function() {
            if (o.file_type == "youtube" && media) {
                return media.ready()
            } else {
                return true
            }
        };
        this.getHLS = function() {
            return media.getHLS()
        };
        this.getDASH = function() {
            return media.getDASH()
        };
        this.SetQuality = function(x) {
            log("Quality", x);
            if ((o.file_type == "native" || o.file_type == "ws" || (o.file_type == "hls" && (v.hlsquality == 0 || HlsLevelsLength() < 2)) || (o.file_type == "dash" && (v.dashquality == 0 || DashLevelsLength() < 2))) && exist(o.files[x])) {
                var time = this.time();
                o.seekto > 0 ? '' : o.seekto = time;
                o.actions.Seek(time, false);
                File(o.files[x], true);
                o.actions.Play()
            }
            if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                media.setHlsQuality(x)
            } else if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) {
                media.setDashQuality(x)
            } else if (o.file_type == "youtube") {
                media.setQuality(x)
            }
        };

        function NativeSubtitle() {
            if (o.tagvideo && o.subs) {
                media.removeTracks();
                for (var i = 0; i < o.subs.length; i++) {
                    media.addTrack(o.subs[i], o.files_subtitle[i], (i == o.current_subtitle))
                }
            }
        }
        this.SetSpeed = function(x) {
            log("Speed", x);
            media.setSpeed(x);
            if (v.pip.on == 1) {
                if (media2) {
                    media2.setSpeed(x)
                }
            }
        };
        this.nativeSubtitle = function() {
            NativeSubtitle()
        };
        this.removeNativeSubtitle = function() {
            media.removeTracks()
        };
        this.SetAudioTrack = function(x) {
            log("Audiotrack", x);
            if (o.audiotracks.length > 0) {
                if (o.audiotracks[x]) {
                    var time = this.time();
                    o.seekto > 0 ? '' : o.seekto = time;
                    o.actions.Seek(time, false);
                    File(o.audiotracks[x], true);
                    o.actions.Play()
                }
            } else {
                if (o.file_type == "hls" && v.hlsaudio == 1) {
                    media.setHlsAudioTrack(x)
                } else if (o.file_type == "dash" && v.dashaudio == 1) {
                    media.setDashAudioTrack(x)
                }
            }
        };
        this.getQuality = function() {
            var x = o.files_quality[o.current_quality];
            x == undefined ? x = '' : '';
            var y = autoQuality() && v.hlsautoquality == 1 && v.hlsquality == 1;
            return (y ? '' + Lang("auto") + ' ' : '') + x
        };
        this.getAudioTrack = function() {
            var x = o.files_audiotrack[o.current_audiotrack];
            x == undefined ? x = '' : '';
            return x
        };
        this.autoQuality = function() {
            return autoQuality()
        };

        function autoQuality() {
            var x = false;
            if (media) {
                if (o.file_type == "youtube") {
                    x = media.auto()
                }
                if (o.file_type == "hls" && v.hlsquality == 1 && HlsLevelsLength() > 1 && v.hlsautoquality == 1) {
                    x = media.auto()
                }
                if (o.file_type == "dash" && v.dashquality == 1 && DashLevelsLength() > 1) {
                    x = media.auto()
                }
            }
            return x
        }

        function HlsLevelsLength() {
            if (o.file_type == "hls") {
                return media.HlsLevelsLength()
            } else {
                return 0
            }
        }

        function DashLevelsLength() {
            if (o.file_type == "dash") {
                return media.DashLevelsLength()
            } else {
                return 0
            }
        }
        this.resize = function(x) {
            if (media && (o.file_type == "youtube" || o.file_type == "vimeo" || exist(v.ratio))) {
                media.resize()
            }
            if (v.screenmarginbottom > 0) {
                css(o.mediacontainer, {
                    "height": (o.fullscreen ? "100%" : o.normal_h - v.screenmarginbottom)
                })
            }
            if (o.media2 && v.pip.movable == 1) {
                o.mediapip.resize()
            }
        };
        this.size = function() {
            return media.size()
        };
        this.reload = function() {
            log('reload');
            o.reloadTimer = 0;
            o.start ? v.autoplay = 1 : '';
            File(url)
        };
        if (!exist(o.poster)) {
            CreatePoster()
        }
        if (exist(v.poster)) {
            if (v.poster != '') {
                Poster(v.poster, o.poster, v.poster_scale);
                if (v.posterhidepause == 1 && !o.start) {
                    hide(o.poster)
                }
            } else {
                v.poster = null
            }
        }

        function Status() {
            _status = media ? media.status() : ''
        }

        function ParseUrl(url) {
            urls = url.split(" or ");
            for (var i = 0; i < urls.length; i++) {
                if (urls[i].indexOf(" and ") > -1) {
                    urls_and = urls[i].split(" and ");
                    urls[i] = urls_and[random(0, urls_and.length - 1)]
                }
            }
            current_url = 0
        }

        function Timer() {
            Status();
            if (_status == "playing" || o.casting) {
                o.actions.Playing()
            }
            if (_status != "") {
                o.actions.Loading()
            }
        }

        function CreatePoster() {
            if (o.poster) {
                o.frame.removeChild(o.poster)
            }
            o.poster = createElement("div");
            css(o.poster, {
                "pointer-events": "none",
                "opacity": v.poster_a,
                transition: "opacity 0.5s"
            });
            if (v.poster_float == 1) {
                PluginFloatPoster()
            } else {
                css(o.poster, {
                    'position': 'absolute',
                    'left': 0,
                    'top': 0,
                    'width': '100%',
                    'height': '100%'
                })
            }
            o.frame.appendChild(o.poster)
        }

        function File(x, y, crt) {
            v.file2_separator == '' ? v.file2_separator = ';' : '';
            if (x.indexOf('{') > -1 && x.indexOf('}') > -1 && x.indexOf(v.file2_separator) > -1) {
                var z = x.split(v.file2_separator);
                o.audiotracks = [];
                for (var i = 0; i < z.length; i++) {
                    o.files_audiotrack[i] = z[i].substr(z[i].indexOf("{") + 1, z[i].indexOf("}") - 1);
                    o.audiotracks[i] = z[i].substr(z[i].indexOf("}") + 1);
                    if (exist(v.default_audio)) {
                        if (v.default_audio == o.files_audiotrack[i]) {
                            o.current_audiotrack = i
                        }
                    }
                }
                x = o.audiotracks[o.current_audiotrack]
            }!exist(urls) ? urls = [] : '';
            x && x != 'or' && x != 'x' ? ParseUrl(x) : '';
            var ft = o.file_type;
            if (urls.length > 0) {
                o.file_type = FileType(urls[current_url]);
                var create = false;
                if (crt) {
                    create = true
                }
                url = urls[current_url];
                if (!create && x != 'x' && media && o.file_type == ft && (ft == "native" || ft == "vimeo" || (ft == "youtube" && o.start && !_stopped) || (ft == "hls"))) {
                    media.src(url);
                    log("src")
                } else {
                    log("New");
                    RemoveMedia();
                    CreateMedia(url)
                } if (o.speed1) {
                    if (o.custom_speed) {
                        media.setSpeed(o.custom_speed)
                    } else {
                        if (o.current_speed != o.speed1) {
                            media.setSpeed(o.files_speed[o.current_speed])
                        }
                    }
                }
            }
            if (!y) {
                clearInterval(o.timerInterval);
                o.timerInterval = setInterval(Timer, o.timerTime);
                if (exist(v.subtitle)) {
                    if (v.subtitle != '') {
                        o.actions.Subtitle(v.subtitle)
                    }
                }
                if (v.hidevideo == 1) {
                    if (v.nativecontrolsmobile == 1 && o.system.mobile) {} else {
                        if (o.file_type == "youtube") {
                            css(o.mediacontainer, {
                                "top": -3000,
                                "left": -3000
                            })
                        } else {
                            hide2(o.mediacontainer)
                        }
                        v.toolbar.hide = 0
                    }
                }
            }
        }

        function FileType(x) {
            var type = "native";
            if (x) {
                if (x.indexOf(".m3u8") > 0) {
                    type = "hls"
                } else if (x.indexOf(".mpd") > 0) {
                    type = "dash"
                } else if (x.indexOf("ws://") == 0) {
                    type = "ws"
                } else if (x.indexOf('youtube.com/') > -1 || x.indexOf('youtu.be/') > -1) {
                    if (typeof(MediaYoutube) == 'function') {
                        type = "youtube";
                        if (v.youtubeposter == 1) {
                            var y = 'https://img.youtube.com/vi/' + YoutubeID(x) + '/';
                            imageExists(y + 'maxresdefault.jpg', function(z) {
                                z > 100 ? v.poster = y + 'maxresdefault.jpg' : v.poster = y + 'hqdefault.jpg';
                                if (o.playlist_dic) {
                                    o.playlist_dic[o.plid]['poster'] = v.poster
                                }
                                v.autoplay == 1 || o.start ? '' : Poster(v.poster, o.poster, v.poster_scale)
                            })
                        }
                    } else {
                        log("No YouTube")
                    }
                } else if (v.vimeo == 1 && x.indexOf('vimeo.com/') > -1) {
                    type = "vimeo"
                } else if (v.pjsframe == 1) {
                    PjsFramed(x) ? type = "pjs" : ''
                }
            }
            o.tagvideo = type == "native" || type == "hls" || type == "dash" || type == "ws";
            return type
        }

        function imageExists(url, callback) {
            var img = new Image();
            img.onload = function() {
                callback(this.height)
            };
            img.src = url
        }

        function CreateMedia(x) {
            o.file_type = FileType(x);
            o.reverse_quality = false;
            if (o.tagvideo) {
                media = new MediaVideo(x, o.mediacontainer, false)
            }
            if (o.file_type == "youtube") {
                media = new MediaYoutube(x, o.mediacontainer)
            }
            if (v.vimeo == 1 && o.file_type == "vimeo") {
                media = new MediaVimeo(x, o.mediacontainer)
            }
            if (o.file_type == "pjs") {
                media = new MediaPjs(x)
            }
            o.controls ? o.controls.UpdateSettings() : '';
            var t = 0;
            if (exist(v.duration)) {
                if (o.
                    continue && v.timestore == 1 && !o.start) {
                    t = o.
                    continue.flag().t
                }
                setTimeout(function() {
                    o.actions.Duration(t, v.duration)
                }, 100)
            }
        }

        function RemoveMedia() {
            if (media) {
                media.Remove();
                media = null;
                _status = "ended"
            }
            if (media2) {
                media2.Remove();
                media2 = null;
                media2 = undefined;
                o.mediapip.remove();
                o.media2 = null;
                o.mediapip = null
            }
        };
        this.Remove = function() {
            RemoveMedia()
        };
        this.RemoveAll = function() {
            urls = [];
            RemoveMedia()
        };
        this.File = function(x, y, z) {
            File(x, y, z)
        };
        this.Poster = function(x) {
            Poster(x, o.poster, v.poster_scale)
        };
        this.Play = function() {
            if (media) {
                _ended = false;
                _stopped = false;
                if (o.casting) {
                    o.chromecast.Play()
                } else {
                    media.Play();
                    v.posterhide == 1 ? o.actions.HidePoster() : ''
                } if (exist(media2)) {
                    media2.Play()
                }
                if (o.channels) {
                    if (o.tagvideo) {
                        if (o.clicktime > 0 && !o.channels.Created()) {
                            o.channels.Update()
                        }
                    } else {
                        o.files_channel = [];
                        o.controls.SettingChanged("channel")
                    }
                }
                if (o.tagvideo && v.volumegain > -1 && !o.gained && !o.system.ios) {
                    if (o.clicktime > 0) {
                        media.Gain()
                    }
                }
            } else {
                setTimeout(this.Play, 500)
            }
        };
        this.PipSwitch = function(event) {
            if (o.media2) {
                if (v.pip.movable == 1) {
                    if (o.moving[o.media2] > 2) {
                        return
                    }
                }
                if (event) {
                    event.stopPropagation();
                    window.event ? window.event.cancelBubble = true : ''
                }
                var tmp = media;
                media.ChangePip(true, o.media2);
                media2.ChangePip(false, o.mediacontainer);
                media = media2;
                media2 = tmp;
                media.Play();
                media2.Play();
                js("pip")
            }
        };
        this.reYT = function() {
            media.src(url)
        };
        this.ToolbarHide = function() {
            v.effects == 1 ? o.effects.api("hide") : '';
            o.toolbarhidden = true
        };
        this.ToolbarShow = function() {
            if (v.toolbar.resizeme) {
                v.toolbar.resizeme = false;
                o.controls ? o.controls.resizeFromText(1) : ''
            }
            o.toolbarhidden = false
        };
        this.PipToggle = function() {
            if (exist(o.media2)) {
                isVisible(o.media2) ? hide(o.media2) : show(o.media2)
            }
        };
        this.Airplay = function() {
            if (o.tagvideo && o.airplay) {
                o.airplayed = true;
                media.airplay()
            }
        };
        this.PipWebkit = function() {
            if (o.tagvideo && o.pipwebkit) {
                media.pipwebkit()
            }
        };
        this.BeforeVast = function() {
            if (v.vast_poster == 1 && exist(v.vast_posterurl)) {
                if (!exist(o.vast_poster)) {
                    o.vast_poster = createElement("div");
                    css(o.vast_poster, {
                        'position': 'absolute',
                        'left': 0,
                        'top': 0,
                        'width': '100%',
                        'height': '100%',
                        "pointer-events": "none",
                        "zIndex": 10000
                    });
                    o.frame.appendChild(o.vast_poster)
                }
                show2(o.vast_poster);
                Poster(v.vast_posterurl, o.vast_poster, 'fill')
            }
            if (media) {
                datetime(0);
                media.BeforeVast()
            }
        };
        this.AfterVast = function() {
            if (o.vast_poster) {
                hide2(o.vast_poster)
            }
            media ? media.AfterVast() : ''
        };
        this.Pause = function() {
            if (o.casting) {
                o.chromecast.Pause()
            } else {
                media ? media.Pause() : log("nomedia")
            } if (exist(o.media2)) {
                media2.Pause()
            }
        };
        this.Recover = function() {
            _stopped = true;
            o.actions.Seek(0, false);
            exist(o.poster) ? o.actions.ShowPoster() : '';
            File('x')
        };
        this.Toggle = function() {
            media ? media.Toggle() : ''
        };
        this.Seek = function(x) {
            if (media) {
                if (o.casting) {
                    o.chromecast.Seek(x)
                } else {
                    media.Seek(x);
                    if (v.pip.on == 1) {
                        if (media2) {
                            media2.Seek(x)
                        }
                    }
                }
            }
        };
        this.Mute = function() {
            if (media) {
                media.Mute();
                o.casting ? o.chromecast.Mute() : ''
            }
        };
        this.Unmute = function() {
            if (media) {
                media.Unmute();
                o.casting ? o.chromecast.Unmute() : ''
            }
        };
        this.Volume = function(x) {
            media ? media.Volume(x) : '';
            if (o.casting) {
                o.chromecast.Volume(x)
            }
        };
        this.isPlaying = function() {
            return media ? media.isPlaying() : false
        };
        this.isLive = function() {
            return media ? media.isLive() : false
        };
        this.status = function() {
            return _status
        };
        this.ended = function() {
            return _ended
        };
        this.time = function() {
            var x = 0;
            if (media) {
                x = Time();
                if (o.casting) {
                    var y = o.chromecast.Time();
                    y ? x = y : ''
                } else {
                    if (Duration() > 0 && x != Duration()) {
                        o.current_time = x + 0.0001
                    }
                }
                return x
            } else {
                return 0
            }
        };
        this.duration = function() {
            var x = 0;
            if (media) {
                x = Duration();
                x == 0 && exist(v.duration) ? x = v.duration * 1 : '';
                if (o.casting) {
                    var y = o.chromecast.Duration();
                    y ? x = y : ''
                }
            }
            return x
        };
        this.loaded = function() {
            return media ? media.loaded() : 0
        };
        this.createposter = function() {
            CreatePoster()
        };
        this.Preload = function() {
            if (o.tagvideo) {
                media.preload()
            }
        };
        this.scale = function(x) {
            if (String(x).indexOf(":") > 0) {
                var y = x.split(":");
                var z0 = o.screen_w / o.screen_h;
                var z1 = o.media.size();
                if (z1.width > 0) {
                    z0 = z1.width / z1.height
                }
                var z = y[0] / y[1];
                if (z0 != z) {
                    if (o.tagvideo) {
                        if (v.covervideo == 1) {
                            css(media.tag(), {
                                'object-fit': 'cover'
                            })
                        } else {
                            css(media.tag(), {
                                'object-fit': 'fill'
                            })
                        }
                    }
                    var w2 = o.screen_h * z;
                    var x2 = w2 / o.screen_w;
                    var h2 = o.screen_w / z;
                    var y2 = h2 / o.screen_h;
                    if (x2 < 1) {
                        o.mediascale.x0 = o.mediascale.x = parseFloat(x2);
                        o.mediascale.y = 1
                    } else {
                        o.mediascale.x = 1;
                        o.mediascale.y0 = o.mediascale.y = parseFloat(y2)
                    }
                    css(o.mediacontainer, {
                        "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                    });
                    o.custom_aspect = x
                }
            } else {
                o.mediascale.x += parseFloat(x);
                o.mediascale.y += parseFloat(x);
                css(o.mediacontainer, {
                    "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
                })
            } if (v.hotkey.scaledrag == 1) {
                if (!o.mediadrag) {
                    if (o.mediascale.x > 0 || o.mediascale.y > 1) {
                        PluginMovable(o.mediacontainer, 'o.dragging');
                        o.mediadrag = true
                    }
                } else {
                    if (o.mediascale.x == 1 && o.mediascale.y == 1) {
                        css(o.mediacontainer, {
                            "top": 0,
                            "left": 0
                        })
                    }
                }
            }
            o.controls.SettingsScale()
        };
        this.normalscale = function() {
            if (o.tagvideo) {
                css(media.tag(), {
                    'object-fit': 'contain'
                })
            }
            o.mediascale.x = o.mediascale.x0;
            o.mediascale.y = o.mediascale.y0;
            css(o.mediacontainer, {
                "transform": "scaleX(" + o.mediascale.x + ") scaleY(" + o.mediascale.y + ")"
            });
            o.controls.SettingsScale();
            o.custom_aspect = null
        };
        this.hlsDashSub = function(x, y) {
            media.hlsDashSub(x, y)
        };
        this.currentSubtitle = function() {
            var x = undefined;
            exist(o.subs) ? exist(o.subs[o.current_subtitle]) ? x = o.subs[o.current_subtitle] : '' : '';
            return x
        };
        this.currentFile = function() {
            return currentFile()
        };

        function currentFile() {
            return urls.length > 0 ? (urls[current_url] ? urls[current_url] : '') : ''
        };
        this.tag = function() {
            return media ? media.tag() : false
        };
        this.captions = function() {
            if (o.tagvideo) {
                media.captions()
            }
        };

        function RadioTags() {
            var xhr = XHR(v.tagsurl + '?url=' + urls[current_url]);
            xhr.onload = function() {
                if (this.readyState == 4 && this.status == 200) {
                    if (this.responseText) {
                        v.title = this.responseText;
                        o.actions.Title('title')
                    }
                }
            };
            xhr.send()
        }
    };
    var MediaVideo = function(url, container, pip) {
        var pjstg = createElement("video");
        var hls_config;
        if (v.taginframe == 1) {
            var tagframe = createElement("iframe");
            attr(tagframe, {
                "scrolling": "no",
                "allowfullscreen": "true",
                "allowtransparency": "true",
                "src": ""
            });
            css(tagframe, {
                "position": "absolute",
                "width": "100%",
                "height": "100%",
                "border": 0
            });
            container.appendChild(tagframe);
            var framei = window.setInterval(function() {
                if (tagframe.contentWindow.document.readyState === "complete") {
                    window.clearInterval(framei);
                    css(tagframe.contentDocument.body, {
                        "padding": 0,
                        "margin": 0
                    });
                    tagframe.contentDocument.body.appendChild(pjstg)
                }
            }, 100)
        } else {
            container.appendChild(pjstg)
        }
        var hls;
        var is_hls = false;
        var hls_started = false;
        var hls_created = false;
        var dash;
        var dash_created = false;
        var ws;
        var ws_created = false;
        var is_dash = false;
        var is_live = false;
        var is_sleep = 0;
        var is_ws = false;
        var error;
        var error_time;
        var unmuteplease = false;
        var onplaytag = false;
        var pip_quality = -1;
        var pause_before_vast = -1;
        var sleep_timeout;
        var _hlssubtracks;
        var _dashsubtracks;
        var _seekaftervast;
        var urlmse;
        var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';
        css(pjstg, {
            'width': '100%',
            'height': '100%',
            'object-fit': 'contain',
            'transition': "filter 0.2s linear",
            'min-height': 'auto',
            'max-height': 'none',
            'min-width': 'auto',
            'max-width': 'none'
        });
        if (v.covervideo == 1 || v.fill == 1) {
            if (v.fillvideo == 1 || v.fill == 1) {
                css(pjstg, {
                    'object-fit': 'fill'
                })
            } else {
                css(pjstg, {
                    'object-fit': 'cover'
                })
            }
        }
        if (v.playsinlineonmobile == 1 && o.system.mobile) {
            attr(pjstg, {
                'playsinline': '1'
            })
        }
        if (v.tagcors == 1) {
            attr(pjstg, {
                "crossorigin": "anonymous",
                "crossOrigin": "anonymous"
            })
        }
        attr(pjstg, {
            'src': url,
            'x-webkit-airplay': 'allow'
        });
        if (v.ynxnopip == 1) {
            attr(pjstg, {
                'pip': 'false'
            })
        }
        if (v.nativenodownload == 1) {
            attr(pjstg, {
                'controlsList': 'nodownload'
            })
        }
        if (!o.system.tv) {
            attr(pjstg, {
                'preload': (v.preload == 1 && v.autoplay == 0 ? 'metadata' : 'none')
            })
        }
        tagSrc();
        if (pip) {
            pjstg.autoplay = true;
            pjstg.muted = true
        }
        if (!exist(url)) {
            url = ''
        }
        if (url.indexOf(".mpd") > 0 && o.compilation.indexOf("DASH") != -1) {
            is_dash = true;
            var dash_init = false;
            var dash_play = false;
            if (MseIsSupported()) {
                v.preload == 1 || v.autoplay == 1 || v.preloaddash == 1 ? CreateDASH(false) : ''
            } else {
                is_dash = false;
                log("DASH not supported")
            }
        } else if (((options.hls == 1 && v.playerjscom != 1) || url.indexOf(".m3u8") > 0) && (o.compilation.indexOf("HLS") != -1 || exist(window.Hls))) {
            is_hls = true;
            try {
                if (exist(Hls)) {
                    if (!Hls.isSupported() || (o.system.safari && v.nativehlsinsafari == 1 && !o.system.ios) || (o.system.safari && o.system.ios && v.nativehlsios == 1) || (o.system.edge && v.nativehlsinedge == 1)) {
                        log('HLS support ', Hls.isSupported());
                        is_hls = false
                    } else {
                        if (v.preload == 1 || v.autoplay == 1 || v.preloadhls == 1 || pip) {
                            CreateHLS(false)
                        }
                    }
                } else {
                    is_hls = false
                }
            } catch (error) {
                is_hls = false
            }
        } else if (url.indexOf("ws://") == 0 && v.flussonic == 1) {
            is_ws = true;
            CreateWS()
        }
        if (o.system.tv && v.autoplay == 1 && !is_hls && !is_dash && !is_ws) {
            setTimeout(function() {
                o.actions.MediaReady()
            }, 100)
        }
        if (v.channels == 1) {
            exist(o.channels) ? o.channels.Close() : '';
            o.channels = new PlugMediaChannels()
        }

        function CreateDASH(x) {
            log("DASH");
            v.preloaddash = 1;
            var dash_config = {
                bufferLength: 60
            };
            if (o.files.length > 1) {
                v.dashquality = 0;
                v.dashquality_off = true
            } else {
                v.dashquality_off ? v.dashquality = 1 : ''
            } if (o.audiotracks.length > 1) {
                v.dashaudio = 0;
                v.dashaudio_off = true
            } else {
                v.dashaudio_off ? v.dashaudio = 1 : ''
            } if (exist(v.dashconfig)) {
                if (exist(v.dashconfig.bufferLength)) {
                    if (v.dashconfig.bufferLength > 600) {
                        v.dashconfig.bufferLength = 600
                    }
                }
                if (typeof v.dashconfig == "object") {
                    for (var key in v.dashconfig) {
                        dash_config[key] = v.dashconfig[key]
                    }
                }
            }
            dash = dashjs.MediaPlayer().create();
            js("dash", dash, 1);
            v.dashdebug == 1 && !pip ? dash.updateSettings({
                'debug': {
                    'logLevel': dashjs.Debug.LOG_LEVEL_DEBUG
                }
            }) : '';
            var ap = (v.autoplay == 1 || pip || x);
            dash.initialize(pjstg, url, ap);
            if (exist(v.drm)) {
                if (typeof(v.drm) == "object") {
                    dash.setProtectionData(v.drm)
                }
            }
            dash.updateSettings({
                'streaming': {
                    'stableBufferTime': (dash_config.buffer0 == 1 && !ap ? 0 : dash_config.bufferLength)
                }
            });
            dash.updateSettings({
                'streaming': {
                    'bufferTimeAtTopQualityLongForm': dash_config.bufferLength
                }
            });
            dash.updateSettings({
                'streaming': {
                    'lastBitrateCachingInfo.enabled': false
                }
            });
            dash.updateSettings({
                'streaming': {
                    'lastMediaSettingsCachingInfo.enabled': false
                }
            });
            if (v.dashcookies == 1) {
                dash.setXHRWithCredentialsForType(undefined, true)
            }
            if (v.dashlowquality == 1) {
                dash.updateSettings({
                    'streaming': {
                        'abr': {
                            'autoSwitchBitrate': {
                                'audio': false,
                                'video': false
                            }
                        }
                    }
                })
            }
            dash.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, function(data) {
                if (!dash_init) {
                    log("DASH attached");
                    var q = DashQualityLevels();
                    DashAudioTracks();
                    o.dash_subs = false;
                    if (v.dashsubtracks == 1) {
                        _dashsubtracks = new PluginDashSubtitles(dash, pip)
                    }
                    is_live = dash.isDynamic();
                    is_live ? log("Live") : '';
                    if (v.dashquality == 1) {
                        if (v.dashlowquality == 1 || q > 0) {
                            o.current_quality = q;
                            dash.updateSettings({
                                'streaming': {
                                    'abr': {
                                        'autoSwitchBitrate': {
                                            'audio': false,
                                            'video': false
                                        }
                                    }
                                }
                            })
                        } else {
                            o.current_quality = dash.getBitrateInfoListFor("video").length - 1
                        }
                        o.controls.QualityChangedNoHand(o.current_quality);
                        dash.setQualityFor("video", o.current_quality);
                        dash.setQualityFor("audio", o.current_quality)
                    }
                    o.actions.MediaReady();
                    dash_init = true
                }
            });
            dash.on(dashjs.MediaPlayer.events.PLAYBACK_PLAYING, function(data) {
                if (dash_config.buffer0 == 1 && !ap) {
                    dash.updateSettings({
                        'streaming': {
                            'stableBufferTime': dash_config.bufferLength
                        }
                    })
                }
                if (!dash_play) {
                    var track = parseInt(o.current_audiotrack);
                    if (track > 0 && v.dashaudio == 1) {
                        dash.setCurrentTrack(dash.getTracksFor("audio")[track])
                    }
                    dash_play = true
                }
            });
            dash.on(dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED, function(data) {
                if (is_live) {
                    o.actions.Duration(dash.time(), dash.duration())
                }
            });
            dash.on(dashjs.MediaPlayer.events.TEXT_TRACKS_ADDED, function(data) {
                dash.setTextTrack(-1)
            });
            dash.on(dashjs.MediaPlayer.events.QUALITY_CHANGE_REQUESTED, function(data) {
                if (data.mediaType == "video" && data.oldQuality != data.newQuality && v.dashquality == 1) {
                    o.current_quality = data.newQuality;
                    o.controls.QualityChangedNoHand(o.current_quality);
                    log("DASH Level " + o.current_quality)
                }
            });
            dash.on(dashjs.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED, function(data) {
                if (exist(data.request)) {
                    if (data.request.type == "MediaSegment") {
                        js("fragment", data.request.url)
                    }
                }
            });
            dash.on(dashjs.MediaPlayer.events.ERROR, function(data) {
                o.dasherror = data;
                if (data.error == "manifestError") {
                    error = "DASH " + data.error + ": " + data.event.message + ", " + data.event.event;
                    log(error);
                    o.media.onError()
                } else if (data.error == "capability" || data.error == "mediasource") {
                    error = "DASH " + data.error + " error: " + data.event;
                    log(error);
                    o.media.onError()
                } else if (data.error == "key_session" || data.error == "key_message") {
                    error = "DASH " + data.error + " error: " + data.event;
                    log(error);
                    o.media.onError()
                } else if (data.error == "download") {
                    error = "DASH fatal network error encountered";
                    log(error);
                    o.media.onError()
                }
            });
            dash_created = true
        }

        function CreateHLS(x) {
            
            log("HLS");
            if (o.files.length > 1) {
                v.hlsquality = 0;
                v.hlsquality_off = true
            } else {
                v.hlsquality_off ? v.hlsquality = 1 : ''
            } if (o.audiotracks.length > 1) {
                v.hlsaudio = 0;
                v.hlsaudio_off = true
            } else {
                v.hlsaudio_off ? v.hlsaudio = 1 : ''
            }
            o.hls_subs = false;
            var dontload = false;
            if (v.preroll && v.hlsvastwait == 1) {
                dontload = true;
                v.hlsvastwait = 0
            }
            hls_config = {
                debug: (v.hlsdebug == 1 && !pip),
                autoStartLoad: (v.preload == 1 || v.autoplay == 1 || pip || x) && !dontload,
                maxBufferLength: 60,
                maxMaxBufferLength: 60,
                manifestLoadingTimeOut: 40000,
                fragLoadingTimeOut: 40000,
                enableWorker: false
            };
            if (v.hlscookies == 1) {
                hls_config['xhrSetup'] = function(xhr, url) {
                    xhr.withCredentials = true
                }
            }
            if (exist(v.hlsconfig)) {
                if (exist(v.hlsconfig.maxBufferLength)) {
                    if (v.hlsconfig.maxBufferLength > 600) {
                        v.hlsconfig.maxBufferLength = 600
                    }
                    v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength
                }
                if (exist(v.hlsconfig.customBuffer)) {
                    v.hlsconfig.maxMaxBufferLength = v.hlsconfig.maxBufferLength = v.hlsconfig.customBuffer
                }
                if (typeof v.hlsconfig == "object") {
                    for (var key in v.hlsconfig) {
                        hls_config[key] = v.hlsconfig[key]
                    }
                }
            }
            hls = new Hls(hls_config);
            js("hls", hls, 1);
            hls.loadSource(url);
            hls.attachMedia(pjstg);
            hls.on(Hls.Events.MEDIA_ATTACHED, function() {
                log("HLS attached")
            });
            hls.on(Hls.Events.MANIFEST_LOADED, function(event, data) {
                !pip ? o.actions.MediaReady() : ''
            });
            hls.on(Hls.Events.MANIFEST_PARSED, function(event, data) {
                if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                    HlsQualityLevels();
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
                }
            });
            hls.on(Hls.Events.LEVEL_SWITCH, function(event, data) {
                HlsLevel()
            });
            hls.on(Hls.Events.LEVEL_SWITCHED, function(event, data) {
                HlsLevel()
            });
            hls.on(Hls.Events.LEVEL_LOADED, function(event, data) {
                if (!pip) {
                    if (data.details.live != is_live) {
                        is_live = data.details.live;
                        o.controls.refresh()
                    }
                    is_live = data.details.live;
                    if (is_live) {
                        log("Live");
                        o.dvr = url.indexOf("?DVR") > -1;
                        if (pjstg.duration > 0 && pjstg.currentTime > 0) {
                            if (pjstg.duration - pjstg.currentTime < 10) {
                                if (o.hls_stuck_time > 0) {
                                    if (o.hls_stuck_time == pjstg.currentTime && o.hls_stuck_duration == pjstg.duration) {
                                        o.stuck++;
                                        if (o.stuck > 2) {
                                            o.stuck = 0;
                                            o.hls_stuck_time = -1;
                                            hls.destroy();
                                            CreateHLS(true);
                                            onEnded()
                                        }
                                    } else {
                                        o.hls_stuck_time = -1
                                    }
                                } else {
                                    o.hls_stuck_time = pjstg.currentTime;
                                    o.hls_stuck_duration = pjstg.duration
                                }
                            }
                        }
                    }
                }
                if (v.hlsquality == 1) {
                    o.current_quality = hls.loadLevel;
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : ''
                }
                HlsUpdateAudio()
            });
            hls.on(Hls.Events.FRAG_CHANGED, function(event, data) {
                if (exist(data.frag) && !pip) {
                    js("fragment", data.frag.relurl)
                }
                hls_started = true;
                hlsTextTracks()
            });
            hls.on(Hls.Events.FRAG_PARSING_METADATA, function(event, data) {
                js("fragdata", data, 1)
            });
            hls.on(Hls.Events.AUDIO_TRACKS_UPDATED, function(event, data) {
                !pip && v.hlsaudio == 1 ? HlsAudioTracks() : ''
            });
            hls.on(Hls.Events.AUDIO_TRACK_SWITCHING, function(event, data) {
                if (!pip && v.hlsaudio == 1) {
                    HlsAudioTrack()
                }
            });
            if (v.hlssubtracks == 1) {
                _hlssubtracks = new PluginHlsSubtitles(hls, pip)
            } else {
                hls.subtitleDisplay = false
            }
            hls.on(Hls.Events.ERROR, function(event, data) {
                v.log == 1 ? console.log(data) : '';
                o.hlserror = data;
                if (data.fatal) {
                    switch (data.type) {
                        case Hls.ErrorTypes.NETWORK_ERROR:
                            if (v.livewakeup == 1) {
                                log("sleep");
                                var playing = o.play;
                                !pip && playing ? o.actions.Pause() : '';
                                o.actions.ShowPoster();
                                is_sleep = 1;
                                HlsSleep(playing)
                            } else {
                                error = data.details;
                                o.seekto > 0 || pip || v.live == 1 || is_ws ? '' : o.seekto = Time();
                                hls.destroy();
                                if (!pip) {
                                    o.media.onError()
                                }
                            }
                            break;
                        case Hls.ErrorTypes.MEDIA_ERROR:
                            HlsRecoverMediaError();
                            break;
                        default:
                            error = "HLS fatal error, destroy";
                            hls.destroy();
                            !pip ? o.media.onError() : '';
                            break
                    }
                } else {
                    log("HLS ", data.type, data.details, (data.response ? data.response.code : ''));
                    js("hls_error", (data.response ? data.response.code : ''));
                    if (is_sleep > 0) {
                        is_sleep = 2;
                        HlsSleep()
                    }
                }
            });
            hls_created = true
        }

        function HlsLevel() {
            if (!pip && v.hlsquality == 1 && HlsLevelsLength() > 1) {
                if (o.current_quality != hls.loadLevel) {
                    o.current_quality = hls.loadLevel;
                    o.controls ? o.controls.QualityChangedNoHand(o.current_quality) : '';
                    log("HLS Level " + o.current_quality)
                }
            }
        }

        function CreateWS() {
            if (exist(window.FlussonicMsePlayer)) {
                if (MseIsSupported()) {
                    if (!exist(o.ws)) {
                        o.ws = new PluginWS()
                    }
                    ws = new FlussonicMsePlayer(pjstg, url, {
                        debug: true
                    });
                    ws_created = true
                } else {
                    is_ws = false;
                    log("not supported")
                }
            }
        }

        function hlsTextTracks() {
            Captions()
        };
        this.captions = function() {
            Captions()
        };

        function Captions() {
            if (v.hlscaptions) {
                if (pjstg.textTracks.length > 0) {
                    if (v.captions == 1) {
                        pjstg.textTracks[pjstg.textTracks.length - 1].mode = "showing"
                    } else {
                        pjstg.textTracks[pjstg.textTracks.length - 1].mode = "hidden"
                    } if (!o.captions) {
                        o.captions = true;
                        o.controls.refresh()
                    }
                } else {
                    if (o.captions) {
                        o.captions = false;
                        o.controls.refresh()
                    }
                }
            }
        }

        function HlsSleep(x) {
            if (is_sleep > 0) {
                clearTimeout(sleep_timeout);
                sleep_timeout = setTimeout(HlsLiveWaiting, v.livewakeuptime * 1000)
            }
        }

        function HlsLiveWaiting() {
            if (is_sleep > 0) {
                log("watching")
            }
            if (is_sleep == 1) {
                hls.loadSource(url)
            }
            if (is_sleep == 2) {
                hls.destroy();
                CreateHLS(true);
                pjstg.play()
            }
        }
        var recover_decoding_error_date = 0;
        var recover_swap_audio_codec_date = 0;

        function HlsRecoverMediaError() {
            var now = performance.now();
            if (!recover_decoding_error_date || (now - recover_decoding_error_date) > 3000) {
                recover_decoding_error_date = performance.now();
                log("HLS fatal media error, try to recover");
                hls.recoverMediaError();
                hls.startLoad();
                if (o.play) {
                    TagPlay()
                }
            } else {
                if (!recover_swap_audio_codec_date || (now - recover_swap_audio_codec_date) > 3000) {
                    recover_swap_audio_codec_date = performance.now();
                    log("HLS fatal media error, try to recover");
                    hls.swapAudioCodec();
                    hls.recoverMediaError()
                } else {
                    log("HLS fatal media error, recovery failed")
                }
            }
        }
        pjstg.addEventListener('loadstart', onLoadStart);
        pjstg.addEventListener('error', onTagError);
        pjstg.addEventListener('ended', onEnded);
        pjstg.addEventListener('play', onPlay);
        pjstg.addEventListener('pause', onPause);
        pjstg.addEventListener('timeupdate', onTimeupdate);
        pjstg.addEventListener('seeking', onSeeking);
        pjstg.addEventListener('seeked', onSeeked);
        pjstg.addEventListener('loadedmetadata', onMeta);
        pjstg.addEventListener('volumechange', onVolume);
        pjstg.addEventListener('waiting', onWaiting);
        pjstg.addEventListener('durationchange', onDuration);
        pjstg.addEventListener('loadeddata', onLoadedData);
        pjstg.addEventListener('enterpictureinpicture', onPipEnter);
        pjstg.addEventListener('leavepictureinpicture', onPipLeave);

        function onLoadStart() {
            if (!is_hls && !is_dash) {
                !pip ? o.actions.MediaReady() : ''
            }
        }

        function onTagError() {
            if (!is_hls && !is_dash) {
                if (pjstg.error) {
                    log(pjstg.error, pjstg.error.code, pjstg.error.message);
                    console.log(pjstg);
                    var x = pjstg.error.code;
                    error = undefined;
                    if (x == 1) {
                        error = "aborted"
                    }
                    if (x == 2) {
                        error = "network"
                    }
                    if (x == 3) {
                        error = "decode"
                    }
                    if (x == 4) {
                        error = "not found"
                    }
                    log("Video Error: ", error)
                }
                if (error != undefined) {
                    onError()
                }
            }
        }

        function onError() {
            !pip ? o.media.onError() : ''
        }

        function onEnded() {
            !pip ? o.media.onEnded() : ''
        }

        function onPlay() {
            if (!o.start && v.preroll) {
                log('wrong play');
                pause();
                o.actions.Play();
                return
            }
            if (is_hls && is_sleep > 0) {} else {
                if (!pip) {
                    if (pause_before_vast == -1) {
                        var x = false;
                        if (is_hls) {
                            if (exist(o.vast) || exist(o.vastloader)) {
                                pause();
                                x = true
                            }
                        }
                        if (!x) {
                            onplaytag = true;
                            o.media.onPlay()
                        }
                    }
                }
            }
        }

        function onPause() {
            !pip && !o.nopause ? o.media.onPause() : ''
        }

        function onTimeupdate() {
            !pip ? o.media.onTimeupdate() : '';
            if (pause_before_vast > -1) {
                if (Time() > pause_before_vast) {
                    pause();
                    pause_before_vast = -1
                }
            }
        }

        function onSeeking() {
            !pip ? o.media.onSeeking() : ''
        }

        function onSeeked() {
            !pip ? o.media.onSeeked() : ''
        }

        function onMeta() {
            if (pip) {
                PipSize()
            } else {
                o.media.onMeta();
                PlayerSize();
                if (is_hls && is_sleep > 0) {
                    is_sleep = 0;
                    log("wake up");
                    hls.startLoad();
                    TagPlay();
                    o.controls.Play()
                }
                if (exist(v.ratio)) {
                    Resize()
                }
            }
        }
        this.ratio = function() {
            return (pjstg.videoWidth / pjstg.videoHeight)
        };

        function PipSize() {
            if (pjstg.videoHeight > 0) {
                css(container, {
                    "height": container.offsetWidth / (pjstg.videoWidth / pjstg.videoHeight) - parseInt(v.pip.border)
                })
            }
        }

        function PlayerSize() {
            if (v.changeheight == 1) {
                clearInterval(o.heightInterval);
                o.heightInterval = setInterval(WaitSize, 100);
                WaitSize()
            }
        }

        function WaitSize() {
            if (pjstg.videoHeight > 0) {
                o.actions.changeAspect(pjstg.videoWidth / pjstg.videoHeight);
                clearInterval(o.heightInterval)
            }
        }

        function onDuration() {
            !pip && !is_ws ? o.media.onDuration() : ''
        }

        function onVolume() {
            !pip ? o.media.onVolume() : ''
        }

        function onWaiting() {
            if (is_hls && is_sleep > 0) {} else {
                !pip ? o.media.onWaiting() : ''
            }
        }

        function onLoadedData() {
            o.actions.LoadedData()
        }

        function MseIsSupported() {
            var mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
            var sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
            var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported(mimeCodec);
            var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
            return isTypeSupported && sourceBufferValidAPI
        }

        function DashQualityLevels() {
            var q = 0;
            if (!pip && v.dashquality == 1) {
                o.files_quality = [];
                var x = dash.getBitrateInfoListFor("video");
                if (x.length > 1) {
                    var y = '';
                    for (var i = 0; i < x.length; i++) {
                        o.files_quality[i] = exist(x[i].height) ? MseRenameQualities(x[i], v.nameofdashquality) : i;
                        if (o.files_quality[i] == y || v.dashaddbitrate == 1) {
                            y = o.files_quality[i];
                            if (exist(x[i].bitrate)) {
                                o.files_quality[i] += " " + span05 + " &nbsp;" + parseInt(x[i].bitrate / 1000) + ' ' + Lang('kbps') + '</span>';
                                v.dashaddbitrate != 1 ? o.files_quality[i - 1] += " " + span05 + " &nbsp;" + parseInt(x[i - 1].bitrate / 1000) + ' ' + Lang('kbps') + '</span>' : '';
                                y = ''
                            }
                        } else {
                            y = o.files_quality[i]
                        } if (exist(v.default_quality) && q == 0) {
                            if (v.default_quality == o.files_quality[i]) {
                                q = i
                            }
                        }
                        if (exist(o.default_quality)) {
                            if (o.default_quality == o.files_quality[i]) {
                                q = i
                            }
                        }
                    }
                    o.files_quality[x.length] = Lang("auto")
                }
                o.reverse_quality = true
            }
            return q
        }

        function DashAudioTracks() {
            if (!pip && v.dashaudio == 1) {
                o.current_audiotrack = 0;
                var x = dash.getTracksFor("audio");
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        o.files_audiotrack[i] = i;
                        if (exist(x[i].lang)) {
                            o.files_audiotrack[i] = RenameTracks(x[i].lang)
                        } else {
                            if (exist(x[i].index)) {
                                o.files_audiotrack[i] = Lang("audiotrack") + " " + x[i].index
                            }
                        } if (exist(o.default_audio)) {
                            if (o.default_audio == o.files_audiotrack[i]) {
                                o.current_audiotrack = i
                            }
                        }
                    }
                }
                log("DASH AudioTrack ", o.current_audiotrack);
                o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
            }
        }
        var span05 = "<span style='opacity:0.5'>";

        function HlsQualityLevels() {
            if (!pip && v.hlsquality == 1) {
                var x = hls.levels;
                var q = 0;
                o.files_quality = [];
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        if (exist(x[i].height)) {
                            var y = MseRenameQualities(x[i], v.nameofhlsquality);
                            if (o.files_quality.indexOf(y) > -1 || v.hlsaddbitrate == 1) {
                                if (exist(x[i].bitrate)) {
                                    var yi = o.files_quality.indexOf(y);
                                    yi > -1 ? o.files_quality[yi] += " " + span05 + " &nbsp;" + parseInt(x[yi].bitrate / 1000) + ' ' + Lang('kbps') + '</span>' : '';
                                    o.files_quality[i] = y + " " + span05 + " &nbsp;" + parseInt(x[i].bitrate / 1000) + ' ' + Lang('kbps') + '</span>'
                                }
                            } else {
                                o.files_quality[i] = y
                            } if (exist(x[i].audioGroupIds)) {
                                o.files_quality_ag[i] = x[i].audioGroupIds[0]
                            }
                        } else if (exist(x[i].name)) {
                            o.files_quality[i] = x[i].name
                        } else {
                            o.files_quality[i] = i
                        } if (exist(v.default_quality) && q == 0) {
                            if (v.default_quality == o.files_quality[i]) {
                                q = i
                            }
                        }
                        if (exist(o.default_quality)) {
                            if (o.default_quality == o.files_quality[i]) {
                                q = i
                            }
                        }
                    }
                    if (v.hlsautoquality == 1) {
                        o.files_quality[x.length] = Lang("auto")
                    } else {
                        hls.autoLevelEnabled = 0;
                        hls.autoLevelCapping = 0
                    } if (v.hlslowquality == 1 || q > 0) {
                        hls.autoLevelCapping = 0;
                        if (v.hlschangequality == "next" || (!o.start && v.preload == 0)) {
                            hls.nextLevel = q
                        } else {
                            if (v.hlschangequality == "current") {
                                hls.currentLevel = q
                            }
                        }
                    } else {
                        v.hlsautoquality == 1 ? o.current_quality = hls.levels.length - 1 : o.current_quality = hls.firstLevel
                    }
                    HlsUpdateAudio()
                }
                o.reverse_quality = true;
                o.controls ? o.controls.refresh() : ''
            }
        }

        function HlsUpdateAudio() {
            if (o.files_quality_ag.length > 0 && v.hlsaudio == 1) {
                HlsAudioTracks();
                HlsAudioTrack()
            }
        }

        function HlsAudioTracks() {
            if (!pip && v.hlsaudio == 1) {
                var x = hls.audioTracks;
                o.files_audiotrack = [];
                var stop;
                if (x.length > 1) {
                    for (var i = 0; i < x.length; i++) {
                        stop = false;
                        if (exist(x[i].groupId) && o.files_quality_ag.length > 0) {
                            if (x[i].groupId != o.files_quality_ag[o.current_quality]) {
                                for (var j = 0; j < o.files_quality_ag.length; j++) {
                                    if (o.files_quality_ag[j] == x[i].groupId) {
                                        stop = true
                                    }
                                }
                            }
                        }
                        if (!stop) {
                            o.files_audiotrack[i] = exist(x[i].name) ? RenameTracks(x[i].name) : i;
                            if (exist(v.default_audio)) {
                                if (v.default_audio == o.files_audiotrack[i]) {
                                    o.current_audiotrack = i;
                                    hls.audioTrack = i
                                }
                            }
                        }
                    }
                }
            }
        }

        function HlsAudioTrack() {
            if (!pip) {
                var x = hls.audioTracks;
                var y = hls.audioTrack;
                if (x[y].groupId) {
                    if (o.files_quality_ag.length > 0) {
                        if (o.files_quality_ag[o.current_quality] != x[y].groupId) {
                            for (var i = 0; i < x.length; i++) {
                                if (x[i].name == x[y].name && x[i].groupId == o.files_quality_ag[o.current_quality]) {
                                    hls.audioTrack = i;
                                    y = i;
                                    break
                                }
                            }
                        }
                    }
                }
                o.current_audiotrack = y;
                log("HLS AudioTrack ", o.current_audiotrack);
                o.controls.AudioTrackChangedNoHand(o.current_audiotrack)
            }
        };

        function RenameTracks(x) {
            var r = x.toLowerCase();
            if (r == "eng" || r == "en") {
                x = "English"
            } else if (r == "rus" || r == "ru") {
                x = "Русский"
            }
            return x
        };

        function MseRenameQualities(x, y) {
            var r = x.height + 'p';
            if (x.height < 200) {
                r = '160p'
            } else if (x.height >= 200 && x.height <= 300) {
                r = '240p'
            } else if (x.height > 300 && x.height <= 400) {
                r = '360p'
            } else if (x.height > 400 && x.height <= 500) {
                r = '480p'
            } else if (x.height > 500 && x.height <= 600) {
                r = '540p'
            } else if (x.height > 600 && x.height <= 900) {
                r = '720p'
            } else if (x.height > 900 && x.height <= 1200) {
                r = '1080p'
            } else if (x.height > 1200 && x.height <= 1800) {
                r = '1440p'
            } else if (x.height > 1800) {
                r = '2160p'
            }
            if (x.width == 426 && x.height <= 240) {
                r = '240p'
            } else if (x.width == 640 && x.height <= 360) {
                r = '360p'
            } else if (x.width == 854 && x.height <= 480) {
                r = '480p'
            } else if (x.width == 1280 && x.height <= 720) {
                r = '720p'
            } else if (x.width == 1920 && x.height <= 1080) {
                r = '1080p'
            } else if (x.width == 2560 && x.height <= 1440) {
                r = '1440p'
            } else if (x.width == 3840 && x.height <= 2160) {
                r = '2160p'
            }
            if (v.settings.customqualities == 1 && exist(v.settings['name' + r])) {
                r = v.settings['name' + r]
            } else {
                if (y == 1) {
                    r = Lang(r)
                }
                if (y == 2 && exist(x.bitrate)) {
                    r = parseInt(x.bitrate / 1000) + ' ' + Lang('kbps')
                }
            }
            return r
        };

        function Time() {
            if (is_dash) {
                return dash_created ? dash.time() : 0
            } else {
                return pjstg.currentTime
            }
        };
        this.Play = function() {
            var p = true;
            if (is_hls && !hls_started) {
                if (!hls_created) {
                    CreateHLS(true)
                }!onplaytag ? o.media.onPlay() : '';
                hls.startLoad()
            }
            if (is_dash && !dash_created) {
                CreateDASH(true);
                p = false
            }
            if (is_ws) {
                if (!ws_created) {
                    CreateWS()
                }
                ws.play();
                p = false
            }
            if (pjstg.style.top == "-2000px") {
                this.AfterVast()
            }
            p ? TagPlay() : ''
        };
        var playtry;

        function TagPlay() {
            if (url != "none") {
                var playPromise = pjstg.play();
                if (playPromise !== undefined) {
                    playPromise.then(function() {}).
                    catch (function(error) {
                        log("playError", error.message);
                        if (error.message.indexOf('source') == -1 && error.message.indexOf('interrupted by') == -1) {
                            if (!o.system.mobiletv || error.message.indexOf('user denied permission') == -1) {
                                if (v.autoplaymute == 1 && !o.muted) {
                                    o.actions.Mute();
                                    pjstg.play()
                                } else {
                                    o.controls.Pause();
                                    o.actions.ShowPoster()
                                }
                            } else {
                                if (o.system.tv && (is_hls || is_dash)) {} else {
                                    o.controls.Pause();
                                    o.actions.ShowPoster();
                                    js("autoplay_denied")
                                }
                            }
                        }
                    })
                }
            }
        }
        this.BeforeVast = function() {
            if (o.vastloader || o.vast) {
                if (o.ispipkit) {
                    PipWebkit()
                }
                if (!o.airplayed && o.system.mobile && o.system.webkit) {
                    if (!pjstg.muted) {
                        pjstg.muted = true;
                        unmuteplease = true
                    }
                    css(pjstg, {
                        "position": "absolute",
                        "left": -2000,
                        "top": -2000
                    });
                    pause_before_vast = Time();
                    if (!is_ws) {
                        pjstg.play()
                    }
                    if (pause_before_vast == 0 && o.seekto > 0) {
                        _seekaftervast = o.seekto
                    }
                }
            }
        };
        this.AfterVast = function() {
            if (!o.airplayed && (o.system.mobile || o.system.webkit)) {
                css(pjstg, {
                    "position": "static",
                    "left": 0,
                    "top": 0
                });
                if (exist(v.ratio)) {
                    Resize()
                }
                if (unmuteplease) {
                    !o.muted ? pjstg.muted = false : '';
                    unmuteplease = false
                }
                if (_seekaftervast > 0) {
                    o.seekto = _seekaftervast;
                    _seekaftervast = 0
                }
                pause_before_vast = -1
            }
        };
        this.Pause = function() {
            pause()
        };

        function pause() {
            if (is_ws) {
                ws.pause()
            } else {
                pjstg.pause()
            }
        };
        this.Toggle = function() {
            !pjstg.paused ? Pause() : TagPlay()
        };
        this.Seek = function(x) {
            if (is_dash && dash_created) {
                dash.seek(x)
            } else {
                pjstg.currentTime = x
            }
        };
        this.Mute = function() {
            pjstg.muted = true
        };
        this.Unmute = function() {
            pjstg.muted = false
        };
        this.Volume = function(x) {
            pjstg.volume = x
        };
        this.Gain = function() {
            if (o.gainedsource != pjstg) {
                var source;
                var ctx;
                if (o.audiosrc[pjstg]) {
                    source = o.audiosrc[pjstg];
                    ctx = o.audioctx[pjstg]
                } else {
                    window.AudioContext = window.AudioContext || window.webkitAudioContext;
                    ctx = new AudioContext();
                    source = ctx.createMediaElementSource(pjstg);
                    o.audiosrc[pjstg] = source;
                    o.audioctx[pjstg] = ctx
                }
                var gain = ctx.createGain();
                gain.gain.value = v.volumegain;
                source.connect(gain);
                gain.connect(ctx.destination);
                o.gained = true;
                o.gainedsource = pjstg
            }
        };
        this.isPlaying = function() {
            return !pjstg.paused
        };
        this.isLive = function() {
            return v.live == 1 || is_ws ? true : is_live
        };
        this.tag = function() {
            return pjstg
        };
        this.nativeControls = function() {
            attr(pjstg, {
                'controls': '1'
            });
            return true
        };
        this.preload = function() {
            attr(pjstg, {
                'preload': 'metadata'
            });
            if (is_hls && !hls_created) {
                CreateHLS(false)
            }
            if (is_dash && !dash_created) {
                CreateDASH(false)
            }
        };
        this.status = function() {
            var state = "playing";
            if (pjstg.paused) {
                state = "paused"
            }
            if (pjstg.ended) {
                state = "ended"
            }
            return state
        };
        this.ChangePip = function(x, y) {
            pip = x;
            y.appendChild(pjstg);
            container = y;
            if (x) {
                pjstg.muted = true;
                PipSize();
                if (o.files_quality.length > 0) {
                    if (is_hls) {
                        pip_quality = o.current_quality;
                        hls.autoLevelCapping = 0;
                        hls.currentLevel = 0
                    }
                }
            } else {
                if (!o.muted) {
                    pjstg.muted = false
                }
                pjstg.volume = v.volume;
                PlayerSize();
                if (o.files_quality.length > 0) {
                    if (is_hls) {
                        hls.autoLevelCapping = -1;
                        if (pip_quality > -1) {
                            pip_quality < hls.levels.length ? hls.nextLevel = pip_quality : ''
                        }
                    }
                }
            }
        };
        this.time = function() {
            return Time()
        };
        this.duration = function() {
            var x = pjstg.duration;
            if (is_dash && dash_created) {
                x = dash.duration()
            }
            if (exist(v.end)) {
                x = v.end
            }
            return x != Infinity && !isNaN(x) ? x : 0
        };
        this.loaded = function() {
            var x = 0;
            if (pjstg.buffered) {
                if (pjstg.buffered.length > 0) {
                    var y = Time();
                    for (var i = 0; i < pjstg.buffered.length; i++) {
                        if ((y >= pjstg.buffered.start(i) || y >= pjstg.buffered.start(i) - 100) && y <= pjstg.buffered.end(i)) {
                            x = pjstg.buffered.end(i)
                        }
                    }
                    x == 0 ? x = pjstg.buffered.end(pjstg.buffered.length - 1) : ''
                }
            }
            if (exist(v.end)) {
                x > v.end ? x = v.end : ''
            }
            return x
        };
        this.auto = function() {
            var x = false;
            if (is_hls) {
                if (hls_created) {
                    x = hls.autoLevelEnabled
                }
            } else if (is_dash) {
                if (dash_created) {
                    var y = dash.getSettings();
                    x = y.streaming.abr.autoSwitchBitrate.video
                }
            }
            return x
        };
        this.size = function() {
            return {
                "width": pjstg.videoWidth,
                "height": pjstg.videoHeight
            }
        };
        this.src = function(x) {
            url = x;
            onplaytag = false;
            o.media_error != 2 ? o.media_error = false : '';
            if (is_hls) {
                is_hls && hls ? hls.destroy() : '';
                CreateHLS(true);
                CheckPip()
            } else {
                attr(pjstg, {
                    'src': x,
                    'autoplay': 0
                });
                tagSrc();
                pause()
            }
        };

        function tagSrc() {
            if (o.system.safari) {
                var y = pjstg.textTracks;
                if (y) {
                    for (var i = 0; i < y.length; i++) {
                        y[i].mode = "disabled"
                    }
                }
                y = pjstg.audioTracks;
                if (y) {
                    for (i = 0; i < y.length; i++) {
                        y[i].enabled = (i == 0 ? 1 : 0)
                    }
                }
                if (window.WebKitPlaybackTargetAvailabilityEvent) {
                    pjstg.addEventListener('webkitplaybacktargetavailabilitychanged', function(event) {
                        o.airplay = event.availability == "available";
                        !pip ? o.actions.AirplayChanged() : ''
                    })
                }
            }
            CheckPip()
        }
        this.airplay = function() {
            pjstg.webkitShowPlaybackTargetPicker()
        };
        this.pipwebkit = function() {
            PipWebkit()
        };

        function CheckPip() {
            if (o.system.webkit) {
                if (exist(pjstg.webkitSupportsPresentationMode) && !o.system.iphone) {
                    o.pipwebkit = true
                }
                if (document.pictureInPictureEnabled && !pjstg.disablePictureInPicture) {
                    o.pipwebkit = true
                }
            }
        }

        function PipWebkit() {
            if (o.system.safari) {
                if (pjstg.webkitPresentationMode === "picture-in-picture") {
                    pjstg.webkitSetPresentationMode("inline");
                    o.ispipkit = false
                } else {
                    pjstg.webkitSetPresentationMode("picture-in-picture");
                    o.ispipkit = true
                }
            } else {
                if (!document.pictureInPictureElement) {
                    eval('pjstg.requestPictureInPicture().then(p => {o.ispipkit = true;}).catch(error => {o.ispipkit = false;});')
                } else {
                    eval('document.exitPictureInPicture().then(ok =>{o.ispipkit = false;}).catch(error => {});')
                }
            }
        };

        function onPipEnter() {
            o.ispipkit = true
        };

        function onPipLeave() {
            o.ispipkit = false
        };
        this.setDashQuality = function(x) {
            if (dash_created) {
                var x = parseInt(x);
                if (x == dash.getBitrateInfoListFor("video").length) {
                    o.current_quality = dash.getQualityFor('video')
                } else {
                    dash.updateSettings({
                        'streaming': {
                            'abr': {
                                'autoSwitchBitrate': {
                                    'audio': false,
                                    'video': false
                                }
                            }
                        }
                    });
                    dash.setQualityFor('video', x);
                    dash.setQualityFor('audio', x)
                }
            }
        };
        this.setWsQuality = function(x) {
            if (o.ws) {
                o.ws.setTracks(ws, x, -1)
            }
        };
        this.setWsAudioTrack = function(x) {
            if (o.ws) {
                o.ws.setTracks(ws, -1, x)
            }
        };
        this.setDashAudioTrack = function(x) {
            if (dash_created) {
                if (pjstg.buffered.length > 0) {
                    dash.setCurrentTrack(dash.getTracksFor('audio')[parseInt(x)])
                }
            }
        };
        this.setHlsQuality = function(x) {
            if (hls_created) {
                var y = parseInt(x);
                if (x == hls.levels.length) {
                    y = -1;
                    hls.autoLevelCapping = -1
                }
                if (v.hlschangequality == "current") {
                    setTimeout(onWaiting, 500);
                    hls.currentLevel = y
                }
                if (v.hlschangequality == "next") {
                    log("HLS next level " + y);
                    hls.nextLevel = y
                }
                if (y == -1) {
                    o.current_quality = hls.loadLevel
                }
                HlsUpdateAudio()
            }
        };
        this.getHLS = function() {
            return hls
        };
        this.getDASH = function() {
            return dash
        };
        this.HlsLevelsLength = function() {
            return HlsLevelsLength()
        };

        function HlsLevelsLength() {
            var x = 0;
            if (hls_created) {
                if (hls.levels) {
                    x = hls.levels.length
                }
            }
            return x
        }
        this.DashLevelsLength = function() {
            return DashLevelsLength()
        };
        this.resize = function() {
            Resize()
        };

        function Resize() {
            var x = pjstg.videoWidth / pjstg.videoHeight;
            if (x) {
                x = (x).toFixed(2);
                var z = eval(v.ratio).toFixed(2);
                if (z != x) {
                    if (o.screen_w > o.screen_h) {
                        css(pjstg, {
                            'object-fit': 'fill',
                            'height': '100%',
                            'width': o.screen_h * z
                        })
                    } else {
                        css(pjstg, {
                            'object-fit': 'fill',
                            'width': '100%',
                            "height": (o.screen_w / z),
                            "position": "absolute",
                            "top": "50%",
                            "left": "50%",
                            "transform": "translate(-50%, -50%)"
                        })
                    }
                }
            }
        }

        function DashLevelsLength() {
            var x = 0;
            if (dash_created) {
                x = dash.getBitrateInfoListFor("video").length
            }
            return x
        }
        this.setHlsAudioTrack = function(x) {
            if (hls_created) {
                hls.audioTrack = parseInt(x)
            }
        };
        this.hlsDashSub = function(x, y) {
            if (y == "hls" && hls_created && _hlssubtracks) {
                _hlssubtracks.HlsSubTrack(x)
            }
            if (y == "dash" && dash_created && _dashsubtracks) {
                _dashsubtracks.DashSubTrack(x)
            }
        };
        this.setSpeed = function(x) {
            if (x) {
                pjstg.playbackRate = x
            }
        };
        this.removeTracks = function() {
            var x = pjstg.childNodes;
            var y = [];
            for (var i = 0; i < x.length; i++) {
                if (x[i].tagName.toLowerCase() == 'track') {
                    x[i].removeEventListener("load", iOSTrackLoaded);
                    y.push(x[i])
                }
            }
            for (var i = 0; i < y.length; i++) {
                pjstg.removeChild(y[i])
            }
        };
        this.addTrack = function(x, y, z) {
            if (x != '') {
                if (x.indexOf(' or ') > 0) {
                    var xx = x.split(' or ');
                    x = xx[0]
                }
                var track = document.createElement('track');
                track.setAttribute('src', x);
                track.setAttribute('label', y);
                track.setAttribute('kind', 'subtitles');
                track.setAttribute('mode', 'showing');
                if (z) {
                    track.setAttribute('default', '')
                }
                pjstg.appendChild(track);
                track.addEventListener("load", iOSTrackLoaded)
            }
        };

        function iOSTrackLoaded(e) {
            if (e.target.label && o.sbt) {
                for (var i = 0; i < o.files_subtitle.length; i++) {
                    if (o.files_subtitle[i] == e.target.label) {
                        o.sbt.SetSubtitle(i)
                    }
                }
            }
        };
        this.errorMessage = function() {
            return error
        };
        this.Remove = function() {
            is_hls && hls ? hls.destroy() : '';
            is_dash && dash ? dash.reset() : '';
            is_ws && ws ? ws.stop() : '';
            pjstg.removeEventListener('error', onTagError);
            pjstg.removeEventListener('ended', onEnded);
            pjstg.removeEventListener('play', onPlay);
            pjstg.removeEventListener('pause', onPause);
            pjstg.removeEventListener('timeupdate', onTimeupdate);
            pjstg.removeEventListener('seeking', onSeeking);
            pjstg.removeEventListener('seeked', onSeeked);
            pjstg.removeEventListener('loadedmetadata', onMeta);
            pjstg.removeEventListener('volumechange', onVolume);
            pjstg.removeEventListener('waiting', onWaiting);
            pjstg.removeEventListener('durationchange', onDuration);
            pjstg.removeEventListener('enterpictureinpicture', onPipEnter);
            pjstg.removeEventListener('leavepictureinpicture', onPipLeave);
            pjstg.src = '';
            if (container.tagName == "IFRAME") {
                container.contentDocument.body.removeChild(pjstg)
            } else {
                container.removeChild(pjstg)
            }
            pjstg = null
        }
    };
    var Controls = function() {
        var b = [];
        var butNames = [];
        var butPosition = [];
        var waiting = false;
        var wait_to;
        var toolbarHidden = false;
        var settings;
        var playlist;
        if (o.settings2) {
            o.settings2.hide();
            o.settings2 = null
        }
        var _lastactbut;
        o.files_speed = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
        if (v.settings.customspeeds == 1 && exist(v.settings.speeds)) {
            v.settings.speeds = v.settings.speeds.replace(/\n/ig, '');
            o.files_speed = v.settings.speeds.split(",")
        }
        o.speed1 = o.files_speed.indexOf('1') > -1 ? o.files_speed.indexOf('1') : o.files_speed.indexOf(1);
        o.current_speed == 3 ? o.current_speed = o.speed1 : '';
        !exist(v.settings.scale) ? v.settings.scale = 5 : '';
        o.files_scale = ['+ ' + v.settings.scale + '%', '&ndash; ' + v.settings.scale + '%', '100%'];
        var resizeonwidth = false;
        var stretch_width = 0;
        var stretch_width_last = 0;
        var stretch_with_volume = false;
        var firstly = true;
        var bg = new ControlsBg();
        var settings;
        var order = [];
        var _rights = false;
        var _move_rights = false;
        var _max_order = 0;
        var _rb = [];
        if (v.control_line.position == "controls-right") {
            v.control_line.position = "controls"
        }
        for (var y in v) {
            if (v.hasOwnProperty(y)) {
                if (y.indexOf("control_") == 0 && v[y]) {
                    !exist(v[y].order0) ? v[y].order0 = v[y].order : v[y].order = v[y].order0;
                    order[v[y].order] = y;
                    if (v.control_line.position != "controls") {
                        if (v[y].position == "controls-right") {
                            _rb.push([y, v[y].order]);
                            _rights = true
                        } else {
                            if (v[y].position == "controls" || v[y].position == undefined) {
                                _rights ? _move_rights = true : ''
                            }
                        }
                    }
                    _max_order < v[y].order ? _max_order = v[y].order : ''
                }
            }
        }
        if (_move_rights) {
            _rb.sort(function(a, b) {
                return a[1] - b[1]
            });
            for (var i = 0; i < _rb.length; i++) {
                order[v[_rb[i][0]].order] = null;
                v[_rb[i][0]].order = _max_order + 1;
                _max_order++;
                order[v[_rb[i][0]].order] = _rb[i][0]
            }
        }
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
            o.toolbar = createElement("div");
            o.frame.appendChild(o.toolbar);
            css(o.toolbar, {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': '100%',
                'height': '100%',
                'transition': 'top 0.3s ease-out',
                'pointer-events': 'none'
            })
        }
        var bg2 = createElement("div");
        if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
            o.toolbar.appendChild(bg2)
        } else {
            o.frame.appendChild(bg2)
        }
        css(bg2, {
            'position': 'absolute',
            'left': 0,
            'bottom': 0,
            'width': '100%',
            'height': v.toolbar.h
        });
        bg2.onclick = function() {
            !o.system.mobile ? o.actions.ControlsBgClick() : ''
        };
        if (o.hidecontrols) {
            hide2(bg.c());
            hide2(bg2)
        }
        for (var i = 1; i < order.length; i++) {
            if (order[i]) {
                var y = order[i];
                if (y) {
                    if (o.system.mobile) {
                        if (v[y].action == "volume" && v.showvolmobile == 1 && o.system.android) {
                            v[y].hideoutmute = 0
                        } else {
                            if (v[y].action == "volume" || (v[y].action == "fullscreen" && v.nativemobile)) {
                                v[y].on = 0
                            }
                        }
                    }
                    if (o.hidecontrols) {
                        v[y].on = 0
                    }
                    if (v[y].on == 1) {
                        var action = v[y].action;
                        if (action == "line" || action == "volume" || action == "customline") {
                            b[y] = new ControlLine(y, action);
                            b[y].Resize(b[y].s("w"))
                        } else {
                            b[y] = new Control(y)
                        }
                        butNames.push(y);
                        if (b[y].g("action") == "title") {
                            if (b[y].s("text") == '') {
                                if (b[y].s("var") != '') {
                                    if (!exist(v[b[y].s("var")])) {
                                        b[y].set("display", false)
                                    }
                                } else {
                                    b[y].set("display", false)
                                }
                            }
                        }
                        if (b[y].g("action") == "custom") {
                            var lu = b[y].s("linkurl");
                            if (lu) {
                                if (lu.indexOf("api:") == 0 && lu.indexOf(",0/1") > 0) {
                                    var z = lu.split(",");
                                    api(z[0].substr(4)) == 0 ? b[y].CustomSwitch(0) : ''
                                }
                            }
                        }
                        b[y].set("scale", b[y].s("scale"))
                    }
                }
            }
        }
        if (exist(v.settings)) {
            if (typeof(Settings) == 'function') {
                settings = new Settings("settings");
                v.settings.always == 1 ? settings.show() : settings.hide()
            } else {
                o.noset = true
            }
        }
        if (exist(v.playlist)) {
            if (typeof(Settings) == 'function') {
                playlist = new Settings("playlist");
                if (exist(o.playlist)) {
                    playlist.updatePlaylist(o.playlist);
                    if (v.playlist.openplaylistbefore == 0 || !exist(v.playlist.openplaylistbefore)) {
                        v.playlist.always == 0 ? playlist.hide() : ''
                    } else {
                        playlist.show()
                    }
                } else {
                    playlist.hide(1)
                }
                PlaylistControls()
            }
        }
        if (exist(v.control_share)) {
            if (v.control_share.on == 1) {
                o.share = new Share()
            }
        }
        Resize(true);
        ShowOrHide();
        firstly = false;

        function ControlX(but) {
            var x = 0;
            var to_right = false;
            if (but) {
                if (but.g("action") == 'line') {
                    x = butPosition.left + but.s("marginleft");
                    if (butPosition.rightbs != null) {} else {
                        butPosition.rightbs = []
                    }
                } else {
                    if (butPosition.rightbs != null) {
                        var but_space = but.g("width") + but.s("marginright") + but.s("marginleft");
                        if (HideProof(but)) {
                            but_space = 0
                        }
                        if (but.s("hidden") == 1 && !but.g("show")) {
                            but_space = 0
                        }
                        if (but.s("vertical") > 0) {
                            but_space = 0
                        }
                        x = bg.g("w") - v.toolbar.leftandrightpadding * 1 - but_space + but.g("width") / 2 + but.s("marginleft");
                        var i = 0;
                        butPosition.right -= but_space;
                        for (i = 0; i < butPosition.rightbs.length; i++) {
                            var but2 = b[butPosition.rightbs[i]];
                            if (but2.s("vertical") > 0) {
                                css(but2.c(), {
                                    "left": (but2.g("x0") - but_space)
                                })
                            } else {
                                css(but2.c(), {
                                    "left": (but2.g("x") - but_space)
                                })
                            }
                            but2.set("x0", but2.g("x"))
                        }
                        butPosition.rightbs.push(but.g("key"));
                        but.set('rightside', 1)
                    } else {
                        if (but.s("hidden") == 1 && !but.g("show")) {
                            if (but.g("action") == "volume") {
                                if (but.s("hide") == 1 && but.s("hideoutmute") == 1 && stretch_with_volume) {
                                    stretch_width += but.g("width") + but.s("marginleft") + but.s("marginright");
                                    stretch_with_volume = false
                                }
                            }
                        } else {
                            if (but.s("vertical") > 0) {
                                x = butPosition.left + but.s("marginleft") + but.s("marginright")
                            } else {
                                var stop = false;
                                if (but.g("action") == "volume") {
                                    if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                                        if (!o.hidden_volume_over_process && !o.hidden_volume_over) {
                                            stop = true;
                                            stretch_with_volume = false
                                        } else {
                                            if (!stretch_with_volume) {
                                                stretch_width -= but.g("width") + but.s("marginleft") + but.s("marginright");
                                                stretch_with_volume = true
                                            }
                                        }
                                    }
                                }
                                if (HideProof(but)) {
                                    stop = true
                                }
                                if (!stop) {
                                    butPosition.left += but.g("width") / 2 + but.s("marginleft");
                                    x = butPosition.left;
                                    butPosition.left += but.g("width") / 2 + but.s("marginright")
                                } else {
                                    x = butPosition.left
                                }
                            }
                        }
                    }
                }
            }
            return x
        }

        function ControlCoordinate(but) {
            var width = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
            var height = o.screen_h;
            var but_x = 0;
            if (but != bg) {
                but_x = width / 2 + but.s("marginleft") - but.s("marginright")
            }
            var but_y = height / 2;
            var but_w = but.g("width");
            var but_h = but.g("height");
            var position = but.s("position");
            if (position.indexOf("center") > -1) {
                but_x = o.screen_w / 2 + but.s("marginleft") - but.s("marginright")
            }
            if (position.indexOf("top") == 0) {
                but_y = but_h / 2 + (but.s("marginproctop") * o.screen_h / 100)
            }
            if (position.indexOf("bottom") == 0) {
                but_y = o.screen_h - (but == bg ? but_h : but_h / 2) - (but.s("marginprocbottom") * o.screen_h / 100)
            }
            if (position.indexOf("right") > -1) {
                but_x = o.screen_w - but_w / 2 + but.s("marginleft") - but.s("marginright") - (but.s("marginprocright") * o.screen_w / 100)
            }
            if (position.indexOf("left") > -1) {
                but_x = but_w / 2 + but.s("marginleft") - but.s("marginright") + (but.s("marginprocleft") * o.screen_w / 100)
            }
            if (position == "timeline") {
                but_x = -o.timeline_w / 2 + (but.s("marginprocleft") * o.timeline_w / 100) + but.s("marginleft") - but.s("marginright");
                but_y = -o.timeline_h / 2 - (but.s("marginprocbottom") * o.timeline_h / 100) + (but.s("marginproctop") * o.timeline_h / 100)
            }
            if (position.indexOf("controls") > -1) {
                var cx = ControlX(but);
                but_x = (bg ? (bg.c() ? int(bg.c().offsetLeft) : 0) : 0) + cx;
                if (position == "controls-right") {
                    but_x += stretch_width
                }
                if (v.toolbar.position == "top") {
                    but_y = v.toolbar.h / 2
                } else {
                    but_y = height - v.toolbar.h / 2
                }
            }
            return {
                x: but_x,
                y: but_y + but.s("margintop") - but.s("marginbottom")
            }
        }

        function Resize(all) {
            var w = o.fullscreen && v.toolbar.stretchonfullscreen == 0 ? o.normal_w : o.screen_w;
            var h = o.screen_h;
            css(bg.c(), {
                'top': (v.toolbar.position == "top" ? 0 : o.screen_h - v.toolbar.h) - v.toolbar_margintop
            });
            bg.set("y0", (o.screen_h - v.toolbar.h - v.toolbar_margintop));
            if (v.toolbar.stretchonfullscreen == 0 && bg) {
                css(bg.c(), {
                    'width': w,
                    'left': 0,
                    'margin-left': 0
                });
                bg.set("w", w);
                if (o.fullscreen) {
                    css(bg.c(), {
                        'left': '50%',
                        'margin-left': -w / 2
                    })
                }
            }
            butPosition = {
                "left": v.toolbar.leftandrightpadding * 1,
                "right": (bg.g("w") - v.toolbar.leftandrightpadding * 1)
            };
            var bg_hide = false;
            if (!bg.g("show")) {
                bg.set("display", true);
                bg_hide = true
            }
            var key;
            for (var i = 0; i < butNames.length; i++) {
                key = butNames[i];
                if (b[key]) {
                    var cc = ControlCoordinate(b[key]);
                    if (cc) {
                        b[key].set("x0", cc.x);
                        b[key].set("y0", cc.y);
                        if (b[key].s("hidden") == 1 && !b[key].g("show") && !all) {
                            HidePositionControl(b[key])
                        } else {
                            css(b[key].c(), {
                                "position": "absolute",
                                "left": b[key].g("x0"),
                                "top": b[key].g("y0")
                            })
                        }
                    }
                }
            }
            if (bg_hide) {
                bg.set("display", false)
            }
            stretch_width = 0;
            for (key in b) {
                if (b.hasOwnProperty(key)) {
                    if (b[key].s("position") == "controls-right" && b[key].g("action") != "line" && stretch_width > -1) {
                        stretch_width = butPosition.right - butPosition.left
                    }
                    if (b[key].g("action") == "line" && bg) {
                        var line_width;
                        if (b[key].s("customwidth") == 1) {
                            line_width = b[key].s("w")
                        } else {
                            if (b[key].s("position").indexOf("controls") > -1) {
                                line_width = butPosition.right - butPosition.left - b[key].s("marginleft") - b[key].s("marginright");
                                css(b[key].c(), {
                                    "left": (int(bg.c().offsetLeft) + butPosition.left + b[key].s("marginleft") + line_width / 2)
                                });
                                stretch_width = -1
                            } else {
                                line_width = bg.g("w") - b[key].s("marginleft") - b[key].s("marginright");
                                css(b[key].c(), {
                                    "left": (int(bg.c().offsetLeft) + b[key].s("marginleft") + line_width / 2)
                                })
                            }
                        }
                        b[key].set("x0", b[key].g("x"));
                        b[key].Resize(line_width)
                    }
                }
            }
            if (settings) {
                ResizeSettings(settings)
            }
            if (playlist) {
                ResizeSettings(playlist)
            }
            resizeonwidth || o.fullscreen || stretch_width_last != stretch_width ? ShowOrHide() : ''
        }

        function HidePositionControl(b) {
            var left = 0;
            var top = 0;
            if (b.s("position").indexOf("right") > -1 && b.s("position").indexOf("controls") == -1) {
                left = o.screen_w + b.g("width") + 10
            }
            if (b.s("position").indexOf("left") > -1) {
                left = -b.g("width") - 10
            }
            if (b.s("position").indexOf("top") > -1) {
                top = -b.g("height") * 2
            }
            if (b.s("position").indexOf("bottom") > -1 || b.s("position").indexOf("controls") > -1) {
                top = o.screen_h + b.g("height") + b.g("width") + 10
            }
            if (left > 0) {
                css(b.c(), {
                    "left": left
                })
            }
            if (top > 0) {
                css(b.c(), {
                    "top": top
                })
            }
        }

        function ResizeSettings(x) {
            var top = -2000;
            x.resizePlaylist();
            var y = o.screen_h - v.toolbar.h * (x.s("position").indexOf("top") > -1 ? 1 : 2);
            var ymax = y - (o.fullscreen && !o.system.mobile ? (100 + x.s("hmaxk") * 1) : x.s("hmaxk"));
            ymax < 100 ? ymax = 100 : '';
            css(x.c(), {
                'max-height': ymax
            });
            x.co() ? css(x.co(), {
                'max-height': ymax
            }) : '';
            if (x.g("show")) {
                top = o.screen_h / 2 - x.g("height") / 2 + x.s("margintop") - x.s("marginbottom");
                if (x.s("position").indexOf("top") > -1) {
                    top = x.s("margintop") - x.s("marginbottom")
                }
                if (x.s("position").indexOf("bottom") > -1) {
                    top = o.screen_h - v.toolbar.h - x.g("height") + x.s("margintop") - x.s("marginbottom")
                }
                top < 0 ? top = 0 : ''
            }
            if (x.s("position").indexOf("right") > -1) {
                css(x.c(), {
                    "position": "absolute",
                    "right": x.s("marginright") - x.s("scrollwidth"),
                    "top": top
                })
            } else if (x.s("position").indexOf("left") > -1) {
                css(x.c(), {
                    "position": "absolute",
                    "left": x.s("marginleft"),
                    "top": top
                })
            } else {
                if (x.g("key") == "playlist" && x.s("floatleft") == 1) {
                    css(x.c(), {
                        "position": "absolute",
                        "left": o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") / 2 - x.s("marginright") / 2,
                        "top": top
                    })
                } else {
                    css(x.c(), {
                        "position": "absolute",
                        "left": o.screen_w / 2 - x.g("width") / 2 + x.s("marginleft") - x.s("marginright"),
                        "top": top
                    })
                }
            }
            x.Arrows()
        };
        this.ControlClick = function(key) {
            var but = b[key];
            var action = but.g("action");
            if (action) {
                var d = new Date();
                o.clicktime = d.getTime();
                if (action && action != "") {
                    Action(but)
                }
            }
        };
        this.toggleControl = function(z, x, y) {
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    if (b[key].s(z) == x) {
                        b[key].set(y ? "show2" : "hide2")
                    }
                }
            }
        };
        this.butByS = function(x, s) {
            var y;
            for (var key in b) {
                if (b.hasOwnProperty(key)) {
                    if (b[key].s(s) == x) {
                        y = b[key]
                    }
                }
            }
            return y
        };

        function Action(but, type) {
            o.acted = true;
            _lastactbut = but;
            var a = but.g("action");
            if (a == "play") {
                o.actions.Play();
                if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
                    PluginHotIcon('play', 1)
                }
            } else {
                if (a == "pause") {
                    o.actions.Pause();
                    if (v.hotkey.on == 1 && v.hotkey.icons == 1 && v.hotkey.playiconbut == 1) {
                        PluginHotIcon('play', 0)
                    }
                }
                if (a == "stop") {
                    o.actions.StopMedia()
                }
            } if (a == "back") {
                o.actions.Seek(0, false)
            }
            if (a == "fullscreen") {
                !o.casting ? o.actions.Fullscreen() : ''
            } else {
                if (a == "normalscreen") {
                    o.actions.Normalscreen()
                }
            } if (a == "line") {
                var ld = o.media.duration();
                var lt = but.g("click") * ld;
                if (v.delete > 0) {
                    ld -= v.delete;
                    lt = but.g("click") * ld + v.delete
                }
                if (v.seekwindow > 0) {
                    if (v.seekwindow / ld <= 1 - but.g("click")) {
                        return
                    }
                }
                o.actions.Seek(lt, true);
                if (o.
                    continue) {
                    o.
                    continue.write(lt, ld);
                    o.seekto > 0 ? o.seekto = undefined : ''
                }
            }
            if (a == "volume") {
                var x = but.g("click");
                x < 0.02 ? x = 0 : '';
                x > 1 ? x = 1 : '';
                if (o.storage && v.volumestore == 1) {
                    localStorage.setItem("pljsvolume", x);
                    if (but.g("click") > 0 || o.system.iphone || v.mutestore == 0) {
                        localStorage.removeItem("pljsmute")
                    } else {
                        localStorage.setItem("pljsmute", 1)
                    }
                }
                o.actions.Volume(x)
            }
            if (a == "customline") {
                var x = but.g("click");
                var cul = but.s("customline");
                x < 0.02 ? x = 0 : '';
                x > 1 ? x = 1 : '';
                if (cul == "speed") {
                    x = parseFloat(x * o.files_speed.slice(-1)[0]).toFixed(1);
                    o.actions.SetSpeed(x, 1)
                }
            }
            if (a == "mute") {
                if (o.storage && !o.system.iphone && v.mutestore == 1) {
                    localStorage.setItem("pljsmute", 1)
                }
                o.actions.Mute();
                if (v.hotkey.icons == 1 && v.hotkey.muteiconbut == 1) {
                    PluginHotIcon('mute', 0)
                }
            } else {
                if (a == "unmute") {
                    if (o.storage) {
                        localStorage.removeItem("pljsmute")
                    }
                    o.actions.Unmute();
                    if (v.hotkey.icons == 1 && v.hotkey.muteiconbut == 1) {
                        PluginHotIcon('mute', 1)
                    }
                }
            } if (a.indexOf("time") == 0) {
                but.isOn() ? but.Off() : but.On()
            }
            if (a == "rotate") {
                o.media.Rotate()
            }
            if (a == "scale+") {
                o.media.Scale(0.1)
            }
            if (a == "scale-") {
                o.media.Scale(-0.1)
            }
            if (a == "scale") {
                o.media.Scale(0)
            }
            if (a == "live") {
                api("restart");
                but.set("iconopacity", 1);
                but.set("saturate", 1)
            }
            if (a == "share") {
                js("share");
                ShowShare()
            }
            if (a == "settings") {
                if (settings) {
                    if (!settings.g("show")) {
                        settings.show()
                    } else {
                        settings.hide()
                    }
                }
            }
            if (a == "playlist") {
                if (o.overopentimeout == a) {
                    return
                }
                if (exist(v.playlist)) {
                    if (playlist.g("show")) {
                        playlist.hide()
                    } else {
                        setTimeout(function() {
                            playlist.show()
                        }, 100)
                    }
                }
            }
            if (a == "next") {
                o.controls.PlaylistNext()
            }
            if (a == "prev") {
                o.controls.PlaylistPrev()
            }
            if (a == "custom") {
                if (but.s("link") == 1 && but.s("linkurl") != "") {
                    var x = trim(but.s("linkurl"));
                    if (o.overopentimeout == a + x) {
                        return
                    }
                    if (x.indexOf('{time}') > -1) {
                        x = x.replace('{time}', (exist(o.
                                continue) ? o.
                            continue.flag().t : o.media.time()))
                    }
                    if (x.indexOf('{file}') > -1) {
                        x = x.replace('{file}', o.media.currentFile())
                    }
                    if (x.indexOf('{title}') > -1) {
                        x = x.replace('{title}', v.title.replace(/,/ig, " "))
                    }
                    if (x == "airplay") {
                        o.media.Airplay()
                    }
                    if (x == "seektome") {
                        o.actions.Seek(but.s("marginprocleft") * o.media.duration() / 100);
                        !o.play ? o.actions.Play() : ''
                    }
                    but.s("linkpause") == 1 ? o.actions.Pause() : '';
                    var y = x.split(",");
                    if (x.indexOf("api:") == 0) {
                        var z = x.substr(4).split(";");
                        for (var i = 0; i < z.length; i++) {
                            y = z[i].split(",");
                            if (y.length > 1) {
                                if (y[0] == 'seek') {
                                    if (v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1) {
                                        PluginHotIcon('seek', y[1] > 0 ? 1 : 0)
                                    }
                                }
                                api(y[0], y[1], but);
                                y[1] == '0/1' ? reRightMenu() : ''
                            } else {
                                if (y[0] == "screenshot" && v.ssfly == 1) {
                                    var ss = api(y[0]);
                                    if (ss) {
                                        if (ss.indexOf("data") > -1) {
                                            var img = document.createElement('img');
                                            img.setAttribute('src', ss);
                                            css(img, {
                                                position: "fixed",
                                                right: (exist(v.ssflyp) ? v.ssflyp : 20),
                                                bottom: (exist(v.ssflyp) ? v.ssflyp : 20),
                                                width: 0,
                                                transition: "width 0.5s cubic-bezier(.75,-0.5,0,1.75)"
                                            });
                                            img.style.zIndex = 1001;
                                            document.body.appendChild(img);
                                            setTimeout(function() {
                                                css(img, {
                                                    width: (exist(v.ssflyw) ? v.ssflyw : 200)
                                                })
                                            }, 1);
                                            img.onclick = function() {
                                                this.parentNode.removeChild(this)
                                            }
                                        }
                                    } else {
                                        log(y[0] + " error")
                                    }
                                } else {
                                    api(y[0])
                                }
                            }
                        }
                    } else {
                        if (x.indexOf("js:") == 0) {
                            if (x.indexOf("(") > 0 && x.indexOf(")") > 0) {
                                eval(x.substr(3))
                            } else {
                                eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')')
                            }
                        }
                        if (x.indexOf("http") == 0 || x.indexOf("/") == 0 || x.indexOf("?") == 0 || x.indexOf("url:") == 0) {
                            x.indexOf("url:") == 0 ? x = x.substr(4) : '';
                            window.open(x, but.s("linktarget"))
                        }
                        if (x.indexOf("download") == 0) {
                            o.actions.Download()
                        }
                        if (x == "api:pipwebkit") {
                            o.media.PipWebkit()
                        }
                    } if (x.indexOf("settings#") > -1) {
                        if (settings) {
                            var si = x.substr(9).split(",");
                            if (settings.g("show") && settings.g("open") == si[0]) {
                                settings.hide()
                            } else {
                                for (var i = 0; i < si.length; i++) {
                                    i == 0 ? settings.show() : '';
                                    settings.open(si[i])
                                }
                            }
                        }
                    }
                    if (x.indexOf("settings:") > -1 && v.settings.combined == 1) {
                        if (!o.settings2) {
                            o.settings2 = new PluginSettings2()
                        }
                        if (type == "over") {
                            o.settings2.show(x)
                        } else {
                            o.settings2.toggle(x)
                        }
                    }
                }
            }
        };
        this.title = function(t) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "title") {
                        if (b[x].s("var") == t || t == "title") {
                            if (v[t] != '' || b[x].s("icon") != '') {
                                b[x].set("display", true)
                            } else {
                                b[x].set("display", false)
                            }
                            b[x].UpdateText(v[t])
                        }
                    }
                }
            }
            TitlePl()
        };
        this.titlepl = function() {
            TitlePl()
        };
        this.resizetext = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom") {
                        if (b[x].s("type") == "text") {
                            b[x].ResizeText()
                        }
                    }
                }
            }
        };

        function TitlePl() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom") {
                        if (b[x].s("type") == "text") {
                            b[x].RenewFromTitle(true)
                        }
                    }
                }
            }
        }

        function ShowShare() {
            if (exist(o.share)) {
                o.share.Show()
            }
        }
        this.showShare = function() {
            ShowShare()
        };
        this.updateTitle = function() {
            if (v.title != '') {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "title") {
                            var y = false;
                            if (!b[x].g("show")) {
                                y = true;
                                b[x].set("display", true)
                            }
                            b[x].UpdateText(v.title);
                            if (y) {
                                b[x].set("display", false)
                            }
                        }
                    }
                }
            }
        };
        this.customText = function(y, z) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "custom" && b[x].s("type") == "text") {
                        if (b[x].s("dom") == y) {
                            if (!b[x].g("show")) {
                                b[x].set("display", true)
                            }
                            b[x].UpdateText(z)
                        }
                    }
                }
            }
        };
        this.resize = function() {
            Resize()
        };
        this.resize2 = function() {
            Resize(true)
        };
        this.resizeSettings = function() {
            ResizeSettings(settings)
        };
        this.resizePlaylist = function() {
            ResizeSettings(playlist)
        };
        this.Play = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "play") {
                        b[x].On()
                    }
                }
            }
            if (this.PlaylistVisible() && v.playlist.autohide == 1) {
                this.Playlist()
            }
            o.play = true;
            ShowOrHide()
        };
        this.Pause = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "pause" || b[x].g("action") == "stop") {
                        b[x].Off()
                    }
                }
            }
            if (playlist) {
                if (v.playlist.openplaylistpause == 1 && !playlist.empty()) {
                    playlist.show()
                }
            }
            o.play = false;
            ShowOrHide();
            if (v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
                HideForce(true)
            }
        };
        this.Mute = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "mute") {
                        b[x].On()
                    }
                    this.Volume(0)
                }
            }
            ShowOrHide()
        };
        this.Unmute = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "unmute") {
                        b[x].Off()
                    }
                }
            }
            if (v.volume < 0.1) {
                v.volume = 0.5;
                o.actions.Volume(v.volume)
            } else {
                this.Volume(v.volume)
            }
            ShowOrHide()
        };
        this.Volume = function(volume, y) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "volume") {
                        b[x].UpdatePlay(volume, 1, (y == "no" ? y : true))
                    }
                    if (b[x].g("action") == "mute") {
                        b[x].UpdateVolume(volume)
                    }
                }
            }
            ShowOrHide()
        };
        this.Fullscreen = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "fullscreen") {
                        b[x].On();
                        b[x].set("scale", b[x].s("scale"))
                    }
                }
            }
            ShowOrHide();
            resizeonwidth ? setTimeout(ShowOrHide, 500) : '';
            HideInterval()
        };
        this.Normalscreen = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "normalscreen") {
                        b[x].Off()
                    }
                }
            }
            Resize();
            clearInterval(o.toolbarInterval);
            ShowOrHide()
        };
        this.onEnded = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "play") {
                        b[x].ReplayIcon()
                    }
                }
            }
        };
        this.Review = function() {
            ShowOrHide()
        };

        function ShowOrHide() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") != "buffer") {
                        ShowOrHideProcessor(b[x])
                    }
                }
            }
            ShowOrHideProcessor(bg);
            if (stretch_width_last != stretch_width) {
                stretch_width_last = stretch_width;
                Resize()
            }
            if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
                ToolbarDown(!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting)
            }
        };

        function ShowForce() {
            var show = toolbarHidden && v.toolbar.hidewithoutmoving == 1;
            if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
                show = false
            }
            if (show) {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") != "buffer") {
                            ShowOrHideProcessor(b[x], false)
                        }
                    }
                }
                css(o.frame, {
                    "cursor": "default"
                });
                o.fcdef = true;
                ShowOrHideProcessor(bg, false);
                if (bg.g("show")) {
                    ToolbarShow()
                }
                ToolbarDown(false)
            }
        }

        function HideForce() {
            var hide = o.play && v.toolbar.hidewithoutmoving == 1 && !o.mouseDown && !o.controlover;
            if (!o.play && v.toolbar.hide == 1 && v.toolbar.hideonpause == 1) {
                hide = true
            }
            if (settings) {
                if (settings.g("show") && o.setaction) {
                    hide = false
                }
            }
            if (hide) {
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") != "buffer") {
                            ShowOrHideProcessor(b[x], true)
                        }
                    }
                }
                ShowOrHideProcessor(bg, true);
                if (!bg.g("show")) {
                    toolbarHidden = true;
                    o.media.ToolbarHide();
                    if (o.play) {
                        css(o.frame, {
                            "cursor": "none"
                        });
                        o.fcdef = false
                    }
                }
                ToolbarDown(true)
            }
        }

        function HideInterval() {
            if (v.toolbar.hidewithoutmoving == 1) {
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen && !o.fullscreen_process) {} else {
                    clearInterval(o.toolbarInterval);
                    o.toolbarInterval = setInterval(HideForce, ((v.toolbar.hideleavetimeout > 0 ? v.toolbar.hideleavetimeout : v.toolbar.hidetimeout) * 1000))
                }
            }
        }

        function ShowOrHideProcessor(but, forcehide) {
            var hide = false;
            var show = false;
            var toolbar_hide = false;
            if (v.toolbar.hide == 1) {
                if (!o.starttimeout && !o.mouseHere && !o.fullscreen && o.play && v.toolbar.hidejustfull != 1 && !o.casting) {
                    hide = true;
                    show = false;
                    toolbar_hide = true
                } else {
                    hide = false;
                    show = true
                } if (exist(forcehide) && !o.casting) {
                    hide = forcehide;
                    show = !hide
                }
                if (v.toolbar.hide == 1 && v.toolbar.hidedown == 1 && (but.s("position").indexOf("controls") == 0 || but.s("action") == "line")) {
                    hide = false;
                    show = true
                }
                if (v.toolbar.hideonpause == 1 && !o.play) {
                    hide = true;
                    show = false;
                    toolbar_hide = false
                }
            } else {
                if (but.s("hide") != 1) {
                    show = true
                }
            } if (show && !o.fcdef) {
                css(o.frame, {
                    "cursor": "default"
                });
                o.fcdef = true
            }
            var a = but.g("action");
            if (a == "custom" && but.s("position").indexOf("controls") == -1) {
                hide = false;
                show = true
            }
            if (o.casting) {
                if (a == "line") {
                    if (o.media.duration() == -1) {
                        hide = true;
                        show = false
                    }
                }
            }
            var re_y = false;
            var hp = HideProof(but);
            if (but.s("hide") == 1) {
                if (but.s("hideonleaveandplay") == 1) {
                    if (toolbar_hide || forcehide || (o.play && !o.mouseHere)) {
                        !toolbar_hide && !forcehide ? '' : hp = true
                    }
                }
                if (but.s("hidelap") == 1) {
                    if (o.play && !o.mouseHere) {
                        hp = true
                    }
                }
                if (but.s("hideonwidth") == 1 || but.s("hideoverwidth") == 1 || but.s("hideonfullscreen") == 1) {
                    resizeonwidth = true
                }
            }
            if (hp) {
                hide = true;
                show = false
            } else {
                !hide ? show = true : ''
            } if (but.s("action") == "volume") {
                if (but.s("hide") == 1 && but.s("hideoutmute") == 1) {
                    hide = true;
                    show = false;
                    if (!toolbar_hide && (o.hidden_volume_over || o.hidden_volume_over_process) && !forcehide && but.s("hiddenwidth") != 1) {
                        hide = false;
                        show = true
                    } else {
                        re_y = true
                    }
                }
            }
            if (o.nativecontrols || (!o.start && v.toolbar.hide == 1 && v.toolbar.hideuntilstarted == 1) || (!o.metadata && v.toolbar.hide == 1 && v.toolbar.hideuntilmeta == 1)) {
                if (but.s("position").indexOf("controls") > -1 || but.s("position").indexOf("bottom") > -1) {
                    hide = true;
                    show = false
                }
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
                    hide = false;
                    show = true
                }
            }
            if (settings) {
                if (settings.g("show") && v.settings.always != 1) {
                    toolbar_hide = false;
                    forcehide = false
                }
            }
            if (a == "share") {
                if (exist(o.share)) {
                    if (o.share.empty()) {
                        hide = true;
                        show = false;
                        but.set("animation", "none")
                    }
                }
            }
            if (a == "playlist" || a == "next" || a == "prev" || but.s("hidewithoutplaylist") == 1) {
                if (playlist) {
                    if (playlist.empty() && but.s("hidewithoutplaylist") != 0) {
                        hide = true;
                        show = false;
                        but.set("animation", "none")
                    }
                } else {
                    hide = true;
                    show = false
                }
            }
            if (o.hideall == 1) {
                hide = true;
                show = false
            }
            if (re_y) {
                var cc = ControlCoordinate(but);
                if (cc) {
                    cc.y > 0 ? but.set("y0", cc.y) : '';
                    css(but.c(), {
                        "position": "absolute",
                        "top": but.g("y0")
                    })
                }
            }
            if (hide) {
                HideControl(but, (firstly ? true : false))
            }
            if (show) {
                ShowControl(but)
            }
            if (but == bg) {
                if (!hide && show) {
                    ToolbarShow();
                    show2(bg2);
                    toolbarHidden = false
                }
                if (hide && !show) {
                    o.media.ToolbarHide();
                    SettingsClose();
                    hide2(bg2);
                    toolbarHidden = true
                }
                if (playlist) {
                    if (v.playlist.always == 1 && !playlist.empty()) {
                        if (show || o.nativecontrols) {
                            if (v.playlist.alwaysnotfullscreen == 1 && o.fullscreen) {} else {
                                if (!playlist.g("show")) {
                                    if (v.playlist.alwaysjustpause == 1) {
                                        !o.play ? playlist.show() : ''
                                    } else {
                                        playlist.show()
                                    }
                                }
                            }
                        } else {
                            if (hide && playlist.g("show")) {
                                playlist.hide()
                            }
                        }
                    }
                }
            }
        };

        function HideProof(but) {
            var x = false;
            var a = but.g("action");
            if (but.s("hide") == 1) {
                if (but.s("hideonplay") == 1) {
                    o.play ? x = true : ''
                }
                if (but.s("hideonpause") == 1) {
                    !o.play ? x = true : ''
                }
                if (but.s("hideondesktop") == 1) {
                    o.system.desktop ? x = true : ''
                }
                if (but.s("hideonmobile") == 1) {
                    o.system.mobile ? x = true : ''
                }
                if (but.s("hideoverwidth") == 1) {
                    if (o.screen_w > but.s("hideoverwidthlimit")) {
                        but.set("hiddenwidth", 1);
                        x = true
                    } else {
                        but.set("hiddenwidth", 0)
                    }
                }
                if (but.s("hideonwidth") == 1) {
                    if (o.screen_w <= but.s("hideonwidthlimit")) {
                        but.set("hiddenwidth", 1);
                        x = true
                    } else {
                        but.set("hiddenwidth", 0)
                    }
                }
                if (but.s("hideafterstart") == 1) {
                    o.start ? x = true : ''
                }
                if (but.s("hide0timestore") == 1) {
                    if (o.start || !o.
                        continue || o.media.isLive()) {
                        x = true
                    }
                    if (o.
                        continue) {
                        if (o.
                            continue.flag().t == 0) {
                            x = true
                        }
                    }
                }
                if (but.s("hideuntilstarted") == 1) {
                    !o.start ? x = true : ''
                }
                if (but.s("hideonvar") == 1) {
                    if (exist(but.s("hidevar"))) {
                        options[but.s("hidevar")] ? x = true : ''
                    }
                }
                if (but.s("hideuntilstartedios") == 1 && o.system.ios) {
                    !o.start || o.newfile ? x = true : ''
                }
                if (but.s("hideuntilended") == 1) {
                    !o.media.ended() ? x = true : ''
                }
                if (but.s("hideonvod") == 1) {
                    !o.media.isLive() ? x = true : ''
                }
                if (but.s("hideonleave") == 1) {
                    !o.mouseHere ? x = true : ''
                }
                if (but.s("hidenormscreen") == 1) {
                    !o.fullscreen ? x = true : ''
                }
                if (but.s("hideonfullscreen") == 1) {
                    o.fullscreen ? x = true : ''
                }
                if (but.s("hideonunmute") == 1) {
                    !o.muted ? x = true : ''
                }
                if (but.s("hideonlive") == 1) {
                    o.media.isLive() && o.media.currentFile().indexOf("?DVR") == -1 ? x = true : ''
                }
                if (but.s("hidewithposter") == 1) {
                    isVisible(o.poster) ? x = true : ''
                }
                if (but.s("hideuntilmeta") == 1) {
                    !o.metadata ? x = true : ''
                }
                if (but.s("hideonmeta") == 1) {
                    o.metadata ? x = true : ''
                }
                if (but.s("hidemini") == 1) {
                    o.mini ? x = true : ''
                }
                if (but.s("hidenomini") == 1) {
                    !o.mini ? x = true : ''
                }
                if (but.s("hideafterclick") == 1) {
                    if (but.g("clicked")) {
                        x = true
                    }
                }
                if (but.s("hidenoab") == 1) {
                    !o.ab ? x = true : ''
                }
                if (but.s("hideab") == 1) {
                    o.ab ? x = true : ''
                }
                if (but.s("hideonyoutube") == 1) {
                    if (v.preload == 1 && v.screenclick == 1) {
                        if (o.file_type == "youtube" && !exist(v.poster) && v.youtubeposter == 0) {
                            if (!o.start || o.media.status() == "ended") {
                                if (v.poster == '') {} else {
                                    x = true
                                }
                            }
                        }
                    }
                }
            }
            if (a == "custom") {
                if (but.s("linkurl")) {
                    if (but.s("linkurl") == "api:airplay" || but.s("linkurl") == "airplay") {
                        if (!o.airplay && !o.airplayed) {
                            x = true
                        }
                    }
                    if (but.s("linkurl") == "api:pipwebkit") {
                        if (!o.pipwebkit || (!o.start && v.preload == 0)) {
                            x = true
                        }
                    }
                    if (but.s("linkurl") == "api:unfixing") {
                        if (!o.mini) {
                            x = true
                        }
                    }
                    if (but.s("linkurl").indexOf("captions") > -1) {
                        if (!o.captions) {
                            x = true
                        }
                    }
                }
            }
            if (a == "playlist" || a == "next" || a == "prev") {
                if (playlist) {
                    if (playlist.empty()) {
                        x = true
                    }
                } else {
                    x = true
                }
            }
            if (a == "settings") {
                if (settings) {
                    if (settings.empty()) {
                        x = true;
                        but.set("animation", "none")
                    }
                } else {
                    x = true
                }
            }
            if (but.g("type") == "text") {
                if (but.g("length") == 0) {
                    x = true
                }
            }
            if (but.g("settings#")) {
                if (!but.g("set#visible")) {
                    x = true
                }
            }
            if (but.s("chromecast") == 1) {
                var cb = document.getElementById("pjs_cast_button_" + v.id);
                if ((o.media.duration() == 0 && o.media.time() == 0) || !o.tagvideo || !isVisible(cb) || !o.cast_available) {
                    x = true
                }
            }
            if (a == "duration") {
                if (o.media.isLive()) {
                    x = true
                }
            }
            if (but.g("key") == "control_start" && o.system.mobile) {
                if (o.nativecontrols && o.system.android) {
                    x = true
                }
            }
            return x
        }

        function HideControl(but, quick) {
            if (but.g("show")) {
                if (o.fullscreen_process || but.s("animation") == "none" || quick) {
                    but.set("display", false)
                } else {
                    HideAnimate(but)
                }
                but.set("show", false)
            }
        };

        function ShowControl(but) {
            if (!but.g("show")) {
                if (but.s("animation") == "none" || o.fullscreen_process) {
                    but.set("display", true);
                    if (o.fullscreen_process) {
                        but.set("opacity", 1)
                    }
                    if (but.g("action") == "volume") {
                        if (o.hidden_volume) {
                            HidePositionControl(but)
                        }
                    }
                } else {
                    ShowAnimate(but)
                } if (but.s("action") == "volume") {
                    o.controls.Volume(o.muted ? 0 : v.volume)
                }
                if (but.s("action") == "line") {
                    o.actions.Loading()
                }
                but.set("show", true)
            }
        };

        function HideAnimate(but) {
            killMotion(but.g("key"));
            var m_type = "alpha|";
            var m_to = "0|";
            var hide = 1;
            var a = but.s("animation");
            var p = but.s("position");
            if (a == "scale") {
                m_type += "scale|";
                m_to += "0|"
            }
            if (a == "position") {
                if (p.indexOf("right") > -1 && p.indexOf("controls") == -1) {
                    m_type += "x|";
                    m_to += int(o.screen_w + but.g("width")) + "|"
                }
                if (p.indexOf("left") > -1) {
                    m_type += "x|";
                    m_to += int(-but.g("width")) + "|"
                }
                if (p.indexOf("top") > -1) {
                    m_type += "y|";
                    m_to += "0|" + (-but.g("height")) + "|"
                }
                if (p.indexOf("bottom") > -1 || p.indexOf("controls") > -1 || p == "timeline") {
                    m_type += "y|";
                    if (but.g("action") == "line" || but.g("action") == "volume") {
                        m_to += int(o.screen_h + but.s("h") + (but.s("h") < 20 ? 20 - but.s("h") : 0)) + "|"
                    } else {
                        m_to += int(o.screen_h + but.g("height")) + "|"
                    }
                }
                if (p == "center") {
                    m_type += "scale|";
                    m_to += "0|"
                }
            }
            var m = new Motion({
                "mc": but,
                "me": but.g("key"),
                "type": m_type.substr(0, m_type.length - 1),
                "to": m_to.substr(0, m_to.length - 1),
                "hide": hide
            })
        };

        function ShowAnimate(but) {
            killMotion(but.g("key"));
            var m_type = "";
            var m_to = "";
            var a = but.s("animation");
            var p = but.s("position");
            if (but.g("opacity") != 1) {
                m_type = "alpha|";
                m_to = (but.g("key") == 'bg' ? v.toolbar.a : "1") + "|"
            }
            if (a == "scale") {
                if (but.g("scaleX") != but.s("scale")) {
                    but.set("scale", 0);
                    m_type += "scale|";
                    m_to += but.s("scale") + "|"
                }
            }
            if (a == "position") {
                if (p == "center") {
                    if (but.g("scaleX") != but.s("scale")) {
                        m_type += "scale|";
                        m_to += but.s("scale") + "|"
                    }
                } else {
                    if (p.indexOf("controls") > -1) {
                        if (but.g("y") != but.g("y0")) {
                            m_type += "y|";
                            m_to += but.g("y0") + "|"
                        }
                    } else {
                        m_type += "x|y|";
                        m_to += but.g("x0") + "|" + but.g("y0") + "|"
                    }
                }
            }
            if (m_type != "" && m_to != "") {
                var m = new Motion({
                    mc: but,
                    me: but.g("key"),
                    type: m_type.substr(0, m_type.length - 1),
                    to: m_to.substr(0, m_to.length - 1),
                    show: 1
                })
            } else {
                but.set("display", true)
            }
        };
        this.Mouse = function(key, type, quick) {
            var resize = false;
            var stop = false;
            var but = b[key];
            var action = but.g("action");
            var linkurl = but.s("linkurl");
            if (type == "over") {
                if (o.hidden_volume) {
                    if (action == "volume" || action == "mute" || action == "unmute") {
                        o.hidden_volume_over = true;
                        o.hidden_volume_over_process = true;
                        resize = true;
                        ShowOrHide();
                        if (v.control_line.hideonvolume == 1) {
                            for (var x in b) {
                                if (b.hasOwnProperty(x)) {
                                    if (b[x].g("action") == "line") {
                                        hide2(b[x].c())
                                    }
                                }
                            }
                        }
                    }
                }
                if (settings && ((v.settings.showovercontrol == 1 && (action == "settings" || linkurl.indexOf("setting") == 0)) || linkurl.indexOf("settings:") == 0)) {
                    clearTimeout(o.settingsovertimer);
                    if (!settings.g("show") || _lastactbut != but) {
                        Action(but, type);
                        o.overopentimeout = action + linkurl;
                        setTimeout(function() {
                            o.overopentimeout = null
                        }, 500)
                    }
                }
                if (playlist && v.playlist.showovercontrol == 1 && action == "playlist") {
                    clearTimeout(o.playlistovertimer);
                    if (!playlist.g("show") || _lastactbut != but) {
                        Action(but, type);
                        o.overopentimeout = action;
                        setTimeout(function() {
                            o.overopentimeout = null
                        }, 500)
                    }
                }
            }
            if (type == "out") {
                if (o.hidden_volume) {
                    if (action == "volume" || action == "mute" || action == "unmute") {
                        o.hidden_volume_over = false;
                        o.hidden_volume_over_process = true;
                        setTimeout(function() {
                            if (!o.hidden_volume_over) {
                                o.hidden_volume_over_process = false;
                                for (var x in b) {
                                    if (b.hasOwnProperty(x)) {
                                        if (b[x].g("action") == "volume") {
                                            HideControl(b[x]);
                                            Resize()
                                        }
                                        if (b[x].g("action") == "line") {
                                            if (v.control_line.hideonvolume == 1) {
                                                show2(b[x].c())
                                            }
                                        }
                                    }
                                }
                            }
                        }, 500)
                    }
                }
                if ((v.settings.showovercontrol == 1 && (action == "settings" || linkurl.indexOf("setting") == 0)) || linkurl.indexOf("settings:") == 0) {
                    clearTimeout(o.settingsovertimer);
                    o.settingsovertimer = setTimeout(function() {
                        if (!o.mouseDown) {
                            SettingsClose(1)
                        }
                    }, (v.settings.showoverto > 0 ? v.settings.showoverto * 1000 : 1000))
                }
                if (playlist && v.playlist.showovercontrol == 1 && action == "playlist") {
                    clearTimeout(o.playlistovertimer);
                    o.playlistovertimer = setTimeout(function() {
                        if (!o.mouseDown) {
                            playlist.g("show") ? playlist.hide(1) : ''
                        }
                    }, (v.playlist.showoverto > 0 ? v.playlist.showoverto * 1000 : 1000))
                }
            }
            if (resize) {
                setTimeout(Resize, 10)
            }
        };
        this.StageLeave = function() {
            if (o.volumewheel && !o.fullscreen) {
                o.actions.volumewheel(false);
                o.volumewheel = false
            }
            if (o.poster) {
                if (v.poster_aover > -1 && isVisible(o.poster)) {
                    css(o.poster, {
                        opacity: v.poster_a
                    })
                }
            }
            if (o.play && v.playonhover == 1) {
                o.actions.Pause()
            }
            if (v.toolbar.hideleavetimeout > 0) {
                clearTimeout(o.leavetimeout);
                o.leavetimeout = setTimeout(ShowOrHide, v.toolbar.hideleavetimeout * 1000)
            } else {
                ShowOrHide()
            }
        };
        this.StageOver = function() {
            if (o.poster) {
                if (v.poster_aover > -1 && isVisible(o.poster)) {
                    css(o.poster, {
                        opacity: v.poster_aover
                    })
                }
            }
            if (!o.play && v.playonhover == 1) {
                o.actions.Play()
            }
            ShowOrHide();
            ToolbarDown(false)
        };
        this.StageMove = function(stage_x, stage_y) {
            var y;
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    y = b[x].g("action");
                    if (y == "line" || y == "volume" || y == "customline") {
                        b[x].StageMove(stage_x, stage_y)
                    }
                }
            }
        };
        this.StageMove2 = function() {
            if (v.toolbar.hide == 1) {
                if (v.toolbar.hidejustfull == 1 && !o.fullscreen) {
                    return
                }
                if (!o.mouseHere && o.media.status() == "playing") {
                    o.mouseHere = true;
                    ShowOrHide()
                }
                if (v.toolbar.hidewithoutmoving == 1) {
                    ShowForce();
                    HideInterval()
                }
                ToolbarDown(false)
            }
        };
        this.StageMouseUp = function(stage_x, stage_y) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line" || b[x].g("action") == "volume") {
                        b[x].StageMouseUp(stage_x, stage_y)
                    }
                }
            }
        };
        this.Played = function(time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        b[x].UpdatePlay(time, duration)
                    }
                    if (b[x].g("action") == "time") {
                        UpdateTime(b[x], time, duration)
                    }
                    if (b[x].s("rotateplaying") == 1) {
                        b[x].Rotate()
                    }
                }
            }
        };

        function ToolbarDown(x) {
            if (v.toolbar.hide == 1) {
                x ? SettingsClose() : '';
                if (v.toolbar.hidedown == 1) {
                    if (!o.play && v.toolbar.hideonpause == 1) {
                        x = true
                    }
                    if (x && !o.toolbarisdown) {
                        css(o.toolbar, {
                            "top": bg.h()
                        })
                    }
                    if (!x && o.toolbarisdown) {
                        css(o.toolbar, {
                            "top": 0
                        })
                    }
                    o.toolbarisdown = x
                }
            }
        }

        function ToolbarShow() {
            toolbarHidden = false;
            o.media.ToolbarShow();
            if (o.resizeonmouse) {
                o.resizeonmouse = false;
                Resize();
                setTimeout(Resize, 300)
            }
        }

        function UpdateTime(x, time, duration) {
            if (v.delete > 0) {
                time -= v.delete;
                duration -= v.delete
            }
            var y = Time(time);
            if (x.s("inversetime") == "1") {
                y = Time(duration - time)
            }
            if (x.s("showduration") == "1") {
                if (x.s("showboth") == "1") {
                    y = y + (duration > 0 ? ' ' + Lang(x.s("separator")) + ' ' + Time(duration) : '')
                } else {
                    time == 0 ? y = Time(duration) : ''
                }
            }
            x.UpdateText(y)
        }
        this.Loaded = function(time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        b[x].UpdateLoad(time, duration)
                    }
                }
            }
        };
        this.Waiting = function() {
            if (v.hidevideo == 1) {
                clearTimeout(wait_to);
                wait_to = setTimeout(Waiting, 500)
            } else {
                Waiting()
            }
        };

        function Waiting() {
            if (!waiting) {
                js("buffering");
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "buffer") {
                            b[x].Buffer();
                            waiting = true
                        }
                    }
                }
            }
        }
        this.HideElement = function(y) {
            for (var x in b) {
                if (x == y) {
                    b[x].set("hide2")
                }
            }
        };
        this.StopWaiting = function(time, duration) {
            clearTimeout(wait_to);
            if (waiting) {
                js("buffered");
                for (var x in b) {
                    if (b.hasOwnProperty(x)) {
                        if (b[x].g("action") == "buffer") {
                            b[x].BufferStop();
                            waiting = false
                        }
                    }
                }
            }
        };
        this.volumescroll = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].s("linkurl") == "volume scroll") {
                        b[x].set("show2");
                        b[x].UpdateText(Lang('volume') + ' ' + (o.muted ? 0 : Math.ceil(v.volume * 100)) + '%');
                        clearTimeout(o.volumescroll);
                        o.volumescroll = setTimeout(Volumescrolled, 1000)
                    }
                }
            }
        };

        function Volumescrolled() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].s("linkurl") == "volume scroll") {
                        b[x].UpdateText('');
                        b[x].set("hide2");
                        clearTimeout(o.volumescroll)
                    }
                }
            }
        }
        this.Seek = function(time, duration) {
            if (v.delete > 0) {
                time -= v.delete;
                duration -= v.delete
            }
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        duration > 0 ? b[x].set("click", time / duration) : '';
                        b[x].UpdatePlaySeek()
                    }
                    if (b[x].g("action") == "time") {
                        UpdateTime(b[x], time, duration)
                    }
                    if (b[x].g("action") == "live") {
                        b[x].set("iconopacity", 0.5);
                        b[x].set("saturate", 0)
                    }
                }
            }
        };
        this.Duration = function(time, duration) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "duration") {
                        if (v.delete > 0) {
                            duration -= v.delete
                        }
                        b[x].UpdateText(Time(duration))
                    }
                    if (b[x].g("action") == "line") {
                        b[x].UpdatePlay(time, duration);
                        b[x].PlacePoints(duration)
                    }
                    if (b[x].g("action") == "time") {
                        UpdateTime(b[x], time, duration)
                    }
                }
            }
        };
        this.Settings = function() {
            settings.g("show") ? settings.hide() : settings.show()
        };
        this.SettingsVisible = function() {
            if (settings) {
                return settings.g("show") ? true : false
            } else {
                return false
            }
        };
        this.SettingsScale = function() {
            if (settings) {
                settings.Scale()
            }
        };
        this.SettingsClose = function() {
            SettingsClose()
        };
        this.SettingsTimer = function(x) {
            if (settings) {
                settings.UpdateTimer(x)
            }
        };
        this.SettingsSpeed = function() {
            if (settings) {
                settings.UpdateSpeed()
            }
        };
        this.SettingsExist = function(x) {
            if (settings) {
                return settings.Exist(x)
            }
        };

        function SettingsClose(x) {
            if (settings) {
                settings.g("show") ? settings.hide(x) : ''
            }
            o.settings2 ? o.settings2.hide() : ''
        };
        this.Playlist = function() {
            if (playlist) {
                if (playlist.g("show")) {
                    playlist.hide(1)
                } else {
                    playlist.show()
                }
            }
        };
        this.PlaylistShow = function() {
            if (playlist) {
                setTimeout(function() {
                    playlist.show()
                }, 100)
            }
        };
        this.PlaylistVisible = function() {
            if (playlist) {
                return playlist.g("show") ? true : false
            } else {
                return false
            }
        };
        this.PlaylistG = function(x) {
            return playlist ? playlist.g(x) : ''
        };
        this.UpdatePlaylist = function(x) {
            if (playlist) {
                playlist.updatePlaylist(x)
            }
        };
        this.PlaylistNext = function() {
            if (playlist) {
                playlist.PlaylistNext()
            }
        };
        this.PlaylistHere = function() {
            if (playlist) {
                playlist.PlaylistHere()
            }
        };
        this.PlaylistControls = function() {
            PlaylistControls()
        };

        function PlaylistControls() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "next") {
                        css(b[x].c(), {
                            "opacity": (!playlist.PlaylistNextExist() ? 0.5 : 1)
                        })
                    }
                    if (b[x].g("action") == "prev") {
                        css(b[x].c(), {
                            "opacity": (!playlist.PlaylistPrevExist() ? 0.5 : 1)
                        })
                    }
                }
            }
        }
        this.PlaylistNextExist = function() {
            if (playlist) {
                return playlist.PlaylistNextExist()
            } else {
                return false
            }
        };
        this.PlaylistExist = function() {
            if (playlist) {
                return playlist.PlaylistExist()
            } else {
                return false
            }
        };
        this.PlaylistRewind = function() {
            if (playlist) {
                playlist.PlaylistRewind()
            }
        };
        this.PlaylistPrev = function() {
            if (playlist) {
                playlist.PlaylistPrev()
            }
        };
        this.PlaylistPlayId = function(x) {
            if (x && playlist) {
                playlist.playById(x)
            }
        };
        this.PlaylistOpenId = function(x) {
            if (x && playlist) {
                playlist.openById(x)
            }
        };
        this.PlaylistMove = function(x) {
            if (x && playlist) {
                css(playlist.co(), {
                    "maxHeight": "none"
                });
                document.getElementById(x).appendChild(playlist.co());
                hide2(playlist.c())
            }
        };
        this.ShowSettingsBut = function() {};
        this.QualityChanged = function(x) {
            if (settings) {
                settings.SetQuality();
                settings.g("show") ? setTimeout(function() {
                    settings.hide()
                }, 200) : ''
            }
        };
        this.QualityChangedNoHand = function(x) {
            if (settings) {
                settings.SetQuality()
            }
            if (o.settings2) {
                o.settings2.update()
            }
        };
        this.AirplayChanged = function(x) {
            if (settings) {
                settings.Airplay()
            }
            Resize();
            ShowOrHide()
        };
        this.SettingChanged = function(x) {
            if (o.line_speed) {
                for (var i in b) {
                    if (b.hasOwnProperty(i)) {
                        if (b[i].s("customline") == "speed" && o.custom_speed) {
                            b[i].UpdatePlay(o.custom_speed, o.files_speed.slice(-1)[0])
                        }
                    }
                }
            }
            if (settings) {
                settings.SetSetting(x);
                settings.g("show") ? settings.hide() : ''
            }
            if (o.settings2) {
                o.settings2.update()
            }
        };
        this.AudioTrackChangedNoHand = function(x) {
            if (settings) {
                settings.SetSetting("audiotrack")
            }
            if (o.settings2) {
                o.settings2.update()
            }
        };
        this.SubtitleChanged = function() {
            if (settings) {
                settings.SetSubtitle();
                settings.g("show") ? setTimeout(function() {
                    settings.hide()
                }, 200) : ''
            }
            if (o.settings2) {
                o.settings2.update()
            }
        };
        this.SettingsN = function(num, display, val) {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "settings") {
                        if (b[x].s("hdicon") == 1) {
                            b[x].HdIcon()
                        }
                    }
                    if (b[x].g("action_settings") == "settings#" + num) {
                        b[x].set("set#visible", display);
                        if (b[x].g("type") == "text") {
                            if (val) {
                                b[x].UpdateText(val)
                            }
                        } else {
                            if (v.settings['settings' + num + 'action'] == "subtitle") {
                                if (val == Lang("off")) {
                                    b[x].CustomSwitch(0)
                                } else {
                                    b[x].CustomSwitch(1)
                                }
                            }
                            Resize()
                        }
                        ShowOrHideProcessor(b[x])
                    }
                }
            }
        };
        this.UpdateSettings = function() {
            if (settings) {
                settings.SetQuality();
                settings.SetSetting("audiotrack");
                settings.SetSetting("download")
            }
        };
        this.RenewPoints = function() {
            for (var x in b) {
                if (b.hasOwnProperty(x)) {
                    if (b[x].g("action") == "line") {
                        b[x].RenewPoints()
                    }
                }
            }
        };
        this.resize = function() {
            Resize();
            if (toolbarHidden) {
                o.resizeonmouse = true
            }
        };
        this.resizeFromText = function(x) {
            if (!toolbarHidden || x == 1) {
                Resize();
                ShowOrHide()
            } else {
                v.toolbar.resizeme = true
            }
        };
        this.refresh = function() {
            ShowOrHide();
            Resize();
            ShowOrHide();
            if (o.nativecontrols) {
                hide2(bg2)
            } else {
                !toolbarHidden ? show2(bg2) : ''
            }
        };
        this.KeyDown = function(event) {
            if (pljssglobalid == v.id && v.hotkey.on == 1) {
                var x = event.which;
                if (x == undefined) {
                    x = event.keyCode
                }
                if (exist(o.vast) || exist(o.pass) || o.stopkeys == 1) {
                    return false
                }
                if (((v.hotkey.space == 1 && x == 32) || (v.hotkey.enter == 1 && x == 13)) && (o.focus || o.mouseHere)) {
                    if (v.hotkey.icons == 1) {
                        PluginHotIcon('play', o.play ? 0 : 1)
                    }
                    o.actions.Toggle();
                    event.preventDefault();
                    return false
                }!v.hotkey.vol ? v.hotkey.vol = 0.2 : '';
                !v.hotkey.scale ? v.hotkey.scale = 5 : '';
                if (v.hotkey.nums == 1 && o.focus) {
                    if (o.media.duration() > 0) {
                        for (var i = 48; i < 58; i++) {
                            if (x == i) {
                                o.actions.Seek((o.media.duration() * (x - 48) * 10) / 100, true)
                            }
                        }
                    }
                }
                if (x == 39 && o.focus) {
                    KeyPlusUp(v.hotkey.leftright)
                }
                if (x == 37 && o.focus) {
                    KeyPlusDown(v.hotkey.leftright)
                }
                if (x == 38 && o.focus) {
                    KeyPlusUp(v.hotkey.updown)
                }
                if (x == 40 && o.focus) {
                    KeyPlusDown(v.hotkey.updown)
                }
                if (x == 187 && o.focus) {
                    KeyPlusUp(v.hotkey.plusminus)
                }
                if (x == 189 && o.focus) {
                    KeyPlusDown(v.hotkey.plusminus)
                }
            }
        };

        function KeyPlusUp(x) {
            if (x == "seek") {
                if (o.media.duration() > 0) {
                    if (o.media.time() + parseFloat(v.hotkey.seek) < o.media.duration()) {
                        o.actions.Seek(o.media.time() + parseFloat(v.hotkey.seek), true)
                    }
                }
            }
            if (x == "volume") {
                o.actions.Volume(parseFloat(v.volume) + parseFloat(v.hotkey.vol));
                event.preventDefault()
            }
            if (x == "scale") {
                o.media.scale(v.hotkey.scale / 100);
                event.preventDefault()
            }
            if (v.hotkey.icons == 1) {
                PluginHotIcon(x, 1)
            }
        }

        function KeyPlusDown(x) {
            if (x == "seek") {
                if (o.media.duration() > 0 && o.start) {
                    o.actions.Seek((o.media.time() - v.hotkey.seek >= 0 ? o.media.time() - v.hotkey.seek : 0), true)
                }
            }
            if (x == "volume") {
                o.actions.Volume(parseFloat(v.volume) - parseFloat(v.hotkey.vol));
                event.preventDefault()
            }
            if (x == "scale") {
                o.media.scale(-v.hotkey.scale / 100);
                event.preventDefault()
            }
            if (v.hotkey.icons == 1) {
                PluginHotIcon(x, 0)
            }
        };
        this.KeyUp = function(event) {
            if (pljssglobalid == v.id) {
                var x = event.which;
                if (x == undefined) {
                    x = event.keyCode
                }
                if (x == 57) {
                    if (v.log == 1) {}
                }
                if (o.fullscreen && x == 27) {
                    o.actions.Normalscreen()
                }
                if (exist(o.vast) || exist(o.pass)) {
                    return false
                }
                if (v.hotkey.f == 1 && x == 70 && v.hidevideo != 1 && (o.focus || o.mouseHere)) {
                    if (v.hotkey.icons == 1) {
                        PluginHotIcon('fullscreen', o.fullscreen ? 0 : 1)
                    }
                    o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()
                }
                if (v.hotkey.m == 1 && x == 77 && (o.focus || o.mouseHere)) {
                    if (v.hotkey.icons == 1) {
                        PluginHotIcon('mute', o.muted ? 1 : 0)
                    }
                    o.muted ? o.actions.Unmute() : o.actions.Mute()
                }
            }
        };
        this.Remove = function() {
            clearInterval(o.toolbarInterval);
            for (var x in o) {
                if (x.indexOf("control") == 0 && x.indexOf("Interval") > -1) {
                    clearInterval(o[x])
                }
            }
            for (var i = 0; i < butNames.length; i++) {
                key = butNames[i];
                if (b[key]) {
                    b[key].Remove()
                }
            }
            if (settings) {
                settings.Remove()
            }
            if (playlist) {
                playlist.Remove()
            }
            bg.Remove();
            if (bg2.parentNode == o.frame) {
                o.frame.removeChild(bg2)
            } else {
                o.toolbar ? o.toolbar.removeChild(bg2) : ''
            }
        };
        this.ShowForce = function() {
            ShowForce()
        };
        this.HideForce = function() {
            HideForce();
            ShowOrHide()
        };
        this.HideInterval = function() {
            HideInterval()
        };
        this.ToolbarHidden = function() {
            return toolbarHidden
        }
    };
    var Control = function(key) {
        var i;
        var style = [];
        var w;
        var h;
        var last_text_w = 0;
        var bg;
        var bgcontainer;
        var area;
        var angle = 0;
        var visible = true;
        var selectOpen = false;
        var scaleX = 1;
        var scaleY = 1;
        var tip;
        var tipbg;
        var tiptext;
        var tipcrn;
        var action;
        var action_settings = '';
        var x0;
        var y0;
        var on;
        var over = false;
        var touchmove = false;
        var iconangle = 0;
        var bufferInterval;
        var bufferDeg = 0;
        var rightside = 0;
        var topside = 0;
        var bottomside = 0;
        var noclick = false;
        var clicked = false;
        var hdicon;
        var imgldd;
        var settingsNumberVisible = false;
        style = UpdateObject(style, default_style.but);
        style = UpdateObject(style, v[key]);
        var actions = [style.action];
        action = actions[0];
        exist(style.action2) ? actions[1] = style.action2 : '';
        exist(style.opposite) ? actions[1] = style.opposite : '';
        exist(style.title) ? style.text = style.title : '';
        if (exist2(style.scalesmall)) {
            o.screen_w < 400 ? style.scale = style.scalesmall : ''
        }
        if (exist(style.linkurl)) {
            if (style.type == "text" && style.linkurl != '') {
                if (exist(v[style.linkurl + 'text'])) {
                    style.text = v[style.linkurl + 'text']
                }
            }
            if (style.linkurl.indexOf("settings#") == 0) {
                action_settings = style.linkurl;
                if (style.tiptext == '' && action_settings.indexOf(",") == -1) {
                    style.tiptext = Lang(v.settings['settings' + action_settings.substr(9) + 'action'])
                }
            }
            if (style.linkurl.indexOf("captions") > 0) {
                v.hlscaptions = true
            }
            if (style.linkurl == "countdown") {
                style.counter = new PluginCountdown(style)
            }
        }
        var tips = style.tiptext ? style.tiptext.split("///") : [];
        var _currentIcon = 0;
        var icons = new Array();
        var icon = new Array();
        var iconsover = new Array();
        var iconspress = new Array();
        var iconreplay = 0;
        var replay;
        if (style.type == "text") {
            if (exist(style.text)) {
                icons[0] = trim(style.text);
                style.lngth = style.text.length;
                if (style.text.indexOf("/") == 0) {
                    style.slash4time = 1
                }
                if (style.text.indexOf("|") == 0) {
                    style.line4time = 1
                }
                if (style.text.indexOf("-") == 0) {
                    style.minus4time = 1
                }
                if (action == "time" || action == "duration") {
                    if (style.text.indexOf('0:') == 0) {
                        style.timeshort = true
                    }
                    if (style.text.split(":").length == 3) {
                        style.with_hours = true
                    } else {
                        if (style.text.indexOf('00:00') > -1) {
                            style.with_min = true
                        }
                    }
                }
                if (style.inversetime == 1 && style.text.indexOf("-") == 0) {
                    style.minus4back = 1
                }
                if (style.text.indexOf("///") > 0 && action == "custom") {
                    style.texts = style.text.split("///");
                    style.text = icons[0] = style.texts[0]
                }
            }
            if (v.fonts == 1) {
                setTimeout(ResizeText, 100);
                setTimeout(ResizeText, 500);
                setTimeout(ResizeText, 1000)
            }
        } else {
            if (exist(style.icon)) {
                icons[0] = style.icon;
                if (icons[0].indexOf("///") > 0 && icons[0].indexOf("base64") == -1) {
                    icons = style.icon.split("///")
                }
                if (exist(style.icon2)) {
                    icons[1] = style.icon2
                }
                if (style.iconsreplay == 1) {
                    if (exist2(style.icon3)) {
                        icons.push(style.icon3);
                        iconreplay = icons.length - 1
                    }
                }
            }
        } if (action == "custom") {
            if (style.link2 == 1 && exist(style.linkurl2)) {
                style.linkurl0 = style.linkurl
            }
        }
        var control = createElement("div");
        if (style.position == 'timeline') {
            o.timeline.appendChild(control)
        } else {
            if (style.position.indexOf('controls') > -1 && v.toolbar.hide == 1 && v.toolbar.hidedown == 1) {
                o.toolbar.appendChild(control)
            } else {
                o.frame.appendChild(control)
            }
        }
        var bgcontainer = createElement("div");
        control.appendChild(bgcontainer);
        css(control, {
            "position": "absolute",
            "left": 0,
            "top": 0,
            "opacity": 1,
            "fontSize": "14px",
            "lineHeight": "1em"
        });
        if (exist2(style.dom)) {
            attr(control, {
                "id": (v.id + "_control_" + style.dom)
            })
        }
        if (style.rotateplaying == 1) {
            css(control, {
                "transition": "transform 0.2s linear"
            })
        }
        if (icons.length > 0) {
            for (i = 0; i < icons.length; i++) {
                icon[i] = createElement("div");
                css(icon[i], {
                    "position": "absolute",
                    "top": 0,
                    "left": 0,
                    "pointerEvents": "none",
                    "opacity": style.a,
                    "transition": "opacity 0.1s linear,transform 0.1s linear"
                });
                if (style.type == "pic" && style.src != '') {
                    if (style.src.indexOf(".png") > -1 || style.src.indexOf(".jpg") > -1 || style.src.indexOf("base64") > -1) {
                        style.src.indexOf("//") == -1 && style.src.indexOf("base64") == -1 ? style.src = '//' + style.src : '';
                        var z = createElement("img");
                        style.loading = 1;
                        z.addEventListener("load", imageLoaded);
                        z.src = style.src;
                        icon[i].appendChild(z);
                        style.w = icon[i].offsetWidth;
                        style.h = icon[i].offsetHeight;
                        if (exist2(style.dom)) {
                            attr(icon[i], {
                                "id": (v.id + "_control_" + style.dom + "_icon")
                            })
                        }
                    }
                }
                if (style.type == "text") {
                    css(icon[i], {
                        "color": (style.color),
                        "fontSize": style.fontsize,
                        "fontFamily": style.font,
                        "letter-spacing": style.letterspacing + 'px',
                        "padding": "0 3px 0 3px",
                        "white-space": "nowrap"
                    });
                    if (style.click == 1) {
                        if (style.text.indexOf("<a ") > -1 || key == "control_title") {
                            css(icon[i], {
                                "pointerEvents": "auto"
                            })
                        }
                    }
                    if (style.bold == 1) {
                        css(icon[i], {
                            "font-weight": "bold"
                        })
                    }
                    icons[i] == 'live' ? icons[i] = Lang("live") : '';
                    icon[i].innerHTML = Places(icons[i]);
                    setTimeout(Marquee, 100);
                    style.w = icon[i].offsetWidth;
                    style.h = icon[i].offsetHeight;
                    if (exist2(style.dom)) {
                        attr(icon[i], {
                            "id": (v.id + "_control_" + style.dom + "_text")
                        })
                    }
                }
                if (style.type == "css") {
                    controlCSS(icons[i], style.color, icon[i])
                }
                var icn = icons[i].toString();
                var isvg = icn.indexOf('<svg') > -1 || icn.indexOf('<SVG') > -1;
                if (style.type == "svg" && (icn.indexOf('<g>') > -1 || isvg)) {
                    if (action == "mute" || action == "custom") {
                        icn = icn.replace(/pjs_/g, 'pjs_' + v.id + key)
                    }
                    if (icn.indexOf('pointer') > -1) {
                        Clickable(icon[i])
                    }
                    icon[i].innerHTML = (!isvg ? "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" : '') + icn + (!isvg ? "</svg>" : '');
                    icon[i].offsetWidth > 20 ? style.w = icon[i].offsetWidth : '';
                    icon[i].offsetHeight > 20 ? style.h = icon[i].offsetHeight : '';
                    css(icon[i], {
                        "width": style.w,
                        "height": style.h
                    });
                    if (style.iconscolor != -1) {
                        IconsColor(icon, style.iconscolor)
                    }
                    if (exist2(style.dom)) {
                        attr(icon[i], {
                            "id": (v.id + "_control_" + style.dom + "_icon" + i)
                        })
                    }
                }
                control.appendChild(icon[i]);
                i > 0 ? hide(icon[i]) : ''
            }
            Background();
            imgldd ? imageLoaded() : '';
            if (style.linkurl == "chromecast") {
                style.chromecast = 1;
                style.hide = 1;
                o.chromecast ? icon[0].innerHTML = o.chromecast.button(style.iconscolor != -1 ? style.iconscolor : '#ffffff') : '';
                icon[0].onmouseover = onOver;
                icon[0].onmouseout = onOut;
                icon[0].onmousemove = onMove
            } else {
                if ((bg.offsetWidth * style.scale < 35 || bg.offsetHeight * style.scale < 35) && style.type != 'text') {
                    ClickArea();
                    Clickable(area)
                } else {
                    Clickable(bg)
                }
            } if (action == "custom") {
                if (style.link == 1 && exist(style.linkurl)) {
                    if (style.linkurl.indexOf("api:") == 0) {
                        var tmp = style.linkurl.substr(4).split(",");
                        if (tmp.length == 2) {
                            var tmp2 = tmp[1].split("/");
                            if (tmp2.length == 2) {
                                tmp[0] == 'hd' ? tmp[0] = "default_quality" : '';
                                if (v[tmp[0]] == tmp2[1]) {
                                    style.a = 1;
                                    css(icon[0], {
                                        "opacity": style.a
                                    })
                                }
                            }
                        }
                    }
                }
            }
            if (action == "settings" && style.hdicon == 1) {
                hdicon = new PluginHdIcon(control, bg)
            }
            if (style.click == 0) {
                css(control, {
                    "pointerEvents": "none"
                })
            }
            if (style.loading == 1) {
                hide(bg)
            }
            if (style.tip == 1) {
                CreateTip()
            }
            if (style.position.indexOf("right") > -1) {
                rightside = 1
            }
            if (style.position.indexOf("top") > -1) {
                topside = 1
            }
            if (style.position.indexOf("bottom") > -1 || style.position.indexOf("control") > -1) {
                bottomside = 1
            }
            Resize();
            var t = '';
            if (style.rotation != 0) {
                t += "rotate(" + style.rotation + "deg)"
            }
            if (style.flipx == 1) {
                t += " scaleX(-1)"
            }
            if (style.flipy == 1) {
                t += " scaleY(-1)"
            }
            if (t != '') {
                css(control, {
                    "transform": t
                })
            }
            if (action == "buffer") {
                BufferStop()
            }
            var tmp = [];
            var i;
            if (action == "playlist") {
                tmp = ['autoplaylist', 'openplaylistafter', 'openplaylistbefore', 'openplaylistpause', 'openplaylistroot', 'playlistrewind'];
                for (i = 0; i < tmp.length; i++) {
                    if (exist(style[tmp[i]]) && !exist(v.playlist[tmp[i]])) {
                        v.playlist[tmp[i]] = style[tmp[i]]
                    }
                }
            }
            if (action == "title") {
                tmp = ['showtitleplaylist', 'addtitleplaylist', 'addtitleplaylistbr'];
                for (i = 0; i < tmp.length; i++) {
                    if (exist(style[tmp[i]]) && !exist(options[tmp[i]])) {
                        v[tmp[i]] = style[tmp[i]]
                    }
                }
            }
            style.tipalways == 1 ? Tip() : '';
            if (action == "custom" && style.on == 0) {
                hide2(control)
            }
        }

        function ClickArea() {
            if (area) {
                area.parentNode.removeChild(area)
            }
            area = createElement("div");
            css(area, {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "width": style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35) * style.clickscalex,
                "height": style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35) * style.clickscaley
            });
            style = MarginPadding(style, 'clickmargin', 'clickmargin');
            if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
                css(area, {
                    "background-color": "#ff0000",
                    "opacity": 0.5
                })
            }
            control.appendChild(area)
        }

        function Clickable(x) {
            if (action.indexOf("time") == 0 && actions.length == 1) {
                style.click = 0
            }
            if (action == "custom" && style.link == 0) {
                style.click = 0
            }
            if (style.click == 1) {
                if (style.hand == 1) {
                    css(x, {
                        "cursor": "pointer"
                    })
                }
                css(x, {
                    "pointerEvents": "auto"
                });
                if (o.system.mobile) {
                    x.addEventListener("touchmove", function(event) {
                        event.stopPropagation();
                        touchmove = true
                    });
                    x.addEventListener("touchstart", function(event) {
                        event.stopPropagation()
                    });
                    x.addEventListener("touchend", function(event) {
                        event.stopPropagation();
                        if (!touchmove) {
                            onClick(event)
                        }
                        touchmove = false
                    })
                } else {
                    x.onclick = onClick
                }
            } else {
                css(x, {
                    "cursor": "default"
                })
            } if (!o.system.mobile) {
                x.onmouseover = onOver;
                x.onmouseout = onOut
            }
            if (style.hidden == 1 || style.tip == 1) {
                x.onmousemove = onMove
            }
        }

        function Background() {
            if (bg) {
                bg.parentNode.removeChild(bg)
            }
            bg = createElement("div");
            css(bg, {
                "position": "absolute",
                "top": 0,
                "left": 0
            });
            if (exist2(style.dom)) {
                attr(bg, {
                    "id": (v.id + "_control_" + style.dom + "_bg")
                })
            }
            w = style.w;
            h = style.h;
            style = MarginPadding(style, 'margin', 'margin');
            style = MarginPadding(style, 'marginproc', 'marginproc');
            if (style.type == "text") {
                w = icon[_currentIcon].offsetWidth;
                h = icon[_currentIcon].offsetHeight
            }
            style = MarginPadding(style, 'bgpadding', 'bgpadding');
            style = MarginPadding(style, 'iconmargin', 'iconmargin');
            if (o.system.safari) {
                style.iconmarginleft /= style.scale;
                style.iconmarginright /= style.scale;
                style.iconmargintop /= style.scale;
                style.iconmarginbottom /= style.scale
            }
            if (exist2(style.dom) && exist(v.custom) && style.action == "custom") {
                if (typeof(v.custom) == 'object') {
                    for (var i = 0; i < Object.keys(v.custom).length; i++) {
                        if (v.custom[i][style.dom]) {
                            if (v.custom[i][style.dom] == "off") {
                                style.on = 0
                            } else {
                                var tmp = v.custom[i][style.dom].split(":");
                                if (tmp[0] == "margin-left") {
                                    if (tmp[1].indexOf("%") > 0) {
                                        style.marginprocleft = parseInt(tmp[1])
                                    } else {
                                        style.marginleft = parseInt(tmp[1])
                                    }
                                }
                            }
                        }
                    }
                }
            }
            style.h = h;
            style.w = w;
            if (style.bg == 1) {
                h = h + style.bgpaddingtop + style.bgpaddingbottom;
                w = w + style.bgpaddingleft + style.bgpaddingright;
                style.h = h;
                style.w = w;
                if (style.type == "text") {
                    style.bgh = icon[0].offsetHeight
                }
            } else {
                style.bga = 0
            }
            css(bg, {
                "width": (style.bgstretch == 1 ? 5000 : w),
                "height": h,
                "borderRadius": (style.bgo * h) / 2,
                "background": style.bgcolor,
                "opacity": style.bga,
                "transition": "opacity .1s linear, background .1s linear, transform .1s linear"
            });
            if (style.type == "pic") {
                css(bg, {
                    "width": w,
                    "height": h,
                    "borderRadius": (style.bgo * h / style.scale) / 2,
                })
            }
            if (style.bgborder == 1) {
                css(bg, {
                    "border": "1px solid " + style.bgbordercolor
                })
            }
            bgcontainer.appendChild(bg)
        }

        function Resize() {
            css(bg, {
                "top": (-bg.offsetHeight / 2),
                "left": (-bg.offsetWidth / 2)
            });
            if (area) {
                var x = style.type == "pic" ? bg.offsetWidth : (bg.offsetWidth > 35 ? bg.offsetWidth : 35);
                var y = style.type == "pic" ? bg.offsetHeight : (bg.offsetHeight > 35 ? bg.offsetHeight : 35);
                css(area, {
                    "top": (-y / 2) + style.clickmargintop - style.clickmarginbottom,
                    "left": (-x / 2) + style.clickmarginleft - style.clickmarginright
                })
            }
            for (i = 0; i < icons.length; i++) {
                if (style.type == "svg") {
                    css(icon[i], {
                        "top": -Math.round(parseInt(icon[i].style.height)) / 2,
                        "left": -parseInt(icon[i].style.width) / 2
                    })
                } else {
                    css(icon[i], {
                        "top": -Math.round(icon[i].offsetHeight) / 2,
                        "left": -icon[i].offsetWidth / 2
                    })
                } if (bg) {
                    css(icon[i], {
                        "top": (int(icon[i].style.top) + style.bgpaddingtop / 2 - style.bgpaddingbottom / 2 + style.iconmargintop / 2 + style.iconmarginbottom / 2),
                        "left": (int(icon[i].style.left) + style.bgpaddingleft / 2 - style.bgpaddingright / 2 + style.iconmarginleft / 2 + style.iconmarginright / 2)
                    })
                }
            }
        }

        function onOver() {
            var i;
            over = true;
            if (style.iconsover == 1) {
                if (on && exist(style.icon2)) {
                    i = 1
                } else {
                    i = 0
                } if (replay && iconsover.length > 2) {
                    i = 2
                }
                if (iconsover[i]) {
                    hideAllIcons();
                    show(icon[iconsover[i]])
                }
            }
            if (style.bg == 1) {
                if (style.bgaover != -1) {
                    css(bg, {
                        "opacity": style.bgaover
                    })
                }
                if (style.bgcolorover != -1) {
                    css(bg, {
                        "background": style.bgcolorover
                    })
                }
            }
            if (style.aover > -1 && !selectOpen) {
                for (i = 0; i < icons.length; i++) {
                    if (icon[i].style.visibility != "hidden") {
                        css(icon[i], {
                            "opacity": style.aover
                        })
                    }
                }
            }
            if (style.iconscolorover != -1) {
                IconsColor(icon, style.iconscolorover)
            }
            if (style.rotateonhover == 1) {
                iconangle = iconangle + 45;
                css(icon[0], {
                    "transform": "rotate(" + iconangle + "deg)"
                })
            }
            if (style.scaleover > style.scale && style.scaleover > -1) {
                scale(style.scaleover)
            }
            if (action == "settings" && o.controls.SettingsVisible()) {} else {
                if (style.tip == 1 && style.tipalways != 1) {
                    show(tip);
                    css(tip, {
                        "opacity": 1
                    })
                }
            } if (action == "mute") {
                o.actions.volumewheel(true);
                o.volumewheel = true
            }
            o.controlover = true;
            o.controls.Mouse(key, "over")
        }

        function onOut() {
            over = false;
            var i;
            if (style.iconsover == 1) {
                if (on && exist(style.icon2)) {
                    i = 1
                } else {
                    i = 0
                } if (replay && iconsover.length > 2) {
                    i = 2
                }
                hideAllIcons();
                show(icon[i])
            }
            if (style.bg == 1) {
                if (style.bgaover != -1) {
                    css(bg, {
                        "opacity": style.bga
                    })
                }
                if (style.bgcolorover != -1) {
                    css(bg, {
                        "background": style.bgcolor
                    })
                }
            }
            if (style.aover > -1) {
                for (i = 0; i < icons.length; i++) {
                    if (icon[i].style.visibility != "hidden") {
                        css(icon[i], {
                            "opacity": style.a
                        })
                    }
                }
            }
            if (style.scaleover > -1) {
                scale(style.scale)
            }
            if (style.iconscolorover != -1) {
                IconsColor(icon, (style.iconscolor == -1 ? '#ffffff' : style.iconscolor))
            }
            if (action == "mute" && !o.fullscreen) {
                o.actions.volumewheel(false);
                o.volumewheel = false
            }
            if (style.tip == 1 && style.tipalways != 1) {
                hide(tip);
                css(tip, {
                    "opacity": 0
                })
            }
            o.controlover = false;
            o.controls ? o.controls.Mouse(key, "out") : ''
        }

        function onClick(event) {
            event.cancelBubble = true;
            if (!noclick) {
                o.controls.ControlClick(key);
                if (action == "custom") {
                    CustomToogle()
                }
                if (style.tip == 1 && style.tipalways != 1) {
                    hide(tip);
                    css(tip, {
                        "opacity": 0
                    })
                }
                if (style.rotateonclick == 1) {
                    iconangle = iconangle + 45;
                    css(icon[0], {
                        "transform": "rotate(" + iconangle + "deg)"
                    })
                }
                clicked = true;
                if (style.hideafterclick == 1 || (key == "control_start" && style.hide == 1 && style.hideonplay == 1)) {
                    o.controls.refresh()
                }
            }
        }

        function CustomToogle() {
            if (icons) {
                if (icons.length > 1) {
                    if (on == true) {
                        show(icon[0]);
                        hide(icon[1])
                    } else {
                        show(icon[1]);
                        hide(icon[0])
                    }
                }
                if (style.tip == 1 && tips.length > 1) {
                    tiptext.innerHTML = (on == true ? tips[0] : tips[1]);
                    Tip()
                }
            }
            if (exist(style.linkurl0)) {
                if (on == true) {
                    style.linkurl = style.linkurl0
                } else {
                    style.linkurl = style.linkurl2
                }
            }
            if (exist(style.texts)) {
                if (style.texts.length > 1) {
                    if (on == true) {
                        UpdateText(style.texts[0])
                    } else {
                        UpdateText(style.texts[1])
                    }
                }
            }
            on = on != true;
            if (style.bg == 1 && exist(style.bgcolorlink2)) {
                if (style.bgcolorlink2 != -1) {
                    if (on) {
                        style.bgcolorlink0 = style.bgcolor;
                        style.bgcolor = style.bgcolorlink2
                    } else {
                        style.bgcolor = style.bgcolorlink0
                    }
                    Background();
                    Clickable(bg);
                    Resize();
                    if (style.type == "text") {
                        ResizeText()
                    } else {
                        scale(style.scale)
                    }
                }
            }
        }

        function ReplayIcon(event) {
            event.cancelBubble = true;
            o.controls.ControlClick(key)
        }

        function hideAllIcons() {
            for (var i = 0; i < icons.length; i++) {
                if (icon[i].style.visibility != "hidden") {
                    css(icon[i], {
                        "opacity": style.a
                    });
                    hide(icon[i])
                }
            }
        }

        function Marquee(text) {
            if (icon[0]) {
                if (icon[0].offsetWidth > o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright) {
                    if (style.marquee == 1) {
                        if (!text) {
                            text = icon[0].innerHTML
                        }
                        icon[0].innerHTML = '<marquee>' + text + '</marquee>'
                    } else {
                        css(icon[0], {
                            "white-space": "normal"
                        })
                    }
                    css(icon[0], {
                        "width": o.screen_w - style.marginleft - style.marginright - style.bgpaddingleft - style.bgpaddingright
                    })
                }
            }
        }

        function imageLoaded() {
            if (bg) {
                imgldd = false;
                style.loading = 0;
                hide(bg);
                if (icon[0]) {
                    style.w = icon[0].offsetWidth * style.scale;
                    style.h = icon[0].offsetHeight * style.scale;
                    if (style.picheight > 0) {
                        style.h = style.picheight * style.scale;
                        css(icon[0], {
                            height: style.picheight
                        })
                    }
                    scale(style.scale)
                }
                style.loaded = 0;
                Background();
                ClickArea();
                Clickable(area);
                show(bg);
                Resize();
                o.controls.resize();
                if (!isVisible(control)) {
                    hide2(control)
                }
            } else {
                imgldd = true
            }
        }

        function CancelBubble(event) {
            event.cancelBubble = true
        }

        function onMove() {
            if (!o.system.mobile && !o.controlover) {
                onOver()
            }
            Tip()
        }

        function scale(x) {
            if (x > 0) {
                if (o.system.safari && style.tipalways != 1) {
                    css(bg, {
                        "zoom": x + ""
                    })
                } else {
                    css(bg, {
                        "transform": "scale(" + x + ")"
                    })
                }
                for (i = 0; i < icons.length; i++) {
                    if (o.system.safari && style.tipalways != 1) {
                        css(icon[i], {
                            "zoom": x + ""
                        })
                    } else {
                        css(icon[i], {
                            "transform": "scale(" + x + ")"
                        })
                    }
                }
                scaleX = x;
                scaleY = x
            }
        }

        function CreateTip() {
            tip = createElement("div");
            css(tip, {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'height': 'auto',
                "opacity": 0,
                "transition": "opacity 0.1s linear"
            });
            tipbg = createElement("div");
            style = MarginPadding(style, 'tippadding', 'tippadding');
            style = MarginPadding(style, 'tipmargin', 'tipmargin');
            css(tipbg, {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': '100%',
                'height': 30,
                'background-color': style.tipbgcolor,
                'opacity': style.tipbga,
                'border-radius': style.tipbgrounding
            });
            tiptext = createElement("div");
            css(tiptext, {
                'position': 'absolute',
                'left': style.tippaddingright,
                'top': style.tippaddingtop,
                'color': style.tipcolor,
                'font-family': style.tipfont,
                'font-size': style.tipfontsize,
                "letter-spacing": style.tipletterspacing + 'px',
                'opacity': style.tipa,
                "line-height": "1",
                'white-space': 'nowrap'
            });
            if (style.tippointer == 1) {
                tipcrn = createElement("div");
                tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="#' + style.tipbgcolor.replace("#", "") + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
            }
            if (style.tipalways == 1) {
                css(tip, {
                    "opacity": 1
                });
                Clickable(tip)
            } else {
                css(tip, {
                    "pointerEvents": "none"
                })
            }
            control.appendChild(tip);
            tiptext.innerHTML = style.tiptext == '' ? Lang(action) : tips[0];
            tip.appendChild(tipbg);
            tip.appendChild(tiptext);
            if (style.tippointer == 1) {
                tip.appendChild(tipcrn);
                var btm = o.doctype ? '-8px' : '-6px';
                var ps = style.tippointeralign;
                if (!exist(ps)) {
                    ps = ''
                }
                var tp = ps.indexOf("top") > -1;
                if (tp) {
                    css(tipcrn, {
                        "transform": "rotate(-180deg)"
                    })
                }
                css(tipcrn, {
                    'position': 'absolute',
                    'right': (ps.indexOf("right") > -1 ? 10 * style.scale : 'auto'),
                    'left': (ps.indexOf("left") > -1 ? 10 * style.scale : (ps == '' || ps == 'top' ? '50%' : 'auto')),
                    'margin-left': (ps == '' || ps == 'top' ? '-4px' : 0),
                    'bottom': (tp ? 'auto' : btm),
                    'top': (tp ? btm : 'auto'),
                    'opacity': style.tipbga
                })
            }
            Tip()
        }

        function Tip() {
            if (style.tip == 1) {
                css(tip, {
                    "top": (bottomside == 1 ? -h - tip.offsetHeight + 3 : -tip.offsetHeight / 2) + style.tipmargintop - style.tipmarginbottom,
                    "left": (rightside == 1 ? -tiptext.offsetWidth : (bottomside == 1 ? -w / 2 : +tiptext.offsetWidth)) - (bottomside == 1 ? 0 : tiptext.offsetWidth / 2 + 5) + style.tipmarginleft - style.tipmarginright,
                    "height": style.tippaddingtop + style.tipfontsize + style.tippaddingbottom,
                    "width": style.tippaddingleft + tiptext.offsetWidth + style.tippaddingright
                });
                css(tipbg, {
                    'height': tip.offsetHeight
                });
                tip.style.zIndex = "1000"
            }
        }
        this.c = function() {
            return control
        };
        this.s = function(x) {
            return style[x]
        };
        this.ss = function(x, x2) {
            return exist(style[x]) ? style[x][x2] : false
        };
        this.g = function(x) {
            switch (x) {
                case "width":
                    return w;
                    break;
                case "height":
                    return h;
                    break;
                case "x":
                    return int(control.style.left);
                    break;
                case "y":
                    return int(control.style.top);
                    break;
                case "opacity":
                    return control.style.opacity ? control.style.opacity : 1;
                    break;
                case "show":
                    return visible;
                    break;
                case "scaleX":
                    return scaleX;
                    break;
                case "scaleY":
                    return scaleY;
                    break;
                case "action":
                    return action;
                    break;
                case "action_settings":
                    return action_settings;
                    break;
                case "clicked":
                    return clicked;
                    break;
                case "type":
                    return style.type;
                    break;
                case "length":
                    return style.lngth ? style.lngth : 0;
                    break;
                case "key":
                    return key;
                    break;
                case "x0":
                    return x0;
                    break;
                case "y0":
                    return y0;
                    break;
                case "over":
                    return over;
                    break;
                case "settings#":
                    return action_settings.indexOf("settings#") == 0;
                    break;
                case "settings:":
                    return action_settings.indexOf("settings:") == 0;
                    break;
                case "set#visible":
                    return settingsNumberVisible;
                    break;
                default:
                    return false
            }
        };
        this.set = function(k, x) {
            switch (k) {
                case "show":
                    over ? onOut() : '';
                    visible = x;
                    break;
                case "display":
                    DisplayControl(x);
                    break;
                case "show2":
                    show2(control);
                    break;
                case "hide2":
                    hide2(control);
                    break;
                case "scale":
                    scale(x);
                    break;
                case "scaleX":
                    css(control, {
                        "transform": "scaleX(" + x + ")"
                    });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control, {
                        "transform": "scaleY(" + x + ")"
                    });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control, {
                        "opacity": x
                    });
                    break;
                case "iconopacity":
                    css(icon[0], {
                        "opacity": x
                    });
                    break;
                case "saturate":
                    css(icon[0], {
                        "filter": "saturate(" + x + ")"
                    });
                    break;
                case "left":
                    css(control, {
                        "left": x
                    });
                    break;
                case "top":
                    css(control, {
                        "top": x
                    });
                    break;
                case "width":
                    css(control, {
                        "width": x
                    });
                    break;
                case "height":
                    css(control, {
                        "height": x
                    });
                    break;
                case "over_final":
                    style.over_final = x;
                    break;
                case "rightside":
                    rightside = x;
                    break;
                case "set#visible":
                    settingsNumberVisible = x;
                    break;
                case "x":
                    css(control, {
                        "left": x
                    });
                    break;
                case "y":
                    css(control, {
                        "top": x
                    });
                    break;
                case "animation":
                    style.animation = x;
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break;
                default:
                    return false
            }
        };

        function DisplayControl(x) {
            if (x && o.system.mobile) {
                noclick = true;
                setTimeout(noClickTimeout, 300)
            }
            if (!x) {
                if (style.iconsreplay == 1 && replay) {
                    hide(icon[iconreplay]);
                    show(icon[0]);
                    replay = false
                }
            }
            if (style.loading == 1) {
                x ? show(control) : hide(control)
            } else {
                if (key == "control_time" || key == "control_duration") {
                    x ? show(control) : hide(control)
                } else {
                    css(control, {
                        "display": (x ? "block" : "none")
                    })
                }
                visible = x;
                x ? show(control) : ''
            }
        }

        function noClickTimeout() {
            noclick = false
        }
        this.UpdateText = function(text) {
            UpdateText(text);
            style.text33 = text
        };
        this.Rotate = function() {
            css(control, {
                "transform": "rotate(" + angle + "deg)"
            });
            angle += 20
        };
        this.RenewFromTitle = function(x) {
            if (style.text.indexOf("{title") > -1) {
                UpdateText(style.text)
            }
        };
        this.CustomToogle = function() {
            CustomToogle()
        };

        function UpdateText(text) {
            if (style.type == "text") {
                if (exist(text)) {
                    if (style.with_hours) {
                        if (text.length == 4) {
                            text = (style.timeshort ? '0:0' : '00:0') + text
                        }
                        if (text.length == 5) {
                            text = (style.timeshort ? '0:' : '00:') + text
                        }
                    }
                    if (style.with_min) {
                        if (text.length == 4) {
                            text = '0' + text
                        }
                    }
                    style.lngth = text.length
                }
                text = (style.line4time == 1 ? '| ' : '') + (style.slash4time == 1 ? '/ ' : '') + (style.minus4back == 1 ? '-' : (style.minus4time == 1 ? '- ' : '')) + text;
                var prevorius_default_w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                var prevorius_default_h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                icon[0].innerHTML = (action == "custom" ? Places(text) : text);
                if (style.triangle == 1) {
                    icon[0].innerHTML += '<span style="display:inline-block;width:10px"></span><span style="border-top: 3px solid #fff;border-left: 3px solid transparent;border-right: 3px solid transparent;position: absolute;right:3px;top: 50%;margin-top: -1px;"></span>'
                }
                if (action == "title") {
                    css(icon[0], {
                        "width": "auto",
                        "white-space": "nowrap"
                    });
                    Marquee(text)
                }
                style.w = icon[0].offsetWidth + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                style.h = icon[0].offsetHeight + (style.bg == 1 ? style.bgpaddingtop + style.bgpaddingbottom : 0);
                if (prevorius_default_w != style.w || prevorius_default_h != style.h || (style.w > 0 && last_text_w == 0)) {
                    ResizeText()
                }
                if (icon[0].offsetWidth > 0) {
                    last_text_w = style.w
                } else {
                    if (text != '') {
                        setTimeout(ResizeText, 100)
                    }
                }
            }
        }
        this.ResizeText = function() {
            ResizeText()
        };

        function ResizeText() {
            if (style.type == "text") {
                if (icon[0]) {
                    if (icon[0].offsetWidth > 0) {
                        w = style.w = icon[0].offsetWidth;
                        h = style.h = icon[0].offsetHeight;
                        Background();
                        Clickable(bg);
                        Resize();
                        o.controls.resizeFromText()
                    }
                }
            }
        }
        this.UpdateVolume = function(x) {
            if (style.displayvolume == 1 && !o.system.mobile) {
                var y = 'pjs_';
                var z = [];
                for (var i = 1; i < 4; i++) {
                    z[i] = document.getElementById(y.concat(v.id, key, 'volume_element', i))
                }
                if (z[1]) {
                    if (x <= 0.2) {
                        z[3] ? hide(z[3]) : '';
                        z[2] ? hide(z[2]) : '';
                        z[1] ? hide(z[1]) : ''
                    }
                    if (x > 0.2 && x <= 0.5) {
                        z[3] ? hide(z[3]) : '';
                        z[2] ? hide(z[2]) : ''
                    }
                    if (x > 0.2) {
                        z[1] ? show(z[1]) : ''
                    }
                    if (x > 0.5) {
                        z[2] ? show(z[2]) : ''
                    }
                    if (x > 0.5 && x <= 0.8) {
                        z[3] ? hide(z[3]) : ''
                    }
                    if (x > 0.8) {
                        z[3] ? show(z[3]) : ''
                    }
                }
            }
        };
        this.On = function() {
            if (!on) {
                if (icons) {
                    if (icons.length > 1 && actions.length > 1) {
                        hide(icon[0]);
                        show(icon[1])
                    }
                }
                if (actions.length > 1) {
                    action = actions[1];
                    if (style.tip == 1) {
                        tiptext.innerHTML = TipText(1);
                        Tip()
                    }
                }
                if (style.iconsreplay == 1 && replay) {
                    hide(icon[iconreplay]);
                    replay = false
                }
                on = true
            }
        };

        function TipText(x) {
            return style.tiptext == '' ? Lang(actions[x]) : (tips.length > 1 ? tips[x] : tips[0])
        }
        this.CustomSwitch = function(x) {
            var y = 'pjs_';
            var z = document.getElementById(y.concat(v.id, key, 'slider'));
            if (z) {
                css(z, {
                    "transition": "transform 0.1s ease-out"
                });
                if (x == 1) {
                    z.style.transform = 'translate(0, 0)'
                } else {
                    z.style.transform = 'translate(-7px, 0)'
                }
            } else {
                if (x == 1) {
                    style.a = 1
                } else {
                    style.a = 0.5
                }
            }
            css(icon[0], {
                "opacity": style.a
            })
        };
        this.Off = function() {
            if (on) {
                if (icons) {
                    if (icons.length > 1 && actions.length > 1) {
                        show(icon[0]);
                        hide(icon[1])
                    }
                }
                action = actions[0];
                if (actions.length > 1) {
                    if (style.tip == 1) {
                        tiptext.innerHTML = TipText(0);
                        Tip()
                    }
                }
                on = false;
                replay = false
            }
        };
        this.ReplayIcon = function() {
            if (style.iconsreplay == 1) {
                hideAllIcons();
                show(icon[iconreplay]);
                replay = true
            }
        };
        this.Buffer = function() {
            var stop = false;
            if (style.hide == 1 && style.hidewithposter == 1) {
                if (isVisible(o.poster)) {
                    stop = true
                }
            }
            if (!stop) {
                show2(control);
                var items = control.getElementsByTagName("*");
                for (var i = items.length; i--;) {
                    css(items[i], {
                        "animation-play-state": "running"
                    })
                }
                visible = true
            }
        };
        this.BufferStop = function() {
            BufferStop()
        };

        function BufferStop() {
            hide2(control);
            var items = control.getElementsByTagName("*");
            for (var i = items.length; i--;) {
                css(items[i], {
                    "animation-play-state": "paused"
                })
            }
            visible = false
        }
        this.Remove = function() {
            if (icons.length > 0) {
                for (i = 0; i < icons.length; i++) {
                    control.removeChild(icon[i]);
                    icon[i] = null
                }
            }
            if (bg) {
                bg.removeAttribute("onclick");
                bg.removeAttribute("onmouseover");
                bg.removeAttribute("onmouseout");
                bg.parentNode.removeChild(bg);
                bg = null
            }
            if (style.position == 'timeline') {
                o.timeline.removeChild(control)
            } else {
                if (control.parentNode == o.frame) {
                    o.frame.removeChild(control)
                } else {
                    if (o.toolbar) {
                        if (control.parentNode == o.toolbar) {
                            o.toolbar.removeChild(control)
                        }
                    }
                }
            } if (tip) {
                control.removeChild(tip)
            }
            control = null
        };
        this.HdIcon = function() {
            hdicon ? hdicon.toggle() : ''
        };

        function Places(x) {
            var z = x + '';
            if (x.indexOf('{time}') > -1 && exist(o.
                continue)) {
                x = x.replace('{time}', timeFormat(o.
                    continue.flag().t))
            }
            if (x.indexOf('{title') > -1) {
                var y = o.titlestore ? o.titlestore : (v.title ? v.title : '');
                if (x.indexOf('{title2}') > -1 && o.controls) {
                    x = x.replace('{title2}', o.controls.PlaylistG('title2'))
                }
                if (o.butplstart && o.controls) {
                    y = o.controls.PlaylistG('butplstart')
                }
                x = x.replace('{title}', y);
                if (o.butplstart && !o.controls) {
                    setTimeout(UpdateText, 100, z)
                }
            }
            return x
        }

        function IconsColor(icon, clr) {
            for (var i = 0; i < icon.length; i++) {
                SvgColor(icon[i], clr)
            }
            if (style.linkurl == "chromecast") {
                if (o.chromecast) {
                    o.chromecast.Color(icon[0], clr)
                }
            }
        }
    };
    var ControlLine = function(key, action) {
        var i;
        var style = [];
        var w;
        var h;
        var bg;
        var visible = true;
        var x0;
        var y0;
        var scaleX = 1;
        var scaleY = 1;
        var topBg = 0;
        var leftBg = 0;
        var alphas;
        var mouseDown;
        var mouseUp;
        var click;
        var handle;
        var _duration_load;
        var _duration_play;
        var _time_load;
        var _time_play;
        var tip;
        var tipbg;
        var tiptext;
        var tipcrn;
        var points = [];
        o.current_thumb = -1;
        var lastTouch;
        var over;
        var onup_to;
        for (i in default_style.but) {
            style[i] = default_style.but[i]
        }
        var action = v[key].action;
        var type = v[key].type;
        for (i in default_style[action]) {
            style[i] = default_style[action][i]
        }
        for (i in v[key]) {
            style[i] = v[key][i]
        }
        style.w = parseInt(style.w);
        style.h = parseInt(style.h);
        style = MarginPadding(style, 'margin', 'margin');
        style = MarginPadding(style, 'marginproc', 'marginproc');
        var control = createElement("div");
        if (v.toolbar.hidedown == 1 && v.toolbar.hide == 1) {
            o.toolbar.appendChild(control)
        } else {
            o.frame.appendChild(control)
        }
        action == "line" ? o.timeline = control : '';
        var _cul = action == "customline";
        css(control, {
            "position": "absolute",
            "top": 0,
            "left": 0,
            "opacity": 1,
            "fontSize": "14px",
            "lineHeight": "1em"
        });
        if (style.ontop == 1) {
            control.style.zIndex = 5
        }
        Background();
        var lines = createElement("div");
        css(lines, {
            "position": "absolute",
            "bottom": Math.round(-style.h / 2),
            "left": Math.round(-style.w / 2)
        });
        if (style.roundout == 1) {
            css(lines, {
                "border-radius": style.rounding * style.h / 2,
                "height": style.h,
                "overflow": "hidden",
                "pointer-events": "none"
            })
        }
        if (exist2(style.dom)) {
            attr(control, {
                "id": (v.id + "_control_" + style.dom)
            })
        }
        control.appendChild(lines);
        if (action == 'line' && v.thumbs == 1) {
            CreateThumb()
        }
        if (style.tip == 1) {
            CreateTip()
        }
        var line0 = createElement("div");
        StyleLine(line0, 0.3, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolorbg + ", #" + style.colorbg + ")" : style.colorbg), style.w, style.abg);
        if (style.customdesign == 1 && exist(style.customdesignsvg)) {
            var svg0 = createElement("div");
            svg0.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, "#" + style.colorbg);
            line0.appendChild(svg0);
            css(svg0, {
                "position": "absolute",
                "bottom": -Math.round(style.h / 2),
                "left": 0,
                "pointer-events": "none"
            });
            css(line0, {
                "overflow": "hidden",
                "background": "none"
            });
            var x = ["path", "polygon", "polyline", "rect", "ellipse"];
            for (var y = 0; y < x.length; y++) {
                var z = svg0.querySelectorAll("svg " + x[y]);
                if (z.length > 0) {
                    for (var y2 = 0; y2 < z.length; y2++) {
                        z[y2].style.fill = style.colorbg
                    }
                }
            }
        }
        lines.appendChild(line0);
        var lines1 = [];
        var line1 = createElement("div");
        StyleLine(line1, style.linespeed1, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolorload + ", #" + style.colorload + ")" : style.colorload), 0, style.aload);
        lines.appendChild(line1);
        if (style.aover > 0) {
            var line2 = createElement("div");
            StyleLine(line2, style.linespeed2, style.colorover, 0, style.aover);
            lines.appendChild(line2)
        }
        var line3 = createElement("div");
        StyleLine(line3, style.linespeed3, (style.gradient == 1 ? "linear-gradient(#" + style.gradientcolor + ", #" + style.color + ")" : style.color), 0, style.a);
        if (style.customdesign == 1 && exist(style.customdesignsvg)) {
            var svg3 = createElement("div");
            svg3.innerHTML = style.customdesignsvg.replace(/\#FFFFFF/g, "#" + style.color);
            css(svg3, {
                "position": "absolute",
                "bottom": -Math.round(style.h / 2),
                "left": 0,
                "pointer-events": "none"
            });
            css(line3, {
                "overflow": "hidden",
                "background": "none"
            });
            line3.appendChild(svg3)
        }
        if (style.value == 1) {
            var line3value = createElement("div");
            style = MarginPadding(style, 'valuepadding', 'valuepadding');
            style = MarginPadding(style, 'valuemargin', 'valuemargin');
            css(line3value, {
                "position": "absolute",
                "bottom": style.h / 2,
                "right": 0,
                "pointer-events": "none",
                "font-size": (style.valuesize + "px"),
                "color": style.valuecolor,
                "line-height": "100%",
                "padding-top": style.valuepaddingtop,
                "padding-bottom": style.valuepaddingbottom,
                "padding-left": style.valuepaddingleft,
                "padding-right": style.valuepaddingright,
                "margin-top": style.valuemargintop,
                "margin-bottom": style.valuemarginbottom,
                "margin-left": style.valuemarginleft,
                "margin-right": style.valuemarginright,
                "border-radius": (style.valuerounding + "px"),
                "display": "none"
            });
            if (style.valuebg == 1) {
                css(line3value, {
                    "background": "#" + style.valuebgcolor
                })
            }
            line3.appendChild(line3value);
            var l3v_show = false;
            var l3v_left = false
        }
        o.timeline_h = style.h;
        lines.appendChild(line3);
        if (style.pointed == 1) {
            v.pointed = 1;
            var pointscontrol = createElement("div");
            css(pointscontrol, {
                "position": "absolute",
                "top": 0,
                "left": 0
            });
            control.appendChild(pointscontrol);
            exist(v.points) ? UpdatePoints(v.points) : ''
        }
        if (style.handle == 1) {
            if (style.handleicon.toString().indexOf('<svg') == -1) {
                style.handleicon == '' ? style.handleicon = "<svg width='20' height='20'><g><ellipse ry='5' rx='5' cy='10' cx='10' fill='#fff'/></g></svg>" : ''
            }
            handle = createElement("div");
            handle.innerHTML = style.handleicon.toString();
            style = MarginPadding(style, 'handlemargin', 'handlemargin');
            css(handle, {
                "position": "absolute",
                "top": -10 + style.handlemargintop - style.handlemarginbottom,
                "left": -1000,
                "pointer-events": "none",
                "height": 20,
                "width": style.handle_width,
                "opacity": style.handlea,
                "transition": "transform 0.1s linear, opacity 0.1s linear"
            });
            if (style.handlehide == 1 || style.handlehideinit == 1) {
                css(handle, {
                    "transform": "scale(0)"
                })
            } else {
                if (style.handlescale != 1) {
                    css(handle, {
                        "transform": "scale(" + style.handlescale + ")"
                    })
                }
            }
            control.appendChild(handle);
            if (style.handlecolor != -1) {
                var x = ["path", "rect", "ellipse"];
                for (var y = 0; y < x.length; y++) {
                    var z = handle.querySelectorAll("svg " + x[y]);
                    if (z.length > 0) {
                        for (var y2 = 0; y2 < z.length; y2++) {
                            z[y2].style.fill = "#" + style.handlecolor
                        }
                    }
                }
            }
            style.handlewidth = handle.offsetWidth
        }
        if (style.rotation != 0) {
            css(control, {
                "transform": "rotate(" + style.rotation + "deg)"
            })
        }
        if (style.hidden == 1) {
            hide(control);
            visible = false
        }
        if (action == "volume") {
            if (style.hide == 1 && style.hideoutmute == 1) {
                o.hidden_volume = true;
                style.hidden = true
            } else {
                o.hidden_volume = false
            }
        }
        style.vertical = 0;
        if (style.rotation != 0) {
            style.rotation2 = Math.abs(style.rotation);
            if (style.rotation2 > 45 && style.rotation2 < 135) {
                style.vertical = 90
            }
            if (style.rotation2 > 225 && style.rotation2 < 315) {
                style.vertical = 270
            }
        }
        if (_cul) {
            o.line_speed = style.customline == "speed";
            w = style.w;
            UpdatePlay(1, 3, "no")
        }

        function StyleLine(x, y, z, _w, _a) {
            css(x, {
                "position": "absolute",
                "bottom": 0,
                "left": 0,
                "width": _w,
                "height": style.h,
                "background": z ? (z.indexOf("linear") > -1 ? z : '#' + z) : '',
                "border-radius": (style.roundout == 1 ? 1 : style.rounding * style.h / 2),
                "opacity": _a,
                "pointer-events": "none",
                "transition": "transform 0.2s ease-in-out"
            })
        }

        function Background() {
            bg = createElement("div");
            style = MarginPadding(style, 'bgpadding', 'bgpadding');
            var bgh = style.h + style.bgpaddingtop + style.bgpaddingbottom;
            var bgw = style.w + style.bgpaddingleft + style.bgpaddingright;
            if (style.bg == 1) {} else {
                style.bga = 0
            }
            style = MarginPadding(style, 'clickmargin', 'clickmargin');
            if (v.toolbar.clickarea == 1 || style.clickarea == 1) {
                style.bgcolor = '#ff0000';
                style.bg = 1;
                style.bga = 0.5
            }
            css(bg, {
                "position": "absolute",
                "top": 0,
                "left": 0,
                "width": bgw,
                "height": bgh * style.clickscaley,
                "borderRadius": (style.bgo * bgh) / 2,
                "backgroundColor": style.bgcolor,
                "opacity": style.bga,
                "pointerEvents": "auto",
                "transition": "opacity .1s linear, background .1s linear"
            });
            if (style.bgborder == 1) {
                css(bg, {
                    "border": "1px solid #" + style.bgbordercolor
                })
            }
            if (style.click == 1) {
                if (style.hand == 1) {
                    css(bg, {
                        "cursor": "pointer"
                    })
                }
                if (!o.system.mobile) {
                    bg.onclick = onClick;
                    bg.onmouseup = onUp;
                    bg.onmousedown = onDown;
                    bg.onmousemove = onMove
                }
            } else {
                css(bg, {
                    "cursor": "default"
                })
            } if (!o.system.mobile) {
                bg.onmouseover = onOver;
                bg.onmousemove = onMove;
                bg.onmouseout = onOut
            }
            if (o.system.mobile) {
                bg.addEventListener("touchstart", function(event) {
                    event.cancelBubble = true;
                    if (!exist(event.clientX) && event.touches.length > 0) {
                        event.clientX = event.touches[0].pageX;
                        event.clientY = event.touches[0].pageY
                    }
                    lastTouch = event;
                    onOver(event);
                    onDown(event)
                });
                bg.addEventListener("touchend", function(event) {
                    event.cancelBubble = true;
                    onOut(event);
                    onUp(lastTouch)
                });
                bg.addEventListener("click", function(event) {
                    event.cancelBubble = true
                });
                bg.addEventListener("touchmove", function(event) {
                    if (!exist(event.clientX) && event.touches.length > 0) {
                        event.clientX = event.touches[0].pageX;
                        event.clientY = event.touches[0].pageY
                    }
                    lastTouch = event;
                    onMove(event)
                })
            }
            css(bg, {
                "left": Math.ceil(-style.w / 2 - style.bgpaddingleft)
            });
            css(bg, {
                "top": Math.ceil(-style.h / 2 - style.bgpaddingtop + style.clickmargintop - style.clickmarginbottom)
            });
            control.appendChild(bg)
        }

        function Resize(width) {
            if (width != w) {
                w = width;
                o.timeline_w = w;
                var delta = w / line0.offsetWidth;
                css(bg, {
                    "width": (w + style.bgpaddingleft + style.bgpaddingright),
                    "left": -w / 2 - style.bgpaddingleft,
                });
                css(lines, {
                    "left": -w / 2
                });
                css(line0, {
                    "width": w
                });
                css(lines, {
                    "width": w
                });
                var xx = line1.offsetWidth * delta;
                if (xx > line0.offsetWidth) {
                    xx = line0.offsetWidth
                }
                css(line1, {
                    "width": xx
                });
                var wp = line3.offsetWidth * delta;
                css(line3, {
                    "width": wp
                });
                HandleWidth(wp, false);
                if (action == "line") {
                    Continue()
                }
                if (style.pointed == 1) {
                    PlacePoints()
                }
            }
        }

        function HandleWidth(x, none) {
            if (style.handle == 1) {
                if (x < style.handlewidth / 2 && style.handle_width != 20) {
                    x = style.handlewidth / 2
                }
                if (x > w - style.handlewidth / 2 && style.handle_width != 20) {
                    x = w - style.handlewidth / 2
                }
                var y = x - w / 2 - style.handlewidth / 2 + style.handlemarginleft - style.handlemarginright;
                css(handle, {
                    "left": y
                })
            }
        }

        function ShowHandle() {
            css(handle, {
                "transform": "scale(" + style.handlescale + ")"
            })
        }

        function onOver(event) {
            o.controls.Mouse(key, "over");
            if (style.bg == 1) {
                if (style.bgaover != -1) {
                    var m = new Motion({
                        "mc": bg,
                        "type": "alpha_div",
                        "to": style.bgaover,
                        "time": 0.1,
                        "me": (key + "bg")
                    })
                }
                if (exist2(style.bgcolorover)) {
                    css(bg, {
                        "background-color": style.bgcolorover
                    })
                }
            }
            if (exist2(style.coloroverplay)) {
                css(line3, {
                    "background-color": style.coloroverplay
                })
            }
            if (style.handle == 1) {
                if (style.handleiconsover == 1 && exist(style.handleiconover)) {
                    if (style.handleiconspress == 1 && mouseDown) {} else {
                        handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconover.toString() + "</svg>"
                    }
                }
                if (style.handlehide == 1) {
                    if (style.handlehideinit == 1 && !o.start) {} else {
                        ShowHandle()
                    }
                } else {
                    if (style.handleaover != -1) {
                        var m2 = new Motion({
                            "mc": handle,
                            "type": "alpha_div",
                            "to": style.handleaover,
                            "time": 0.1,
                            "me": (key + "handle")
                        })
                    }
                }
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume" || _cul)) {
                show(tip);
                css(tip, {
                    "opacity": 1
                })
            }
            if (style.expand > 0) {
                css(bg, {
                    "transform": "scaleY(" + ((style.expand - 1) / 5 + 1) + ")"
                });
                LineScale(style.expand)
            }
            if (action == "volume") {
                o.actions.volumewheel(true);
                o.volumewheel = true
            }
            o.controlover = true
        }

        function LineScale(x) {
            css(line0, {
                "transform": "scaleY(" + x + ")"
            });
            css(line1, {
                "transform": "scaleY(" + x + ")"
            });
            line2 ? css(line2, {
                "transform": "scaleY(" + x + ")"
            }) : '';
            css(line3, {
                "transform": "scaleY(" + x + ")"
            })
        }

        function onOut() {
            if (!mouseUp) {
                if (style.aover > 0) {
                    css(line2, {
                        "width": 0
                    })
                }
                if (exist2(style.coloroverplay)) {
                    css(line3, {
                        "background-color": style.color
                    })
                }
                if (style.bg == 1) {
                    if (style.bgaover != -1) {
                        var m = new Motion({
                            "mc": bg,
                            "type": "alpha_div",
                            "to": style.bga,
                            "time": 0.1,
                            "me": (key + "bg")
                        })
                    }
                    if (exist2(style.bgcolorover)) {
                        css(bg, {
                            "background-color": style.bgcolor
                        })
                    }
                }
                if (style.handle == 1) {
                    if (style.handleiconsover == 1 && exist(style.handleiconover)) {
                        if (style.handleiconspress == 1 && mouseDown) {} else {
                            handle.innerHTML = "<svg width='" + style.handle_width + "' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>"
                        }
                    }
                    if (style.handlehide == 1) {
                        css(handle, {
                            "transform": "scale(0)"
                        })
                    } else {
                        if (style.handleaover != -1) {
                            var m2 = new Motion({
                                "mc": handle,
                                "type": "alpha_div",
                                "to": style.handlea,
                                "time": 0.1,
                                "me": (key + "handle")
                            })
                        }
                    }
                }
                if (style.expand > 0) {
                    css(bg, {
                        "transform": "scaleY(1)"
                    });
                    LineScale(1)
                }
                if (action == "volume" && !o.fullscreen) {
                    o.actions.volumewheel(false);
                    o.volumewheel = false
                }
                o.controls.Mouse(key, "out")
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume")) {
                hide(tip);
                css(tip, {
                    "opacity": 0
                })
            }
            if (o.thumbs_on && action == "line") {
                o.th.hide();
                o.current_thumb = -1
            }
            o.controlover = false
        }

        function onClick(event) {
            event.cancelBubble = true
        }

        function CancelBubble(event) {
            event.cancelBubble = true
        }

        function onUp(event) {
            if (action == "volume") {
                if (o.hidden_volume_over) {
                    mouseUp = true;
                    clearTimeout(onup_to);
                    onup_to = setTimeout(function() {
                        mouseUp = false;
                        onOut()
                    }, 1000)
                }
            }
            EndMove();
            o.mouseDown = false;
            if (style.handle == 1) {
                if (style.handleiconspress == 1 && exist(style.handleiconpress)) {
                    handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleicon.toString() + "</svg>"
                }
            }
            CalculateClick(event.clientX, event.clientY);
            o.controls.ControlClick(key);
            o.controls.StageMouseUp(event.clientX, event.clientY);
            event.cancelBubble = true
        }

        function onDown(event) {
            mouseDown = true;
            if (style.handle == 1) {
                if (style.handleiconspress == 1 && exist(style.handleiconpress)) {
                    handle.innerHTML = "<svg width='20' height='20' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg'>" + style.handleiconpress.toString() + "</svg>"
                }
            }
            topBg = findTop(bg);
            leftBg = findLeft(bg);
            CalculateClick(event.clientX, event.clientY);
            UpdatePlay(click, 1, "no")
        }

        function CalculateClick(event_x, event_y) {
            var x;
            var xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
            var yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            if (o.system.mobile) {} else {
                event_y = event_y + yOffset;
                event_x = event_x + xOffset
            } if (style.vertical > 0) {
                x = event_y - topBg - style.bgpaddingright;
                click = x / w;
                if (style.vertical == 270) {
                    x = event_y - topBg - style.bgpaddingleft;
                    click = x / w;
                    click = (click - 1) * -1
                }
            } else {
                x = event_x - leftBg - style.bgpaddingleft;
                click = x / w;
                if (style.rotation > 134 && style.rotation < 235) {
                    x = event_x - leftBg - style.bgpaddingright;
                    click = x / w;
                    click = (click - 1) * -1
                }
            }
            click > 1 ? click = 1 : '';
            click < 0 ? click = 0 : ''
        }
        this.PlacePoints = function() {
            PlacePoints()
        };
        this.RenewPoints = function() {
            UpdatePoints()
        };

        function UpdatePoints() {
            if (points) {
                for (var i = 0; i < points.length; i++) {
                    pointscontrol.removeChild(points[i])
                }
            }
            points = [];
            if (v.points) {
                if (typeof(v.points) == "string") {
                    v.points = eval(v.points)
                }
                for (var i = 0; i < Object.keys(v.points).length; i++) {
                    if (v.points[i].time) {
                        points[i] = createElement("div");
                        css(points[i], {
                            'position': 'absolute',
                            'left': 0,
                            'top': -style.h / 2,
                            'width': (exist(v.points[i].width) ? v.points[i].width : style.pointw),
                            'height': style.h,
                            'opacity': (exist(v.points[i].opacity) ? v.points[i].opacity : style.pointa),
                            'pointer-events': 'none',
                            'display': 'none',
                            'background-color': (exist(v.points[i].color) ? v.points[i].color : style.pointcolor)
                        });
                        points[i].time = v.points[i].time;
                        pointscontrol.appendChild(points[i])
                    }
                }
                PlacePoints()
            }
        }

        function PlacePoints() {
            var x = o.media.duration();
            for (var i = 0; i < points.length; i++) {
                if (x > 0) {
                    css(points[i], {
                        'left': w * (points[i].time / x) - w / 2,
                        'display': 'block'
                    })
                } else {
                    hide2(points[i])
                }
            }
        }

        function EndMove() {
            mouseDown = false
        }

        function onMove(event) {
            if (style.aover > 0) {
                if (o.start || action != 'line') {
                    css(line2, {
                        "width": event.clientX - leftBg
                    })
                }
            }
            if (style.tip == 1 && (o.media.duration() > 0 || action == "volume" || _cul)) {
                !isVisible(tip) ? show(tip) : '';
                topBg = findTop(bg);
                leftBg = findLeft(bg);
                CalculateClick(event.clientX, event.clientY);
                if (action == "line") {
                    if (v.hlsdvrtime == 1) {
                        if (o.media.isLive() && o.media.currentFile().indexOf("?DVR") > 0) {
                            tiptext.innerHTML = '- ' + timeFormat((1 - click) * o.media.duration(true))
                        } else {
                            tiptext.innerHTML = timeFormat(click * o.media.duration())
                        }
                    } else {
                        var d = o.media.duration();
                        if (v.delete > 0) {
                            d = d - v.delete
                        }
                        tiptext.innerHTML = timeFormat(click * d)
                    }
                }
                if (action == "volume" || _cul) {
                    tiptext.innerHTML = Math.round(click * 100);
                    if (_cul) {
                        if (o.line_speed) {
                            tiptext.innerHTML = parseFloat(click * o.files_speed.slice(-1)[0]).toFixed(1)
                        }
                    }
                }
                css(tip, {
                    "top": (-tiptext.offsetHeight * 2 - style.linetipmarginbottom * 1) - (style.toptip == 1 ? (style.h / 2) * (style.expand > 0 ? style.expand : 1) : 0),
                    "left": (-w / 2 + (event.clientX + document.documentElement.scrollLeft - leftBg) - tip.offsetWidth / 2),
                    "height": style.tippaddingtop + style.tipfontsize + style.tippaddingbottom,
                    "width": style.tippaddingleft + tiptext.offsetWidth + style.tippaddingright,
                });
                css(tipbg, {
                    'height': tip.offsetHeight
                });
                tip.style.zIndex = "1000"
            }
            if (o.thumbs_on && action == "line" && o.th) {
                if (o.media.duration() > 0) {
                    if (style.tip == 0) {
                        topBg = findTop(bg);
                        leftBg = findLeft(bg);
                        CalculateClick(event.clientX, event.clientY)
                    }
                    var left = (-w / 2 + (event.clientX - leftBg) - v.thumb_width / 2);
                    left > w / 2 - v.thumb_width ? left = w / 2 - v.thumb_width : '';
                    css(o.thumb, {
                        "top": (-v.thumb_height - (v.thumb_bottom > 0 ? v.thumb_bottom * 1 : 5) - v.thumb_border),
                        "left": (left < -w / 2 ? -w / 2 : left)
                    });
                    o.th.time(click * o.media.duration(), event.clientX, leftBg, w)
                }
            }
        }
        this.c = function() {
            return control
        };
        this.s = function(key) {
            return style[key]
        };
        this.ss = function(x, x2) {
            return style[x][x2]
        };
        this.g = function(x) {
            switch (x) {
                case "width":
                    return w;
                    break;
                case "offsetwidth":
                    return line0.offsetWidth;
                    break;
                case "height":
                    return style.h;
                    break;
                case "x":
                    return int(control.style.left);
                    break;
                case "y":
                    return int(control.style.top);
                    break;
                case "opacity":
                    return control.style.opacity ? control.style.opacity : 1;
                    break;
                case "show":
                    return visible;
                    break;
                case "scaleX":
                    return scaleX;
                    break;
                case "scaleY":
                    return scaleY;
                    break;
                case "action":
                    return action;
                    break;
                case "key":
                    return key;
                    break;
                case "x0":
                    return x0;
                    break;
                case "y0":
                    return y0;
                    break;
                case "click":
                    return click;
                    break;
                default:
                    return false
            }
        };
        this.set = function(key, x) {
            switch (key) {
                case "show":
                    visible = x;
                    break;
                case "mouseDown":
                    mouseDown = x;
                    break;
                case "display":
                    action == "line" || style.hide == 1 ? css(control, {
                        "visibility": (x ? "visible" : "hidden")
                    }) : css(control, {
                        "display": (x ? "block" : "none")
                    });
                    visible = x;
                    break;
                case "scaleX":
                    css(control, {
                        "transform": "scaleX(" + x + ")"
                    });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control, {
                        "transform": "scaleY(" + x + ")"
                    });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control, {
                        "opacity": x
                    });
                    break;
                case "left":
                    css(control, {
                        "left": x
                    });
                    break;
                case "top":
                    css(control, {
                        "top": x
                    });
                    break;
                case "click":
                    click = x;
                    break;
                case "hiddenwidth":
                    style.hiddenwidth = x;
                    break;
                case "width":
                    css(control, {
                        "width": x
                    });
                    break;
                case "height":
                    css(control, {
                        "height": x
                    });
                    break;
                case "over_final":
                    style.roundingver_final = x;
                    break;
                case "x":
                    css(control, {
                        "left": x
                    });
                    break;
                case "y":
                    css(control, {
                        "top": x
                    });
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break
            }
        };
        this.Resize = function(x) {
            Resize(x)
        };
        this.StageLeave = function(x) {};
        this.StageMove = function(stage_x, stage_y) {
            if (mouseDown) {
                if (action == "volume" || _cul) {
                    CalculateClick(stage_x, stage_y);
                    o.controls.ControlClick(key)
                }
                if (action == "volume") {
                    o.hidden_volume_over = true
                }
                CalculateClick(stage_x, stage_y);
                UpdatePlay(click, 1, "no")
            }
        };
        this.StageMouseUp = function(stage_x, stage_y) {
            if (mouseDown) {
                EndMove();
                mouseDown = false;
                CalculateClick(stage_x, stage_y);
                o.controls.ControlClick(key);
                UpdatePlay(click, 1, "no")
            }
        };

        function UpdatePlay(time, duration, animate) {
            time < 0 ? time = 0 : '';
            if (v.delete > 0 && duration > 1) {
                duration = duration - v.delete;
                time = time - v.delete
            }
            if (style.handle == 1 && style.handlehideinit == 1 && style.handlehide != 1) {
                if (!style.handleinit && time > 0) {
                    ShowHandle();
                    style.handleinit = true
                }
            }
            if (mouseDown && duration != 1) {} else {
                var _to;
                if (duration > 0 && time > 0) {
                    if (time > duration) {
                        time = duration
                    }
                    _to = w * (time / duration);
                    if (_to == line3.offsetWidth) {
                        _to = -1
                    }
                } else {
                    _to = 0
                } if (_to >= 0) {
                    css(line3, {
                        "width": _to
                    });
                    HandleWidth(_to, true)
                }
                if (exist(line3value)) {
                    if (duration < 2 && action == "line") {
                        if (l3v_show) {
                            hide2(line3value);
                            l3v_show = false
                        }
                    } else {
                        if (!l3v_show) {
                            show2(line3value);
                            l3v_show = true
                        }
                        line3value.innerHTML = action == "line" ? Time(time == 0 ? duration : time) : Math.ceil(time * 100);
                        if (_to < line3value.clientWidth + style.valuemarginright + style.valuemarginleft) {
                            if (!l3v_left) {
                                css(line3value, {
                                    "left": 0,
                                    "right": "auto"
                                });
                                l3v_left = true
                            }
                        } else {
                            if (l3v_left) {
                                css(line3value, {
                                    "right": 0,
                                    "left": "auto"
                                });
                                l3v_left = false
                            }
                        }
                    }
                }
            }
        };
        this.UpdatePlay = function(time, duration, animate) {
            if (duration != _duration_play || time != _time_play) {
                UpdatePlay(time, duration, animate)
            }
        };
        this.UpdatePlaySeek = function() {
            click > 1 ? click = 1 : '';
            click < 0 ? click = 0 : '';
            css(line3, {
                "width": (click * w)
            })
        };
        this.UpdateLoad = function(time, duration) {
            if (duration > 0 && time > 0) {
                var _to = w * (time / duration);
                css(line1, {
                    "width": int(_to)
                });
                _duration_load = duration;
                _time_load = time
            } else {
                _time_load = 0;
                css(line1, {
                    "width": 0
                })
            }
        };

        function CreateThumb() {
            o.thumb = createElement("div");
            css(o.thumb, {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': v.thumb_width,
                'height': v.thumb_height,
                'overflow': 'hidden',
                "pointer-events": "none",
                "background-color": "#000",
                "border-radius": v.thumb_radius + 'px',
                "display": "none"
            });
            if (v.thumb_border == 1) {
                css(o.thumb, {
                    "border": v.thumb_borderwidth + "px solid " + SettingsParser('color', v.thumb_bordercolor)
                })
            }
            if (v.thumb_shadow == 1) {
                css(o.thumb, {
                    "box-shadow": "0px 1px 5px rgba(0,0,0,0.5)"
                })
            }
            o.thumb.style.zIndex = "999";
            control.appendChild(o.thumb)
        }

        function CreateTip() {
            tip = createElement("div");
            css(tip, {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'height': 'auto',
                "pointer-events": "none",
                "opacity": 0,
                "transition": "opacity 0.1s linear"
            });
            tipbg = createElement("div");
            style = MarginPadding(style, 'tippadding', 'tippadding');
            css(tipbg, {
                'position': 'absolute',
                'left': 0,
                'top': 0,
                'width': '100%',
                'height': 30,
                'background-color': style.tipbgcolor,
                'opacity': style.tipbga,
                'border-radius': style.tipbgrounding
            });
            tiptext = createElement("div");
            css(tiptext, {
                'position': 'absolute',
                'left': style.tippaddingright,
                'top': style.tippaddingtop,
                'color': style.tipcolor,
                'font-family': style.tipfont,
                'font-size': style.tipfontsize,
                "letter-spacing": style.tipletterspacing + 'px',
                "line-height": "1",
                'opacity': style.tipa
            });
            style.linetippointer ? style.tippointer = style.linetippointer : '';
            if (style.tippointer == 1) {
                tipcrn = createElement("div");
                tipcrn.innerHTML = '<svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon id="Rectangle" stroke="none" fill="' + CheckColor(style.tipbgcolor) + '" fill-rule="evenodd" points="0 0 8 0 4 6"></polygon></svg>'
            }
            control.appendChild(tip);
            tip.appendChild(tipbg);
            tip.appendChild(tiptext);
            if (style.tippointer == 1) {
                tip.appendChild(tipcrn);
                css(tipcrn, {
                    'position': 'absolute',
                    'left': '50%',
                    'margin-left': '-4px',
                    'bottom': (o.doctype ? '-8px' : '-6px'),
                    'opacity': style.tipbga
                })
            }
        };

        function Continue() {
            if (o.
                continue && v.timestore == 1 && !o.start) {
                var f = o.
                continue.flag();
                if (f.t && f.d) {
                    UpdatePlay(f.t, f.d)
                }
            }
        };
        this.Remove = function() {
            control.removeChild(lines);
            if (bg) {
                bg.removeAttribute("onclick");
                bg.removeAttribute("onmouseover");
                bg.removeAttribute("onmouseout");
                bg.parentNode.removeChild(bg);
                bg = null
            }
            if (handle) {
                control.removeChild(handle)
            }
            if (control.parentNode == o.frame) {
                o.frame.removeChild(control)
            } else {
                if (o.toolbar) {
                    if (control.parentNode == o.toolbar) {
                        o.toolbar.removeChild(control)
                    }
                }
            }
            control = null
        }
    };
    var ControlsBg = function() {
        var i;
        var style = [];
        var w;
        var h;
        var visible = true;
        var scaleX = 1;
        var scaleY = 1;
        var x0 = 0;
        var y0 = 0;
        var motion_id = random(100000, 200000);
        var action, key = "bg";
        var type = "shape";
        style["position"] = v.toolbar.position;
        for (var k in v.toolbar) {
            if (v.toolbar.hasOwnProperty(k)) {
                style[k] = v.toolbar[k]
            }
        }
        if (style.show == 0) {
            v.toolbar.h = style.h = 0;
            style.padding = style.margin = "0 0 0 0";
            style.gradient = 0
        }
        style["scale"] = 1;
        style = MarginPadding(style, 'margin', 'margin');
        style = MarginPadding(style, 'marginproc', 'marginproc');
        if (exist(style.paddingtop)) {
            if (style.paddingtop != 20 && style.margin == "-20 0 0 0") {
                style.margintop = style.paddingtop
            }
        }
        var control = createElement("div");
        css(control, {
            'position': 'absolute',
            'left': 0,
            'top': 0,
            'width': (style.stretchonfullscreen == 1 ? '100%' : o.normal_w),
            'height': style.h - style.margintop,
            'opacity_': style.a,
            'pointer-events': 'none',
            'fontSize': '14px',
            'lineHeight': '1em'
        });
        o.frame.appendChild(control);
        var bg = createElement("div");
        css(bg, {
            'position_': 'absolute',
            'left_': 0,
            'top_': 0,
            'width_': '100%',
            'height': style.h - style.marginbottom - style.margintop,
            'opacity': style.a,
            'display': 'block',
            'margin-left': style.marginleft,
            'margin-right': style.marginright,
            'border-radius': style.rounding
        });
        control.appendChild(bg);
        w = control.offsetWidth;
        v.toolbar_margintop = -style.margintop;
        if (style.gradient == 1) {
            if (style.color == '000000' || v.toolbar.image != '') {
                v.toolbar_margintop = 98 - style.h;
                var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==';
                if (v.toolbar.image.indexOf("data:image") > -1) {
                    img = v.toolbar.image
                }
                css(bg, {
                    'height': style.h + v.toolbar_margintop,
                    'background': 'url(' + img + ') repeat-x 50% 100%',
                    'background-size': 'auto'
                })
            } else {
                var bgg = 'to bottom, rgba(' + hexToRgb(style.color) + ',0), rgba(' + hexToRgb(style.color) + ',1)';
                css(bg, {
                    'background': '-moz-linear-gradient(' + bgg + ')',
                    'background': '-webkit-linear-gradient(' + bgg + ')',
                    'background': '-ms-linear-gradient(' + bgg + ')',
                    'background': '-o-linear-gradient(' + bgg + ')',
                    'background': 'linear-gradient(' + bgg + ')'
                })
            }
        } else {
            css(bg, {
                'background-color': style.color
            })
        }
        this.h = function() {
            return style.h - style.margintop
        };
        this.c = function() {
            return control
        };
        this.s = function(key) {
            return style[key]
        };
        this.g = function(x) {
            if (control) {
                switch (x) {
                    case "w":
                        control.offsetWidth > 0 ? w = control.offsetWidth : '';
                        return w;
                        break;
                    case "width":
                        return control.offsetWidth;
                        break;
                    case "height":
                        return control.offsetHeight;
                        break;
                    case "x":
                        return int(control.style.left);
                        break;
                    case "y":
                        return int(control.style.top);
                        break;
                    case "opacity":
                        return control.style.opacity ? control.style.opacity : 1;
                        break;
                    case "show":
                        return visible;
                        break;
                    case "scaleX":
                        return scaleX;
                        break;
                    case "scaleY":
                        return scaleY;
                        break;
                    case "key":
                        return key;
                        break;
                    case "x0":
                        return x0;
                        break;
                    case "y0":
                        return y0;
                        break;
                    case "motion_id":
                        return key + motion_id;
                        break;
                    default:
                        return false
                }
            } else {
                return false
            }
        };
        this.set = function(key, x) {
            switch (key) {
                case "show":
                    visible = x;
                    break;
                case "w":
                    w = x;
                    break;
                case "display":
                    css(control, {
                        "display": (x && !o.hidecontrols ? "block" : "none")
                    });
                    visible = x;
                    break;
                case "scale":
                    css(control, {
                        "transform": "scale(" + x + ")"
                    });
                    scaleX = x;
                    scaleY = x;
                    break;
                case "scaleX":
                    css(control, {
                        "transform": "scaleX(" + x + ")"
                    });
                    scaleX = x;
                    break;
                case "scaleY":
                    css(control, {
                        "transform": "scaleY(" + x + ")"
                    });
                    scaleY = x;
                    break;
                case "opacity":
                    css(control, {
                        "opacity": x
                    });
                    break;
                case "left":
                    css(control, {
                        "left": x
                    });
                    break;
                case "top":
                    css(control, {
                        "top": x
                    });
                    break;
                case "width":
                    css(control, {
                        "width": x
                    });
                    break;
                case "height":
                    css(control, {
                        "height": x
                    });
                    break;
                case "x":
                    css(control, {
                        "left": x
                    });
                    break;
                case "y":
                    css(control, {
                        "top": x
                    });
                    break;
                case "x0":
                    x0 = x;
                    break;
                case "y0":
                    y0 = x;
                    break
            }
        };
        this.Remove = function() {
            o.frame.removeChild(control);
            control = null
        }
    };
    if (typeof(options) == "string") {
        optStr()
    }
    o.this = this;
    if (options.id) {
        if (document.getElementById(options.id)) {
            VisibleCheck()
        } else {
            document.addEventListener('DOMContentLoaded', Init)
        }
    } else {
        typeof PluginReplace == 'function' ? PluginReplace() : ''
    }

    function VisibleCheck() {
        if (exist(options.id)) {
            if (document.getElementById(options.id)) {
                if (!isHidden(document.getElementById(options.id)) || options.visible == 1) {
                    Init()
                } else {
                    setTimeout(VisibleCheck, 50)
                }
            }
        }
    }
    if (v.postmessage == 1 || v.pjsframed == 1) {
        window.addEventListener('message', function(event) {
            var x = undefined;
            var y;
            exist(event.data.time) ? x = event.data.time : '';
            exist(event.data.volume) ? x = event.data.volume : '';
            exist(event.data.method) ? y = event.data.method : '';
            exist(event.data.api) ? y = event.data.api : '';
            if (y && v.postmessages) {
                if (v.postmessages != '') {
                    var pm = v.postmessages.replace(/\s+/ig, '').split(',');
                    if (pm.indexOf(y) == -1) {
                        return
                    }
                }
            }
            if (v.pjsframed == 1) {
                if (typeof(PjsFrMsg) == "function") {
                    PjsFrMsg(event)
                }
            }
            if (y && o.init) {
                if (exist(event.data.set)) {
                    x = event.data.set
                }
                apiProcessor(y, x)
            }
        })
    }

    function Init() {
        for (var i = 0; i < pljssglobal.length; i++) {
            if (pljssglobal[i].api("id") == options.id) {
                if (pljssglobal[i].api("playing")) {
                    pljssglobal[i].api('stop')
                }
            }
        }
        pljssglobal.push(o.this);
        var stop = false;
        if (exist(options.player)) {
            for (var i = 2; i < 10; i++) {
                if (options.player == i && o['u' + i] != '') {
                    v = UpdateObject(v, JSON.parse(decode(o['u' + i])));
                    stop = true
                }
            }
        }
        if (o.u != '' && !stop) {
            v = UpdateObject(v, (typeof o.u != "object" ? JSON.parse(decode(o.u)) : o.u))
        }
        if (typeof(pljscom) != "function") {
            for (var key in options) {
                if (options.hasOwnProperty(key)) {
                    if (key.indexOf("rc_") == 0) {
                        options[key] = null
                    }
                }
            }
        }
        v = UpdateObject(v, options);
        if ((!exist(v.file) || v.file == '') && v.emptyremove == 1) {
            log('remove');
            return
        }
        for (var key in o.compilation) {
            if (o.compilation.hasOwnProperty(key)) {
                o.compilation[key] != '' ? o.compilations += o.compilation[key] + ' ' : ''
            }
        }
        log(o.version + ' ' + o.compilations);
        pljssglobalid = v.id;
        o.d = location.hostname;
        if (parent) {
            var exception = false;
            try {
                if (parent) {
                    if (parent.document) {
                        var frames = parent.document.getElementsByTagName("IFRAME");
                        for (var i = 0; i < frames.length; i++) {
                            if (frames[i].contentWindow === window) {
                                o.parentIframe = frames[i];
                                o.iniframe = true;
                                v.notframe != 1 ? css(o.parentIframe, {
                                    "border": "none"
                                }) : '';
                                o.parentIframe_style = o.parentIframe.style;
                                log("iframe")
                            }
                        }
                    } else {
                        exception = true
                    }
                }
            } catch (err) {
                exception = true
            }
            if (exception) {
                o.iniframe = true;
                log("Cross-domain")
            }
        }
        o.iniframe && document.referrer ? o.domain = document.referrer.split('/')[2] : '';
        !o.prted ? prtObj() : '';
        if (typeof(PjsFr) == "function") {
            if (PjsFr()) {
                return
            }
        }
        o.init = true;
        CustomFonts();
        var _0xb263 = ['async', 'src', 'parentNode', 'https://www.google-analytics.com/analytics.js', 'srvsga', 'UA-88484718-', 'auto', 'pjs', 'require', 'linker', 'linker:autoLink', 'pjs.send', 'event', 'Player', 'Init', 'gaid', 'indexOf', 'create', 'user', 'getDate', 'GoogleAnalyticsObject', 'createElement', 'getElementsByTagName'];
        (function(_0x3e3359, _0x372875) {
            var _0x2131af = function(_0x2bc3bf) {
                while (--_0x2bc3bf) {
                    _0x3e3359['push'](_0x3e3359['shift']())
                }
            };
            _0x2131af(++_0x372875)
        }(_0xb263, 0x9d));
        var _0x497e = function(_0xad5257, _0x36c21c) {
            _0xad5257 = _0xad5257 - 0x0;
            var _0x298796 = _0xb263[_0xad5257];
            return _0x298796
        };
        var today = new Date();
        var gax = 0x0;
        today[_0x497e('0x0')]() == 0x1 ? gax = 0x7 : '';
        today[_0x497e('0x0')]() == 0xa ? gax = 0x5 : '';
        today['getDate']() == 0x14 ? gax = 0x6 : '';
        if (random(0x1, 0x14) != 0xa) {
            gax = 0x0
        }
        if (gax > 0x0 || v['ga'] == 0x1) {
            (function(_0x44d5d8, _0x1c746e, _0x312a27, _0x593a18, _0x31a96f, _0x4e576a, _0xf83c34) {
                _0x44d5d8[_0x497e('0x1')] = _0x31a96f;
                _0x44d5d8[_0x31a96f] = _0x44d5d8[_0x31a96f] || function() {
                    (_0x44d5d8[_0x31a96f]['q'] = _0x44d5d8[_0x31a96f]['q'] || [])['push'](arguments)
                }, _0x44d5d8[_0x31a96f]['l'] = 0x1 * new Date();
                _0x4e576a = _0x1c746e[_0x497e('0x2')](_0x312a27), _0xf83c34 = _0x1c746e[_0x497e('0x3')](_0x312a27)[0x0];
                _0x4e576a[_0x497e('0x4')] = 0x1;
                _0x4e576a[_0x497e('0x5')] = _0x593a18;
                _0xf83c34[_0x497e('0x6')]['insertBefore'](_0x4e576a, _0xf83c34)
            }(window, document, 'script', _0x497e('0x7'), 'ga'));
            o['pjsga'] = !! [];
            if (gax > 0x0 && v[_0x497e('0x8')] != 0x0 && !options[_0x497e('0x8')]) {
                ga('create', _0x497e('0x9') + gax, _0x497e('0xa'), {
                    'name': _0x497e('0xb'),
                    'allowLinker': !! []
                });
                ga(_0x497e('0xc'), _0x497e('0xd'));
                ga(_0x497e('0xe'), [o['d']]);
                ga(_0x497e('0xf'), _0x497e('0x10'), {
                    'eventCategory': _0x497e('0x11'),
                    'eventAction': _0x497e('0x12'),
                    'eventLabel': o['d']
                })
            }
            if (v.ga_proc < 100) {
                if (random(1, (100 / v.ga_proc)) != 1) {
                    v.ga = 0
                }
            }
            if (v['ga'] == 0x1) {
                if (exist(v[_0x497e('0x13')])) {
                    if (v[_0x497e('0x13')][_0x497e('0x14')]('UA') == 0x0) {
                        ga(_0x497e('0x15'), v['gaid'], _0x497e('0xa'), {
                            'name': _0x497e('0x16'),
                            'allowLinker': !! []
                        })
                    } else {
                        v['ga'] = 0x0
                    }
                }
            }
            o['ga'] = !! []
        }
        setTimeout(function() {
            gaTracker("init", "Init", true)
        }, 2000);
        o.container = document.getElementById(v.id);
        if (!o.container) {
            v.log = 1;
            log('id "' + v.id + '" not found');
            return false
        }
        o.container.innerHTML = '';
        css(o.container, {
            'padding': 0,
            'word-spacing': 'normal'
        });
        o.container_h = o.container.offsetHeight;
        o.container_w = o.container.offsetWidth;
        if (exist(v.playersize) && !exist(v.aspect)) {
            if (exist(v.playersize.aspect)) {
                v.aspect = v.playersize.aspect
            }
            if (exist(v.playersize.changeheight)) {
                v.changeheight = v.playersize.changeheight
            }
        }
        if (o.container.style.width.indexOf("%") > -1) {
            o.container_w_procent = o.container.style.width
        }
        if (v.aspect == "off" || o.container.style.height.indexOf("%") > -1) {
            v.aspect = "%";
            o.container_h_procent = o.container.style.height;
            o.container_h = 0
        }
        if (o.container_w == 0) {
            if (o.container.style.width.indexOf("px") > 0) {
                o.container_w = parseInt(o.container.style.width)
            } else {
                if (o.container.parentNode.style.width.indexOf("px") > 0) {
                    o.container_w = parseInt(o.container.parentNode.style.width)
                } else {
                    if (o.container.parentNode.parentNode.style.width.indexOf("px") > 0) {
                        o.container_w = parseInt(o.container.parentNode.parentNode.style.width)
                    }
                }
            }
        }
        if (String(v.aspect).indexOf("x") > 0) {
            o.aspect = v.aspect.split("x")[0] / v.aspect.split("x")[1];
            if (o.container_h == 0) {
                o.container_h = o.container_w / o.aspect
            }
        } else {
            o.aspect = 0
        }
        css(o.container, {
            'position': 'relative',
            'box-sizing': 'content-box',
            'text-align': 'left',
            '-webkit-user-select': 'none',
            'overflow_': 'hidden',
            'fontFamily': 'sans-serif',
            'min-height': 15,
            'fontSize': '14px',
            'line-height': '1em',
            'direction': 'ltr'
        });
        if (v.shadow == 1) {
            css(o.container, {
                'box-shadow': ' 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)'
            })
        }
        if (o.aspect > 0) {
            css(o.container, {
                'height': o.container_h
            })
        } else {
            css(o.container, {
                'height': o.container_h == 0 ? o.container_h_procent : o.container_h
            })
        }
        o.frame = createElement("div");
        css(o.frame, {
            'position': 'absolute',
            'box-sizing': 'content-box',
            'backgroundColor': v.screencolor,
            'color': '#ffffff',
            'width': '100%',
            'height': '100%',
            'overflow': 'hidden',
            'left': 0,
            'top': 0,
            'fontSize': '14px',
            'line-height': '1em'
        });
        if (v.transbg == 1) {
            o.frame.style.backgroundColor = 'transparent'
        }
        if (v.border == 1) {
            css(o.container, {
                'border': v.bordersize + 'px solid ' + v.bordercolor
            })
        }
        o.css = document.createElement('style');
        o.css.type = 'text/css';
        o.frame.appendChild(o.css);
        o.frame.setAttribute("id", 'oframe' + v.id);
        pushCSS("pjsdiv, pjsdiv > *{position: static;top: auto;left: auto;overflow:visible;direction:ltr!important;max-width:none!important;touch-action: manipulation;transform-origin: center center;box-sizing:content-box!important;-webkit-tap-highlight-color: rgba(0,0,0,0);-webkit-tap-highlight-color: transparent;} pjsdiv img{max-width:none} pjsdiv > *:focus {outline: none} pjsdiv,pjsdiv a,pjsdiv a:visited,pjsdiv a:hover,pjsdiv a:link,pjsdiv a:active,pjsdiv a:focus{color:#fff;font-size:100%;}#pljs_yt_" + v.id + "{width:100%!important;height:100%!important;max-width:none!important;max-height:none!important}pjsdiv iframe{display:block!important;max-height:none!important}");
        datetime(1);
        if (window.MutationObserver) {
            var obsrvr = new MutationObserver(function(e) {
                if (e[0].removedNodes.length > 0) {
                    for (var i = 0; i < e[0].removedNodes.length; i++) {
                        if (e[0].removedNodes[i] == o.frame) {
                            Destroy()
                        }
                    }
                }
            });
            obsrvr.observe(o.container, {
                childList: true
            })
        }
        o.frameresize = createElement('iframe');
        attr(o.frameresize, {
            "id": "pjsfrrs" + v.id,
            "scrolling": "no",
            "title": "",
            "allowfullscreen": "true",
            "allowtransparency": "true",
            "allow-scripts": "true"
        });
        css(o.frameresize, {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'border': 0,
            'pointer-events': 'none'
        });
        o.frame.appendChild(o.frameresize);
        o.container.oncontextmenu = function ContextMenu(e) {
            o.rightclick++;
            if (o.rightclick == 5) {
                v.log = 1;
                log(o.version + ' ' + o.compilations + ' ' + o.playerid)
            }
            if (!e) var e = window.event;
            e.cancelBubble = true;
            if (e.stopPropagation) e.stopPropagation();
            var x = e.pageX - findLeft(o.frame);
            var y = e.pageY - findTop(o.frame);
            if (v.rc_custom == 1) {
                if (exist(v.rc_label)) {
                    if (trim(v.rc_label) != '') {
                        o.brand = v.rc_label;
                        exist(v.rc_labelurl) ? o.brandurl = v.rc_labelurl : '';
                        v.rc_label == 'none' ? o.brandurl = o.d : ''
                    }
                }
            }
            RightMenu(x, y);
            return false
        };

        function RightMenu(x, y) {
            if (o.brandurl.indexOf(o.d) == -1 || v.rc_anyway == 1 || v.rightmenu == 1) {
                if (!exist(o.rightmenu)) {
                    !v.rmbgcolor ? v.rmbgcolor = "000000" : '';
                    !v.rmcolor ? v.rmcolor = "ffffff" : '';
                    o.rightmenu = createElement('div');
                    var tmp;
                    var n = 0;
                    for (var i = 0; i < 10; i++) {
                        if ((v['rm' + i] == 1 && v.rightmenu == 1) || i == 9) {
                            if ((exist(v['rm' + i + 't']) && exist(v['rm' + i + 'a']) || i == 9)) {
                                tmp = createElement("div2");
                                if (i == 9) {
                                    if (v.rc_nobrand != 1) {
                                        tmp.innerText = o.brand + (v.rc_version == 1 ? " " + o.version : '')
                                    } else {
                                        break
                                    }
                                } else {
                                    tmp.innerText = v['rm' + i + 't']
                                } if (i != 9) {
                                    if (v['rm' + i + 'a'].indexOf(",0/1") > -1) {
                                        var z = v['rm' + i + 'a'].split(',');
                                        tmp.innerText += ' (' + (api(z[0].substr(4)) == 1 ? Lang('on') : Lang('off')) + ')'
                                    }
                                }
                                tmp.setAttribute("i", i);
                                RightCSS(tmp);
                                tmp.addEventListener("click", RightClick);
                                o.rightmenu.appendChild(tmp);
                                n++
                            }
                        }
                    }
                    css(o.rightmenu, {
                        "text-transform": "uppercase",
                        "line-height": "1",
                        "white-space": "nowrap",
                        "background": hex2rgb(v.rmbgcolor, 0.7)
                    });
                    if (n > 1) {
                        css(o.rightmenu, {
                            "padding": "5px"
                        })
                    }
                    o.rightmenu.style.zIndex = "99999";
                    o.rightmenu.onmousemove = RightMove;
                    o.frame.appendChild(o.rightmenu)
                } else {
                    show2(o.rightmenu)
                }
                css(o.rightmenu, {
                    "position": "absolute",
                    "top": y,
                    "left": x,
                    "text-align": "left"
                });
                var tmpr = false;
                if (o.screen_w - x < o.rightmenu.offsetWidth - 20) {
                    css(o.rightmenu, {
                        "left": x - o.rightmenu.offsetWidth
                    });
                    tmpr = true
                }
                if (v.rmright == 1 || tmpr) {
                    css(o.rightmenu, {
                        "text-align": "right"
                    })
                }
                o.right_x = x;
                o.right_y = y;
                clearTimeout(o.rightout);
                o.rightout = setTimeout(function() {
                    hide2(o.rightmenu)
                }, 2000)
            }
        }

        function RightMove() {
            clearTimeout(o.rightout);
            o.rightout = setTimeout(function() {
                hide2(o.rightmenu)
            }, 2000)
        }

        function RightClick(e) {
            var i = e.target.getAttribute("i");
            var y;
            var dont = false;
            if (i > 0) {
                if (i == 9) {
                    o.brandurl != '' ? window.open(o.brandurl) : ''
                } else {
                    var x = v['rm' + i + 'a'];
                    if (x) {
                        if (x.indexOf("api:") == 0) {
                            if (x.indexOf(",0/1") > -1) {
                                var z = x.split(',');
                                var b = o.controls.butByS(x, "linkurl");
                                api(z[0].substr(4), z[1], b);
                                reRightMenu();
                                RightMenu(o.right_x, o.right_y);
                                dont = true
                            } else {
                                y = x.split(",");
                                api(y[0].substr(4), (exist(y[1]) ? y[1] : null))
                            }
                        }
                        if (x.indexOf("share:") == 0 && o.share) {
                            o.share.api(x.substr(6))
                        }
                        if (x.indexOf("js:") == 0) {
                            y = x.split(",");
                            eval(y[0].substr(3) + '(' + (exist(y[1]) ? '"' + y[1] + '"' : '') + (exist(y[2]) ? ',"' + y[2] + '"' : '') + ')')
                        }
                        if (x.indexOf("url:") == 0) {
                            window.open(x.substr(4))
                        }
                    }
                }!dont ? hide2(o.rightmenu) : ''
            }
        }

        function RightCSS(x) {
            css(x, {
                "padding": "4px 5px",
                "font-size": (v.rmsize ? v.rmsize : "55") + "%",
                "letter-spacing": "0.15em",
                "opacity": 0.9,
                "color": v.rmcolor
            });
            x.addEventListener("mouseover", RightOver);
            x.addEventListener("mouseout", RightOut)
        }

        function RightOver(e) {
            css(e.target, {
                "opacity": 1
            });
            css(e.target, {
                "background": hex2rgb(v.rmbgcolor, 0.5)
            })
        }

        function RightOut(e) {
            css(e.target, {
                "opacity": 0.9
            });
            css(e.target, {
                "background": "none"
            })
        }
        o.system = new System();
        if (o.system.ios) {
            var ioscss = (v.hidestartbutios == 1 ? '*::-webkit-media-controls-start-playback-button {display: none!important;-webkit-appearance: none;}' : '');
            if (v.nativecontrolsmobile == 1 && v.nativenotios != 1 && (v.nativenotiphone != 1 || !o.system.iphone) && (v.nativenotipad != 1 || !o.system.ipad)) {} else {
                if (o.system.ios && v.nativefullios == 1) {} else {
                    ioscss += 'video::-webkit-media-controls {display:none !important;}*::-webkit-media-controls-panel {display: none!important;-webkit-appearance: none;}*::--webkit-media-controls-play-button {display: none!important;-webkit-appearance: none;}'
                }
            }
            var tmp = document.createElement('style');
            tmp.type = 'text/css';
            tmp.appendChild(document.createTextNode(ioscss));
            o.frame.appendChild(tmp)
        }
        if (o.system.mobiletv) {
            v.autoplay == 1 && v.autoplaynomobiletv == 1 ? v.autoplay = 0 : ''
        }
        if (o.aspect == 0) {
            if (o.frame.offsetHeight == 15 && !o.container_h_procent && v.playerheight > 0) {
                css(o.container, {
                    "height": v.playerheight
                })
            }
        }
        if (exist(v.autonext)) {
            v.playlist.autoplaylist = v.autonext
        }
        if (exist(v.playlistloop)) {
            v.playlist.playlistrewind = v.playlistloop
        }
        if (exist(v.start)) {
            o.seekto = v.start
        }
        Ready();
        setTimeout(function() {
            js("init");
            if (v.ready) {
                if (typeof v.ready == 'function') {
                    v.ready = v.ready.name
                };
                eval(v.ready + (v.ready.indexOf('()') == -1 ? '("' + v.id + '")' : ''))
            }
        }, 1)
    }

    function Ready() {
        log("Ready");
        o.actions = new Actions();
        if (!v.file) {
            v.file = "?"
        }
        if (v.pl) {
            v.file = v.pl + o.pltxt
        }
        o.sessid = randomstr();
        o.sesstime = 0;
        o.storage = StorageSupport();
        if (o.storage) {
            if (localStorage.getItem("pljsuserid") != null) {
                o.userid = localStorage.getItem("pljsuserid")
            } else {
                o.userid = randomstr();
                localStorage.setItem("pljsuserid", o.userid)
            } if (v.qualitystore == 1) {
                if (localStorage.getItem("pljsquality") != null) {
                    o.default_quality = localStorage.getItem("pljsquality")
                }
            }
            if (v.trackstore == 1) {
                if (localStorage.getItem("pljstrack") != null) {
                    v.default_audio = localStorage.getItem("pljstrack")
                }
            }
            for (var i = 0; i < o.vsts.length; i++) {
                if (v['vast_nofirst' + o.vsts[i]] == 1) {
                    if (localStorage.getItem("pljsfirst" + o.vsts[i]) != null) {} else {
                        v[o.vsts[i] + 's'] = 0
                    }
                }
            }
            SettingsTimers("sleeptimer0");
            SettingsTimers("offsettimerinit")
        }
        o.href2 = o.href.substr(o.href.indexOf("://") + 3);
        if (o.href2.indexOf("#") > 0) {
            o.href2 = o.href2.substr(0, o.href2.indexOf("#"))
        }
        if (o.storage && v.timestore == 1) {
            o.
            continue = new TimeStore()
        }
        if (v.observer == 1) {
            o.visibility = v.startvisibility;
            Visibility(o.container, "visibility", true)
        }
        v.effects == 1 ? o.effects = new PluginEffects() : '';
        v.minify == 1 && v.observer == 1 ? o.minify = new PluginMini() : '';
        v.ab == 1 ? PluginBlock() : '';
        if (v.quizes == 1) {
            o.quiz = new PluginQuiz();
            o.quiz.Start()
        }
        o.media = new Media(v.file);
        if (!o.system.mobile) {
            o.frame.addEventListener("mouseenter", function() {
                o.mouseHere = true;
                o.mouseHere2 = true;
                o.controls ? o.controls.StageOver() : ''
            });
            o.frame.addEventListener("mouseleave", function(e) {
                if (!o.mouseDown) {
                    if (v.toolbar.hideleavetimeout > 0) {
                        clearTimeout(o.leavetimeout2);
                        o.leavetimeout2 = setTimeout(function() {
                            if (o.mouseHere != o.mouseHere2) {
                                o.mouseHere = o.mouseHere2;
                                o.controls.Review()
                            }
                        }, v.toolbar.hideleavetimeout * 1000)
                    } else {
                        o.mouseHere = false
                    }
                    o.mouseHere2 = false;
                    if (o.controls) {
                        o.controls.StageLeave()
                    }
                }
            });
            o.frame.addEventListener("mousedown", function(e) {
                o.mouseDown = true
            });
            o.frame.addEventListener("mouseup", function(e) {
                o.mouseDown = false;
                if (!o.volumewheel) {
                    o.hidden_volume_over = false;
                    o.hidden_volume_over_process = false
                }
                setTimeout(function() {
                    o.focus = true
                }, 500);
                if (o.system.mobile && o.controls.ToolbarHidden()) {} else {
                    o.controls ? o.controls.StageMouseUp(e.clientX, e.clientY) : ''
                } if (v.hidevideo == 1) {
                    if (o.controls.SettingsVisible()) {
                        o.controls.Settings()
                    }
                }
            });
            o.frame.addEventListener("mousemove", function(e) {
                if (exist(o.controls)) {
                    if (o.mouseDown) {
                        o.controls.StageMove(e.clientX, e.clientY)
                    } else {
                        o.controls.StageMove2()
                    }
                }
            })
        } else {
            window.addEventListener("orientationchange", OrientationChange, false)
        }
        v.geo == 1 && typeof PluginGeo == 'function' ? o.geo = new PluginGeo() : '';
        o.mediacontainer.addEventListener("touchstart", function(e) {
            o.mouseDown = true;
            o.mouseHere = true;
            o.mouseMove = false;
            Touch("start", e)
        }, {
            passive: true
        });
        o.mediacontainer.addEventListener("touchmove", function(e) {
            if (o.mouseDown) {
                o.mouseMove = true;
                Touch("move", e)
            }
        }, {
            passive: true
        });
        o.mediacontainer.addEventListener("touchend", function(e) {
            o.mouseDown = false;
            o.mouseHere = false;
            if (v.click0timeout == 1) {
                var now = new Date().getTime();
                if (now - o.clicktime < (v.dclckto ? v.dclckto : 0.3) * 1000) {
                    DoubleClick(e)
                }
            }!o.mouseMove ? ScreenClick(e) : '';
            o.mouseMove = false;
            if (o.airplay || o.airplayed) {
                o.controls.resize()
            }
            Touch("end", e)
        }, {
            passive: true
        });
        try {
            window.document.addEventListener("mouseup", function(e) {
                o.focus = false;
                if (!o.volumewheel) {
                    o.hidden_volume_over = false;
                    o.hidden_volume_over_process = false
                }
                if (o.mouseDown && o.controls) {
                    o.mouseDown = false;
                    o.controls.StageMouseUp(e.clientX, e.clientY);
                    o.controls.StageLeave()
                }
                if (!o.mouseHere && !o.system.mobile && !o.system.tv) {
                    o.controls.SettingsClose();
                    if (o.droplist) {
                        o.droplist.Close()
                    }
                }
            })
        } catch (err) {}
        window.document.addEventListener("mousemove", function(e) {
            o.controls && o.mouseDown ? o.controls.StageMove(e.clientX, e.clientY) : ''
        });
        o.frame.addEventListener("touchstart", function(e) {
            o.touch = true;
            o.mouseDown = true
        }, {
            passive: true
        });
        o.frame.addEventListener("touchend", function(e) {
            o.touch = false;
            o.mouseDown = false
        }, {
            passive: true
        });
        window.document.addEventListener("touchmove", function(e) {
            if (o.controls && o.touch) {
                o.controls.StageMove(e.touches[0].pageX, e.touches[0].pageY)
            }
        }, {
            passive: true
        });
        window.document.addEventListener("keyup", function(e) {
            var x = e.target.tagName.toLowerCase();
            if (x == 'input' || x == 'textarea') {
                return
            } else {
                o.controls ? o.controls.KeyUp(e) : ''
            }
        });
        window.document.addEventListener("keydown", function(e) {
            var x = e.target.tagName.toLowerCase();
            if (x == 'input' || x == 'textarea' || x == 'div') {
                return
            } else {
                o.controls ? o.controls.KeyDown(e) : ''
            }
        });
        window.addEventListener('unhandledrejection', function(e) {});
        document.addEventListener("fullscreenchange", FullscreenChange, false);
        document.addEventListener("mozfullscreenchange", FullscreenChange, false);
        document.addEventListener("webkitfullscreenchange", FullscreenChange, false);
        document.addEventListener("msfullscreenchange", FullscreenChange, false);
        document.addEventListener("MSFullscreenChange", FullscreenChange, false);
        if (!exist(o.frameresize.contentWindow)) {
            log("Local");
            return
        } else {
            o.frameresize.contentWindow.addEventListener('resize', Resize, true);
            o.frameresize.contentWindow.onresize = Resize
        } if (!o.system.mobile) {
            o.mediacontainer.addEventListener("click", ScreenClick, false);
            if (v.doubleclick == 1 && v.click0timeout == 1) {
                o.mediacontainer.addEventListener("dblclick", DoubleClick, false)
            }
        }
        MainUpdateSize();
        if (v.chromecast) {
            v.chromecast.on == 1 ? o.chromecast = new ChromeCast() : ''
        }
        o.controls = new Controls();
        if (v.control_title.templated) {
            o.title_template = v.control_title.template
        }
        Title();
        Resize();
        if (o.storage) {
            if (v.volumestore == 1 && v.volume != 0 && !o.system.mobile) {
                if (localStorage.getItem("pljsvolume") != null) {
                    v.volume = localStorage.getItem("pljsvolume")
                }
                if (localStorage.getItem("pljsmute") == 1 && v.mutestore == 1) {
                    v.mute = 1
                }
            }
            if (v.speedstore == 1) {
                var sp = localStorage.getItem("pljsspeed");
                if (exist(sp)) {
                    if (sp.indexOf('.') > 0 && o.line_speed) {
                        o.actions.SetSpeed(sp, 1)
                    } else {
                        if (o.files_speed) {
                            var spd = o.files_speed.indexOf(sp);
                            spd == -1 ? spd = o.files_speed.indexOf(sp * 1) : '';
                            if (spd != -1 && o.controls.SettingsExist('speed')) {
                                o.current_speed = spd;
                                o.media.SetSpeed(o.files_speed[spd])
                            }
                            o.controls.SettingsSpeed()
                        }
                    }
                }
            }
            var substore = false;
            if (v.sub_designstore == 1) {
                for (var j = 0; j < o.sub_options.length; j++) {
                    if (localStorage.getItem("pljs" + o.sub_options[j]) != null) {
                        v[o.sub_options[j]] = localStorage.getItem("pljs" + o.sub_options[j]);
                        substore = true
                    }
                }
            }
            if (!substore) {
                if (o.system.mobile) {
                    v.sub_bottommob && v.sub_bottommob > -1 ? v.sub_bottom = v.sub_bottommob : '';
                    if (exist(v.sub_sizemob)) {
                        v.sub_size = v.sub_sizemob;
                        exist2(v.sub_sizemobfull) ? v.sub_size_fullscreen = v.sub_sizemobfull : ''
                    }
                }
            }
        }
        if (o.
            continue) {
            var f = o.
            continue.flag();
            if (f.t && f.d) {
                o.controls.Played(f.t, f.d);
                o.controls.Duration(f.t, f.d);
                v.duration = f.d
            }
        }
        o.actions.Volume(v.volume);
        if (v.mute == 1) {
            o.actions.Mute();
            o.controls.refresh()
        }
        o.alert = new Alert();
        if (v.rounding > 0) {
            css(o.container, {
                "border-radius": (v.rounding + "px")
            });
            css(o.frame, {
                "border-radius": (v.rounding + "px")
            })
        }
        if (exist(v.midroll)) {
            str2obj("midroll")
        }
        if (exist(v.overlay)) {
            str2obj("overlay")
        }
        if (exist(o.playlist)) {
            js("playlist")
        }
        if (v.pass == 1 && v.passonstart == 1) {
            o.actions.Password()
        }
        for (var i = 2; i < 10; i++) {
            if (exist(v["design" + i])) {
                if (v["design" + i] == "mobile" && o.system.mobile) {
                    apiProcessor("design", i)
                }
            }
        }
    }

    function ScreenClick(e) {
        if (o.moving[o.mediacontainer] > 2) {
            return
        }
        o.acted = true;
        v.dclckto == 0 ? v.click0timeout = 1 : '';
        if (o.click_t && v.screenclick == 1 && v.doubleclick == 1) {
            DoubleClick(e)
        } else {
            ClearClick();
            if (v.click0timeout == 1 || v.doubleclick == 0) {
                ScreenClick2()
            } else {
                o.click_t = setTimeout(ScreenClick2, (v.dclckto ? v.dclckto : 0.35) * 1000)
            }
        }
    }

    function ScreenClick2() {
        ClearClick();
        if (o.system.mobile) {
            if (o.controls.ToolbarHidden()) {
                o.controls.StageMove2();
                return
            }
        }
        v.screenclick == 1 ? o.actions.ScreenClick() : ''
    }

    function DoubleClick(e) {
        ClearClick();
        var y = false;
        if (v.hotkey.seeksides == 1) {
            if (e) {
                if (v.hotkey.seeksidesmob == 1 && !o.system.mobile) {} else {
                    var x;
                    if (o.system.mobile) {
                        x = e.layerX;
                        if (!x) {
                            if (e.changedTouches) {
                                x = e.changedTouches[0].pageX - findLeft(o.frame)
                            }
                        }
                    } else {
                        x = e.offsetX
                    } if (x) {
                        if (x < o.screen_w / 2) {
                            if (x < o.screen_w * 20 / 100) {
                                apiProcessor("seek", "-" + existv(v.hotkey.seeksidesec, 10));
                                v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1 ? PluginHotIcon('seek', 0) : '';
                                y = true
                            }
                        } else {
                            if (x > o.screen_w - o.screen_w * 20 / 100) {
                                apiProcessor("seek", "+" + existv(v.hotkey.seeksidesec, 10));
                                v.hotkey.icons == 1 && v.hotkey.seekiconbut == 1 ? PluginHotIcon('seek', 1) : '';
                                y = true
                            }
                        } if (y) {
                            if (e.stopPropagation) e.stopPropagation()
                        }
                    }
                }
            }
        }
        if (!y && v.doubleclick == 1) {
            if (v.nativecontrolsmobile == 1 && o.system.mobile) {} else {
                o.fullscreen ? o.actions.Normalscreen() : o.actions.Fullscreen()
            }
        }
    }

    function ClearClick() {
        clearTimeout(o.click_t);
        o.click_t = undefined
    }

    function Resize(x) {
        var y = false;
        if (o.normal_w != o.frame.offsetWidth || o.normal_h != o.frame.offsetHeight) {
            y = true
        }
        MainUpdateSize();
        o.controls ? o.controls.resize() : '';
        o.media.resize();
        y && !o.fullscreen ? js("resize", o.normal_w + ',' + o.normal_h) : ''
    }

    function MainUpdateSize() {
        var xw = o.frame.offsetWidth;
        var xh = o.frame.offsetHeight;
        if (o.controls) {
            if (v.change2playlist == 1) {
                if (v.playlist.position != "bottom") {
                    var x = o.controls.PlaylistG("scroll_height") + o.controls.PlaylistG("top") + 5 + o.controls.PlaylistG("margin_bottom") + (v.change2playlist_bottom > 0 ? v.change2playlist_bottom : 0);
                    css(o.container, {
                        "height": x
                    })
                }
            }
        }
        if (o.aspect > 0 && !o.fullscreen && !o.fullscreen_start) {
            xh = xw / o.aspect;
            css(o.container, {
                "height": xh
            })
        }
        if (!o.fullscreen && !o.fullscreen_start && !o.fullscreen_process) {
            o.normal_w = Math.round(xw);
            o.normal_h = Math.round(xh)
        }
        if (o.system.mobile && o.fullscreen && v.landfullmobile == 1 && v.landscapefull != 1 && screen.orientation) {
            if (o.aspect > 0) {
                if (o.aspect < 1) {
                    var sp = screen.orientation.lock('portrait');
                    if (sp !== undefined) {
                        sp.then(function() {}).
                        catch (function(error) {})
                    }
                } else {
                    var sp = screen.orientation.lock('landscape');
                    if (sp !== undefined) {
                        sp.then(function() {}).
                        catch (function(error) {})
                    }
                }
            } else {
                var sp = screen.orientation.lock('landscape');
                if (sp !== undefined) {
                    sp.then(function() {}).
                    catch (function(error) {})
                }
            }
        }
        o.screen_w = xw;
        o.screen_h = xh;
        if (exist(v.title) && o.controls) {
            v.title != '' ? o.controls.updateTitle() : ''
        }
        if (exist(o.custom_aspect)) {
            o.media.scale(o.custom_aspect)
        }
        if (o.vast && !o.fullscreen) {
            o.vast.Resize()
        }
        o.droplist ? o.droplist.Resize() : '';
        o.quiz ? o.quiz.Resize() : ''
    }

    function Title() {
        o.actions.TitleTemplate(v);
        for (var x in v) {
            if (v.hasOwnProperty(x)) {
                if (x.indexOf("title") == 0) {
                    if (v[x] != '') {
                        o.maintitle = v[x];
                        o.actions.Title(x)
                    }
                }
            }
        }
    }

    function Poster(url, container, scale) {
        if (url) {
            if (url != '') {
                if (container == o.poster && url == o.currentposter) {} else {
                    if (url.indexOf("#" + v.enc2) == 0) {
                        url = o[o.fd[0]](url)
                    }
                    if (url.indexOf("#0") == 0) {
                        url = fd0(url)
                    }
                    url = checkBase64(url);
                    var s = "contain";
                    if (scale == "fill") {
                        s = "cover"
                    }
                    if (scale == "none") {
                        s = "auto"
                    }
                    if (scale == "stretch") {
                        s = "100% 100%"
                    }
                    css(container, {
                        'background': 'url(' + url + ') no-repeat center center',
                        'background-size': s
                    });
                    show(container);
                    container == o.poster ? o.currentposter = url : ''
                }
            }
        }
    };

    function Logo(x) {
        if (x.on == 1 && exist(x.src)) {
            x.src = checkBase64(x.src);
            var y = createElement("div");
            if (x.src.indexOf("http") > -1 || x.src.indexOf("//") == 0) {
                var z = createElement("img");
                z.src = x.src;
                y.appendChild(z)
            }
            x = UpdateObject(x, v.logo);
            x = MarginPadding(x, 'margin', 'margin');
            css(y, {
                'position': 'absolute'
            });
            if (x.position.indexOf("bottom") > -1) {
                css(y, {
                    'bottom': x.marginbottom
                })
            }
            if (x.position.indexOf("right") > -1) {
                css(y, {
                    'right': x.marginright
                })
            }
            if (x.position.indexOf("top") > -1) {
                css(y, {
                    'top': x.margintop
                })
            }
            if (x.position.indexOf("left") > -1) {
                css(y, {
                    'left': x.marginleft
                })
            }
            o.container.appendChild(y)
        }
    };

    function FullscreenChange() {
        if (o.fullscreen && !isFullscreen()) {
            o.actions.NormalscreenUI(true)
        } else {
            o.actions.FullscreenUI()
        }
        log("fullscreen", o.fullscreen)
    }

    function Orientation() {
        log("orientation " + screen.orientation.angle)
    }

    function OrientationChange() {
        if (Math.abs(window.orientation) === 90) {
            log("landscape");
            if (v.landscapefull == 1) {
                var ok = true;
                if (v.lsfullstart == 1 && !o.start) {
                    ok = false
                }
                if (v.lsfullplay == 1 && !o.play) {
                    ok = false
                }
                if (o.vast) {
                    ok = true
                }!o.fullscreen && ok ? o.actions.Fullscreen() : ''
            }
        } else {
            log("portrait");
            if (v.landscapefull == 1) {
                o.fullscreen ? o.actions.Normalscreen() : ''
            }
        }
    }

    function isFullscreen() {
        return !!(document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || (document.fullscreenElement != undefined))
    }

    function isHidden(x) {
        return x.offsetWidth == 0 && x.offsetHeight == 0
    };

    function Destroy() {
        for (var x in o) {
            if (x.indexOf("Interval") > -1) {
                clearInterval(o[x])
            }
            if (x.indexOf("timeout") > -1) {
                clearTimeout(o[x])
            }
        }
        log("Destroyed")
    }
}