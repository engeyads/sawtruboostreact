const menu = document.getElementById('toggle')
        const btn = document.getElementById('overlay')
        const topmenus = document.querySelector('.topmenu');

        const navbar = document.querySelector('.mainmenu');

        const logo = document.querySelector('.Logo');

        menu.addEventListener('click', function (e) {
            menu.classList.toggle('active')
            btn.classList.toggle('open');
        }, false)


        if (!isMobile) {

            if(document.getElementsByClassName('cursor').length > 0 && document.getElementsByClassName('cursorinner').length > 0){

            }else{
                let cursor = document.createElement('div');
                let cursorinner = document.createElement('div');
                var a = document.querySelectorAll('a');

                cursor.classList.add('cursor');
                cursorinner.classList.add('cursor2');
                document.body.appendChild(cursor);
                document.body.appendChild(cursorinner);
            }


            document.addEventListener('mousemove', function (e) {
                var x = e.clientX;
                var y = e.clientY;
                cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
            });

            document.addEventListener('mousemove', function (e) {
                var x = e.clientX;
                var y = e.clientY;
                cursorinner.style.left = x + 'px';
                cursorinner.style.top = y + 'px';
            });

            document.addEventListener('mousedown', function () {
                cursor.classList.add('click');
                cursorinner.classList.add('cursorinnerhover')
            });

            document.addEventListener('mouseup', function () {
                cursor.classList.remove('click')
                cursorinner.classList.remove('cursorinnerhover')
            });

            a.forEach(item => {
                item.addEventListener('mouseover', () => {
                    cursor.classList.add('hover');
                });
                item.addEventListener('mouseleave', () => {
                    cursor.classList.remove('hover');
                });
            })


            if (window.scrollY > 300) {
                navbar.classList.add('nav-active');

                btn.style.cssText = 'margin-top:-30px';
                navbar.style.cssText = 'margin-top:0';
                logo.style.cssText = 'margin-top:-30px';
            }
            if (window.scrollY < 300) {
                navbar.classList.remove('nav-active');
                navbar.style.cssText = 'margin-top:30px';
                logo.style.cssText = 'margin-top:-30px';
            }

            function mouseOver() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin-top:30px';
            }

            function mouseOut() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin:0';
            }

            topmenus.addEventListener("mouseover" ,mouseOver );
            topmenus.addEventListener("mouseout" ,mouseOut );
        }
        else{
            function mouseOver() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(5)').style = 'transition: all 0.35s ease;margin-top:30px';
                document.querySelector('.overlay ul li:nth-of-type(6)').style = 'transition: all 0.35s ease;margin-top:30px';
            }

            function mouseOut() {
                document.querySelector('.overlay ul li:nth-of-type(3)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(4)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(5)').style = 'transition: all 0.35s ease;margin:0';
                document.querySelector('.overlay ul li:nth-of-type(6)').style = 'transition: all 0.35s ease;margin:0';
            }

            topmenus.addEventListener("mouseover" ,mouseOver );
            topmenus.addEventListener("mouseout" ,mouseOut );
        }
