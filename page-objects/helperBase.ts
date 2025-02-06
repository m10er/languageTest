import { Page } from "@playwright/test"

export class HelperBase {
    readonly page : Page;

    constructor(page:Page){
        this.page = page;
    }

    async loadHomePage(url:string) {
        await this.page.goto(url);
    }

    async chooseEngLanguage() {
        await this.page.getByRole('link', { name: 'en', exact: true }).click();
    }

    async cokieAccept() {
        await this.page.getByRole('button', { name: 'Alle akzeptieren' }).click();
    }
    async cokieAcceptEng() {
        await this.page.getByRole('button', { name: 'Accept all' }).click();
    }

}