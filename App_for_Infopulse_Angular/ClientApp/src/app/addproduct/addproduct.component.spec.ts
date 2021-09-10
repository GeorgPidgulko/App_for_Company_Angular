/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddproductComponent } from './addproduct.component';

let component: AddproductComponent;
let fixture: ComponentFixture<AddproductComponent>;

describe('addproduct component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddproductComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddproductComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});