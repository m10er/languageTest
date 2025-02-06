import { Page } from "@playwright/test";;
import { KontaktPage } from './kontaktPage';
import { KontaktBody } from '../pojos/KontaktBody';
import { HelperBase } from './helperBase';
import { ResourcesENG } from '../env/resources';

export class KontaktPageEng extends HelperBase implements KontaktPage {
    constructor(page: Page){
        super(page);
    }
    async choseGender(gender: number): Promise<void> {
        /// 0:mr  1:mrs 2:mx
        await this.page.getByRole('radio').nth(gender).check();
    }


    async displayWarningText(): Promise<boolean> {
        const warningText = this.page.getByLabel('Contact form', { exact: true }).getByText('An error has occurred in one');
        try {
            await warningText.waitFor({ state: 'visible' }); 
            return true;
        } catch {
            return false;
        }
    }
    async clickCheckBox(): Promise<void> {
        await this.page.getByRole('checkbox', { name: 'I agree that my data from the' }).check();
    }

    async loadKontaktPage(): Promise<void> {
        await this.page.goto(ResourcesENG.contactUrl);
    }
    
    async getKontaktPage(): Promise<void> {
        await this.page.locator('#menu-item-4232').getByRole('link', { name: 'CONTACT' }).click();  }

    async fillKontaktForm(user: KontaktBody): Promise<void> {
        await this.page.getByRole('textbox', { name: 'First name*' }).click();
        await this.page.getByRole('textbox', { name: 'First name*' }).fill(user.firstName);
        await this.page.getByRole('textbox', { name: 'Last name*' }).click();
        await this.page.getByRole('textbox', { name: 'Last name*' }).fill(user.lastName);
        await this.page.getByRole('textbox', { name: 'Email*' }).click();
        await this.page.getByRole('textbox', { name: 'Email*' }).fill(user.email);
        await this.page.getByRole('textbox', { name: 'Phone' }).click();
        await this.page.getByRole('textbox', { name: 'Phone' }).fill(user.phone);
        await this.page.getByRole('textbox', { name: 'Street, number' }).click();
        await this.page.getByRole('textbox', { name: 'Street, number' }).fill(user.streetNumber);
        await this.page.getByRole('textbox', { name: 'Zip code, city' }).click();
        await this.page.getByRole('textbox', { name: 'Zip code, city' }).fill(user.zipCodeCity);
        await this.page.getByRole('textbox', { name: 'Your message' }).click();
        await this.page.getByRole('textbox', { name: 'Your message' }).fill(user.yourMessage);
    }
    async clickSendButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }



}