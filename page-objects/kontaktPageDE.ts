import {  Page } from "@playwright/test";;
import { KontaktPage } from './kontaktPage';
import { KontaktBody } from '../pojos/KontaktBody';
import { HelperBase } from './helperBase';
import { ResourcesDE } from '../env/resources';


export class KontaktPageDe extends HelperBase implements KontaktPage {
    constructor(page: Page){
        super(page);
    }
    async choseGender(gender: number): Promise<void> {
        /// 0:mr  1:mrs 2:mx
        await this.page.getByRole('radio').nth(gender).check();
    }

    async displayWarningText(): Promise<boolean> {
        const warningText = this.page.getByLabel('Contact form').getByText('In einem oder mehreren');
        try {
            await warningText.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }

    async clickCheckBox(): Promise<void> {
        await this.page.getByRole('checkbox', { name: 'Ich stimme zu, dass meine' }).check();
    }

    async loadKontaktPage(): Promise<void> {
        await this.page.goto(ResourcesDE.contactUrl);
    }
    
    async getKontaktPage(): Promise<void> {
        await this.page.locator('#menu-item-296').getByRole('link', { name: 'KONTAKT' }).click();   }

    async fillKontaktForm(user: KontaktBody): Promise<void> {
        await this.page.getByRole('textbox', { name: 'VORNAME*' }).click();
        await this.page.getByRole('textbox', { name: 'VORNAME*' }).fill(user.firstName);
        await this.page.getByRole('textbox', { name: 'NACHNAME*' }).click();
        await this.page.getByRole('textbox', { name: 'NACHNAME*' }).fill(user.lastName);
        await this.page.getByRole('textbox', { name: 'E-MAIL*' }).click();
        await this.page.getByRole('textbox', { name: 'E-MAIL*' }).fill(user.email);
        await this.page.getByRole('textbox', { name: 'TELEFON' }).click();
        await this.page.getByRole('textbox', { name: 'TELEFON' }).fill(user.phone);
        await this.page.getByRole('textbox', { name: 'STRASSE' }).click();
        await this.page.getByRole('textbox', { name: 'STRASSE' }).fill(user.streetNumber);
        await this.page.getByRole('textbox', { name: 'PLZ, ORT' }).click();
        await this.page.getByRole('textbox', { name: 'PLZ, ORT' }).fill(user.zipCodeCity);
        await this.page.getByRole('textbox', { name: 'IHRE NACHRICHT' }).click();
        await this.page.getByRole('textbox', { name: 'IHRE NACHRICHT' }).fill(user.yourMessage);
    }
    async clickSendButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Senden' }).click();
    }



}