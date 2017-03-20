'use strict';

import template from './resume.jade';
import '../styles/resume.styl';

export default class Resume {
    constructor(options) {
        this.elem = document.createElement('div');
        this.elem.className = 'resume';

        this.elem.innerHTML = template(options);

        this.titleElem = this.elem.querySelector('.title');
    }
}
