import { EventEmitter } from './emitter';

const emitter = new EventEmitter();

const clickHandler = () => { console.log('clicked'); };
const clickHandlerAgain = () => { console.log('clicked again'); };
emitter.on('click', clickHandler);
emitter.trigger('click');

emitter.on('click', clickHandlerAgain);
emitter.trigger('click');

emitter.off('click', clickHandlerAgain);
emitter.trigger('click');

emitter.off('click');
console.log('last trigger');
emitter.trigger('click');

emitter.once('mouseover', () => {
    console.log('plz trigger once');
});
emitter.trigger('mouseover');
emitter.trigger('mouseover');
