import { Component } from "@angular/core";

@Component({
    selector: "product-checkout",
    moduleId: module.id,
    template: `

<ActionBar class="action-bar" title="Checkout"></ActionBar>

<ScrollView>
    <StackLayout class="page">
        <Label text="Please complete the following information to submit your order." class="m-10 m-b-20" fontSize="16" textWrap="true"></Label>
        <RadDataForm tkExampleTitle tkToggleNavButton [source]="person">
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
        <Button class="btn" text="Submit order"></Button>
    </StackLayout>
</ScrollView>
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