import { Component, OnInit } from "@angular/core";
import { PropertyChangeData } from "tns-core-modules/data/observable";

import { AR, ARDebugLevel, ARNode, ARPlaneTappedEventData, ARPosition } from "nativescript-ar";
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

  hint: string;
  isSupported: boolean;

  ngOnInit(): void {
    this.isSupported = AR.isSupported();
    if (!this.isSupported) {
      this.hint = "THIS DEVICE DOESN'T SUPPORT AR ☹️";
    }
  }

  constructor() {
    console.log("AR supported? " + AR.isSupported());
  }

  arLoaded(args): void {
    this.ar = args.object;
    this.ar.toggleStatistics(false);
  }
    
  planeTapped(args: ARPlaneTappedEventData): void {
    var position = args.position;
    this.ar.addBox({
      materials: ["Assets.scnassets/Materials/granitesmooth/granitesmooth-normal.png"],
      position: {
        x: position.x,
        y: position.y + 0.7,
        z: position.z
      },
      dimensions: {
        x: 0.25,
        y: 0.25,
        z: 0.25
      },
      scale: 0.1,
      mass: 20,
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }
}
