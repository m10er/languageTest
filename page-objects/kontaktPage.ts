import { HelperBase } from './helperBase';
import { KontaktBody } from '../pojos/KontaktBody';

export interface KontaktPage extends HelperBase {
    loadKontaktPage(): Promise<void>;
    getKontaktPage(): Promise<void>;
    fillKontaktForm(user: KontaktBody): Promise<void>;
    clickSendButton(): Promise<void>;
    clickCheckBox(): Promise<void>;
    displayWarningText():Promise<boolean>;
    choseGender(gender:number):Promise<void>;
}
