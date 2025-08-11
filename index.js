let upper ;
let primary_d1 ;

function primary() {
    let primary_get = document.getElementById("Primary_color-picker").value;
    document.getElementById("Primary_input").value = primary_get;

     primary_d1 = document.getElementById("container_bottom_primary_d1");
    let primary_d2 = document.getElementById("container_bottom_primary_d2");
    let primary_d3 = document.getElementById("container_bottom_primary_d3");
    let primary_d4 = document.getElementById("container_bottom_primary_d4");
    let primary_d5 = document.getElementById("container_bottom_primary_d5");
    let primary_d6 = document.getElementById("container_bottom_primary_d6");
    let primary_d7 = document.getElementById("container_bottom_primary_d7");
    let primary_d8 = document.getElementById("container_bottom_primary_d8");
    let primary_d9 = document.getElementById("container_bottom_primary_d9");


    let hexa_primary_d1 = document.getElementById("hexavalue_primary_d1");
    let hexa_primary_d2 = document.getElementById("hexavalue_primary_d2");
    let hexa_primary_d3 = document.getElementById("hexavalue_primary_d3");
    let hexa_primary_d4 = document.getElementById("hexavalue_primary_d4");
    let hexa_primary_d5 = document.getElementById("hexavalue_primary_d5");
    let hexa_primary_d6 = document.getElementById("hexavalue_primary_d6");
    let hexa_primary_d7 = document.getElementById("hexavalue_primary_d7");
    let hexa_primary_d8 = document.getElementById("hexavalue_primary_d8");
    let hexa_primary_d9 = document.getElementById("hexavalue_primary_d9");




    primary_d1.style.backgroundColor = upper;
    primary_d1.style.opacity = 0.1;
    console.log(upper);
    primary_d2.style.backgroundColor = primary_get;
    primary_d2.style.opacity = 0.2;
    primary_d3.style.backgroundColor = primary_get;
    primary_d3.style.opacity = 0.3;
    primary_d4.style.backgroundColor = primary_get;
    primary_d4.style.opacity = 0.4;
    primary_d5.style.backgroundColor = primary_get;
    primary_d5.style.opacity = 0.5;
    primary_d6.style.backgroundColor = primary_get;
    primary_d6.style.opacity = 0.6;
    primary_d7.style.backgroundColor = primary_get;
    primary_d7.style.opacity = 0.7;
    primary_d8.style.backgroundColor = primary_get;
    primary_d8.style.opacity = 0.8;
    primary_d9.style.backgroundColor = primary_get;
    primary_d9.style.opacity = 0.9;



    hexa_primary_d1.innerHTML = primary_get;
    hexa_primary_d2.innerText = primary_get;
    hexa_primary_d3.innerText = primary_get;
    hexa_primary_d4.innerText = primary_get;
    hexa_primary_d5.innerText = primary_get;
    hexa_primary_d6.innerText = primary_get;
    hexa_primary_d7.innerText = primary_get;
    hexa_primary_d8.innerText = primary_get;
    hexa_primary_d9.innerText = primary_get;



}




function success() {
    let success_get = document.getElementById("Success_color-picker").value;
    document.getElementById("Success_input").value = success_get;

    let success_d1 = document.getElementById("container_bottom_success_d1");
    let success_d2 = document.getElementById("container_bottom_success_d2");
    let success_d3 = document.getElementById("container_bottom_success_d3");
    let success_d4 = document.getElementById("container_bottom_success_d4");
    let success_d5 = document.getElementById("container_bottom_success_d5");
    let success_d6 = document.getElementById("container_bottom_success_d6");
    let success_d7 = document.getElementById("container_bottom_success_d7");
    let success_d8 = document.getElementById("container_bottom_success_d8");
    let success_d9 = document.getElementById("container_bottom_success_d9");


    success_d1.style.backgroundColor = success_get;
    success_d1.style.opacity = 0.1;
    success_d2.style.backgroundColor = success_get;
    success_d2.style.opacity = 0.2;
    success_d3.style.backgroundColor = success_get;
    success_d3.style.opacity = 0.3;
    success_d4.style.backgroundColor = success_get;
    success_d4.style.opacity = 0.4;
    success_d5.style.backgroundColor = success_get;
    success_d5.style.opacity = 0.5;
    success_d6.style.backgroundColor = success_get;
    success_d6.style.opacity = 0.6;
    success_d7.style.backgroundColor = success_get;
    success_d7.style.opacity = 0.7;
    success_d8.style.backgroundColor = success_get;
    success_d8.style.opacity = 0.8;
    success_d9.style.backgroundColor = success_get;
    success_d9.style.opacity = 0.9;



}


function info() {
    let info_get = document.getElementById("info_color-picker").value;
    document.getElementById("info_input").value = info_get;

    let info_d1 = document.getElementById("container_bottom_info_d1");
    let info_d2 = document.getElementById("container_bottom_info_d2");
    let info_d3 = document.getElementById("container_bottom_info_d3");
    let info_d4 = document.getElementById("container_bottom_info_d4");
    let info_d5 = document.getElementById("container_bottom_info_d5");
    let info_d6 = document.getElementById("container_bottom_info_d6");
    let info_d7 = document.getElementById("container_bottom_info_d7");
    let info_d8 = document.getElementById("container_bottom_info_d8");
    let info_d9 = document.getElementById("container_bottom_info_d9");


    info_d1.style.backgroundColor = info_get;
    info_d1.style.opacity = 0.1;
    info_d2.style.backgroundColor = info_get;
    info_d2.style.opacity = 0.2;
    info_d3.style.backgroundColor = info_get;
    info_d3.style.opacity = 0.3;
    info_d4.style.backgroundColor = info_get;
    info_d4.style.opacity = 0.4;
    info_d5.style.backgroundColor = info_get;
    info_d5.style.opacity = 0.5;
    info_d6.style.backgroundColor = info_get;
    info_d6.style.opacity = 0.6;
    info_d7.style.backgroundColor = info_get;
    info_d7.style.opacity = 0.7;
    info_d8.style.backgroundColor = info_get;
    info_d8.style.opacity = 0.8;
    info_d9.style.backgroundColor = info_get;
    info_d9.style.opacity = 0.9;



}



function warning() {
    let warning_get = document.getElementById("warning_color-picker").value;
    document.getElementById("warning_input").value = warning_get;

    let warning_d1 = document.getElementById("container_bottom_warning_d1");
    let warning_d2 = document.getElementById("container_bottom_warning_d2");
    let warning_d3 = document.getElementById("container_bottom_warning_d3");
    let warning_d4 = document.getElementById("container_bottom_warning_d4");
    let warning_d5 = document.getElementById("container_bottom_warning_d5");
    let warning_d6 = document.getElementById("container_bottom_warning_d6");
    let warning_d7 = document.getElementById("container_bottom_warning_d7");
    let warning_d8 = document.getElementById("container_bottom_warning_d8");
    let warning_d9 = document.getElementById("container_bottom_warning_d9");


    warning_d1.style.backgroundColor = warning_get;
    warning_d1.style.opacity = 0.1;
    warning_d2.style.backgroundColor = warning_get;
    warning_d2.style.opacity = 0.2;
    warning_d3.style.backgroundColor = warning_get;
    warning_d3.style.opacity = 0.3;
    warning_d4.style.backgroundColor = warning_get;
    warning_d4.style.opacity = 0.4;
    warning_d5.style.backgroundColor = warning_get;
    warning_d5.style.opacity = 0.5;
    warning_d6.style.backgroundColor = warning_get;
    warning_d6.style.opacity = 0.6;
    warning_d7.style.backgroundColor = warning_get;
    warning_d7.style.opacity = 0.7;
    warning_d8.style.backgroundColor = warning_get;
    warning_d8.style.opacity = 0.8;
    warning_d9.style.backgroundColor = warning_get;
    warning_d9.style.opacity = 0.9;



}


function danger() {
    let danger_get = document.getElementById("danger_color-picker").value;
    document.getElementById("danger_input").value = danger_get;

    let danger_d1 = document.getElementById("container_bottom_danger_d1");
    let danger_d2 = document.getElementById("container_bottom_danger_d2");
    let danger_d3 = document.getElementById("container_bottom_danger_d3");
    let danger_d4 = document.getElementById("container_bottom_danger_d4");
    let danger_d5 = document.getElementById("container_bottom_danger_d5");
    let danger_d6 = document.getElementById("container_bottom_danger_d6");
    let danger_d7 = document.getElementById("container_bottom_danger_d7");
    let danger_d8 = document.getElementById("container_bottom_danger_d8");
    let danger_d9 = document.getElementById("container_bottom_danger_d9");


    danger_d1.style.backgroundColor = danger_get;
    danger_d1.style.opacity = 0.1;
    danger_d2.style.backgroundColor = danger_get;
    danger_d2.style.opacity = 0.2;
    danger_d3.style.backgroundColor = danger_get;
    danger_d3.style.opacity = 0.3;
    danger_d4.style.backgroundColor = danger_get;
    danger_d4.style.opacity = 0.4;
    danger_d5.style.backgroundColor = danger_get;
    danger_d5.style.opacity = 0.5;
    danger_d6.style.backgroundColor = danger_get;
    danger_d6.style.opacity = 0.6;
    danger_d7.style.backgroundColor = danger_get;
    danger_d7.style.opacity = 0.7;
    danger_d8.style.backgroundColor = danger_get;
    danger_d8.style.opacity = 0.8;
    danger_d9.style.backgroundColor = danger_get;
    danger_d9.style.opacity = 0.9;



}



function day() {
    let main = document.getElementById("main");
    let btnday = document.getElementById("header_theme_button_day");
    let btnnight = document.getElementById("header_theme_button_night");
    let header = document.getElementById("header");
    let header_company_name = document.getElementById("header_company-name-logo_h1");
    let header_company_p = document.getElementById("header_company-name-logo_p");
    let header_eva = document.getElementById("header_company-name_h1");
    let cont_top = document.getElementById("container_top");
    let cont_mid = document.getElementById("container_middle");
    let cont_bot = document.getElementById("container_bottom");
    let s1 = document.getElementById("container_top_semantic-color_span_1_div");
    let mid_sem = document.getElementById("container_middle_color-picker_primary");
    let head_sem = document.getElementById("container_top_brand-color_div");
    let head_sem2 = document.getElementById("container_middle_color-picker_info");
    let head_sem3 = document.getElementById("container_middle_color-picker_success");
    let head_sem4 = document.getElementById("container_middle_color-picker_warning");
    let head_sem5 = document.getElementById("container_middle_color-picker_danger");
    let head_sem6 = document.getElementById("container_bottom_primary_div");
    let head_sem7 = document.getElementById("container_top_export-btn_p");
    let head_sem8 = document.getElementById("container_top_semantic-color_span_h1");
    let head_sem9 = document.getElementById("container_top_brand-color_span_h1");
    let head_sem10 = document.getElementById("container_middle_color-picker_primary_p");
    let head_sem11 = document.getElementById("container_middle_color-picker_success_p");
    let head_sem12 = document.getElementById("container_middle_color-picker_info_p");
    let head_sem13 = document.getElementById("container_middle_color-picker_warning_p");
    let head_sem14 = document.getElementById("container_middle_color-picker_danger_p");
    let head_sem15 = document.getElementById("container_bottom_primary_label_100");
    let head_sem16 = document.getElementById("container_bottom_primary_label_200");
    let head_sem17 = document.getElementById("container_bottom_primary_label_300");
    let head_sem18 = document.getElementById("container_bottom_primary_label_400");
    let head_sem19 = document.getElementById("container_bottom_primary_label_500");
    let head_sem20 = document.getElementById("container_bottom_primary_label_600");
    let head_sem21 = document.getElementById("container_bottom_primary_label_700");
    let head_sem22 = document.getElementById("container_bottom_primary_label_800");
    let head_sem23 = document.getElementById("container_bottom_primary_label_900");
    let head_sem24 = document.getElementById("container_bottom_success_label_100");
    let head_sem25 = document.getElementById("container_bottom_success_label_200");
    let head_sem26 = document.getElementById("container_bottom_success_label_300");
    let head_sem27 = document.getElementById("container_bottom_success_label_400");
    let head_sem28 = document.getElementById("container_bottom_success_label_500");
    let head_sem29 = document.getElementById("container_bottom_success_label_600");
    let head_sem30 = document.getElementById("container_bottom_success_label_700");
    let head_sem31 = document.getElementById("container_bottom_success_label_800");
    let head_sem32 = document.getElementById("container_bottom_success_label_900");
    let head_sem33 = document.getElementById("container_bottom_info_label_100");
    let head_sem34 = document.getElementById("container_bottom_info_label_200");
    let head_sem35 = document.getElementById("container_bottom_info_label_300");
    let head_sem36 = document.getElementById("container_bottom_info_label_400");
    let head_sem37 = document.getElementById("container_bottom_info_label_500");
    let head_sem38 = document.getElementById("container_bottom_info_label_600");
    let head_sem39 = document.getElementById("container_bottom_info_label_700");
    let head_sem40 = document.getElementById("container_bottom_info_label_800");
    let head_sem41 = document.getElementById("container_bottom_info_label_900");
    let head_sem42 = document.getElementById("container_bottom_warning_label_100");
    let head_sem43 = document.getElementById("container_bottom_warning_label_200");
    let head_sem44 = document.getElementById("container_bottom_warning_label_300");
    let head_sem45 = document.getElementById("container_bottom_warning_label_400");
    let head_sem46 = document.getElementById("container_bottom_warning_label_500");
    let head_sem47 = document.getElementById("container_bottom_warning_label_600");
    let head_sem48 = document.getElementById("container_bottom_warning_label_700");
    let head_sem49 = document.getElementById("container_bottom_warning_label_800");
    let head_sem50 = document.getElementById("container_bottom_warning_label_900");
    let head_sem51 = document.getElementById("container_bottom_danger_label_100");
    let head_sem52 = document.getElementById("container_bottom_danger_label_200");
    let head_sem53 = document.getElementById("container_bottom_danger_label_300");
    let head_sem54 = document.getElementById("container_bottom_danger_label_400");
    let head_sem55 = document.getElementById("container_bottom_danger_label_500");
    let head_sem56 = document.getElementById("container_bottom_danger_label_600");
    let head_sem57 = document.getElementById("container_bottom_danger_label_700");
    let head_sem58 = document.getElementById("container_bottom_danger_label_800");
    let head_sem59 = document.getElementById("container_bottom_danger_label_900");
    let head_sem60 = document.getElementById("container_top_brand-color_span_1_div");
    let head_sem61 = document.getElementById("container_top_semantic-color_span_2_div");
    let head_sem62 = document.getElementById("Primary_input");
    let head_sem63 = document.getElementById("Success_input");
    let head_sem64 = document.getElementById("info_input");
    let head_sem65 = document.getElementById("warning_input");
    let head_sem66 = document.getElementById("danger_input");
    let head_sem67 = document.getElementById("Primary_color-picker");
    let head_sem68 = document.getElementById("container_middle_color_choose_primary_div");
    let head_sem69 = document.getElementById("Success_color-picker");
    let head_sem70 = document.getElementById("info_color-picker");
    let head_sem71 = document.getElementById("warning_color-picker");
    let head_sem72 = document.getElementById("danger_color-picker");
    let head_sem73 = document.getElementById("gh2");
    let head_sem74 = document.getElementById("gh3");
    let head_sem75 = document.getElementById("gh4");
    let head_sem76 = document.getElementById("gh5");




    main.style.backgroundColor = "rgba(237,241,247,255)";
    btnday.style.backgroundColor = "blue";
    btnnight.style.backgroundColor = "white";
    header.style.backgroundColor = "rgba(247,249,252,255)";
    header_company_name.style.color = "black";
    header_company_p.style.color = "black";
    header_eva.style.color = "black";
    cont_top.style.backgroundColor = "rgba(247,249,252,255)";
    cont_top.style.borderTop = "1px solid rgb(191, 191, 191)";
    cont_top.style.borderBottom = "1px solid rgb(191, 191, 191)";
    cont_top.style.borderRight = "0px solid rgb(191, 191, 191)";
    cont_mid.style.backgroundColor = "white";
    cont_bot.style.backgroundColor = "white";
    mid_sem.style.borderBottom = "1px solid rgb(191, 191, 191)";
    mid_sem.style.borderRight = "1px solid rgb(191, 191, 191)";
    head_sem.style.borderRight = "1px solid rgb(191, 191, 191)";
    head_sem2.style.borderBottom = "1px solid rgb(191, 191, 191)";
    head_sem3.style.borderBottom = "1px solid rgb(191, 191, 191)";
    head_sem4.style.borderBottom = "1px solid rgb(191, 191, 191)";
    head_sem5.style.borderBottom = "1px solid rgb(191, 191, 191)";
    head_sem6.style.borderRight = "1px solid rgb(191, 191, 191)";
    head_sem7.style.color = "black";
    head_sem8.style.color = "black";
    head_sem9.style.color = "black";
    head_sem10.style.color = "black";
    head_sem11.style.color = "black";
    head_sem12.style.color = "black";
    head_sem13.style.color = "black";
    head_sem14.style.color = "black";
    head_sem15.style.color = "black";
    head_sem16.style.color = "black";
    head_sem17.style.color = "black";
    head_sem18.style.color = "black";
    head_sem19.style.color = "black";
    head_sem20.style.color = "black";
    head_sem21.style.color = "black";
    head_sem22.style.color = "black";
    head_sem23.style.color = "black";
    head_sem24.style.color = "black";
    head_sem25.style.color = "black";
    head_sem26.style.color = "black";
    head_sem27.style.color = "black";
    head_sem28.style.color = "black";
    head_sem29.style.color = "black";
    head_sem29.style.color = "black";
    head_sem30.style.color = "black";
    head_sem31.style.color = "black";
    head_sem32.style.color = "black";
    head_sem33.style.color = "black";
    head_sem34.style.color = "black";
    head_sem35.style.color = "black";
    head_sem36.style.color = "black";
    head_sem37.style.color = "black";
    head_sem38.style.color = "black";
    head_sem39.style.color = "black";
    head_sem40.style.color = "black";
    head_sem41.style.color = "black";
    head_sem42.style.color = "black";
    head_sem43.style.color = "black";
    head_sem44.style.color = "black";
    head_sem45.style.color = "black";
    head_sem46.style.color = "black";
    head_sem47.style.color = "black";
    head_sem48.style.color = "black";
    head_sem49.style.color = "black";
    head_sem49.style.color = "black";
    head_sem50.style.color = "black";
    head_sem51.style.color = "black";
    head_sem52.style.color = "black";
    head_sem53.style.color = "black";
    head_sem54.style.color = "black";
    head_sem55.style.color = "black";
    head_sem56.style.color = "black";
    head_sem57.style.color = "black";
    head_sem58.style.color = "black";
    head_sem59.style.color = "black";
    head_sem60.style.border = "1px solid white";
    head_sem60.style.backgroundColor = "white";
    head_sem60.style.color = "black";
    head_sem61.style.border = "1px solid white";
    head_sem61.style.backgroundColor = "white";
    head_sem61.style.color = "black";
    head_sem62.style.backgroundColor = "rgb(244, 244, 244)";
    head_sem62.style.color = "black";
    head_sem63.style.backgroundColor = "rgb(244, 244, 244)";
    head_sem63.style.color = "black";
    head_sem64.style.backgroundColor = "rgb(244, 244, 244)";
    head_sem64.style.color = "black";
    head_sem65.style.backgroundColor = "rgb(244, 244, 244)";
    head_sem65.style.color = "black";
    head_sem66.style.backgroundColor = "rgb(244, 244, 244)";
    head_sem66.style.color = "black";
    head_sem67.style.backgroundColor = "white";
    head_sem68.style.borderTop = "1px solid rgb(191, 191, 191)";
    head_sem68.style.borderBottom = "1px solid rgb(191, 191, 191)";
    head_sem68.style.borderRight = "1px solid rgb(191, 191, 191)";
    head_sem68.style.borderLeft = "1px solid rgb(191, 191, 191)";
    head_sem69.style.backgroundColor = "white";
    head_sem70.style.backgroundColor = "white";
    head_sem71.style.backgroundColor = "white";
    head_sem72.style.backgroundColor = "white";
    head_sem73.style.borderTop = "1px solid (191, 191, 191)";
    head_sem73.style.borderBottom = "1px solid (191, 191, 191)";
    head_sem73.style.borderRight = "1px solid (191, 191, 191)";
    head_sem73.style.borderLeft = "1px solid (191, 191, 191)";
    head_sem73.style.borderColor = "rgb(191, 191, 191)"
    head_sem74.style.borderTop = "1px solid (191, 191, 191)";
    head_sem74.style.borderBottom = "1px solid (191, 191, 191)";
    head_sem74.style.borderRight = "1px solid (191, 191, 191)";
    head_sem74.style.borderLeft = "1px solid (191, 191, 191)";
    head_sem74.style.borderColor = "rgb(191, 191, 191)"
    head_sem75.style.borderTop = "1px solid (191, 191, 191)";
    head_sem75.style.borderBottom = "1px solid (191, 191, 191)";
    head_sem75.style.borderRight = "1px solid (191, 191, 191)";
    head_sem75.style.borderLeft = "1px solid (191, 191, 191)";
    head_sem75.style.borderColor = "rgb(191, 191, 191)"
    head_sem76.style.borderTop = "1px solid (191, 191, 191)";
    head_sem76.style.borderBottom = "1px solid (191, 191, 191)";
    head_sem76.style.borderRight = "1px solid (191, 191, 191)";
    head_sem76.style.borderLeft = "1px solid (191, 191, 191)";
    head_sem76.style.borderColor = "rgb(191, 191, 191)"






}

function night() {
    let main = document.getElementById("main");
    let btnnight = document.getElementById("header_theme_button_night");
    let btnday = document.getElementById("header_theme_button_day");
    let header = document.getElementById("header");
    let header_company_name = document.getElementById("header_company-name-logo_h1");
    let header_company_p = document.getElementById("header_company-name-logo_p");
    let header_eva = document.getElementById("header_company-name_h1");
    let cont_top = document.getElementById("container_top");
    let cont_mid = document.getElementById("container_middle");
    let cont_bot = document.getElementById("container_bottom");
    let mid_sem = document.getElementById("container_middle_color-picker_primary");
    let head_sem = document.getElementById("container_top_brand-color_div");
    let head_sem2 = document.getElementById("container_middle_color-picker_info");
    let head_sem3 = document.getElementById("container_middle_color-picker_success");
    let head_sem4 = document.getElementById("container_middle_color-picker_warning");
    let head_sem5 = document.getElementById("container_middle_color-picker_danger");
    let head_sem6 = document.getElementById("container_bottom_primary_div");
    let head_sem7 = document.getElementById("container_top_export-btn_p");
    let head_sem8 = document.getElementById("container_top_semantic-color_span_h1");
    let head_sem9 = document.getElementById("container_top_brand-color_span_h1");
    let head_sem10 = document.getElementById("container_middle_color-picker_primary_p");
    let head_sem11 = document.getElementById("container_middle_color-picker_success_p");
    let head_sem12 = document.getElementById("container_middle_color-picker_info_p");
    let head_sem13 = document.getElementById("container_middle_color-picker_warning_p");
    let head_sem14 = document.getElementById("container_middle_color-picker_danger_p");
    let head_sem15 = document.getElementById("container_bottom_primary_label_100");
    let head_sem16 = document.getElementById("container_bottom_primary_label_200");
    let head_sem17 = document.getElementById("container_bottom_primary_label_300");
    let head_sem18 = document.getElementById("container_bottom_primary_label_400");
    let head_sem19 = document.getElementById("container_bottom_primary_label_500");
    let head_sem20 = document.getElementById("container_bottom_primary_label_600");
    let head_sem21 = document.getElementById("container_bottom_primary_label_700");
    let head_sem22 = document.getElementById("container_bottom_primary_label_800");
    let head_sem23 = document.getElementById("container_bottom_primary_label_900");
    let head_sem24 = document.getElementById("container_bottom_success_label_100");
    let head_sem25 = document.getElementById("container_bottom_success_label_200");
    let head_sem26 = document.getElementById("container_bottom_success_label_300");
    let head_sem27 = document.getElementById("container_bottom_success_label_400");
    let head_sem28 = document.getElementById("container_bottom_success_label_500");
    let head_sem29 = document.getElementById("container_bottom_success_label_600");
    let head_sem30 = document.getElementById("container_bottom_success_label_700");
    let head_sem31 = document.getElementById("container_bottom_success_label_800");
    let head_sem32 = document.getElementById("container_bottom_success_label_900");
    let head_sem33 = document.getElementById("container_bottom_info_label_100");
    let head_sem34 = document.getElementById("container_bottom_info_label_200");
    let head_sem35 = document.getElementById("container_bottom_info_label_300");
    let head_sem36 = document.getElementById("container_bottom_info_label_400");
    let head_sem37 = document.getElementById("container_bottom_info_label_500");
    let head_sem38 = document.getElementById("container_bottom_info_label_600");
    let head_sem39 = document.getElementById("container_bottom_info_label_700");
    let head_sem40 = document.getElementById("container_bottom_info_label_800");
    let head_sem41 = document.getElementById("container_bottom_info_label_900");
    let head_sem42 = document.getElementById("container_bottom_warning_label_100");
    let head_sem43 = document.getElementById("container_bottom_warning_label_200");
    let head_sem44 = document.getElementById("container_bottom_warning_label_300");
    let head_sem45 = document.getElementById("container_bottom_warning_label_400");
    let head_sem46 = document.getElementById("container_bottom_warning_label_500");
    let head_sem47 = document.getElementById("container_bottom_warning_label_600");
    let head_sem48 = document.getElementById("container_bottom_warning_label_700");
    let head_sem49 = document.getElementById("container_bottom_warning_label_800");
    let head_sem50 = document.getElementById("container_bottom_warning_label_900");
    let head_sem51 = document.getElementById("container_bottom_danger_label_100");
    let head_sem52 = document.getElementById("container_bottom_danger_label_200");
    let head_sem53 = document.getElementById("container_bottom_danger_label_300");
    let head_sem54 = document.getElementById("container_bottom_danger_label_400");
    let head_sem55 = document.getElementById("container_bottom_danger_label_500");
    let head_sem56 = document.getElementById("container_bottom_danger_label_600");
    let head_sem57 = document.getElementById("container_bottom_danger_label_700");
    let head_sem58 = document.getElementById("container_bottom_danger_label_800");
    let head_sem59 = document.getElementById("container_bottom_danger_label_900");
    let head_sem60 = document.getElementById("container_top_brand-color_span_1_div");
    let head_sem61 = document.getElementById("container_top_semantic-color_span_2_div");
    let head_sem62 = document.getElementById("Primary_input");
    let head_sem63 = document.getElementById("Success_input");
    let head_sem64 = document.getElementById("info_input");
    let head_sem65 = document.getElementById("warning_input");
    let head_sem66 = document.getElementById("danger_input");
    let head_sem67 = document.getElementById("Primary_color-picker");
    let head_sem68 = document.getElementById("container_middle_color_choose_primary_div");
    let head_sem69 = document.getElementById("Success_color-picker");
    let head_sem70 = document.getElementById("info_color-picker");
    let head_sem71 = document.getElementById("warning_color-picker");
    let head_sem72 = document.getElementById("danger_color-picker");
    let head_sem73 = document.getElementById("gh2");
    let head_sem74 = document.getElementById("gh3");
    let head_sem75 = document.getElementById("gh4");
    let head_sem76 = document.getElementById("gh5");







    main.style.backgroundColor = "#151a30";
    btnnight.style.backgroundColor = "blue";
    btnday.style.backgroundColor = "#1a2138";
    header.style.backgroundColor = "#222b45";
    header_company_name.style.color = "white";
    header_company_p.style.color = "white";
    header_eva.style.color = "white";
    cont_mid.style.backgroundColor = "#222b45";
    cont_bot.style.backgroundColor = "#222b45";
    cont_top.style.backgroundColor = "#1a2138";
    cont_top.style.borderTop = "1px solid #1a2138";
    cont_top.style.borderBottom = "1px solid #1a2138";
    cont_top.style.borderRight = "1px solid #1a2138";
    mid_sem.style.borderBottom = "1px solid #1a2138";
    mid_sem.style.borderRight = "1px solid #1a2138";
    head_sem.style.borderRight = "1px solid #222b45";
    head_sem2.style.borderBottom = "1px solid #1a2138";
    head_sem3.style.borderBottom = "1px solid #1a2138";
    head_sem4.style.borderBottom = "1px solid #1a2138";
    head_sem5.style.borderBottom = "1px solid #1a2138";
    head_sem6.style.borderRight = "1px solid #1a2138";
    head_sem7.style.color = "blue";
    head_sem8.style.color = "white";
    head_sem9.style.color = "white";
    head_sem10.style.color = "white";
    head_sem11.style.color = "white";
    head_sem12.style.color = "white";
    head_sem13.style.color = "white";
    head_sem14.style.color = "white";
    head_sem15.style.color = "white";
    head_sem16.style.color = "white";
    head_sem17.style.color = "white";
    head_sem18.style.color = "white";
    head_sem19.style.color = "white";
    head_sem20.style.color = "white";
    head_sem21.style.color = "white";
    head_sem22.style.color = "white";
    head_sem23.style.color = "white";
    head_sem24.style.color = "white";
    head_sem25.style.color = "white";
    head_sem26.style.color = "white";
    head_sem27.style.color = "white";
    head_sem28.style.color = "white";
    head_sem29.style.color = "white";
    head_sem29.style.color = "white";
    head_sem30.style.color = "white";
    head_sem31.style.color = "white";
    head_sem32.style.color = "white";
    head_sem33.style.color = "white";
    head_sem34.style.color = "white";
    head_sem35.style.color = "white";
    head_sem36.style.color = "white";
    head_sem37.style.color = "white";
    head_sem38.style.color = "white";
    head_sem39.style.color = "white";
    head_sem40.style.color = "white";
    head_sem41.style.color = "white";
    head_sem42.style.color = "white";
    head_sem43.style.color = "white";
    head_sem44.style.color = "white";
    head_sem45.style.color = "white";
    head_sem46.style.color = "white";
    head_sem47.style.color = "white";
    head_sem48.style.color = "white";
    head_sem49.style.color = "white";
    head_sem49.style.color = "white";
    head_sem50.style.color = "white";
    head_sem51.style.color = "white";
    head_sem52.style.color = "white";
    head_sem53.style.color = "white";
    head_sem54.style.color = "white";
    head_sem55.style.color = "white";
    head_sem56.style.color = "white";
    head_sem57.style.color = "white";
    head_sem58.style.color = "white";
    head_sem59.style.color = "white";
    head_sem60.style.border = "1px solid #222b45";
    head_sem60.style.backgroundColor = "#222b45";
    head_sem60.style.color = "white";
    head_sem61.style.border = "1px solid #222b45";
    head_sem61.style.backgroundColor = "#222b45";
    head_sem61.style.color = "white";
    head_sem62.style.backgroundColor = "#1a2138";
    head_sem62.style.color = "white";
    head_sem63.style.backgroundColor = "#1a2138";
    head_sem63.style.color = "white";
    head_sem64.style.backgroundColor = "#1a2138";
    head_sem64.style.color = "white";
    head_sem65.style.backgroundColor = "#1a2138";
    head_sem65.style.color = "white";
    head_sem66.style.backgroundColor = "#1a2138";
    head_sem66.style.color = "white";
    head_sem67.style.backgroundColor = "#222b45";
    head_sem68.style.borderTop = "1px solid #1a2138";
    head_sem68.style.borderBottom = "1px solid #1a2138";
    head_sem68.style.borderRight = "1px solid #1a2138";
    head_sem68.style.borderLeft = "1px solid #1a2138";
    head_sem69.style.backgroundColor = "#222b45";
    head_sem70.style.backgroundColor = "#222b45";
    head_sem71.style.backgroundColor = "#222b45";
    head_sem72.style.backgroundColor = "#222b45";
    head_sem73.style.borderTop = "1px solid #1a2138";
    head_sem73.style.borderBottom = "1px solid #1a2138";
    head_sem73.style.borderRight = "1px solid #1a2138";
    head_sem73.style.borderLeft = "1px solid #1a2138";
    head_sem74.style.borderTop = "1px solid #1a2138";
    head_sem74.style.borderBottom = "1px solid #1a2138";
    head_sem74.style.borderRight = "1px solid #1a2138";
    head_sem74.style.borderLeft = "1px solid #1a2138";
    head_sem75.style.borderTop = "1px solid #1a2138";
    head_sem75.style.borderBottom = "1px solid #1a2138";
    head_sem75.style.borderRight = "1px solid #1a2138";
    head_sem75.style.borderLeft = "1px solid #1a2138";
    head_sem76.style.borderTop = "1px solid #1a2138";
    head_sem76.style.borderBottom = "1px solid #1a2138";
    head_sem76.style.borderRight = "1px solid #1a2138";
    head_sem76.style.borderLeft = "1px solid #1a2138";
}


function success_btn() {

    let box = document.getElementById("i2");


    let s1 = document.getElementById("Success_input");
    let s2 = document.getElementById("Success_color-picker");
    let vd = s1.getAttribute("disabled");
    let vd2 = s2.getAttribute("disabled");
    let check = true;
    console.log(typeof (vd));
    let bool = (vd === "true");
    console.log(bool);



    if (null == vd) {
        s1.setAttribute("disabled", true);
        s2.setAttribute("disabled", true);
        box.style.boxShadow = "0px 0px 0px 5px rgb(191, 191, 191)"
        s1.style.color = "#bab7b7"

    } else if (true == bool) {
        s1.removeAttribute("disabled");
        s2.removeAttribute("disabled");
        box.style.boxShadow = "0px 0px 0px 0px rgb(191, 191, 191)"
        s1.style.color = "white"

    }


}


function info_btn() {

    let box = document.getElementById("i3");

    let s1 = document.getElementById("info_input");
    let s2 = document.getElementById("info_color-picker");
    let vd = s1.getAttribute("disabled");
    let vd2 = s2.getAttribute("disabled");
    let check = true;
    console.log(typeof (vd));
    let bool = (vd === "true");
    console.log(bool);



    if (null == vd) {
        s1.setAttribute("disabled", true);
        s2.setAttribute("disabled", true);
        box.style.boxShadow = "0px 0px 0px 5px rgb(191, 191, 191)"
        s1.style.color = "#bab7b7"

    } else if (true == bool) {
        s1.removeAttribute("disabled");
        s2.removeAttribute("disabled");
        box.style.boxShadow = "0px 0px 0px 0px rgb(191, 191, 191)"
        s1.style.color = "white"
    }


}


function warning_btn() {
    let box = document.getElementById("i4");


    let s1 = document.getElementById("warning_input");
    let s2 = document.getElementById("warning_color-picker");
    let vd = s1.getAttribute("disabled");
    let vd2 = s2.getAttribute("disabled");
    let check = true;
    console.log(typeof (vd));
    let bool = (vd === "true");
    console.log(bool);



    if (null == vd) {
        s1.setAttribute("disabled", true);
        s2.setAttribute("disabled", true);
        box.style.boxShadow = "0px 0px 0px 5px rgb(191, 191, 191)"
        s1.style.color = "#bab7b7"

    } else if (true == bool) {
        s1.removeAttribute("disabled");
        s2.removeAttribute("disabled");
        box.style.boxShadow = "0px 0px 0px 0px rgb(191, 191, 191)"
        s1.style.color = "white"
    }


}


function danger_btn() {
    let box = document.getElementById("i5");


    let s1 = document.getElementById("danger_input");
    let s2 = document.getElementById("danger_color-picker");
    let vd = s1.getAttribute("disabled");
    let vd2 = s2.getAttribute("disabled");
    let check = true;
    console.log(typeof (vd));
    let bool = (vd === "true");
    console.log(bool);



    if (null == vd) {
        s1.setAttribute("disabled", true);
        s2.setAttribute("disabled", true);
        box.style.boxShadow = "0px 0px 0px 5px rgb(191, 191, 191)"
        s1.style.color = "#bab7b7"

    } else if (true == bool) {
        s1.removeAttribute("disabled");
        s2.removeAttribute("disabled");
        box.style.boxShadow = "0px 0px 0px 0px rgb(191, 191, 191)"
        s1.style.color = "white"
    }


}


function p() {

    let rget = document.getElementById("container_bottom_primary_d1");
    let vt = window.getComputedStyle(rget);
    let bg = vt.backgroundColor; 

    let rcolor = bg.slice(4, 7);
    console.log("rcolor = " + rcolor);
     let n = rcolor.replace(",","");
     console.log("n = " + n);

    let gcolor = bg.slice(7, 12);
    console.log("gcolor = " + gcolor);


    let m = gcolor.replace(",","");
    let m2 = m.replace(",","");

    console.log("m = " + m);

    let bcolor = bg.slice(12, 17);
    console.log("bcolor = " + bcolor);

    let o = bcolor.replace(",","");
    let o2 = o.replace(")","");
    console.log("o2 = " + o2);



    let r = convert(n);
    let g = convert(m2);
    let b = convert(o2);

    let add = "#" + r + g + b;
     upper = add.toUpperCase()
    console.log(bg);
    console.log(upper);

    



    function convert(rgb) {
        let get = Number(rgb).toString(16);
        return get
    }


}