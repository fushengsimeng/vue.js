window.onload = function() {
    var see = document.getElementById('see_left');
    var HD = document.getElementById('hidden');
    see.onmousemove = () => { //显示导航栏的隐藏元素
        var timer = setTimeout(() => {
            HD.style.display = 'block';
        }, 400);
        if (HD.style.display == 'block')
            clearTimeout(timer);
    }
    var total = document.getElementById('total');



    total.onmouseleave = () => { //隐藏
        var time = setInterval(() => {
            if (HD.style.display == 'block') {
                HD.style.display = 'none';
                clearInterval(time);
            }
            for (var h = 1; h < 7; h++) {
                var Child = document.getElementById('child_' + h);
                Child.style.backgroundColor = 'rgb(69,157,245)';
            }
        }, 500);
    };

    for (var i = 1; i < 7; i++) { //对于隐藏div的样式修改
        var hide = document.getElementById('hide_' + i);
        var child = document.getElementById('child_' + i);
        hide.onmousemove = child.onmousemove = ((i) => {
            return function() {
                var children = document.getElementById('child_' + i);
                children.style.backgroundColor = 'rgb(51,140,230)';
                var hidden = document.getElementById('hide_' + i);
                hidden.style.backgroundColor = 'rgb(25, 80, 139)';
                hidden.style.border = '0px solid rgb(25,80,139)';
                hidden.style.borderWidth = '0.5px 0px 0px 0px';
                hidden.style.marginTop = '-0.5px';
                var k_1 = 2 * i - 1; //1
                var k_2 = 2 * i - 2; //0
                var k_3 = 2 * i; //2
                var k_4 = 2 * i - 3; //-1
                if (i == 6) {
                    var line = document.getElementById('line_' + k_2);
                    line.style.backgroundColor = 'rgb(25,80,139)';
                    var wire = document.getElementById('line_' + k_4);
                    wire.style.backgroundColor = 'rgb(47,105,163)';
                    line.style.backgroundColor = 'rgb(25,80,139)';
                    line.style.border = '0px solid rgb(25,80,139)';
                    line.style.borderWidth = '0.5px 0px 0px 0px';
                    line.style.marginTop = '-0.5px';
                    wire.style.border = '0px solid rgb(47,105,163)';
                    wire.style.borderWidth = '0px';
                    wire.style.marginTop = '0px';
                } else {
                    if (i == 1) {
                        var line = document.getElementById('line_' + k_1);
                        var Line = document.getElementById('line_' + k_2);
                        var wire = document.getElementById('line_' + k_3);
                        line.style.backgroundColor = 'rgb(25,80,139)';
                        line.style.border = '0px solid rgb(25,80,139)';
                        line.style.borderWidth = '0.5px 0px 0px 0px';
                        line.style.marginTop = '-0.5px';
                        Line.style.backgroundColor = 'rgb(25,80,139)';
                        Line.style.border = '0px solid rgb(25,80,139)';
                        Line.style.borderWidth = '0.5px 0px 0px 0px';
                        Line.style.marginTop = '-0.5px';
                        wire.style.backgroundColor = 'rgb(47,105,163)';
                        wire.style.border = '0px solid rgb(47,105,163)';
                        wire.style.borderWidth = '0px';
                        wire.style.marginTop = '0px';
                    } else {
                        var line = document.getElementById('line_' + k_1);
                        var Line = document.getElementById('line_' + k_2);
                        var wire = document.getElementById('line_' + k_3);
                        var Wire = document.getElementById('line_' + k_4);
                        Wire.style.backgroundColor = 'rgb(47,105,163)';
                        line.style.backgroundColor = 'rgb(25,80,139)';
                        line.style.border = '0px solid rgb(25,80,139)';
                        line.style.borderWidth = '0.5px 0px 0px 0px';
                        line.style.marginTop = '-0.5px';
                        Line.style.backgroundColor = 'rgb(25,80,139)';
                        Line.style.border = '0px solid rgb(25,80,139)';
                        Line.style.borderWidth = '0.5px 0px 0px 0px';
                        Line.style.marginTop = '-0.5px';
                        wire.style.backgroundColor = 'rgb(47,105,163)';
                        wire.style.border = '0px solid rgb(47,105,163)';
                        wire.style.borderWidth = '0px';
                        wire.style.marginTop = '0px';
                        Wire.style.border = '0px solid rgb(47,105,163)';
                        Wire.style.borderWidth = '0px';
                        Wire.style.marginTop = '0px';
                    }
                }
                for (var j = 1; j < 7; j++) {
                    if (j != i) {
                        var child_min = document.getElementById('child_' + j);
                        child_min.style.backgroundColor = 'rgb(69, 157, 245)';
                        var hide_min = document.getElementById('hide_' + j);
                        hide_min.style.backgroundColor = 'rgb(47,105,163)';
                        hide_min.style.border = '0px solid white';
                        hide_min.style.borderWidth = '0px';
                        hide_min.style.marginTop = '0px';
                        for (var l = 0; l < 11; l++) {
                            if (l % 2 == 0 && l != k_1 && l != k_2 && l != k_3 && l != k_4) {
                                var Hide = document.getElementById('line_' + l);
                                Hide.style.borderColor = 'rgb(58 111 162)';
                                Hide.style.border = '0px solid rgb(58,111,162)';
                                Hide.style.borderWidth = '0.5px 0px 0px 0px';
                                Hide.style.marginTop = '-0.5px';
                            } else if (l % 2 == 1 && l != k_1 && l != k_2 && l != k_3 && l != k_4) {
                                var Hide = document.getElementById('line_' + l);
                                Hide.style.border = '0px solid white';
                                Hide.style.borderWidth = '0px 0px 0px 0px';
                                Hide.style.marginTop = '0px';
                            }
                            if (l != k_1 && l != k_2 && l != k_3 && l != k_4) {
                                if (l % 2 == 1) {
                                    var line = document.getElementById('line_' + l);
                                    line.style.backgroundColor = 'rgb(47, 105, 163)';
                                } else {
                                    var line = document.getElementById('line_' + l);
                                    line.style.backgroundColor = 'rgb(58 111 162)';
                                }
                            }
                        }
                    }
                }
            }
        })(i)
    }






    for (var i = 1; i <= 5; i++) { //实现图片的动态切换
        let icon = document.getElementById('icon_' + i); //let 块级作用域
        icon.onmouseleave = icon.onmouseenter = () => {
            var src = icon.getAttribute('src');
            if (src.indexOf('2') != -1) {
                src = src.replace('2', '1');
            } else if (src.indexOf('1') != -1) {
                src = src.replace('1', '2');
            }
            icon.src = src;
        }
    }
    var editor = document.getElementById('editor');
    var discuss = document.getElementById('discuss');
    var vedio = document.getElementById('vedio');
    editor.onmouseleave = editor.onmouseenter = () => {
        var src = editor.getAttribute('src');
        if (src.indexOf('2') != -1) {
            src = src.replace('2', '1');
        } else if (src.indexOf('1') != -1) {
            src = src.replace('1', '2');
        }
        editor.src = src;
    }
    discuss.onmouseleave = discuss.onmouseenter = () => {
        var src = discuss.getAttribute('src');
        if (src.indexOf('2') != -1) {
            src = src.replace('2', '1');
        } else if (src.indexOf('1') != -1) {
            src = src.replace('1', '2');
        }
        discuss.src = src;
    }
    vedio.onmouseleave = vedio.onmouseenter = () => {
        var src = vedio.getAttribute('src');
        if (src.indexOf('2') != -1) {
            src = src.replace('2', '1');
        } else if (src.indexOf('1') != -1) {
            src = src.replace('1', '2');
        }
        vedio.src = src;
    }
    var like = document.getElementById('place_like');
    like.onmousemove = () => {}
    for (var i = 1; i <= 4; i++) {
        let compile = document.getElementById('compile_' + i);
        compile.onmouseleave = compile.onmouseenter = () => {
            let src = compile.getAttribute('src');
            if (src.indexOf('1') != -1) {
                src = src.replace('1', '2');
            } else if (src.indexOf('2') != -1) {
                src = src.replace('2', '1');
            }
            compile.src = src;
        }
    }
    var swiper = document.getElementById('swip');
    setInterval(function() {
        var leng = 0;
        var flag = 0;
        var time = setInterval(() => {
            flag = flag + 1;
            var speed = -67;
            leng = leng + speed;
            swiper.style.marginLeft = swiper.offsetLeft + speed + 'px';
            if (leng <= -268) {
                swiper.style.marginLeft = swiper.offsetLeft - 0.5 + 'px';
                clearInterval(time);
            }
            if (swiper.offsetLeft <= -1340) {
                swiper.style.marginLeft = '0px';
            }
        }, 85)

    }, 5500)
    for (var i = 2; i <= 5; i++) {
        let circle = document.getElementById('Circle_' + i);
        let word = document.getElementById("WORD_" + i);
        word.onmouseenter = word.onmouseleave =
            circle.onmouseenter = circle.onmouseleave = () => {
                var src = circle.getAttribute('src');
                if (src.indexOf('5') != -1) {
                    src = src.replace('5', '3');
                    word.style.backgroundColor = 'rgb(245 245 245)';
                } else if (src.indexOf('3') != -1) {
                    src = src.replace('3', '5');
                    word.style.backgroundColor = 'rgb(255 255 255)';
                }
                circle.src = src;
            }
    }
    for (var i = 1; i <= 5; i++) { //图片的动态切换
        let fixed = document.getElementById('fixed_' + i);
        fixed.onmouseenter = fixed.onmouseleave = () => {
            var src = fixed.getAttribute('src');
            if (src.indexOf('1') != -1) {
                src = src.replace('1', '2');
            } else if (src.indexOf('2') != -1) {
                src = src.replace('2', '1');
            }
            fixed.src = src;
        }
    }
    var Fixed_0 = document.getElementById('WORD');
    var Fixed_1 = document.getElementById('circle');
    var top_9 = Fixed_0.offsetTop;
    var flag = 0;
    window.onscroll = () => {

        var direct = document.getElementById('direct');
        var refer = document.getElementById('refer');
        var WORD = document.getElementById("fixed");
        var circle_4 = document.getElementById('Circle_4');
        var circle_5 = document.getElementById('Circle_5');
        var Content = document.getElementById('content');
        var h = parseInt(Content.getBoundingClientRect().top);
        // console.log(h);
        var three = document.getElementById('toptop');
        if (h < 0) {
            // console.log("大于0");
            three.style.display = 'block';
            three.style.left = '0px';
            three.style.top = '-20px';
        } else if (h > 0) {
            three.style.display = 'none';
            // console.log("小于0");
        }






        var top_3 = parseInt(direct.getBoundingClientRect().top);
        var top_0 = parseInt(window.innerHeight - Content.getBoundingClientRect().bottom);
        if (top_0 >= 0) {
            Fixed_0.style.top = top_9 - top_0 + 'px';
            Fixed_1.style.top = top_9 - top_0 + 'px'; //改变fixed位置
        }
        var top_3 = parseInt(direct.getBoundingClientRect().top); //下方导航栏图标的动态改变，以及相应的图标样式修改
        if (top_3 > 0) {
            WORD.style.display = 'none';
        } else if (top_3 <= 0) {
            WORD.style.display = 'block';
            circle_4.src = '../img/circle_4.png';
            circle_4.style.width = '20px';
            circle_4.style.height = '13.5px';
            circle_4.style.position = 'relative';
            circle_4.style.left = '-3.5px';
            circle_5.src = '../img/circle_5.png';
            circle_5.style.position = 'relative';
            circle_5.style.width = '8px';
            circle_5.style.height = '8px';
            circle_5.style.left = '0px';
            var top_4 = parseInt(refer.getBoundingClientRect().top);
            var top_7 = this.parseInt(window.innerHeight - refer.getBoundingClientRect().bottom)
            if (top_4 <= 30 || top_7 >= 0) {
                WORD.style.display = 'block';
                circle_5.src = '../img/circle_4.png';
                circle_5.style.width = '20px';
                circle_5.style.height = '13.5px';
                circle_5.style.position = 'relative';
                circle_5.style.left = '-3.5px';
                circle_4.src = '../img/circle_5.png';
                circle_4.style.position = 'relative';
                circle_4.style.width = '8px';
                circle_4.style.height = '8px';
                circle_4.style.left = '0px'; //将图标从3 4之间切换
            }
        }
    }
    var TOP_TOP = document.getElementById("TOP_TOP_1");
    TOP_TOP.onmouseover = () => {
            var TP = document.getElementById("TOP_TOP");
            TP.style.display = 'block';
            //将点赞与收藏处所隐藏的div显示，并进行图片的动态切换
            TP.onmousemove = () => {
                for (var i = 1; i <= 4; i++) {
                    let colour = document.getElementById('colour_' + i);
                    colour.onmouseleave = colour.onmouseenter = () => {
                        var src = colour.getAttribute('src');
                        if (src.indexOf('1') != -1) {
                            src = src.replace('1', '2');
                        } else if (src.indexOf('2') != -1) {
                            src = src.replace('2', '1');
                        }
                        colour.src = src;
                    }
                }
            }
            var Place_top = document.getElementById('place_top');
            Place_top.onmouseleave = TP.onmouseleave = () => {
                TP.style.display = 'none';
            }

        }
        //对第一层div所隐藏div进行显示
    var infor_1 = document.getElementById('infor_1');
    var dream_1 = document.getElementById('dream_1');
    var set_1 = document.getElementById('set_1');
    var infor = document.getElementById('infor');
    var dream = document.getElementById('dream');
    var set = document.getElementById('set');
    infor.onmousemove = () => {
        infor_1.style.display = 'block';
    }
    dream.onmousemove = () => {
        dream_1.style.display = 'block';
    }
    set.onmousemove = () => {
        set_1.style.display = 'block';
    }
    infor.onmouseleave = () => {
        infor_1.style.display = 'none';
    }
    dream.onmouseleave = () => {
        dream_1.style.display = 'none';
    }
    set.onmouseleave = () => {


        set_1.style.display = 'none';
    }
    for (var i = 1; i < 5; i++) {
        let SRC = document.getElementById("src_" + i);
        SRC.onmouseenter = SRC.onmouseout = () => {
            var src = SRC.getAttribute('src');
            if (src.indexOf('1') != -1) {
                src = src.replace('1', '2');
            } else if (src.indexOf('2') != -1) {
                src = src.replace('2', '1');
            }
            SRC.src = src;
        }
    }
}