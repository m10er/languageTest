import { test, expect } from '../fixtures/ui-fixture';
import { KontaktBody } from '../pojos/KontaktBody';
import Env from '../env/Env';
import { KontaktPageDe } from '../page-objects/kontaktPageDE';
import { KontaktPageEng } from '../page-objects/kontaktPageEng';

test.describe('Contact test', () => {
  

    test('Ohne Zustimmung zur Datennutzung sollte der Kontaktvorgang fehlschlagen.(Deutsch)', async ({ page,pageManager }) => {

        const user = new KontaktBody(Env.firstName, Env.lastName, Env.email, Env.phoneNumber, Env.adress , Env.zipcode, Env.message);

        const kontakt= new KontaktPageDe(page);

        await pageManager.kontakt(kontakt).loadKontaktPage();
        await pageManager.kontakt(kontakt).cokieAccept();
        await pageManager.kontakt(kontakt).choseGender(1);
        await pageManager.kontakt(kontakt).fillKontaktForm(user);
        await pageManager.kontakt(kontakt).clickSendButton();
        await expect(await pageManager.kontakt(kontakt).displayWarningText).toBeTruthy();

    });

    test('Ohne Zustimmung zur Datennutzung sollte der Kontaktvorgang fehlschlagen.(English)', async ({ page, pageManager  }) => {

        const user = new KontaktBody(Env.firstName, Env.lastName, Env.email, Env.phoneNumber, Env.adress , Env.zipcode, Env.message);

        const kontakt= new KontaktPageEng(page);

        await pageManager.kontakt(kontakt).loadKontaktPage();
        await pageManager.kontakt(kontakt).cokieAcceptEng();
        await pageManager.kontakt(kontakt).choseGender(1);
        await pageManager.kontakt(kontakt).fillKontaktForm(user);
        await pageManager.kontakt(kontakt).clickSendButton();
        await expect(await pageManager.kontakt(kontakt).displayWarningText).toBeTruthy();

    });
    
    
});
