import { Component } from "@angular/core";

@Component({
    selector: "product-checkout",
    moduleId: module.id,
    template: `

<ActionBar class="action-bar" title="Checkout"></ActionBar>

<GridLayout class="page" rows="auto, *, auto">
    <Label row="0" class="p-10 m-b-10" text="Please complete the following information"></Label>
    <RadDataForm row="1" tkExampleTitle tkToggleNavButton [source]="person">
        <TKEntityProperty tkDataFormProperty
            name="name"
            displayName="Name:"
            index="0">
        <TKNonEmptyValidator tkEntityPropertyValidators errorMessage="Please provide a name."></TKNonEmptyValidator>
        </TKEntityProperty>
        <TKEntityProperty tkDataFormProperty
            name="address"
            displayName="Address:"
            index="1">
        </TKEntityProperty>
        <TKEntityProperty tkDataFormProperty
            name="card"
            displayName="Card number:"
            index="2">
        </TKEntityProperty>
        <TKEntityProperty tkDataFormProperty
            name="expirationMonth"
            displayName="Exp. month:"
            valuesProvider="01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12"
            index="3">
            <TKPropertyEditor tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
        </TKEntityProperty>
        <TKEntityProperty tkDataFormProperty
            name="expirationYear"
            displayName="Exp. year:"
            valuesProvider="2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024"
            index="4">
            <TKPropertyEditor tkEntityPropertyEditor type="Picker"></TKPropertyEditor>
        </TKEntityProperty>
    </RadDataForm>
    <Button row="2" class="p-5 m-b-10" text="Complete order"></Button>
</GridLayout>
`
})
export class CheckoutComponent {
    person: Person;

    constructor() {
        this.person = new Person();
    }
}

class Person {
    public name: string;
    public address: string;
    public card: string;
    public expirationMonth: number;
    public expirationYear: number;

    constructor() {
        this.name = "";
        this.address = "";
        this.card = "";
        this.expirationMonth = 0;
        this.expirationYear = 0;
    }
}