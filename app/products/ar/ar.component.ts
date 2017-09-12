import { Component, OnInit } from "@angular/core";
import { PropertyChangeData } from "tns-core-modules/data/observable";

import { AR, ARDebugLevel, ARNode, ARPlaneTappedEventData, IARPlane, ARPosition } from "nativescript-ar";
import { registerElement } from "nativescript-angular/element-registry";
registerElement("AR", () => require("nativescript-ar").AR);

@Component({
    selector: "ns-ar",
    moduleId: module.id,
    template: `

<ActionBar title="Reality View" class="action-bar"></ActionBar>

<GridLayout rows="auto, *">
    <Label row="0" [text]="hint" class="hint" textWrap="true"></Label>
    <AR row="1"
        (arLoaded)="arLoaded($event)"
        (planeDetected)="planeDetected($event)"
        (planeTapped)="planeTapped($event)">
    </AR>
</GridLayout>
`
})
export class ArComponent implements OnInit {
    private ar: AR;
    private firstPlaneDetected: boolean = false;
    private demoObject: "cube" | "plant" = "cube";
  
    hint: string;
    isSupported: boolean;

    ngOnInit(): void {
        this.isSupported = AR.isSupported();
        // if this is false on a modern iOS 11 device, rebuild in Xcode
        if (!this.isSupported) {
          this.hint = "THIS DEVICE DOESN'T SUPPORT AR ☹️";
        }
      }

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor() {
        console.log("AR supported? " + AR.isSupported());
    }

    arLoaded(args): void {
        this.ar = args.object;
        this.ar.toggleStatistics(false);
    }
    
      planeTapped(args: ARPlaneTappedEventData): void {
        // this.hint = `${this.demoObject} at ${args.position.x} y ${args.position.y} z ${args.position.z}`;
    
        this.addCube(args.position);
      }
    
      private addCube(position: ARPosition): void {
        this.ar.addCube({
          material: "granitesmooth",
          position: {x: position.x, y: position.y + 0.7, z: position.z},
          scale: 0.1,
          mass: 20,
          onLongPress: ((model: ARNode) => {
            model.remove();
          })
        });
      }
}
