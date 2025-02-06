
import { KontaktPage } from './kontaktPage';

export class PageManager{

    private kontaktPage : KontaktPage;


    kontakt( kontakt:KontaktPage){
        this.kontaktPage= kontakt;
        return this.kontaktPage;
    }



}