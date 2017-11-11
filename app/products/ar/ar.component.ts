import { Component, OnInit } from "@angular/core";
import { Color } from "tns-core-modules/color";
import { PropertyChangeData } from "tns-core-modules/data/observable";

import { AR, ARDebugLevel, ARNode, ARPlaneTappedEventData, ARPosition, ARMaterial } from "nativescript-ar";
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
      debugLevel="FEATURE_POINTS"
      detectPlanes="true"
      [planeMaterial]="planeMaterial"
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
  public planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

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
      materials: [{
        diffuse: {
          contents: "Assets.scnassets/Materials/granitesmooth/granitesmooth-normal.png",
          wrapMode: "ClampToBorder"
        }
      }],
      position: {
        x: position.x,
        y: position.y + 0.7,
        z: position.z
      },
      dimensions: {
        x: 0.1,
        y: 0.1,
        z: 0.1
      },
      mass: 10,
      onLongPress: ((model: ARNode) => {
        model.remove();
      })
    });
  }
}
