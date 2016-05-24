import compile from 'string-template/compile';

const template = function(name, ...args) {
    if(!template.prototype.loaded.hasOwnProperty(name)) {
        const names = name.split('.');

        let n;
        let current = template.prototype.strings;

        while(n = names.shift()) {
            current = current[n];
        }

        template.prototype.loaded[name] = compile(current);
    }

    return template.prototype.loaded[name](...args);
};

template.prototype.loaded = {};

export default template;