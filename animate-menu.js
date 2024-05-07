    (function init() {
        var targets = document.querySelectorAll('.wixui-mega-menu-target');
        var container = document.querySelector('.wixui-dropdown-menu-collapsed');

        var onMutation = function () {
            const newHeight = getNewHeight(targets);
            container.setAttribute('style', `height:${newHeight}px;`);
        };
        var observer = new MutationObserver(onMutation);
        var config = {
            childList: true,
            subtree: true,
        };
        observer.observe(container, config);
    })()

    function getNewHeight(targets) {
        let newHeight = 0;
        targets.forEach(function (target) {
            newHeight = Math.max(newHeight, target.clientHeight);
        });
        return newHeight;
    }
