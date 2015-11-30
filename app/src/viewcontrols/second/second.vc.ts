import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class SecondViewControl extends BaseViewControl {
    templateString: string = require('./second.vc.html');

    context: any = {};
}

register.viewControl('second-vc', SecondViewControl);