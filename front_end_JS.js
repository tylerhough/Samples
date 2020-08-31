"use strict";
(function() {
    const activeBrowser = ()=>{
        self_node.active = true
        _.emit('begin_state')
    }
    const inactiveBrowser = ()=>{
        self_node.active = false
        _.emit('end_state')
    }
    window.addEventListener('focus', activeBrowser);
    window.addEventListener('blur', inactiveBrowser);
    const META = document.createElement('meta')
    META.charset = "utf-8"
    META.name = "viewport"
    META.content = "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0"
    const TITLE = document.createElement('title')
    TITLE.appendChild(document.createTextNode('0sprey'))
    document.head.appendChild(META)
    document.head.appendChild(TITLE)
    const _ = io('wss://' + window.location.host, {
        transports: ['websocket'],
        rejectUnauthorized: true,
        secure: true
    })
      , url = window.location.port ? 'https://' + window.location.hostname + ":" + window.location.port : 'https://' + window.location.hostname
    const webAnimations = document.createElement('script')
    webAnimations.src = "/javascript/web-animations.min.js"
    webAnimations.type = "text/html"
    document.head.appendChild(webAnimations)
    const favicon = document.createElement('link')
    favicon.href = window.location.hostname + '/favicon'
    favicon.rel = 'shortcut icon'
    document.head.appendChild(favicon);

    _.on('cdc', ()=>{
        window.location.reload()
    }
    )
    const $ = ($)=>{
        let _
        if ($) {
            _ = document.createElement($.a)
            if ($.class) {
                _.className = $.class
            }
            if ($.text) {
                _.textContent = $.text
            }
            if ($.src) {
                _.src = $.src
            }
            if ($.type) {
                _.type = $.type
            }
            if ($.for) {
                _.for = $.for
            }
            if ($.name) {
                _.name = $.name
            }
            if ($.style) {
                _.style = $.style
            }
            if ($.contenteditable) {
                _.contenteditable = $.contenteditable
            }
            if ($.placeholder) {
                _.placeholder = $.placeholder
            }
            if ($.a == 'video' || $.a == 'audio') {
                if ($.autoplay) {
                    _.autoplay = $.autoplay
                }
                if ($.muted) {
                    _.muted = $.muted
                }
                if ($.loop) {
                    _.loop = $.loop
                }
                if ($.controls) {
                    _.controls = $.controls
                }
            } else if ($.a == 'form') {
                if ($.action) {
                    _.action = $.action
                }
                if ($.method) {
                    _.method = $.method
                }
            } else if ($.a == 'link') {
                if ($.href) {
                    _.href = $.href
                }
                if ($.rel) {
                    _.rel = $.rel
                }
            }
        }
        return _
    }

    const shareLink = ()=>{
        const name = "share=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        let i = 0
        const il = ca.length
        for (i; i < il; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }
    let shareLinkCookie = shareLink()
    if (shareLinkCookie) {
        shareLinkCookie = JSON.parse(shareLinkCookie)
        const post = shareLinkCookie.post
        const username = shareLinkCookie.username
        const mimeType = shareLinkCookie.mimeType
        console.log(shareLinkCookie)
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = "share=" + false + ";" + expires + ";path=/";
        if (username) {
            _.emit('shared_content', JSON.stringify({
                b: post,
                source: 'timeline',
                c: username
            }))
        }
        else{
        _.emit('begin_state')
        }
    } else {
        const d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + d.toUTCString();
        document.cookie = "share=" + false + ";" + expires + ";path=/";
        window.location.reload()
    }

    let ptlr = false, c__rendered = undefined, typing_msg_state = false, gc_state = false, gc_gt_state = false, gc_type_selection, settings_track = false, msg_ops_exp_state = false, pstt = false, active = null, m_t = true, mess_rendered = false, prevCSpos, typing_msg, search_data, r_pro, $user, $self_following, $self_followers, $title
    const uploader = new SocketIOFileUpload(_)
    const comment_uploader = new SocketIOFileUpload(_)
    const main_uploader = new SocketIOFileUpload(_)
    const message_uploader = new SocketIOFileUpload(_)
    const pro_pic_uploader = new SocketIOFileUpload(_)
    const svg = ($$)=>{
        const _$ = ($$)=>{
            let s_ = document.createElementNS("http://www.w3.org/2000/svg", $$.type)
            const $$$ = (_,$$)=>{
                if ($$.viewBox) {
                    _.setAttribute('viewBox', $$.viewBox)
                }
                if ($$.class) {
                    _.setAttribute('class', $$.class)
                }
                if ($$.width) {
                    _.setAttribute('width', $$.width)
                }
                if ($$.height) {
                    _.setAttribute('height', $$.height)
                }
                if ($$.x1) {
                    _.setAttribute('x1', $$.x1)
                }
                if ($$.y1) {
                    _.setAttribute('y1', $$.y1)
                }
                if ($$.x2) {
                    _.setAttribute('x2', $$.x2)
                }
                if ($$.y2) {
                    _.setAttribute('y2', $$.y2)
                }
                if ($$.stroke) {
                    _.setAttribute('stroke', $$.stroke)
                }
                if ($$.stroke_width) {
                    _.setAttribute('stroke-width', $$.stroke_width)
                }
                if ($$.stroke_linecap) {
                    _.setAttribute('stroke-linecap', $$.stroke_linecap)
                }
                if ($$.r) {
                    _.setAttribute('r', $$.r)
                }
                if ($$.cy) {
                    _.setAttribute('cy', $$.cy)
                }
                if ($$.cx) {
                    _.setAttribute('cx', $$.cx)
                }
                if ($$.fill) {
                    _.setAttribute('fill', $$.fill)
                }
                if ($$.x) {
                    _.setAttribute('x', $$.x)
                }
                if ($$.y) {
                    _.setAttribute('y', $$.y)
                }
                if ($$.rx) {
                    _.setAttribute('rx', $$.rx)
                }
                if ($$.ry) {
                    _.setAttribute('ry', $$.ry)
                }
                if ($$.d) {
                    _.setAttribute('d', $$.d)
                }
                if ($$.dur) {
                    _.setAttribute('dur', $$.dur)
                }
                if ($$.repeatCount) {
                    _.setAttribute('repeatCount', $$.repeatCount)
                }
                if ($$.path) {
                    _.setAttribute('path', $$.path)
                }
                if ($$.attributeName) {
                    _.setAttribute('attributeName', $$.attributeName)
                }
                if ($$.values) {
                    _.setAttribute('values', $$.values)
                }
            }
            $$$(s_, $$)
            if ($$.animation) {
                const len = $$.animation.length
                let i = 0
                for (i; i < len; i++) {
                    let x = document.createElementNS("http://www.w3.org/2000/svg", $$.animation[i].type)
                    $$$(x, $$.animation[i])
                    s_.appendChild(x)
                }
            }
            return s_
        }
        if ($$) {
            let _
            if (Array.isArray($$) != true) {
                if ($$.type) {
                    return _$($$)
                }
            } else {
                if ($$[0].type != 'svg') {
                    return
                } else {
                    _ = _$($$[0])
                }
                let i = 1
                const arLen = $$.length
                for (i; i < arLen; i++) {
                    _.appendChild(_$($$[i]))
                }
                return _
            }
        }
    }

    const create_box = (data)=>{
        let num_horizontal = data.num_horizontal
          , horizontal_type = data.horizontal_type
          , num_vert = data.num_vert
          , vert_type = data.vert_type
          , col = data.col
          , row = data.row
        const c = document.createElement("canvas");
        c.height = 1200;
        c.width = 1200;
        let style_str = "border:1px solid black;margin-left:5px;position:absolute;border-radius:6px;width:150px;height:150px;"
        if (data.answer == true) {
            style_str += "border:2px solid white;"
        } else {
            style_str += "background-color:white;"
        }
        if (data.type == 1) {
            if (row == 1) {
                style_str += "top:100px;"
            } else if (row == 2) {
                style_str += "top:275px;"
            } else if (row == 3) {
                style_str += "top:450px;"
            }
        } else if (data.type == 2) {
            style_str += "cursor:pointer;"
            if (row == 1) {
                style_str += "top:700px;"
            } else if (row == 2) {
                style_str += "top:900px;margin-bottom:30px;"
            } else if (row == 3) {
                style_str += "top:1050px;"
            }
        }
        if (col == 3) {
            c.style = style_str + "margin-left:-250px;";
        } else if (col == 2) {
            c.style = style_str + "margin-left:-75px;";
        } else if (col == 1) {
            c.style = style_str + "margin-left:100px;";
        }
        const ctx = c.getContext("2d");
        ctx.lineWidth = "2";
        ctx.scale(8, 8);
        if (data.answer == false) {
            if (vert_type == 2) {
                ctx.setLineDash([5, 3]);
            } else {
                ctx.setLineDash([]);
            }
            if (vert_type != 3) {
                if (num_vert == 1) {
                    ctx.moveTo(75, 10);
                    ctx.lineTo(75, 140);
                } else if (num_vert == 2) {
                    ctx.moveTo(50, 10);
                    ctx.lineTo(50, 140);
                    ctx.moveTo(100, 10);
                    ctx.lineTo(100, 140);
                } else if (num_vert == 3) {
                    ctx.moveTo(50, 10);
                    ctx.lineTo(50, 140);
                    ctx.moveTo(75, 10);
                    ctx.lineTo(75, 140);
                    ctx.moveTo(100, 10);
                    ctx.lineTo(100, 140);
                }
            } else {
                ctx.setLineDash([]);
                if (num_vert == 1) {
                    ctx.rect(70, 10, 10, 130);
                } else if (num_vert == 2) {
                    ctx.rect(45, 10, 10, 130);
                    ctx.rect(95, 10, 10, 130);
                } else if (num_vert == 3) {
                    ctx.rect(45, 10, 10, 130);
                    ctx.rect(70, 10, 10, 130);
                    ctx.rect(95, 10, 10, 130);
                }
                ctx.fillStyle = "rgba(30,40,50,.5)"
                ctx.fill();
            }
            ctx.stroke();
            ctx.beginPath();
            if (horizontal_type == 2) {
                ctx.setLineDash([5, 3]);
            } else {
                ctx.setLineDash([]);
            }
            if (horizontal_type != 3) {
                if (num_horizontal == 1) {
                    ctx.moveTo(10, 75);
                    ctx.lineTo(140, 75);
                } else if (num_horizontal == 2) {
                    ctx.moveTo(10, 50);
                    ctx.lineTo(140, 50);
                    ctx.moveTo(10, 100);
                    ctx.lineTo(140, 100);
                } else if (num_horizontal == 3) {
                    ctx.moveTo(10, 50);
                    ctx.lineTo(140, 50);
                    ctx.moveTo(10, 75);
                    ctx.lineTo(140, 75);
                    ctx.moveTo(10, 100);
                    ctx.lineTo(140, 100);
                }
            } else {
                if (num_horizontal == 1) {
                    ctx.rect(10, 70, 130, 10);
                } else if (num_horizontal == 2) {
                    ctx.rect(10, 45, 130, 10);
                    ctx.rect(10, 95, 130, 10);
                } else if (num_horizontal == 3) {
                    ctx.rect(10, 45, 130, 10);
                    ctx.rect(10, 70, 130, 10);
                    ctx.rect(10, 95, 130, 10);
                }
                ctx.fillStyle = "rgba(43, 95, 227,.8)"
                ctx.fill();
            }
        }
        ctx.stroke();
        return c;
    }

    const title_state = (data)=>{
        if ($title) {
            node.title.removeChild($title)
        }
        node.title.appendChild(data)
        $title = data
    }

    const clear_stage = ()=>{
        if (node.stage.contains(node.expanded)) {
            node.stage.removeChild(node.expanded)
        }
        if (node.stage.contains(node.expanded2)) {
            node.stage.removeChild(node.expanded2)
        }
        if (node.stage.contains(node.expanded3)) {
            node.stage.removeChild(node.expanded3)
        }
        if (node.stage.contains(node.expanded4)) {
            node.stage.removeChild(node.expanded4)
        }
    }

    const clear_main = ()=>{
        if (node.main.contains(node.expanded)) {
            node.main.removeChild(node.expanded)
        }
        if (node.main.contains(node.expanded2)) {
            node.main.removeChild(node.expanded2)
        }
        if (node.main.contains(node.expanded3)) {
            node.main.removeChild(node.expanded3)
        }
        if (node.main.contains(node.expanded4)) {
            node.main.removeChild(node.expanded4)
        }
    }

    const chat = (a,b,c)=>{
        _.emit('comments', {
            b: a,
            source: b,
            c: c
        })
    }

    const del = (data)=>{
        _.emit('delete', JSON.stringify({
            id: data
        }))
    }

    const start_message = (data)=>{
        node.sr365.classList.remove('srb1')
        node.sr365.classList.remove('mt60')
        node.r2.appendChild(node.sr365)
        _.emit('get_message_log', JSON.stringify({
            b: data
        }))
    }

    const back = ()=>{
        node.c123.innerHTML = ''
        node.p.innerHTML = ''
        node.sr365.classList.add('srb1')
        node.sr365.classList.add('mt60')
        if (node.cs_messages.contains(node.mk)) {
            node.cs_messages.removeChild(node.mk)
        }
        if (node.cs_messages.contains(node.side_search)) {
            node.cs_messages.removeChild(node.side_search)
        }
        if (node.cs_messages.contains(node.entry2)) {
            node.cs_messages.removeChild(node.entry2)
        }
        node.p.appendChild(node.p365)
        node.p.appendChild(node.sr365)
        node.c123.appendChild(gc_node.gc)
        node.c123.appendChild(node.entry)
        node.c123.appendChild(node.r_)
        m_t = true
    }

    const upvote = (data)=>{
        _.emit('upvote', {
            a: data.a,
            b: data.b
        })
    }

    const downvote = (data)=>{
        _.emit('downvote', {
            a: data.a,
            b: data.b
        })
    }

    const snd_message = ()=>{
        const x = node.mfm.value
        if (x) {
            _.emit('send_message', JSON.stringify({
                m: x
            }))
            setTimeout(()=>{
                node.mfm.value = ''
            }
            , 100)
        }
    }

    const search = (data)=>{
        if (data == '') {
            node.search_mess.innerHTML = ''
            if (node.sr365.contains(search_data_container)) {
                node.sr365.removeChild(search_data_container)
            }
        } else {
            _.emit('search', JSON.stringify({
                a: data,
                b: 'r_'
            }))
        }
    }

    const add_friend = (data)=>{
        _.emit('add_friend', JSON.stringify({
            a: data.a
        }))
        if (p_node.d2.contains(p_node.b2)) {
            p_node.d2.removeChild(p_node.b2)
        }
        if (!p_node.d2.contains(p_node.b2a)) {
            p_node.d2.appendChild(p_node.b2a)
        }
    }

    const uf = (data)=>{
        _.emit('uf', JSON.stringify({
            a: data.a
        }))
        if (!p_node.d2.contains(p_node.b2)) {
            p_node.d2.appendChild(p_node.b2)
        }
        if (p_node.d2.contains(p_node.b2a)) {
            p_node.d2.removeChild(p_node.b2a)
        }
    }

    const settings = (state)=>{
        title_state(node.hl2)
        clear_main()
        if (!state) {
            localStorage.setItem('page', 1)
            window.history.pushState({
                "y": 1
            }, "", "/settings")
        }
        if (!node.main.contains(node.stage)) {
            node.main.innerHTML = ''
            node.main.appendChild(node.stage)
        }
        if (!node.cs.contains(node.cs_settings)) {
            node.cs.appendChild(node.cs_settings)
        }
        if (node.cs.contains(node.cs_home)) {
            node.cs.removeChild(node.cs_home)
        }
        if (node.cs.contains(node.cs_messages)) {
            node.cs.removeChild(node.cs_messages)
        }
        if (node.cs.contains(node.cs_profile)) {
            node.cs.removeChild(node.cs_profile)
        }
        _.emit('d')
    }

    const home = (state)=>{
        clear_main()
        title_state(node.hl)
        if (!state) {
            localStorage.setItem('page', 0)
            window.history.pushState({
                "y": 0
            }, "", "/")
        }
        if (!node.main.contains(node.stage)) {
            node.main.innerHTML = ''
            node.main.appendChild(node.stage)
        }
        if (node.cs.contains(node.cs_settings)) {
            node.cs.removeChild(node.cs_settings)
        }
        if (!node.cs.contains(node.cs_home)) {
            node.cs.appendChild(node.cs_home)
        }
        if (node.cs.contains(node.cs_messages)) {
            node.cs.removeChild(node.cs_messages)
        }
        if (node.cs.contains(node.cs_profile)) {
            node.cs.removeChild(node.cs_profile)
        }
        if (!node.cs_home.contains(node.r)) {
            node.cs_home.appendChild(node.si34)
            node.cs_home.appendChild(node.r)
        }
        node.cs_home.appendChild(node.si34)
        node.cs_home.appendChild(node.r)
        _.emit('c')
    }

    const messages = (state)=>{
        title_state(node.hl4)
        clear_main()
        if (!state) {
            localStorage.setItem('page', 3)
            window.history.pushState({
                "y": 3
            }, "", "/messages")
        }
        if (!node.main.contains(node.stage)) {
            node.main.innerHTML = ''
            node.main.appendChild(node.stage)
        }
        if (node.cs.contains(node.cs_settings)) {
            node.cs.removeChild(node.cs_settings)
        }
        if (node.cs.contains(node.cs_home)) {
            node.cs.removeChild(node.cs_home)
        }
        if (!node.cs.contains(node.cs_messages)) {
            node.cs.appendChild(node.cs_messages)
        }
        if (node.cs.contains(node.cs_profile)) {
            node.cs.removeChild(node.cs_profile)
        }
        _.emit('e')
    }

    const _l_p = (i,ii)=>{
        _.emit('lp', {
            e: i,
            g: ii
        })
    }

    const profile = (state)=>{
        title_state(node.hl3)
        clear_main()
        if (!state) {
            localStorage.setItem('page', 2)
            window.history.pushState({
                "y": 2
            }, "", "/profile")
        }
        if (!node.main.contains(node.stage)) {
            node.main.innerHTML = ''
            node.main.appendChild(node.stage)
        }
        if (node.cs.contains(node.cs_settings)) {
            node.cs.removeChild(node.cs_settings)
        }
        if (node.cs.contains(node.cs_home)) {
            node.cs.removeChild(node.cs_home)
        }
        if (node.cs.contains(node.cs_messages)) {
            node.cs.removeChild(node.cs_messages)
        }
        if (!node.cs.contains(node.cs_profile)) {
            node.cs.appendChild(node.cs_profile)
        }
        if (!node.cs_profile.contains(node.pdp)) {
            node.cs_profile.appendChild(node.pdp)
        }
        if (node.profile.contains(node.un_not)) {
            node.profile.removeChild(node.un_not)
        }
        _.emit('load_profile')
    }

    const notifications = ()=>{
        if (node.pdp.contains(node.un_not_profile)) {
            node.pdp.removeChild(node.un_not_profile)
        }
        if (node.profile.contains(node.un_not)) {
            node.profile.removeChild(node.un_not)
        }
        if (!node.pdp.contains(node.notification_div)) {
            node.pdp.appendChild(node.notification_div)
            _.emit('notifications')
        } else {
            node.pdp.removeChild(node.notification_div)
        }
    }

    const expand = (data)=>{
        if (!profile_pics[data.a])
            node.ex_id.src = url + "/file/" + data.a
        if (!node.stage.contains(data.b)) {
            node.stage.appendChild(data.b)
        }
        data.b.appendChild(close(data.b))
    }

    const expandKey = (data)=>{
        node.ex_id.src = url + '/image/' + data.a
        if (!node.stage.contains(data.b)) {
            node.stage.appendChild(data.b)
        }
        data.b.appendChild(close(data.b))
    }

    const x = ()=>{
        node.main.classList.toggle('s_right')
        node.s_holder.classList.toggle('s_right')
        node.sn24.classList.toggle('sn_open')
        node.m1.classList.toggle('m1_open')
        node.m2.classList.toggle('o')
        node.m3.classList.toggle('m3_open')
    }

    const y = ()=>{
        node.main.classList.remove('s_right')
        node.s_holder.classList.remove('s_right')
        node.sn24.classList.remove('sn_open')
        node.m1.classList.remove('m1_open')
        node.m2.classList.remove('o')
        node.m3.classList.remove('m3_open')
    }

    const upvote_button = ()=>{
        return svg([{
            type: 'svg',
            class: 'mb_10',
            width: '50px',
            height: '50px'
        }, {
            type: 'circle',
            r: '15',
            cx: '25',
            cy: '25',
            stroke: "white",
            fill: "black",
            stroke_width: '1'
        }, {
            type: 'line',
            x1: '17',
            y1: '28',
            x2: '25',
            y2: '20',
            stroke: "#18ab16",
            stroke_width: '2',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '33',
            y1: '28',
            x2: '25',
            y2: '20',
            stroke: "#18ab16",
            stroke_width: '2',
            stroke_linecap: 'round'
        }])
    }

    const downvote_button = ()=>{
        return svg([{
            type: 'svg',
            class: 'mb_10',
            width: '50px',
            height: '50px'
        }, {
            type: 'circle',
            r: '15',
            cx: '25',
            cy: '25',
            stroke: "white",
            fill: "black",
            stroke_width: '1'
        }, {
            type: 'line',
            x1: '17',
            y1: '21',
            x2: '25',
            y2: '29',
            stroke: "red",
            stroke_width: '2',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '33',
            y1: '21',
            x2: '25',
            y2: '29',
            stroke: "red",
            stroke_width: '2',
            stroke_linecap: 'round'
        }])
    }

    const chat_icon = ()=>{
        return svg([{
            type: 'svg',
            width: '45px',
            height: '50px',
            viewBox: '-10 0 530 520'
        }, {
            type: 'path',
            fill: 'white',
            stroke: '#2a78ff',
            stroke_width: '12',
            d: 'M435,19H73C32,19,0,52,0,92v246c0,40,33,73,73,73h29l1,64c0,6,3,11,9,14c2,' + '1,5,2,7,2c3,0,7-1,10-3.262l99.425-76h212c40,0,73-33,73-73V93C512,52,479,19,439,19z M481,339c0,' + '23-18,42-42,42H222c-3,0-7,1-10,3l-79,61l-0-48c-0-8-7-15-15-15H73c-23,0-41-18-41-41V92c0-23,18-41,' + '41-41h366c23,0,41,18,41,41V339z'
        }])
    }

    const env = (data)=>{
        return svg([{
            type: 'svg',
            width: '56px',
            height: '37px',
            class: data
        }, {
            type: 'rect',
            x: '3',
            y: '-3',
            rx: '1',
            ry: '.5',
            width: '50px',
            height: '40px',
            stroke: '#1271c9',
            fill: 'white',
            stroke_width: '4'
        }, {
            type: 'line',
            x1: '3',
            y1: '0',
            x2: '27',
            y2: '18',
            stroke: '#369eff',
            stroke_width: '3',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '27',
            y1: '18',
            x2: '53',
            y2: '0',
            stroke: '#369eff',
            stroke_width: '3',
            stroke_linecap: 'round'
        }])
    }

    const close = (data)=>{
        const x = svg([{
            type: 'svg',
            class: 'x876',
            width: '38px',
            height: '38px'
        }, {
            type: 'circle',
            r: '17',
            cy: '18.5',
            cx: '18.5',
            stroke: "black",
            fill: "#dcd4d4",
            stroke_width: '2'
        }, {
            type: 'line',
            x1: '10.5',
            y1: '26.5',
            x2: '26.5',
            y2: '10.5',
            stroke: 'black',
            stroke_width: '2',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '26.5',
            y1: '26.5',
            x2: '10.5',
            y2: '10.5',
            stroke: 'black',
            stroke_width: '2',
            stroke_linecap: 'round'
        }])
        x.onclick = ()=>{
            if (node.main.contains(data)) {
                node.main.removeChild(data)
            }
        }
        return x
    }

    const send = (data)=>{
        return svg([{
            type: 'svg',
            width: '50px',
            height: '50px',
            class: data
        }, {
            type: 'circle',
            r: '20',
            cy: '22',
            cx: '22',
            fill: '#2a78ff'
        }, {
            type: 'line',
            x1: '14.5',
            y1: '19',
            x2: '22.5',
            y2: '11',
            stroke: 'white',
            stroke_width: '3',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '30.5',
            y1: '19',
            x2: '22.5',
            y2: '11',
            stroke: 'white',
            stroke_width: '3',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '22.5',
            y1: '13',
            x2: '22.5',
            y2: '31',
            stroke: 'white',
            stroke_width: '3',
            stroke_linecap: 'round'
        }])
    }

    const expand_icon = ()=>{
        return svg([{
            type: 'svg',
            width: '50px',
            height: '50px'
        }, {
            type: 'line',
            x1: '5',
            y1: '20',
            x2: '5',
            y2: '5',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '5',
            y1: '5',
            x2: '20',
            y2: '20',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '5',
            y1: '5',
            x2: '20',
            y2: '5',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '45',
            y1: '45',
            x2: '45',
            y2: '30',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '45',
            y1: '45',
            x2: '30',
            y2: '45',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '45',
            y1: '45',
            x2: '30',
            y2: '30',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }])
    }

    const collapse_icon = ()=>{
        return svg([{
            type: 'svg',
            width: '50px',
            height: '50px'
        }, {
            type: 'line',
            x1: '5',
            y1: '20',
            x2: '20',
            y2: '20',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '5',
            y1: '5',
            x2: '20',
            y2: '20',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '20',
            y1: '20',
            x2: '20',
            y2: '5',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '45',
            y1: '30',
            x2: '30',
            y2: '30',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '30',
            y1: '30',
            x2: '45',
            y2: '45',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '30',
            y1: '30',
            x2: '30',
            y2: '45',
            stroke: 'white',
            stroke_width: '4',
            stroke_linecap: 'round'
        }])
    }

    const gc_carrot = ()=>{
        return svg([{
            type: 'svg',
            width: '50px',
            height: '50px',
            class: 'gc_carrot'
        }, {
            type: 'line',
            x1: '17',
            y1: '21',
            x2: '25',
            y2: '29',
            stroke: 'white',
            stroke_width: '2',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '33',
            y1: '21',
            x2: '25',
            y2: '29',
            stroke: 'white',
            stroke_width: '2',
            stroke_linecap: 'round'
        }])
    }

    const typing_bubbles = ()=>{
        return svg([{
            type: 'svg',
            width: '50px',
            height: '35px',
            class: 'tb34'
        }, {
            type: 'circle',
            cx: '10',
            cy: '18',
            r: '5',
            stroke_width: '1',
            fill: '#1c1c21',
            animation: [{
                type: 'animateMotion',
                dur: '3s',
                repeatCount: 'indefinite',
                path: "M0 -3,0 3,0 -3"
            }, {
                type: 'animate',
                attributeName: 'opacity',
                values: "1;.75;.5;.75",
                dur: '3s',
                repeatCount: 'indefinite'
            }]
        }, {
            type: 'circle',
            cx: '25',
            cy: '18',
            r: '5',
            stroke_width: '1',
            fill: '#1c1c21',
            animation: [{
                type: 'animateMotion',
                dur: '3s',
                repeatCount: 'indefinite',
                path: "M0 0,0 3,0 -3,0 0"
            }, {
                type: 'animate',
                attributeName: 'opacity',
                values: ".75;1;.75;.5",
                dur: '1.5s',
                repeatCount: 'indefinite'
            }]
        }, {
            type: 'circle',
            cx: '40',
            cy: '18',
            r: '5',
            stroke_width: '1',
            fill: '#1c1c21',
            animation: [{
                type: 'animateMotion',
                dur: '3s',
                repeatCount: 'indefinite',
                path: "M0 3,0 -3,0 3"
            }, {
                type: 'animate',
                attributeName: 'opacity',
                values: ".5;.75;1;.75",
                dur: '3s',
                repeatCount: 'indefinite'
            }]
        }])
    }

    const plus = ()=>{
        return svg([{
            type: 'svg',
            width: '50px',
            height: '48px'
        }, {
            type: 'line',
            x1: '25',
            y1: '10',
            x2: '25',
            y2: '35',
            stroke: '#42e047',
            stroke_width: '6',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '10',
            y1: '22.5',
            x2: '40',
            y2: '22.5',
            stroke: '#42e047',
            stroke_width: '6',
            stroke_linecap: 'round'
        }])
    }

    const view = ()=>{
        return svg([{
            type: 'svg',
            width: '100px',
            height: '50px'
        }, {
            type: 'ellipse',
            cx: '50',
            cy: '25',
            rx: '20',
            ry: '10',
            fill: 'white',
            stroke: 'black',
            stroke_width: '1.5'
        }, {
            type: 'circle',
            r: '9',
            cy: '25',
            cx: '50',
            stroke: "black",
            fill: "green",
            stroke_width: '1'
        }, {
            type: 'circle',
            r: '5',
            cy: '25',
            cx: '50',
            stroke: "darkgreen",
            fill: "black",
            stroke_width: '1'
        }])
    }

    const bell = ()=>{
        return svg([{
            type: 'svg',
            width: '24px',
            height: '24px',
            class: 'notifications'
        }, {
            type: 'path',
            d: "M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z",
            fill: "white"
        }])
    }

    const private_heart = ()=>{
        const container = $({
            a: "div",
            class: "heart"
        })
        container.appendChild($({
            a: "label",
            text: "Likes"
        }))
        container.appendChild(svg([{
            type: 'svg',
            width: '33px',
            height: '24px'
        }, {
            type: 'path',
            d: "M13 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181",
            stroke: "white"
        }, {
            type: 'line',
            x1: '25',
            y1: '-1',
            x2: '8',
            y2: '18',
            stroke: "red",
            stroke_width: '2',
            stroke_linecap: 'round'
        }]))
        return container
    }

    const posts_tl = ()=>{
        const container = $({
            a: "div",
            class: "posts_tl"
        })
        container.appendChild($({
            a: "label",
            class: "pltl",
            text: "Posts"
        }))
        return container
    }

    let pro_posts, pro_likes

    const profile_heart = ()=>{
        const container = $({
            a: "div",
            class: "heart"
        })
        pro_likes = $({
            a: "label",
            text: "Likes"
        })
        container.appendChild(pro_likes)
        container.appendChild(svg([{
            type: 'svg',
            width: '33px',
            height: '24px'
        }, {
            type: 'path',
            d: "M13 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181",
            stroke: "white"
        }, {
            type: 'ellipse',
            cx: '22',
            cy: '11.5',
            rx: '10',
            ry: '5',
            fill: 'white',
            stroke: 'black',
            stroke_width: '1.5'
        }, {
            type: 'circle',
            r: '4.5',
            cy: '11.5',
            cx: '22',
            stroke: "black",
            fill: "green",
            stroke_width: '1'
        }, {
            type: 'circle',
            r: '2.5',
            cy: '11.5',
            cx: '22',
            stroke: "darkgreen",
            fill: "black",
            stroke_width: '1'
        }]))
        container.onclick = ()=>{
            pro_likes.classList.add('pltl')
            pro_posts.classList.remove('pltl')
            if (node.pdp.contains(node.profile_timeline)) {
                node.pdp.removeChild(node.profile_timeline)
            }
            if (!node.pdp.contains(node.profile_likes)) {
                node.pdp.appendChild(node.profile_likes)
            }
            if (!node.profile_likes.contains(node.pro_top_tl2)) {
                node.profile_likes.prepend(node.pro_top_tl2)
            }
            _.emit('profile_likes')
        }
        return container
    }

    _.on('profile_likes', (data)=>{
        let$ = JSON.parse(data)
    }
    )

    const profile_posts_tl = ()=>{
        const container = $({
            a: "div",
            class: "posts_tl"
        })
        pro_posts = $({
            a: "label",
            text: "Posts",
            class: "pltl"
        });
        container.appendChild(pro_posts)
        container.onclick = ()=>{
            pro_posts.classList.add('pltl')
            pro_likes.classList.remove('pltl')
            if (node.pdp.contains(node.profile_likes)) {
                node.pdp.removeChild(node.profile_likes)
            }
            if (!node.pdp.contains(node.profile_timeline)) {
                node.pdp.appendChild(node.profile_timeline)
            }
            if (!node.profile_timeline.contains(node.pro_top_tl)) {
                node.profile_timeline.prepend(node.pro_top_tl)
            }
        }
        return container
    }

    const gear = ()=>{
        return svg([{
            type: 'svg',
            width: '24px',
            height: '24px',
            class: 'pro_settings'
        }, {
            type: 'path',
            d: "M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z",
            fill: "white"
        }])
    }

    const node = {
        comments: $({
            a: "div",
            class: "comments"
        }),
        home: $({
            a: 'div',
            class: 'ax_ hx89'
        }),
        msg: $({
            a: "div",
            class: "ax_ mx89"
        }),
        stn: $({
            a: "div",
            class: "ax_ sx89"
        }),
        iq: $({
            a: "div",
            class: "ax_ iq89"
        }),
        audio: $({
            a: "div",
            class: "ax_ audio89"
        }),
        nav: $({
            a: "div",
            class: "topnav"
        }),
        un_not: $({
            a: "div",
            class: "un_not"
        }),
        un_not_home: $({
            a: "div",
            class: "un_not_home"
        }),
        un_not_mess: $({
            a: "div",
            class: "un_not mess"
        }),
        un_not_stn: $({
            a: "div",
            class: "un_not mess o"
        }),
        sob: $({
            a: "button",
            class: "so",
            text: "Sign Out"
        }),
        main: $({
            a: "div",
            class: "main"
        }),
        sn24: $({
            a: "div",
            class: "sidenav"
        }),
        m1: $({
            a: "div",
            class: "mx_ m1a"
        }),
        m2: $({
            a: "div",
            class: "mx_ m2a"
        }),
        m3: $({
            a: "div",
            class: "mx_ m2a"
        }),
        expanded: $({
            a: "div",
            class: "expanded"
        }),
        expanded2: $({
            a: "div",
            class: "expanded_"
        }),
        expanded3: $({
            a: "div",
            class: "expanded2"
        }),
        expanded4: $({
            a: "div",
            class: "expanded2 ex4_p"
        }),
        loading_bar: $({
            a: "div",
            class: "loading_bar"
        }),
        r: $({
            a: "div",
            class: "img_container"
        }),
        p: $({
            a: "div"
        }),
        p365: $({
            a: "button",
            class: "pending stealth",
            text: "Pending"
        }),
        sr365: $({
            a: "div",
            class: "srb srb1 mt60"
        }),
        c123: $({
            a: "div",
            class: "content"
        }),
        c1_mess: $({
            a: "center"
        }),
        entry: $({
            a: "input",
            class: "s75",
            placeholder: 'search'
        }),
        r_: $({
            a: "div",
            class: 'j243'
        }),
        entry2: $({
            a: "input",
            class: "search2",
            placeholder: 'search'
        }),
        side_search: $({
            a: "div",
            class: "side_msg"
        }),
        r2: $({
            a: "div"
        }),
        mk: $({
            a: "div",
            class: "msg_content scroller"
        }),
        br: $({
            a: "br"
        }),
        num_not_mess: $({
            a: "label",
            class: "num_not"
        }),
        num_not_stn: $({
            a: "label",
            class: "num_not"
        }),
        num_not: $({
            a: "label",
            class: "num_not"
        }),
        search_mess: $({
            a: "div",
            class: "sr_background_"
        }),
        profile_timeline: $({
            a: "center",
            class: "img_container2"
        }),
        profile_likes: $({
            a: "center",
            class: "img_container2"
        }),
        un_not_profile: $({
            a: "div",
            class: "un_not not_profile"
        }),
        notification_div: $({
            a: "div",
            class: "notification_div"
        }),
        cs_settings: $({
            a: "center"
        }),
        cs_messages: $({
            a: "center"
        }),
        cs_profile: $({
            a: "center"
        }),
        cs_home: $({
            a: "center"
        }),
        pp_p: $({
            a: "div",
            class: "post_profile_2"
        }),
        nb: bell(),
        notifications_lab: $({
            a: 'label',
            class: 'notifications_lab',
            text: 'Notifications'
        }),
        pdp: $({
            a: "div",
            class: "profile_details3"
        }),
        pde: $({
            a: "div",
            class: "expanded_"
        }),
        pl1: $({
            a: "label",
            class: "num_not"
        }),
        pc: $({
            a: "center"
        }),
        pimg: $({
            a: "img",
            class: "profile_img_2"
        }),
        pi: $({
            a: "input",
            class: "stealth",
            type: "file"
        }),
        pl4: $({
            a: "label",
            class: "profile_username",
            text: "My Profile"
        }),
        lppt: $({
            a: "center",
            class: 'img_container2'
        }),
        pro_top_tl: $({
            a: "div",
            class: 'top_tl'
        }),
        pro_top_tl2: $({
            a: "div",
            class: 'top_tl'
        }),
        top_tl: $({
            a: "div",
            class: 'top_tl'
        }),
        posts_tl: posts_tl(),
        cp_d1: $({
            a: 'div',
            class: 'post cp'
        }),
        cp_d2: $({
            a: 'div',
            class: 'post_profile_z'
        }),
        cp_img1: $({
            a: 'img',
            class: 'profile_img'
        }),
        cp_d3: $({
            a: 'div',
            class: 'post_username_z'
        }),
        cp_d4: $({
            a: 'div',
            class: 'img_preview'
        }),
        img_comm_preview: $({
            a: 'div',
            class: 'img_preview'
        }),
        cp_ta: $({
            a: "textarea",
            class: "post_text",
            placeholder: 'Add some text... If you want'
        }),
        cp_d6: $({
            a: 'div',
            class: 'post_footer'
        }),
        cp_b1: $({
            a: 'button',
            class: 'select_img2'
        }),
        cp_img2: $({
            a: 'img',
            class: 'e45',
            src: url + "/img"
        }),
        cp_d7: $({
            a: 'div',
            class: 'send_post'
        }),
        cp_img3: send('send_img'),
        mfm: $({
            a: "textarea",
            class: "msg_area",
            placeholder: "Send Message"
        }),
        s_holder: $({
            a: "div",
            class: "s_holder"
        }),
        reply_comm_box: $({
            a: "textarea",
            class: "reply_comm_box"
        }),
        reply_send_comm: send('send_img rep_snd'),
        reply_white_line: $({
            a: 'div',
            class: 'wl12'
        }),
        replies: $({
            a: 'div'
        }),
        message_options: $({
            a: "div",
            class: "message_options"
        }),
        msg_ops_container: $({
            a: "div",
            class: "msg_ops_holder"
        }),
        vchat: $({
            a: "div",
            class: "msg_ops_holder",
            text: "Video Chat"
        }),
        voice_call: $({
            a: "div",
            class: "msg_ops_holder",
            text: "Voice Call"
        }),
        msg_ops_1a: expand_icon(),
        msg_ops_1b: collapse_icon(),
        is_typing: $({
            a: "div",
            class: "is_typing"
        }),
        is_typing_bubble: $({
            a: 'div',
            class: "mb ty75"
        }),
        hl: $({
            a: "label",
            class: "hl",
            text: "Home"
        }),
        hl2: $({
            a: "label",
            class: "hl2",
            text: "Settings"
        }),
        hl3: $({
            a: "label",
            class: "hl2",
            text: "Profile"
        }),
        hl4: $({
            a: "label",
            class: "hl2",
            text: "Messages"
        }),
        hla: $({
            a: "label",
            class: "aa",
            text: "Messages"
        }),
        hla1: $({
            a: "label",
            class: "aa",
            text: "Home"
        }),
        hlb: $({
            a: "label",
            class: "aa",
            text: "Settings"
        }),
        hliq: $({
            a: "label",
            class: "aa",
            text: "Games"
        }),
        v: $({
            a: "label",
            class: "aa",
            text: "Audio"
        }),
        hlb1: $({
            a: "label",
            class: "aa",
            text: "Messages"
        }),
        profile: $({
            a: "label",
            class: "profile"
        }),
        logo: $({
            a: "img",
            class: "logo",
            src: url + "/logo"
        }),
        ex_id: $({
            a: "img",
            class: "ex"
        }),
        loading: $({
            a: "img",
            src: "svg/loading-blocks.svg"
        }),
        f1: $({
            a: "form",
            action: "/logout",
            method: "post"
        }),
        so: $({
            a: "input",
            class: "stealth",
            type: "submit"
        }),
        pro_pic_input: $({
            a: "input",
            class: "stealth",
            type: "file"
        }),
        main_input: $({
            a: "input",
            class: "stealth",
            type: "file"
        }),
        comment_input: $({
            a: 'input',
            class: 'stealth',
            type: 'file'
        }),
        message_input: $({
            a: 'input',
            class: 'stealth',
            type: 'file'
        }),
        stage: $({
            a: "div"
        }),
        si34: $({
            a: "div",
            class: "upload_post_mask"
        }),
        si34_a: $({
            a: "div",
            class: "mask_plus_a"
        }),
        si34_b: $({
            a: "div",
            class: "mask_plus_b"
        }),
        hitBox: $({
            a: "div",
            class: "hb"
        }),
        title: $({
            a: "div",
            class: "title"
        }),
        s_: $({
            a: "div",
            class: "s"
        }),
        s2: $({
            a: "div",
            class: "s2"
        }),
        menu: $({
            a: "div",
            class: "menu"
        }),
        cs: $({
            a: "div",
            class: "content_standard"
        }),
        num_not_home: $({
            a: "label",
            class: "num_not"
        }),
        _svgg: svg([{
            type: 'svg',
            class: 'x877',
            width: '70px',
            height: '50px'
        }, {
            type: 'line',
            x1: '30',
            y1: '25',
            x2: '55',
            y2: '10',
            stroke: 'white',
            stroke_width: '6',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '30',
            y1: '25',
            x2: '55',
            y2: '40',
            stroke: 'white',
            stroke_width: '6',
            stroke_linecap: 'round'
        }])
    }

    const gc_node = {
        gc: $({
            a: 'div',
            class: 'group_chat_btn'
        }),
        gc_l1: $({
            a: 'label',
            class: 'gc_label',
            text: 'Groups'
        }),
        gc_carrot: gc_carrot(),
        main: $({
            a: "div",
            class: "gc_ops"
        }),
        new: $({
            a: "div",
            class: "new_gc",
            text: "Create Group"
        }),
        new_l1: $({
            a: "label",
            class: "gc_ops_l1",
            text: "Group Name:"
        }),
        new_i1: $({
            a: "input",
            class: "gc_ops_i1",
            placeholder: "Group Name"
        }),
        new_continue: $({
            a: "div",
            class: "new_gc",
            text: "Continue"
        }),
        new_back: $({
            a: "div",
            class: "gc_back",
            text: "Back"
        }),
        new_continue2: $({
            a: "div",
            class: "new_gc",
            text: "Continue"
        }),
        join: $({
            a: "div",
            class: "new_gc",
            text: "Join Group"
        }),
        join_i1: $({
            a: "input",
            class: "gc_ops_i1",
            placeholder: "Search",
            style: 'margin-top:10px'
        }),
        view: $({
            a: "div",
            class: "new_gc",
            text: "My Groups"
        }),
        back: $({
            a: "div",
            class: "gc_back",
            text: "Back"
        }),
        gc_ops_l2: $({
            a: 'label',
            class: "gc_ops_l1",
            text: "Group Type:"
        }),
        gc_gt: $({
            a: "div",
            class: "group_chat_btn"
        }),
        gc_gt_l1: $({
            a: "label",
            class: "gc_label",
            text: "Group Type"
        }),
        gc_c: $({
            a: 'label',
            class: 'gc_c',
            text: "Group chat has been created!"
        }),
        gc_suggested: $({
            a: 'div',
            class: 'gc_suggested'
        }),
        gc_suggested_label: $({
            a: 'label',
            class: 'gc_suggested_label',
            text: 'Suggested:'
        }),
        gt_carrot: gc_carrot(),
        gc_types: $({
            a: "div",
            class: "gc_types"
        }),
        gc_public: $({
            a: "div",
            class: "gc_types_ops",
            text: "Public"
        }),
        gc_private: $({
            a: "div",
            class: "gc_types_ops",
            text: "Private"
        }),
        gc_closed: $({
            a: "div",
            class: "gc_types_ops",
            text: "Closed"
        }),
        gc_pg_label: $({
            a: 'label',
            class: 'gc_c',
            text: 'Find Public Groups'
        }),
        gc_type_des: $({
            a: "label"
        }),
    }

    node.main.appendChild(node.stage)
    const $page = localStorage.getItem('page')
    if (!$page) {
        localStorage.setItem('page', 0)
        window.history.pushState({
            "y": 0
        }, "", "/")
        title_state(node.hl)
        home(true)
    } else {
        if ($page == 0) {
            window.history.pushState({
                "y": 0
            }, "", "/")
            title_state(node.hl)
            home(true)
        } else if ($page == 1) {
            _.emit('d')
            title_state(node.hl2)
            settings(true)
        } else if ($page == 2) {
            title_state(node.hl3)
            profile(true)
        } else if ($page == 3) {
            messages(true)
            title_state(node.hl4)
        }
    }

    window.onpopstate = (e)=>{
        if (e.state) {
            if (e.state.y == 0) {
                home(true)
                title_state(node.hl)
            } else if (e.state.y == 1) {
                _.emit('d')
                settings(true)
                title_state(node.hl2)
            } else if (e.state.y == 2) {
                title_state(node.hl3)
                profile(true)
            } else if (e.state.y == 3) {
                messages(true)
                title_state(node.hl4)
            }
        }
    }

    document.addEventListener("DOMContentLoaded", ()=>{
        document.body.appendChild(node.nav)
        document.body.appendChild(node.sn24)
        document.body.appendChild(node.s_holder)
        document.body.appendChild(node.main)
        document.body.appendChild(node.loading_bar)

        document.body.addEventListener("touchstart", dragStart, false);
        document.body.addEventListener("touchend", dragEnd, false);
        document.body.addEventListener("touchmove", drag, false);
        document.body.addEventListener("mousedown", dragStart, false);
        document.body.addEventListener("mouseup", dragEnd, false);
        document.body.addEventListener("mousemove", drag, false);
    }
    , false)

    node.f1.appendChild(node.so)
    node.un_not.appendChild(node.num_not)
    node.r.appendChild(node.loading)
    node.un_not_stn.appendChild(node.num_not_stn)
    node.un_not_home.appendChild(node.num_not_home)
    node.un_not_mess.appendChild(node.num_not_mess)
    node.si34.appendChild(node.si34_a)
    node.si34.appendChild(node.si34_b)
    node.expanded.appendChild(node.ex_id)
    node.expanded.appendChild(close(node.expanded))
    node.stage.appendChild(node.cs)
    node.s_holder.appendChild(node.s_)
    node.s_holder.appendChild(node.s2)
    node.nav.appendChild(node.logo)
    node.nav.appendChild(node.hitBox)
    node.nav.appendChild(node.profile)
    node.nav.appendChild(node.title)
    node.nav.appendChild(node.m1)
    node.nav.appendChild(node.m2)
    node.nav.appendChild(node.m3)
    node.nav.appendChild(node.menu)
    node.title.appendChild(node.un_not_home)
    node.home.appendChild(node.hla1)
    node.msg.appendChild(node.hla)
    node.stn.appendChild(node.un_not_stn)
    node.stn.appendChild(node.hlb)
    node.iq.appendChild(node.hliq)
    node.audio.appendChild(node.v)
    node.sn24.appendChild(node.home)
    node.sn24.appendChild(node.msg)
    node.sn24.appendChild(node.stn)
    node.sn24.appendChild(node.iq)
    node.sn24.appendChild(node.audio)
    node.sn24.appendChild(node.sob)
    node.sn24.appendChild(node.f1)
    node.cs_messages.appendChild(node.p)
    node.message_options.appendChild(node.msg_ops_container)
    node.message_options.appendChild(node.vchat)
    node.message_options.appendChild(node.voice_call)
    gc_node.gc.appendChild(gc_node.gc_l1)
    gc_node.gc.appendChild(gc_node.gc_carrot)
    gc_node.gc.appendChild(gc_node.main)
    gc_node.main.appendChild(gc_node.new)
    gc_node.main.appendChild(gc_node.join)
    gc_node.main.appendChild(gc_node.view)
    gc_node.gc_gt.appendChild(gc_node.gc_gt_l1)
    gc_node.gc_gt.appendChild(gc_node.gt_carrot)
    gc_node.gc_gt.appendChild(gc_node.gc_types)
    node.cp_d1.appendChild(close(node.expanded4))
    node.cp_d1.appendChild(node.cp_d2)
    node.cp_d1.appendChild(node.cp_d3)
    node.cp_d1.appendChild(node.cp_d4)
    node.cp_d1.appendChild(node.cp_ta)
    node.cp_d1.appendChild(node.cp_d6)
    node.cp_d2.appendChild(node.cp_img1)
    node.cp_b1.appendChild(node.cp_img2)
    node.cp_d6.appendChild(node.cp_b1)
    node.cp_d7.appendChild(node.cp_img3)
    node.cp_d6.appendChild(node.cp_d7)
    node.expanded4.appendChild(node.cp_d1)
    node.msg_ops_container.appendChild(node.msg_ops_1a)
    node.un_not_profile.appendChild(node.pl1)
    node.pdp.appendChild(node.notifications_lab)
    node.pdp.appendChild(gear())
    node.pdp.appendChild(node.nb)
    node.pdp.appendChild(node.pc)
    node.pdp.appendChild(node.pp_p)
    node.pdp.appendChild(node.pi)
    node.pdp.appendChild(node.profile_timeline)
    node.pc.appendChild(node.pl4)
    node.pp_p.appendChild(node.pimg)
    node.p.appendChild(node.p365)
    node.p.appendChild(node.sr365)

    const handleDrag = ()=>{
        node.cp_d1.classList.add('filehover')
    }

    node.cp_d1.ondragover = (e)=>{
        e.preventDefault()
        handleDrag()
    }

    const videoDiv = $({
        a: "div",
        style: 'position:fixed;top:50px;bottom:0px;left:0px;right:0px;z-index:10;'
    })
    const video = document.createElement('video');
    videoDiv.appendChild(video)
    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    video.style.minWidth = '200px'
    video.style.width = '100%'
    video.style.height = '100%'

    video.style.borderRadius = '6px'
    video.style.zIndex = '10'
    video.style.position = 'absolute'
    video.style.left = '0px'
    video.style.right = '0px'
    video.style.top = '0px'
    video.style.bottom = '0px'
    video.style.objectFit = 'cover';

    const video2 = document.createElement('video');
    videoDiv.appendChild(video2)
    video2.setAttribute('playsinline', '');
    video2.setAttribute('autoplay', '');
    video2.setAttribute('muted', '');
    video2.style.width = '200px'
    video2.style.height = 'auto';
    video2.style.borderRadius = '6px'
    video2.style.zIndex = '11'
    video2.style.position = 'absolute'
    video2.style.top = '0px'
    video2.style.left = '0px'
    video2.style.objectFit = 'cover';

    const incoming_call_div = $({
        a: 'div',
        style: 'position:fixed;top:0px;bottom:0px;left:0px;right:0px;background-color:rgba(0,0,0,0.4);display:flex;justify-content:center;align-items:center;z-index:12;'
    })
    const incoming_call = $({
        a: "div",
        style: "min-width:300px;min-height:100px;max-width:100%;width:350px;height:150px;border-radius:12px;background-color:white;display:flex;justify-content:center;align-items:center;flex-wrap: wrap;"
    })
    const incoming_call_label = $({
        a: "label",
        style: 'font-size:18px;'
    })
    const decline_call = $({
        a: 'div',
        text: 'Decline',
        style: 'width:100px;height:50px;border-radius:12px;background-color:#9e0000;color:white;display:flex;justify-content:center;align-items:center;margin-right:20px;cursor:pointer;'
    })
    const accept_call = $({
        a: 'div',
        text: 'Accept',
        style: 'width:100px;height:50px;border-radius:12px;background-color:green;color:white;display:flex;justify-content:center;align-items:center;cursor:pointer;'
    })
    const disconnect_call = $({
        a: 'div',
        text: "X",
        style: 'border-radius:50%;width:50px;height:50px;background-color:#9e0000;color:white;display:flex;justify-content:center;align-items:center;margin-right:20px;cursor:pointer;position:absolute;bottom:25px;left:50%;margin-left:-25px;z-index:12;box-shadow:0px 0px 4px 1px black;font-size:40px;'
    })
    incoming_call.appendChild(incoming_call_label)
    incoming_call.appendChild(decline_call)
    incoming_call.appendChild(accept_call)
    incoming_call_div.appendChild(incoming_call)
    videoDiv.appendChild(disconnect_call)

    let stop = k=>video.srcObject.getTracks().map(t=>t.kind == k && t.stop());

    const peerConnections = {};
    let peerConnection;
    const config = {
        iceServers: [{
            urls: ["stun:stun.l.google.com:19302"]
        }]
    };

    _.on("answer", (id,description)=>{
        peerConnections[id].setRemoteDescription(description);
    }
    );

    _.on("disconnectPeer", id=>{
        if (peerConnections[id]) {
            peerConnections[id].close();
            delete peerConnections[id];
        } else {
            peerConnection.close();
        }
    }
    );

    const appendVideo = (video)=>{
        document.body.appendChild(video)
        node.main.appendChild(video)
    }

    node.vchat.onclick = ()=>{
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                facingMode: 'user',
                minWidth: 1280,
                minHeight: 720,
                aspectRatio: 1.77
            }
        }).then((stream)=>{
            video.srcObject = stream;
            appendVideo(videoDiv)
            stop('audio')
            _.emit('call')
        }
        );
    }

    _.on('incoming_call', (data)=>{
        data = JSON.parse(data)
         _.emit('ringing',JSON.stringify(data))
        const profile_img = $({
            a: 'img',
            class: "profile_img"
        })
        set_pro_data(data.username, url + '/files/' + data.username, profile_img)
        incoming_call.prepend(profile_img)
        incoming_call_label.textContent = "Incoming call from: " + data.username
        document.body.appendChild(incoming_call_div)
        decline_call.onclick = ()=>{
            _.emit('decline_call', JSON.stringify(data))
            document.body.removeChild(incoming_call_div)
        }
        accept_call.onclick = ()=>{
             await navigator.mediaDevices.getUserMedia({audio:true,video:{facingMode:'user',minWidth:1280,minHeight:720,width:window.innerWidth,height:window.innerHeight,minAspectRatio:1.77}}).then((stream)=>{
             video.srcObject = stream;
            _.emit('broadcaster')
             stop('audio')
            appendVideo(videoDiv)
            _.emit('call')
            });
            _.emit('accept_call', JSON.stringify(data))
            document.body.removeChild(incoming_call_div)
        }
    }
    )

    _.on("video_chat_connection", (id)=>{
        const peerConnection = new RTCPeerConnection(config);
        peerConnections[id] = peerConnection;
        let stream = video.srcObject;
        stream.getTracks().forEach((track)=>peerConnection.addTrack(track, stream));
        peerConnection.onicecandidate = (e)=>{
            if (e.candidate) {
                _.emit("update_connection", id, e.candidate);
            }
        }
        ;
        peerConnection.createOffer().then((sdp)=>{
            peerConnection.setLocalDescription(sdp)
        }
        ).then(()=>{
            _.emit("video_chat_sync", id, peerConnection.localDescription);
        }
        );
    }
    );

    _.on("video_chat_sync", (id,description)=>{
        peerConnection = new RTCPeerConnection(config);
        peerConnection.setRemoteDescription(description).then(()=>peerConnection.createAnswer()).then(sdp=>peerConnection.setLocalDescription(sdp)).then(()=>{
            _.emit("answer", id, peerConnection.localDescription);
        }
        );
        peerConnection.ontrack = (event)=>{
            video.srcObject = event.streams[0];
        }
        ;
        peerConnection.onicecandidate = (event)=>{
            if (event.candidate) {
                _.emit("update_connections", id, event.candidate);
            }
        }
        ;
        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: {
                facingMode: 'user',
                minWidth: 1280,
                minHeight: 720,
                aspectRatio: 1.77
            }
        }).then((stream)=>{
            video2.srcObject = stream;
            videoDiv.appendChild(video2)
            stop('audio')
            _.emit('video_chat_connection2', JSON.stringify(id))
        }
        );
    }
    );

    _.on("video_chat_connection2", (id)=>{
        const peerConnection = new RTCPeerConnection(config);
        peerConnections[id] = peerConnection;
        let stream = video2.srcObject;
        stream.getTracks().forEach(track=>peerConnection.addTrack(track, stream));
        peerConnection.onicecandidate = (e)=>{
            if (e.candidate) {
                _.emit("update_connection", id, e.candidate);
            }
        }
        ;
        peerConnection.createOffer().then((sdp)=>{
            peerConnection.setLocalDescription(sdp)
        }
        ).then(()=>{
            _.emit("video_chat_sync2", id, peerConnection.localDescription);
        }
        );
    }
    );

    _.on("video_chat_sync2", (id,description)=>{
        peerConnection = new RTCPeerConnection(config);
        peerConnection.setRemoteDescription(description).then(()=>peerConnection.createAnswer()).then(sdp=>peerConnection.setLocalDescription(sdp)).then(()=>{
            _.emit("answer", id, peerConnection.localDescription);
        }
        );
        peerConnection.ontrack = (event)=>{
            video2.srcObject = event.streams[0];

            video2.style.minWidth = '200px'
            video2.style.width = '100%'
            video2.style.height = '100%'
            video2.style.borderRadius = '6px'
            video2.style.zIndex = '10'
            video2.style.position = 'absolute'
            video2.style.left = '0px'
            video2.style.right = '0px'
            video2.style.top = '0px'
            video2.style.bottom = '0px'

            video.style.width = '200px'
            video.style.height = 'auto';
            video.style.borderRadius = '6px'
            video.style.zIndex = '11'
            video.style.position = 'absolute'
            video.style.top = '0px'
            video.style.left = '0px'
        }
        ;
        peerConnection.onicecandidate = (event)=>{
            if (event.candidate) {
                _.emit("update_connections", id, event.candidate);
            }
        }
        ;
    }
    );

    _.on("update_connections", (id,candidate)=>{
        peerConnections[id].addIceCandidate(new RTCIceCandidate(candidate));
    }
    );

    _.on('update_connection', (id,candidate)=>{
        peerConnection.addIceCandidate(new RTCIceCandidate(candidate)).catch((e)=>{
            console.error(e)
        }
        );
    }
    )

    const x64ue = $({
        a: 'div',
        class: 'them'
    })
    x64ue.appendChild(typing_bubbles())
    node.is_typing_bubble.appendChild(x64ue)

    let prev_selected;

    _.on('cf8_return_pb', (data)=>{
        iq_node.cf8_pb = JSON.parse(data)
    }
    )

    node.nb.onclick = ()=>{
        notifications()
    }

    gc_node.main.onclick = (e)=>{
        e.stopPropagation()
    }

    node.entry.onkeyup = ()=>{
        search(node.entry.value)
    }

    const gc_suggested_box = (data)=>{
        const username = data.a
        const $_ = $({
            a: 'div',
            class: 'gc_suggested_box',
            style: data.i
        })
        const p_img = $({
            a: 'img',
            class: 'profile_img'
        })
        set_pro_data(username, url + '/files/' + username, p_img)
        const un = $({
            a: 'label',
            class: 'gc_suggested_un',
            text: data.a
        })
        const px = plus()
        $_.prepend(px)
        $_.prepend(un)
        $_.prepend(p_img)
        $_.onclick = (e)=>{
            e.stopPropagation()
            gc_node.gc_suggested.removeChild($_)
            _.emit('invite_to_group', JSON.stringify({
                user: data.a,
                group: data.g
            }))
        }
        return $_
    }

    const join_suggested_box = (data)=>{
        const x = $({
            a: 'div',
            class: 'gc_suggested_box',
            style: data.a
        })
        const group_name = $({
            a: 'label',
            class: 'join_l2',
            text: data.b
        })
        const members = $({
            a: 'label',
            class: 'join_l1',
            text: data.c + ' members'
        })
        const v_lab = $({
            a: 'label',
            class: 'join_l3',
            text: 'View'
        })
        const j_lab = $({
            a: 'label',
            class: 'join_l3',
            text: 'Join'
        })
        const px = plus()
        const vx = view()
        x.appendChild(group_name)
        x.appendChild(members)
        if (data.d == false) {
            x.appendChild(px)
            x.appendChild(j_lab)
            x.onclick = ()=>{
                x.removeChild(px)
                x.removeChild(j_lab)
                members.textContent = (data.c + 1) + ' members'
                x.appendChild(vx)
                x.appendChild(v_lab)
                _.emit('join_public_group', JSON.stringify({
                    group: data.b
                }))
            }
        } else {
            x.appendChild(vx)
            x.appendChild(v_lab)
            x.onclick = ()=>{
                _.emit('view_public_group', JSON.stringify({
                    group: data.b
                }))
            }
        }
        return x
    }

    const view_sr_parent = $({
        a: 'div',
        class: 'view_sr_parent'
    })

    gc_node.view.onclick = (e)=>{
        e.stopPropagation()
        gc_node.main.innerHTML = ''
        view_sr_parent.innerHTML = ''
        gc_node.main.appendChild(view_sr_parent)
        gc_node.main.appendChild(gc_node.back)
        _.emit('my_groups')
    }

    _.on('my_groups', (data)=>{
        const $_ = JSON.parse(data)
          , groups = $_.groups
        let i = 0
        const g = groups.length
        for (i; i < g; i++) {
            const sr = $({
                a: 'div',
                class: 'search_results'
            })
              , gn = $({
                a: 'label',
                class: 'srx_',
                text: groups[i].group
            })
              , mc = $({
                a: 'label',
                class: 'view_l2',
                text: groups[i].members.length + ' members'
            })
              , gpip_parent = $({
                a: 'div',
                class: 'group_pro_img_prev'
            })
            let ii = 0
            const gg = groups[i].members.length >= 5 ? 5 : groups[i].members.length
            for (ii; ii < gg; ii++) {
                const gpip = $({
                    a: 'img',
                    class: 'gpip'
                })
                const username = groups[i].members[ii]
                set_pro_data(username, url + '/files/' + username, gpip)
                gpip_parent.appendChild(gpip)
            }
            sr.appendChild(gn)
            sr.appendChild(mc)
            sr.appendChild(gpip_parent)
            view_sr_parent.appendChild(sr)
        }
    }
    )

    gc_node.join.onclick = (e)=>{
        e.stopPropagation()
        gc_node.main.innerHTML = ''
        gc_node.main.appendChild(gc_node.gc_pg_label)
        gc_node.main.appendChild(gc_node.join_i1)
        gc_node.main.appendChild(gc_node.gc_suggested_label)
        gc_node.main.appendChild(gc_node.gc_suggested)
        gc_node.main.appendChild(gc_node.back)
        _.emit('get_public_group_suggestions')
    }

    _.on('invite_failure', (data)=>{
        alert(JSON.parse(data).err)
    }
    )

    _.on('set_public_group_suggestions', (data)=>{
        const $ = JSON.parse(data)
        let suggestions = $.suggestions
          , i = 0
        const g = suggestions.length
          , _$_ = "grid-column-start:"
        for (i; i < g; i++) {
            let $col = _$_ + (i + 1)
            let is_member = false
            if (suggestions[i].members.indexOf($.user) != -1) {
                is_member = true
            }
            let$$ = join_suggested_box({
                a: $col,
                b: suggestions[i].group,
                c: suggestions[i].members.length,
                d: is_member
            })
            gc_node.gc_suggested.appendChild($$)
        }
    }
    )

    node.mfm.onkeydown = (e)=>{
        window.clearTimeout(typing_msg)
        if (typing_msg_state == false) {
            typing_msg_state = true
            _.emit('typing_msg', JSON.stringify({
                a: typing_msg_state
            }))
        }
        typing_msg = window.setTimeout(()=>{
            typing_msg_state = false
            _.emit('typing_msg', JSON.stringify({
                a: typing_msg_state
            }))
        }
        , 1000)
    }

    node.mfm.onkeyup = (e)=>{
        const code = (e.keyCode ? e.keyCode : e.which)
        if (code == 13) {
            _.emit('send_message', JSON.stringify({
                m: node.mfm.value
            }))
            node.mfm.value = ''
        }
    }

    const open_gc = ()=>{
        gc_node.gc_carrot.classList.add('flip_carrot')
        gc_node.main.classList.add('gc_ops_open')
        gc_state = true
    }

    const close_gc = ()=>{
        gc_node.gc_carrot.classList.remove('flip_carrot')
        gc_node.main.classList.remove('gc_ops_open')
        gc_state = false
    }

    gc_node.gc.onclick = ()=>{
        if (gc_state == false) {
            open_gc()
            gc_node.gc.style.border = '2px solid #6a07f3'
        } else {
            close_gc()
            gc_node.gc.removeAttribute('style')
        }
    }

    const new_gc_onclick = ()=>{
        gc_node.main.innerHTML = ''
        gc_node.main.appendChild(gc_node.new_l1)
        gc_node.main.appendChild(gc_node.new_i1)
        gc_node.main.appendChild(gc_node.gc_ops_l2)
        gc_node.main.appendChild(gc_node.gc_gt)
        gc_node.main.appendChild(gc_node.gc_type_des)
        gc_node.main.appendChild(gc_node.new_continue)
        gc_node.main.appendChild(gc_node.back)
    }

    gc_node.new.onclick = (e)=>{
        e.stopPropagation()
        new_gc_onclick()
    }

    gc_node.back.onclick = (e)=>{
        e.stopPropagation()
        gc_node.main.innerHTML = ''
        gc_node.gc_suggested.innerHTML = ''
        gc_node.main.appendChild(gc_node.new)
        gc_node.main.appendChild(gc_node.join)
        gc_node.main.appendChild(gc_node.view)
    }

    gc_node.new_i1.onclick = (e)=>{
        e.stopPropagation()
    }

    gc_node.new_continue.onclick = (e)=>{
        e.stopPropagation()

        const $$ = gc_node.new_i1.value
          , _$ = gc_type_selection
        gc_node.new_i1.removeAttribute('style')
        gc_node.gc_gt.removeAttribute('style')

        if ($$) {
            if (_$) {
                _.emit('group_sanitation', JSON.stringify({
                    group: $$,
                    type: _$
                }))
            } else {
                gc_node.gc_gt.style.border = '2px solid red'
            }
        } else {
            gc_node.new_i1.style.border = '2px solid red'
        }
    }

    main_uploader.listenOnDrop(node.cp_d1)
    pro_pic_uploader.listenOnInput(node.pro_pic_input)
    main_uploader.listenOnInput(node.main_input)
    comment_uploader.listenOnInput(node.comment_input)
    message_uploader.listenOnInput(node.message_input)

    comment_uploader.addEventListener("start", function(event) {
        event.file.meta.page = "comment";
    });
    main_uploader.addEventListener("start", function(event) {
        event.file.meta.page = "dashboard";
    });
    message_uploader.addEventListener("start", function(event) {
        event.file.meta.page = "messages";
    });
    pro_pic_uploader.addEventListener("start", function(event) {
        event.file.meta.page = "profile";
    });

    comment_uploader.addEventListener("progress", (event)=>{
        let percent = event.bytesLoaded / event.file.size * 100
        node.loading_bar.style.width = percent.toFixed(2) + '%'
        if (percent == 100) {
            node.loading_bar.style.width = '0%'
        }
    }
    )
    main_uploader.addEventListener("progress", (event)=>{
        let percent = event.bytesLoaded / event.file.size * 100
        node.loading_bar.style.width = percent.toFixed(2) + '%'
        if (percent == 100) {
            node.loading_bar.style.width = '0%'
        }
    }
    )
    message_uploader.addEventListener("progress", (event)=>{
        let percent = event.bytesLoaded / event.file.size * 100
        node.loading_bar.style.width = percent.toFixed(2) + '%'
        if (percent == 100) {
            node.loading_bar.style.width = '0%'
        }
    }
    )
    pro_pic_uploader.addEventListener("progress", (event)=>{
        let percent = event.bytesLoaded / event.file.size * 100
        node.loading_bar.style.width = percent.toFixed(2) + '%'
        if (percent == 100) {
            node.loading_bar.style.width = '0%'
        }
    }
    )

    node.reply_comm_box.addEventListener('input', ()=>{
        node.reply_comm_box.style.height = 'auto'
        node.reply_comm_box.style.height = (node.reply_comm_box.scrollHeight) + 'px'
    }
    )

    gc_node.new_back.onclick = (e)=>{
        e.stopPropagation()
        gc_node.gc_suggested.innerHTML = ''
        gc_node.new_l1.textContent = "Group Name:"
        gc_node.new_i1.value = ''
        gc_node.new_i1.placeholder = 'Group Name'
        new_gc_onclick()
    }

    gc_node.gc_gt.onclick = (e)=>{
        e.stopPropagation()
        if (gc_gt_state == false) {
            gc_node.gc_types.appendChild(gc_node.gc_public)
            gc_node.gc_types.appendChild(gc_node.gc_private)
            gc_node.gc_types.appendChild(gc_node.gc_closed)
            gc_node.gc_types.classList.add('gc_types_open')
            gc_node.gt_carrot.classList.add('flip_carrot')
            gc_gt_state = true
        } else {
            gc_node.gc_types.removeChild(gc_node.gc_public)
            gc_node.gc_types.removeChild(gc_node.gc_private)
            gc_node.gc_types.removeChild(gc_node.gc_closed)
            gc_node.gc_types.classList.remove('gc_types_open')
            gc_node.gt_carrot.classList.remove('flip_carrot')
            gc_gt_state = false
        }
    }

    node.audio.onclick = ()=>{
        clear_main()

    }

    gc_node.gc_public.onclick = ()=>{
        gc_type_selection = 1
        gc_node.gc_type_des.textContent = "Anyone can join the group without admin permission"
        gc_node.gc_gt_l1.textContent = "Public"
    }
    gc_node.gc_private.onclick = ()=>{
        gc_type_selection = 2
        gc_node.gc_type_des.textContent = "Anyone can request to join the group - admin can confirm or deny"
        gc_node.gc_gt_l1.textContent = "Private"
    }

    gc_node.gc_closed.onclick = ()=>{
        gc_type_selection = 3
        gc_node.gc_type_des.textContent = "Nobody can request to join the group - admin can send invites"
        gc_node.gc_gt_l1.textContent = "Closed"
    }
    node.logo.onclick = ()=>{
        home()
    }
    node.hitBox.onclick = ()=>{
        node.sn24.classList.toggle('sn_open')
        node.s_holder.classList.toggle('s_right')
        node.main.classList.toggle('s_right')
        node.m1.classList.toggle('m1_open')
        node.m2.classList.toggle('o')
        node.m3.classList.toggle('m3_open')
    }

    node.sob.onclick = ()=>{
        node.so.click()
    }

    node.profile.onclick = ()=>{
        profile()
    }

    node.msg.onclick = ()=>{
        messages()
    }

    node.stn.onclick = ()=>{
        settings()
    }

    node.home.onclick = ()=>{
        home()
    }

    node.mk.onwheel = (e)=>{
        e.preventDefault();
        node.mk.scrollTop += (-1 * e.deltaY)
    }

    node.expanded.onclick = ()=>{
        if (node.stage.contains(node.expanded)) {
            node.stage.removeChild(node.expanded)
        }
    }

    node.expanded2.onclick = ()=>{
        if (node.stage.contains(node.expanded2)) {
            node.stage.removeChild(node.expanded2)
        }
    }
    node.expanded3.onclick = ()=>{
        if (node.stage.contains(node.expanded3)) {
            node.stage.removeChild(node.expanded3)
        }
    }
    node.expanded4.onclick = ()=>{
        if (node.main.contains(node.expanded4)) {
            node.main.removeChild(node.expanded4)
        }
    }
    node.si34.onclick = ()=>{
        if ($user) {
            set_pro_data($user, url + '/files/' + $user, node.cp_img1)
            if (node.cp_d3.textContent != $user) {
                node.cp_d3.textContent = $user
            }
            if (!node.main.contains(node.expanded4)) {
                clear_stage()
                node.main.appendChild(node.expanded4)
            }
            node.cp_d1.onclick = (e)=>{
                e.stopPropagation()
            }
            node.cp_img2.onclick = ()=>{
                node.main_input.click()
            }
            node.cp_d7.onclick = ()=>{
                _.emit('send_post', node.cp_ta.value)
                _.emit('remove_temp')
                if (node.main.contains(node.expanded4)) {
                    node.main.removeChild(node.expanded4)
                }
                if (node.cp_ta.value != '') {
                    node.cp_ta.value = ''
                }
            }
        }
    }
    node.cs.onclick = ()=>{
        y()
    }

    _.on('group_sanitation', (data)=>{
        const _$ = JSON.parse(data)
          , $_ = gc_node.main
        if (_$.valid == true) {
            gc_node.new_i1.removeAttribute('style')
            gc_node.new_l1.textContent = "Invite by Username:"
            gc_node.new_i1.value = ''
            gc_node.new_i1.placeholder = 'Search'
            $_.removeChild(gc_node.new_continue)
            $_.removeChild(gc_node.back)
            $_.removeChild(gc_node.gc_ops_l2)
            $_.removeChild(gc_node.gc_gt)
            $_.removeChild(gc_node.gc_type_des)
            $_.appendChild(gc_node.new_continue2)
            $_.appendChild(gc_node.new_back)
            if (_$.suggested) {
                $_.prepend(gc_node.gc_suggested)
                $_.prepend(gc_node.gc_suggested_label)
                const s_len = _$.suggested.length
                  , _$_ = "grid-column-start:"
                let i = 0
                for (i; i < s_len; i++) {
                    let $col = _$_ + (i + 1)
                    let$$ = gc_suggested_box({
                        a: _$.suggested[i],
                        i: $col,
                        g: _$.group
                    })
                    gc_node.gc_suggested.appendChild($$)
                }
            }
            $_.prepend(gc_node.gc_c)
        } else {
            gc_node.new_i1.style.border = '2px solid red'
        }
    }
    )

    _.on('start', (data)=>{
        data = JSON.parse(data)
        $user = data.a
        const $notifications = data.b
        node.profile.textContent = $user;
        if ($notifications > 0) {
            node.num_not.textContent = $notifications
            if (!node.profile.contains(node.un_not)) {
                node.profile.appendChild(node.un_not)
            }
        }
        _.emit('timeline')
    }
    )
    let $guest
    const createAccountDiv = $({
        a: 'div',
        style: 'position:fixed;top:0px;bottom:0px;right:0px;left:0px;background-color:rgba(0,0,0,.7);z-index:14;display:flex;justify-content:center;align-items:center;'
    })
    _.on('guest_start', (data)=>{
        $guest = true
        node.profile.textContent = 'Guest'
        const createAccountForm = $({
            a: 'div',
            class: 'sioca'
        })
        const header = $({
            a: 'div',
            text: 'Sign in or Create an Account to Continue',
            class: 'sioca_header'
        })
        const usernameLabel = $({
            a: 'label',
            class: 'sioca_unl1',
            text: 'Username'
        })
        const usernameInput = $({
            a: 'input',
            class: 'sioca_un1'
        })
        const passwordLabel = $({
            a: 'label',
            class: 'sioca_unl1 sioca_unl2',
            text: 'Password'
        })
        const passwordInput = $({
            a: 'input',
            class: 'sioca_un1 sioca_un2'
        })
        passwordLabel.onclick = (e)=>{
            e.stopPropagation()
            passwordInput.click()
        }
        passwordInput.click = (e)=>{
            e.stopPropagation()
        }
        usernameInput.onclick = (e)=>{
            e.stopPropagation()
        }
        usernameLabel.onclick = (e)=>{
            e.stopPropagation()
            usernameInput.click()
        }
        createAccountDiv.appendChild(createAccountForm)
        createAccountForm.appendChild(header)
        createAccountForm.appendChild(usernameLabel)
        createAccountForm.appendChild(usernameInput)
        createAccountForm.appendChild(passwordLabel)
        createAccountForm.appendChild(passwordInput)
        createAccountDiv.onclick = ()=>{
            document.body.removeChild(createAccountDiv)
            node.main.classList.remove('blur')
        }
        node.profile.onclick = ()=>{
            console.log('Sign up or create an account')
            document.body.appendChild(createAccountDiv)
            node.main.classList.add('blur')
        }
        setTimeout(function() {
            _.emit('timeline')
        }, 500)
    }
    )

    _.on('b', (x)=>{
        if (settings_track == false) {
            const settings_menu = $({
                a: 'div',
                class: 'settings_menu'
            })
              , settings_label = $({
                a: 'label',
                class: 'settings_label',
                text: 'Settings'
            })
              , settings_categories = $({
                a: 'div',
                class: 'settings_categories'
            })
              , cat1 = $({
                a: 'div',
                class: 'settings_cat',
                text: 'Display'
            })
              , cat2 = $({
                a: 'div',
                class: 'settings_cat s_cat2',
                text: 'Account'
            })
              , cat3 = $({
                a: 'div',
                class: 'settings_cat s_cat3_'
            })
              , sv = svg([{
                type: 'svg',
                width: '50px',
                height: '25px',
                class: 'bg_carrot'
            }, {
                type: 'line',
                x1: '16',
                y1: '8',
                x2: '24',
                y2: '16',
                stroke: 'white',
                stroke_width: '2',
                stroke_linecap: 'round'
            }, {
                type: 'line',
                x1: '32',
                y1: '8',
                x2: '24',
                y2: '16',
                stroke: 'white',
                stroke_width: '2',
                stroke_linecap: 'round'
            }])
              , _sv = svg([{
                type: 'svg',
                class: 'settings_back',
                width: '90px',
                height: '65px'
            }, {
                type: 'line',
                x1: '30',
                y1: '25',
                x2: '55',
                y2: '10',
                stroke: 'white',
                stroke_width: '6',
                stroke_linecap: 'round'
            }, {
                type: 'line',
                x1: '30',
                y1: '25',
                x2: '55',
                y2: '40',
                stroke: 'white',
                stroke_width: '6',
                stroke_linecap: 'round'
            }])
              , cat5 = $({
                a: 'div',
                class: 'settings_cat s_cat5_',
                text: 'Change Password'
            })
              , pass_input1 = $({
                a: 'input',
                placeholder: 'Old Password',
                type: 'password'
            })
              , pass_input2 = $({
                a: 'input',
                placeholder: 'New Password',
                type: 'password'
            })
              , pass_input3 = $({
                a: 'input',
                placeholder: 'Repeat New Pass',
                type: 'password'
            })
              , bg_options = $({
                a: 'div',
                class: 'bg_options'
            })
              , bg_options_list = $({
                a: 'div',
                class: 'settings_bg_ops'
            })
              , bg_stars_option = $({
                a: 'div',
                class: 'bg_stars',
                text: 'Stars'
            })
              , bg_day_option = $({
                a: 'div',
                class: 'bg_day',
                text: 'Day'
            })
              , bg_stars = $({
                a: 'div',
                class: 'bgs bgs1'
            })
              , bg_stars2 = $({
                a: 'div',
                class: 'bgs bgs2'
            })
            settings_menu.appendChild(settings_label)
            bg_stars_option.appendChild(bg_stars)
            bg_stars_option.appendChild(bg_stars2)
            bg_options_list.appendChild(bg_stars_option)
            bg_options_list.appendChild(bg_day_option)
            settings_categories.appendChild(cat1)
            settings_categories.appendChild(cat2)
            settings_menu.appendChild(settings_categories)

            const state1 = ()=>{
                cat2.onclick = ()=>{
                    settings_label.textContent = 'Account'
                    settings_categories.className = 'settings_categories s_a_c'
                    cat1.textContent = 'Change Password'
                    cat2.textContent = 'Enable 2FA'
                    cat2.className = 'settings_cat s_cat2_'
                    settings_menu.appendChild(_sv)
                    cat1.onclick = ()=>{
                        cat1.innerHTML = ''
                        cat1.appendChild(pass_input1)
                        cat2.innerHTML = ''
                        cat2.appendChild(pass_input2)
                        cat3.innerHTML = ''
                        cat3.appendChild(pass_input3)
                        settings_categories.appendChild(cat3)
                        settings_categories.appendChild(cat5)
                        cat5.onclick = ()=>{
                            const a = pass_input1.value
                              , b = pass_input2.value
                              , c = pass_input3.value
                            if (a && b && c) {
                                if (b == c) {
                                    if (b.length >= 8) {
                                        _.emit('change_pass', JSON.stringify({
                                            a: a,
                                            b: b
                                        }))
                                    } else {
                                        console.log('New password must be at least 8 chars')
                                    }
                                } else {
                                    console.log('New password fields do not match')
                                }
                            } else {
                                console.log('Fill required fields')
                            }
                        }
                    }
                }

                cat1.onclick = ()=>{
                    const display_option = ()=>{
                        bg_options.classList.toggle('bg_ops_toggle')
                        sv.classList.toggle('flip_carrot')
                        bg_stars_option.classList.toggle('disp_bg_options')
                        bg_day_option.classList.toggle('disp_bg_options')
                    }
                    settings_label.textContent = 'Display'
                    settings_categories.className = 'settings_categories s_d_c'
                    cat1.textContent = 'Background'
                    cat2.innerHTML = ''
                    cat2.appendChild(sv)
                    cat2.className = 'settings_cat s_cat2'
                    settings_menu.appendChild(_sv)
                    bg_options.appendChild(bg_options_list)
                    cat1.appendChild(bg_options)
                    cat1.onclick = ()=>{
                        display_option()
                    }
                    cat2.onclick = ()=>{
                        display_option()
                    }
                    bg_options_list.onclick = (e)=>{
                        e.stopPropagation()
                    }
                    bg_day_option.onclick = ()=>{
                        node.s_holder.innerHTML = ''
                        node.s_holder.classList.add('day')
                    }
                }
            }
            state1()
            _sv.onclick = ()=>{
                settings_categories.className = 'settings_categories'
                cat1.className = 'settings_cat'
                cat2.className = 'settings_cat s_cat2'
                state1()
                settings_label.textContent = 'Settings'
                cat1.textContent = 'Display'
                cat2.textContent = 'Account'
                settings_menu.removeChild(_sv)
                if (settings_categories.contains(cat3)) {
                    settings_categories.removeChild(cat3)
                }
                if (settings_categories.contains(cat5)) {
                    settings_categories.removeChild(cat5)
                }
            }
            node.cs_settings.appendChild(settings_menu)
            settings_track = true
        }
    }
    )
    _.on('set_pass', (data)=>{
        data = JSON.parse(data)
        if (data.a == true) {
            console.log('Password has been updated')
        } else {
            console.log('The old password you entered did not match our records')
        }
    }
    )

    _.on('fetch_response', (data)=>{
        data = JSON.parse(data)
        const following = data.b
        const followers = data.c
        const username = data.f
        const unread = data.x
        window['following_' + username] = $({
            a: "label",
            class: 'fx_ fx1',
            text: 'Following: ' + following
        })
        window['followers_' + username] = $({
            a: "label",
            class: 'fx_ fx2',
            text: 'Followers: ' + followers
        })
        if (!node.pdp.contains(window['followers_' + username])) {
            node.pdp.appendChild(window['followers_' + username])
        }
        if (!node.pdp.contains(window['following_' + username])) {
            node.pdp.appendChild(window['following_' + username])
        }
        window['following_' + username].onclick = ()=>{
            _.emit('e65', {
                a: username,
                b: 'following',
                c: 'home'
            })
        }
        window['followers_' + username].onclick = ()=>{
            _.emit('e65', {
                a: username,
                b: 'followers',
                c: 'home'
            })
        }
        set_pro_data(username, url + "/files/" + username, node.pimg)
        window['following_' + username].textContent = "Following: " + following
        window['followers_' + username].textContent = "Followers: " + followers
        node.pp_p.onclick = ()=>{
            node.pro_pic_input.click()
        }
        if (unread > 0) {
            if (node.pl1.textContent != unread) {
                node.pl1.textContent = unread
                if (!node.pdp.contains(node.un_not_profile)) {
                    node.pdp.appendChild(node.un_not_profile)
                }
            }
        } else {
            if (node.pdp.contains(node.un_not_profile)) {
                node.pdp.removeChild(node.un_not_profile)
            }
        }
        if (ptlr == false) {
            node.profile_timeline.innerHTML = ''
            _.emit('profile_timeline', {
                a: window.location.hostname,
                b: username,
                c: 'home'
            })
            ptlr = true
        }
    }
    )

    _.on('notification_response', (data)=>{
        data = JSON.parse(data)
        console.log(data)
        const first = data.first
        const follow = data.follow
        data = data.notification
        const message = data.message
        const timestamp = $({
            a: 'label',
            class: 'not_timestamp',
            text: data.time + ', ' + data.date
        })
        const d3 = $({
            a: 'div',
            class: 'ind_not'
        })
        if (first) {
            node.notification_div.innerHTML = ''
        }
        if (data.state == 'unread') {
            const d1 = $({
                a: 'div',
                class: 'unread_mark',
                text: '*'
            })
            node.notification_div.appendChild(d1)
        } else {
            const d1 = $({
                a: 'div',
                class: 'check_a'
            })
              , d2 = $({
                a: 'div',
                class: 'check_b'
            })
            node.notification_div.appendChild(d2)
            node.notification_div.appendChild(d1)
        }
        if (data.type == 'welcome') {
            const b1 = $({
                a: 'button',
                class: 'yes_tour',
                text: 'Yes please'
            })
              , b2 = $({
                a: 'button',
                class: 'no_tour',
                text: 'No thanks'
            })
              , l1 = $({
                a: 'label',
                class: 'not_label',
                text: message
            })
            d3.appendChild(l1)
            d3.appendChild(b1)
            d3.appendChild(b2)
        } else if (data.type == 'followed') {
            const profile_img = $({
                a: 'img',
                class: "profile_img not_pro",
                src: url + '/files/' + message
            })
            profile_img.onclick = (e)=>{
                e.stopPropagation()
                _l_p(message, false)
            }
            //set_pro_data(message,url+'/files/'+message,profile_img)
            const l1 = $({
                a: 'label',
                class: 'not_label nl_wi',
                text: message + ' followed you'
            })
            d3.appendChild(profile_img)
            d3.appendChild(l1)
            if (follow == true) {
                const d4 = $({
                    a: 'div'
                })
                const b3 = $({
                    a: 'button',
                    class: 'f45',
                    text: 'Follow'
                })
                b3.onclick = ()=>{
                    add_friend({
                        a: message
                    })
                    d4.removeChild(b3)
                }
                d4.appendChild(b3)
                d3.appendChild(d4)
            }
            const d5 = $({
                a: 'div'
            })
            const b4 = $({
                a: 'button',
                class: 'view_profile',
                text: 'View Profile'
            })
            d5.appendChild(b4)
            d3.appendChild(d5)
            b4.onclick = ()=>{
                _l_p(message, false)
            }
        } else if (data.type = 'like') {
            const profile_img = $({
                a: 'img',
                class: "profile_img not_pro"
            })
            profile_img.onclick = (e)=>{
                e.stopPropagation()
                _l_p(message, false)
            }
            set_pro_data(message, url + '/files/' + message, profile_img)
            const l1 = $({
                a: 'label',
                class: 'not_label nl_wi',
                text: message + ' liked your post'
            })
            d3.appendChild(profile_img)
            d3.appendChild(l1)
        }
        node.notification_div.appendChild(d3)
    }
    )

    _.on('empty_response', (data)=>{
        data = JSON.parse(data)
        const l1 = $({
            a: 'label',
            class: data.l1_name,
            text: data.l1_text
        })
        node.r.innerHTML = ''
        node.r.appendChild(l1)
    }
    )

    _.on('update_comm_count', (data)=>{
        data = JSON.parse(data)
        const key = data.key
        const comm_count = data.comm_count
        if (window['comm_count' + key]) {
            window['comm_count' + key].textContent = comm_count
        }
        if (window['profile_timeline_comm_count' + key]) {
            window['profile_timeline_comm_count' + key] = comm_count
        }
    }
    )

    const audio_playing = {}
    const keyedSongData = {}
    const audio_footer = $({
        a: "div",
        class: 'audio_footer'
    })
    const audio_keys = []
    const audioControls = $({
        a: 'div',
        class: 'audioControls'
    })
    const play = document.createElement('canvas')
    const prevSong = document.createElement('canvas')
    const nextSong = document.createElement('canvas')

    const playNextAudio = (key)=>{
        const ctx = window['post_audio_ctx' + key]
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#272727";
        ctx.fillRect(0, 0, window['postPlay' + key].width, window['postPlay' + key].height);
        ctx.beginPath()
        ctx.lineWidth = 1
        ctx.fillStyle = 'white'
        ctx.moveTo(32.5, 25)
        ctx.lineTo(32.5, 75)
        ctx.lineTo(77.5, 50)
        ctx.lineTo(32.5, 25)
        ctx.fill()
        ctx.closePath()
        const currentSongPos = audio_keys.indexOf(audio_playing.key)
        window['audio' + key].pause()
        if (currentSongPos != audio_keys.length - 1) {
            audio_playing.key = audio_keys[currentSongPos + 1]
            audio_playing.audio = window['audio' + audio_playing.key]
        } else {
            audio_playing.key = audio_keys[0]
            audio_playing.audio = window['audio' + audio_playing.key]
        }
        window['audio' + audio_playing.key].currentTime = 0;
        window['audio' + audio_playing.key].play()
    }

    const playPrevAudio = (key)=>{
        const currentSongPos = audio_keys.indexOf(audio_playing.key)
        if (window['audio' + audio_playing.key].currentTime > 5) {
            window['audio' + audio_playing.key].currentTime = 0
        } else {
            const ctx = window['post_audio_ctx' + key]
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "#272727";
            ctx.fillRect(0, 0, window['postPlay' + key].width, window['postPlay' + key].height);
            ctx.beginPath()
            ctx.lineWidth = 1
            ctx.fillStyle = 'white'
            ctx.moveTo(32.5, 25)
            ctx.lineTo(32.5, 75)
            ctx.lineTo(77.5, 50)
            ctx.lineTo(32.5, 25)
            ctx.fill()
            ctx.closePath()
            window['audio' + key].pause()
            if (currentSongPos != 0) {
                audio_playing.key = audio_keys[currentSongPos - 1]
                audio_playing.audio = window['audio' + audio_playing.key]
            } else {
                audio_playing.key = audio_keys[audio_keys.length - 1]
                audio_playing.audio = window['audio' + audio_playing.key]
            }
            window['audio' + audio_playing.key].currentTime = 0;
            window['audio' + audio_playing.key].play()
        }
    }

    const renderAudioControls = (key,play,prevSong,nextSong,audioControls,playCtx)=>{
        play.classList = 'play'
        playCtx = play.getContext('2d')
        const ctx = playCtx
        play.onclick = (e)=>{
            e.stopPropagation()
            if (!audio_footer.beenDragged) {
                ctx.globalCompositeOperation = "source-over";
                ctx.fillStyle = "#272727";
                ctx.fillRect(0, 0, play.width, play.height);
                if (audio_playing.playing && audio_playing.key == key) {
                    audio_playing.playing = false
                    window['audio' + key].pause()
                    ctx.beginPath()
                    ctx.lineWidth = 1
                    ctx.fillStyle = 'white'
                    ctx.moveTo(32.5, 25)
                    ctx.lineTo(32.5, 75)
                    ctx.lineTo(77.5, 50)
                    ctx.lineTo(32.5, 25)
                    ctx.fill()
                    ctx.closePath()
                } else {
                    if (!audio_playing.key) {
                        audio_playing.key = key
                    } else {
                        if (audio_playing.key != key) {
                            const ctx = window['post_audio_ctx' + audio_playing.key]
                            ctx.globalCompositeOperation = "source-over";
                            ctx.fillStyle = "#272727";
                            ctx.fillRect(0, 0, window['postPlay' + audio_playing.key].width, window['postPlay' + audio_playing.key].height);
                            ctx.beginPath()
                            ctx.lineWidth = 1
                            ctx.fillStyle = 'white'
                            ctx.moveTo(32.5, 25)
                            ctx.lineTo(32.5, 75)
                            ctx.lineTo(77.5, 50)
                            ctx.lineTo(32.5, 25)
                            ctx.fill()
                            ctx.closePath()
                        }
                        window['audio' + audio_playing.key].pause()
                        audio_playing.key = key
                    }
                    window['audio' + key].play()
                    audio_playing.playing = true
                    ctx.beginPath()
                    ctx.strokeStyle = 'white'
                    ctx.lineWidth = 10
                    ctx.moveTo(34.5, 25)
                    ctx.lineTo(34.5, 75)
                    ctx.stroke()
                    ctx.closePath()
                    ctx.beginPath()
                    ctx.moveTo(64.5, 25)
                    ctx.lineTo(64.5, 75)
                    ctx.stroke()
                }
            }
            audio_footer.beenDragged = false
        }
        play.width = 300;
        play.height = 300;
        ctx.scale(3, 3)
        if (!audio_playing.playing) {
            ctx.beginPath()
            ctx.lineWidth = 1
            ctx.fillStyle = 'white'
            ctx.moveTo(32.5, 25)
            ctx.lineTo(32.5, 75)
            ctx.lineTo(77.5, 50)
            ctx.lineTo(32.5, 25)
            ctx.fill()
            ctx.closePath()
        } else {
            ctx.beginPath()
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 10
            ctx.moveTo(34.5, 25)
            ctx.lineTo(34.5, 75)
            ctx.stroke()
            ctx.closePath()
            ctx.beginPath()
            ctx.moveTo(64.5, 25)
            ctx.lineTo(64.5, 75)
            ctx.stroke()
        }
        prevSong.classList = 'seek'
        const ctx2 = prevSong.getContext('2d')
        prevSong.width = 900;
        prevSong.height = 300;
        prevSong.onclick = (e)=>{
            e.stopPropagation()
            playPrevAudio(key)
        }
        ctx2.scale(3, 3)
        ctx2.fillStyle = 'rgba(71, 10, 255,.4)'
        ctx2.beginPath()
        ctx2.lineWidth = 3
        ctx2.strokeStyle = 'white'
        ctx2.moveTo(177.5, 25)
        ctx2.lineTo(177.5, 75)
        ctx2.lineTo(132.5, 50)
        ctx2.lineTo(178, 26)
        ctx2.fill()
        ctx2.stroke()
        ctx2.closePath()
        ctx2.beginPath()
        ctx2.lineWidth = 3
        ctx2.strokeStyle = 'white'
        ctx2.moveTo(127.5, 25)
        ctx2.lineTo(127.5, 75)
        ctx2.lineTo(82.5, 50)
        ctx2.lineTo(128, 26)
        ctx2.fill()
        ctx2.stroke()
        ctx2.closePath()
        nextSong.classList = 'seek'
        const ctx3 = nextSong.getContext('2d')
        nextSong.width = 900;
        nextSong.height = 300;
        nextSong.onclick = (e)=>{
            e.stopPropagation()
            playNextAudio(key)
        }
        ctx3.scale(3, 3)
        ctx3.beginPath()
        ctx3.lineWidth = 3
        ctx3.strokeStyle = 'white'
        ctx3.fillStyle = 'rgba(71, 10, 255,.4)'
        ctx3.moveTo(132.5, 25)
        ctx3.lineTo(132.5, 75)
        ctx3.lineTo(178, 50)
        ctx3.lineTo(132.5, 26)
        ctx3.fill()
        ctx3.stroke()
        ctx3.closePath()
        ctx3.beginPath()
        ctx3.lineWidth = 3
        ctx3.strokeStyle = 'white'
        ctx3.moveTo(180, 25)
        ctx3.lineTo(180, 75)
        ctx3.lineTo(230, 50)
        ctx3.lineTo(180, 26)
        ctx3.fill()
        ctx3.stroke()
        ctx3.closePath()
        audioControls.appendChild(prevSong)
        audioControls.appendChild(play)
        audioControls.appendChild(nextSong)
        return audioControls
    }

    const getAnimationProps = (fnl)=>{
        if (fnl < 30) {
            return 12
        } else if (fnl < 35) {
            return 11
        } else if (fnl < 40) {
            return 10
        } else if (fnl < 45) {
            return 9
        } else if (fnl < 50) {
            return 8
        } else if (fnl < 55) {
            return 7
        } else if (fnl < 60) {
            return 6
        } else if (fnl < 65) {
            return 5
        } else {
            return 4
        }
    }

    const profile_pics = {}
    const keyBlobs = {}
    const userPro = []
    const imageKeys = []
    const proQueue = {}
    const imgQueue = {}
    let noProPic_blobKey

    async function set_pro_data(username, srcKey, node) {
        try {
            if (!profile_pics[username]) {
                if (userPro.indexOf(username) == -1) {
                    userPro.push(username)
                    new Promise(async(resolve,reject)=>{
                        const data = await fetch(srcKey)
                        if (await data) {
                            try {
                                profile_pics[username] = (URL || webkitURL).createObjectURL(await (data).blob())
                                node.src = profile_pics[username]
                            } catch (e) {
                                console.log(e)
                            }
                        }
                        resolve();
                    }
                    ).then(()=>{
                        for (const user in proQueue) {
                            if (proQueue.hasOwnProperty(user)) {
                                let i = 0
                                const nodes = proQueue[user]
                                const il = nodes.length
                                for (i; i < il; i++) {
                                    nodes[i].src = profile_pics[user]
                                }
                            }
                        }
                    }
                    )
                } else {
                    if (!proQueue[username]) {
                        proQueue[username] = [node]
                    } else {
                        proQueue[username].push(node)
                    }
                }
            } else {
                node.src = profile_pics[username]
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function fetch_image_data(key, srcKey, node) {
        try {
            if (!keyBlobs[key]) {
                try {
                    const data = await fetch(srcKey)
                    if (await data) {
                        keyBlobs[key] = (URL || webkitURL).createObjectURL(await (data).blob())
                        node.src = await keyBlobs[key]
                    }
                } catch (e) {
                    console.log(e)
                }
            } else {
                node.src = keyBlobs[key]
            }
        } catch (e) {
            console.log(e)
        }
    }

    _.on('delete_post', (data)=>{
        const key = JSON.parse(data)

    }
    )

    const shareButton = $({
        a: 'button',
        class: 'shareButton',
        text: 'Share Post'
    })
    const shareDiv = $({
        a: 'div',
        style: 'position:fixed;top:0px;bottom:0px;left:0px;right:0px;background-color:rgba(0,0,0,0.6);z-index:14;display:flex;justify-content:center;align-items:center;'
    })
    const shareOptions = $({
        a: 'div',
        class: 'shareOptions'
    })
    const copyLinkDiv = $({
        a: 'div',
        class: 'copyLink'
    })
    const copied = $({
        a: 'label',
        class: 'copied',
        text: 'Copied'
    })
    shareDiv.appendChild(shareOptions)
    shareOptions.appendChild(copyLinkDiv)
    shareOptions.appendChild(shareButton)
    shareDiv.onclick = ()=>{
        document.body.removeChild(shareDiv)
    }
    shareOptions.onclick = (e)=>{
        e.stopPropagation()
    }
    const copyLink = (node)=>{
        if (document.selection) {
            const range = document.body.createTextRange();
            range.moveToElementText(node);
            range.select();
        } else if (window.getSelection) {
            const range = document.createRange();
            range.selectNode(node);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
    }

    copyLinkDiv.ontouch = ()=>{
        copyLink(copyLinkDiv)
        shareOptions.appendChild(copied)
        setTimeout(function() {
            if (shareOptions.contains(copied)) {
                shareOptions.removeChild(copied)
            }
        }, 1000)
    }

    copyLinkDiv.onmousedown = ()=>{
        copyLink(copyLinkDiv)
        shareOptions.appendChild(copied)
        setTimeout(function() {
            if (shareOptions.contains(copied)) {
                shareOptions.removeChild(copied)
            }
        }, 1000)
    }
    const share = ()=>{
        const c = document.createElement('canvas')
        const ctx = c.getContext('2d')
        let ratio = 2;
        const w = 50
        const h = 50
        c.width = w * ratio;
        c.height = h * ratio;
        c.style.width = w + "px";
        c.style.height = h + "px";
        ctx.beginPath();
        ctx.arc((10) * ratio, (25) * ratio, (5) * ratio, 0, 2 * Math.PI);
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'white'
        ctx.fill();
        ctx.closePath()
        ctx.beginPath();
        ctx.arc((40) * ratio, (10) * ratio, (5) * ratio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath()
        ctx.beginPath();
        ctx.arc((40) * ratio, (40) * ratio, (5) * ratio, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo((10) * ratio, (25) * ratio)
        ctx.lineWidth = '4'
        ctx.lineTo((40) * ratio, (10) * ratio)
        ctx.stroke()
        ctx.closePath()
        ctx.beginPath();
        ctx.moveTo((10) * ratio, (25) * ratio)
        ctx.lineWidth = '4'
        ctx.lineTo((40) * ratio, (40) * ratio)
        ctx.stroke()
        return c
    }

    async function fetch_data(key, srcKey, node) {
        try {
            if (!keyBlobs[key]) {
                try {
                    const data = await fetch(srcKey)
                    if (await data) {
                        keyBlobs[key] = (URL || webkitURL).createObjectURL(await (data).blob())
                        node.src = await keyBlobs[key]
                    }
                } catch (e) {
                    console.log(e)
                }
            } else {
                node.src = keyBlobs[key]
            }
            node.load()
        } catch (e) {
            console.log(e)
        }
    }

    Number.prototype.pad = function(size) {
        let s = String(this);
        while (s.length < (size || 2)) {
            s = "0" + s;
        }
        return s;
    }
    node.profile_timeline.prepend(node.pro_top_tl)
    node.lppt.prepend(node.top_tl)
    node.profile_likes.prepend(node.pro_top_tl2)

    let post_timeline_positions = []
    const timeline_order = []

    const post_options = $({
        a: "div",
        class: 'post_options'
    })
    const po_menu = $({
        a: 'div',
        class: 'rel'
    })
    const delete_post = $({
        a: 'div',
        class: 'delete_post',
        text: 'Delete Post'
    })
    post_options.appendChild(po_menu)

    _.on('timeline', (data)=>{
        data = JSON.parse(data)
        console.log(data)
        const loading_bar = node.loading_bar
        const key = data.key
        const message = data.message
        const mimeType = data.mimeType
        const timestamp = data.timestamp
        const username = data.username
        const source = data.source
        const img1 = $({
            a: "img",
            class: "profile_img"
        })
        set_pro_data(username, url + '/files/' + username, img1)
        const wrapper = $({
            a: "div",
            class: "wrap"
        })
        let node_, upvotes = 0, downvotes = 0
        if(!window[key]){
        window[key] = $({
            a: "div",
            class: "image"
        })
        window[key].appendChild(wrapper)
        if (message) {
          if(message.length >= 21){
            if(message.substring(0,23) == "https://www.youtube.com"){
              const vid =  message.replace("watch?v=", "embed/");
              console.log(vid)
              const video = $({a:'iFrame',src:vid})
              wrapper.appendChild(video)
            }
            else if(message.substring(0,21) == "https://m.youtube.com"){
              const vid =  message.replace("watch?v=", "embed/");
              console.log(vid)
              const video = $({a:'iFrame',src:vid})
              wrapper.appendChild(video)
            }
            console.log(message.substring(0,23))
          }
          else{
            let i = 0;
            const il = message.length;
            const d9 = $({
                a: "div",
                class: "post_caption"
            })
            const captionLabel = $({
                a: "label",
                class: "captionLabel"
            })
            captionLabel.onclick = (e)=>{
                const node = e.target
                if (node && e.target.nodeName == "SPAN") {
                    alert(node.textContent + " is a lame hashtag")
                    e.stopPropagation()
                }
            }
            d9.appendChild(captionLabel)
            let isHashtag = false
            let lastHashtagStartPos = 0
            let lastHashtagEndPos = 0
            let hashtagPos, finalCaption
            const char_arr = message.split('')
            let count = 0
            char_arr.forEach((char)=>{
                if (char == '#' && !isHashtag) {
                    isHashtag = true
                    lastHashtagStartPos = count
                } else if (char == ' ' && isHashtag) {
                    isHashtag = false
                    captionLabel.innerHTML += message.slice(lastHashtagEndPos, lastHashtagStartPos);
                    let hashtag = $({
                        a: 'span',
                        style: 'color:#2e51ff;border-bottom:1px solid #2e51ff;cursor:pointer;',
                        text: message.slice(lastHashtagStartPos, count)
                    })
                    captionLabel.appendChild(hashtag)
                    lastHashtagEndPos = count
                }
                count++
            }
            )
            if (isHashtag && lastHashtagEndPos == 0) {
                if (lastHashtagStartPos != 0) {
                    captionLabel.innerHTML += message.slice(0, lastHashtagStartPos);
                }
                const hashtag = $({
                    a: 'span',
                    style: 'color:#2e51ff;border-bottom:1px solid #2e51ff;cursor:pointer;',
                    text: message.slice(lastHashtagStartPos, message.length)
                })
                captionLabel.appendChild(hashtag)
            } else if (lastHashtagStartPos == 0 && lastHashtagEndPos == 0) {
                captionLabel.textContent = message
            } else if (lastHashtagEndPos != 0 && lastHashtagEndPos != message.length) {
                captionLabel.innerHTML += message.slice(lastHashtagEndPos, message.length);
            }
            wrapper.appendChild(d9)
            }
        }
        if (data.initial_render == false) {
            timeline_order.unshift(key)
            if (source == 'home') {
                node.profile_timeline.prepend(window[key])
            } else if (source == 'lp') {
                node.lppt.prepend(window[key])
            } else if (source == 'pro_likes') {
                node.profile_likes.insertBefore(window[key], node.pro_top_tl2.nextSibling)
            } else if (source == 'timeline') {
                node.r.prepend(window[key])
            }
        } else {
            timeline_order.push(key)
            node.loading.style.display = 'none'
            if (source == 'home') {
                node.profile_timeline.appendChild(window[key])
            } else if (source == 'lp') {
                console.log('sf')
                node.lppt.appendChild(window[key])
            } else if (source == 'pro_likes') {
                node.profile_likes.insertBefore(window[key],node.pro_top_tl2.nextSibling)
            } else if (source == 'timeline') {
                node.r.appendChild(window[key])
            }
            node.r.appendChild(window[key])
        }
        const d2 = $({
            a: "div",
            class: "timestamp2",
            text: data.timestamp
        })
        const d3 = $({
            a: "div",
            class: "post_profile"
        })
        const d4 = $({
            a: "div",
            class: "post_username",
            text: username
        })
        const d5 = $({
            a: "div",
            class: "dot_menu"
        })
        const svgy = svg([{
            type: 'svg',
            width: '50px',
            height: '25px'
        }, {
            type: 'line',
            x1: '16',
            y1: '8',
            x2: '24',
            y2: '16',
            stroke: '#383d41',
            stroke_width: '2',
            stroke_linecap: 'round'
        }, {
            type: 'line',
            x1: '32',
            y1: '8',
            x2: '24',
            y2: '16',
            stroke: '#383d41',
            stroke_width: '2',
            stroke_linecap: 'round'
        }])

        d5.onclick = (e)=>{
            if (username == data.user) {
                po_menu.appendChild(delete_post)
                delete_post.onclick = (e)=>{
                    e.stopPropagation()
                    _.emit('delete_post', JSON.stringify({
                        key: data.key
                    }))
                }
            } else {
                if (po_menu.contains(delete_post)) {
                    po_menu.removeChild(delete_post)
                }
            }

            e.stopPropagation()
            if (!window[key].contains(post_options)) {
                window[key].appendChild(post_options)
            } else {
                window[key].removeChild(post_options)
            }
        }
        const footer = $({
            a: "div",
            class: "footer"
        })
          , d10 = $({
            a: "div",
            class: "object_a"
        })
          , svg2 = upvote_button()
          , d15 = $({
            a: "div",
            class: "object_b"
        })
          , svg3 = downvote_button()
          , d20 = $({
            a: "div",
            class: "object_c"
        })
          , img2 = chat_icon()
        const shareBtn = $({
            a: 'div',
            class: 'object_d'
        })
        shareBtn.appendChild(share())
        shareBtn.onclick = (e)=>{
            e.stopPropagation()
            if (!document.body.contains(shareDiv)) {
                copyLinkDiv.textContent = url + '/share/' + username + '/' + key
                shareButton.onclick = ()=>{
                    if (navigator.share) {
                        navigator.share({
                            title: '0sprey - Share',
                            url: url + '/share/' + username + '/' + key
                        }).then(()=>{
                            console.log(';)');
                        }
                        ).catch(console.error);
                    } else {
                        shareDialog.classList.add('is-open');
                    }
                }
                document.body.appendChild(shareDiv)
            }
        }

        if (data.upvotes) {
            upvotes = data.upvotes.length
        }
        if (data.downvotes) {
            downvotes = data.downvotes.length
        }

        window[key + "_upvotes"] = $({
            a: "div",
            text: upvotes
        })
        window[key + "_downvotes"] = $({
            a: "div",
            text: downvotes
        })
        d3.appendChild(img1)
        d20.appendChild(img2)
        d5.appendChild(svgy)
        window[key].appendChild(d2)
        window[key].appendChild(d3)
        window[key].appendChild(d4)
        window[key].appendChild(d5)
        window[key].appendChild(footer)
        d10.appendChild(svg2)
        d10.appendChild(window[key + "_upvotes"])
        d15.appendChild(svg3)
        d15.appendChild(window[key + "_downvotes"])
        footer.appendChild(d10)
        footer.appendChild(d15)
        footer.appendChild(d20)
        footer.appendChild(shareBtn)

        d3.onclick = (e)=>{
            e.stopPropagation()
            y()
            _l_p(data.username, false)
        }
        d4.onclick = (e)=>{
            e.stopPropagation()
            y()
            _l_p(data.username, false)
        }

        if (data.video) {
            window['video' + key] = $({
                a: 'video',
                class: 'elements vid',
                controls: true,
                autoplay: true,
                muted: true,
                loop: true,
                src: url + '/video/' + username + '/' + key + data.extension
            })
            window['video' + key].setAttribute('preload', 'auto')
            window['video' + key].setAttribute('playsinline', 'true')
            wrapper.appendChild(window['video' + key])
            fetch_data(key,url+'/video/'+key,window['video'+key])
        }
        if (data.image) {
            const image = $({
                a: "img",
                class: "elements tl_compact",
                src: url + '/image/' + key
            })
            fetch_image_data(key,url+'/video/'+username+'/'+key,image)
            wrapper.appendChild(image)
            image.onclick = (e)=>{
                e.stopPropagation()
                expandKey({
                    a: key,
                    b: node.expanded,
                    username: username
                })
            }
        }
        if (data.audio) {
            if (audio_keys.indexOf(key) == -1) {
                audio_keys.push(key)
            }
            window['audio_ctx'] = play.getContext('2d')
            const filename = $({
                a: "div",
                style: 'margin-bottom:5px;'
            })
            filename.appendChild($({
                a: "label",
                class: 'mlab',
                text: data.fileName
            }))
            wrapper.appendChild(filename)
            window['audio' + key] = new Audio();
            window['audio' + key].src = url + '/audio/' + username + '/' + key + data.extension
            const banner = $({
                a: "div",
                class: "songBanner"
            })
            const bannerLabel = $({
                a: 'div',
                class: 'bannerLabel',
                text: data.fileName
            })
            const audioPostControls = $({
                a: "div",
                class: "elements audio"
            })
            wrapper.appendChild(audioPostControls)
            fetch_data(key,url+'/audio/'+key,window['audio'+key])
            let duration, str
            const scrubDiv = $({
                a: "div",
                style: "background-color:black;height:25px;"
            })
            window['scrub' + key] = $({
                a: "input",
                class: "slider"
            })
            window['scrub' + key].type = "range"
            window['scrub' + key].min = "0"
            window['scrub' + key].max = "100"
            window['scrub' + key].value = "0"
            window['scrub' + key].step = "0.001"
            const postScrubDiv = $({
                a: "div",
                style: "background-color:black;height:25px;"
            })
            window['postScrub' + key] = $({
                a: "input",
                class: "slider"
            })
            window['postScrub' + key].type = "range"
            window['postScrub' + key].min = "0"
            window['postScrub' + key].max = "100"
            window['postScrub' + key].value = "0"
            window['postScrub' + key].step = "0.001"
            const timeDiv = $({
                a: "div",
                style: "display:flex;content-align:center;justify-content:center;background-color:rgba(0,0,0,.5)"
            })
            const timeLabel = $({
                a: "label",
                style: 'color:white;font-size:15px;padding-top:3px;',
                text: "00:00 / 00:00"
            })
            const postTimeDiv = $({
                a: "div",
                style: "display:flex;content-align:center;justify-content:center;background-color:rgba(0,0,0,.5)"
            })
            const postTimeLabel = $({
                a: "label",
                style: 'color:white;font-size:15px;padding-top:3px;',
                text: "00:00 / 00:00"
            })
            timeDiv.appendChild(timeLabel)
            postTimeDiv.appendChild(postTimeLabel)
            postScrubDiv.appendChild(window['postScrub' + key])
            audioPostControls.appendChild(postScrubDiv)
            audioPostControls.appendChild(postTimeDiv)
            window['pac' + key] = $({
                a: 'div',
                class: 'audioControls'
            })
            window['postPlay' + key] = document.createElement('canvas')
            window['postPrevSong' + key] = document.createElement('canvas')
            window['postNextSong' + key] = document.createElement('canvas')
            window['post_audio_ctx' + key] = window['postPlay' + key].getContext('2d')
            window['post_play_pause' + key] = renderAudioControls(key, window['postPlay' + key], window['postPrevSong' + key], window['postNextSong' + key], window['pac' + key], window['post_audio_ctx' + key])
            audioPostControls.appendChild(window['pac' + key])
            const scrubAudio = (bar)=>{
                window['audio' + key].currentTime = bar.value
                const tl = Math.floor(window['audio' + key].currentTime / 60).pad() + ":" + Math.floor((window['audio' + key].currentTime % 60)).pad() + " / " + Math.floor(window['audio' + key].duration / 60).pad() + ":" + Math.floor((window['audio' + key].duration % 60)).pad()
                timeLabel.textContent = tl
                postTimeLabel.textContent = tl
                const valPercent = ((window['audio' + key].currentTime.toFixed(4)) - parseInt(bar.min)) / (parseInt(bar.max) - parseInt(bar.min));
                const style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' + valPercent + ', #29907f), color-stop(' + valPercent + ', #f5f6f8));';
                window['scrub' + key].style = style;
                window['scrub' + key].value = bar.value;
                window['postScrub' + key].style = style;
                window['postScrub' + key].value = bar.value;
            }
            window['scrub' + key].onclick = ()=>{
                scrubAudio(window['scrub' + key])
            }
            window['postScrub' + key].onclick = (e)=>{
                e.stopPropagation()
                scrubAudio(window['postScrub' + key])
            }
            window['audio' + key].oncanplaythrough = ()=>{
                window['scrub' + key].max = (window['audio' + key].duration)
                window['postScrub' + key].max = (window['audio' + key].duration)
                const tl = Math.floor(window['audio' + key].currentTime / 60).pad() + ":" + Math.floor((window['audio' + key].currentTime % 60)).pad() + " / " + Math.floor(window['audio' + key].duration / 60).pad() + ":" + Math.floor((window['audio' + key].duration % 60)).pad()
                postTimeLabel.textContent = tl
                timeLabel.textContent = tl
            }
            const props = getAnimationProps(data.fileName.length)
            str = 'translateX(' + (Math.floor(data.fileName.length * props)) + 'px)'
            duration = (Math.floor(6000000 / (Math.floor(data.fileName.length * props))))
            const str2 = 'translateX(-' + (Math.floor(data.fileName.length * 10)) + 'px)'
            bannerLabel.animate([{
                transform: str
            }, {
                transform: str2
            }], {
                duration: duration,
                iterations: Infinity
            });
            banner.appendChild(bannerLabel)
            keyedSongData[key] = {
                banner: banner,
                bannerLabel: bannerLabel,
                start: str,
                end: str2,
                duration: duration
            }
            window['audio' + key].onended = ()=>{
                const style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' + 0 + ', #29907f), color-stop(' + 0 + ', #f5f6f8));';
                window['postScrub' + key].style = style;
                const tl = (0).pad() + ":" + (0).pad() + " / " + Math.floor(window['audio' + key].duration / 60).pad() + ":" + Math.floor((window['audio' + key].duration % 60)).pad()
                window['postScrub' + key].value = 0;
                postTimeLabel.textContent = tl
                playNextAudio(key)
                window['audio' + key].currentTime = 0
            }
            window['audio' + key].onplay = ()=>{
                keyedSongData[key].bannerLabel.animate([{
                    transform: keyedSongData[key].start
                }, {
                    transform: keyedSongData[key].end
                }], {
                    duration: keyedSongData[key].duration,
                    iterations: Infinity
                });
                if (!node.main.contains(audio_footer)) {
                    node.main.appendChild(audio_footer)
                } else {
                    audio_footer.removeChild(audio_footer.firstChild)
                    audio_footer.removeChild(audio_footer.firstChild)
                    audio_footer.removeChild(audio_footer.firstChild)
                    audio_footer.removeChild(window['play_pause'])
                }
                audio_footer.appendChild(keyedSongData[key].banner)
                scrubDiv.appendChild(window['scrub' + key])
                audio_footer.appendChild(scrubDiv)
                audio_footer.appendChild(timeDiv)
                if (audio_playing.key != key && audio_playing.key) {
                    audio_playing.audio.pause()
                }
                audio_playing.audio = window['audio' + key]
                audio_playing.key = key
                window['play_pause'] = renderAudioControls(key, play, prevSong, nextSong, audioControls, window['audio_ctx'])
                window['post_play_pause' + key] = renderAudioControls(key, window['postPlay' + key], window['postPrevSong' + key], window['postNextSong' + key], window['pac' + key], window['post_audio_ctx' + key])
                audio_footer.appendChild(window['play_pause'])
                window['audio' + key].ontimeupdate = ()=>{
                    const valPercent = ((window['audio' + key].currentTime.toFixed(4)) - parseInt(window['scrub' + key].min)) / (parseInt(window['scrub' + key].max) - parseInt(window['scrub' + key].min));
                    const style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(' + valPercent + ', #29907f), color-stop(' + valPercent + ', #f5f6f8));';
                    window['scrub' + key].style = style;
                    window['scrub' + key].value = window['audio' + key].currentTime.toFixed(4)
                    window['postScrub' + key].style = style;
                    window['postScrub' + key].value = window['audio' + key].currentTime.toFixed(4)
                    const tl = Math.floor(window['audio' + key].currentTime / 60).pad() + ":" + Math.floor((window['audio' + key].currentTime % 60)).pad() + " / " + Math.floor(window['audio' + key].duration / 60).pad() + ":" + Math.floor((window['audio' + key].duration % 60)).pad()
                    timeLabel.textContent = tl
                    postTimeLabel.textContent = tl
                }
            }
            window['audio' + key].onpause = ()=>{
                if (audio_playing.key == key && audio_playing.key) {
                    let ctx = window['audio_ctx']
                    ctx.globalCompositeOperation = "source-over";
                    ctx.fillStyle = "#272727";
                    ctx.fillRect(0, 0, 300, 100);
                    ctx.beginPath()
                    ctx.lineWidth = 1
                    ctx.fillStyle = 'white'
                    ctx.moveTo(32.5, 25)
                    ctx.lineTo(32.5, 75)
                    ctx.lineTo(77.5, 50)
                    ctx.lineTo(32.5, 25)
                    ctx.fill()
                    ctx.closePath()
                    ctx = window['post_audio_ctx' + key]
                    ctx.globalCompositeOperation = "source-over";
                    ctx.fillStyle = "#272727";
                    ctx.fillRect(0, 0, 300, 100);
                    ctx.beginPath()
                    ctx.lineWidth = 1
                    ctx.fillStyle = 'white'
                    ctx.moveTo(32.5, 25)
                    ctx.lineTo(32.5, 75)
                    ctx.lineTo(77.5, 50)
                    ctx.lineTo(32.5, 25)
                    ctx.fill()
                    ctx.closePath()
                }
            }
        }
        d10.onclick = (e)=>{
            e.stopPropagation()
            upvote({
                a: key,
                b: username
            })
        }
        d15.onclick = (e)=>{
            e.stopPropagation()
            downvote({
                a: key,
                b: username
            })
        }
        if (data.comm_count > 0) {
            window['comm_count' + key] = $({
                a: "label",
                class: "b13",
                text: data.comm_count
            })
            d20.appendChild(window['comm_count' + key])
        } else {
            window['comm_count' + key] = $({
                a: "label",
                class: "b13"
            })
            d20.appendChild(window['comm_count' + key])
        }
        window[key].onclick = ()=>{
            y()
            chat(data.key, 'timeline', username)
        }
        loading_bar.style.width = "0%"
      }
      else{
        if(node.r.contains(window[key])){
          let pos = Array.prototype.indexOf.call(node.r.children, window[key])
          console.log(pos)
          post_timeline_positions.push({key:key,position:pos});
        }
        if(!data.initial_render){
          if(source == 'home'){
            node.profile_timeline.prepend(window[key])
          }else if(source == 'lp'){
            node.lppt.prepend(window[key])
          }
          else if(source == 'pro_likes'){
            node.profile_likes.insertBefore(window[key],node.pro_top_tl2.nextSibling)
          }
          else if(source == 'timeline'){
            node.r.prepend(window[key])
            node.r.insertBefore(window[key],node.r.children[timeline_order.indexOf(key)])
          }
        }else{
            node.loading.style.display = 'none'
            if(source == 'home'){
            node.profile_timeline.appendChild(window[key])
        }else if(source == 'lp'){
          console.log('sf')
            node.lppt.appendChild(window[key])
        }
        else if(source == 'pro_likes'){
          node.profile_likes.insertBefore(window[key],node.pro_top_tl2.nextSibling)
        }
        else if(source == 'timeline'){
          node.r.appendChild(window[key])
        }
           node.r.appendChild(window[key])
        }
      }
    }
    )

    _.on('post_deleted', (data)=>{
        const key = JSON.parse(data).key
        if (node.r.contains(window[key])) {
            node.r.removeChild(window[key])
        }
        window[key] = undefined
    }
    )

    const trashcan = $({
        a: 'div',
        style: 'left:0px;right:0px;margin-left:auto;margin-right:auto;width:100px;height:100px;background-color:rgba(0,0,0,.4);position:absolute;top:100px;z-index:12;display:flex;align-items:center;justify-content:center;border-radius:6px;'
    })
    trashcan.appendChild($({
        a: 'div',
        style: 'width:75px;height:75px;border:1px solid red;border-radius:50%;'
    }))

    const dragItem = audio_footer;
    let active_ = false, currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0, vid = false;

    function dragStart(e) {
        if (e.type == "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }
        if (e.target == dragItem || e.target == audioControls || e.target == play || e.target == prevSong || e.target == nextSong || e.target == video) {
            if (e.target == video) {
                vid = true
            } else {
                vid = false
            }
            active_ = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        active_ = false;
    }

    function drag(e) {
        if (active_) {
            e.preventDefault();
            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            xOffset = currentX;
            yOffset = currentY;
            if (vid == true) {
                setTranslate(currentX, currentY, video);
            } else {
                setTranslate(currentX, currentY, dragItem);
            }
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

    _.on('profile_timeline_empty', (data)=>{
        data = JSON.parse(data)
        const id = data.id
        const l1 = $({
            a: "label",
            class: "npy",
            text: data.u + "posted yet"
        })
        if (data.c == 'home') {
            if (node.profile_timeline.firstChild != l1) {
                node.profile_timeline.innerHTML = ''
                node.profile_timeline.append(l1)
            }
        } else if (data.c == 'lp') {
            if (node.lppt.firstChild != l1) {
                node.lppt.innerHTML = ''
                node.lppt.append(l1)
            }
        }
    }
    )
    
    _.on('profile_timeline',(data)=>{
        data = JSON.parse(data)
        const key = data.key
        const username = data.username 
        const message = data.message
        const mimeType = data.mimeType
        const timestamp = data.timestamp
        const source = data.source
       const d1 = $({a:"div",class:"image"})
       const d2 = $({a:"div",class:"timestamp2",text:timestamp})
       const d3 = $({a:"div",class:"post_profile"})
       const img1 = $({a:"img",class:"profile_img"})
        if(source == 'home'){
            node.profile_timeline.appendChild(d1)
            if(!node.profile_timeline.contains(node.top_tl)){
              node.profile_timeline.prepend(node.pro_top_tl)
            }
        }else if(source == 'lp'){
            node.lppt.appendChild(d1)
            if(!node.lppt.contains(node.top_tl)){
              node.lppt.prepend(node.top_tl)
            }
        }
        else if(source == 'pro_likes'){
          if(!node.profile_likes.contains(node.top_tl2)){
              node.profile_likes.prepend(node.pro_top_tl2)
            }
          node.profile_likes.insertBefore(d1,node.pro_top_tl2.nextSibling)
        }

        set_pro_data(username,url+'/files/'+data.username,img1)

        const d4 = $({a:"div",class:"post_username",text:data.username})
        const d5 = $({a:"div",class:"dot_menu"})
        const svga = svg([{type:'svg',width:'50px',height:'25px'},
                       {type:'line',x1:'16',y1:'8',x2:'24',y2:'16',stroke:'#383d41',stroke_width:'2',stroke_linecap:'round'},
                       {type:'line',x1:'32',y1:'8',x2:'24',y2:'16',stroke:'#383d41',stroke_width:'2',stroke_linecap:'round'}])
        const footer = $({a:"div",class:"footer"})
        const d10 = $({a:"div",class:"object_a"})
        const svg2 = upvote_button()
        const d15 = $({a:"div",class: "object_b"})
        const svg3 = downvote_button()
        const d20 =$({a:"div",class: "object_c"})
        const img2 = chat_icon()

       let dy_var,
        dy_var2
        
        d1.appendChild(d2)
        d3.appendChild(img1)
        d1.appendChild(d3)
        d1.appendChild(d4)
        d5.appendChild(svga)
        d1.appendChild(d5)
        d10.appendChild(svg2)
        footer.appendChild(d10)
        d15.appendChild(svg3)
        footer.appendChild(d15)
        d20.appendChild(img2)
        footer.appendChild(d20)
        d1.appendChild(footer)
        d3.onclick =(e)=>{
          e.stopPropagation()
          y()
          _l_p(username,false)
        }
        d4.onclick =(e)=>{
          e.stopPropagation()
          y()
          _l_p(username,false)
        }
          let upvotes = 0,
          downvotes = 0
         
         if(data.upvotes){
            upvotes = data.upvotes.length
          }
          if(data.downvotes){
            downvotes = data.downvotes.length
        }
        if(message){
            const caption = $({a:"div",class:"post_caption",text:message})
            const captionLabel = $({a:'label',text:message})
            caption.appendChild(captionLabel)
            d1.appendChild(caption)
        }
        if(data.image){
            const image = $({a:"img",class:"elements tl_compact"})
            
            image.onclick =(e)=>{
              e.stopPropagation()
              expandKey({a:key,b:node.expanded,username:username})
            }
            d1.appendChild(image)
            fetch_image_data(key,url+'/off/'+key,image)
        }
        if(data.audio){
          if(audio_keys.indexOf(key) == -1){
            audio_keys.push(key)
            window['audio'+key] = new Audio()
            document.body.appendChild(window['audio'+key])
            fetch_data(key,url+"/audio/"+key,audio)
          }else{

          }
        }
        if(data.video){
          const video = $({a:'video',class:'elements vid bs12',controls:true,autoplay:true,muted:true,loop:true})
          video.setAttribute('playsinline','')
            d1.appendChild(video)
            fetch_data(key,url+"/off/"+key,video)
        }
        d10.onclick=(e)=>{
            e.stopPropagation()
            upvote({a:key,b:username})
        }
        if(data.user == username){
            window[key+"_upvotes_my_timeline"] = $({a:"div",class: "vc_",text:upvotes})
            dy_var = window[key+"_upvotes_my_timeline"]

            window[key+"_downvotes_my_timeline"] = $({a:"div",class: "vc_",text:downvotes})
            dy_var2 = window[key+"_downvotes_my_timeline"]
        }else{
            window[key+"_upvotes_timeline"] = $({a:"div",class: "vc_",text:upvotes})
            dy_var = window[key+"_upvotes_timeline"]
             window[key+"_downvotes_timeline"] = $({a:"div",class: "vc_",text:downvotes})
            dy_var2 = window[key+"_downvotes_timeline"]
        }
        d10.appendChild(dy_var)
        d15.onclick=(e)=>{
            e.stopPropagation()
            downvote({a:key,b:username})
        }
        d15.appendChild(dy_var2)   
        if(data.comm_count > 0){
            window['profile_timeline_comm_count'+key] =$({a:"label",class:"b13",text:data.comm_count})
            d20.appendChild(window['profile_timeline_comm_count'+key])
        }else{
          window['profile_timeline_comm_count'+key] =$({a:"label",class:"b13"})
          d20.appendChild(window['profile_timeline_comm_count'+key])
        }
        d1.onclick=()=>{
            y()
            chat(key, 'profile_timeline',username)
        }
    })

    _.on('response_', ()=>{
        const loading_bar = node.loading_bar
        loading_bar.style.width = "0%"
    }
    )

    _.on('upload_response', (a)=>{
        _.emit('timeline')
    }
    )

    _.on('notification_stream', (data)=>{
        const $notifications = JSON.parse(data).a
        if ($notifications > 0) {
            node.num_not.textContent = $notifications
            node.pl1.textContent = $notifications
            if (!node.profile.contains(node.un_not)) {
                node.profile.appendChild(node.un_not)
            }
            if (!node.pdp.contains(node.un_not_profile)) {
                node.pdp.appendChild(node.un_not_profile)
            }
        }
    }
    )

    _.on('mess_notification_stream', (a)=>{
        _.emit('get_unread_mess')
    }
    )

    _.on('u_pro', (data)=>{
        set_pro_data(data.a, url + "/files/" + data.a, node.pimg)
        node.loading_bar.style.width = "0%"
    }
    )

    _.on('refresh_convos', (a)=>{
        node.sr365.innerHTML = ''
        const following = JSON.parse(a).a
        const search_result = (data)=>{
            const a = $({
                a: "div",
                class: "search_results"
            })
            const b = $({
                a: "div",
                class: "ppx"
            })
            const c = $({
                a: "img",
                class: "profile_img"
            })
            set_pro_data(data, url + "/files/" + data, c)
            const d = $({
                a: "label",
                class: "srx_ srn",
                text: data
            })
            const e = $({
                a: "div",
                class: "c34"
            })
            a.appendChild(b)
            b.appendChild(c)
            a.appendChild(d)
            e.appendChild(env('mail'))
            a.appendChild(e)
            c.onclick = (e)=>{
                e.stopPropagation()
                _l_p(data, false)
            }
            a.onclick = ()=>{
                start_message(data)
            }
            return a
        }
        let i = 0
        const l = following.length
        for (i; i < l; i++) {
            node.sr365.appendChild(search_result(following[i]))
        }
    }
    )

    _.on('render_message_empty', (data)=>{
        data = JSON.parse(data)
        const d1 = $({
            a: "div",
            class: "no_mess",
            text: "Start a conversation with " + data.a + "..."
        })
        node.mk.innerHTML = ''
        window[data.a + 'msg_log'] = node.mk
        node.mk.appendChild(d1)
    }
    )

    _.on('render_incoming_message', (data)=>{
        data = JSON.parse(data)
        const messageBundle = $({
            a: "div",
            class: 'mb'
        })
        const timestamp = $({
            a: "div",
            class: 'timestamp_them',
            text: data.timestamp
        })
        const message = $({
            a: "div",
            class: 'mxx_ them'
        })
        const mimeType = data.mimeType
        const key = data.key
        if (data.sent) {
            timestamp.classList = 'timestamp_me'
            message.classList = 'mxx_ me'
        }
        if (data.mimeType) {
            const media_div = $({
                a: "div",
                class: "image_msg"
            })
            let media
            if (data.image) {
                media = $({
                    a: "img",
                    class: 'elements_',
                    src: url + '/mess_img/' + data.username + '/' + key + '/' + data.extension_
                })
                fetch_image_data(key,url+'/file_/'+key,media)
                media.onclick = (e)=>{
                    node.ex_id.src = url + "/file_/" + key
                    node.ex_id.src = url + '/mess_img/' + data.username + '/' + key + '/' + data.extension_
                    if (!node.stage.contains(node.expanded)) {
                        node.stage.appendChild(node.expanded)
                    }
                    node.expanded.appendChild(close(node.expanded))
                }
            } else if (data.video) {
                window['video_message' + key] = $({
                    a: 'video',
                    class: 'elements vid',
                    controls: true,
                    autoplay: true,
                    muted: true,
                    loop: true,
                    src: url + '/mess_video/' + data.username + '/' + key + data.extension
                })
                window['video_message' + key].setAttribute('playsinline', '')
                media_div.appendChild(window['video_message' + key])
                fetch_data(key,url+"/messageFiles/"+key,window['video_message'+key])
            } else if (data.audio) {
                const audio = $({
                    a: 'audio',
                    class: 'img_prev1',
                    controls: true,
                    src: url + '/mess_audio/' + data.username + '/' + key + '/' + data.extension_
                })
                media_div.appendChild(audio)
            }
            if (!data.video && !data.audio) {
                media_div.appendChild(media)
            }
            message.appendChild(media_div)
            messageBundle.appendChild(message)
        } else {
            const text = $({
                a: "pre",
                class: 't',
                text: data.message
            })
            if (data.sent) {
                text.classList = 'm'
            }
            message.appendChild(text)
            messageBundle.appendChild(message)
        }
        messageBundle.appendChild(timestamp)
        node.mk.prepend(messageBundle)
    }
    )

    _.on('render_message', (data)=>{
        data = JSON.parse(data)
        const timestamp = data.timestamp
        const key = data.key

        if (node.mk.contains(node.is_typing)) {
            node.mk.removeChild(node.is_typing)
            node.mk.removeChild(node.is_typing_bubble)
        }
        const d1 = $({
            a: "div",
            class: data.mb
        })
        const d2 = $({
            a: "div",
            class: data.m
        })
        let vnr = false
        if (data.media == false) {
            const p1 = $({
                a: "pre",
                class: data.t,
                text: data.p1_text
            })
            d2.appendChild(p1)
            d1.appendChild(d2)
        } else {
            if (data.image == true) {
                const img_div = $({
                    a: "div",
                    class: "image_msg"
                })
                const img = $({
                    a: "img",
                    class: 'elements_',
                    src: url + '/mess_img/' + data.username + '/' + data.key + '/' + data.extension_
                })
                fetch_image_data(key,url+'/file_/'+key,img)
                img.onclick = (e)=>{
                    node.ex_id.src = url + '/mess_img/' + data.username + '/' + data.key + '/' + data.extension_
                    fetch_image_data(key,url+'/file_/'+key,node.ex_id)
                    if (!node.stage.contains(node.expanded)) {
                        node.stage.appendChild(node.expanded)
                    }
                    node.expanded.appendChild(close(node.expanded))
                }
                img_div.appendChild(img)
                d2.appendChild(img_div)
                d1.appendChild(d2)
            } else if (data.video == true) {
                const video_div = $({
                    a: "div",
                    class: "image_msg"
                })
                window['video_message' + key] = $({
                    a: 'video',
                    class: 'elements vid',
                    controls: true,
                    autoplay: true,
                    muted: true,
                    loop: true,
                    src: url + '/mess_video/' + data.username + '/' + data.key + data.extension
                })
                window['video_message' + key].setAttribute('playsinline', '')
                fetch_data(key,url+"/messageFiles/"+key,window['video_message'+key])
                video_div.appendChild(window['video_message' + key])
                d2.appendChild(video_div)
                d1.appendChild(d2)
            } else if (data.audio) {
                const audio_div = $({
                    a: 'div',
                    class: 'image_msg'
                })
                const audio = $({
                    a: 'audio',
                    class: 'elements',
                    controls: true,
                    src: url + '/mess_audio/' + data.username + '/' + data.key + '/' + data.extension_
                })
                audio_div.appendChild(audio)
                d2.appendChild(audio_div)
                d1.appendChild(d2)
            }
        }
        if (data.te == true) {
            if (data.incoming_message == true && data.f == data.rendered_log && node.mk.firstChild) {
                if (node.mk.firstChild.lastChild.innerHTML == timestamp) {
                    node.mk.firstChild.lastChild.remove(node.mk.firstChild.lastChild)
                    if (node.mk.firstChild.className == 'mb' || node.mk.firstChild.className == 'mb ms34') {
                        node.mk.firstChild.classList.add('bu')
                        node.mk.firstChild.classList.remove('ms34')
                    }
                } else {
                    if (node.mk.firstChild.className == 'mb bu' || node.mk.firstChild.className == 'mb bu ms34') {
                        node.mk.firstChild.classList.remove('bu')
                    }
                }
            }
            const d3 = $({
                a: "div",
                class: data.ts,
                text: timestamp
            })
            d1.appendChild(d3)
            if (node.mk.firstChild) {
                let yy = node.mk.firstChild.className
                if (yy != "mb bu") {
                    if (data.new_date == true) {
                        d1.classList.add('ms34')
                    }
                }
            }
        }
        if (data.pos == 0) {
            node.mk.innerHTML = ''
        }
        if (data.incoming_message != true) {
            if (data.new_date == true) {
                const dt = $({
                    a: "div",
                    class: "tw12 ms34 ts34",
                    text: data.date
                })
                node.mk.appendChild(dt)
            }
            node.mk.appendChild(d1)
            if (data.last == true) {
                const sm = $({
                    a: "div",
                    class: "tw12 ms34 sc34",
                    text: "Started convo with " + data.a + " on " + data.date
                })
                node.mk.appendChild(sm)
            }
            window[data.a + 'msg_log'] = node.mk
        } else {
            if (document.head.contains(favicon)) {
                const notification_favicon = $({
                    a: 'link',
                    href: url + '/favicon_notification',
                    rel: 'shortcut icon'
                })
                document.head.removeChild(favicon)
                document.head.appendChild(notification_favicon)
            }
            _.emit('notification_sound')
            if (window[data.f + 'msg_log']) {
                window[data.f + 'msg_log'].prepend(d1)
                if (data.rendered_log == data.f) {
                    node.mk = window[data.f + 'msg_log']
                }
            }
        }
    }
    )

    _.on('is_typing', (data)=>{
        data = JSON.parse(data)
        if (data.b == true) {
            node.is_typing.textContent = data.a + " is typing..."
            node.mk.prepend(node.is_typing_bubble)
            node.mk.prepend(node.is_typing)
        } else {
            if (node.mk.contains(node.is_typing)) {
                node.mk.removeChild(node.is_typing)
                node.mk.removeChild(node.is_typing_bubble)
            }
        }
    }
    )

    const m_node = {
        d1: $({
            a: "button",
            class: "back",
            text: "Back"
        }),
        d2: $({
            a: "div",
            class: "mobile_content2"
        }),
        d3: $({
            a: "div",
            class: "dot"
        }),
        d4: $({
            a: "div",
            class: "dot"
        }),
        d5: $({
            a: "div",
            class: "dot"
        }),
        d6: $({
            a: "div",
            class: "ppm"
        }),
        img1: $({
            a: "img",
            class: "profile_img"
        }),
        l1: $({
            a: "label",
            class: "messages_username"
        }),
        d7: $({
            a: "div",
            class: "msg_container"
        }),
        d8: $({
            a: "div",
            class: "m16"
        }),
        b1: send(),
        b2: $({
            a: "button",
            class: "select_img"
        }),
        img2: $({
            a: "img",
            class: "e45",
            src: url + "/img"
        })
    }

    m_node.d2.appendChild(m_node.d3)
    m_node.d2.appendChild(m_node.d4)
    m_node.d2.appendChild(m_node.d5)
    m_node.d6.appendChild(m_node.img1)
    m_node.b2.appendChild(m_node.img2)
    m_node.d8.appendChild(node.mfm)
    m_node.d8.appendChild(m_node.b1)
    m_node.d8.appendChild(m_node.b2)
    m_node.d7.appendChild(m_node.d8)
    m_node.d2.appendChild(node.message_options)

    m_node.d1.onclick = ()=>{
        back()
    }

    _.on('get_message_log', (a)=>{

        const data = JSON.parse(a)
        console.log(data)
        const username = data.e
        set_pro_data(username, url + '/files/' + username, m_node.img1)
        m_node.l1.textContent = data.e
        node.c123.innerHTML = ''
        node.p.innerHTML = ''
        node.c123.appendChild(m_node.d1)
        node.c123.appendChild(m_node.d2)
        node.c123.appendChild(m_node.d6)
        node.c123.appendChild(m_node.l1)
        node.p.appendChild(m_node.d7)

        if (!node.cs_messages.contains(node.side_search)) {
            node.cs_messages.appendChild(node.side_search)
        }
        if (!node.cs_messages.contains(node.mk)) {
            node.cs_messages.appendChild(node.mk)
        }
        if (!node.cs_messages.contains(node.entry2)) {
            node.cs_messages.appendChild(node.entry2)
        }
        if (node.c123.contains(node.entry)) {
            node.c123.removeChild(node.entry)
        }
        if (node.c123.contains(gc_node.gc)) {
            node.c123.removeChild(gc_node.gc)
        }
        node.mk.style.width = '60%'
        node.mk.style.backgroundColor = '#1d1f1d'

        const $_ = ()=>{
            node.message_options.classList.toggle('mo2')
        }

        m_node.d2.onclick = ()=>{
            $_()
        }

        m_node.b1.onclick = ()=>{
            snd_message(data.e)
        }

        m_node.b2.onclick = ()=>{
            node.message_input.click()
        }
    }
    )

    _.on('message_transmission_ended', (a)=>{
        window[JSON.parse(a).a + 'msg_log'] = node.mk
    }
    )

    _.on('new_mess_response_', (data)=>{
        _.emit('update', {
            a: data.a,
            b: data.b
        })
    }
    )
    _.on('update_votes', (data)=>{
        const b = data.a
          , c = data.c
          , d = data.b
        if (window[b + "_upvotes"]) {
            window[b + "_upvotes"].textContent = d
            window[b + "_downvotes"].textContent = c
        }
        if (window[b + 'comm_uc']) {
            window[b + 'comm_uc'].textContent = d
            window[b + 'comm_dc'].textContent = c
        }
        if (window[b + "_upvotes_timeline"]) {
            window[b + "_upvotes_timeline"].textContent = d
            window[b + "_downvotes_timeline"].textContent = c
        }
        if (window[b + "_upvotes_my_timeline"]) {
            window[b + "_upvotes_my_timeline"].textContent = d
            window[b + "_downvotes_my_timeline"].textContent = c
        }
    }
    )

    let search_data_container = $({
        a: "div"
    })
    _.on('search_response', (data)=>{
        data = JSON.parse(data)
        const username = data.u
        if (!node.p.contains(node.sr365)) {
            node.p.appendChild(node.sr365)
        }
        if (node.sr365.contains(search_data_container)) {
            node.sr365.removeChild(search_data_container)
        }

        if (data.first == true) {
            search_data_container.innerHTML = ''
            node.search_mess.textContent = ''
        }
        let l1
        if (data.results != false) {
            search_data = $({
                a: "div",
                class: "search_results"
            })
            const d2 = $({
                a: "div",
                class: "ppx"
            })
            const img1 = $({
                a: "img",
                class: "profile_img"
            })
            set_pro_data(username, url + "/files/" + username, img1)
            img1.onclick = (e)=>{
                e.stopPropagation()
                _l_p(username)
            }
            if (data.if == undefined) {
                l1 = $({
                    a: "label",
                    class: "srx_ srn",
                    text: username + " (me)"
                })
            } else {
                l1 = $({
                    a: "label",
                    class: "srx_ srn",
                    text: username
                })
            }
            const d3 = $({
                a: "div",
                class: "msg_not"
            })
            const l2 = $({
                a: "label",
                class: "num_not",
                text: "New Messages"
            })
            const d4 = $({
                a: "div",
                class: "c34"
            })

            d2.appendChild(img1)
            search_data.appendChild(d2)
            d3.appendChild(l2)
            l1.appendChild(d3)
            search_data.appendChild(l1)

            let _svgu
            if (data.if) {
                const d8 = env('mail')
                search_data.onclick = ()=>{
                    start_message(username)
                }
                d4.appendChild(d8)
                search_data.appendChild(d4)
            } else if (data.if == false) {
                const p = plus()
                p.onclick = (e)=>{
                    add_friend({
                        a: username
                    })
                }
                d4.appendChild(p)
                search_data.appendChild(d4)
            }
        } else {
            node.search_mess.textContent = ''
            search_data_container.innerHTML = ''
            search_data = $({
                a: "label",
                text: "No Results",
                class: 'tw12'
            })
        }
        search_data_container.appendChild(search_data)
        node.sr365.prepend(search_data_container)
    }
    )

    _.on('post_response', (data)=>{
        const $ = JSON.parse(data)
        if ($.a == true) {
            if (node.cp_d4.innerHTML != '') {
                node.cp_d4.innerHTML = ''
            }
        } else {
            console.log('invalid post')
        }
    }
    )

    _.on('post_construction', (data)=>{
        data = JSON.parse(data)
        const key = data.key
        const elements = node.cp_d4.childElementCount
        if (elements == 0) {
            let media
            if (data.image) {
                media = $({
                    a: 'img',
                    class: "img_prev1"
                })
                fetch_image_data(key, url + '/temp_file/' + key, media)
            } else if (data.video) {
                window['post_preview_video' + key] = $({
                    a: 'video',
                    class: 'img_prev1',
                    controls: true,
                    autoplay: true,
                    muted: true,
                    loop: true,
                    src: url + '/video/' + data.user + '/' + key + data.extension
                })
                window['post_preview_video' + key].setAttribute('playsinline', '')
                fetch_data(key,url+"/temp_file/"+key,window['post_preview_video'+key])
                media = window['post_preview_video' + key]
            } else if (data.audio) {
                window['post_preview_audio' + key] = $({
                    a: 'audio',
                    class: 'img_prev1',
                    controls: true,
                    src: url + '/audio/' + data.user + '/' + key + data.extension
                })
                fetch_data(key,url+"/temp_file/"+key,window['post_preview_audio'+key])
            }
            const div1 = $({
                a: 'div',
                style: 'max-width:90%;'
            })
            const div2 = $({
                a: 'div',
                style: "cursor:pointer;position: relative; left: 94%; top: 25px; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; background-color: black;box-shadow: inset 2px 2px 2px 2px rgb(48, 48, 51);"
            })
            div2.onclick = ()=>{
                _.emit('remove_temp')
                if (node.cp_d4.contains(div1)) {
                    node.cp_d4.removeChild(div1)
                }
            }
            div2.appendChild(svg([{
                type: 'svg',
                width: '30px',
                height: '30px'
            }, {
                type: 'circle',
                r: '13',
                cy: '15',
                cx: '15',
                stroke: "#2a78ff",
                fill: "#1a1a1a"
            }, {
                type: 'line',
                x1: '7',
                y1: '7',
                x2: '23',
                y2: '23',
                stroke: 'white',
                stroke_width: '1.5'
            }, {
                type: 'line',
                x1: '23',
                y1: '7',
                x2: '7',
                y2: '23',
                stroke: 'white',
                stroke_width: '1.5'
            }]))
            div1.appendChild(div2)
            if (!data.audio) {
                div1.appendChild(media)
            } else {
                div1.appendChild(window['post_preview_audio' + data.key])
            }
            node.cp_d4.appendChild(div1)
        } else if (elements == 1) {
            const img = $({
                a: 'img',
                class: "img_prev2",
                src: url + "/temp_file/" + data
            })
            node.cp_d4.className = 'img_preview impx img_preview2'
            node.cp_d4.appendChild(img)
        }
    }
    )

    _.on('comm_construction', (data)=>{
        data = JSON.parse(data)
        const key = data.key
        let media
        if (data.image) {
            media = $({
                a: 'img',
                class: "img_prev1",
                src: url + '/temp_comments/' + key
            })
            fetch_image_data(key,url+'/temp_comm_file/'+key,media)
        } else if (data.video) {
            window['comm_preview_video' + key] = $({
                a: 'video',
                class: 'img_prev1',
                controls: true,
                autoplay: true,
                muted: true,
                loop: true,
                src: url + '/video_comm/' + data.user + '/' + data.key + data.extension
            })
            window['comm_preview_video' + key].setAttribute('playsinline', '')
            fetch_data(key,url+"/temp_comm_file/"+key,window['comm_preview_video'+key])
            media = window['comm_preview_video' + key]
        } else if (data.audio) {
            window['comm_preview_audio' + key] = $({
                a: 'audio',
                class: 'img_prev1',
                controls: true,
                src: url + '/audio_comm/' + data.user + '/' + data.key + data.extension
            })
            fetch_data(key,url+"/temp_comm_file/"+key,window['comm_preview_audio'+key])
        }
        const div1 = $({
            a: 'div',
            style: 'max-width:90%;'
        })
        const div2 = $({
            a: 'div',
            style: "cursor:pointer;position: relative; left: 94%; top: 25px; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; background-color: black;box-shadow: inset 2px 2px 2px 2px rgb(48, 48, 51);"
        })
        div2.onclick = ()=>{
            _.emit('remove_temp_comm')
            if (node.img_comm_preview.contains(div1)) {
                node.img_comm_preview.removeChild(div1)
            }
        }
        div2.appendChild(svg([{
            type: 'svg',
            width: '30px',
            height: '30px'
        }, {
            type: 'circle',
            r: '13',
            cy: '15',
            cx: '15',
            stroke: "#2a78ff",
            fill: "#1a1a1a"
        }, {
            type: 'line',
            x1: '7',
            y1: '7',
            x2: '23',
            y2: '23',
            stroke: 'white',
            stroke_width: '1.5'
        }, {
            type: 'line',
            x1: '23',
            y1: '7',
            x2: '7',
            y2: '23',
            stroke: 'white',
            stroke_width: '1.5'
        }]))
        div1.appendChild(div2)
        if (!data.audio) {
            div1.appendChild(media)
        } else {
            div1.appendChild(window['comm_preview_audio' + data.key])
        }
        node.img_comm_preview.appendChild(div1)
    }
    )

    const c_node = {
        footer: $({
            a: "div",
            class: "footer ft13"
        }),
        send: $({
            a: "div",
            class: "send_comm"
        }),
        fileSelect: $({
            a: 'button',
            class: 'select_img_comm'
        }),
        fileImg: $({
            a: 'img',
            src: url + '/img',
            class: 'e45'
        }),
        object_a3: $({
            a: "div",
            class: "object_a3"
        }),
        object_a: $({
            a: "div",
            class: "object_a"
        }),
        object_b: $({
            a: "div",
            class: "object_b"
        }),
        upvote_count: $({
            a: "div",
            class: "vc_ tw12"
        }),
        downvote_count: $({
            a: "div",
            class: "vc_ tw12"
        }),
        img_bg12: $({
            a: "div",
            class: "image bg12"
        }),
        timestamp: $({
            a: "div",
            class: "timestamp2 tw12"
        }),
        post_profile: $({
            a: "div",
            class: "post_profile"
        }),
        post_profile2: $({
            a: "div",
            class: "post_profile_comm"
        }),
        post_username: $({
            a: "div",
            class: "post_username b12"
        }),
        profile_img: $({
            a: "img",
            class: "profile_img"
        }),
        profile_img2: $({
            a: "img",
            class: "profile_img"
        }),
        profile_username: $({
            a: 'div',
            class: 'puc b12 m78'
        }),
        image: $({
            a: "img",
            class: "elements bs12"
        }),
        send_img: send('send_img'),
        audio: $({
            a: "audio",
            class: "elements audio bs12",
            controls: true
        }),
        video: $({
            a: "video",
            class: "elements bs12",
            controls: true,
            autoplay: true,
            muted: true,
            loop: true
        }),
        dot_menu: $({
            a: "div",
            class: "dot_menu dm_comm"
        }),
        ta: $({
            a: "textarea",
            class: "object_a2",
            placeholder: 'Add a comment...'
        }),
        taDiv: $({
            a: "div",
            style: 'width:100%;margin-left:5px;margin-top:50px;'
        }),
        post_caption: $({
            a: "div",
            class: "post_caption pcc"
        }),
        post_label: $({
            a: "label",
            class: 'captionLabel'
        }),
        svg_dm: svg({
            type: 'svg',
            width: '50px',
            height: '25px'
        }),
        line1: svg({
            type: 'line',
            x1: '16',
            y1: '8',
            x2: '24',
            y2: '16',
            stroke: '#383d41',
            stroke_width: '2',
            stroke_linecap: 'round'
        }),
        line2: svg({
            type: 'line',
            x1: '32',
            y1: '8',
            x2: '24',
            y2: '16',
            stroke: '#383d41',
            stroke_width: '2',
            stroke_linecap: 'round'
        })
    }

    c_node.fileSelect.onclick = ()=>{
        node.comment_input.click()
    }

    c_node.fileSelect.appendChild(c_node.fileImg)
    c_node.object_a.appendChild(upvote_button())
    c_node.object_a.appendChild(c_node.upvote_count)
    c_node.object_b.appendChild(downvote_button())
    c_node.object_b.appendChild(c_node.downvote_count)
    c_node.img_bg12.appendChild(c_node.image)
    c_node.img_bg12.appendChild(c_node.audio)
    c_node.img_bg12.appendChild(c_node.dot_menu)
    c_node.img_bg12.appendChild(c_node.timestamp)
    c_node.img_bg12.appendChild(c_node.post_profile)
    c_node.img_bg12.appendChild(c_node.footer)
    c_node.img_bg12.appendChild(node.comments)
    c_node.img_bg12.appendChild(c_node.object_a3)
    c_node.svg_dm.appendChild(c_node.line1)
    c_node.svg_dm.appendChild(c_node.line2)
    c_node.dot_menu.appendChild(c_node.svg_dm)
    c_node.footer.appendChild(c_node.object_a)
    c_node.footer.appendChild(c_node.object_b)
    c_node.post_profile2.appendChild(c_node.profile_img2)
    c_node.post_profile2.appendChild(c_node.profile_username)
    c_node.object_a3.appendChild(c_node.post_profile2)
    c_node.taDiv.appendChild(node.img_comm_preview)
    c_node.taDiv.appendChild(c_node.ta)
    c_node.object_a3.appendChild(c_node.taDiv)
    c_node.object_a3.appendChild(c_node.fileSelect)
    c_node.object_a3.appendChild(c_node.send)
    c_node.send.appendChild(c_node.send_img)
    node.expanded3.appendChild(c_node.img_bg12)
    node.expanded3.appendChild(close(node.expanded3))
    c_node.post_caption.appendChild(c_node.post_label)

    c_node.ta.addEventListener('input', ()=>{
        c_node.ta.style.height = 'auto';
        c_node.ta.style.height = (c_node.ta.scrollHeight) + 'px'
    }
    )

    c_node.post_label.onclick = (e)=>{
        const node = e.target
        if (node && e.target.nodeName == "SPAN") {
            alert(node.textContent + " is a lame hashtag")
            e.stopPropagation()
        }
    }

    let comm_id = undefined

    _.on('comments', (data)=>{
        data = JSON.parse(data)
        console.log(data)
        const user = data.user
        const username = data.username
        const key = data.key
        const mimeType = data.mimeType
        const message = data.message
        const video = data.video
        const source = data.source
        const image = data.image
        const audio = data.audio
        const shared = data.shared
        let video_key
        let post_key

        if (source == 'timeline') {
            video_key = "video" + key
            post_key = key
        } else if (source == 'profile_timeline') {
            video_key = 'profile_video' + key
            post_key = 'profile_timeline' + key
        }
        let upvotes = 0
        let downvotes = 0
        if (data.upvotes) {
            upvotes = data.upvotes
        }
        if (data.downvotes) {
            downvotes = data.downvotes
        }
        window[key + 'comm_uc'] = c_node.upvote_count
        window[key + 'comm_dc'] = c_node.downvote_count

        if (!node.main.contains(node.expanded3)) {
            clear_main()
            node.main.appendChild(node.expanded3)
        }

        let expanded3 = node.expanded3;
        c_node.profile_username.textContent = user
        if (comm_id != key) {
            comm_id = key;

            if (c_node.timestamp.firstChild) {
                c_node.timestamp.removeChild(c_node.timestamp.firstChild);
            }
            c_node.timestamp.textContent = data.timestamp
            const x__ = ()=>{
                if (video) {
                    window[post_key].appendChild(window[video_key])
                    window[video_key].classList = "elements vid"
                }
                _l_p(username, false)
            }
            c_node.post_profile.onclick = ()=>{
                x__()
            }
            c_node.post_username.onclick = ()=>{
                x__()
            }
            set_pro_data(username, url + '/files/' + username, c_node.profile_img)
            c_node.post_profile.appendChild(c_node.profile_img)
            if (c_node.post_username.firstChild) {
                c_node.post_username.removeChild(c_node.post_username.firstChild)
            }
            c_node.post_username.textContent = username
            c_node.img_bg12.appendChild(c_node.post_username)
            if (message) {
                c_node.post_label.innerHTML = ''
                let i = 0;
                const il = message.length;
                let isHashtag = false
                let lastHashtagStartPos = 0
                let lastHashtagEndPos = 0
                let hashtagPos, finalCaption
                for (i; i < il; i++) {
                    if (message.charAt(i) == '#' && !isHashtag) {
                        isHashtag = true
                        lastHashtagStartPos = i
                    } else if (message.charAt(i) == ' ' && isHashtag) {
                        isHashtag = false
                        c_node.post_label.innerHTML += message.slice(lastHashtagEndPos, lastHashtagStartPos);
                        const hashtag = $({
                            a: 'span',
                            style: 'color:#2e51ff;border-bottom:1px solid #2e51ff;cursor:pointer;',
                            text: message.slice(lastHashtagStartPos, i)
                        })
                        c_node.post_label.appendChild(hashtag)
                        lastHashtagEndPos = i
                    }
                }
                if (isHashtag && lastHashtagEndPos == 0) {
                    if (lastHashtagStartPos != 0) {
                        c_node.post_label.innerHTML += message.slice(0, lastHashtagStartPos);
                    }
                    const hashtag = $({
                        a: 'span',
                        style: 'color:#2e51ff;border-bottom:1px solid #2e51ff;cursor:pointer;',
                        text: message.slice(lastHashtagStartPos, message.length)
                    })
                    c_node.post_label.appendChild(hashtag)
                } else if (lastHashtagStartPos == 0 && lastHashtagEndPos == 0) {
                    c_node.post_label.textContent = message
                } else if (lastHashtagEndPos != 0 && lastHashtagEndPos != message.length) {
                    c_node.post_label.innerHTML += message.slice(lastHashtagEndPos, message.length);
                }
                if (!c_node.img_bg12.contains(c_node.post_caption)) {
                    c_node.img_bg12.appendChild(c_node.post_caption)
                }
            } else {
                if (c_node.img_bg12.contains(c_node.post_caption)) {
                    c_node.img_bg12.removeChild(c_node.post_caption)
                }
            }
            if (video) {
                if (c_node.img_bg12.contains(c_node.image)) {
                    c_node.img_bg12.removeChild(c_node.image)
                }
                if (c_node.img_bg12.contains(c_node.audio)) {
                    c_node.img_bg12.removeChild(c_node.audio)
                }
                if (window[video_key]) {
                    window[video_key].classList = "elements bs12"
                } else {
                    window[video_key] = $({
                        a: 'video',
                        class: 'elements bs12',
                        controls: true,
                        autoplay: true,
                        muted: true,
                        loop: true,
                        src: url + '/video/' + data.username + '/' + data.key + data.extension
                    })
                    window[video_key].setAttribute('playsinline', '')
                    fetch_data(key,url+'/off/'+key,window[video_key])
                }

                c_node.img_bg12.appendChild(window[video_key])
                node.expanded3.onclick = ()=>{
                    window[video_key].classList = "elements vid"
                    window[post_key].appendChild(window[video_key])
                }
            } else if (image) {
                if (!c_node.img_bg12.contains(c_node.image)) {
                    c_node.img_bg12.appendChild(c_node.image)
                }
                if (c_node.img_bg12.contains(c_node.audio)) {
                    c_node.img_bg12.removeChild(c_node.audio)
                }
                if (c_node.img_bg12.contains(c_node.video)) {
                    c_node.img_bg12.removeChild(c_node.video)
                }
                fetch_image_data(key,url+'/off/'+data.key,c_node.image)
                c_node.image.src = url + '/image/' + key
                c_node.image.onclick = (e)=>{
                    e.stopPropagation();
                    //use blobKeyURL to fetch_image_data:
                    expandKey({
                        a: data.key,
                        b: node.expanded,
                        username: username
                    })
                }
            } else if (audio) {
                if (c_node.img_bg12.contains(c_node.image)) {
                    c_node.img_bg12.removeChild(c_node.image)
                }
                if (!c_node.img_bg12.contains(c_node.audio)) {
                    c_node.img_bg12.appendChild(c_node.audio)
                }
                if (c_node.img_bg12.contains(c_node.video)) {
                    c_node.img_bg12.removeChild(c_node.video)
                }
                c_node.audio.src = url + '/audio/' + data.username + '/' + data.key + data.extension
                fetch_data(key,url+'/off/'+data.key,c_node.audio)
            } else {
                if (c_node.img_bg12.contains(c_node.image)) {
                    c_node.img_bg12.removeChild(c_node.image)
                }
                if (c_node.img_bg12.contains(c_node.audio)) {
                    c_node.img_bg12.removeChild(c_node.audio)
                }
                if (c_node.img_bg12.contains(c_node.video)) {
                    c_node.img_bg12.removeChild(c_node.video)
                }
            }
            c_node.object_a.onclick = (e)=>{
                e.stopPropagation();
                upvote({
                    a: key,
                    b: username
                });
            }
            c_node.object_b.onclick = (e)=>{
                e.stopPropagation();
                downvote({
                    a: key,
                    b: username
                });
            }
            if (window[key + 'comm_uc'].firstChild) {
                window[key + 'comm_uc'].removeChild(window[key + 'comm_uc'].firstChild)
            }
            window[key + 'comm_uc'].textContent = upvotes
            if (window[key + 'comm_dc'].firstChild) {
                window[key + 'comm_dc'].removeChild(window[key + 'comm_dc'].firstChild)
            }
            window[key + 'comm_dc'].textContent = downvotes
            set_pro_data(user, url + "/files/" + user, c_node.profile_img2)
            c_node.profile_img2.onclick = ()=>{
                window[post_key].appendChild(window[video_key])
                _l_p(user, false);
            }
            c_node.send.onclick = ()=>{
                _.emit('send_comm', {
                    a: c_node.ta.value,
                    b: key,
                    c: username
                });
                c_node.ta.value = ''
                node.img_comm_preview.innerHTML = ''
            }

            c_node.img_bg12.onclick = (e)=>{
                e.stopPropagation()
            }

            _.emit('render_comments2', JSON.stringify({
                key: key
            }))
        } else {
            if (video) {
                window[video_key].classList = "elements bs12"
                c_node.img_bg12.appendChild(window[video_key])
                node.expanded3.onclick = ()=>{
                    window[video_key].classList = "elements vid"
                    window[post_key].appendChild(window[video_key])
                }
            }
        }
        if (shared) {
            _.emit('start')
            console.log("shared content")
        }
    }
    )

    _.on('render_comments_nil', (data)=>{
        const comments = document.getElementById('comments')
        if (comments) {
            if (c_node.img_bg12.contains(comments)) {
                c_node.img_bg12.removeChild(comments)
            }
        }
    }
    )

    _.on('render_comments2', (data)=>{
        data = JSON.parse(data)
        const postKey = data.key
        const username = data.username
        const comment = data.comment
        const timestamp = data.time + ', ' + data.date
        const commentKey = data.commentKey
        const mimeType = data.mimeType
        const image = data.image
        const video = data.video
        const audio = data.audio

        if (!window['comments' + postKey]) {
            window['comments' + postKey] = $({
                a: 'div',
                class: 'comments'
            })
            window['comments' + postKey].id = 'comments'
        }

        const comments = document.getElementById('comments')
        if (comments) {
            if (c_node.img_bg12.contains(comments)) {
                c_node.img_bg12.removeChild(comments)
            }
        }

        c_node.img_bg12.appendChild(window['comments' + postKey])

        if (!window['comment' + commentKey]) {
            window['comment' + commentKey] = $({
                a: 'div',
                class: 'comment b15'
            })
            const profile_pic = $({
                a: 'img',
                class: 'profile_img'
            })
            set_pro_data(username, url + '/files/' + username, profile_pic)
            profile_pic.onclick = ()=>{
                _l_p(username, false)
            }
            const profile_pic_div = $({
                a: 'div',
                class: 'post_profile_comm2'
            })
            profile_pic_div.appendChild(profile_pic)
            window['comment' + commentKey].appendChild(profile_pic_div)
            const usernameLabel = $({
                a: 'div',
                class: 'puc b12',
                text: username
            })
            window['comment' + commentKey].appendChild(usernameLabel)
            const timestampLabel = $({
                a: 'label',
                class: 'timestamp_comm',
                text: timestamp
            })
            window['comment' + commentKey].appendChild(timestampLabel)
            const commentDiv = $({
                a: 'div',
                class: 'post_caption'
            })
            if (comment) {
                const commentLabel = $({
                    a: 'label',
                    text: comment
                })
                commentDiv.appendChild(commentLabel)
            }
            const commentWrap = $({
                a: 'div',
                class: 'commWrap'
            })
            if (mimeType) {

                if (image) {
                    const image = $({
                        a: 'img',
                        class: 'elements'
                    })
                    fetch_image_data(data.mediaKey, url + '/image_comm/' + postKey + '/' + commentKey, image)
                    commentWrap.appendChild(image)
                }
                if (video) {
                    const video = $({
                        a: 'video',
                        class: 'elements',
                        controls: true,
                        autoplay: true,
                        muted: true,
                        loop: true,
                        src: url + '/video_comm/' + data.username + '/' + data.mediaKey + data.extension
                    })
                    fetch_data(data.mediaKey,url+'/comm_media/'+data.mediaKey,video)
                    commentWrap.appendChild(video)
                }
                if (audio) {
                    const audio = $({
                        a: 'audio',
                        class: 'elements',
                        controls: true,
                        src: url + '/audio_comm/' + data.username + '/' + data.mediaKey + data.extension
                    })
                    commentWrap.appendChild(audio)
                }

            }
            if (comment) {
                commentWrap.appendChild(commentDiv)
            }
            window['comment' + commentKey].appendChild(commentWrap)

            const comm_footer = $({
                a: 'div',
                class: 'comm_footer'
            })
            window['comment' + commentKey].appendChild(comm_footer)
            const upvoteDiv = $({
                a: 'div',
                class: 'object_a',
                style: 'height:40px'
            })
            comm_footer.appendChild(upvoteDiv)
            const upvote = upvote_button()
            upvoteDiv.appendChild(upvote)
            const downvoteDiv = $({
                a: 'div',
                class: 'object_b',
                style: 'height:40px'
            })
            comm_footer.appendChild(downvoteDiv)
            const downvote = downvote_button()
            downvoteDiv.appendChild(downvote)
            const replyDiv = $({
                a: 'div',
                class: 'object_c',
                style: 'height:40px'
            })
            comm_footer.appendChild(replyDiv)
            const reply = chat_icon()
            replyDiv.appendChild(reply)
            window['comments' + postKey].prepend(window['comment' + commentKey])
        }
    }
    )

    _.on('render_comment', (a)=>{
        const raw_data = JSON.parse(a).a,
        data = raw_data[0]

        if(JSON.parse(a).b){
          if(window[data.d+"_reply_count"]){
            window[data.d+"_reply_count"].textContent = parseInt(window[data.d+"_reply_count"].textContent,10)+1
          }
        }
        else if(!window[data.e+"_comment"]){
        const c1=(data)=>{
          if(data.c == true){
            return window[data.b+"_comment"] = $({a:"div",class:data.a})
          }else{
            return window[data.b+"_reply"] = $({a:"div",class:data.a})
          }
        }
        const c2=()=>{
          return $({a:"div",class:"comm_text"})
        }
        const c3=(data)=>{
          return $({a:"pre",class:'t',text:data})
        }
        const c4=(data)=>{
          return $({a:"div",class:'puc b12',text:data})
        }
        const c5=(data)=>{
          return $({a:"div",class:'timestamp_comm',text:data.time+", "+data.date})
        }
        const c6=()=>{
          return $({a:"div",class:'post_profile_comm'})
        }
        const c7=(data)=>{
          const x = $({a:"img",class:'profile_img'})
          set_pro_data(data,url+"/files/"+data,x)
          return x
        }
        const c8=()=>{
            let a = $({a:"div",class: "object_a"})
            a.appendChild(upvote_button())
            a.onclick = (e)=>{
                e.stopPropagation()
                _.emit('upvote_reply',data.id)
            }
            return a
        }
        const c9=()=>{
            let a =$({a:"div",class: "object_b"})
            a.appendChild(downvote_button())
            a.onclick = (e)=>{
                e.stopPropagation()
                _.emit('downvote_reply',data.id)
            }
            return a
        }
        const cc=(data)=>{
            return window[data.b+"_reply_count"] = $({a:'label',class:'b13',text:data.a})
        }
        const f=()=>{
            let a = $({a:"div",class: "footer"})
            a.appendChild(c8())
            a.appendChild(c9())
            return a
        }
        const c11=()=>{
            return $({a:"div",class:"reply_comm"})
        }
        const c10=(x)=>{
            const a = $({a:"div",class:"object_c"})
            a.appendChild(chat_icon())
            a.appendChild(cc({a:x,b:data.e}))
            a.onclick=()=>{
            if(!reply_comm.contains(node.reply_comm_box)){
                reply_comm.style.height = "0px";
                node.reply_comm_box.placeholder = "Reply to " + data.b
                node.replies.innerHTML=''
                reply_comm.appendChild(node.reply_comm_box)
                reply_comm.appendChild(node.reply_send_comm)
                reply_comm.appendChild(node.reply_white_line)
                if(window['highlight']){
                    window['highlight'].className = "comment b15"
                }
                if(window['r_comm_active']){
                    window['r_comm_active'].className = 'reply_comm'
                    window['r_comm_active'].style.height = '0px';
               }
                let i = 1
                const ii = raw_data.length
                if(ii>1){
                    comment.className = "comment b14"
                    window['highlight'] = comment
                    for(i;i<ii;i++){
                        let comment_ = c1({a:'comment_reply',b:raw_data[i].e,c:false})
                        let comm_text_ = c2()
                        let at = $({a:'pre',class:'at',text:'@'+raw_data[i].at+':'})
                        let comm_text_pre_ = c3(raw_data[i].a)
                        let comm_un_ = c4(raw_data[i].b)
                        let comm_ts_ = c5({time:raw_data[i].time,date:raw_data[i].date})
                        let comm_pro_ = c6()
                        let pro_ = c7(raw_data[i].b)
                        let footer_ = f()
                        let obja_ = c8()
                        let reply_comm_ = c11()
                        let objc_ = c10()
                        let comm_org =$({a:'div',class:'com_org'})

                        comm_text_pre_.prepend(at)
                        footer_.appendChild(objc_)
                        comm_text_.appendChild(comm_text_pre_)
                        comm_pro_.appendChild(pro_)
                        node.replies.appendChild(comment_)
                        reply_comm.appendChild(node.replies)
                        comment_.appendChild(comm_org)
                        comment_.appendChild(comm_pro_)
                        comment_.appendChild(comm_un_)
                        comment_.appendChild(comm_ts_)
                        comment_.appendChild(comm_text_)
                        comment_.appendChild(footer_)
                        comment_.appendChild(reply_comm_)
                    }
                }
                reply_comm.style.height = (node.replies.clientHeight+60) + "px";
                window['r_comm_active'] = reply_comm
                node.reply_send_comm.onclick=()=>{
                    let $$ = node.reply_comm_box.value
                    if($$){
                    _.emit('reply_comment',JSON.stringify({a:data.b,b:$$,c:data.e}))
                  }
                }
            }
        }
            return a
        }

        let comment = c1({a:'comment b15',b:data.e,c:true})
        let comm_text = c2()
        let comm_text_pre = c3(data.a)
        let comm_un = c4(data.b)
        let comm_ts = c5({time:data.time,date:data.date})
        let comm_pro = c6()
        let pro = c7(data.b)
        let footer = f()
        let reply_comm = c11()
        let objc = c10(data.cc)

        if(data.comm_count > 0){
            let comm_count =$({a:"label",class:"b13",text:data.comm_count})
            objc.appendChild(comm_count)
        }
        footer.appendChild(objc)
        pro.onclick=()=>{
            _l_p(data.b, false)
        }

        comm_text.appendChild(comm_text_pre)
        comm_pro.appendChild(pro)
        comment.appendChild(comm_pro)
        comment.appendChild(comm_un)
        comment.appendChild(comm_ts)
        comment.appendChild(comm_text)
        comment.appendChild(footer)
        comment.appendChild(reply_comm)

        if(data.c != false){
            node.comments.appendChild(comment)
        }else{
            node.comments.prepend(comment)
        }
      }
    })

    const p_node = {
        d1: $({
            a: "div",
            class: "profile_details3"
        }),
        l1: $({
            a: "label",
            class: "profile_username"
        }),
        l1x: $({
            a: "label",
            class: "pst"
        }),
        d3: $({
            a: "div",
            class: 'post_profile_2'
        }),
        img1: $({
            a: "img",
            class: 'profile_img_2'
        }),
        b2: $({
            a: "button",
            class: "follow_back",
            text: "Follow"
        }),
        b2a: $({
            a: "button",
            class: "unfollow",
            text: "Following"
        }),
        d2: $({
            a: "div"
        }),
        profile_mail: env('profile_mail'),
        close: close(node.expanded2)
    }

    p_node.d3.appendChild(p_node.img1)
    p_node.d1.appendChild(p_node.d3)
    p_node.d1.appendChild(p_node.l1)
    p_node.d1.appendChild(node.lppt)
    p_node.close.onclick = ()=>{
    }
    p_node.close.onclick = ()=>{

        if (node.main.contains(node.expanded2)) {
            node.main.removeChild(node.expanded2)
        }
      console.log(post_timeline_positions)
      post_timeline_positions.sort(function (a, b) {
  return a.position - b.position;
});
      console.log(post_timeline_positions)
      let i = 0
      const il = post_timeline_positions.length
      for(i;i<il;i++){
        console.log(post_timeline_positions[i].key)
        let key = post_timeline_positions[i].key
        if(!node.r.contains(window[key])){
          node.r.insertBefore(window[key],node.r.children[post_timeline_positions[i].position])
        }
      }
      post_timeline_positions = []
      document.body.removeChild(document.body.children[pos])
    }
    p_node.d1.appendChild(p_node.close)

    node.pro_top_tl.appendChild(profile_heart())
    node.pro_top_tl2.appendChild(profile_heart())
    node.top_tl.appendChild(private_heart())
    node.pro_top_tl.appendChild(profile_posts_tl())
    node.pro_top_tl2.appendChild(profile_posts_tl())
    node.top_tl.appendChild(node.posts_tl)
    p_node.d1.appendChild(p_node.d2)
    node.expanded2.appendChild(p_node.d1)

    _.on('_fetch_response', (i)=>{
        const data = JSON.parse(i)
        const username = data.x
        const followers = data.b
        const following = data.a
        const guest = data.guest
        if (!guest) {
            p_node.b2.onclick = ()=>{
                add_friend({
                    a: username
                })
            }
        } else {
            p_node.b2.onclick = ()=>{
                console.log('Sign up or create an account')
                document.body.appendChild(createAccountDiv)
                node.main.classList.add('blur')
            }
        }

        p_node.b2a.onclick = ()=>{
            uf({
                a: username
            })
        }
        p_node.profile_mail.onclick = ()=>{
            clear_main()
            start_message(username)
            messages()
        }

        if (data.self == false && data.following == true) {
            if (!p_node.d1.contains(p_node.profile_mail)) {
                p_node.d1.appendChild(p_node.profile_mail)
            }
        } else {
            if (p_node.d1.contains(p_node.profile_mail)) {
                p_node.d1.removeChild(p_node.profile_mail)
            }
        }

        window['lp_following_' + username] = $({
            a: "label",
            class: 'fx_ fx1',
            text: 'Following: ' + following
        })
        window['lp_followers_' + username] = $({
            a: "label",
            class: 'fx_ fx2',
            text: 'Followers: ' + followers
        })
        if (!p_node.d1.contains(window['lp_following_' + username])) {
            p_node.d1.appendChild(window['lp_following_' + username])
        }
        if (!p_node.d1.contains(window['lp_followers_' + username])) {
            p_node.d1.appendChild(window['lp_followers_' + username])
        }

        p_node.l1.textContent = username
        set_pro_data(username, url + "/files/" + username, p_node.img1)
        if (!node.main.contains(node.expanded2)) {
            clear_main()
            node.main.appendChild(node.expanded2)
        }
        if (node.expanded2.contains(e_node.e65_d1)) {
            node.expanded2.removeChild(e_node.e65_d1)
            node.expanded2.appendChild(p_node.d1)
        }
        if (p_node.d1.contains(p_node.l1x)) {
            p_node.d1.removeChild(p_node.l1x)
        }
        p_node.d1.onscroll = ()=>{
            if (p_node.d1.scrollTop >= 230) {
                if (pstt == false) {
                    p_node.l1x.textContent = username
                    if (!p_node.d1.contains(p_node.l1x)) {
                        p_node.d1.appendChild(p_node.l1x)
                    }
                    pstt = true
                }
            } else {
                if (pstt == true) {
                    if (p_node.d1.contains(p_node.l1x)) {
                        p_node.d1.removeChild(p_node.l1x)
                    }
                    pstt = false
                }
            }
        }
        if (data.self == false) {
            if (data.following == false) {
                if (p_node.d2.contains(p_node.b2a)) {
                    p_node.d2.removeChild(p_node.b2a)
                }
                if (!p_node.d2.contains(p_node.b2)) {
                    p_node.d2.appendChild(p_node.b2)
                }
            } else {
                if (p_node.d2.contains(p_node.b2)) {
                    p_node.d2.removeChild(p_node.b2)
                }
                if (!p_node.d2.contains(p_node.b2a)) {
                    p_node.d2.appendChild(p_node.b2a)
                }
            }
        } else {
            if (p_node.d2.contains(p_node.b2)) {
                p_node.d2.removeChild(p_node.b2)
            }
            if (p_node.d2.contains(p_node.b2a)) {
                p_node.d2.removeChild(p_node.b2a)
            }
        }

        p_node.d3.onclick = ()=>{
            set_pro_data(username, url + '/files/' + username, node.ex_id)
            if (!node.stage.contains(node.expanded)) {
                node.stage.appendChild(node.expanded)
            }
        }

        window['lp_following_' + username].onclick = ()=>{
            _.emit('e65', {
                a: username,
                b: 'following',
                c: 'lp'
            })
        }

        window['lp_followers_' + username].onclick = ()=>{
            _.emit('e65', {
                a: username,
                b: 'followers',
                c: 'lp'
            })
        }

        p_node.d1.onclick = (e)=>{
            e.stopPropagation()
        }

        if (r_pro != username) {
            node.lppt.innerHTML = ''
            _.emit('profile_timeline', {
                b: username,
                c: 'lp'
            })
            r_pro = username
        }
    }
    )

    const e_node = {
        e65_d1: $({
            a: "div"
        }),
        e65_d5: $({
            a: "div",
            class: "profile_back"
        }),
        e65_d6: $({
            a: "div"
        }),
        e65_l1: $({
            a: "label",
            class: "following_label"
        }),
    }

    e_node.e65_d1.appendChild(node._svgg)
    e_node.e65_d1.appendChild(e_node.e65_d5)
    e_node.e65_d1.appendChild(e_node.e65_l1)
    e_node.e65_d1.appendChild(e_node.e65_d6)

    _.on('e65', (data)=>{
        data = JSON.parse(data)
        const username = data.d
        const d1 = $({
            a: "div",
            class: "search_results"
        })
        const d2 = $({
            a: "div",
            class: "ppy"
        })
        const img1 = $({
            a: "img",
            class: "profile_img"
        })
        set_pro_data(username, url + "/files/" + username, img1)
        const l1 = $({
            a: "label",
            class: "srx_ srn2",
            text: data.d
        })

        d2.appendChild(img1)
        d1.appendChild(d2)
        d1.appendChild(l1)

        if (data.c == 'home') {
            if (data.first == true) {
                e_node.e65_d6.innerHTML = ''
                node.cs_profile.innerHTML = ''
                if (!node.cs_profile.contains(e_node.e65_d1)) {
                    node.cs_profile.appendChild(e_node.e65_d1)
                }

                e_node.e65_d5.onclick = ()=>{
                    profile()
                    if (node.cs_profile.contains(e_node.e65_d1)) {
                        node.cs_profile.removeChild(e_node.e65_d1)
                    }
                }
            }

            d1.onclick = ()=>{
                profile()
                if (node.cs_profile.contains(e_node.e65_d1)) {
                    node.cs_profile.removeChild(e_node.e65_d1)
                }
                _l_p(data.d, false)
            }
            e_node.e65_d1.className = "profile_details2_"
        } else if (data.c == 'lp') {
            if (data.first == true) {
                e_node.e65_d6.innerHTML = ''
                node.expanded2.innerHTML = ''
                if (!node.expanded2.contains(e_node.e65_d1)) {
                    node.expanded2.appendChild(e_node.e65_d1)
                }
                e_node.e65_d5.onclick = (e)=>{
                    e.stopPropagation()
                    if (node.expanded2.contains(e_node.e65_d1)) {
                        node.expanded2.removeChild(e_node.e65_d1)
                    }
                    node.expanded2.appendChild(p_node.d1)
                }
            }

            d1.onclick = ()=>{
                _l_p(data.d, false)
            }

            e_node.e65_d1.className = "profile_details_"
        }

        e_node.e65_d6.appendChild(d1)

        if (data.b == 'following') {
            if (e_node.e65_l1.innerHTML != data.b) {
                e_node.e65_l1.textContent = "Following"
            }
        } else if (data.b == 'followers') {
            if (e_node.e65_l1.innerHTML != data.b) {
                e_node.e65_l1.textContent = "Followers"
            }
        }
    }
    )

    node.msg_ops_container.onclick = ()=>{
        if (msg_ops_exp_state == false) {
            msg_ops_exp_state = true
            node.msg_ops_container.removeChild(node.msg_ops_1a)
            node.msg_ops_container.appendChild(node.msg_ops_1b)
        } else {
            msg_ops_exp_state = false
            node.msg_ops_container.removeChild(node.msg_ops_1b)
            node.msg_ops_container.appendChild(node.msg_ops_1a)
        }
        let$$ = 'none'
        if (m_t == false) {
            node.mk.style.width = '60%'
            node.mk.style.backgroundColor = '#1d1f1d'
            $$ = 'block'
            m_t = true
            if (!node.cs_messages.contains(node.side_search)) {
                node.cs_messages.appendChild(node.side_search)
            }
            if (!node.cs_messages.contains(node.entry2)) {
                node.cs_messages.appendChild(node.entry2)
            }
        } else {
            if (node.cs_messages.contains(node.side_search)) {
                node.cs_messages.removeChild(node.side_search)
            }
            if (node.cs_messages.contains(node.entry2)) {
                node.cs_messages.removeChild(node.entry2)
            }
            m_t = false
            node.mk.style.width = '100%'
            node.mk.style.backgroundColor = '#00000078'
        }
    }

    _.on('public_state_change', (data)=>{
        data = JSON.parse(data)
        const username = data.username
        const followers = "Followers: " + data.followers
        const following = "Following: " + data.following
        if (window['lp_followers_' + username]) {
            window['lp_followers_' + username].textContent = followers
        }
        if (window['lp_following_' + username]) {
            window['lp_following_' + username].textContent = following
        }
        if (window['following_' + username]) {
            window['following_' + username].textContent = following
        }
        if (window['followers_' + username]) {
            window['followers_' + username].textContent = followers
        }
    }
    )

    _.on('e', (x)=>{
        if (node.cs.contains(node.cs_home)) {
            node.cs.removeChild(node.cs_home)
        }
        if (node.cs.contains(node.cs_profile)) {
            node.cs.removeChild(node.cs_profile)
        }
        if (node.cs.contains(node.cs_settings)) {
            node.cs.removeChild(node.cs_settings)
        }
        if (!node.cs.contains(node.cs_messages)) {
            node.cs.appendChild(node.cs_messages)
        }
        if (mess_rendered == false) {
            node.c123.appendChild(gc_node.gc)
            node.c123.appendChild(node.entry)
            node.c123.appendChild(node.r_)
            node.r_.appendChild(node.search_mess)
            node.side_search.appendChild(node.r2)
            node.cs_messages.appendChild(node.c123)
            _.emit('refresh_convos')
            mess_rendered = true
            m_t = true
        }

        _.emit('pending')
    }
    )

    const iq_node = {
        center: $({
            a: "center",
            style: "position:absolute;left:0px;right:0px;top:0px;bottom:0px;overflow-y:auto;overflow-x:auto;min-width:320px;"
        }),
        quit: $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: #1c1f1f;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;margin-top:30px;",
            text: "Quit"
        }),
        restart: $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: #1c1f1f;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;margin-top:10px;",
            text: "Restart"
        }),
        timer: $({
            a: "div",
            style: "position:fixed;top:70px;right:40px;font-size:20px;color:white;"
        }),
        new_pb: $({
            a: "label",
            style: "color: rgb(14, 230, 14); font-size: 20px; display: block;margin-top:20px;margin-bottom:10px;",
            text: "*New Personal Best*"
        }),
        next_question: $({
            a: "div",
            style: "position:absolute;top:1100px;left:0px;right:0px;margin-bottom:30px;"
        }),
        cancel: $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: red;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;margin-top:30px;",
            text: "Cancel"
        }),
        dx: $({
            a: "div",
            style: "margin-top:-150px;"
        }),
        banner: $({
            a: "div",
            style: "height:30px;background-color:white;position:absolute;top:620px;left:0px;right:0px;"
        }),
        nq: $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: green;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;margin-top:10px;",
            text: "Next Question"
        }),
        mnu: $({
            a: "div",
            style: "background-color:rgba(0,0,0,.5);position:fixed;top:50px;bottom:0px;left:0px;right:0px;display:flex;align-items:center;justify-content:center;"
        }),
        menu_btn: $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: red;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;margin-top:10px;",
            text: "Menu"
        }),
        minutesLabel: $({
            a: "label",
            text: "0"
        }),
        lb: $({
            a: "div",
            style: "width:100%;min-height:20px;height:auto;background-color:black;min-width:300px;"
        }),
        lbx: $({
            a: "div",
            style: "width: 99%; min-height: 20px; height: auto; background-color: black; min-width: 300px; display: grid; margin-bottom: 10px;overflow-y:scroll;max-height:320px;margin-top:2px;border:1px solid lightblue;overflow-x:hidden;"
        }),
        l1: $({
            a: "label",
            style: "color: white; grid-row-start: 1;font-size:25px;margin-bottom:5px;",
            text: "Leader Board"
        }),
        d2: $({
            a: "div",
            style: "grid-col-start:1;grid-row-start:2;width:99%;height:30px;border:1px solid white;display:grid;grid-template-columns: 13% 29% 29% 29%;"
        }),
        d3x: $({
            a: "div",
            style: "grid-col-start:1;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;color:white;display:flex;align-items:center;justify-content:center;",
            text: "Rank"
        }),
        d3: $({
            a: "div",
            style: "grid-col-start:1;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;color:white;display:flex;align-items:center;justify-content:center;",
            text: "Username"
        }),
        d4: $({
            a: "div",
            style: "grid-col-start:2;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;color:white;display:flex;align-items:center;justify-content:center;",
            text: "Score"
        }),
        d5: $({
            a: "div",
            style: "grid-col-start:3;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;color:white;display:flex;align-items:center;justify-content:center;",
            text: "Time"
        }),
        line_questions: 2,
        star_questions: 3,
        circle_questions: 3,
        c: $({
            a: "label",
            text: " : "
        }),
        secondsLabel: $({
            a: "label",
            text: "0"
        }),
        totalSeconds: 0,
        interval: undefined,
        menu: true,
        total_questions: 8,
        selected_answers: [],
        current_question: 1,
        cf8_pb: undefined,
        test_questions: undefined,
        leaderboard: undefined,
        pong: undefined,
        online: undefined,
        rocket: undefined,
        poker: undefined
    }

    iq_node.lb.appendChild(iq_node.lbx)
    iq_node.timer.appendChild(iq_node.minutesLabel)
    iq_node.timer.appendChild(iq_node.c)
    iq_node.timer.appendChild(iq_node.secondsLabel)
    iq_node.next_question.appendChild(iq_node.menu_btn)
    iq_node.dx.appendChild($({
        a: "label",
        text: "Options",
        style: "color:white;font-size:30px;"
    }))
    iq_node.dx.appendChild(iq_node.quit)
    iq_node.dx.appendChild(iq_node.restart)
    iq_node.dx.appendChild(iq_node.cancel)
    iq_node.mnu.appendChild(iq_node.dx)
    iq_node.banner.appendChild($({
        a: "label",
        text: "Of the options below, which pattern belongs in the empty box?",
        style: "position:absolute;left:0px;right:0px;top:10px;"
    }))

    iq_node.cancel.onclick = ()=>{
        iq_node.center.removeChild(iq_node.mnu)
    }

    iq_node.quit.onclick = ()=>{
        iq_node.menu = true
        prev_selected = undefined
        iq_node.test_questions = false
        iq_node.current_question = 1
        iq_node.selected_answers = []
        iq_node.line_questions = 2;
        iq_node.star_questions = 3;
        iq_node.circle_questions = 3;
        node.iq.click()
    }

    iq_node.menu_btn.onclick = ()=>{
        iq_node.center.appendChild(iq_node.mnu)
        if (iq_node.dx.contains(iq_node.cancel)) {
            iq_node.dx.removeChild(iq_node.cancel)
        }
        if (!iq_node.dx.contains(iq_node.restart)) {
            iq_node.dx.appendChild(iq_node.restart)
        }
        if (!iq_node.dx.contains(iq_node.quit)) {
            iq_node.dx.appendChild(iq_node.quit)
        }
        iq_node.dx.appendChild(iq_node.cancel)
    }

    const pad = (val)=>{
        let valString = val + "";
        if (valString.length < 1) {
            return "0" + valString;
        } else {
            return valString;
        }
    }

    const setTime = ()=>{
        ++iq_node.totalSeconds;
        iq_node.secondsLabel.textContent = pad(iq_node.totalSeconds % 60);
        iq_node.minutesLabel.textContent = pad(parseInt(iq_node.totalSeconds / 60));
    }

    iq_node.restart.onclick = ()=>{
        _.emit('cf8_get_pb')
        iq_node.menu = false
        prev_selected = undefined
        iq_node.current_question = 1
        iq_node.selected_answers = []
        iq_node.totalSeconds = 0;
        clearInterval(iq_node.interval)
        iq_node.interval = setInterval(setTime, 1000);
        iq_node.line_questions = 2;
        iq_node.star_questions = 3;
        iq_node.circle_questions = 3;
        node.iq.click()
    }

    iq_node.nq.onclick = ()=>{
        iq_node.current_question += 1;
        iq_node.next_question.removeChild(iq_node.nq)
        iq_node.prev_selected = undefined
        node.iq.click();
    }

    const q2 = ()=>{
        let row = 0;
        let final_ra = [];
        const draw_shape = (shape,canvas)=>{
            canvas.beginPath()
            canvas.lineWidth = "2";
            if (shape == 1) {
                canvas.moveTo(125, 100)
                canvas.lineTo(25, 100)
                canvas.lineTo(75, 25)
                canvas.lineTo(125, 100)
                canvas.stroke()
            } else if (shape == 2) {
                canvas.strokeStyle = "blue"
                canvas.rect(10, 10, 130, 130)
                canvas.stroke()
                canvas.strokeStyle = "black"
            } else if (shape == 3) {
                canvas.arc(25, 25, 10, 0, 2 * Math.PI)
                canvas.fill()
                canvas.beginPath()
                canvas.arc(125, 125, 10, 0, 2 * Math.PI)
                canvas.fill()
                canvas.beginPath()
                canvas.arc(25, 125, 10, 0, 2 * Math.PI)
                canvas.fill()
                canvas.beginPath()
                canvas.arc(125, 25, 10, 0, 2 * Math.PI)
                canvas.fill()
            } else if (shape == 4) {
                canvas.moveTo(25, 50)
                canvas.lineTo(125, 50)
                canvas.lineTo(75, 125)
                canvas.lineTo(25, 50)
                canvas.stroke()
            }
        }
        for (row; row < 3; row++) {
            let c1 = document.createElement("canvas");
            let c2 = document.createElement("canvas");
            let c3 = document.createElement("canvas");
            let style_str = "border:1px solid black;margin-left:5px;position:absolute;border-radius:6px;width:150px;height:150px;"
            if (row == 0) {
                style_str += "top:100px;";
            } else if (row == 1) {
                style_str += "top:275px;";
            } else if (row == 2) {
                style_str += "top:450px;";
            }
            c1.style = style_str + "margin-left:-250px;background-color:white;";
            c2.style = style_str + "margin-left:-75px;background-color:white;";
            if (row != 2) {
                c3.style = style_str + "margin-left:100px;background-color:white;";
            } else {
                c3.style = style_str + "margin-left:100px;border:2px solid white;";
            }
            c1.height = 1200;
            c1.width = 1200;
            c2.height = 1200;
            c2.width = 1200;
            c3.height = 1200;
            c3.width = 1200;
            let ctx1 = c1.getContext("2d");
            let ctx2 = c2.getContext("2d");
            let ctx3 = c3.getContext("2d");
            ctx1.scale(8, 8);
            ctx2.scale(8, 8);
            ctx3.scale(8, 8);
            let shape_num, shape_num2
            let shape_arr = []
              , shape_arr2 = []
            shape_num = 2
            shape_num2 = Math.floor(Math.random() * 2) + 1;
            let shape_options = [1, 2, 3, 4]
            let shape_options2 = [1, 2, 3, 4]
            let x = Math.floor(Math.random() * 4);
            let shape_type, shape_type2, shape_type3, shape_type4
            shape_type = shape_options[x]
            shape_arr.push(shape_type)
            if (shape_num == 2) {
                shape_options.splice(shape_options.indexOf(shape_type), 1)
                x = Math.floor(Math.random() * 3);
                shape_type2 = shape_options[x]
                shape_arr.push(shape_type2)
                draw_shape(shape_type2, ctx1)
            }
            draw_shape(shape_type, ctx1)
            x = Math.floor(Math.random() * 4);
            shape_type3 = shape_options2[x]
            shape_arr2.push(shape_type3)
            if (shape_num2 == 2) {
                shape_options2.splice(shape_options2.indexOf(shape_type3), 1)
                x = Math.floor(Math.random() * 3);
                shape_type4 = shape_options2[x]
                shape_arr2.push(shape_type4)
                draw_shape(shape_type4, ctx2)
            }
            draw_shape(shape_type3, ctx2)
            if (row == 1) {
                let u = 0
                for (u; u < 4; u++) {
                    if (shape_arr2.indexOf(u) == -1) {
                        draw_shape(u, ctx2)
                        shape_arr2.push(u)
                    }
                }
            }
            let l1 = shape_arr.length
              , ra = []
            if (shape_arr2.indexOf(shape_arr[0]) == -1) {
                ra.push(shape_arr[0])
            } else {
                shape_arr2.splice(shape_arr2.indexOf(shape_arr[0]), 1)
            }
            if (shape_num == 2) {
                if (shape_arr2.indexOf(shape_arr[1]) == -1) {
                    ra.push(shape_arr[1])
                } else {
                    shape_arr2.splice(shape_arr2.indexOf(shape_arr[1]), 1)
                }
            }
            let u = 0
              , l2 = shape_arr2.length
            if (l2 > 0) {
                for (u = 0; u < l2; u++) {
                    ra.push(shape_arr2[u])
                }
            }
            if (row != 2) {
                let rl = ra.length
                if (rl > 0) {
                    for (u = 0; u < rl; u++) {
                        draw_shape(ra[u], ctx3)
                    }
                }
            } else {
                final_ra = ra
            }
            iq_node.center.appendChild(c1)
            iq_node.center.appendChild(c2)
            iq_node.center.appendChild(c3)
        }

        let pa = 6
        let a = Math.floor(Math.random() * 6);
        let u = 0
        let a_arr = [];
        if (final_ra.length == 0) {
            a_arr[0] = [0]
        } else {
            a_arr[0] = final_ra.sort((a,b)=>a - b)
        }
        for (u; u < pa; u++) {
            const c = document.createElement("canvas");
            c.height = 1200;
            c.width = 1200;
            const ctx4 = c.getContext("2d");
            ctx4.scale(8, 8);
            let ss = "background-color:white;border-radius:6px;position:absolute;width:150px;height:150px;"
            if (u < 3) {
                ss += "top:700px;"
            } else {
                ss += "top:875px;"
            }
            if (u == 0 || u == 3) {
                ss += "margin-left:-250px;"
            } else if (u == 1 || u == 4) {
                ss += "margin-left:-75px;"
            } else if (u == 2 || u == 5) {
                ss += "margin-left:100px;"
            }
            c.style = ss;
            if (u == a) {
                const rl = final_ra.length
                if (rl > 0) {
                    let z = 0
                    for (z; z < rl; z++) {
                        if (final_ra[z]) {
                            draw_shape(final_ra[z], ctx4)
                        }
                    }
                }
                c.onclick = ()=>{
                    if (!iq_node.next_question.contains(iq_node.nq)) {
                        iq_node.next_question.prepend(iq_node.nq)
                    }

                    if (prev_selected != undefined) {
                        prev_selected.a.classList.remove('highlight_selected')
                    }

                    prev_selected = {
                        a: c,
                        b: true
                    }
                    iq_node.selected_answers[iq_node.current_question - 1] = prev_selected

                    c.classList.add('highlight_selected')
                    iq_node.center.scrollTop = iq_node.center.scrollHeight;
                }
            } else {
                const generate_unique = ()=>{
                    let a = Math.floor(Math.random() * 4);
                    let s_ops = [1, 2, 3, 4]
                    let u = 0
                    let temp_arr = []
                    if (a != 0) {
                        for (u; u <= a; u++) {
                            let x = Math.floor(Math.random() * s_ops.length);
                            temp_arr.push(s_ops[x])
                            s_ops.splice(s_ops.indexOf(s_ops[x]), 1)
                        }
                        return temp_arr
                    } else {
                        return 0
                    }
                }
                let step = false
                do {
                    step = true
                    let x = generate_unique()
                    let al = a_arr.length
                    if (x == 0) {
                        let u = 0
                        let is_valid = true
                        for (u; u < al; u++) {
                            if (a_arr[u][0] == 0) {
                                is_valid = false
                            }
                        }
                        if (is_valid == true) {
                            a_arr.push([0])
                        } else {
                            step = false
                        }
                    } else {
                        x.sort((a,b)=>a - b)
                        let u = 0
                        let is_valid = true
                        for (u; u < al; u++) {
                            let uu = 0
                            let same = true
                            for (uu; uu < 4; uu++) {
                                if (a_arr[u][uu] != x[uu]) {
                                    same = false
                                }
                            }
                            if (same == true) {
                                is_valid = false
                            }
                        }
                        if (is_valid == true) {
                            a_arr.push(x.sort((a,b)=>a - b))
                            let p = 0
                            let xl = x.length
                            for (p = 0; p < xl; p++) {
                                draw_shape(x[p], ctx4)
                            }
                        } else {
                            step = false
                        }
                    }
                } while (step == false)c.onclick = ()=>{
                    if (prev_selected != undefined) {
                        prev_selected.a.classList.remove('highlight_selected')
                    }
                    prev_selected = {
                        a: c,
                        b: false
                    }
                    iq_node.selected_answers[iq_node.current_question - 1] = prev_selected
                    c.classList.add('highlight_selected')
                    if (!iq_node.next_question.contains(iq_node.nq)) {
                        iq_node.next_question.prepend(iq_node.nq)
                    }
                    iq_node.center.scrollTop = iq_node.center.scrollHeight;
                }
            }
            iq_node.center.appendChild(c)
        }
    }

    let random_box = Math.floor(Math.random() * 9) + 1;
    let ap = Math.floor(Math.random() * 6) + 1;
    const a = {};

    const generate_rows = (num_rows,type)=>{
        let row = 1
        let box_counter = 1;
        for (row; row <= num_rows; row++) {
            let num_horizontal = [1, 2, 3];
            let horizontal_type = [1, 2, 3];
            let num_vert = [1, 2, 3];
            let vert_type = [1, 2, 3];
            let col = 3;
            for (col; col > 0; col--) {
                let num_horizontal1 = Math.floor(Math.random() * col);
                let horizontal_type1 = Math.floor(Math.random() * col);
                let num_vert1 = Math.floor(Math.random() * col);
                let vert_type1 = Math.floor(Math.random() * col);
                let ibiq = false;
                if (box_counter == random_box && type == 1) {
                    ibiq = true
                    a = {
                        num_horizontal: num_horizontal[num_horizontal1],
                        horizontal_type: horizontal_type[horizontal_type1],
                        num_vert: num_vert[num_vert1],
                        vert_type: vert_type[vert_type1]
                    }
                }
                if (type == 2 && ap == box_counter) {
                    a.row = row
                    a.col = col
                    a.answer = false
                    a.type = 2
                    let aa = create_box(a)
                    aa.onclick = ()=>{
                        if (prev_selected != undefined) {
                            prev_selected.a.classList.remove('highlight_selected')
                        }
                        prev_selected = {
                            a: aa,
                            b: true
                        }
                        iq_node.selected_answers[iq_node.current_question - 1] = prev_selected
                        aa.classList.add('highlight_selected')
                        if (!iq_node.next_question.contains(iq_node.nq)) {
                            iq_node.next_question.prepend(iq_node.nq)
                        }
                        iq_node.center.scrollTop = iq_node.center.scrollHeight;
                    }
                    iq_node.center.appendChild(aa)
                } else {
                    let aa;
                    if (type == 2) {
                        if (a.num_horizontal == num_horizontal[num_horizontal1] && a.horizontal_type == horizontal_type[horizontal_type1] && a.num_vert == num_vert[num_vert1] && a.vert_type == vert_type[vert_type1]) {
                            num_horizontal = [1, 2, 3];
                            horizontal_type = [1, 2, 3];
                            num_vert = [1, 2, 3];
                            vert_type = [1, 2, 3];
                            do {
                                num_horizontal1 = Math.floor(Math.random() * 3);
                                horizontal_type1 = Math.floor(Math.random() * 3);
                                num_vert1 = Math.floor(Math.random() * 3);
                                vert_type1 = Math.floor(Math.random() * 3);
                            } while (a.num_horizontal == num_horizontal[num_horizontal1] && a.horizontal_type == horizontal_type[horizontal_type1] && a.num_vert == num_vert[num_vert1] && a.vert_type == vert_type[vert_type1])
                        }
                        aa = create_box({
                            num_horizontal: num_horizontal[num_horizontal1],
                            horizontal_type: horizontal_type[horizontal_type1],
                            num_vert: num_vert[num_vert1],
                            vert_type: vert_type[vert_type1],
                            col: col,
                            row: row,
                            answer: ibiq,
                            type: type
                        })
                        aa.onclick = ()=>{
                            if (prev_selected != undefined) {
                                prev_selected.a.classList.remove('highlight_selected')
                            }
                            prev_selected = {
                                a: aa,
                                b: false
                            }
                            iq_node.selected_answers[iq_node.current_question - 1] = prev_selected
                            aa.classList.add('highlight_selected')
                            if (!iq_node.next_question.contains(iq_node.nq)) {
                                iq_node.next_question.prepend(iq_node.nq)
                            }
                            iq_node.center.scrollTop = iq_node.center.scrollHeight;
                        }
                        iq_node.center.appendChild(aa)
                    } else {
                        iq_node.center.appendChild(create_box({
                            num_horizontal: num_horizontal[num_horizontal1],
                            horizontal_type: horizontal_type[horizontal_type1],
                            num_vert: num_vert[num_vert1],
                            vert_type: vert_type[vert_type1],
                            col: col,
                            row: row,
                            answer: ibiq,
                            type: type
                        }))
                    }
                    num_horizontal.splice(num_horizontal.indexOf(num_horizontal[num_horizontal1]), 1);
                    horizontal_type.splice(horizontal_type.indexOf(horizontal_type[horizontal_type1]), 1);
                    num_vert.splice(num_vert.indexOf(num_vert[num_vert1]), 1);
                    vert_type.splice(vert_type.indexOf(vert_type[vert_type1]), 1);
                }
                box_counter += 1
            }
        }
    }

    const q3 = ()=>{
        let generate = (data)=>{
            let c1 = document.createElement("canvas");
            c1.width = 1200
            c1.height = 1200
            let ss = "border:2px solid white;position:absolute;border-radius:6px;width:150px;height:150px;"
            if (data.b == 0) {
                ss += "top:100px;";
            } else if (data.b == 1) {
                ss += "top:275px;";
            } else if (data.b == 2) {
                ss += "top:450px;";
            } else if (data.b == 3) {
                ss += "top:700px;"
            } else if (data.b == 4) {
                ss += "top:875px;"
            }

            if (data.c == 0) {
                ss += "margin-left:-250px;";
            } else if (data.c == 1) {
                ss += "margin-left:-75px;";
            } else if (data.c == 2) {
                ss += "margin-left:100px;";
            }
            c1.style = ss
            if (data.d == false) {
                let ctx = c1.getContext("2d");
                ctx.scale(8, 8);
                ctx.beginPath();
                ctx.arc(75, 75, 65, 0, 2 * Math.PI);
                ctx.lineWidth = 2;
                ctx.strokeStyle = 'black';
                ctx.stroke();
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.fillStyle = 'black';
                ctx.strokeStyle = 'blue';
                let i = 0
                let radians = 0.0
                let slices = 6
                for (i; i < slices; i++) {
                    ctx.beginPath();
                    ctx.moveTo(75, 75);
                    ctx.arc(75, 75, 65, radians * Math.PI, (radians + (1 / (slices / 2))) * Math.PI);
                    ctx.lineTo(75, 75);
                    if (data.e != true) {
                        if (data.a.indexOf(i + 1) != -1) {
                            ctx.fill();
                        }
                    } else {
                        if (data.a.indexOf(i + 1) == -1) {
                            ctx.fill();
                        }
                    }
                    ctx.stroke();
                    radians += (1 / (slices / 2))
                }
            }
            return c1
        }
        let r = 0
        let ar = Math.floor(Math.random() * 3)
        let ti = {};
        let s = [1, 2, 3, 4, 5, 6]
        let ns = []
        let ns2 = []
        const ss = (x)=>{
            let i = 0
            for (i; i < x.b; i++) {
                let slice = Math.floor(Math.random() * s.length);
                x.a.push(s[slice])
                s.splice(s.indexOf(s[slice]), 1)
            }
        }
        for (r; r < 3; r++) {
            s = [1, 2, 3, 4, 5, 6]
            ns = []
            ns2 = []
            ss({
                a: ns,
                b: Math.floor(Math.random() * 3) + 1
            })
            ss({
                a: ns2,
                b: Math.floor(Math.random() * 2) + 1
            })
            let a = {
                a: ns,
                b: r,
                c: 0,
                d: false
            }
            let b = {
                a: ns2,
                b: r,
                c: 1,
                d: false
            }
            let c = {
                a: s,
                b: r,
                c: 2,
                d: false,
                e: true
            }
            if (ar == r) {
                let ac = Math.floor(Math.random() * 3)
                if (ac == 0) {
                    a.d = true
                    ti = a
                } else if (ac == 1) {
                    b.d = true
                    ti = b
                } else if (ac == 2) {
                    c.d = true
                    ti = c
                }
            }
            iq_node.center.appendChild(generate(a))
            iq_node.center.appendChild(generate(b))
            iq_node.center.appendChild(generate(c))
        }
        ti.d = false
        ar = Math.floor(Math.random() * 6)
        s = [1, 2, 3, 4, 5, 6]
        for (r = 0; r < 6; r++) {
            let q, g;

            if (r < 3) {
                q = 3
                s = [1, 2, 3, 4, 5, 6]
            } else {
                q = 4
            }
            if (r == 0 || r == 3) {
                g = 0
            } else if (r == 1 || r == 4) {
                g = 1
            } else if (r == 2 || r == 5) {
                g = 2
            }
            if (r == ar) {
                ti.b = q
                ti.c = g
                const v = generate(ti)
                v.onclick = ()=>{
                    if (prev_selected != undefined) {
                        prev_selected.a.classList.remove('highlight_selected')
                    }
                    prev_selected = {
                        a: v,
                        b: true
                    }
                    iq_node.selected_answers[iq_node.current_question - 1] = prev_selected
                    v.classList.add('highlight_selected')
                    if (!iq_node.next_question.contains(iq_node.nq)) {
                        iq_node.next_question.prepend(iq_node.nq)
                    }
                    iq_node.center.scrollTop = iq_node.center.scrollHeight;
                }
                iq_node.center.appendChild(v)
            } else {
                let ff = []
                ss({
                    a: ff,
                    b: Math.floor(Math.random() * 3) + 1
                })
                let a = {
                    a: ff,
                    b: q,
                    c: g,
                    d: false
                }
                const v = generate(a)
                v.onclick = ()=>{
                    if (prev_selected != undefined) {
                        prev_selected.a.classList.remove('highlight_selected')
                    }
                    prev_selected = {
                        a: v,
                        b: false
                    }
                    iq_node.selected_answers[iq_node.current_question - 1] = prev_selected
                    v.classList.add('highlight_selected')
                    if (!iq_node.next_question.contains(iq_node.nq)) {
                        iq_node.next_question.prepend(iq_node.nq)
                    }
                    iq_node.center.scrollTop = iq_node.center.scrollHeight;
                }
                iq_node.center.appendChild(v)
            }
        }
    }

    const pong_node = {
        level: 1,
        score: 0,
        cherry: false,
        canvas: undefined,
        ctx: undefined,
        ballRadius: 10,
        x: undefined,
        y: undefined,
        dx: 2,
        dy: -2,
        paddleHeight: 10,
        paddleWidth: 75,
        paddleX: undefined,
        rightPressed: false,
        leftPressed: false,
        brickRowCount: 5,
        brickColumnCount: 3,
        brickWidth: 75,
        brickHeight: 20,
        brickPadding: 10,
        brickOffsetTop: 30,
        brickOffsetLeft: 30,
        lives: 0,
        bricks: []
    }

    const pong = ()=>{
        pong_node.canvas = document.createElement("canvas")
        pong_node.canvas.width = 480
        pong_node.canvas.height = 320
        pong_node.canvas.style.marginTop = '50px'
        pong_node.canvas.style.width = "100%;"
        pong_node.canvas.style.border = "1px solid white"
        pong_node.level = 1
        pong_node.score = 0
        pong_node.cherry = true
        pong_node.ctx = pong_node.canvas.getContext("2d")
        pong_node.x = pong_node.canvas.width / 2
        pong_node.y = pong_node.canvas.height - 30
        pong_node.paddleX = (pong_node.canvas.width - pong_node.paddleWidth) / 2
        pong_node.dx = 2
        pong_node.dy = -2

        const resetBricks = ()=>{
            for (let c = 0; c < pong_node.brickColumnCount; c++) {
                pong_node.bricks[c] = [];
                for (let r = 0; r < pong_node.brickRowCount; r++) {
                    pong_node.bricks[c][r] = {
                        x: 0,
                        y: 0,
                        status: 1
                    };
                }
            }
        }
        resetBricks()

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
        document.addEventListener("mousemove", mouseMoveHandler, false);

        function keyDownHandler(e) {
            if (e.key == "Right" || e.key == "ArrowRight") {
                pong_node.rightPressed = true;
            } else if (e.key == "Left" || e.key == "ArrowLeft") {
                pong_node.leftPressed = true;
            }
        }

        function keyUpHandler(e) {
            if (e.key == "Right" || e.key == "ArrowRight") {
                pong_node.rightPressed = false;
            } else if (e.key == "Left" || e.key == "ArrowLeft") {
                pong_node.leftPressed = false;
            }
        }

        function mouseMoveHandler(e) {
            const relativeX = e.clientX - pong_node.canvas.offsetLeft;
            if (relativeX > 0 && relativeX < pong_node.canvas.width) {
                pong_node.paddleX = relativeX - pong_node.paddleWidth / 2;
            }
        }
        const collisionDetection = ()=>{
            for (let c = 0; c < pong_node.brickColumnCount; c++) {
                for (let r = 0; r < pong_node.brickRowCount; r++) {
                    let b = pong_node.bricks[c][r];
                    if (b.status == 1) {
                        if (pong_node.x > b.x && pong_node.x < b.x + pong_node.brickWidth && pong_node.y > b.y && pong_node.y < b.y + pong_node.brickHeight) {
                            pong_node.dy = -pong_node.dy;
                            b.status = 0;
                            pong_node.score += 1;
                            if (pong_node.score == (pong_node.brickRowCount * pong_node.brickColumnCount) * pong_node.level) {
                                pong_node.level += 1;
                                resetBricks()
                            }
                        }
                    }
                }
            }
        }

        const drawBall = ()=>{
            pong_node.ctx.beginPath();
            pong_node.ctx.arc(pong_node.x, pong_node.y, pong_node.ballRadius, 0, Math.PI * 2);
            pong_node.ctx.fillStyle = "white";
            pong_node.ctx.fill();
            pong_node.ctx.closePath();
        }
        const drawPaddle = ()=>{
            pong_node.ctx.beginPath();
            pong_node.ctx.rect(pong_node.paddleX, pong_node.canvas.height - pong_node.paddleHeight, pong_node.paddleWidth, pong_node.paddleHeight);
            pong_node.ctx.fillStyle = "white";
            pong_node.ctx.fill();
            pong_node.ctx.closePath();
        }
        const drawBricks = ()=>{
            for (let c = 0; c < pong_node.brickColumnCount; c++) {
                for (let r = 0; r < pong_node.brickRowCount; r++) {
                    if (pong_node.bricks[c][r].status == 1) {
                        let brickX = (r * (pong_node.brickWidth + pong_node.brickPadding)) + pong_node.brickOffsetLeft;
                        let brickY = (c * (pong_node.brickHeight + pong_node.brickPadding)) + pong_node.brickOffsetTop;
                        pong_node.bricks[c][r].x = brickX;
                        pong_node.bricks[c][r].y = brickY;
                        pong_node.ctx.beginPath();
                        pong_node.ctx.rect(brickX, brickY, pong_node.brickWidth, pong_node.brickHeight);
                        pong_node.ctx.fillStyle = "green";
                        pong_node.ctx.fill();
                        pong_node.ctx.closePath();
                    }
                }
            }
        }
        const drawScore = ()=>{
            pong_node.ctx.font = "16px Arial";
            pong_node.ctx.fillStyle = "white";
            pong_node.ctx.fillText("Score: " + pong_node.score, 8, 20);
        }

        const drawLevel = ()=>{
            pong_node.ctx.font = "16px Arial";
            pong_node.ctx.fillStyle = "white";
            pong_node.ctx.fillText("Level: " + pong_node.level, pong_node.canvas.width - 65, 20);
        }
        const draw = ()=>{
            pong_node.ctx.clearRect(0, 0, pong_node.canvas.width, pong_node.canvas.height);
            drawBricks();
            drawBall();
            drawPaddle();
            drawScore();
            drawLevel()
            collisionDetection();

            if (pong_node.x + pong_node.dx > pong_node.canvas.width - pong_node.ballRadius || pong_node.x + pong_node.dx < pong_node.ballRadius) {
                pong_node.dx = -pong_node.dx;
            }
            if (pong_node.y + pong_node.dy < pong_node.ballRadius) {
                pong_node.dy = -pong_node.dy;
            } else if (pong_node.y + pong_node.dy > pong_node.canvas.height - pong_node.ballRadius) {
                if (pong_node.x > pong_node.paddleX && pong_node.x < pong_node.paddleX + pong_node.paddleWidth) {
                    pong_node.dy = -pong_node.dy;
                } else {
                    if (!pong_node.lives) {
                        pong_node.level = 1;
                        pong_node.score = 0;
                        pong_node.x = pong_node.canvas.width / 2
                        pong_node.y = pong_node.canvas.height - 30
                        pong_node.paddleX = (pong_node.canvas.width - pong_node.paddleWidth) / 2
                        pong_node.dx = 2
                        pong_node.dy = -2
                        resetBricks()
                    } else {
                        pong_node.x = pong_node.canvas.width / 2;
                        pong_node.y = pong_node.canvas.height - 30;
                        pong_node.dx = 3;
                        pong_node.dy = -3;
                        pong_node.paddleX = (pong_node.canvas.width - pong_node.paddleWidth) / 2;
                    }
                }
            }

            if (pong_node.rightPressed && pong_node.paddleX < pong_node.canvas.width - pong_node.paddleWidth) {
                pong_node.paddleX += 7;
            } else if (pong_node.leftPressed && pong_node.paddleX > 0) {
                pong_node.paddleX -= 7;
            }

            pong_node.x += pong_node.dx;
            pong_node.y += pong_node.dy;
            requestAnimationFrame(draw);
        }

        draw();
        iq_node.center.appendChild(pong_node.canvas)
    }

    const online_node = {
        players: [],
        selfX: window.innerWidth / 2,
        selfY: window.innerHeight / 2,
        selfVel: 300,
        selfRad: 50,
        color: 'blue',
        feeders: [],
        scale: 1.05,
        username: "",
        updated_feeders: [],
        update_feeders: false,
        feeders_to_update: [],
        mouseX: undefined,
        mouseY: undefined,
        menu: game_menu(),
        leaderboard: $({
            a: "div"
        })
    }

    function game_menu() {
        let a = $({
            a: "menu"
        })
        a.style.position = "fixed"
        a.style.top = "50px"
        a.style.bottom = "0px"
        a.style.left = "0px"
        a.style.backgroundColor = "rgba(0,0,0,.5)"
        a.style.zIndex = "10"
        a.style.right = "0px"
        a.style.display = "flex"
        a.style.alignItems = "center"
        a.style.justifyContent = "center"
        a.style.animationName = 'fadeInOpacity'
        a.style.minWidth = '320px';
        a.style.animationDuration = '.8s';
        return a
    }

    function red_button(x) {
        let a = $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: red;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;",
            text: x
        })
        a.style.animationDuration = '.8s'
        a.style.animationName = 'fadeInOpacity'
        return a
    }

    function green_button(x) {
        let a = $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color: green;border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;",
            text: x
        })
        a.style.animationDuration = '.8s'
        a.style.animationName = 'fadeInOpacity'
        return a
    }

    function black_button(x) {
        let a = $({
            a: "div",
            style: "cursor:pointer;width: 200px; height: 50px; background-color:rgb(20,20,20);box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-top: 1px solid white;border-bottom:1px solid white;box-shadow: inset 0px 0px 8px 2px rgb(0, 0, 0);border-radius:6px;display:flex;justify-content:center;align-items:center; color:white;",
            text: x
        })
        a.style.animationDuration = '.8s'
        a.style.animationName = 'fadeInOpacity'
        return a
    }

    function menu_title(x) {
        let a = $({
            a: "label",
            text: x
        })
        a.style.color = "white"
        a.style.fontSize = "30px"
        a.style.position = "absolute"
        a.style.top = "100px"
        a.style.animationDuration = '.8s'
        a.style.animationName = 'fadeInOpacity'
        return a
    }

    online_node.leaderboard.style.position = "fixed"
    online_node.leaderboard.style.right = "0px"
    online_node.leaderboard.style.width = "200px"
    online_node.leaderboard.style.backgroundColor = "rgba(0,0,0,.5)"
    online_node.leaderboard.style.height = "auto"
    online_node.leaderboard.style.color = "white"
    online_node.leaderboard.style.top = "50px"
    online_node.leaderboard.style.paddingBottom = "10px"

    online_node.leaderboard.appendChild($({
        a: "label",
        style: "font-size:20px;border-bottom:1px solid white;",
        text: "Leaderboard"
    }))
    let secondsPassed = 0;

    const sync_node = {
        players: {},
        player_properties: {},
        feeders: []
    }

    const random_color = ()=>{
        return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
    }

    const self_node = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        velocity: 300,
        radius: 50,
        color: random_color(),
        username: "",
        updated_feeders: [],
        update_feeders: false,
        feeders_to_update: [],
        mouseX: undefined,
        mouseY: undefined,
        alive: true,
        magnet: false,
        active: true
    }

    let game_over = menu_title('Game Over')

    let restart = $({
        a: "div",
        text: "Restart"
    })
    restart.style.width = "50%"
    restart.style.height = "50px"
    restart.style.backgroundImage = "linear-gradient(to bottom right,rgba(62, 62, 62, 1),#1c1f1f,rgba(62, 62, 62, 1))"
    restart.style.boxShadow = "inset 0px 0px 6px 1px #000000;"
    restart.style.color = "white"
    restart.style.display = "flex"
    restart.style.alignItems = "center"
    restart.style.justifyContent = "center"
    restart.style.position = "absolute"
    restart.style.top = "200px"
    restart.style.borderRadius = "6px"
    restart.style.border = "1px solid white"
    restart.style.cursor = "pointer"

    online_node.menu.appendChild(game_over)
    online_node.menu.appendChild(restart)

    restart.onclick = ()=>{
        _.emit('join_room')
        self_node.radius = 50
        self_node.color = random_color()
        self_node.alive = true
        if (iq_node.center.contains(online_node.menu)) {
            iq_node.center.removeChild(online_node.menu)
        }
    }

    _.on('gameOver', ()=>{
        self_node.alive = false
        if (!iq_node.center.contains(online_node.menu)) {
            iq_node.center.appendChild(online_node.menu)
        }
    }
    )

    const online2 = ()=>{

        setInterval(function() {
            console.log(self_node);
            console.log(sync_node)
        }, 3000);
        function keyDown(e) {
            if (e.key == "1") {
                console.log('1')
                //toggleMagnet();
            }
        }

        function toggleMagnet() {
            if (self_node.magnet == false) {
                self_node.magnet = true
            } else {
                self_node.magnet = false
            }
        }
        document.addEventListener("keydown", keyDown, false);

        if (!iq_node.center.contains(online_node.leaderboard)) {
            iq_node.center.appendChild(online_node.leaderboard)
        }

        let mouse = {
            x: undefined,
            y: undefined
        };
        let lastStep = 0;
        let c = document.createElement('canvas');
        c.style.minWidth = '320px';
        let ctx = c.getContext("2d");

        c.onmousemove = (e)=>{
            mouse.x = e.pageX
            mouse.y = e.pageY
        }
        window.requestAnimationFrame(animationFrame);

        function animationFrame(milliseconds) {
            let elapsed = milliseconds - lastStep;
            lastStep = milliseconds;
            render(elapsed);
            window.requestAnimationFrame(animationFrame);
        }

        function render(elapsed) {
            if (self_node.active == true) {
                setCanvasSize();
                clearCanvas();
                if (mouse.x != undefined) {
                    moveSelf(elapsed);
                }
                if (self_node.magnet == true) {
                    magnet(elapsed);
                }
                if (self_node.alive == true) {
                    renderSelf();
                    feederCollisions();
                }
                renderFeeders();
                renderPlayers();
                playerCollisions();
                if (self_node.alive == true) {
                    _.emit('update_self', JSON.stringify({
                        x: self_node.x,
                        y: self_node.y,
                        velocity: self_node.velocity,
                        radius: self_node.radius,
                        color: self_node.color
                    }))
                }
            }
        }

        function magnet(milliseconds) {
            let i = 0
            let fl = sync_node.feeders.length
            for (let i = 0; i < fl; i++) {
                let squareX = Math.pow(Math.abs(sync_node.feeders[i].x - self_node.x), 2);
                let squareY = Math.pow(Math.abs(sync_node.feeders[i].y - self_node.y), 2);
                let hypothenuse = Math.sqrt(squareX + squareY);
                if (hypothenuse - sync_node.feeders[i].radius - (self_node.radius + 200) <= 0) {
                    let data = distanceAndAngleBetweenTwoPoints(self_node.x, self_node.y, sync_node.feeders[i].x, sync_node.feeders[i].y);
                    let velocity = 50000 / data.distance;
                    let toMouseVector = new Vector(velocity,data.angle);
                    let elapsedSeconds = milliseconds / 1000;

                    let x = (toMouseVector.magnitudeX * elapsedSeconds);
                    let y = (toMouseVector.magnitudeY * elapsedSeconds);
                    sync_node.feeders[i].x -= x
                    sync_node.feeders[i].y -= y
                    self_node.update_feeders = true
                    self_node.feeders_to_update.push(sync_node.feeders[i])
                }
                if (self_node.update_feeders == true) {
                    _.emit('update_feeders', JSON.stringify({
                        updated_feeders: self_node.feeders_to_update,
                        resulting_array: self_node.feeders
                    }))
                    self_node.feeders_to_update = []
                    self_node.update_feeders = false
                }
            }
        }

        function feederCollisions() {
            let i
            let fl = sync_node.feeders.length
            for (i = 0; i < fl; i++) {
                let squareX = Math.pow(Math.abs(sync_node.feeders[i].x - self_node.x), 2);
                let squareY = Math.pow(Math.abs(sync_node.feeders[i].y - self_node.y), 2);
                let hypothenuse = Math.sqrt(squareX + squareY);
                if (hypothenuse - sync_node.feeders[i].radius - self_node.radius <= 0) {
                    let feeder_area = Math.pow(sync_node.feeders[i].radius, 2) * Math.PI
                    let self_area = Math.pow(self_node.radius, 2) * Math.PI
                    let new_area = self_area + feeder_area
                    let new_rad = Math.sqrt(new_area / Math.PI)
                    self_node.radius = new_rad
                    sync_node.feeders[i].x = Math.floor(Math.random() * 4000)
                    sync_node.feeders[i].y = Math.floor(Math.random() * 4000)
                    self_node.update_feeders = true
                    self_node.feeders_to_update.push(sync_node.feeders[i])
                }
            }
            if (self_node.update_feeders == true) {
                _.emit('update_feeders', JSON.stringify({
                    updated_feeders: self_node.feeders_to_update,
                    resulting_array: self_node.feeders
                }))
                self_node.feeders_to_update = []
                self_node.update_feeders = false
            }
        }

        function playerCollisions() {
            for (let key in sync_node.players) {
                if (sync_node.players.hasOwnProperty(key)) {
                    if (sync_node.players[key].username != self_node.username) {
                        let squareX = Math.pow(Math.abs(sync_node.players[key].x - self_node.x), 2);
                        let squareY = Math.pow(Math.abs(sync_node.players[key].y - self_node.y), 2);
                        let hypothenuse = Math.sqrt(squareX + squareY);
                        if (self_node.radius > sync_node.players[key].radius) {
                            if (hypothenuse - sync_node.players[key].radius - self_node.radius <= 0) {
                                let player_area = Math.pow(sync_node.players[key].radius, 2) * Math.PI
                                let self_area = Math.pow(self_node.radius, 2) * Math.PI
                                let new_area = self_area + player_area
                                let new_rad = Math.sqrt(new_area / Math.PI)
                                self_node.radius = new_rad
                                sync_node.players[key].x = Math.floor(Math.random() * 4000)
                                sync_node.players[key].y = Math.floor(Math.random() * 4000)
                                _.emit('deletePlayer', JSON.stringify({
                                    key: key
                                }))
                            }
                        }
                    }
                }
            }
        }

        function setCanvasSize() {
            let scale = window.devicePixelRatio;
            c.width = window.innerWidth * scale;
            c.height = window.innerHeight * scale;
            c.style.width = window.innerWidth;
            c.style.height = window.innerHeight;
            ctx.scale(scale, scale);
        }

        function clearCanvas() {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, c.width, c.height);
        }

        function moveSelf(milliseconds) {
            let data = distanceAndAngleBetweenTwoPoints(window.innerWidth / 2, window.innerHeight / 2, mouse.x, mouse.y);
            let velocity = data.distance / 0.5;
            let toMouseVector = new Vector(velocity,data.angle);
            let elapsedSeconds = milliseconds / 1000;
            let x = (toMouseVector.magnitudeX * elapsedSeconds);
            let y = (toMouseVector.magnitudeY * elapsedSeconds);
            if (self_node.x + x >= 0 && self_node.x + x <= 4000) {
                self_node.x += x;
            }
            if (self_node.y + y >= 0 && self_node.y + y <= 4000) {
                self_node.y += y;
            }
        }

        const renderSelf = ()=>{
            ctx.beginPath();
            ctx.arc(window.innerWidth / 2, window.innerHeight / 2, self_node.radius, 0, Math.PI * 2);
            ctx.fillStyle = self_node.color;
            ctx.fill();
            ctx.font = self_node.radius * 0.4 + "px Arial";
            ctx.fillStyle = "white"
            ctx.textAlign = "center";
            ctx.fillText(self_node.username, window.innerWidth / 2, window.innerHeight / 2);
            ctx.translate(-self_node.x, -self_node.y)
            ctx.closePath();
        }

        const renderFeeders = ()=>{
            let i = 0
            let fl = sync_node.feeders.length
            for (i; i < fl; i++) {
                ctx.beginPath()
                ctx.arc(window.innerWidth / 2 + sync_node.feeders[i].x, window.innerHeight / 2 + sync_node.feeders[i].y, sync_node.feeders[i].radius, 0, Math.PI * 2)
                ctx.fillStyle = sync_node.feeders[i].color
                ctx.fill()
            }
        }

        const renderPlayers = ()=>{
            for (let key in sync_node.players) {
                if (sync_node.players.hasOwnProperty(key)) {
                    if (sync_node.players[key].username != self_node.username) {
                        ctx.beginPath();
                        ctx.arc(window.innerWidth / 2 + sync_node.players[key].x, window.innerHeight / 2 + sync_node.players[key].y, sync_node.players[key].radius, 0, Math.PI * 2);
                        ctx.fillStyle = sync_node.players[key].color;
                        ctx.fill();
                        ctx.font = sync_node.players[key].radius * 0.4 + "px Arial";
                        ctx.fillStyle = "white"
                        ctx.textAlign = "center";
                        ctx.fillText(sync_node.players[key].username, window.innerWidth / 2 + sync_node.players[key].x, window.innerHeight / 2 + sync_node.players[key].y);
                        ctx.closePath();
                    }
                }
            }
        }

        iq_node.center.appendChild(c)
    }

    function distanceAndAngleBetweenTwoPoints(x1, y1, x2, y2) {
        let x = x2 - x1
          , y = y2 - y1;
        return {
            distance: Math.sqrt(x * x + y * y),
            angle: Math.atan2(y, x) * 180 / Math.PI
        }
    }

    function Vector(magnitude, angle) {
        let angleRadians = (angle * Math.PI) / 180;
        this.magnitudeX = magnitude * Math.cos(angleRadians);
        this.magnitudeY = magnitude * Math.sin(angleRadians);
    }

    _.on('set_player_username', (data)=>{
        self_node.username = data
    }
    )

    _.on('update_feeders', (data)=>{
        let x = JSON.parse(data)
        for (let i = 0; i < x.updated_feeders.length; i++) {
            sync_node.feeders[x.updated_feeders[i].id] = x.updated_feeders[i]
        }

        online_node.leaderboard.innerHTML = ''
        online_node.leaderboard.appendChild($({
            a: "label",
            style: "font-size:20px;border-bottom:1px solid white;",
            text: "Leaderboard"
        }))
        for (let key in x.players) {
            if (x.players.hasOwnProperty(key)) {
                sync_node.players[key] = x.players[key]
                let d1 = $({
                    a: "div"
                })
                d1.style.marginTop = "5px"
                let l1 = $({
                    a: "label",
                    text: sync_node.players[key].username + ": "
                })
                let l2 = $({
                    a: "label",
                    text: sync_node.players[key].radius.toFixed(2)
                })
                d1.appendChild(l1)
                d1.appendChild(l2)
                online_node.leaderboard.appendChild(d1)
            }
        }
    }
    )

    _.on('currentPlayers', (data)=>{
        let x = JSON.parse(data)
        console.log(x)
        online_node.leaderboard.innerHTML = ''
        online_node.leaderboard.appendChild($({
            a: "label",
            style: "font-size:20px;border-bottom:1px solid white;",
            text: "Leaderboard"
        }))
        sync_node.feeders = x.feeders
        sync_node.players = x.players
        for (let key in sync_node.players) {
            if (sync_node.players.hasOwnProperty(key)) {
                let d1 = $({
                    a: "div"
                })
                d1.style.marginTop = "5px"
                let l1 = $({
                    a: "label",
                    text: sync_node.players[key].username + ": "
                })
                let l2 = $({
                    a: "label",
                    text: sync_node.players[key].radius.toFixed(2)
                })
                d1.appendChild(l1)
                d1.appendChild(l2)
                online_node.leaderboard.appendChild(d1)
            }
        }
    }
    )

    _.on('playerUpdate', (data)=>{
        let x = JSON.parse(data)
        sync_node.players[x.username] = x.players
    }
    )

    _.on('leaderboard', (data)=>{
        iq_node.leaderboard = JSON.parse(data)
    }
    )

    const rocket_node = {
        cash: 50000,
        day: 1,
        buildPad: false
    }

    function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
            stroke = true;
        }
        if (typeof radius == 'undefined') {
            radius = 5;
        }
        if (typeof radius == 'number') {
            radius = {
                tl: radius,
                tr: radius,
                br: radius,
                bl: radius
            };
        } else {
            let defaultRadius = {
                tl: 0,
                tr: 0,
                br: 0,
                bl: 0
            };
            for (let side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }

    }

    const rocket = ()=>{

        let c = document.createElement('canvas');
        c.style.minWidth = '320px';
        let ctx = c.getContext("2d");
        let lastStep = 0;
        let menu = game_menu()
        let newGame = green_button('New Game')
        let title = menu_title('Rocket')
        menu.appendChild(title)
        menu.appendChild(newGame)
        iq_node.center.appendChild(menu)

        newGame.onclick = ()=>{
            menu.removeChild(title)
            menu.removeChild(newGame)
            let day = menu_title('Day ' + rocket_node.day + ':')
            day.style.position = 'absolute'
            day.style.top = '20px'
            day.style.animationDuration = '.8s'
            day.style.animationName = 'fadeInOpacity'
            menu.appendChild(day)
            let rocketStore = menu_title('Rocket Store')
            rocketStore.style.borderBottom = "1px solid black"
            rocketStore.style.marginTop = '30px'
            rocketStore.style.position = 'absolute'

            let menuBtn = red_button('Menu')
            menuBtn.style.position = 'absolute';
            menuBtn.style.bottom = '10px';
            let cash = menu_title('Cash: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(rocket_node.cash))
            cash.style.color = 'lightgreen'
            cash.style.position = 'absolute'
            cash.style.top = '55px'
            cash.style.fontSize = '25px';
            let contracts = menu_title('Contracts')
            contracts.style.color = "lightblue"
            contracts.style.borderBottom = '1px solid lightblue'
            contracts.style.position = 'absolute'
            contracts.style.top = '85px'
            contracts.style.fontSize = '25px'
            contracts.style.cursor = 'pointer'

            let launchPads = black_button('Launch Pads')
            launchPads.style.position = 'absolute'
            launchPads.style.top = '170px'
            launchPads.style.width = '49%'
            launchPads.style.left = '.5%'
            let engines = black_button('Engines')
            engines.style.position = 'absolute'
            engines.style.top = '170px'
            engines.style.width = '49%'
            engines.style.right = '.5%'

            let stages = black_button('Stages')
            stages.style.position = 'absolute'
            stages.style.top = '230px'
            stages.style.width = '49%'
            stages.style.left = '.5%'

            let recovery = black_button('Recovery')
            recovery.style.position = 'absolute'
            recovery.style.top = '230px'
            recovery.style.width = '49%'
            recovery.style.right = '.5%'

            let fueling = black_button('Fueling')
            fueling.style.position = 'absolute'
            fueling.style.top = '290px'
            fueling.style.width = '49%'
            fueling.style.left = '.5%'

            let cpu = black_button('CPU')
            cpu.style.position = 'absolute'
            cpu.style.top = '290px'
            cpu.style.width = '49%'
            cpu.style.right = '.5%'

            let launchBtn = green_button('Launch')
            launchBtn.style.position = 'absolute'
            launchBtn.style.bottom = '70px'

            launchBtn.onclick = ()=>{
                menu.style.display = 'none'
                rocket_node.buildPad = true
            }
            setTimeout(function() {
                menu.appendChild(rocketStore)
                menu.appendChild(cash)
                menu.appendChild(contracts)
                menu.appendChild(launchPads)
                menu.appendChild(menuBtn)
                menu.appendChild(launchBtn)
                menu.appendChild(engines)
                menu.appendChild(stages)
                menu.appendChild(recovery)
                menu.appendChild(fueling)
                menu.appendChild(cpu)
            }, 1000)
        }

        let percent = 0
        function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent) {
            const x = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
            const y = CubicN(percent, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
            return ({
                x: x,
                y: y
            });
        }
        function CubicN(pct, a, b, c, d) {
            const t2 = pct * pct;
            const t3 = t2 * pct;
            return a + (-a * 3 + pct * (3 * a - a * pct)) * pct + (3 * b + pct * (-6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 + d * t3;
        }

        window.requestAnimationFrame(animationFrame);
        function animationFrame(milliseconds) {
            let elapsed = milliseconds - lastStep;
            lastStep = milliseconds;
            render(elapsed);
            window.requestAnimationFrame(animationFrame);
        }

        function render(elapsed) {
            setCanvasSize();
            clearCanvas();
            paintBackground();
            paintForeground();
            buildPad();
            buildStage();
            buildCrane();
        }

        function buildPad() {
            let padWidth = 300
            let padHeight = 150
            ctx.beginPath()
            ctx.fillStyle = '#2e2d2d'
            roundRect(ctx, (window.innerWidth / 2) - 135, window.innerHeight - 200, padWidth, padHeight, 25, true, false);
            ctx.closePath();
            ctx.beginPath();
            ctx.ellipse((window.innerWidth / 2) + 15, window.innerHeight - 125, 100, 50, 0, 0, Math.PI * 2);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = 'black'
            roundRect(ctx, (window.innerWidth / 2) - 300, window.innerHeight - 75, 150, 20, 25, true, false);
            ctx.closePath();

        }

        function buildCrane() {
            ctx.beginPath();
            ctx.strokeStyle = '#1c1f1f'
            ctx.lineWidth = 20;
            ctx.moveTo((window.innerWidth / 2) - 225, window.innerHeight - 75)
            ctx.lineTo((window.innerWidth / 2) - 225, 200)
            ctx.lineCap = "round";
            ctx.stroke();
        }

        function buildFirstStage() {
        }

        function buildStage() {

            if (percent < 475) {
                percent += 1

            }
            let xy = getCubicBezierXYatPercent({
                x: -600,
                y: window.innerHeight
            }, {
                x: 0,
                y: window.innerHeight - 300
            }, {
                x: window.innerWidth,
                y: window.innerHeight - 300
            }, {
                x: window.innerWidth + 600,
                y: window.innerHeight
            }, (percent) / 1000);
            let xy2 = getCubicBezierXYatPercent({
                x: -600,
                y: window.innerHeight
            }, {
                x: 0,
                y: window.innerHeight - 300
            }, {
                x: window.innerWidth,
                y: window.innerHeight - 300
            }, {
                x: window.innerWidth + 600,
                y: window.innerHeight
            }, (percent + 60) / 1000);
            ctx.save()
            deliverStage(xy, xy2)
            buildFirstStage();
            ctx.restore()
            ctx.closePath();
        }

        function deliverStage(point1, point2) {
            let width = 70
            let height = 80
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.fillStyle = '#1c1f1f';
            ctx.lineWidth = 15;
            ctx.arc(point1.x, point1.y, 20, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.stroke();
            ctx.arc(point2.x, point2.y, 20, 0, Math.PI * 2, false);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            let da = distanceAndAngleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y)
            ctx.translate((point2.x), (point2.y))
            ctx.rotate(da.angle * Math.PI / 180);
            ctx.translate(-(point2.x), -(point2.y))
            roundRect(ctx, point2.x, point2.y - height, width, height, 25);
            ctx.lineWidth = 9;
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = "#1c1f1f";
            ctx.fillStyle = '#9c9c9c';
            ctx.lineWidth = 4;
            roundRect(ctx, point2.x + 9, point2.y - (height / 2), width - 17, (height / 2) - 3, {
                br: 25
            }, true);
            ctx.stroke();
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = '#9c9c9c';
            ctx.shadowColor = 'white';
            ctx.shadowBlur = 5;
            ctx.fillRect(point2.x - 260, point2.y - (height / 2) + 10, 250, 25)
            ctx.closePath();
        }

        function paintForeground() {
            ctx.beginPath();
            ctx.moveTo(-600, window.innerHeight);
            ctx.bezierCurveTo(0, window.innerHeight - 300, window.innerWidth, window.innerHeight - 300, window.innerWidth + 600, window.innerHeight);
            ctx.stroke();
            ctx.fillStyle = 'green'
            ctx.fill();
            ctx.closePath();
        }

        function paintBackground() {
            ctx.beginPath();
            let grd = ctx.createLinearGradient(0, window.innerHeight, window.innerWidth, -200);
            //let grd = ctx.createLinearGradient(window.innerHeight,0,0,window.innerWidth);
            grd.addColorStop(0, "lightblue");
            grd.addColorStop(1, "blue");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            ctx.closePath();
        }

        function setCanvasSize() {
            let scale = window.devicePixelRatio;
            c.width = window.innerWidth * scale;
            c.height = window.innerHeight * scale;
            c.style.width = window.innerWidth;
            c.style.height = window.innerHeight;
            ctx.scale(scale, scale);
        }

        function clearCanvas() {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, c.width, c.height);
        }

        iq_node.center.appendChild(c)
    }

    const blackJack_node = {
        players: {},
        cash: 5000,
        bet: 0,
        cards: {},
        dealer: {},
        selfTotal: 0,
        dealerTotal: 0,
        dealerUpCard: undefined,
        flipCard: false,
        flip: 0,
        doneFlipping: false,
        result: undefined,
        renderOptions: true,
        cardCount: 2,
        dealerCardCount: 2,
        active: false
    }

    const texas_node = {
        players: {},
        cash: 50000,
        stakes: $({
            a: 'div',
            style: 'position:absolute;background-color:rgba(0,0,0,0.5);left:0px;right:0px;top:0px;bottom:0px;'
        }),
        _500_1000: black_button('$500/$1,000'),
        smallBlind: undefined,
        bigBlind: undefined,
        hand: {},
        active: false
    }

    texas_node._500_1000.style.marginTop = '150px'

    texas_node._500_1000.onclick = ()=>{
        texas_node.smallBlind = 500
        texas_node.bigBlind = 1000
        iq_node.center.removeChild(texas_node.stakes)
        texas_node.active = true
    }

    texas_node.stakes.appendChild(texas_node._500_1000)

    const chip_node = {
        onTable: [],
        inMotion: [],
        toRemove: []
    }

    _.on('set_blackJack_table', (data)=>{
        const x = JSON.parse(data)
        console.log(x.players)
        blackJack_node.players = x.players
        blackJack_node.active = true
        texas_node.active = false
    }
    )

    _.on('set_texas_table', (data)=>{
        const x = JSON.parse(data)
        console.log(x)
        texas_node.players = x.players

        blackJack_node.active = false
        if (!iq_node.center.contains(texas_node.stakes)) {
            iq_node.center.appendChild(texas_node.stakes)
        }
        texas_node.username = x.username
    }
    )

    const poker = ()=>{
        let c = document.createElement('canvas');
        c.style.minWidth = '320px';
        let ctx = c.getContext("2d");
        let chipWidth = window.innerWidth / 25
        let lastStep = 0;
        let menu = game_menu()
        let blackJack = black_button('Black Jack')
        blackJack.style.position = 'absolute'
        blackJack.style.top = '100px'
        let texasHoldem = black_button("Texas Holdem'")
        texasHoldem.style.position = 'absolute'
        texasHoldem.style.top = '160px'
        let title = menu_title('Online Poker')
        title.style.position = 'absolute'
        title.style.top = '50px'
        let cashLabel = $({
            a: "label",
            text: 'Cash: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(blackJack_node.cash)
        })
        cashLabel.style.position = 'absolute'
        cashLabel.style.top = '100px'
        cashLabel.style.right = '50px'
        cashLabel.style.fontSize = '30px'
        cashLabel.style.userSelect = 'none'
        let bet = $({
            a: "label",
            text: 'Bet: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(blackJack_node.bet)
        })
        bet.style.position = 'absolute'
        bet.style.fontSize = '20px'
        bet.style.userSelect = 'none'
        bet.style.pointerEvents = 'none'
        bet.style.left = ((((window.innerWidth) - (chipWidth * 3)) + 1) - 60) + "px"
        menu.appendChild(title)
        menu.appendChild(blackJack)
        menu.appendChild(texasHoldem)
        menu.style.paddingLeft = '0px';
        iq_node.center.appendChild(menu)
        iq_node.center.appendChild(c)

        blackJack.onclick = ()=>{
            _.emit('join_blackJack_table')
            menu.style.display = 'none'
            iq_node.center.appendChild(cashLabel)
            iq_node.center.appendChild(bet)
        }

        texasHoldem.onclick = ()=>{
            _.emit('join_texas_table')
            menu.style.display = 'none'
            cashLabel.style.color = 'white'
            cashLabel.textContent = 'Cash: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(texas_node.cash)
            texas_node.stakes.appendChild(cashLabel)
        }

        window.requestAnimationFrame(animationFrame);
        function animationFrame(milliseconds) {
            let elapsed = milliseconds - lastStep;
            lastStep = milliseconds;
            render(elapsed);
            window.requestAnimationFrame(animationFrame);
        }

        function render(elapsed) {
            setCanvasSize();
            clearCanvas();
            if (blackJack_node.active == true) {
                renderBlackJack(elapsed)
            }
            if (texas_node.active == true) {
                renderTexas(elapsed)
            }
        }

        function renderTexas(elapsed) {
            chipWidth = window.innerHeight / 25

            if (chipWidth < 40) {
                chipWidth = 40
            }

            ctx.beginPath()
            ctx.strokeStyle = 'white'
            ctx.lineWidth = 2
            ctx.arc((window.innerWidth / 4), window.innerHeight - ((chipWidth + 35)), chipWidth, 0, Math.PI * 2)
            ctx.stroke()
            ctx.closePath()
            ctx.beginPath()
            ctx.textAlign = 'center'
            ctx.fillStyle = 'white'
            ctx.strokeStyle = 'black'
            ctx.font = "30px Arial";
            ctx.fillText(texas_node.username, window.innerWidth / 4, window.innerHeight - 10)

            ctx.closePath()
            ctx.beginPath()
            ctx.strokeStyle = 'white'
            ctx.arc((window.innerWidth / 2), 90 + chipWidth, chipWidth, 0, Math.PI * 2)
            ctx.stroke()
            ctx.fillText("bot", window.innerWidth / 2, 80)
            ctx.stroke()
            ctx.closePath()

            ctx.beginPath()
            ctx.strokeStyle = 'black'

            if (Object.keys(texas_node.players).length == 1) {}

        }

        function renderChip(xOffset, yOffset) {
            let i = 0
            let radians = 0.0
            let slices = 10
            for (i; i < slices; i++) {
                ctx.beginPath()
                let x = (chipWidth + xOffset) + Math.cos((i / slices) * Math.PI * 2) * (chipWidth)
                let y = window.innerHeight - (chipWidth + yOffset) + Math.sin((i / slices) * Math.PI * 2) * (chipWidth)
                ctx.moveTo(x, y)
                let da = distanceAndAngleBetweenTwoPoints(x, y, (chipWidth + xOffset), window.innerHeight - (chipWidth + yOffset))
                let velocity = da.distance / 0.5;
                let toMouseVector = new Vector(velocity,da.angle);
                if (i % 2 == 0) {
                    let x2 = (chipWidth + xOffset) + Math.cos(((i + 1) / slices) * Math.PI * 2) * (chipWidth)
                    let y2 = window.innerHeight - (chipWidth + yOffset) + Math.sin(((i + 1) / slices) * Math.PI * 2) * (chipWidth)
                    let da2 = distanceAndAngleBetweenTwoPoints(x2, y2, (chipWidth + xOffset), window.innerHeight - (chipWidth + yOffset))
                    let velocity2 = da2.distance / 0.5;
                    let toMouseVector2 = new Vector(velocity2,da2.angle);
                    ctx.beginPath()
                    ctx.moveTo(x, y)
                    ctx.lineTo(x + toMouseVector.magnitudeX * 0.15, y + toMouseVector.magnitudeY * 0.15)
                    ctx.lineTo(x2 + toMouseVector2.magnitudeX * 0.15, y2 + toMouseVector2.magnitudeY * 0.15)
                    ctx.lineTo(x2, y2)
                    ctx.arc(x2 + toMouseVector2.magnitudeX * 0.5, y2 + toMouseVector2.magnitudeY * 0.5, chipWidth, (radians + (1 / (slices / 2))) * Math.PI, radians * Math.PI, true);
                    ctx.fill()
                    ctx.stroke();
                    ctx.closePath()
                }
                radians += (1 / (slices / 2))
            }
        }

        function placeBet($) {
            blackJack_node.cash -= $
            cashLabel.textContent = 'Cash: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(blackJack_node.cash)
            blackJack_node.bet += $
            bet.textContent = 'Bet: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(blackJack_node.bet)
        }

        let dealCards = $({
            a: "div"
        })
        iq_node.center.appendChild(dealCards)

        let chipClick1 = $({
            a: "div"
        })
        iq_node.center.appendChild(chipClick1)

        let chipClick5 = $({
            a: "div"
        })
        iq_node.center.appendChild(chipClick5)

        let chipClick25 = $({
            a: "div"
        })
        iq_node.center.appendChild(chipClick25)

        let chipClick100 = $({
            a: "div"
        })
        iq_node.center.appendChild(chipClick100)

        let chipClick500 = $({
            a: "div"
        })
        iq_node.center.appendChild(chipClick500)

        let chipPile = $({
            a: "div"
        })
        iq_node.center.appendChild(chipPile)

        let hit = $({
            a: "div"
        })
        let stand = $({
            a: "div"
        })
        let double = $({
            a: "div"
        })
        let splie = $({
            a: "div"
        })
        let advice = $({
            a: "div"
        })

        function moveChip(elapsed, node, reverse) {
            let c1l = node.length
            for (let i = 0; i < node.length; i++) {
                let gx = false
                if (reverse == true) {
                    node[i].toY = window.innerHeight - (chipWidth + 10)
                    if (parseInt(node[i].value) == 1) {
                        node[i].toX = chipWidth + 10
                    } else if (parseInt(node[i].value) == 5) {
                        node[i].toX = chipWidth + ((window.innerWidth / 5))
                    } else if (parseInt(node[i].value) == 25) {
                        node[i].toX = chipWidth + ((window.innerWidth / 5) * 2)
                    } else if (parseInt(node[i].value) == 100) {
                        node[i].toX = chipWidth + ((window.innerWidth / 5) * 3)
                        if (node[i].x <= chipWidth + ((window.innerWidth / 5) * 3)) {
                            gx = true
                        }
                    } else if (parseInt(node[i].value) == 500) {
                        node[i].toX = chipWidth + ((window.innerWidth / 5) * 4)
                        if (node[i].x <= chipWidth + ((window.innerWidth / 5) * 4)) {
                            gx = true
                        }
                    }

                } else {
                    node[i].toX = ((window.innerWidth) - (chipWidth * 3)) + 1
                    node[i].toY = (window.innerHeight / 2) + (chipWidth + 20)
                }
                let data = distanceAndAngleBetweenTwoPoints(node[i].x, node[i].y, node[i].toX, node[i].toY);
                let velocity = data.distance / 0.2;
                let toMouseVector = new Vector(velocity,data.angle);
                let elapsedSeconds = elapsed / 1000;
                let x = (toMouseVector.magnitudeX * elapsedSeconds);
                let y = (toMouseVector.magnitudeY * elapsedSeconds);
                node[i].x += x;
                node[i].y += y;
                ctx.beginPath();
                ctx.arc(node[i].x, node[i].y, chipWidth, 0, Math.PI * 2);
                ctx.fillStyle = node[i].primaryColor;
                ctx.shadowBlur = 20;
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.strokeStyle = 'black'
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.fillStyle = node[i].valueColor
                ctx.textAlign = "center";
                ctx.font = chipWidth / 1.5 + "px Arial";
                ctx.fillText(node[i].value, node[i].x - 2, node[i].y + 8);
                ctx.closePath();
                ctx.lineWidth = 1;
                ctx.fillStyle = node[i].secondaryColor
                renderChip((node[i].x) - chipWidth, window.innerHeight - (node[i].y + chipWidth))
                if ((node[i].x) - 1 <= node[i].toX && (node[i].y) - 1 <= node[i].toY && gx == false) {
                    if (reverse != true) {
                        chip_node.onTable.push(node[i])
                    }
                    node.splice(i, 1)
                    i--;
                } else if ((node[i].x) - 1 >= node[i].toX && (node[i].y) - 1 <= node[i].toY && gx == true) {
                    node.splice(i, 1)
                    i--;
                }
            }
        }

        chipClick1.onclick = ()=>{
            placeBet(1)
            chip_node.inMotion.push({
                x: chipWidth + 10,
                y: window.innerHeight - (chipWidth + 10),
                primaryColor: 'white',
                secondaryColor: 'lightblue',
                value: '1',
                valueColor: 'black'
            })
        }

        chipClick5.onclick = ()=>{
            placeBet(5)
            chip_node.inMotion.push({
                x: chipWidth + (window.innerWidth / 5),
                y: window.innerHeight - (chipWidth + 10),
                primaryColor: 'darkred',
                secondaryColor: 'white',
                value: '5',
                valueColor: 'white'
            })
        }

        chipClick25.onclick = ()=>{
            placeBet(25)
            chip_node.inMotion.push({
                x: chipWidth + ((window.innerWidth / 5) * 2),
                y: window.innerHeight - (chipWidth + 10),
                primaryColor: '#fcba03',
                secondaryColor: 'white',
                value: '25',
                valueColor: 'black'
            })
        }

        chipClick100.onclick = ()=>{
            placeBet(100)
            chip_node.inMotion.push({
                x: chipWidth + ((window.innerWidth / 5) * 3),
                y: window.innerHeight - (chipWidth + 10),
                primaryColor: 'black',
                secondaryColor: 'white',
                value: '100',
                valueColor: 'white'
            })
        }

        chipClick500.onclick = ()=>{
            placeBet(500)
            chip_node.inMotion.push({
                x: chipWidth + ((window.innerWidth / 5) * 4),
                y: window.innerHeight - (chipWidth + 10),
                primaryColor: '#4f0778',
                secondaryColor: 'white',
                value: '500',
                valueColor: 'white'
            })
        }

        chipPile.onclick = ()=>{
            let otl = chip_node.onTable.length
            if (otl != 0) {
                placeBet(-parseInt(chip_node.onTable[otl - 1].value))
                chip_node.toRemove.push(chip_node.onTable[otl - 1])
                chip_node.onTable.splice((otl - 1), 1)
            }
        }

        function generateTotal(node, dealer) {
            let aces = 0
              , total = 0
            for (let key in node) {
                if (node.hasOwnProperty(key)) {
                    if (node[key].id != "A" && node[key].id != "K" && node[key].id != "Q" && node[key].id != "J") {
                        total += parseInt(node[key].id)
                    } else if (node[key].id != "A") {
                        total += 10
                    } else {
                        aces++
                    }
                }
            }
            if (aces != 0) {
                for (let i = 0; i < aces; i++) {
                    if (total + 11 <= 21) {
                        total += 11
                    } else {
                        total += 1
                    }
                }
            }

            if (dealer == true) {
                blackJack_node.dealerTotal = total
            } else {
                blackJack_node.selfTotal = total
            }

        }

        function generate_unique_cards(hand, required, onTable) {
            let total_cards = 0
            do {
                let potentialCard = {
                    suit: Math.floor(Math.random() * 4),
                    value: Math.floor(Math.random() * 13)
                }
                let suit, value, identifier
                if (potentialCard.suit == 0) {
                    suit = "hearts";
                    potentialCard.color = "#9c0606"
                } else if (potentialCard.suit == 1) {
                    suit = "diamonds";
                    potentialCard.color = "#9c0606"
                } else if (potentialCard.suit == 2) {
                    suit = "spades";
                    potentialCard.color = "black"
                } else if (potentialCard.suit == 3) {
                    suit = "clubs";
                    potentialCard.color = "black"
                }
                if (potentialCard.value == 0) {
                    value = "ace";
                    identifier = "A"
                } else if (potentialCard.value == 1) {
                    value = "two";
                    identifier = "2"
                } else if (potentialCard.value == 2) {
                    value = "three";
                    identifier = "3"
                } else if (potentialCard.value == 3) {
                    value = "four";
                    identifier = "4"
                } else if (potentialCard.value == 4) {
                    value = "five";
                    identifier = "5"
                } else if (potentialCard.value == 5) {
                    value = "six";
                    identifier = "6"
                } else if (potentialCard.value == 6) {
                    value = "seven";
                    identifier = "7"
                } else if (potentialCard.value == 7) {
                    value = "eight";
                    identifier = "8"
                } else if (potentialCard.value == 8) {
                    value = "nine";
                    identifier = "9"
                } else if (potentialCard.value == 9) {
                    value = "ten";
                    identifier = "10"
                } else if (potentialCard.value == 10) {
                    value = "jack";
                    identifier = "J"
                } else if (potentialCard.value == 11) {
                    value = "queen";
                    identifier = "Q"
                } else if (potentialCard.value == 12) {
                    value = "king";
                    identifier = "K"
                }
                let valid = true
                let id = value + " of " + suit
                potentialCard.id = identifier
                for (let key in hand) {
                    if (hand.hasOwnProperty(key)) {
                        if (key == id) {
                            valid = false
                        }
                    }
                }
                if (onTable) {
                    for (let i = 0; i < onTable.length; i++) {
                        for (let key in onTable[i]) {
                            if (onTable[i].hasOwnProperty(key)) {
                                if (key == id) {
                                    valid = false
                                }
                            }
                        }
                    }
                }
                if (valid == true) {
                    hand[id] = potentialCard
                    total_cards++
                } else if (total_cards == 52) {
                    hand[id] = potentialCard
                    total_cards++
                    total_cards = 0
                }
            } while (Object.keys(hand).length < required)
        }

        dealCards.onclick = ()=>{
            blackJack_node.cards = {}
            blackJack_node.dealer = {}

            blackJack_node.selfTotal = 0
            blackJack_node.dealerTotal = 0
            blackJack_node.flipCard = false
            blackJack_node.flip = 0
            blackJack_node.doneFlipping = false
            blackJack_node.result = undefined
            blackJack_node.renderOptions = true
            blackJack_node.cardCount = 2
            blackJack_node.dealerCardCount = 2

            generate_unique_cards(blackJack_node.dealer, blackJack_node.dealerCardCount)
            generate_unique_cards(blackJack_node.cards, blackJack_node.cardCount, [blackJack_node.dealer])

            if (!iq_node.center.contains(hit)) {
                iq_node.center.appendChild(hit)
            }

            if (!iq_node.center.contains(stand)) {
                iq_node.center.appendChild(stand)
            }

            if (iq_node.center.contains(dealCards)) {
                iq_node.center.removeChild(dealCards)
            }

            if (iq_node.center.contains(chipClick1)) {
                iq_node.center.removeChild(chipClick1)
            }

            if (iq_node.center.contains(chipClick5)) {
                iq_node.center.removeChild(chipClick5)
            }

            if (iq_node.center.contains(chipClick25)) {
                iq_node.center.removeChild(chipClick25)
            }

            if (iq_node.center.contains(chipClick100)) {
                iq_node.center.removeChild(chipClick100)
            }

            if (iq_node.center.contains(chipClick500)) {
                iq_node.center.removeChild(chipClick500)
            }

            if (iq_node.center.contains(chipPile)) {
                iq_node.center.removeChild(chipPile)
            }

            generateTotal(blackJack_node.selfTotal, false);
            generateTotal(blackJack_node.dealerTotal, true);

            if (blackJack_node.selfTotal == 21 && blackJack_node.dealerTotal != 21) {
                checkTotal()
            }
        }

        function topPile(node) {

            let x = (((window.innerWidth) - (chipWidth * 3)) + 1)
            let y = (window.innerHeight / 2) + (chipWidth + 20)
            chipPile.style.position = 'absolute'
            chipPile.style.right = chipWidth * 2
            chipPile.style.width = chipWidth * 2
            chipPile.style.height = chipWidth * 2
            chipPile.style.borderRadius = '50%'
            chipPile.style.top = ((window.innerHeight / 2) + (chipWidth + 20)) - chipWidth
            chipPile.style.cursor = 'pointer'
            ctx.beginPath();
            ctx.shadowBlur = 20;
            ctx.shadowColor = 'black';
            ctx.arc(x, y, chipWidth, 0, Math.PI * 2);
            ctx.fillStyle = node.primaryColor;
            ctx.fill();
            ctx.strokeStyle = 'black'
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.closePath();
            ctx.beginPath();
            ctx.fillStyle = node.valueColor
            ctx.textAlign = "center";
            ctx.font = chipWidth / 1.5 + "px Arial";
            ctx.fillText(node.value, x - 2, y + 8);
            ctx.closePath();
            ctx.lineWidth = 1;
            ctx.fillStyle = node.secondaryColor
            renderChip(x - chipWidth, window.innerHeight - (y + chipWidth))
        }

        function checkTotal() {
            let win, count = 0, bet = (blackJack_node.bet), increment = blackJack_node.bet / 100, cash = blackJack_node.cash

            if (blackJack_node.selfTotal > 21) {
                blackJack_node.result = "Bust"
                win = false
                //let count = 0;
                //let bet = blackJack_node.bet
                blackJack_node.cash -= blackJack_node.bet
                //let increment = blackJack_node.bet/100
            } else if (blackJack_node.selfTotal > blackJack_node.dealerTotal) {
                blackJack_node.result = "You Win"
                blackJack_node.cash += blackJack_node.bet
                win = true
            } else if (blackJack_node.selfTotal == blackJack_node.dealerTotal) {
                blackJack_node.result = "Push"
            } else if (blackJack_node.dealerTotal > 21) {
                blackJack_node.result = "Dealer Bust"
                blackJack_node.cash += blackJack_node.bet
                win = true
            } else {
                blackJack_node.result = "You Lose"
                blackJack_node.cash -= blackJack_node.bet
                win = false
            }
            blackJack_node.flipCard = true

            if (win != undefined) {
                let ss, ts
                if (win == false) {
                    ss = 'color:red;position:absolute;top:130px;font-size:20px;'
                    ts = '-$'
                } else if (win == true) {
                    ss = 'color:lightgreen;position:absolute;top:130px;font-size:20px;background-color:rgba(0,0,0,.5);padding-top:5px;padding-bottom:5px;padding-left:5px;padding-right:5px;border-radius:6px;'
                    ts = '+$'
                }
                let x = setInterval(function() {
                    if (count <= bet) {
                        let s;
                        if (win == true) {
                            s = cash + count
                        } else if (win == false) {
                            s = cash - count
                        }
                        ;cashLabel.textContent = 'Cash: ' + new Intl.NumberFormat('en-US',{
                            style: 'currency',
                            currency: 'USD'
                        }).format(s);
                        count += increment;
                    } else {
                        clearInterval(x)
                    }
                }, 1)
                let reflectChange = $({
                    a: 'label',
                    style: ss,
                    text: ts + blackJack_node.bet
                })
                reflectChange.style.left = ((((window.innerWidth) - (chipWidth * 3)) + 1) - 60) + "px"
                iq_node.center.appendChild(reflectChange)
                setTimeout(function() {
                    iq_node.center.removeChild(reflectChange)
                }, 1500)
            }

            cashLabel.textContent = 'Cash: ' + new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            }).format(blackJack_node.cash)
        }

        function drawSuit(card, x, y, cardWidth, cardHeight) {
            //console.log(suit)
            //ctx.save()
            //let scaleX = (100/(card.value+1))/x
            //let scaleY = (100/(card.value+1))/y
            if (card.suit == 0) {
                console.log("hearts")

                ctx.save()
                ctx.translate(x, y)
                /*
              if(card.value < 10){
                ctx.scale(scaleX,scaleY);
              }
              else{
                ctx.scale(50/x,50/y);
              }
              */
                ctx.scale(50 / x, 50 / y);
                ctx.translate(-x, -y)

                ctx.fillStyle = 'red'
                ctx.moveTo(x, y * (14 / 15));
                ctx.bezierCurveTo(x * (14 / 15), y * (10 / 15), x * (25 / 15), y * (10 / 15), x, y * (20 / 15));
                ctx.stroke()
                ctx.fill();
                ctx.closePath();
                ctx.beginPath();
                ctx.translate(x, y)
                ctx.scale(-1, 1);
                ctx.translate(-x, -y)
                ctx.moveTo(x, y * (14 / 15));
                ctx.bezierCurveTo(x * (14 / 15), y * (10 / 15), x * (25 / 15), y * (10 / 15), x, y * (20 / 15));
                ctx.stroke()
                ctx.fill();
                ctx.restore()
                ctx.fillStyle = 'black'
            } else if (card.suit == 1) {
                console.log('diamonds')

                ctx.fillStyle = 'red'
                ctx.save()
                ctx.translate(x, y)
                ctx.scale(50 / x, 50 / y);
                ctx.translate(-x, -y)
                ctx.moveTo(x, y * (10 / 15))
                ctx.lineTo(x * (18.5 / 15), y)
                ctx.lineTo(x, y * (20 / 15))
                ctx.lineTo(x * (11.5 / 15), y)
                ctx.lineTo(x, y * (10 / 15))
                ctx.stroke()
                ctx.fill()
                ctx.restore()
                ctx.fillStyle = 'black'
            } else if (card.suit == 2) {
                console.log("spade")
                ctx.save()
                ctx.fillStyle = 'black'
                ctx.moveTo(x, y);
                ctx.translate(x, y)
                ctx.scale(50 / x, 50 / y);
                ctx.rotate(180 * Math.PI / 180)
                ctx.translate(-x, -y)
                ctx.bezierCurveTo(x * (14 / 15), y * (10 / 15), x * (25 / 15), y * (10 / 15), x, y * (20 / 15));
                ctx.fill();
                ctx.stroke()
                ctx.closePath();
                ctx.translate(x, y)
                ctx.scale(-1, 1);
                ctx.translate(-x, -y)
                ctx.moveTo(x, y);
                ctx.bezierCurveTo(x * (14 / 15), y * (10 / 15), x * (25 / 15), y * (10 / 15), x, y * (20 / 15));
                ctx.stroke()
                ctx.fill()
                ctx.closePath()
                ctx.beginPath()
                ctx.moveTo(x, y)
                ctx.bezierCurveTo(x, y * (13 / 15), x, y * (10 / 15), x * (17 / 15), y * (9 / 15));
                ctx.lineTo(x * (13 / 15), y * (9 / 15))
                ctx.bezierCurveTo(x * (13 / 15), y * (9 / 15), x, y * (10 / 15), x, y);
                ctx.stroke()
                ctx.fill()
                ctx.restore()
            }
            //ctx.restore()

        }

        function renderBlackJackHand(node, x, y, dealer) {
            let card_shift = 0
              , total = 0
              , card_count = 0
              , aces = 0
            for (let key in node) {
                if (node.hasOwnProperty(key)) {
                    ctx.closePath()
                    ctx.beginPath()

                    if (dealer == true && card_count == 1) {
                        blackJack_node.dealerUpCard = node[key]
                    }
                    if (dealer == true && card_count == 0) {
                        ctx.fillStyle = '#9c0606'
                        ctx.strokeStyle = 'white'
                        ctx.lineWidth = 6
                        if (blackJack_node.flip < 1) {
                            ctx.save()
                            ctx.translate(x + card_shift, y)
                            ctx.transform(1 - (blackJack_node.flip), blackJack_node.flip, 0, 1, blackJack_node.flip * 50, 0);
                            ctx.translate(-(x + card_shift), -y)
                        } else {
                            ctx.save()
                            ctx.translate(x + card_shift, y)
                            ctx.transform(1 - (blackJack_node.flip), 2 - blackJack_node.flip, 0, 1, blackJack_node.flip * 50, 0);
                            ctx.translate(-(x + card_shift), -y)
                            ctx.fillStyle = 'white'
                            ctx.strokeStyle = 'black'
                            ctx.lineWidth = 2
                        }

                        ctx.rect(x + card_shift, y, 100, 160)
                        roundRect(ctx, x + card_shift, y, 100, 160, 5, true);
                        ctx.stroke()
                        ctx.restore()
                    } else {
                        ctx.fillStyle = 'white'
                        ctx.strokeStyle = 'black'
                        ctx.lineWidth = 2
                        ctx.rect(x + card_shift, y, 100, 160)
                        roundRect(ctx, x + card_shift, y, 100, 160, 5, true);
                        ctx.stroke()
                    }

                    ctx.lineWidth = 2

                    if (dealer == true && card_count == 0 && blackJack_node.flip < 1) {
                        if (blackJack_node.flipCard == true && blackJack_node.flip < 1) {
                            ctx.save()
                            ctx.translate(x + card_shift, y)
                            ctx.transform(1 - (blackJack_node.flip), blackJack_node.flip, 0, 1, blackJack_node.flip * 50, 0);
                            ctx.translate(-(x + card_shift), -y)
                        }
                        ctx.fillStyle = '#9c0606'

                        ctx.strokeStyle = 'black'
                        ctx.lineWidth = 1
                        ctx.stroke()
                        ctx.closePath()
                        ctx.beginPath()
                        ctx.moveTo((x + card_shift) + 50, y + 2)
                        ctx.strokeStyle = 'white'
                        ctx.lineTo((x + card_shift) + 50, y + 158)
                        ctx.stroke()
                        ctx.closePath()
                        ctx.beginPath()
                        ctx.moveTo((x + card_shift) + 2, y + 80)
                        ctx.strokeStyle = 'white'
                        ctx.lineTo((x + card_shift) + 98, y + 80)
                        ctx.stroke()
                        ctx.closePath()
                        let radius = 0;
                        let angle = 0;
                        ctx.beginPath();
                        ctx.moveTo((x + card_shift) + 50, y + 80);
                        ctx.strokeStyle = 'white'
                        for (let n = 0; n < 150; n++) {
                            radius += 0.32;
                            angle += (Math.PI * 2) / 8;
                            let X = ((x + card_shift) + 50) + radius * Math.cos(angle);
                            let Y = (y + 80) + radius * Math.sin(angle);
                            ctx.lineTo(X, Y);
                        }

                        ctx.stroke();
                        ctx.closePath()
                        ctx.beginPath()
                        ctx.moveTo((x + card_shift) + 50, y + 80);
                        ctx.lineTo((x + card_shift) + 98, y + 128)
                        ctx.lineTo((x + card_shift) + 2, y + 128)
                        ctx.lineTo((x + card_shift) + 98, y + 32)
                        ctx.lineTo((x + card_shift) + 2, y + 32)
                        ctx.lineTo((x + card_shift) + 50, y + 80);
                        ctx.fillStyle = 'black'
                        ctx.strokeStyle = 'white'
                        ctx.fill()
                        ctx.stroke()
                        if (blackJack_node.flipCard == true && blackJack_node.flip < 1) {
                            ctx.restore()
                        }
                    }
                    ctx.closePath()
                    if (dealer == false || card_count != 0 || blackJack_node.flip > 1) {
                        ctx.beginPath()
                        ctx.fillStyle = node[key].color
                        ctx.textAlign = "center";
                        ctx.font = "30px Arial";
                        if (node[key].color == 'black') {
                            ctx.strokeStyle = '#9c0606'
                        } else {
                            ctx.strokeStyle = 'black'
                        }
                        if (blackJack_node.flipCard == true && dealer == true && card_count == 0) {
                            ctx.save()
                            ctx.translate(x + card_shift, y)
                            ctx.transform(1 - (blackJack_node.flip), 2 - blackJack_node.flip, 0, 1, blackJack_node.flip * 50, 0);
                            ctx.translate(-(x + card_shift), -y)
                            ctx.save()
                            ctx.translate(x + (card_shift + 80), y + 30)
                            ctx.scale(-1, 1);
                            ctx.translate(-(x + (card_shift + 80)), -(y + 30))
                            ctx.strokeText(node[key].id, x + (card_shift + 80), y + 30);
                            ctx.fillText(node[key].id, x + (card_shift + 80), y + 30);
                            ctx.restore()
                            ctx.save()
                            ctx.translate(x + (card_shift + 20), y + 30)
                            ctx.rotate(180 * Math.PI / 180)
                            ctx.scale(-1, 1);
                            ctx.translate(-(x + (card_shift + 20)), -(y + 30))
                            ctx.strokeText(node[key].id, x + (card_shift + 20), y - 69);
                            ctx.fillText(node[key].id, x + (card_shift + 20), y - 69);
                            ctx.restore()
                            //ctx.restore()
                        } else {

                            ctx.strokeText(node[key].id, x + (card_shift + 20), y + 30);
                            ctx.fillText(node[key].id, x + (card_shift + 20), y + 30);
                            ctx.save()
                            ctx.translate(x + (card_shift + 20), y + 30)
                            ctx.rotate(180 * Math.PI / 180)
                            ctx.translate(-(x + (card_shift + 20)), -(y + 30))
                            ctx.strokeText(node[key].id, x + (card_shift - 38), y - 69);
                            ctx.fillText(node[key].id, x + (card_shift - 38), y - 69);

                            //drawSuit(node[key].suit)

                        }
                        ctx.restore()

                    }

                    drawSuit(node[key], (x + card_shift) + 50, y + 80, 100, 160)

                    if (node[key].id != "A" && node[key].id != "K" && node[key].id != "Q" && node[key].id != "J") {
                        total += parseInt(node[key].id)
                    } else if (node[key].id != "A") {
                        total += 10
                    } else {
                        aces++
                    }
                    ctx.closePath();
                    card_shift += 120
                    card_count += 1
                }
            }
            // two aces and one jack result in 22, but it should be 12
            if (aces != 0) {
                for (let i = 0; i < aces; i++) {
                    if (total + 11 <= 21) {
                        total += 11
                    } else {
                        total += 1
                    }
                }
            }
            if (dealer == false || blackJack_node.doneFlipping == true) {
                ctx.beginPath();
                ctx.lineWidth = 6
                ctx.textAlign = "center";
                ctx.fillStyle = 'white';
                ctx.strokeStyle = 'black'
                ctx.font = "35px New";
                if (dealer == true) {
                    ctx.save()
                    ctx.translate(window.innerWidth / 2, y - 30)
                    ctx.scale(-1, -1);
                    ctx.translate(-(window.innerWidth / 2), -(y - 30))
                    ctx.strokeText(total, window.innerWidth / 2, y - 30);
                    ctx.fillText(total, window.innerWidth / 2, y - 30);
                    ctx.restore()
                    ctx.save()
                    ctx.translate(window.innerWidth / 2, window.innerHeight / 2)
                    ctx.scale(-1, -1);
                    ctx.translate(-(window.innerWidth / 2), -(window.innerHeight / 2))
                    ctx.lineWidth = 3
                    ctx.strokeText(blackJack_node.result, window.innerWidth / 2, window.innerHeight / 2);
                    ctx.fillText(blackJack_node.result, window.innerWidth / 2, window.innerHeight / 2);
                    ctx.restore()
                    activateBetMode()
                    blackJack_node.renderOptions = false
                } else {
                    ctx.strokeText(total, window.innerWidth / 2, y - 30);
                    ctx.fillText(total, window.innerWidth / 2, y - 30);

                }
                blackJack_node.selfTotal = total
            } else {
                blackJack_node.dealerTotal = total
            }
        }

        const activateBetMode = ()=>{
            if (iq_node.center.contains(hit)) {
                iq_node.center.removeChild(hit)
            }

            if (iq_node.center.contains(stand)) {
                iq_node.center.removeChild(stand)
            }

            if (!iq_node.center.contains(dealCards)) {
                iq_node.center.appendChild(dealCards)
            }

            if (!iq_node.center.contains(chipClick1)) {
                iq_node.center.appendChild(chipClick1)
            }

            if (!iq_node.center.contains(chipClick5)) {
                iq_node.center.appendChild(chipClick5)
            }

            if (!iq_node.center.contains(chipClick25)) {
                iq_node.center.appendChild(chipClick25)
            }

            if (!iq_node.center.contains(chipClick100)) {
                iq_node.center.appendChild(chipClick100)
            }

            if (!iq_node.center.contains(chipClick500)) {
                iq_node.center.appendChild(chipClick500)
            }

            if (!iq_node.center.contains(chipPile)) {
                iq_node.center.appendChild(chipPile)
            }
        }

        let dt

        function dealerTurn() {
            let dealer = blackJack_node.dealerTotal
            let player = blackJack_node.selfTotal
            if (dealer < player && dealer < 21) {
                blackJack_node.dealerCardCount++
                generate_unique_cards(blackJack_node.dealer, blackJack_node.dealerCardCount, [blackJack_node.cards])
                generateTotal(blackJack_node.dealerTotal, true);
            } else {
                checkTotal()
                clearInterval(dt)
            }

        }

        stand.onclick = ()=>{

            dt = setInterval(function() {
                dealerTurn()
            }, 500)

        }

        hit.onclick = ()=>{
            blackJack_node.cardCount++
            console.log(blackJack_node.cardCount)
            generate_unique_cards(blackJack_node.cards, blackJack_node.cardCount, [blackJack_node.dealer])
            generateTotal(blackJack_node.cards, false)
            if (blackJack_node.selfTotal > 21) {
                checkTotal()
            }
        }

        function renderBlackJack(elapsed) {

            chipWidth = window.innerWidth / 25

            if (chipWidth < 40) {
                chipWidth = 40
            }

            bet.style.left = ((((window.innerWidth) - (chipWidth * 3)) + 1) - 60) + "px"

            let bll = chip_node.onTable.length
            if (bll != 0) {
                topPile(chip_node.onTable[bll - 1])
            }

            if (chip_node.inMotion.length != 0) {
                moveChip(elapsed, chip_node.inMotion, false)
            }

            if (chip_node.toRemove.length != 0) {
                moveChip(elapsed, chip_node.toRemove, true)
            }

            if (blackJack_node.flipCard == true) {
                if (blackJack_node.doneFlipping == false) {
                    blackJack_node.flip += .08
                }
                if (blackJack_node.flip >= 2) {
                    //blackJack_node.flipCard = false
                    blackJack_node.doneFlipping = true
                    //blackJack_node.flip = 0
                }
            }

            if (Object.keys(blackJack_node.cards).length != 0) {
                renderBlackJackHand(blackJack_node.cards, ((window.innerWidth / 2) - 105), window.innerHeight - (chipWidth + 250), false);
                ctx.save();
                ctx.translate(window.innerWidth / 2, window.innerHeight / 2)
                ctx.rotate(180 * Math.PI / 180)
                ctx.translate(-(window.innerWidth / 2), -(window.innerHeight) / 2)
                renderBlackJackHand(blackJack_node.dealer, ((window.innerWidth / 2) - 105), window.innerHeight - (chipWidth + 250), true);
                ctx.restore();

                if (blackJack_node.renderOptions == true) {
                    ctx.beginPath();
                    ctx.fillStyle = '#1c1f1f'
                    ctx.arc(chipWidth + (window.innerWidth / 5), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 2;
                    ctx.shadowColor = 'black';
                    ctx.shadowBlur = 20;
                    ctx.stroke();
                    ctx.fill()
                    ctx.closePath();
                    ctx.textAlign = "center";
                    ctx.fillStyle = "white"
                    ctx.font = chipWidth / 1.6 + "px Arial";
                    ctx.fillText('Hit', (chipWidth + (window.innerWidth / 5)) - 2, window.innerHeight - (chipWidth + 2));
                    ctx.closePath();

                    hit.style.position = 'absolute'
                    hit.style.left = (window.innerWidth / 5)
                    hit.style.width = chipWidth * 2
                    hit.style.height = chipWidth * 2
                    hit.style.borderRadius = '50%'
                    hit.style.bottom = 10
                    hit.style.cursor = 'pointer'

                    ctx.beginPath();
                    ctx.arc((chipWidth + (window.innerWidth / 5) * 2), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.font = chipWidth / 1.6 + "px Arial";
                    ctx.fillStyle = '#1c1f1f'
                    ctx.fillText('Stand', (chipWidth + (window.innerWidth / 5) * 2), window.innerHeight - (chipWidth + 2));
                    ctx.closePath();

                    stand.style.position = 'absolute'
                    stand.style.left = ((window.innerWidth / 5) * 2)
                    stand.style.width = chipWidth * 2
                    stand.style.height = chipWidth * 2
                    stand.style.borderRadius = '50%'
                    stand.style.bottom = 10
                    stand.style.cursor = 'pointer'

                    ctx.beginPath();
                    ctx.arc((chipWidth + (window.innerWidth / 5) * 3), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.font = chipWidth / 1.6 + "px Arial";
                    ctx.fillStyle = 'white'
                    ctx.fillText('Double', (chipWidth + (window.innerWidth / 5) * 3), window.innerHeight - (chipWidth + 2));
                    ctx.closePath();

                    ctx.beginPath();
                    ctx.arc((chipWidth + (window.innerWidth / 5) * 4), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.font = chipWidth / 1.6 + "px Arial";
                    ctx.fillStyle = '#1c1f1f'
                    ctx.fillText('Split', (chipWidth + (window.innerWidth / 5) * 4), window.innerHeight - (chipWidth + 2));
                    ctx.closePath();
                }

                if (blackJack_node.doneFlipping == true) {

                    ctx.beginPath()
                    ctx.rect(0, ((window.innerHeight / 4) * 3) - (chipWidth + 10), window.innerWidth, (chipWidth * 2) + 20)
                    ctx.fillStyle = "rgba(0,0,0,.5)"
                    ctx.fill()
                    ctx.closePath()
                }

            }
            if (blackJack_node.doneFlipping == true || Object.keys(blackJack_node.cards).length == 0) // no active hand
            {
                bet.style.top = window.innerHeight / 2
                ctx.beginPath();
                ctx.arc(window.innerWidth / 2, (window.innerHeight / 4) * 3, chipWidth, 0, Math.PI * 2);
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.shadowColor = 'black';
                ctx.shadowBlur = 20;
                ctx.stroke();
                if (blackJack_node.bet != 0) {
                    if (!iq_node.center.contains(dealCards)) {
                        iq_node.center.appendChild(dealCards)
                    }
                    ctx.textAlign = "center";
                    ctx.fillStyle = "white"
                    ctx.font = chipWidth / 1.6 + "px Arial";
                    ctx.fillText('Deal', (window.innerWidth / 2), ((window.innerHeight / 4) * 3) + 8);
                    dealCards.style.position = 'absolute'
                    dealCards.style.left = (window.innerWidth / 2) - chipWidth
                    dealCards.style.width = chipWidth * 2
                    dealCards.style.height = chipWidth * 2
                    dealCards.style.borderRadius = '50%'
                    dealCards.style.top = ((window.innerHeight / 4) * 3) - chipWidth
                    dealCards.style.cursor = 'pointer'
                } else {
                    if (iq_node.center.contains(dealCards)) {
                        iq_node.center.removeChild(dealCards)
                    }
                }

                ctx.lineWidth = 2;
                ctx.closePath();
                ctx.beginPath();
                ctx.arc(chipWidth + 10, window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                ctx.fillStyle = 'white';
                ctx.fill();
                ctx.shadowBlur = 0;
                ctx.strokeStyle = 'black'
                ctx.stroke();
                ctx.closePath();
                ctx.beginPath();
                ctx.fillStyle = 'black'
                ctx.textAlign = "center";
                ctx.font = chipWidth / 1.5 + "px Arial";
                ctx.fillText('1', chipWidth + 8, window.innerHeight - (chipWidth + 2));
                ctx.closePath();
                ctx.lineWidth = 1;
                ctx.fillStyle = 'lightblue'
                renderChip(10, 10)

                chipClick1.style.position = 'absolute'
                chipClick1.style.left = 10
                chipClick1.style.width = chipWidth * 2
                chipClick1.style.height = chipWidth * 2
                chipClick1.style.borderRadius = '50%'
                chipClick1.style.bottom = 10
                chipClick1.style.cursor = 'pointer'

                ctx.beginPath();
                ctx.arc(chipWidth + (window.innerWidth / 5), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                ctx.fillStyle = 'darkred';
                ctx.shadowColor = 'white';
                ctx.shadowBlur = 20;
                ctx.fill();
                ctx.stroke();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'white';
                renderChip(window.innerWidth / 5, 10)
                ctx.fillText('5', chipWidth + window.innerWidth / 5, window.innerHeight - (chipWidth + 2));

                chipClick5.style.position = 'absolute'
                chipClick5.style.left = (window.innerWidth / 5)
                chipClick5.style.width = chipWidth * 2
                chipClick5.style.height = chipWidth * 2
                chipClick5.style.borderRadius = '50%'
                chipClick5.style.bottom = 10
                chipClick5.style.cursor = 'pointer'

                ctx.closePath()
                ctx.beginPath();
                ctx.arc(chipWidth + ((window.innerWidth / 5) * 2), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                ctx.fillStyle = '#fcba03';
                ctx.shadowColor = 'black';
                ctx.shadowBlur = 20;
                ctx.fill();
                ctx.stroke();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'white'
                renderChip((window.innerWidth / 5) * 2, 10)
                ctx.fillStyle = 'black';
                ctx.fillText('25', chipWidth + (window.innerWidth / 5) * 2, window.innerHeight - (chipWidth + 2));

                chipClick25.style.position = 'absolute'
                chipClick25.style.left = (window.innerWidth / 5) * 2
                chipClick25.style.width = chipWidth * 2
                chipClick25.style.height = chipWidth * 2
                chipClick25.style.borderRadius = '50%'
                chipClick25.style.bottom = 10
                chipClick25.style.cursor = 'pointer'

                ctx.closePath()
                ctx.beginPath();
                ctx.arc(chipWidth + ((window.innerWidth / 5) * 3), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                ctx.fillStyle = 'black';
                ctx.shadowColor = 'white';
                ctx.shadowBlur = 20;
                ctx.fill();
                ctx.stroke();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'white'
                renderChip((window.innerWidth / 5) * 3, 10)
                ctx.fillStyle = 'white';
                ctx.fillText('100', chipWidth + (window.innerWidth / 5) * 2.99, window.innerHeight - (chipWidth + 2));

                chipClick100.style.position = 'absolute'
                chipClick100.style.left = (window.innerWidth / 5) * 3
                chipClick100.style.width = chipWidth * 2
                chipClick100.style.height = chipWidth * 2
                chipClick100.style.borderRadius = '50%'
                chipClick100.style.bottom = 10
                chipClick100.style.cursor = 'pointer'

                ctx.closePath()
                ctx.beginPath();
                ctx.arc(chipWidth + ((window.innerWidth / 5) * 4), window.innerHeight - (chipWidth + 10), chipWidth, 0, Math.PI * 2);
                ctx.fillStyle = '#4f0778';
                ctx.shadowColor = 'white';
                ctx.shadowBlur = 20;
                ctx.fill();
                ctx.stroke();
                ctx.shadowBlur = 0;
                ctx.fillStyle = 'white'
                renderChip((window.innerWidth / 5) * 4, 10)
                ctx.fillStyle = 'white';
                ctx.fillText('500', chipWidth + (window.innerWidth / 5) * 4, window.innerHeight - (chipWidth + 2));

                chipClick500.style.position = 'absolute'
                chipClick500.style.left = (window.innerWidth / 5) * 4
                chipClick500.style.width = chipWidth * 2
                chipClick500.style.height = chipWidth * 2
                chipClick500.style.borderRadius = '50%'
                chipClick500.style.bottom = 10
                chipClick500.style.cursor = 'pointer'
            }

        }

        function setCanvasSize() {
            let scale = 3;
            c.width = window.innerWidth * scale;
            c.height = window.innerHeight * scale;
            c.style.width = window.innerWidth;
            c.style.height = window.innerHeight;
            ctx.scale(scale, scale);
        }

        function clearCanvas() {
            ctx.globalCompositeOperation = "source-over";
            ctx.fillStyle = "green";
            ctx.fillRect(0, 0, c.width, c.height);
        }

    }

    node.iq.onclick = ()=>{
        const q_type1 = ()=>{
            random_box = Math.floor(Math.random() * 9) + 1;
            ap = Math.floor(Math.random() * 6) + 1;
            a = {};
            generate_rows(3, 1)
            generate_rows(2, 2)
        }

        const q_type2 = ()=>{
            q2()
        }
        const q_type3 = ()=>{
            q3()
        }

        let center = iq_node.center
        iq_node.center.innerHTML = ''
        node.main.innerHTML = ''
        node.main.appendChild(center)
        if (iq_node.test_questions == true) {
            if (!iq_node.center.contains(iq_node.next_question)) {
                iq_node.center.appendChild(iq_node.next_question)
            }
            let x = Math.floor(Math.random() * 3) + 1;
            iq_node.center.appendChild(iq_node.banner)

            if (x == 1) {
                q_type1()
            } else if (x == 2) {
                q_type2()
            } else if (x == 3) {
                q_type3()
            }
            return 0
        }

        if (iq_node.pong == true) {
            pong()
            return 0;
        }

        if (iq_node.online == true) {
            _.emit('join_room')
            online2()
            return 0;
        }
        if (iq_node.rocket == true) {
            rocket();
            return 0;
        }

        if (iq_node.poker == true) {
            poker();
            return 0;
        }

        if (iq_node.menu == true) {
            let m = $({
                a: "div",
                style: "background-color:rgba(0,0,0,.5);position:fixed;top:50px;bottom:0px;left:0px;right:0px;display:flex;align-items:center;justify-content:center;"
            })
            let c = $({
                a: "div",
                style: "position:absolute;top:50px;"
            })
            let cf = green_button("8 Question Culture Fair")
            cf.style.marginTop = '20px'
            let tq = red_button("Test Questions")
            tq.style.marginTop = "20px"
            let pong = black_button("Pong")
            pong.style.marginTop = '20px';
            let online = black_button("Online")
            online.style.marginTop = '20px'
            let rocket = black_button("Rocket")
            rocket.style.marginTop = '20px'
            let poker = black_button("Online Poker")
            poker.style.marginTop = '20px'
            c.appendChild($({
                a: "label",
                text: "Games",
                style: "color:white;font-size:30px;"
            }))
            c.appendChild(cf)
            c.appendChild(tq)
            c.appendChild(pong)
            c.appendChild(online)
            c.appendChild(rocket)
            c.appendChild(poker)
            m.appendChild(c)
            center.appendChild(m)
            cf.onclick = ()=>{
                _.emit('cf8_get_pb')
                iq_node.menu = false;
                node.iq.click()
                iq_node.totalSeconds = 0;
                clearInterval(iq_node.interval)
                iq_node.interval = setInterval(setTime, 1000);
                if (!center.contains(iq_node.next_question)) {
                    center.appendChild(iq_node.next_question)
                }
            }
            rocket.onclick = ()=>{
                iq_node.rocket = true
                node.iq.click()
            }
            tq.onclick = ()=>{
                iq_node.test_questions = true
                node.iq.click()
            }
            pong.onclick = ()=>{
                iq_node.pong = true
                node.iq.click()
            }
            poker.onclick = ()=>{
                iq_node.poker = true
                node.iq.click()
            }
            online.onclick = ()=>{
                _.emit('set_player_username')
                iq_node.online = true
                node.iq.click()
            }
            return 0;
        }

        if (!iq_node.center.contains(iq_node.next_question)) {
            iq_node.center.appendChild(iq_node.next_question)
        }

        if (iq_node.current_question == iq_node.total_questions + 1) {
            clearInterval(iq_node.interval)
            let results = $({
                a: "div",
                style: "background-color:rgba(0,0,0,.5);position:fixed;top:50px;bottom:0px;left:0px;right:0px;display:flex;align-items:center;justify-content:center;overflow-y:auto;"
            })
            let i = 0
            let l = iq_node.selected_answers.length
            let score = 0;
            for (i; i < l; i++) {
                if (iq_node.selected_answers[i].b == true) {
                    score += 1
                }
            }
            let top_results = $({
                a: "div",
                style: "display:flex;margin-bottom: 20px;"
            })
            let rd = $({
                a: "div",
                style: "position: absolute; top:0px;left:0px;right:0px;"
            })
            let result_div = $({
                a: "div",
                style: "border: 1px solid white; padding: 5px;height:150px;color:black;width:50%;display:flex;justify-content:center;align-items:center;"
            })
            top_results.appendChild(result_div)
            let rdd = $({
                a: "div"
            })
            rdd.appendChild($({
                a: "label",
                text: "Elapsed Time: ",
                style: "color:white;font-size:30px;display:block;"
            }))
            let s1 = " seconds"
            let sec = pad(iq_node.totalSeconds % 60)
            if (sec == 1) {
                s1 = " second"
            }
            let min = pad(parseInt(iq_node.totalSeconds / 60))
            let m1 = " minutes and "
            if (min == 1) {
                m1 = " minute and "
            }
            if (iq_node.totalSeconds >= 60) {
                rdd.appendChild($({
                    a: "label",
                    text: min + m1 + sec + s1,
                    style: "color:white;font-size:30px;display:block;margin-top:30px;"
                }))
            } else {
                rdd.appendChild($({
                    a: "label",
                    text: sec + s1,
                    style: "color:white;font-size:30px;display:block;margin-top:30px;"
                }))
            }
            rdd.appendChild($({
                a: "label",
                text: "Score: " + score + "/" + iq_node.total_questions,
                style: "color:white;font-size:30px;margin-top:30px;display:block;"
            }))
            result_div.appendChild(rdd)
            let new_pb = false
            if (iq_node.cf8_pb) {
                let pbb = $({
                    a: "div"
                })
                let pb_div = $({
                    a: "div",
                    style: "border: 1px solid white; padding: 5px;height:150px;margin-left:20px;width:50%;display:flex;justify-content:center;align-items:center;"
                })
                pbb.appendChild($({
                    a: "label",
                    text: "Best: ",
                    style: "color:white;font-size:30px;display:block;"
                }))
                pbb.appendChild($({
                    a: "label",
                    text: "Elapsed Time: ",
                    style: "color:white;font-size:20px;display:block;margin-top:30px;"
                }))
                pbb.appendChild($({
                    a: "label",
                    text: iq_node.cf8_pb.minutes + iq_node.cf8_pb.m1 + iq_node.cf8_pb.seconds + iq_node.cf8_pb.s1,
                    style: "color:white;font-size:20px;display:block;margin-top:20px;"
                }))
                pbb.appendChild($({
                    a: "label",
                    text: "Score: " + iq_node.cf8_pb.score + "/8",
                    style: "color:white;font-size:20px;display:block;margin-top:30px;"
                }))
                pb_div.appendChild(pbb)
                top_results.appendChild(pb_div)
                if (score > iq_node.cf8_pb.score) {
                    _.emit('cf8_set_pb', JSON.stringify({
                        minutes: parseInt(min),
                        m1: m1,
                        seconds: parseInt(sec),
                        s1: s1,
                        score: score
                    }))
                    new_pb = true
                } else if (score == iq_node.cf8_pb.score) {
                    if (parseInt(min) < iq_node.cf8_pb.minutes) {
                        _.emit('cf8_set_pb', JSON.stringify({
                            minutes: parseInt(min),
                            m1: m1,
                            seconds: parseInt(sec),
                            s1: s1,
                            score: score
                        }))
                        new_pb = true
                    } else if (parseInt(min) == iq_node.cf8_pb.minutes && parseInt(sec) < iq_node.cf8_pb.seconds) {
                        _.emit('cf8_set_pb', JSON.stringify({
                            minutes: parseInt(min),
                            m1: m1,
                            seconds: parseInt(sec),
                            s1: s1,
                            score: score
                        }))
                        new_pb = true
                    }
                }
            } else {
                result_div.style = "border: 1px solid white; padding: 5px;height:150px;color:black;width:100%;display:flex;justify-content:center;align-items:center;"
                rd.prepend(iq_node.new_pb)
                _.emit('cf8_set_pb', JSON.stringify({
                    minutes: parseInt(min),
                    m1: m1,
                    seconds: parseInt(sec),
                    s1: s1,
                    score: score
                }))
                new_pb = true
            }
            if (iq_node.leaderboard) {

                iq_node.lbx.innerHTML = ''
                iq_node.d2.appendChild(iq_node.d3x)
                iq_node.d2.appendChild(iq_node.d3)
                iq_node.d2.appendChild(iq_node.d4)
                iq_node.d2.appendChild(iq_node.d5)
                let ll = iq_node.leaderboard.length
                let olx = iq_node.leaderboard
                let ol = []
                if (new_pb == true) {
                    ol.push({
                        minutes: parseInt(min),
                        m1: m1,
                        seconds: parseInt(sec),
                        s1: s1,
                        score: score,
                        username: "Me",
                        self: true
                    })
                }
                for (let q = 0; q < 50 && q < ll; q++) {
                    ol.push(iq_node.leaderboard[q].data)
                }
                let oll = ol.length
                if (oll > 1) {
                    for (let z = oll - 1; z >= 0; z--) {
                        for (let x = oll - 1; x >= 0; x--) {
                            if (ol[z].score < ol[x].score) {
                                [ol[z],ol[x]] = [ol[x], ol[z]];
                            } else if (ol[z].score == ol[x].score) {
                                if (ol[z].minutes > ol[x].minutes) {
                                    [ol[z],ol[x]] = [ol[x], ol[z]];
                                } else if (ol[z].minutes == ol[x].minutes) {
                                    if (ol[z].seconds > ol[x].seconds) {
                                        [ol[z],ol[x]] = [ol[x], ol[z]];
                                    }
                                }
                            }
                        }
                    }
                }
                ll = ol.length
                for (let q = 0; q < 50 && q < ll; q++) {
                    let ss = "grid-col-start:1;grid-row-start:" + (3 + q) + ";width:100%;min-height:30px;border:1px solid black;display:grid;grid-template-columns: 13% 29% 29% 29%;"
                    if (ol[q].self == true) {
                        ss += "background-color:yellow;"
                    } else {
                        ss += "background-color:white;"
                    }
                    let d2 = $({
                        a: "div",
                        style: ss
                    })
                    d2.appendChild($({
                        a: "div",
                        style: "grid-col-start:1;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;display:flex;align-items:center;justify-content:center;",
                        text: "#" + (q + 1)
                    }))
                    let un = $({
                        a: "label",
                        style: "color:blue;border-bottom:1px solid blue;cursor:pointer;",
                        text: ol[q].username
                    })
                    un.onclick = ()=>{
                        _l_p(ol[q].username, false)
                    }
                    let ux = $({
                        a: "div",
                        style: "grid-col-start:2;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;display:flex;align-items:center;justify-content:center;"
                    })
                    ux.appendChild(un)
                    d2.appendChild(ux)
                    let sc = $({
                        a: "label",
                        style: "color:green;border-bottom:1px solid black;",
                        text: ol[q].score + ""
                    })
                    let s = $({
                        a: "div",
                        style: "grid-col-start:3;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;display:flex;align-items:center;justify-content:center;",
                        text: "/" + iq_node.total_questions
                    })
                    s.prepend(sc)
                    d2.appendChild(s)
                    if (ol[q].minutes != 0) {
                        d2.appendChild($({
                            a: "div",
                            style: "grid-col-start:4;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;display:flex;align-items:center;justify-content:center;",
                            text: ol[q].minutes + ol[q].m1 + ol[q].seconds + ol[q].s1
                        }))
                    } else {
                        d2.appendChild($({
                            a: "div",
                            style: "grid-col-start:4;grid-row-start:1;border:1px solid #dadcda;width:100%;height:100%;display:flex;align-items:center;justify-content:center;",
                            text: ol[q].seconds + ol[q].s1
                        }))
                    }
                    iq_node.lbx.appendChild(d2)
                }

                rd.prepend(iq_node.lb)
                if (new_pb == true) {
                    rd.prepend(iq_node.new_pb)
                }

                iq_node.lb.prepend(iq_node.d2)
                iq_node.lb.prepend(iq_node.l1)
            }
            let bd = $({
                a: "div"
            })
            bd.appendChild(iq_node.restart)
            bd.appendChild(iq_node.quit)
            rd.appendChild(top_results)
            results.appendChild(rd)
            rd.appendChild(bd)
            center.appendChild(results)
            return 0;
        }
        let question_counter = $({
            a: "div",
            style: "position:fixed;top:70px;left:40px;font-size:20px;color:white;"
        })
        let q_lab = $({
            a: "label",
            text: "Question: " + iq_node.current_question + "/" + iq_node.total_questions
        })
        question_counter.appendChild(q_lab)

        if (node.main.contains(node.stage)) {
            node.main.removeChild(node.stage)
        }
        center.appendChild(iq_node.timer)
        center.appendChild(question_counter)

        let q_type = Math.floor(Math.random() * 3) + 1;

        if (q_type == 1) {
            if (iq_node.line_questions > 0) {
                q_type1();
                iq_node.line_questions -= 1
            } else if (iq_node.star_questions > 0) {
                q_type2();
                iq_node.star_questions -= 1
            } else if (iq_node.circle_questions > 0) {
                q_type3()
                iq_node.circle_questions -= 1
            }
        } else if (q_type == 2) {
            if (iq_node.star_questions > 0) {
                q_type2();
                iq_node.star_questions -= 1
            } else if (iq_node.line_questions > 0) {
                q_type1();
                iq_node.line_questions -= 1
            } else if (iq_node.circle_questions > 0) {
                q_type3();
                iq_node.circle_questions -= 1
            }
        } else if (q_type == 3) {
            if (iq_node.circle_questions > 0) {
                q_type3()
                iq_node.circle_questions -= 1

            } else if (iq_node.line_questions > 0) {
                q_type1()
                iq_node.line_questions -= 1
            } else if (iq_node.star_questions > 0) {
                q_type2()
                iq_node.star_questions -= 1
            }
        }
        center.appendChild(iq_node.banner)
    }

    _.on('invalidSocket', ()=>{
        location.reload()
    }
    )
}
)();
