module.exports = {
    data: function () {
        return {
            theme: 'dark',
        };
    },
    // insert the following code for vue-meta to work
    metaInfo() {
        return {
            title: `Pear Commerce &#8211; Connecting Consumers To The Products and Retailers They Love.`,
            meta: [
                {
                    name: 'description',
                    content: 'Connect and follow ' + this.greeting + ' on Epiloge - ' + this.greeting,
                },
            ],
        };
    },
    created() {
        console.log(this);
        // this.$parent.theme = this.theme;
    },
    mounted() {
        setREVStartSize({
            c: 'rev_slider_15_1',
            rl: [1240, 1240, 1240, 480],
            el: [700, 700, 700, 720],
            gw: [1400, 1400, 1400, 480],
            gh: [700, 700, 700, 720],
            type: 'hero',
            justify: '',
            layout: 'fullwidth',
            mh: '0',
        });
        let revapi15;
        let tpj;
        tpj = jQuery;
        if (tpj('#rev_slider_15_1').revolution == undefined) {
            revslider_showDoubleJqueryError('#rev_slider_15_1');
        } else {
            revapi15 = tpj('#rev_slider_15_1').show().revolution({
                sliderType: 'hero',
                jsFileLocation: '/wp-content/plugins/revslider/public/assets/js/',
                visibilityLevels: '1240,1240,1240,480',
                gridwidth: '1400,1400,1400,480',
                gridheight: '700,700,700,720',
                spinner: 'spinner2',
                forceOverflow: true,
                editorheight: '700,700,439,720',
                responsiveLevels: '1240,1240,1240,480',
                disableProgressBar: 'on',
                navigation: {
                    onHoverStop: false,
                },
                parallax: {
                    levels: [1, 2, 3, 20, 25, 30, 35, 40, 45, 50, 47, 48, 49, 50, 51, 30],
                    type: 'mousescroll',
                    origo: 'slidercenter',
                    speed: 2000,
                    disable_onmobile: true,
                },
                fallbacks: {
                    ignoreHeightChanges: '',
                    allowHTML5AutoPlayOnAndroid: true,
                },
            });
        }

        const htmlDivCss = ' #rev_slider_15_1_wrapper rs-loader.spinner2{ background-color: #FFFFFF !important; } ';
        var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
        if (htmlDiv) {
            htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
        } else {
            var htmlDiv = document.createElement('div');
            htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
            document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
        }
    },
};
