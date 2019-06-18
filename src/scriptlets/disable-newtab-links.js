import { hit } from '../helpers';

/**
 * Prevents opening new tabs and windows if there is `target` attribute in element
 *
 * @param {Source} source
 */
export function disableNewtabLinks(source) {
    document.addEventListener('click', (ev) => {
        let { target } = ev;
        while (target !== null) {
            if (target.localName === 'a' && target.hasAttribute('target')) {
                ev.stopPropagation();
                ev.preventDefault();
                hit(source);
                break;
            }
            target = target.parentNode;
        }
    });
}

disableNewtabLinks.names = [
    'disable-newtab-links',
    'ubo-disable-newtab-links.js',
];

disableNewtabLinks.injections = [
    hit,
];