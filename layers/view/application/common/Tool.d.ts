import IAnyObject from '../../../../common/models/IAnyObject';
import BaseComponent from '../components/base/BaseComponent';
import ShadowMode from './ShadowMode';
export interface IToolInit {
    svgPathData: string;
    hint: string;
    description: string;
    deactivate(): void;
    activate(): void;
}
declare abstract class Tool extends BaseComponent {
    constructor(style?: IAnyObject, mode?: ShadowMode);
    svgPathData: string;
    hint: string;
    description: string;
    deactivate: () => any;
    activate: () => any;
    enable(): void;
    disable(): void;
    init(init: IToolInit): void;
    onclick: (event: MouseEvent) => void;
}
export default Tool;
